"use client";

import { useState, useRef, useEffect, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Bot,
  Loader2,
  TrendingUp,
  Zap,
  RefreshCw,
  Calendar,
  Send,
  ChevronDown,
  ChevronUp,
  Dumbbell,
  Eye,
  Shield,
} from "lucide-react";
import { db, type WorkoutSet } from "@/lib/db";
import { cn } from "@/lib/utils";

const MONITORING_DAYS = 30;

interface InsightCard {
  id: string;
  mode: string;
  title: string;
  content: string;
  timestamp: string;
}

export default function CoachPage() {
  return (
    <Suspense
      fallback={
        <div className="p-4 text-center text-muted">Loading...</div>
      }
    >
      <CoachContent />
    </Suspense>
  );
}

function CoachContent() {
  const searchParams = useSearchParams();
  const autoMode = searchParams.get("auto");
  const [insights, setInsights] = useState<InsightCard[]>(() => {
    if (typeof window === "undefined") return [];
    const cached = localStorage.getItem("coach-insights");
    if (cached) {
      try {
        return JSON.parse(cached);
      } catch {}
    }
    return [];
  });
  const [loading, setLoading] = useState<string | null>(null);
  const [sessionCount, setSessionCount] = useState(0);
  const [daysTracking, setDaysTracking] = useState(0);
  const [isMonitoring, setIsMonitoring] = useState(true);
  const [showChat, setShowChat] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatResponse, setChatResponse] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const [isOffline, setIsOffline] = useState(() => typeof window !== "undefined" ? !navigator.onLine : false);
  const autoTriggered = useRef(false);

  useEffect(() => {
    async function init() {
      const sessions = await db.sessions
        .orderBy("date")
        .filter((s) => s.completed)
        .toArray();
      setSessionCount(sessions.length);

      if (sessions.length > 0) {
        const firstDate = new Date(sessions[0].date);
        // Count first day as day 1, not day 0
        const days = Math.floor(
          (Date.now() - firstDate.getTime()) / (1000 * 60 * 60 * 24)
        ) + 1;
        setDaysTracking(days);
        setIsMonitoring(days < MONITORING_DAYS);
      }
    }
    init();

    // Offline detection
    const goOffline = () => setIsOffline(true);
    const goOnline = () => setIsOffline(false);
    window.addEventListener("offline", goOffline);
    window.addEventListener("online", goOnline);
    return () => {
      window.removeEventListener("offline", goOffline);
      window.removeEventListener("online", goOnline);
    };
  }, []);

  const saveInsights = useCallback((updated: InsightCard[]) => {
    setInsights(updated);
    localStorage.setItem("coach-insights", JSON.stringify(updated));
  }, []);

  const getWorkoutContext = useCallback(async (): Promise<string> => {
    const sessions = await db.sessions
      .orderBy("date")
      .reverse()
      .filter((s) => s.completed)
      .toArray();

    if (sessions.length === 0) return "";

    let context = "";
    for (const session of sessions.slice(0, 20)) {
      const sets = await db.sets
        .where("sessionId")
        .equals(session.id)
        .toArray();
      context += `\n${session.name} (${session.date}${session.duration ? `, ${session.duration}min` : ""}):\n`;
      const grouped = sets.reduce(
        (acc, s) => {
          if (!acc[s.exerciseName]) acc[s.exerciseName] = [];
          acc[s.exerciseName].push(s);
          return acc;
        },
        {} as Record<string, WorkoutSet[]>
      );
      for (const [name, exSets] of Object.entries(grouped)) {
        const setDetails = exSets
          .map(
            (s) =>
              `${s.weight > 0 ? `${s.weight}kg` : "BW"} x ${s.reps}${s.rpe ? ` @RPE${s.rpe}` : ""}`
          )
          .join(", ");
        context += `  ${name}: ${setDetails}\n`;
      }
    }

    // Add body weight data
    const bodyWeights = await db.bodyWeights.orderBy("date").toArray();
    if (bodyWeights.length > 0) {
      context += "\nBody Weight Log:\n";
      for (const bw of bodyWeights.slice(-10)) {
        context += `  ${bw.date}: ${bw.weight}${bw.unit}\n`;
      }
    }

    return context;
  }, []);

  const fetchInsight = useCallback(async (mode: string) => {
    setLoading(mode);
    try {
      const workoutContext = await getWorkoutContext();
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [],
          workoutContext,
          mode,
          isMonitoring,
          daysTracking,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      const monitoringTitles: Record<string, string> = {
        weekly: "Weekly Log Summary",
        post_workout: "Workout Logged",
        progression: "Data Collection Status",
      };
      const coachingTitles: Record<string, string> = {
        weekly: "Weekly Analysis",
        post_workout: "Workout Review",
        progression: "Progression Report",
      };
      const titles = isMonitoring ? monitoringTitles : coachingTitles;

      const card: InsightCard = {
        id: `${mode}-${Date.now()}`,
        mode,
        title: titles[mode] || mode,
        content: data.message,
        timestamp: new Date().toISOString(),
      };

      const updated = [card, ...insights.filter((i) => i.mode !== mode)];
      saveInsights(updated);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Could not reach AI coach. Check your connection.";
      const errorCard: InsightCard = {
        id: `error-${Date.now()}`,
        mode: "error",
        title: "Coach Unavailable",
        content: message,
        timestamp: new Date().toISOString(),
      };
      setInsights((prev) => [
        errorCard,
        ...prev.filter((i) => i.mode !== "error"),
      ]);
    } finally {
      setLoading(null);
    }
  }, [getWorkoutContext, isMonitoring, daysTracking, insights, saveInsights]);

  // Auto-trigger analysis when redirected from workout completion
  useEffect(() => {
    if (autoMode && !autoTriggered.current && sessionCount > 0) {
      autoTriggered.current = true;
      fetchInsight(autoMode);
    }
  }, [autoMode, sessionCount, fetchInsight]);

  const askCoach = async () => {
    if (!chatInput.trim() || chatLoading) return;
    setChatLoading(true);
    setChatResponse("");
    try {
      const workoutContext = await getWorkoutContext();
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: chatInput }],
          workoutContext,
          mode: "chat",
          isMonitoring,
          daysTracking,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setChatResponse(data.message);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Unknown error";
      setChatResponse(`Error: ${message}`);
    } finally {
      setChatLoading(false);
    }
  };

  const daysRemaining = Math.max(0, MONITORING_DAYS - daysTracking);
  // Progress combines days (70% weight) and sessions (30% weight)
  // Target: ~12 sessions in 30 days (M/W/F lifting = 12 sessions/month)
  const dayProgress = daysTracking / MONITORING_DAYS;
  const sessionProgress = Math.min(1, sessionCount / 12);
  const monitoringProgress = Math.min(
    100,
    Math.round((dayProgress * 0.7 + sessionProgress * 0.3) * 100)
  );

  const monitoringButtons = [
    {
      mode: "post_workout",
      label: "Log Review",
      icon: Eye,
      description: "See what was tracked from your last session",
      color: "text-accent-orange",
      bg: "bg-accent-orange/10 border-accent-orange/20",
    },
    {
      mode: "weekly",
      label: "Week Summary",
      icon: Calendar,
      description: "This week's training log summary",
      color: "text-accent-blue",
      bg: "bg-accent-blue/10 border-accent-blue/20",
    },
    {
      mode: "progression",
      label: "Data Status",
      icon: Shield,
      description: "How much baseline data has been collected",
      color: "text-success",
      bg: "bg-success/10 border-success/20",
    },
  ];

  const coachingButtons = [
    {
      mode: "post_workout",
      label: "Workout Review",
      icon: Zap,
      description: "Get feedback on your latest session",
      color: "text-accent-orange",
      bg: "bg-accent-orange/10 border-accent-orange/20",
    },
    {
      mode: "weekly",
      label: "Weekly Analysis",
      icon: Calendar,
      description: "Performance summary + recommendations",
      color: "text-accent-blue",
      bg: "bg-accent-blue/10 border-accent-blue/20",
    },
    {
      mode: "progression",
      label: "Progression Plan",
      icon: TrendingUp,
      description: "What to increase, maintain, or deload",
      color: "text-success",
      bg: "bg-success/10 border-success/20",
    },
  ];

  const buttons = isMonitoring ? monitoringButtons : coachingButtons;

  return (
    <div className="p-4 max-w-md mx-auto space-y-4 pb-24">
      {/* Header */}
      <div className="pt-4">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <Bot className="w-5 h-5 text-accent-orange" />
          AI Coach
        </h1>
        <p className="text-xs text-muted mt-1">
          {sessionCount} sessions logged · {daysTracking} days tracked
        </p>
      </div>

      {/* Mode Banner */}
      {sessionCount > 0 && (
        <div
          className={cn(
            "p-4 rounded-xl border",
            isMonitoring
              ? "bg-accent-blue/5 border-accent-blue/20"
              : "bg-success/5 border-success/20"
          )}
        >
          <div className="flex items-center gap-2 mb-2">
            {isMonitoring ? (
              <Eye className="w-4 h-4 text-accent-blue" />
            ) : (
              <Zap className="w-4 h-4 text-success" />
            )}
            <span className="font-bold text-sm">
              {isMonitoring ? "Monitoring Mode" : "Active Coaching"}
            </span>
          </div>
          {isMonitoring ? (
            <>
              <p className="text-xs text-muted leading-relaxed">
                Building your baseline profile. Tracking your lifts, RPE, and
                volume patterns. Active coaching begins in{" "}
                <span className="text-accent-blue font-semibold">
                  {daysRemaining} days
                </span>
                .
              </p>
              {/* Progress bar */}
              <div className="mt-3 h-2 bg-card-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent-blue rounded-full transition-all duration-500"
                  style={{ width: `${monitoringProgress}%` }}
                />
              </div>
              <p className="text-[10px] text-muted mt-1">
                {monitoringProgress}% of baseline data collected
              </p>
            </>
          ) : (
            <p className="text-xs text-muted leading-relaxed">
              Baseline established with {sessionCount} sessions over{" "}
              {daysTracking} days. Now providing personalized progression
              recommendations based on your data.
            </p>
          )}
        </div>
      )}

      {/* Offline Banner */}
      {isOffline && (
        <div className="p-3 rounded-xl bg-card-border/30 border border-card-border text-center">
          <p className="text-xs text-muted">
            You&apos;re offline. Showing cached insights.
          </p>
        </div>
      )}

      {/* No data state */}
      {sessionCount === 0 ? (
        <div className="p-8 rounded-xl bg-card border border-card-border text-center">
          <Dumbbell className="w-8 h-8 text-muted mx-auto mb-2" />
          <p className="text-muted text-sm">No workouts logged yet</p>
          <p className="text-muted text-xs mt-1">
            Complete your first workout to start the 30-day monitoring period
          </p>
        </div>
      ) : (
        <>
          {/* Analysis Buttons */}
          <div className="space-y-2">
            {buttons.map((btn) => (
              <button
                key={btn.mode}
                onClick={() => fetchInsight(btn.mode)}
                disabled={loading !== null || isOffline}
                className={cn(
                  "w-full p-4 rounded-xl border flex items-center justify-between active:scale-[0.98] transition-transform disabled:opacity-50",
                  btn.bg
                )}
              >
                <div className="flex items-center gap-3">
                  <btn.icon className={cn("w-5 h-5", btn.color)} />
                  <div className="text-left">
                    <p className="font-semibold text-sm">{btn.label}</p>
                    <p className="text-[10px] text-muted">{btn.description}</p>
                  </div>
                </div>
                {loading === btn.mode ? (
                  <Loader2 className="w-4 h-4 animate-spin text-muted" />
                ) : (
                  <RefreshCw className="w-4 h-4 text-muted" />
                )}
              </button>
            ))}
          </div>

          {/* Insight Cards */}
          {insights.map((insight) => (
            <InsightCardView key={insight.id} insight={insight} />
          ))}

          {/* Ask Coach (collapsible) */}
          <div className="rounded-xl bg-card border border-card-border overflow-hidden">
            <button
              onClick={() => setShowChat(!showChat)}
              className="w-full p-3 flex items-center justify-between"
            >
              <span className="text-sm font-semibold flex items-center gap-2">
                <Send className="w-4 h-4 text-muted" />
                Ask Coach
              </span>
              {showChat ? (
                <ChevronUp className="w-4 h-4 text-muted" />
              ) : (
                <ChevronDown className="w-4 h-4 text-muted" />
              )}
            </button>
            {showChat && (
              <div className="px-3 pb-3 space-y-2">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && askCoach()}
                    placeholder={
                      isMonitoring
                        ? "Ask a general question..."
                        : "e.g., Should I deload this week?"
                    }
                    className="flex-1 p-2 rounded-lg bg-background border border-card-border text-sm focus:outline-none focus:border-accent-orange placeholder:text-muted/50"
                  />
                  <button
                    onClick={askCoach}
                    disabled={!chatInput.trim() || chatLoading}
                    className="p-2 rounded-lg bg-accent-orange text-white disabled:opacity-50"
                  >
                    {chatLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {isMonitoring && (
                  <p className="text-[10px] text-muted">
                    During monitoring, coaching advice is limited. Full coaching
                    unlocks after 30 days.
                  </p>
                )}
                {chatResponse && (
                  <div className="p-3 rounded-lg bg-background text-sm whitespace-pre-wrap leading-relaxed">
                    {chatResponse}
                  </div>
                )}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

function InsightCardView({ insight }: { insight: InsightCard }) {
  const [expanded, setExpanded] = useState(true);
  const icons: Record<string, typeof Zap> = {
    post_workout: Zap,
    weekly: Calendar,
    progression: TrendingUp,
    error: Shield,
  };
  const colors: Record<string, string> = {
    post_workout: "text-accent-orange",
    weekly: "text-accent-blue",
    progression: "text-success",
    error: "text-danger",
  };
  const Icon = icons[insight.mode] || Bot;
  const color = colors[insight.mode] || "text-muted";
  const isError = insight.mode === "error";

  const timeAgo = getTimeAgo(insight.timestamp);

  return (
    <div className={cn(
      "rounded-xl border overflow-hidden",
      isError ? "bg-danger/5 border-danger/20" : "bg-card border-card-border"
    )}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-3 flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <Icon className={cn("w-4 h-4", color)} />
          <span className={cn("font-semibold text-sm", isError && "text-danger")}>{insight.title}</span>
          <span className="text-[10px] text-muted">{timeAgo}</span>
        </div>
        {expanded ? (
          <ChevronUp className="w-4 h-4 text-muted" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted" />
        )}
      </button>
      {expanded && (
        <div className="px-3 pb-3">
          <div className="text-sm whitespace-pre-wrap leading-relaxed text-foreground/90">
            {insight.content}
          </div>
        </div>
      )}
    </div>
  );
}

function getTimeAgo(timestamp: string): string {
  const diff = Date.now() - new Date(timestamp).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}
