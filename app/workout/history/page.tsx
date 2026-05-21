"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Dumbbell } from "lucide-react";
import { db, type WorkoutSession, type WorkoutSet } from "@/lib/db";

export default function WorkoutHistoryPage() {
  return (
    <Suspense
      fallback={
        <div className="p-4 max-w-md mx-auto pt-8 text-center text-muted">
          Loading...
        </div>
      }
    >
      <WorkoutHistoryContent />
    </Suspense>
  );
}

function WorkoutHistoryContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("id");
  const [session, setSession] = useState<WorkoutSession | null>(null);
  const [sets, setSets] = useState<WorkoutSet[]>([]);
  const [allSessions, setAllSessions] = useState<WorkoutSession[]>([]);

  useEffect(() => {
    if (sessionId) {
      db.sessions.get(sessionId).then((s) => s && setSession(s));
      db.sets
        .where("sessionId")
        .equals(sessionId)
        .toArray()
        .then(setSets);
    } else {
      db.sessions
        .orderBy("date")
        .reverse()
        .filter((s) => s.completed)
        .toArray()
        .then(setAllSessions);
    }
  }, [sessionId]);

  if (!sessionId) {
    return (
      <div className="p-4 max-w-md mx-auto">
        <h1 className="text-xl font-bold pt-4 mb-4">Workout History</h1>
        {allSessions.length === 0 ? (
          <div className="p-8 rounded-xl bg-card border border-card-border text-center">
            <Dumbbell className="w-8 h-8 text-muted mx-auto mb-2" />
            <p className="text-muted text-sm">No workouts logged yet</p>
          </div>
        ) : (
          <div className="space-y-2">
            {allSessions.map((s) => (
              <Link
                key={s.id}
                href={`/workout/history?id=${s.id}`}
                className="block p-4 rounded-xl bg-card border border-card-border"
              >
                <div className="flex items-center justify-between">
                  <p className="font-semibold">{s.name}</p>
                  <p className="text-xs text-muted">
                    {new Date(s.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
                {s.duration && (
                  <p className="text-xs text-muted mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {s.duration} min
                  </p>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  const grouped = sets.reduce(
    (acc, set) => {
      if (!acc[set.exerciseName]) acc[set.exerciseName] = [];
      acc[set.exerciseName].push(set);
      return acc;
    },
    {} as Record<string, WorkoutSet[]>
  );

  return (
    <div className="p-4 max-w-md mx-auto">
      <Link
        href="/workout/history"
        className="flex items-center gap-1 text-sm text-muted mb-4 pt-2"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </Link>

      {session && (
        <>
          <h1 className="text-xl font-bold">{session.name}</h1>
          <p className="text-sm text-muted mb-4">
            {new Date(session.date).toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
            {session.duration && ` · ${session.duration} min`}
          </p>
        </>
      )}

      <div className="space-y-3">
        {Object.entries(grouped).map(([name, sets]) => (
          <div
            key={name}
            className="p-3 rounded-xl bg-card border border-card-border"
          >
            <p className="font-semibold text-sm text-accent-orange mb-2">
              {name}
            </p>
            <div className="space-y-1">
              <div className="grid grid-cols-4 text-[10px] text-muted font-medium">
                <span>SET</span>
                <span>WEIGHT</span>
                <span>REPS</span>
                <span>RPE</span>
              </div>
              {sets.map((set) => (
                <div
                  key={set.id}
                  className="grid grid-cols-4 text-sm py-0.5"
                >
                  <span className="text-muted">{set.setNumber}</span>
                  <span>{set.weight > 0 ? `${set.weight}kg` : "BW"}</span>
                  <span>{set.reps}</span>
                  <span className="text-muted">{set.rpe || "-"}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
