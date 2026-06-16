import Dexie, { type EntityTable } from "dexie";

export interface Exercise {
  id: string;
  name: string;
  category: "strength" | "plyometric" | "agility" | "conditioning";
  muscleGroup: string;
}

export interface WorkoutSession {
  id: string;
  date: string;
  name: string;
  templateId?: string;
  duration?: number;
  notes?: string;
  completed: boolean;
}

export interface WorkoutSet {
  id: string;
  sessionId: string;
  exerciseId: string;
  exerciseName: string;
  setNumber: number;
  reps: number;
  weight: number;
  rpe?: number;
  isWarmup?: boolean;
  notes?: string;
  timestamp: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export interface TemplateSet {
  setNumber: number;
  targetReps: string;
  targetWeight: number;
  restSeconds: number;
}

export interface TemplateExercise {
  name: string;
  category: string;
  notes?: string;
  supersetWith?: string;
  sets: TemplateSet[];
}

export interface TemplateSection {
  title: string;
  duration?: string;
  exercises: TemplateExercise[];
}

export interface WorkoutTemplate {
  id: string;
  name: string;
  day: string;
  totalMinutes: number;
  sections: TemplateSection[];
}

export interface BodyWeight {
  id: string;
  date: string;
  weight: number;
  unit: "kg" | "lbs";
}

// Muscle group mapping for volume tracking
export const EXERCISE_MUSCLE_GROUPS: Record<string, string> = {
  // Push
  "bench press": "push",
  "dumbbell bench press": "push",
  "dumbbell shoulder press": "push",
  // Pull
  "weighted pull-ups": "pull",
  "chin-ups": "pull",
  "1-arm dumbbell row": "pull",
  // Legs
  "back squats": "legs",
  "front squats": "legs",
  "romanian deadlifts": "legs",
  "bulgarian split squats": "legs",
  "hip thrusts": "legs",
  "half-squat (contrast)": "legs",
  "back squats (contrast)": "legs",
  // Power
  "countermovement jumps (contrast)": "legs",
  "depth-to-cmj": "legs",
  "depth jumps": "legs",
  "broad jumps": "legs",
  "single-leg bounds": "legs",
  "pogo hops": "legs",
  "single-leg pogos": "legs",
  "alternating bounds": "legs",
  "lateral bounds": "legs",
  "low box jumps": "legs",
  "trap-bar jumps": "legs",
  "hang clean / high pull": "legs",
  // Core
  "pallof press": "core",
  // Warmup
  "squat ramp": "legs",
  "bench ramp": "push",
  // Prehab
  "patellar isometrics (spanish squat)": "legs",
  "hip mobility flow": "legs",
  "ankle mobility": "legs",
  // Skill
  "form shooting (close range)": "skill",
  "pull-up jumper footwork": "skill",
  "free throws": "skill",
  "two-ball dribbling": "skill",
  "jab series (triple threat)": "skill",
  "mid-post turnaround / fadeaway": "skill",
  "up-and-under + contact finishes": "skill",
  "catch-and-shoot 3s (5 spots)": "skill",
  "3-point shooting (5 spots)": "skill",
  "off-dribble pull-ups": "skill",
  "mid-range game shots": "skill",
  "scoring moves vs. defender": "skill",
  "scoring moves vs. live defense": "skill",
  "floaters + runners": "skill",
  // Conditioning
  "repeated sprints": "conditioning",
  "reactive sprints": "conditioning",
};

export function getMuscleGroup(exerciseName: string): string {
  return EXERCISE_MUSCLE_GROUPS[exerciseName.toLowerCase()] || "other";
}

// Epley formula for estimated 1RM
export function calculate1RM(weight: number, reps: number): number {
  if (reps <= 0 || weight <= 0) return 0;
  if (reps === 1) return weight;
  return Math.round(weight * (1 + reps / 30));
}

const db = new Dexie("GymBuddyDB") as Dexie & {
  exercises: EntityTable<Exercise, "id">;
  sessions: EntityTable<WorkoutSession, "id">;
  sets: EntityTable<WorkoutSet, "id">;
  chatMessages: EntityTable<ChatMessage, "id">;
  templates: EntityTable<WorkoutTemplate, "id">;
  bodyWeights: EntityTable<BodyWeight, "id">;
};

db.version(2).stores({
  exercises: "id, name, category, muscleGroup",
  sessions: "id, date, completed",
  sets: "id, sessionId, exerciseId, timestamp",
  chatMessages: "id, timestamp",
  templates: "id, day",
});

db.version(3).stores({
  exercises: "id, name, category, muscleGroup",
  sessions: "id, date, completed",
  sets: "id, sessionId, exerciseId, timestamp",
  chatMessages: "id, timestamp",
  templates: "id, day",
  bodyWeights: "id, date",
});

db.version(4).stores({
  exercises: "id, name, category, muscleGroup",
  sessions: "id, date, completed",
  sets: "id, sessionId, exerciseId, exerciseName, timestamp",
  chatMessages: "id, timestamp",
  templates: "id, day",
  bodyWeights: "id, date",
});

export { db };
