import { type WorkoutTemplate } from "./db";

export const NBA_PROGRAM: WorkoutTemplate[] = [
  {
    id: "monday-upper",
    name: "Upper Body Power + Strength",
    day: "Monday",
    totalMinutes: 90,
    sections: [
      {
        title: "Power Work",
        duration: "12 min",
        exercises: [
          {
            name: "Medicine Ball Chest Pass",
            category: "power",
            notes: "8kg ball, explosive against wall",
            sets: [
              { setNumber: 1, targetReps: "8", targetWeight: 8, restSeconds: 75 },
              { setNumber: 2, targetReps: "8", targetWeight: 8, restSeconds: 75 },
              { setNumber: 3, targetReps: "8", targetWeight: 8, restSeconds: 75 },
            ],
          },
          {
            name: "Plyometric Push-ups",
            category: "power",
            notes: "Explosive off ground, land soft",
            sets: [
              { setNumber: 1, targetReps: "6", targetWeight: 0, restSeconds: 90 },
              { setNumber: 2, targetReps: "6", targetWeight: 0, restSeconds: 90 },
              { setNumber: 3, targetReps: "6", targetWeight: 0, restSeconds: 90 },
            ],
          },
        ],
      },
      {
        title: "Strength - RPT",
        duration: "45 min",
        exercises: [
          {
            name: "Bench Press",
            category: "strength",
            notes: "RPT - heaviest set first, drop weight each set",
            sets: [
              { setNumber: 1, targetReps: "5-6", targetWeight: 60, restSeconds: 180 },
              { setNumber: 2, targetReps: "7-8", targetWeight: 55, restSeconds: 150 },
              { setNumber: 3, targetReps: "9-10", targetWeight: 50, restSeconds: 150 },
            ],
          },
          {
            name: "Pull-ups",
            category: "strength",
            notes: "RPT - add weight if 3x8 is easy. Key lift for your goals.",
            sets: [
              { setNumber: 1, targetReps: "5-6", targetWeight: 0, restSeconds: 150 },
              { setNumber: 2, targetReps: "7-8", targetWeight: 0, restSeconds: 120 },
              { setNumber: 3, targetReps: "8-10", targetWeight: 0, restSeconds: 120 },
            ],
          },
          {
            name: "Overhead Press (Dumbbell)",
            category: "strength",
            notes: "RPT - each hand",
            sets: [
              { setNumber: 1, targetReps: "6-8", targetWeight: 14, restSeconds: 120 },
              { setNumber: 2, targetReps: "8-10", targetWeight: 12, restSeconds: 120 },
              { setNumber: 3, targetReps: "10-12", targetWeight: 10, restSeconds: 120 },
            ],
          },
          {
            name: "Cable Rows",
            category: "strength",
            notes: "Squeeze at the top, 2s pause",
            sets: [
              { setNumber: 1, targetReps: "8-10", targetWeight: 40, restSeconds: 90 },
              { setNumber: 2, targetReps: "8-10", targetWeight: 40, restSeconds: 90 },
              { setNumber: 3, targetReps: "10-12", targetWeight: 35, restSeconds: 90 },
            ],
          },
          {
            name: "Dips",
            category: "strength",
            notes: "Bodyweight or add weight when 3x10 is easy",
            sets: [
              { setNumber: 1, targetReps: "8-10", targetWeight: 0, restSeconds: 90 },
              { setNumber: 2, targetReps: "8-10", targetWeight: 0, restSeconds: 90 },
              { setNumber: 3, targetReps: "8-10", targetWeight: 0, restSeconds: 90 },
            ],
          },
        ],
      },
      {
        title: "Accessories",
        duration: "20 min",
        exercises: [
          {
            name: "Face Pulls",
            category: "accessory",
            notes: "Rear delts + rotator cuff health",
            sets: [
              { setNumber: 1, targetReps: "15", targetWeight: 15, restSeconds: 45 },
              { setNumber: 2, targetReps: "15", targetWeight: 15, restSeconds: 45 },
              { setNumber: 3, targetReps: "15", targetWeight: 15, restSeconds: 45 },
            ],
          },
          {
            name: "Lateral Raises",
            category: "accessory",
            notes: "8kg DBs, controlled tempo",
            sets: [
              { setNumber: 1, targetReps: "15", targetWeight: 8, restSeconds: 45 },
              { setNumber: 2, targetReps: "15", targetWeight: 8, restSeconds: 45 },
              { setNumber: 3, targetReps: "15", targetWeight: 8, restSeconds: 45 },
            ],
          },
          {
            name: "Barbell Curls",
            category: "accessory",
            notes: "25kg, strict form",
            supersetWith: "Tricep Pushdowns",
            sets: [
              { setNumber: 1, targetReps: "10", targetWeight: 25, restSeconds: 60 },
              { setNumber: 2, targetReps: "10", targetWeight: 25, restSeconds: 60 },
              { setNumber: 3, targetReps: "10", targetWeight: 25, restSeconds: 60 },
            ],
          },
          {
            name: "Tricep Pushdowns",
            category: "accessory",
            notes: "25kg, superset with curls",
            supersetWith: "Barbell Curls",
            sets: [
              { setNumber: 1, targetReps: "12", targetWeight: 25, restSeconds: 60 },
              { setNumber: 2, targetReps: "12", targetWeight: 25, restSeconds: 60 },
              { setNumber: 3, targetReps: "12", targetWeight: 25, restSeconds: 60 },
            ],
          },
        ],
      },
      {
        title: "Core",
        duration: "5 min",
        exercises: [
          {
            name: "Plank",
            category: "core",
            notes: "Brace hard, don't just hold",
            sets: [
              { setNumber: 1, targetReps: "45s", targetWeight: 0, restSeconds: 30 },
              { setNumber: 2, targetReps: "45s", targetWeight: 0, restSeconds: 30 },
              { setNumber: 3, targetReps: "45s", targetWeight: 0, restSeconds: 30 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "wednesday-lower",
    name: "Lower Body Power + Strength",
    day: "Wednesday",
    totalMinutes: 90,
    sections: [
      {
        title: "Power Work",
        duration: "15 min",
        exercises: [
          {
            name: "Box Jumps",
            category: "power",
            notes: "24-inch box, step down, max intent each rep",
            sets: [
              { setNumber: 1, targetReps: "5", targetWeight: 0, restSeconds: 90 },
              { setNumber: 2, targetReps: "5", targetWeight: 0, restSeconds: 90 },
              { setNumber: 3, targetReps: "5", targetWeight: 0, restSeconds: 90 },
              { setNumber: 4, targetReps: "5", targetWeight: 0, restSeconds: 90 },
            ],
          },
          {
            name: "Broad Jumps",
            category: "power",
            notes: "Max distance, stick the landing",
            sets: [
              { setNumber: 1, targetReps: "5", targetWeight: 0, restSeconds: 90 },
              { setNumber: 2, targetReps: "5", targetWeight: 0, restSeconds: 90 },
              { setNumber: 3, targetReps: "5", targetWeight: 0, restSeconds: 90 },
            ],
          },
        ],
      },
      {
        title: "Strength - RPT",
        duration: "45 min",
        exercises: [
          {
            name: "Back Squats",
            category: "strength",
            notes: "RPT - heaviest first, primary lower body lift",
            sets: [
              { setNumber: 1, targetReps: "5-6", targetWeight: 70, restSeconds: 180 },
              { setNumber: 2, targetReps: "7-8", targetWeight: 65, restSeconds: 180 },
              { setNumber: 3, targetReps: "9-10", targetWeight: 60, restSeconds: 150 },
            ],
          },
          {
            name: "Romanian Deadlifts",
            category: "strength",
            notes: "Hamstring focus, controlled eccentric. NOT conventional deadlifts today.",
            sets: [
              { setNumber: 1, targetReps: "8", targetWeight: 55, restSeconds: 120 },
              { setNumber: 2, targetReps: "8", targetWeight: 55, restSeconds: 120 },
              { setNumber: 3, targetReps: "10", targetWeight: 50, restSeconds: 120 },
            ],
          },
          {
            name: "Bulgarian Split Squats",
            category: "strength",
            notes: "16kg DBs each hand, each leg. Key for single-leg power.",
            sets: [
              { setNumber: 1, targetReps: "8 each", targetWeight: 16, restSeconds: 90 },
              { setNumber: 2, targetReps: "8 each", targetWeight: 16, restSeconds: 90 },
              { setNumber: 3, targetReps: "10 each", targetWeight: 16, restSeconds: 90 },
            ],
          },
          {
            name: "Hip Thrusts",
            category: "strength",
            notes: "Glute power for drives and vertical",
            sets: [
              { setNumber: 1, targetReps: "10", targetWeight: 70, restSeconds: 90 },
              { setNumber: 2, targetReps: "10", targetWeight: 70, restSeconds: 90 },
              { setNumber: 3, targetReps: "12", targetWeight: 60, restSeconds: 90 },
            ],
          },
        ],
      },
      {
        title: "Accessories",
        duration: "15 min",
        exercises: [
          {
            name: "Single-Leg Calf Raises",
            category: "accessory",
            notes: "Hold DB for added weight, each leg",
            sets: [
              { setNumber: 1, targetReps: "15 each", targetWeight: 10, restSeconds: 45 },
              { setNumber: 2, targetReps: "15 each", targetWeight: 10, restSeconds: 45 },
              { setNumber: 3, targetReps: "15 each", targetWeight: 10, restSeconds: 45 },
            ],
          },
          {
            name: "Walking Lunges",
            category: "accessory",
            notes: "Bodyweight or light DBs, each leg",
            sets: [
              { setNumber: 1, targetReps: "10 each", targetWeight: 0, restSeconds: 60 },
              { setNumber: 2, targetReps: "10 each", targetWeight: 0, restSeconds: 60 },
            ],
          },
        ],
      },
      {
        title: "Core",
        duration: "8 min",
        exercises: [
          {
            name: "Hanging Knee Raises",
            category: "core",
            notes: "Control the swing, squeeze at top",
            sets: [
              { setNumber: 1, targetReps: "12", targetWeight: 0, restSeconds: 45 },
              { setNumber: 2, targetReps: "12", targetWeight: 0, restSeconds: 45 },
              { setNumber: 3, targetReps: "12", targetWeight: 0, restSeconds: 45 },
            ],
          },
          {
            name: "Russian Twists",
            category: "core",
            notes: "12kg KB, feet off ground",
            sets: [
              { setNumber: 1, targetReps: "20", targetWeight: 12, restSeconds: 45 },
              { setNumber: 2, targetReps: "20", targetWeight: 12, restSeconds: 45 },
              { setNumber: 3, targetReps: "20", targetWeight: 12, restSeconds: 45 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "friday-fullbody",
    name: "Full Body Athletic",
    day: "Friday",
    totalMinutes: 90,
    sections: [
      {
        title: "Power",
        duration: "12 min",
        exercises: [
          {
            name: "Power Cleans / Kettlebell Swings",
            category: "power",
            notes: "40kg barbell OR 20kg KB, explosive hip drive",
            sets: [
              { setNumber: 1, targetReps: "5", targetWeight: 40, restSeconds: 120 },
              { setNumber: 2, targetReps: "5", targetWeight: 40, restSeconds: 120 },
              { setNumber: 3, targetReps: "5", targetWeight: 40, restSeconds: 120 },
              { setNumber: 4, targetReps: "5", targetWeight: 40, restSeconds: 120 },
            ],
          },
          {
            name: "Single-Leg Box Jumps",
            category: "power",
            notes: "16-inch box, each leg. Guard-level explosiveness.",
            sets: [
              { setNumber: 1, targetReps: "4 each", targetWeight: 0, restSeconds: 90 },
              { setNumber: 2, targetReps: "4 each", targetWeight: 0, restSeconds: 90 },
              { setNumber: 3, targetReps: "4 each", targetWeight: 0, restSeconds: 90 },
            ],
          },
        ],
      },
      {
        title: "Strength - RPT",
        duration: "40 min",
        exercises: [
          {
            name: "Deadlifts",
            category: "strength",
            notes: "RPT - heaviest first. Fresh legs = proper deadlift day.",
            sets: [
              { setNumber: 1, targetReps: "5", targetWeight: 70, restSeconds: 180 },
              { setNumber: 2, targetReps: "6-7", targetWeight: 65, restSeconds: 180 },
              { setNumber: 3, targetReps: "8", targetWeight: 60, restSeconds: 150 },
            ],
          },
          {
            name: "Incline Bench Press",
            category: "strength",
            notes: "RPT - upper chest + front delts",
            sets: [
              { setNumber: 1, targetReps: "6-8", targetWeight: 55, restSeconds: 150 },
              { setNumber: 2, targetReps: "8-10", targetWeight: 50, restSeconds: 120 },
              { setNumber: 3, targetReps: "10-12", targetWeight: 45, restSeconds: 120 },
            ],
          },
          {
            name: "Barbell Rows",
            category: "strength",
            notes: "RPT - match your pull to your press",
            sets: [
              { setNumber: 1, targetReps: "6-8", targetWeight: 50, restSeconds: 120 },
              { setNumber: 2, targetReps: "8-10", targetWeight: 45, restSeconds: 120 },
              { setNumber: 3, targetReps: "10-12", targetWeight: 40, restSeconds: 120 },
            ],
          },
          {
            name: "Front Squats",
            category: "strength",
            notes: "Lighter than Wednesday, focus on quad drive + upright posture",
            sets: [
              { setNumber: 1, targetReps: "8", targetWeight: 50, restSeconds: 120 },
              { setNumber: 2, targetReps: "8", targetWeight: 50, restSeconds: 120 },
              { setNumber: 3, targetReps: "10", targetWeight: 45, restSeconds: 120 },
            ],
          },
        ],
      },
      {
        title: "Hypertrophy Finisher",
        duration: "18 min",
        exercises: [
          {
            name: "Dumbbell Shoulder Press",
            category: "hypertrophy",
            notes: "12kg each",
            sets: [
              { setNumber: 1, targetReps: "12", targetWeight: 12, restSeconds: 60 },
              { setNumber: 2, targetReps: "12", targetWeight: 12, restSeconds: 60 },
              { setNumber: 3, targetReps: "12", targetWeight: 12, restSeconds: 60 },
            ],
          },
          {
            name: "Pull-ups",
            category: "hypertrophy",
            notes: "Second pull-up session for mastery. Slow negatives if needed.",
            sets: [
              { setNumber: 1, targetReps: "max", targetWeight: 0, restSeconds: 90 },
              { setNumber: 2, targetReps: "max", targetWeight: 0, restSeconds: 90 },
            ],
          },
          {
            name: "Hammer Curls",
            category: "hypertrophy",
            notes: "10kg DBs",
            supersetWith: "Overhead Tricep Extension",
            sets: [
              { setNumber: 1, targetReps: "12", targetWeight: 10, restSeconds: 60 },
              { setNumber: 2, targetReps: "12", targetWeight: 10, restSeconds: 60 },
              { setNumber: 3, targetReps: "12", targetWeight: 10, restSeconds: 60 },
            ],
          },
          {
            name: "Overhead Tricep Extension",
            category: "hypertrophy",
            notes: "10kg DBs",
            supersetWith: "Hammer Curls",
            sets: [
              { setNumber: 1, targetReps: "12", targetWeight: 10, restSeconds: 60 },
              { setNumber: 2, targetReps: "12", targetWeight: 10, restSeconds: 60 },
              { setNumber: 3, targetReps: "12", targetWeight: 10, restSeconds: 60 },
            ],
          },
          {
            name: "Single-Leg Calf Raises",
            category: "accessory",
            notes: "Second calf session — 10kg DB, each leg",
            sets: [
              { setNumber: 1, targetReps: "15 each", targetWeight: 10, restSeconds: 45 },
              { setNumber: 2, targetReps: "15 each", targetWeight: 10, restSeconds: 45 },
              { setNumber: 3, targetReps: "15 each", targetWeight: 10, restSeconds: 45 },
            ],
          },
        ],
      },
      {
        title: "Core",
        duration: "5 min",
        exercises: [
          {
            name: "Ab Wheel Rollouts / Plank",
            category: "core",
            notes: "10 rollouts OR 60s plank",
            sets: [
              { setNumber: 1, targetReps: "10 / 60s", targetWeight: 0, restSeconds: 45 },
              { setNumber: 2, targetReps: "10 / 60s", targetWeight: 0, restSeconds: 45 },
              { setNumber: 3, targetReps: "10 / 60s", targetWeight: 0, restSeconds: 45 },
            ],
          },
        ],
      },
    ],
  },
];
