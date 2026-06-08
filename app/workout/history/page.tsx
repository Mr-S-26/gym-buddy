"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Dumbbell,
  Wrench,
  X,
  Flame,
  Trash2,
} from "lucide-react";
import { db, type WorkoutSession, type WorkoutSet } from "@/lib/db";
import { getSettings } from "@/lib/settings";
import { cn } from "@/lib/utils";

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
  const unit = getSettings().unit;
  const [session, setSession] = useState<WorkoutSession | null>(null);
  const [sets, setSets] = useState<WorkoutSet[]>([]);
  const [allSessions, setAllSessions] = useState<WorkoutSession[]>([]);

  // Edit state
  const [editingSet, setEditingSet] = useState<WorkoutSet | null>(null);
  const [editWeight, setEditWeight] = useState("");
  const [editReps, setEditReps] = useState("");
  const [editRpe, setEditRpe] = useState("");
  const [editIsWarmup, setEditIsWarmup] = useState(false);

  // Fix status
  const [fixMessage, setFixMessage] = useState<string | null>(null);

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

  const fixSetNumbers = async () => {
    // Group sets by exercise, then re-number sequentially
    const grouped: Record<string, WorkoutSet[]> = {};
    for (const set of sets) {
      if (!grouped[set.exerciseName]) grouped[set.exerciseName] = [];
      grouped[set.exerciseName].push(set);
    }

    let fixCount = 0;
    const updatedSets = [...sets];

    for (const [, exSets] of Object.entries(grouped)) {
      // Sort by timestamp to preserve order
      exSets.sort((a, b) => a.timestamp.localeCompare(b.timestamp));
      for (let i = 0; i < exSets.length; i++) {
        const correctNumber = i + 1;
        if (exSets[i].setNumber !== correctNumber) {
          await db.sets.update(exSets[i].id, { setNumber: correctNumber });
          const idx = updatedSets.findIndex((s) => s.id === exSets[i].id);
          if (idx !== -1) {
            updatedSets[idx] = { ...updatedSets[idx], setNumber: correctNumber };
          }
          fixCount++;
        }
      }
    }

    setSets(updatedSets);
    setFixMessage(
      fixCount > 0
        ? `Fixed ${fixCount} set number${fixCount > 1 ? "s" : ""}.`
        : "All set numbers are already correct."
    );
    setTimeout(() => setFixMessage(null), 3000);
  };

  const startEdit = (set: WorkoutSet) => {
    setEditingSet(set);
    setEditWeight(String(set.weight));
    setEditReps(String(set.reps));
    setEditRpe(set.rpe ? String(set.rpe) : "");
    setEditIsWarmup(set.isWarmup || false);
  };

  const saveEdit = async () => {
    if (!editingSet) return;
    const weight = parseFloat(editWeight);
    const reps = parseInt(editReps);
    if (isNaN(reps)) return;

    const updates: Partial<WorkoutSet> = {
      weight: isNaN(weight) ? 0 : weight,
      reps,
      rpe: editRpe ? parseInt(editRpe) : undefined,
      isWarmup: editIsWarmup || undefined,
    };

    await db.sets.update(editingSet.id, updates);
    setSets((prev) =>
      prev.map((s) => (s.id === editingSet.id ? { ...s, ...updates } : s))
    );
    setEditingSet(null);
  };

  const deleteSet = async (setId: string) => {
    await db.sets.delete(setId);
    setSets((prev) => prev.filter((s) => s.id !== setId));
  };

  if (!sessionId) {
    return (
      <div className="p-4 max-w-md mx-auto pb-24">
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
    <div className="p-4 max-w-md mx-auto pb-24">
      {/* Edit Modal */}
      {editingSet && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setEditingSet(null)}
        >
          <div
            className="w-full max-w-sm p-4 rounded-2xl bg-card border border-card-border space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <p className="font-bold text-sm">
                Edit Set #{editingSet.setNumber}
              </p>
              <button onClick={() => setEditingSet(null)} className="p-1">
                <X className="w-5 h-5 text-muted" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="text-[10px] text-muted block mb-1">
                  WEIGHT ({unit})
                </label>
                <input
                  type="number"
                  inputMode="decimal"
                  value={editWeight}
                  onChange={(e) => setEditWeight(e.target.value)}
                  className="w-full p-2 rounded-lg bg-background border border-card-border text-center font-bold text-lg focus:outline-none focus:border-accent-orange"
                />
              </div>
              <div>
                <label className="text-[10px] text-muted block mb-1">
                  REPS
                </label>
                <input
                  type="number"
                  inputMode="numeric"
                  value={editReps}
                  onChange={(e) => setEditReps(e.target.value)}
                  className="w-full p-2 rounded-lg bg-background border border-card-border text-center font-bold text-lg focus:outline-none focus:border-accent-orange"
                />
              </div>
              <div>
                <label className="text-[10px] text-muted block mb-1">
                  RPE
                </label>
                <input
                  type="number"
                  inputMode="numeric"
                  value={editRpe}
                  onChange={(e) => setEditRpe(e.target.value)}
                  className="w-full p-2 rounded-lg bg-background border border-card-border text-center font-bold text-lg focus:outline-none focus:border-accent-orange"
                  min="1"
                  max="10"
                />
              </div>
            </div>
            <button
              onClick={() => setEditIsWarmup(!editIsWarmup)}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg border text-sm",
                editIsWarmup
                  ? "border-yellow-500/40 bg-yellow-500/10 text-yellow-500"
                  : "border-card-border text-muted"
              )}
            >
              <Flame className="w-3.5 h-3.5" />
              Warm-up set
            </button>
            <div className="flex gap-2">
              <button
                onClick={saveEdit}
                className="flex-1 p-3 rounded-xl bg-accent-orange text-white font-bold"
              >
                Save
              </button>
              <button
                onClick={() => setEditingSet(null)}
                className="px-4 p-3 rounded-xl bg-card-border text-muted font-semibold"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <Link
        href="/workout/history"
        className="flex items-center gap-1 text-sm text-muted mb-4 pt-2"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </Link>

      {session && (
        <>
          <div className="flex items-center justify-between mb-1">
            <h1 className="text-xl font-bold">{session.name}</h1>
            <button
              onClick={fixSetNumbers}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-card border border-card-border text-xs text-muted"
            >
              <Wrench className="w-3 h-3" />
              Fix Set #s
            </button>
          </div>
          <p className="text-sm text-muted mb-1">
            {new Date(session.date).toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
            {session.duration && ` · ${session.duration} min`}
          </p>
          {session.notes && (
            <p className="text-xs text-muted/70 mb-3 italic">
              {session.notes}
            </p>
          )}

          {/* Fix message */}
          {fixMessage && (
            <div className="p-2 rounded-lg bg-success/10 border border-success/20 text-xs text-success mb-3">
              {fixMessage}
            </div>
          )}
        </>
      )}

      <p className="text-[10px] text-muted mb-3">
        Tap any set to edit · Swipe left to delete
      </p>

      <div className="space-y-3">
        {Object.entries(grouped).map(([name, exSets]) => (
          <div
            key={name}
            className="p-3 rounded-xl bg-card border border-card-border"
          >
            <p className="font-semibold text-sm text-accent-orange mb-2">
              {name}
            </p>
            <div className="space-y-1">
              <div className="grid grid-cols-4 text-[10px] text-muted font-medium px-1">
                <span>SET</span>
                <span>WEIGHT</span>
                <span>REPS</span>
                <span>RPE</span>
              </div>
              {exSets.map((set) => (
                <HistorySetRow
                  key={set.id}
                  set={set}
                  unit={unit}
                  onEdit={startEdit}
                  onDelete={deleteSet}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HistorySetRow({
  set,
  unit,
  onEdit,
  onDelete,
}: {
  set: WorkoutSet;
  unit: string;
  onEdit: (set: WorkoutSet) => void;
  onDelete: (id: string) => void;
}) {
  const [offset, setOffset] = useState(0);
  const [swiping, setSwiping] = useState(false);
  const startX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    setSwiping(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!swiping) return;
    const diff = e.touches[0].clientX - startX.current;
    if (diff < 0) {
      setOffset(Math.max(diff, -70));
    } else {
      setOffset(0);
    }
  };

  const handleTouchEnd = () => {
    setSwiping(false);
    if (offset < -35) {
      setOffset(-70);
    } else {
      setOffset(0);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          onClick={() => onDelete(set.id)}
          className="h-full w-[70px] bg-danger flex items-center justify-center gap-1"
        >
          <Trash2 className="w-3.5 h-3.5 text-white" />
          <span className="text-white text-[10px] font-semibold">Delete</span>
        </button>
      </div>

      <div
        className="relative bg-card grid grid-cols-4 text-sm py-1.5 px-1"
        style={{
          transform: `translateX(${offset}px)`,
          transition: swiping ? "none" : "transform 0.2s ease-out",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={() => {
          if (offset === 0) onEdit(set);
          else setOffset(0);
        }}
      >
        <span className="text-muted flex items-center gap-0.5">
          {set.isWarmup && <Flame className="w-3 h-3 text-yellow-500" />}
          {set.setNumber}
        </span>
        <span>{set.weight > 0 ? `${set.weight}${unit}` : "BW"}</span>
        <span>{set.reps}</span>
        <span className="text-muted">{set.rpe || "-"}</span>
      </div>
    </div>
  );
}
