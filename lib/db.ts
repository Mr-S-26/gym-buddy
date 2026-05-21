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
  "bench press": "push",
  "incline bench press": "push",
  "overhead press (dumbbell)": "push",
  "dumbbell shoulder press": "push",
  "plyometric push-ups": "push",
  "medicine ball chest pass": "push",
  "dips": "push",
  "tricep pushdowns": "push",
  "overhead tricep extension": "push",
  "pull-ups": "pull",
  "dumbbell rows": "pull",
  "barbell rows": "pull",
  "lat pulldowns": "pull",
  "face pulls": "pull",
  "barbell curls": "pull",
  "hammer curls": "pull",
  "back squats": "legs",
  "front squats": "legs",
  "deadlifts": "legs",
  "romanian deadlifts": "legs",
  "bulgarian split squats": "legs",
  "hip thrusts": "legs",
  "box jumps": "legs",
  "broad jumps": "legs",
  "single-leg box jumps": "legs",
  "single-leg calf raises": "legs",
  "walking lunges": "legs",
  "power cleans / kettlebell swings": "legs",
  "plank": "core",
  "hanging knee raises": "core",
  "russian twists": "core",
  "ab wheel rollouts / plank": "core",
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

export { db };
