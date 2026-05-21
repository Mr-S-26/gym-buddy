"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Dumbbell,
  TrendingUp,
  Flame,
  Trophy,
  Settings,
  Zap,
  Scale,
  Plus,
  X,
} from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { db, type WorkoutSession, type BodyWeight } from "@/lib/db";
import { getSettings } from "@/lib/settings";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  YAxis,
  Tooltip,
} from "recharts";
import { WorkoutCalendar } from "@/components/workout-calendar";

export default function HomePage() {
  const [recentSessions, setRecentSessions] = useState<WorkoutSession[]>([]);
  const [stats, setStats] = useState({
    totalSessions: 0,
    totalSets: 0,
    thisWeekSessions: 0,
    streak: 0,
  });
  const [bodyWeights, setBodyWeights] = useState<BodyWeight[]>([]);
  const [showWeighIn, setShowWeighIn] = useState(false);
  const [weighInValue, setWeighInValue] = useState("");
  const [workoutDates, setWorkoutDates] = useState<Set<string>>(new Set());
  const unit = getSettings().unit;

  useEffect(() => {
    async function loadData() {
      const sessions = await db.sessions
        .orderBy("date")
        .reverse()
        .filter((s) => s.completed)
        .toArray();
      setRecentSessions(sessions.slice(0, 5));

      const allSets = await db.sets.count();
      const now = new Date();
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0];
      const thisWeek = sessions.filter((s) => s.date >= weekAgo).length;

      // Calculate streak (consecutive weeks with at least 1 session)
      const streak = calculateStreak(sessions);

      setStats({
        totalSessions: sessions.length,
        totalSets: allSets,
        thisWeekSessions: thisWeek,
        streak,
      });

      // Workout dates for calendar
      setWorkoutDates(new Set(sessions.map((s) => s.date)));

      // Body weights
      const bw = await db.bodyWeights.orderBy("date").toArray();
      setBodyWeights(bw);
    }

    function calculateStreak(sessions: WorkoutSession[]): number {
      if (sessions.length === 0) return 0;

      const now = new Date();
      let streak = 0;
      const checkDate = new Date(now);

      // Go back week by week
      for (let i = 0; i < 52; i++) {
        const weekStart = new Date(checkDate);
        weekStart.setDate(checkDate.getDate() - checkDate.getDay());
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + 6);

        const startStr = weekStart.toISOString().split("T")[0];
        const endStr = weekEnd.toISOString().split("T")[0];

        const hasSession = sessions.some(
          (s) => s.date >= startStr && s.date <= endStr
        );

        if (hasSession) {
          streak++;
          checkDate.setDate(checkDate.getDate() - 7);
        } else {
          break;
        }
      }
      return streak;
    }

    loadData();
  }, []);

  const logBodyWeight = async () => {
    const w = parseFloat(weighInValue);
    if (isNaN(w) || w <= 0) return;

    const entry: BodyWeight = {
      id: uuidv4(),
      date: new Date().toISOString().split("T")[0],
      weight: w,
      unit,
    };
    await db.bodyWeights.add(entry);
    setBodyWeights((prev) => [...prev, entry]);
    setWeighInValue("");
    setShowWeighIn(false);
  };

  const latestWeight = bodyWeights.length > 0
    ? bodyWeights[bodyWeights.length - 1].weight
    : null;

  const chartData = bodyWeights.slice(-14).map((bw) => ({
    date: bw.date,
    weight: bw.weight,
  }));

  return (
    <div className="p-4 max-w-md mx-auto space-y-5 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between pt-4">
        <div>
          <h1 className="text-2xl font-bold">
            Gym <span className="text-accent-orange">Buddy</span>
          </h1>
          <p className="text-muted text-sm mt-0.5">Your AI-powered coach</p>
        </div>
        <Link
          href="/settings"
          className="p-2 rounded-lg bg-card border border-card-border"
        >
          <Settings className="w-4 h-4 text-muted" />
        </Link>
      </div>

      {/* Quick Start */}
      <Link
        href="/workout"
        className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-accent-orange/20 to-accent-blue/20 border border-accent-orange/30 active:scale-[0.98] transition-transform"
      >
        <div className="w-12 h-12 rounded-full bg-accent-orange flex items-center justify-center">
          <Dumbbell className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="font-bold text-lg">Start Workout</p>
          <p className="text-muted text-sm">Begin a new training session</p>
        </div>
      </Link>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-2">
        <div className="p-2.5 rounded-xl bg-card border border-card-border text-center">
          <Flame className="w-4 h-4 text-accent-orange mx-auto mb-0.5" />
          <p className="text-lg font-bold">{stats.thisWeekSessions}</p>
          <p className="text-[10px] text-muted">This Week</p>
        </div>
        <div className="p-2.5 rounded-xl bg-card border border-card-border text-center">
          <Trophy className="w-4 h-4 text-accent-blue mx-auto mb-0.5" />
          <p className="text-lg font-bold">{stats.totalSessions}</p>
          <p className="text-[10px] text-muted">Sessions</p>
        </div>
        <div className="p-2.5 rounded-xl bg-card border border-card-border text-center">
          <TrendingUp className="w-4 h-4 text-success mx-auto mb-0.5" />
          <p className="text-lg font-bold">{stats.totalSets}</p>
          <p className="text-[10px] text-muted">Total Sets</p>
        </div>
        <div className="p-2.5 rounded-xl bg-card border border-card-border text-center">
          <Zap className="w-4 h-4 text-yellow-500 mx-auto mb-0.5" />
          <p className="text-lg font-bold">{stats.streak}</p>
          <p className="text-[10px] text-muted">Wk Streak</p>
        </div>
      </div>

      {/* Workout Calendar */}
      <div className="rounded-xl bg-card border border-card-border p-3">
        <p className="text-xs font-semibold text-muted mb-2 uppercase tracking-wider">
          Activity
        </p>
        <WorkoutCalendar workoutDates={workoutDates} />
      </div>

      {/* Body Weight Tracker */}
      <div className="rounded-xl bg-card border border-card-border p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Scale className="w-4 h-4 text-accent-blue" />
            <span className="font-semibold text-sm">Body Weight</span>
          </div>
          <div className="flex items-center gap-2">
            {latestWeight && (
              <span className="text-sm font-bold text-accent-orange">
                {latestWeight} {unit}
              </span>
            )}
            <button
              onClick={() => setShowWeighIn(!showWeighIn)}
              className="p-1 rounded-md bg-card-border/50"
            >
              {showWeighIn ? (
                <X className="w-3 h-3 text-muted" />
              ) : (
                <Plus className="w-3 h-3 text-muted" />
              )}
            </button>
          </div>
        </div>

        {showWeighIn && (
          <div className="flex gap-2 mb-2">
            <input
              type="number"
              inputMode="decimal"
              placeholder={`Weight (${unit})`}
              value={weighInValue}
              onChange={(e) => setWeighInValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && logBodyWeight()}
              className="flex-1 p-2 rounded-lg bg-background border border-card-border text-sm text-center focus:outline-none focus:border-accent-orange"
              autoFocus
            />
            <button
              onClick={logBodyWeight}
              className="px-3 py-2 rounded-lg bg-accent-orange text-white text-sm font-semibold"
            >
              Log
            </button>
          </div>
        )}

        {chartData.length >= 2 ? (
          <ResponsiveContainer width="100%" height={60}>
            <LineChart data={chartData}>
              <YAxis domain={["dataMin - 1", "dataMax + 1"]} hide />
              <Tooltip
                contentStyle={{
                  background: "#141414",
                  border: "1px solid #262626",
                  borderRadius: "8px",
                  fontSize: "11px",
                }}
                formatter={(v) => [`${v} ${unit}`, "Weight"]}
              />
              <Line
                type="monotone"
                dataKey="weight"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-[10px] text-muted text-center py-2">
            {bodyWeights.length === 0
              ? "Log your weight to track progress toward 80-82kg"
              : "Log a few more to see the trend"}
          </p>
        )}

        {bodyWeights.length > 0 && (
          <div className="flex justify-between text-[10px] text-muted mt-1">
            <span>
              Start: {bodyWeights[0].weight} {unit}
            </span>
            <span>
              Goal: 80-82 {unit}
            </span>
          </div>
        )}
      </div>

      {/* Recent Workouts */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-lg">Recent Workouts</h2>
          {recentSessions.length > 0 && (
            <Link
              href="/workout/history"
              className="text-xs text-accent-blue"
            >
              View All
            </Link>
          )}
        </div>
        {recentSessions.length === 0 ? (
          <div className="p-8 rounded-xl bg-card border border-card-border text-center">
            <Dumbbell className="w-8 h-8 text-muted mx-auto mb-2" />
            <p className="text-muted text-sm">No workouts yet</p>
            <p className="text-muted text-xs mt-1">
              Start your first session to see it here
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {recentSessions.map((session) => (
              <Link
                key={session.id}
                href={`/workout/history?id=${session.id}`}
                className="p-3 rounded-xl bg-card border border-card-border flex items-center justify-between"
              >
                <div>
                  <p className="font-semibold text-sm">{session.name}</p>
                  <p className="text-xs text-muted">
                    {new Date(session.date).toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                    })}
                    {session.duration && ` · ${session.duration} min`}
                  </p>
                </div>
                <div className="text-accent-orange text-xs font-medium">
                  View
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
