"use client";

import { useEffect, useState } from "react";
import { Trophy, TrendingUp, BarChart3, Target, Layers } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import {
  db,
  type WorkoutSet,
  calculate1RM,
  getMuscleGroup,
} from "@/lib/db";
import { getSettings } from "@/lib/settings";

interface ExerciseProgress {
  name: string;
  data: { date: string; maxWeight: number; totalVolume: number; est1RM: number }[];
}

interface PR {
  exerciseName: string;
  weight: number;
  reps: number;
  date: string;
  est1RM: number;
}

export default function ProgressPage() {
  const unit = getSettings().unit;
  const [exerciseProgress, setExerciseProgress] = useState<ExerciseProgress[]>([]);
  const [prs, setPRs] = useState<PR[]>([]);
  const [weeklyVolume, setWeeklyVolume] = useState<
    { week: string; volume: number; sessions: number }[]
  >([]);
  const [selectedExercise, setSelectedExercise] = useState<string>("");
  const [muscleGroupVolume, setMuscleGroupVolume] = useState<
    { group: string; sets: number; volume: number }[]
  >([]);
  const [showChart, setShowChart] = useState<"weight" | "1rm" | "volume">("weight");

  useEffect(() => {
    async function loadProgress() {
    const sessions = await db.sessions
      .orderBy("date")
      .filter((s) => s.completed)
      .toArray();
    const allSets = await db.sets.toArray();

    // Group sets by exercise
    const byExercise: Record<string, WorkoutSet[]> = {};
    for (const set of allSets) {
      if (set.isWarmup) continue; // Skip warmup sets
      if (!byExercise[set.exerciseName]) byExercise[set.exerciseName] = [];
      byExercise[set.exerciseName].push(set);
    }

    // Calculate progress per exercise
    const progress: ExerciseProgress[] = [];
    const allPRs: PR[] = [];

    for (const [name, sets] of Object.entries(byExercise)) {
      // Group by session date
      const byDate: Record<string, WorkoutSet[]> = {};
      for (const set of sets) {
        const session = sessions.find((s) => s.id === set.sessionId);
        if (!session) continue;
        if (!byDate[session.date]) byDate[session.date] = [];
        byDate[session.date].push(set);
      }

      const data = Object.entries(byDate)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([date, dateSets]) => {
          const maxWeight = Math.max(...dateSets.map((s) => s.weight));
          const best1RM = Math.max(
            ...dateSets.map((s) => calculate1RM(s.weight, s.reps))
          );
          return {
            date: new Date(date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            }),
            maxWeight,
            totalVolume: dateSets.reduce((sum, s) => sum + s.weight * s.reps, 0),
            est1RM: best1RM,
          };
        });

      if (data.length > 0) {
        progress.push({ name, data });

        // Find PR (best estimated 1RM)
        const best = sets.reduce((max, s) => {
          const e1rm = calculate1RM(s.weight, s.reps);
          return e1rm > max.est1RM ? { set: s, est1RM: e1rm } : max;
        }, { set: sets[0], est1RM: 0 });
        const prSession = sessions.find((s) => s.id === best.set.sessionId);
        allPRs.push({
          exerciseName: name,
          weight: best.set.weight,
          reps: best.set.reps,
          date: prSession?.date || "",
          est1RM: best.est1RM,
        });
      }
    }

    setExerciseProgress(progress);
    setPRs(allPRs.sort((a, b) => b.est1RM - a.est1RM).slice(0, 10));
    if (progress.length > 0 && !selectedExercise) {
      setSelectedExercise(progress[0].name);
    }

    // Weekly volume
    const weekMap: Record<string, { volume: number; sessions: Set<string> }> = {};
    for (const set of allSets) {
      if (set.isWarmup) continue;
      const session = sessions.find((s) => s.id === set.sessionId);
      if (!session) continue;
      const date = new Date(session.date);
      const weekStart = new Date(date);
      weekStart.setDate(date.getDate() - date.getDay());
      const weekKey = weekStart.toISOString().split("T")[0];
      if (!weekMap[weekKey])
        weekMap[weekKey] = { volume: 0, sessions: new Set() };
      weekMap[weekKey].volume += set.weight * set.reps;
      weekMap[weekKey].sessions.add(set.sessionId);
    }

    setWeeklyVolume(
      Object.entries(weekMap)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([week, data]) => ({
          week: new Date(week).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          }),
          volume: Math.round(data.volume),
          sessions: data.sessions.size,
        }))
    );

    // Muscle group volume (last 7 days)
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    const weekAgoStr = weekAgo.toISOString().split("T")[0];

    const recentSessions = sessions.filter((s) => s.date >= weekAgoStr);
    const recentSessionIds = new Set(recentSessions.map((s) => s.id));

    const mgMap: Record<string, { sets: number; volume: number }> = {};
    for (const set of allSets) {
      if (set.isWarmup) continue;
      if (!recentSessionIds.has(set.sessionId)) continue;
      const mg = getMuscleGroup(set.exerciseName);
      if (!mgMap[mg]) mgMap[mg] = { sets: 0, volume: 0 };
      mgMap[mg].sets++;
      mgMap[mg].volume += set.weight * set.reps;
    }

    setMuscleGroupVolume(
      Object.entries(mgMap).map(([group, data]) => ({
        group: group.charAt(0).toUpperCase() + group.slice(1),
        sets: data.sets,
        volume: Math.round(data.volume),
      }))
    );
    }
    loadProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectedData = exerciseProgress.find(
    (e) => e.name === selectedExercise
  );

  return (
    <div className="p-4 max-w-md mx-auto space-y-6 pb-24">
      <div className="pt-4">
        <h1 className="text-xl font-bold">Progress</h1>
        <p className="text-xs text-muted">Track your gains</p>
      </div>

      {exerciseProgress.length === 0 ? (
        <div className="p-8 rounded-xl bg-card border border-card-border text-center">
          <BarChart3 className="w-8 h-8 text-muted mx-auto mb-2" />
          <p className="text-muted text-sm">No data yet</p>
          <p className="text-muted text-xs mt-1">
            Log some workouts to see your progress
          </p>
        </div>
      ) : (
        <>
          {/* Exercise Selector */}
          <div>
            <label className="text-xs text-muted block mb-2">Exercise</label>
            <select
              value={selectedExercise}
              onChange={(e) => setSelectedExercise(e.target.value)}
              className="w-full p-2 rounded-lg bg-card border border-card-border text-sm focus:outline-none focus:border-accent-orange"
            >
              {exerciseProgress.map((e) => (
                <option key={e.name} value={e.name}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>

          {/* Chart Type Selector */}
          <div className="flex gap-1 p-1 rounded-lg bg-card border border-card-border">
            {(
              [
                { key: "weight", label: "Weight" },
                { key: "1rm", label: "Est. 1RM" },
                { key: "volume", label: "Volume" },
              ] as const
            ).map((opt) => (
              <button
                key={opt.key}
                onClick={() => setShowChart(opt.key)}
                className={`flex-1 px-2 py-1.5 rounded-md text-xs font-semibold transition-colors ${
                  showChart === opt.key
                    ? "bg-accent-orange text-white"
                    : "text-muted"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Chart */}
          {selectedData && (
            <div className="p-3 rounded-xl bg-card border border-card-border">
              <p className="text-sm font-semibold mb-3 flex items-center gap-2">
                {showChart === "1rm" ? (
                  <Target className="w-4 h-4 text-accent-orange" />
                ) : (
                  <TrendingUp className="w-4 h-4 text-accent-blue" />
                )}
                {showChart === "weight"
                  ? "Weight Progression"
                  : showChart === "1rm"
                    ? "Estimated 1RM"
                    : "Volume per Session"}
              </p>
              <ResponsiveContainer width="100%" height={180}>
                <LineChart data={selectedData.data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
                  <XAxis
                    dataKey="date"
                    tick={{ fontSize: 10, fill: "#737373" }}
                  />
                  <YAxis tick={{ fontSize: 10, fill: "#737373" }} />
                  <Tooltip
                    contentStyle={{
                      background: "#141414",
                      border: "1px solid #262626",
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey={
                      showChart === "weight"
                        ? "maxWeight"
                        : showChart === "1rm"
                          ? "est1RM"
                          : "totalVolume"
                    }
                    stroke={showChart === "1rm" ? "#f97316" : "#3b82f6"}
                    strokeWidth={2}
                    dot={{
                      fill: showChart === "1rm" ? "#f97316" : "#3b82f6",
                      r: 3,
                    }}
                    name={
                      showChart === "weight"
                        ? `Max Weight (${unit})`
                        : showChart === "1rm"
                          ? `Est. 1RM (${unit})`
                          : `Volume (${unit})`
                    }
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}

          {/* Muscle Group Volume */}
          {muscleGroupVolume.length > 0 && (
            <div className="p-3 rounded-xl bg-card border border-card-border">
              <p className="text-sm font-semibold mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-success" />
                Weekly Volume by Muscle Group
              </p>
              <div className="space-y-2">
                {muscleGroupVolume.map((mg) => {
                  const maxSets = Math.max(
                    ...muscleGroupVolume.map((m) => m.sets)
                  );
                  return (
                    <div key={mg.group}>
                      <div className="flex items-center justify-between text-xs mb-0.5">
                        <span className="font-medium">{mg.group}</span>
                        <span className="text-muted">
                          {mg.sets} sets · {mg.volume} {unit}
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-card-border/50 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-success"
                          style={{
                            width: `${(mg.sets / maxSets) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Weekly Volume Chart */}
          {weeklyVolume.length > 0 && (
            <div className="p-3 rounded-xl bg-card border border-card-border">
              <p className="text-sm font-semibold mb-3 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-accent-orange" />
                Weekly Volume
              </p>
              <ResponsiveContainer width="100%" height={150}>
                <BarChart data={weeklyVolume}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
                  <XAxis
                    dataKey="week"
                    tick={{ fontSize: 10, fill: "#737373" }}
                  />
                  <YAxis tick={{ fontSize: 10, fill: "#737373" }} />
                  <Tooltip
                    contentStyle={{
                      background: "#141414",
                      border: "1px solid #262626",
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                  />
                  <Bar
                    dataKey="volume"
                    fill="#f97316"
                    radius={[4, 4, 0, 0]}
                    name={`Volume (${unit})`}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

          {/* PRs */}
          {prs.length > 0 && (
            <div>
              <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-yellow-500" />
                Personal Records
              </p>
              <div className="space-y-2">
                {prs.map((pr, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-card border border-card-border flex items-center justify-between"
                  >
                    <div>
                      <p className="font-semibold text-sm">
                        {pr.exerciseName}
                      </p>
                      <p className="text-xs text-muted">{pr.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-accent-orange">
                        {pr.weight > 0 ? `${pr.weight}${unit}` : "BW"} x{" "}
                        {pr.reps}
                      </p>
                      {pr.est1RM > 0 && (
                        <p className="text-[10px] text-muted">
                          Est. 1RM: {pr.est1RM}
                          {unit}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
