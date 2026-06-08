"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Plus,
  X,
  Check,
  Clock,
  Search,
  ChevronRight,
  Trophy,
  RotateCcw,
  History,
  Flame,
  FileText,
} from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import {
  db,
  type Exercise,
  type WorkoutSet,
  type WorkoutSession,
  type WorkoutTemplate,
  type TemplateSet,
} from "@/lib/db";
import { seedTemplates } from "@/lib/seed";
import { getSettings } from "@/lib/settings";
import { cn } from "@/lib/utils";
import { SwipeableSet } from "@/components/swipeable-set";
import { PlateCalculator } from "@/components/plate-calculator";

const RECOVERY_KEY = "gym-buddy-active-session";

interface ExerciseProgress {
  exerciseName: string;
  templateSets: TemplateSet[];
  currentSetIndex: number;
  notes?: string;
  supersetWith?: string;
}

interface SessionRecovery {
  sessionId: string;
  sessionName: string;
  templateId?: string;
  startTime: string;
  exerciseQueue: ExerciseProgress[];
  activeExerciseIdx: number | null;
}

interface PRAlert {
  exerciseName: string;
  weight: number;
  reps: number;
  previousBest: number;
}

export default function WorkoutPage() {
  const router = useRouter();
  const unit = getSettings().unit;
  const [templates, setTemplates] = useState<WorkoutTemplate[]>([]);
  const [selectedTemplate, setSelectedTemplate] =
    useState<WorkoutTemplate | null>(null);
  const [session, setSession] = useState<WorkoutSession | null>(null);
  const [loggedSets, setLoggedSets] = useState<WorkoutSet[]>([]);
  const [startTime, setStartTime] = useState<Date | null>(null);

  const [exerciseQueue, setExerciseQueue] = useState<ExerciseProgress[]>([]);
  const [activeExerciseIdx, setActiveExerciseIdx] = useState<number | null>(null);
  const [inputWeight, setInputWeight] = useState("");
  const [inputReps, setInputReps] = useState("");
  const [inputRpe, setInputRpe] = useState("");
  const [inputIsWarmup, setInputIsWarmup] = useState(false);

  const [restTimer, setRestTimer] = useState(0);
  const [isResting, setIsResting] = useState(false);
  const notificationPermission = useRef<NotificationPermission>("default");

  const [showAddExercise, setShowAddExercise] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [exercises, setExercises] = useState<Exercise[]>([]);

  // Last session data per exercise
  const [lastSessionData, setLastSessionData] = useState<
    Record<string, WorkoutSet[]>
  >({});

  // PR alerts
  const [prAlert, setPrAlert] = useState<PRAlert | null>(null);

  // Session recovery
  const [recoveryData, setRecoveryData] = useState<SessionRecovery | null>(null);

  // Edit set state
  const [editingSet, setEditingSet] = useState<WorkoutSet | null>(null);
  const [editWeight, setEditWeight] = useState("");
  const [editReps, setEditReps] = useState("");
  const [editRpe, setEditRpe] = useState("");
  const [editIsWarmup, setEditIsWarmup] = useState(false);

  // Session notes
  const [sessionNotes, setSessionNotes] = useState("");
  const [showSessionNotes, setShowSessionNotes] = useState(false);

  useEffect(() => {
    seedTemplates().then(() => {
      db.templates.toArray().then(setTemplates);
    });
    db.exercises.toArray().then(setExercises);

    // Check for recoverable session
    try {
      const raw = localStorage.getItem(RECOVERY_KEY);
      if (raw) {
        const data: SessionRecovery = JSON.parse(raw);
        db.sessions.get(data.sessionId).then((s) => {
          if (s && !s.completed) {
            setRecoveryData(data);
          } else {
            localStorage.removeItem(RECOVERY_KEY);
          }
        });
      }
    } catch {}

    // Request notification permission
    if ("Notification" in window) {
      Notification.requestPermission().then((perm) => {
        notificationPermission.current = perm;
      });
    }
  }, []);

  // Load last session data for all exercises in the template
  const loadLastSessionData = useCallback(async (templateId?: string) => {
    const sessions = await db.sessions
      .orderBy("date")
      .reverse()
      .filter((s) => s.completed)
      .toArray();

    const lastSession = templateId
      ? sessions.find((s) => s.templateId === templateId)
      : sessions[0];

    if (!lastSession) return;

    const sets = await db.sets
      .where("sessionId")
      .equals(lastSession.id)
      .toArray();

    const grouped = sets.reduce(
      (acc, s) => {
        if (!acc[s.exerciseName]) acc[s.exerciseName] = [];
        acc[s.exerciseName].push(s);
        return acc;
      },
      {} as Record<string, WorkoutSet[]>
    );
    setLastSessionData(grouped);
  }, []);

  // Check for PR
  const checkForPR = useCallback(
    async (exerciseName: string, weight: number, reps: number) => {
      if (weight <= 0) return;
      const allSets = await db.sets
        .where("exerciseName")
        .equals(exerciseName)
        .toArray();
      const previousBest = allSets.reduce(
        (max, s) => Math.max(max, s.weight),
        0
      );
      if (weight > previousBest && previousBest > 0) {
        setPrAlert({ exerciseName, weight, reps, previousBest });
        // Haptic feedback for PR
        if (navigator.vibrate) navigator.vibrate([100, 50, 100, 50, 200]);
        setTimeout(() => setPrAlert(null), 4000);
      }
    },
    []
  );

  // Save recovery state
  const saveRecoveryState = useCallback(
    (
      sid: string,
      sName: string,
      tId: string | undefined,
      st: Date,
      queue: ExerciseProgress[],
      aeIdx: number | null
    ) => {
      const data: SessionRecovery = {
        sessionId: sid,
        sessionName: sName,
        templateId: tId,
        startTime: st.toISOString(),
        exerciseQueue: queue,
        activeExerciseIdx: aeIdx,
      };
      localStorage.setItem(RECOVERY_KEY, JSON.stringify(data));
    },
    []
  );

  // Rest timer tick + notification + haptic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isResting && restTimer > 0) {
      interval = setInterval(() => {
        setRestTimer((t) => {
          if (t <= 1) {
            setIsResting(false);
            // Haptic vibration
            if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
            // Send notification
            if (
              notificationPermission.current === "granted" &&
              document.hidden
            ) {
              new Notification("Rest Complete", {
                body: "Time for your next set!",
                icon: "/icons/icon.svg",
                tag: "rest-timer",
              });
            }
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isResting, restTimer]);

  // Save recovery state whenever queue changes
  useEffect(() => {
    if (session && startTime) {
      saveRecoveryState(
        session.id,
        session.name,
        session.templateId,
        startTime,
        exerciseQueue,
        activeExerciseIdx
      );
    }
  }, [exerciseQueue, activeExerciseIdx, session, startTime, saveRecoveryState]);

  const recoverSession = async () => {
    if (!recoveryData) return;
    const s = await db.sessions.get(recoveryData.sessionId);
    if (!s) return;

    setSession(s);
    setStartTime(new Date(recoveryData.startTime));
    setExerciseQueue(recoveryData.exerciseQueue);
    setActiveExerciseIdx(recoveryData.activeExerciseIdx);
    if (s.notes) setSessionNotes(s.notes);

    if (recoveryData.templateId) {
      const t = await db.templates.get(recoveryData.templateId);
      if (t) setSelectedTemplate(t);
    }

    const sets = await db.sets
      .where("sessionId")
      .equals(recoveryData.sessionId)
      .toArray();
    setLoggedSets(sets);

    await loadLastSessionData(recoveryData.templateId);

    if (recoveryData.activeExerciseIdx !== null) {
      const ep = recoveryData.exerciseQueue[recoveryData.activeExerciseIdx];
      if (ep) prefillInputs(ep);
    }

    setRecoveryData(null);
  };

  const dismissRecovery = () => {
    if (recoveryData) {
      db.sessions.update(recoveryData.sessionId, { completed: false });
      db.sessions.delete(recoveryData.sessionId);
    }
    localStorage.removeItem(RECOVERY_KEY);
    setRecoveryData(null);
  };

  const startFromTemplate = (template: WorkoutTemplate) => {
    setSelectedTemplate(template);
    const newSession: WorkoutSession = {
      id: uuidv4(),
      date: new Date().toISOString().split("T")[0],
      name: `${template.day} - ${template.name}`,
      templateId: template.id,
      completed: false,
    };
    setSession(newSession);
    setStartTime(new Date());
    db.sessions.add(newSession);

    const queue: ExerciseProgress[] = [];
    for (const section of template.sections) {
      for (const ex of section.exercises) {
        queue.push({
          exerciseName: ex.name,
          templateSets: ex.sets,
          currentSetIndex: 0,
          notes: ex.notes,
          supersetWith: ex.supersetWith,
        });
      }
    }
    setExerciseQueue(queue);
    setActiveExerciseIdx(0);
    prefillInputs(queue[0]);
    loadLastSessionData(template.id);
  };

  const startFreeSession = () => {
    const newSession: WorkoutSession = {
      id: uuidv4(),
      date: new Date().toISOString().split("T")[0],
      name: "Free Workout",
      completed: false,
    };
    setSession(newSession);
    setStartTime(new Date());
    db.sessions.add(newSession);
    setExerciseQueue([]);
    setActiveExerciseIdx(null);
    loadLastSessionData();
  };

  const prefillInputs = (ep: ExerciseProgress) => {
    const tSet = ep.templateSets[ep.currentSetIndex];
    if (tSet) {
      setInputWeight(tSet.targetWeight > 0 ? String(tSet.targetWeight) : "");
      const repsMatch = tSet.targetReps.match(/\d+/);
      setInputReps(repsMatch ? repsMatch[0] : "");
      setInputRpe("");
      setInputIsWarmup(false);
    }
  };

  const selectExercise = (idx: number) => {
    setActiveExerciseIdx(idx);
    const ep = exerciseQueue[idx];
    if (ep.currentSetIndex < ep.templateSets.length) {
      prefillInputs(ep);
    } else {
      setInputWeight("");
      setInputReps("");
      setInputRpe("");
      setInputIsWarmup(false);
    }
  };

  const logSet = async () => {
    if (!session || activeExerciseIdx === null) return;
    const reps = parseInt(inputReps);
    const weight = parseFloat(inputWeight);
    if (isNaN(reps)) return;

    const ep = exerciseQueue[activeExerciseIdx];
    const setNumber = ep.currentSetIndex + 1;
    const restSec = ep.templateSets[ep.currentSetIndex]?.restSeconds ?? 90;
    const actualWeight = isNaN(weight) ? 0 : weight;

    const newSet: WorkoutSet = {
      id: uuidv4(),
      sessionId: session.id,
      exerciseId: ep.exerciseName.toLowerCase().replace(/\s+/g, "-"),
      exerciseName: ep.exerciseName,
      setNumber,
      reps,
      weight: actualWeight,
      rpe: inputRpe ? parseInt(inputRpe) : undefined,
      isWarmup: inputIsWarmup || undefined,
      timestamp: new Date().toISOString(),
    };
    await db.sets.add(newSet);
    setLoggedSets((prev) => [...prev, newSet]);

    // Check for PR (skip warmup sets)
    if (!inputIsWarmup) {
      await checkForPR(ep.exerciseName, actualWeight, reps);
    }

    // Advance
    const updated = [...exerciseQueue];
    updated[activeExerciseIdx] = {
      ...ep,
      currentSetIndex: ep.currentSetIndex + 1,
    };
    setExerciseQueue(updated);

    // Reset warmup toggle
    setInputIsWarmup(false);

    // Handle superset: alternate to partner exercise
    if (ep.supersetWith) {
      const partnerIdx = updated.findIndex(
        (e) => e.exerciseName === ep.supersetWith
      );
      if (
        partnerIdx !== -1 &&
        updated[partnerIdx].currentSetIndex < updated[partnerIdx].templateSets.length
      ) {
        setActiveExerciseIdx(partnerIdx);
        prefillInputs(updated[partnerIdx]);
        setRestTimer(restSec);
        setIsResting(true);
        return;
      }
    }

    if (ep.currentSetIndex + 1 < ep.templateSets.length) {
      const nextSet = ep.templateSets[ep.currentSetIndex + 1];
      setInputWeight(
        nextSet.targetWeight > 0 ? String(nextSet.targetWeight) : inputWeight
      );
      const repsMatch = nextSet.targetReps.match(/\d+/);
      setInputReps(repsMatch ? repsMatch[0] : inputReps);
      setInputRpe("");
    } else {
      const nextIdx = updated.findIndex(
        (e, i) =>
          i > activeExerciseIdx && e.currentSetIndex < e.templateSets.length
      );
      if (nextIdx !== -1) {
        setActiveExerciseIdx(nextIdx);
        prefillInputs(updated[nextIdx]);
      } else {
        setInputWeight("");
        setInputReps("");
        setInputRpe("");
      }
    }

    setRestTimer(restSec);
    setIsResting(true);
  };

  const addFreeExercise = async (name: string) => {
    let exercise = exercises.find(
      (e) => e.name.toLowerCase() === name.toLowerCase()
    );
    if (!exercise) {
      exercise = {
        id: uuidv4(),
        name,
        category: "strength",
        muscleGroup: "other",
      };
      await db.exercises.add(exercise);
      setExercises((prev) => [...prev, exercise!]);
    }
    const ep: ExerciseProgress = {
      exerciseName: name,
      templateSets: Array.from({ length: 5 }, (_, i) => ({
        setNumber: i + 1,
        targetReps: "",
        targetWeight: 0,
        restSeconds: 90,
      })),
      currentSetIndex: 0,
    };
    const newQueue = [...exerciseQueue, ep];
    setExerciseQueue(newQueue);
    setActiveExerciseIdx(newQueue.length - 1);
    setInputWeight("");
    setInputReps("");
    setInputRpe("");
    setInputIsWarmup(false);
    setShowAddExercise(false);
    setSearchQuery("");
  };

  const deleteSet = async (setId: string) => {
    await db.sets.delete(setId);
    setLoggedSets((prev) => prev.filter((s) => s.id !== setId));
  };

  // Edit set handlers
  const startEditSet = (set: WorkoutSet) => {
    setEditingSet(set);
    setEditWeight(String(set.weight));
    setEditReps(String(set.reps));
    setEditRpe(set.rpe ? String(set.rpe) : "");
    setEditIsWarmup(set.isWarmup || false);
  };

  const saveEditSet = async () => {
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
    setLoggedSets((prev) =>
      prev.map((s) => (s.id === editingSet.id ? { ...s, ...updates } : s))
    );
    setEditingSet(null);
  };

  const cancelEditSet = () => {
    setEditingSet(null);
  };

  // Session notes save
  const saveSessionNotes = async () => {
    if (!session) return;
    await db.sessions.update(session.id, { notes: sessionNotes });
    setShowSessionNotes(false);
  };

  const finishSession = async () => {
    if (!session) return;
    const duration = startTime
      ? Math.round((Date.now() - startTime.getTime()) / 60000)
      : undefined;
    await db.sessions.update(session.id, {
      completed: true,
      duration,
      notes: sessionNotes || undefined,
    });
    localStorage.removeItem(RECOVERY_KEY);
    router.push("/coach?auto=post_workout");
  };

  const filteredExercises = exercises.filter((e) =>
    e.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeEp =
    activeExerciseIdx !== null ? exerciseQueue[activeExerciseIdx] : null;

  const groupedSets = loggedSets.reduce(
    (acc, set) => {
      if (!acc[set.exerciseName]) acc[set.exerciseName] = [];
      acc[set.exerciseName].push(set);
      return acc;
    },
    {} as Record<string, WorkoutSet[]>
  );

  const unitLabel = unit;

  // ====== EDIT SET MODAL ======
  const editModal = editingSet && (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) cancelEditSet();
      }}
    >
      <div className="w-full max-w-sm p-4 rounded-2xl bg-card border border-card-border space-y-3">
        <div className="flex items-center justify-between">
          <p className="font-bold text-sm">Edit Set #{editingSet.setNumber}</p>
          <button onClick={cancelEditSet} className="p-1">
            <X className="w-5 h-5 text-muted" />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <label className="text-[10px] text-muted block mb-1">
              WEIGHT ({unitLabel})
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
            <label className="text-[10px] text-muted block mb-1">REPS</label>
            <input
              type="number"
              inputMode="numeric"
              value={editReps}
              onChange={(e) => setEditReps(e.target.value)}
              className="w-full p-2 rounded-lg bg-background border border-card-border text-center font-bold text-lg focus:outline-none focus:border-accent-orange"
            />
          </div>
          <div>
            <label className="text-[10px] text-muted block mb-1">RPE</label>
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
            onClick={saveEditSet}
            className="flex-1 p-3 rounded-xl bg-accent-orange text-white font-bold"
          >
            Save
          </button>
          <button
            onClick={cancelEditSet}
            className="px-4 p-3 rounded-xl bg-card-border text-muted font-semibold"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );

  // ====== TEMPLATE SELECTION ======
  if (!session) {
    const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
    return (
      <div className="p-4 max-w-md mx-auto pt-6 space-y-5">
        <div>
          <h1 className="text-2xl font-bold">Start Workout</h1>
          <p className="text-muted text-sm mt-1">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Session Recovery */}
        {recoveryData && (
          <div className="p-4 rounded-xl bg-accent-orange/10 border border-accent-orange/30 space-y-3">
            <div className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-accent-orange" />
              <span className="font-semibold text-sm">
                Unfinished Workout
              </span>
            </div>
            <p className="text-xs text-muted">
              {recoveryData.sessionName} — started{" "}
              {new Date(recoveryData.startTime).toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
              })}
            </p>
            <div className="flex gap-2">
              <button
                onClick={recoverSession}
                className="flex-1 p-2 rounded-lg bg-accent-orange text-white text-sm font-semibold"
              >
                Resume
              </button>
              <button
                onClick={dismissRecovery}
                className="p-2 rounded-lg bg-card-border text-muted text-sm"
              >
                Discard
              </button>
            </div>
          </div>
        )}

        {/* Program Templates */}
        <div>
          <h2 className="text-sm font-semibold text-muted mb-3 uppercase tracking-wider">
            Your Program
          </h2>
          <div className="space-y-2">
            {templates.map((t) => {
              const isToday = today === t.day;
              return (
                <button
                  key={t.id}
                  onClick={() => startFromTemplate(t)}
                  className={cn(
                    "w-full p-4 rounded-xl border text-left flex items-center justify-between active:scale-[0.98] transition-transform",
                    isToday
                      ? "bg-accent-orange/10 border-accent-orange/40"
                      : "bg-card border-card-border"
                  )}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">{t.day}</span>
                      {isToday && (
                        <span className="text-[10px] bg-accent-orange text-white px-1.5 py-0.5 rounded-full font-semibold">
                          TODAY
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted mt-0.5">{t.name}</p>
                    <p className="text-xs text-muted/60 mt-0.5">
                      {t.totalMinutes} min ·{" "}
                      {t.sections.reduce(
                        (sum, s) => sum + s.exercises.length,
                        0
                      )}{" "}
                      exercises
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted" />
                </button>
              );
            })}
          </div>
        </div>

        <button
          onClick={startFreeSession}
          className="w-full p-3 rounded-xl border border-dashed border-card-border text-muted flex items-center justify-center gap-2 active:bg-card"
        >
          <Plus className="w-4 h-4" /> Free Workout
        </button>
      </div>
    );
  }

  // ====== ACTIVE WORKOUT ======
  return (
    <div className="p-4 max-w-md mx-auto space-y-4 pb-24">
      {/* Edit Set Modal */}
      {editModal}

      {/* PR Alert */}
      {prAlert && (
        <div className="fixed top-4 left-4 right-4 z-50 p-4 rounded-xl bg-gradient-to-r from-yellow-500/20 to-accent-orange/20 border border-yellow-500/40 animate-bounce max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <Trophy className="w-8 h-8 text-yellow-500" />
            <div>
              <p className="font-bold text-sm">NEW PR!</p>
              <p className="text-xs text-muted">
                {prAlert.exerciseName}: {prAlert.weight}{unitLabel} x{" "}
                {prAlert.reps} (prev best: {prAlert.previousBest}{unitLabel})
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between pt-2">
        <div>
          <h1 className="text-lg font-bold">{session.name}</h1>
          {startTime && (
            <p className="text-xs text-muted">
              Started{" "}
              {startTime.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
              })}
            </p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <PlateCalculator />
          <button
            onClick={() => setShowSessionNotes(!showSessionNotes)}
            className={cn(
              "p-2 rounded-lg border",
              sessionNotes
                ? "bg-accent-blue/10 border-accent-blue/30"
                : "bg-card border-card-border"
            )}
          >
            <FileText className="w-4 h-4 text-muted" />
          </button>
          <button
            onClick={finishSession}
            className="px-4 py-2 rounded-lg bg-success text-white text-sm font-semibold flex items-center gap-1"
          >
            <Check className="w-4 h-4" /> Finish
          </button>
        </div>
      </div>

      {/* Session Notes */}
      {showSessionNotes && (
        <div className="p-3 rounded-xl bg-card border border-card-border space-y-2">
          <label className="text-xs font-semibold text-muted">Session Notes</label>
          <textarea
            value={sessionNotes}
            onChange={(e) => setSessionNotes(e.target.value)}
            placeholder="How are you feeling today? Any notes..."
            className="w-full p-2 rounded-lg bg-background border border-card-border text-sm focus:outline-none focus:border-accent-orange resize-none"
            rows={3}
            autoFocus
          />
          <button
            onClick={saveSessionNotes}
            className="px-3 py-1.5 rounded-lg bg-accent-blue text-white text-xs font-semibold"
          >
            Save
          </button>
        </div>
      )}

      {/* Rest Timer */}
      {isResting && (
        <div className="p-3 rounded-xl bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-accent-blue" />
            <span className="text-sm font-medium">Rest</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-accent-blue font-mono">
              {Math.floor(restTimer / 60)}:
              {(restTimer % 60).toString().padStart(2, "0")}
            </span>
            <button
              onClick={() => setIsResting(false)}
              className="text-xs text-muted"
            >
              Skip
            </button>
          </div>
        </div>
      )}

      {/* Active Set Input */}
      {activeEp && (
        <div className="p-4 rounded-xl bg-card border border-accent-orange/30 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-accent-orange">
                {activeEp.exerciseName}
              </p>
              {activeEp.notes && (
                <p className="text-[10px] text-muted mt-0.5">
                  {activeEp.notes}
                </p>
              )}
              {activeEp.supersetWith && (
                <p className="text-[10px] text-accent-blue mt-0.5">
                  Superset with {activeEp.supersetWith}
                </p>
              )}
            </div>
            <div className="text-right">
              <span className="text-xs text-muted">
                Set {(groupedSets[activeEp.exerciseName]?.length || 0) + 1} /{" "}
                {activeEp.templateSets.length}
              </span>
              {activeEp.templateSets[activeEp.currentSetIndex] && (
                <p className="text-[10px] text-accent-blue">
                  Target:{" "}
                  {activeEp.templateSets[activeEp.currentSetIndex].targetReps}{" "}
                  reps
                  {activeEp.templateSets[activeEp.currentSetIndex]
                    .targetWeight > 0 &&
                    ` @ ${activeEp.templateSets[activeEp.currentSetIndex].targetWeight}${unitLabel}`}
                </p>
              )}
            </div>
          </div>

          {/* Last session data */}
          {lastSessionData[activeEp.exerciseName] && (
            <div className="flex items-center gap-1.5 text-[10px] text-muted bg-background/50 rounded-lg p-1.5">
              <History className="w-3 h-3" />
              <span>Last:</span>
              {lastSessionData[activeEp.exerciseName].map((s, i) => (
                <span key={i}>
                  {s.weight > 0 ? `${s.weight}${unitLabel}` : "BW"}x{s.reps}
                  {i < lastSessionData[activeEp.exerciseName].length - 1 && ", "}
                </span>
              ))}
            </div>
          )}

          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="text-[10px] text-muted block mb-1">
                WEIGHT ({unitLabel})
              </label>
              <input
                type="number"
                inputMode="decimal"
                value={inputWeight}
                onChange={(e) => setInputWeight(e.target.value)}
                className="w-full p-2 rounded-lg bg-background border border-card-border text-center font-bold text-lg focus:outline-none focus:border-accent-orange"
              />
            </div>
            <div>
              <label className="text-[10px] text-muted block mb-1">REPS</label>
              <input
                type="number"
                inputMode="numeric"
                value={inputReps}
                onChange={(e) => setInputReps(e.target.value)}
                className="w-full p-2 rounded-lg bg-background border border-card-border text-center font-bold text-lg focus:outline-none focus:border-accent-orange"
              />
            </div>
            <div>
              <label className="text-[10px] text-muted block mb-1">RPE</label>
              <input
                type="number"
                inputMode="numeric"
                value={inputRpe}
                onChange={(e) => setInputRpe(e.target.value)}
                className="w-full p-2 rounded-lg bg-background border border-card-border text-center font-bold text-lg focus:outline-none focus:border-accent-orange"
                min="1"
                max="10"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setInputIsWarmup(!inputIsWarmup)}
              className={cn(
                "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs",
                inputIsWarmup
                  ? "border-yellow-500/40 bg-yellow-500/10 text-yellow-500"
                  : "border-card-border text-muted"
              )}
            >
              <Flame className="w-3 h-3" />
              Warm-up
            </button>
          </div>

          <button
            onClick={logSet}
            className="w-full p-3 rounded-xl bg-accent-orange text-white font-bold active:scale-[0.98] transition-transform"
          >
            Log Set
          </button>
        </div>
      )}

      {/* Exercise List (template-driven) */}
      {selectedTemplate && (
        <div className="space-y-3">
          {selectedTemplate.sections.map((section, sIdx) => (
            <div key={sIdx}>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xs font-semibold text-muted uppercase tracking-wider">
                  {section.title}
                </h3>
                {section.duration && (
                  <span className="text-[10px] text-muted/50">
                    {section.duration}
                  </span>
                )}
              </div>
              {section.exercises.map((ex) => {
                const queueIdx = exerciseQueue.findIndex(
                  (e) => e.exerciseName === ex.name
                );
                const ep = queueIdx >= 0 ? exerciseQueue[queueIdx] : null;
                const isActive = queueIdx === activeExerciseIdx;
                const logged = groupedSets[ex.name] || [];
                const isDone = logged.length >= ex.sets.length;

                return (
                  <div
                    key={ex.name}
                    className={cn(
                      "p-3 rounded-xl border mb-2 transition-colors",
                      isActive
                        ? "bg-card border-accent-orange/30"
                        : isDone
                          ? "bg-success/5 border-success/20"
                          : "bg-card border-card-border"
                    )}
                  >
                    <button
                      onClick={() => {
                        if (queueIdx >= 0) selectExercise(queueIdx);
                      }}
                      className="w-full text-left"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {isDone && (
                            <Check className="w-4 h-4 text-success" />
                          )}
                          <span
                            className={cn(
                              "font-semibold text-sm",
                              isDone && "text-success",
                              isActive && "text-accent-orange"
                            )}
                          >
                            {ex.name}
                          </span>
                        </div>
                        <span className="text-[10px] text-muted">
                          {logged.length}/{ex.sets.length} sets
                        </span>
                      </div>
                      <div className="flex gap-2 mt-1 flex-wrap">
                        {ex.sets.map((s, i) => (
                          <span
                            key={i}
                            className={cn(
                              "text-[10px] px-1.5 py-0.5 rounded",
                              i < logged.length
                                ? "bg-success/20 text-success"
                                : "bg-card-border/50 text-muted"
                            )}
                          >
                            {s.targetWeight > 0
                              ? `${s.targetWeight}${unitLabel}`
                              : "BW"}{" "}
                            x {s.targetReps}
                          </span>
                        ))}
                      </div>
                    </button>

                    {logged.length > 0 && (
                      <div className="mt-2 pt-2 border-t border-card-border/50 space-y-0.5">
                        {logged.map((set) => (
                          <SwipeableSet
                            key={set.id}
                            set={set}
                            unitLabel={unitLabel}
                            onDelete={deleteSet}
                            onEdit={startEditSet}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}

      {/* Logged sets for free workout */}
      {!selectedTemplate &&
        Object.entries(groupedSets).map(([name, sets]) => (
          <div
            key={name}
            className="p-3 rounded-xl bg-card border border-card-border"
          >
            <p className="font-semibold text-sm mb-2 text-accent-orange">
              {name}
            </p>
            <div className="space-y-0.5">
              {sets.map((set) => (
                <SwipeableSet
                  key={set.id}
                  set={set}
                  unitLabel={unitLabel}
                  onDelete={deleteSet}
                  onEdit={startEditSet}
                />
              ))}
            </div>
          </div>
        ))}

      {/* Add Exercise */}
      {!showAddExercise ? (
        <button
          onClick={() => setShowAddExercise(true)}
          className="w-full p-3 rounded-xl border border-dashed border-card-border text-muted flex items-center justify-center gap-2 active:bg-card"
        >
          <Plus className="w-4 h-4" /> Add Exercise
        </button>
      ) : (
        <div className="p-3 rounded-xl bg-card border border-card-border space-y-2">
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-muted" />
            <input
              type="text"
              placeholder="Search or type new exercise..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && searchQuery.trim()) {
                  addFreeExercise(searchQuery.trim());
                }
              }}
              autoFocus
              className="flex-1 bg-transparent text-sm focus:outline-none placeholder:text-muted/50"
            />
            <button onClick={() => setShowAddExercise(false)}>
              <X className="w-4 h-4 text-muted" />
            </button>
          </div>
          {searchQuery && (
            <div className="max-h-40 overflow-y-auto space-y-1">
              {filteredExercises.map((ex) => (
                <button
                  key={ex.id}
                  onClick={() => addFreeExercise(ex.name)}
                  className="w-full text-left p-2 rounded-lg hover:bg-background text-sm"
                >
                  {ex.name}
                </button>
              ))}
              {!filteredExercises.some(
                (e) => e.name.toLowerCase() === searchQuery.toLowerCase()
              ) && (
                <button
                  onClick={() => addFreeExercise(searchQuery.trim())}
                  className="w-full text-left p-2 rounded-lg hover:bg-background text-sm text-accent-blue"
                >
                  + Create &quot;{searchQuery}&quot;
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
