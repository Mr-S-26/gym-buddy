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
  "incline bench press": "push",
  "dumbbell shoulder press": "push",
  "face pulls": "push",
  "medicine ball slams": "push",
  // Pull
  "pull-ups": "pull",
  "barbell rows": "pull",
  // Legs
  "back squats": "legs",
  "romanian deadlifts": "legs",
  "bulgarian split squats": "legs",
  "hip thrusts": "legs",
  "trap-bar deadlifts": "legs",
  "walking lunges": "legs",
  "single-leg calf raises": "legs",
  "countermovement jumps": "legs",
  "broad jumps": "legs",
  "pogos / ankle hops": "legs",
  // Core
  "hanging knee raises": "core",
  "plank": "core",
  "ab wheel rollouts": "core",
  "russian twists": "core",
  // Prehab
  "patellar isometrics (spanish squat)": "legs",
  "hip mobility flow": "legs",
  "ankle mobility": "legs",
  // Skill
  "form shooting (close range)": "skill",
  "pull-up jumper footwork": "skill",
  "free throws": "skill",
  "two-ball dribbling": "skill",
  "combo move drills": "skill",
  "jab series (triple threat)": "skill",
  "mid-range pull-ups": "skill",
  "contact finishes": "skill",
  "catch-and-shoot 3s (5 spots)": "skill",
  "3-point shooting (5 spots)": "skill",
  "off-dribble pull-ups": "skill",
  "step-back 3s": "skill",
  "mid-range game shots": "skill",
  "scoring moves (game speed)": "skill",
  "floaters + runners": "skill",
  "ball handling (light)": "skill",
  "repeated sprints": "conditioning",
  "short sprints": "conditioning",
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
