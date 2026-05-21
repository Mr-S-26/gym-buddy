import { type WorkoutTemplate } from "./db";

export const NBA_PROGRAM: WorkoutTemplate[] = [
  {
    id: "monday-upper",
    name: "Upper Body Power + Strength",
    day: "Monday",
    totalMinutes: 75,
    sections: [
      {
        title: "Power Work",
        duration: "15 min",
        exercises: [
          {
            name: "Medicine Ball Chest Pass",
            category: "power",
            notes: "8kg ball, Explosive",
            sets: [
              { setNumber: 1, targetReps: "8", targetWeight: 8, restSeconds: 90 },
              { setNumber: 2, targetReps: "8", targetWeight: 8, restSeconds: 90 },
              { setNumber: 3, targetReps: "8", targetWeight: 8, restSeconds: 90 },
              { setNumber: 4, targetReps: "8", targetWeight: 8, restSeconds: 90 },
            ],
          },
          {
            name: "Plyometric Push-ups",
            category: "power",
            notes: "Explosive off ground",
            sets: [
              { setNumber: 1, targetReps: "6", targetWeight: 0, restSeconds: 90 },
              { setNumber: 2, targetReps: "6", targetWeight: 0, restSeconds: 90 },
              { setNumber: 3, targetReps: "6", targetWeight: 0, restSeconds: 90 },
            ],
          },
        ],
      },
      {
        title: "Strength - RPT Style",
        duration: "40 min",
        exercises: [
          {
            name: "Bench Press",
            category: "strength",
            notes: "RPT - ascending weight",
            sets: [
              { setNumber: 1, targetReps: "10-12", targetWeight: 50, restSeconds: 150 },
              { setNumber: 2, targetReps: "8-10", targetWeight: 55, restSeconds: 150 },
              { setNumber: 3, targetReps: "6-8", targetWeight: 60, restSeconds: 150 },
            ],
          },
          {
            name: "Dumbbell Rows",
            category: "strength",
            notes: "RPT - each arm",
            sets: [
              { setNumber: 1, targetReps: "10-12", targetWeight: 16, restSeconds: 120 },
              { setNumber: 2, targetReps: "8-10", targetWeight: 18, restSeconds: 120 },
              { setNumber: 3, targetReps: "6-8", targetWeight: 20, restSeconds: 120 },
            ],
          },
          {
            name: "Overhead Press (Dumbbell)",
            category: "strength",
            notes: "RPT - each hand",
            sets: [
              { setNumber: 1, targetReps: "10-12", targetWeight: 10, restSeconds: 120 },
              { setNumber: 2, targetReps: "8-10", targetWeight: 12, restSeconds: 120 },
              { setNumber: 3, targetReps: "6-8", targetWeight: 14, restSeconds: 120 },
            ],
          },
          {
            name: "Pull-ups",
            category: "strength",
            notes: "Leave 2 reps in reserve",
            sets: [
              { setNumber: 1, targetReps: "6-8", targetWeight: 0, restSeconds: 120 },
              { setNumber: 2, targetReps: "6-8", targetWeight: 0, restSeconds: 120 },
              { setNumber: 3, targetReps: "6-8", targetWeight: 0, restSeconds: 120 },
            ],
          },
          {
            name: "Dips",
            category: "strength",
            notes: "Bodyweight or assisted",
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
        duration: "15 min",
        exercises: [
          {
            name: "Face Pulls",
            category: "accessory",
            notes: "15kg cable",
            sets: [
              { setNumber: 1, targetReps: "15", targetWeight: 15, restSeconds: 60 },
              { setNumber: 2, targetReps: "15", targetWeight: 15, restSeconds: 60 },
              { setNumber: 3, targetReps: "15", targetWeight: 15, restSeconds: 60 },
            ],
          },
          {
            name: "Barbell Curls",
            category: "accessory",
            notes: "25kg",
            sets: [
              { setNumber: 1, targetReps: "10", targetWeight: 25, restSeconds: 60 },
              { setNumber: 2, targetReps: "10", targetWeight: 25, restSeconds: 60 },
              { setNumber: 3, targetReps: "10", targetWeight: 25, restSeconds: 60 },
            ],
          },
          {
            name: "Tricep Pushdowns",
            category: "accessory",
            notes: "25kg",
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
            notes: "45 seconds each",
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
    totalMinutes: 75,
    sections: [
      {
        title: "Power Work",
        duration: "20 min",
        exercises: [
          {
            name: "Box Jumps",
            category: "power",
            notes: "20-24 inch box, max effort quality reps",
            sets: [
              { setNumber: 1, targetReps: "5", targetWeight: 0, restSeconds: 120 },
              { setNumber: 2, targetReps: "5", targetWeight: 0, restSeconds: 120 },
              { setNumber: 3, targetReps: "5", targetWeight: 0, restSeconds: 120 },
              { setNumber: 4, targetReps: "5", targetWeight: 0, restSeconds: 120 },
              { setNumber: 5, targetReps: "5", targetWeight: 0, restSeconds: 120 },
            ],
          },
          {
            name: "Broad Jumps",
            category: "power",
            notes: "Max distance",
            sets: [
              { setNumber: 1, targetReps: "5", targetWeight: 0, restSeconds: 90 },
              { setNumber: 2, targetReps: "5", targetWeight: 0, restSeconds: 90 },
              { setNumber: 3, targetReps: "5", targetWeight: 0, restSeconds: 90 },
              { setNumber: 4, targetReps: "5", targetWeight: 0, restSeconds: 90 },
            ],
          },
          {
            name: "Single-Leg Box Jumps",
            category: "power",
            notes: "16-inch box, each leg",
            sets: [
              { setNumber: 1, targetReps: "5 each", targetWeight: 0, restSeconds: 90 },
              { setNumber: 2, targetReps: "5 each", targetWeight: 0, restSeconds: 90 },
              { setNumber: 3, targetReps: "5 each", targetWeight: 0, restSeconds: 90 },
            ],
          },
        ],
      },
      {
        title: "Strength - RPT Style",
        duration: "35 min",
        exercises: [
          {
            name: "Back Squats",
            category: "strength",
            notes: "RPT - ascending weight",
            sets: [
              { setNumber: 1, targetReps: "10-12", targetWeight: 60, restSeconds: 180 },
              { setNumber: 2, targetReps: "8-10", targetWeight: 65, restSeconds: 180 },
              { setNumber: 3, targetReps: "6-8", targetWeight: 70, restSeconds: 180 },
            ],
          },
          {
            name: "Deadlifts",
            category: "strength",
            notes: "CAREFUL - small jumps, progress 5kg/week max",
            sets: [
              { setNumber: 1, targetReps: "10-12", targetWeight: 60, restSeconds: 180 },
              { setNumber: 2, targetReps: "8-10", targetWeight: 65, restSeconds: 180 },
              { setNumber: 3, targetReps: "6-8", targetWeight: 70, restSeconds: 180 },
            ],
          },
          {
            name: "Bulgarian Split Squats",
            category: "strength",
            notes: "16kg dumbbells each hand, each leg",
            sets: [
              { setNumber: 1, targetReps: "10 each", targetWeight: 16, restSeconds: 90 },
              { setNumber: 2, targetReps: "10 each", targetWeight: 16, restSeconds: 90 },
              { setNumber: 3, targetReps: "10 each", targetWeight: 16, restSeconds: 90 },
            ],
          },
          {
            name: "Romanian Deadlifts",
            category: "strength",
            notes: "50kg",
            sets: [
              { setNumber: 1, targetReps: "12", targetWeight: 50, restSeconds: 90 },
              { setNumber: 2, targetReps: "12", targetWeight: 50, restSeconds: 90 },
              { setNumber: 3, targetReps: "12", targetWeight: 50, restSeconds: 90 },
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
            notes: "BW or 10kg DB, each leg",
            sets: [
              { setNumber: 1, targetReps: "15 each", targetWeight: 0, restSeconds: 60 },
              { setNumber: 2, targetReps: "15 each", targetWeight: 0, restSeconds: 60 },
              { setNumber: 3, targetReps: "15 each", targetWeight: 0, restSeconds: 60 },
            ],
          },
          {
            name: "Walking Lunges",
            category: "accessory",
            notes: "Bodyweight, each leg",
            sets: [
              { setNumber: 1, targetReps: "10 each", targetWeight: 0, restSeconds: 60 },
              { setNumber: 2, targetReps: "10 each", targetWeight: 0, restSeconds: 60 },
              { setNumber: 3, targetReps: "10 each", targetWeight: 0, restSeconds: 60 },
            ],
          },
        ],
      },
      {
        title: "Core",
        duration: "5 min",
        exercises: [
          {
            name: "Hanging Knee Raises",
            category: "core",
            notes: "",
            sets: [
              { setNumber: 1, targetReps: "10", targetWeight: 0, restSeconds: 45 },
              { setNumber: 2, targetReps: "10", targetWeight: 0, restSeconds: 45 },
              { setNumber: 3, targetReps: "10", targetWeight: 0, restSeconds: 45 },
            ],
          },
          {
            name: "Russian Twists",
            category: "core",
            notes: "12kg kettlebell",
            sets: [
              { setNumber: 1, targetReps: "30", targetWeight: 12, restSeconds: 45 },
              { setNumber: 2, targetReps: "30", targetWeight: 12, restSeconds: 45 },
              { setNumber: 3, targetReps: "30", targetWeight: 12, restSeconds: 45 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "friday-fullbody",
    name: "Full Body + Posterior Chain",
    day: "Friday",
    totalMinutes: 70,
    sections: [
      {
        title: "Power",
        duration: "10 min",
        exercises: [
          {
            name: "Power Cleans / Kettlebell Swings",
            category: "power",
            notes: "40kg barbell OR 20kg KB, Explosive",
            sets: [
              { setNumber: 1, targetReps: "6", targetWeight: 40, restSeconds: 120 },
              { setNumber: 2, targetReps: "6", targetWeight: 40, restSeconds: 120 },
              { setNumber: 3, targetReps: "6", targetWeight: 40, restSeconds: 120 },
              { setNumber: 4, targetReps: "6", targetWeight: 40, restSeconds: 120 },
            ],
          },
        ],
      },
      {
        title: "Strength - RPT",
        duration: "40 min",
        exercises: [
          {
            name: "Front Squats",
            category: "strength",
            notes: "RPT - ascending weight",
            sets: [
              { setNumber: 1, targetReps: "10-12", targetWeight: 40, restSeconds: 150 },
              { setNumber: 2, targetReps: "8-10", targetWeight: 45, restSeconds: 150 },
              { setNumber: 3, targetReps: "6-8", targetWeight: 50, restSeconds: 150 },
            ],
          },
          {
            name: "Incline Bench Press",
            category: "strength",
            notes: "RPT - ascending weight",
            sets: [
              { setNumber: 1, targetReps: "10-12", targetWeight: 45, restSeconds: 150 },
              { setNumber: 2, targetReps: "8-10", targetWeight: 50, restSeconds: 150 },
              { setNumber: 3, targetReps: "6-8", targetWeight: 55, restSeconds: 150 },
            ],
          },
          {
            name: "Barbell Rows",
            category: "strength",
            notes: "RPT - ascending weight",
            sets: [
              { setNumber: 1, targetReps: "10-12", targetWeight: 40, restSeconds: 120 },
              { setNumber: 2, targetReps: "8-10", targetWeight: 45, restSeconds: 120 },
              { setNumber: 3, targetReps: "6-8", targetWeight: 50, restSeconds: 120 },
            ],
          },
          {
            name: "Hip Thrusts",
            category: "strength",
            notes: "Glute power for vertical",
            sets: [
              { setNumber: 1, targetReps: "12", targetWeight: 70, restSeconds: 90 },
              { setNumber: 2, targetReps: "12", targetWeight: 70, restSeconds: 90 },
              { setNumber: 3, targetReps: "12", targetWeight: 70, restSeconds: 90 },
            ],
          },
        ],
      },
      {
        title: "Hypertrophy Finisher",
        duration: "15 min",
        exercises: [
          {
            name: "Dumbbell Shoulder Press",
            category: "hypertrophy",
            notes: "12kg each",
            sets: [
              { setNumber: 1, targetReps: "12", targetWeight: 12, restSeconds: 75 },
              { setNumber: 2, targetReps: "12", targetWeight: 12, restSeconds: 75 },
              { setNumber: 3, targetReps: "12", targetWeight: 12, restSeconds: 75 },
            ],
          },
          {
            name: "Lat Pulldowns",
            category: "hypertrophy",
            notes: "50kg",
            sets: [
              { setNumber: 1, targetReps: "12", targetWeight: 50, restSeconds: 75 },
              { setNumber: 2, targetReps: "12", targetWeight: 50, restSeconds: 75 },
              { setNumber: 3, targetReps: "12", targetWeight: 50, restSeconds: 75 },
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
