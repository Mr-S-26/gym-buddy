import { type WorkoutTemplate } from "./db";

export const NBA_PROGRAM: WorkoutTemplate[] = [
  // ─── DAY A: MONDAY ─── Lower Body Strength + Power ───
  // Farthest from weekend games = heaviest lower body day
  // Contrast training: heavy squat → explosive jump (post-activation potentiation)
  {
    id: "monday-lower-power",
    name: "Lower Body Strength + Power",
    day: "Monday",
    totalMinutes: 120,
    sections: [
      {
        title: "Contrast Training",
        duration: "25 min",
        exercises: [
          {
            name: "Back Squats",
            category: "strength",
            notes: "Heavy — 80-85% 1RM. Pair with CMJ for contrast effect.",
            sets: [
              { setNumber: 1, targetReps: "3-5", targetWeight: 70, restSeconds: 180 },
              { setNumber: 2, targetReps: "3-5", targetWeight: 70, restSeconds: 180 },
              { setNumber: 3, targetReps: "3-5", targetWeight: 65, restSeconds: 180 },
              { setNumber: 4, targetReps: "3-5", targetWeight: 65, restSeconds: 180 },
            ],
          },
          {
            name: "Countermovement Jumps",
            category: "power",
            notes: "MAX intent — do immediately after each squat set. Track height if possible.",
            sets: [
              { setNumber: 1, targetReps: "3", targetWeight: 0, restSeconds: 120 },
              { setNumber: 2, targetReps: "3", targetWeight: 0, restSeconds: 120 },
              { setNumber: 3, targetReps: "3", targetWeight: 0, restSeconds: 120 },
              { setNumber: 4, targetReps: "3", targetWeight: 0, restSeconds: 120 },
            ],
          },
        ],
      },
      {
        title: "Strength",
        duration: "25 min",
        exercises: [
          {
            name: "Bulgarian Split Squats",
            category: "strength",
            notes: "16kg DBs each hand, each leg. Single-leg power = guard explosiveness.",
            sets: [
              { setNumber: 1, targetReps: "6 each", targetWeight: 16, restSeconds: 90 },
              { setNumber: 2, targetReps: "6 each", targetWeight: 16, restSeconds: 90 },
              { setNumber: 3, targetReps: "8 each", targetWeight: 16, restSeconds: 90 },
            ],
          },
          {
            name: "Romanian Deadlifts",
            category: "strength",
            notes: "Hamstring + posterior chain. Controlled eccentric, explosive concentric.",
            sets: [
              { setNumber: 1, targetReps: "8", targetWeight: 55, restSeconds: 120 },
              { setNumber: 2, targetReps: "8", targetWeight: 55, restSeconds: 120 },
              { setNumber: 3, targetReps: "10", targetWeight: 50, restSeconds: 90 },
            ],
          },
          {
            name: "Hip Thrusts",
            category: "strength",
            notes: "Glute power for vertical jump and drives to the basket.",
            sets: [
              { setNumber: 1, targetReps: "10", targetWeight: 70, restSeconds: 90 },
              { setNumber: 2, targetReps: "10", targetWeight: 70, restSeconds: 90 },
              { setNumber: 3, targetReps: "12", targetWeight: 60, restSeconds: 90 },
            ],
          },
        ],
      },
      {
        title: "Prehab + Calves",
        duration: "10 min",
        exercises: [
          {
            name: "Patellar Isometrics (Spanish Squat)",
            category: "prehab",
            notes: "Band around knees, lean back, hold ~70-80% effort. Protects patellar tendon.",
            sets: [
              { setNumber: 1, targetReps: "45s hold", targetWeight: 0, restSeconds: 30 },
              { setNumber: 2, targetReps: "45s hold", targetWeight: 0, restSeconds: 30 },
              { setNumber: 3, targetReps: "45s hold", targetWeight: 0, restSeconds: 30 },
              { setNumber: 4, targetReps: "45s hold", targetWeight: 0, restSeconds: 30 },
            ],
          },
          {
            name: "Single-Leg Calf Raises",
            category: "accessory",
            notes: "Hold DB, each leg. Full ROM — stretch at bottom.",
            sets: [
              { setNumber: 1, targetReps: "15 each", targetWeight: 10, restSeconds: 45 },
              { setNumber: 2, targetReps: "15 each", targetWeight: 10, restSeconds: 45 },
              { setNumber: 3, targetReps: "15 each", targetWeight: 10, restSeconds: 45 },
            ],
          },
        ],
      },
      {
        title: "Skill Work",
        duration: "55 min",
        exercises: [
          {
            name: "Form Shooting (Close Range)",
            category: "skill",
            notes: "100 MAKES within 10ft. Groove mechanics — elbow in, follow through, arc.",
            sets: [
              { setNumber: 1, targetReps: "50 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "50 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Pull-up Jumper Footwork",
            category: "skill",
            notes: "Triple threat → jab → drive-by → pull-up. Kobe footwork. 5 spots, both sides.",
            sets: [
              { setNumber: 1, targetReps: "10 each spot", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "10 each spot", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Free Throws",
            category: "skill",
            notes: "End every session with free throws. Track makes out of 20.",
            sets: [
              { setNumber: 1, targetReps: "20", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
    ],
  },

  // ─── DAY B: TUESDAY ─── Skill + Conditioning ───
  // Pure court day — handles, scoring moves, game-speed shooting, conditioning
  {
    id: "tuesday-skill-conditioning",
    name: "Skill + Conditioning",
    day: "Tuesday",
    totalMinutes: 120,
    sections: [
      {
        title: "Ball Handling",
        duration: "20 min",
        exercises: [
          {
            name: "Two-Ball Dribbling",
            category: "skill",
            notes: "Stationary: pound, crossover, in-out. Then full-court. Low handle, eyes up.",
            sets: [
              { setNumber: 1, targetReps: "5 min", targetWeight: 0, restSeconds: 30 },
              { setNumber: 2, targetReps: "5 min", targetWeight: 0, restSeconds: 30 },
            ],
          },
          {
            name: "Combo Move Drills",
            category: "skill",
            notes: "Crossover → hesitation → step-back. Between-legs → spin. Full court at speed.",
            sets: [
              { setNumber: 1, targetReps: "5 min", targetWeight: 0, restSeconds: 30 },
              { setNumber: 2, targetReps: "5 min", targetWeight: 0, restSeconds: 30 },
            ],
          },
        ],
      },
      {
        title: "Scoring Moves",
        duration: "30 min",
        exercises: [
          {
            name: "Jab Series (Triple Threat)",
            category: "skill",
            notes: "Jab step → pull-up / jab → rip-through drive / jab → step-back. Both sides.",
            sets: [
              { setNumber: 1, targetReps: "10 each move", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "10 each move", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Mid-Range Pull-ups",
            category: "skill",
            notes: "Off-dribble pull-up jumpers from elbow and free-throw line. Game speed.",
            sets: [
              { setNumber: 1, targetReps: "20 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "20 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Contact Finishes",
            category: "skill",
            notes: "Two-foot gather, absorb contact, finish through. Use a pad or chair as defender.",
            sets: [
              { setNumber: 1, targetReps: "10 each side", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "10 each side", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
      {
        title: "Catch-and-Shoot",
        duration: "25 min",
        exercises: [
          {
            name: "Catch-and-Shoot 3s (5 Spots)",
            category: "skill",
            notes: "1 set per spot: L corner, L wing, top, R wing, R corner. Log makes per spot.",
            sets: [
              { setNumber: 1, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 5, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
      {
        title: "Conditioning",
        duration: "20 min",
        exercises: [
          {
            name: "Repeated Sprints",
            category: "conditioning",
            notes: "6×30m all-out, 30s rest between reps. Full recovery between sets. Basketball-specific energy system.",
            sets: [
              { setNumber: 1, targetReps: "6 sprints", targetWeight: 0, restSeconds: 180 },
              { setNumber: 2, targetReps: "6 sprints", targetWeight: 0, restSeconds: 180 },
              { setNumber: 3, targetReps: "6 sprints", targetWeight: 0, restSeconds: 180 },
            ],
          },
        ],
      },
      {
        title: "Cooldown",
        duration: "5 min",
        exercises: [
          {
            name: "Free Throws",
            category: "skill",
            notes: "Shoot FTs while fatigued from conditioning. Track makes out of 20.",
            sets: [
              { setNumber: 1, targetReps: "20", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
    ],
  },

  // ─── DAY C: WEDNESDAY ─── Upper Body + Power Microdose ───
  // Upper body strength day + low-volume plyos for RSI maintenance
  {
    id: "wednesday-upper-power",
    name: "Upper Body + Power Microdose",
    day: "Wednesday",
    totalMinutes: 120,
    sections: [
      {
        title: "Power Microdose",
        duration: "8 min",
        exercises: [
          {
            name: "Pogos / Ankle Hops",
            category: "power",
            notes: "Stiff ankles, minimal ground contact time. RSI focus — quick off the ground.",
            sets: [
              { setNumber: 1, targetReps: "15", targetWeight: 0, restSeconds: 60 },
              { setNumber: 2, targetReps: "15", targetWeight: 0, restSeconds: 60 },
              { setNumber: 3, targetReps: "15", targetWeight: 0, restSeconds: 60 },
            ],
          },
          {
            name: "Medicine Ball Slams",
            category: "power",
            notes: "8kg ball, full body explosive. Upper body power expression.",
            sets: [
              { setNumber: 1, targetReps: "8", targetWeight: 8, restSeconds: 60 },
              { setNumber: 2, targetReps: "8", targetWeight: 8, restSeconds: 60 },
            ],
          },
        ],
      },
      {
        title: "Strength",
        duration: "40 min",
        exercises: [
          {
            name: "Incline Bench Press",
            category: "strength",
            notes: "Primary upper press. 3-5 rep strength range.",
            sets: [
              { setNumber: 1, targetReps: "5", targetWeight: 55, restSeconds: 150 },
              { setNumber: 2, targetReps: "5", targetWeight: 55, restSeconds: 150 },
              { setNumber: 3, targetReps: "6-8", targetWeight: 50, restSeconds: 120 },
            ],
          },
          {
            name: "Pull-ups",
            category: "strength",
            notes: "Weighted if possible. Key lift — guards need relative pulling strength.",
            sets: [
              { setNumber: 1, targetReps: "5-6", targetWeight: 0, restSeconds: 150 },
              { setNumber: 2, targetReps: "6-8", targetWeight: 0, restSeconds: 120 },
              { setNumber: 3, targetReps: "8-10", targetWeight: 0, restSeconds: 120 },
            ],
          },
          {
            name: "Barbell Rows",
            category: "strength",
            notes: "Match pulling volume to pressing. Squeeze at top.",
            sets: [
              { setNumber: 1, targetReps: "6-8", targetWeight: 50, restSeconds: 120 },
              { setNumber: 2, targetReps: "8-10", targetWeight: 45, restSeconds: 90 },
              { setNumber: 3, targetReps: "10", targetWeight: 45, restSeconds: 90 },
            ],
          },
          {
            name: "Dumbbell Shoulder Press",
            category: "strength",
            notes: "14kg each hand. Seated or standing.",
            sets: [
              { setNumber: 1, targetReps: "8", targetWeight: 14, restSeconds: 90 },
              { setNumber: 2, targetReps: "8", targetWeight: 14, restSeconds: 90 },
              { setNumber: 3, targetReps: "10", targetWeight: 12, restSeconds: 90 },
            ],
          },
          {
            name: "Face Pulls",
            category: "accessory",
            notes: "Shoulder health + rear delts. Light and controlled.",
            sets: [
              { setNumber: 1, targetReps: "15", targetWeight: 15, restSeconds: 45 },
              { setNumber: 2, targetReps: "15", targetWeight: 15, restSeconds: 45 },
              { setNumber: 3, targetReps: "15", targetWeight: 15, restSeconds: 45 },
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
            notes: "Control the swing. Anti-rotation and hip flexor strength.",
            sets: [
              { setNumber: 1, targetReps: "12", targetWeight: 0, restSeconds: 45 },
              { setNumber: 2, targetReps: "12", targetWeight: 0, restSeconds: 45 },
              { setNumber: 3, targetReps: "12", targetWeight: 0, restSeconds: 45 },
            ],
          },
          {
            name: "Plank",
            category: "core",
            notes: "Brace hard, don't just hold. Squeeze glutes and abs.",
            sets: [
              { setNumber: 1, targetReps: "45s", targetWeight: 0, restSeconds: 30 },
              { setNumber: 2, targetReps: "45s", targetWeight: 0, restSeconds: 30 },
            ],
          },
        ],
      },
      {
        title: "Skill Work",
        duration: "55 min",
        exercises: [
          {
            name: "3-Point Shooting (5 Spots)",
            category: "skill",
            notes: "1 set per spot: L corner, L wing, top, R wing, R corner. Log makes per spot.",
            sets: [
              { setNumber: 1, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 5, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Off-Dribble Pull-ups",
            category: "skill",
            notes: "1-2 dribbles → pull-up jumper. Both directions. Game speed.",
            sets: [
              { setNumber: 1, targetReps: "20 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "20 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Step-Back 3s",
            category: "skill",
            notes: "Drive → step-back → shoot. Create separation. Both sides.",
            sets: [
              { setNumber: 1, targetReps: "15 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "15 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Free Throws",
            category: "skill",
            notes: "Track makes out of 20.",
            sets: [
              { setNumber: 1, targetReps: "20", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
    ],
  },

  // ─── DAY D: THURSDAY ─── Skill + CNS Primer ───
  // Near game day — light primer to keep CNS sharp, heavy shooting volume
  {
    id: "thursday-skill-primer",
    name: "Skill + CNS Primer",
    day: "Thursday",
    totalMinutes: 120,
    sections: [
      {
        title: "CNS Primer (Low Volume)",
        duration: "10 min",
        exercises: [
          {
            name: "Broad Jumps",
            category: "power",
            notes: "LOW VOLUME — just waking up the CNS, not fatiguing. Max intent, full rest.",
            sets: [
              { setNumber: 1, targetReps: "3", targetWeight: 0, restSeconds: 90 },
              { setNumber: 2, targetReps: "3", targetWeight: 0, restSeconds: 90 },
              { setNumber: 3, targetReps: "3", targetWeight: 0, restSeconds: 90 },
            ],
          },
          {
            name: "Short Sprints",
            category: "conditioning",
            notes: "3×20m all-out. Activates fast-twitch fibers before game weekend.",
            sets: [
              { setNumber: 1, targetReps: "3 sprints", targetWeight: 0, restSeconds: 90 },
            ],
          },
        ],
      },
      {
        title: "Mobility",
        duration: "10 min",
        exercises: [
          {
            name: "Hip Mobility Flow",
            category: "prehab",
            notes: "90/90s, hip circles, pigeon stretch, deep squat hold. Each side.",
            sets: [
              { setNumber: 1, targetReps: "5 min", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Ankle Mobility",
            category: "prehab",
            notes: "Banded ankle dorsiflexion, calf stretch, ankle circles. Each side.",
            sets: [
              { setNumber: 1, targetReps: "5 min", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
      {
        title: "Heavy Shooting Session",
        duration: "70 min",
        exercises: [
          {
            name: "Form Shooting (Close Range)",
            category: "skill",
            notes: "Start close. 100 makes within 10ft. Perfect mechanics every rep.",
            sets: [
              { setNumber: 1, targetReps: "50 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "50 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Mid-Range Game Shots",
            category: "skill",
            notes: "Elbow, baseline, free-throw line. Off-catch and off-dribble. 100 makes.",
            sets: [
              { setNumber: 1, targetReps: "50 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "50 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "3-Point Shooting (5 Spots)",
            category: "skill",
            notes: "Heavy volume — 1 set per spot: L corner, L wing, top, R wing, R corner. Log makes per spot.",
            sets: [
              { setNumber: 1, targetReps: "20 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "20 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "20 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "20 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 5, targetReps: "20 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Scoring Moves (Game Speed)",
            category: "skill",
            notes: "Step-backs, hesitation pull-ups, floaters, up-and-under. Random order — game simulation.",
            sets: [
              { setNumber: 1, targetReps: "10 min", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "10 min", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
      {
        title: "Cooldown",
        duration: "10 min",
        exercises: [
          {
            name: "Free Throws",
            category: "skill",
            notes: "Simulate end-of-game FTs. Track makes out of 30.",
            sets: [
              { setNumber: 1, targetReps: "30", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Patellar Isometrics (Spanish Squat)",
            category: "prehab",
            notes: "Tendon maintenance before game weekend.",
            sets: [
              { setNumber: 1, targetReps: "45s hold", targetWeight: 0, restSeconds: 30 },
              { setNumber: 2, targetReps: "45s hold", targetWeight: 0, restSeconds: 30 },
              { setNumber: 3, targetReps: "45s hold", targetWeight: 0, restSeconds: 30 },
              { setNumber: 4, targetReps: "45s hold", targetWeight: 0, restSeconds: 30 },
            ],
          },
        ],
      },
    ],
  },

  // ─── DAY E: FRIDAY ─── Full Body Maintenance ───
  // Short, high-intensity full-body lift + light skill
  // Preserves 48hr+ gap before weekend games
  {
    id: "friday-fullbody-maintenance",
    name: "Full Body Maintenance",
    day: "Friday",
    totalMinutes: 120,
    sections: [
      {
        title: "Full Body Strength (High Intensity, Low Volume)",
        duration: "35 min",
        exercises: [
          {
            name: "Trap-Bar Deadlifts",
            category: "strength",
            notes: "Primary hip hinge. Heavy but low volume — 3×3-5. More quad-friendly than conventional.",
            sets: [
              { setNumber: 1, targetReps: "3-5", targetWeight: 80, restSeconds: 180 },
              { setNumber: 2, targetReps: "3-5", targetWeight: 80, restSeconds: 180 },
              { setNumber: 3, targetReps: "3-5", targetWeight: 75, restSeconds: 150 },
            ],
          },
          {
            name: "Bench Press",
            category: "strength",
            notes: "Moderate — 3×5-6. Maintain pressing strength, don't grind.",
            sets: [
              { setNumber: 1, targetReps: "5-6", targetWeight: 55, restSeconds: 120 },
              { setNumber: 2, targetReps: "5-6", targetWeight: 55, restSeconds: 120 },
              { setNumber: 3, targetReps: "6-8", targetWeight: 50, restSeconds: 120 },
            ],
          },
          {
            name: "Pull-ups",
            category: "strength",
            notes: "2nd weekly pull-up session. Bodyweight, max quality reps.",
            sets: [
              { setNumber: 1, targetReps: "max", targetWeight: 0, restSeconds: 90 },
              { setNumber: 2, targetReps: "max", targetWeight: 0, restSeconds: 90 },
            ],
          },
          {
            name: "Walking Lunges",
            category: "strength",
            notes: "Light DBs or bodyweight. Single-leg stability + unilateral strength.",
            sets: [
              { setNumber: 1, targetReps: "10 each", targetWeight: 0, restSeconds: 60 },
              { setNumber: 2, targetReps: "10 each", targetWeight: 0, restSeconds: 60 },
            ],
          },
        ],
      },
      {
        title: "Prehab + Calves",
        duration: "10 min",
        exercises: [
          {
            name: "Patellar Isometrics (Spanish Squat)",
            category: "prehab",
            notes: "3rd session this week. Consistency is what protects the tendon.",
            sets: [
              { setNumber: 1, targetReps: "45s hold", targetWeight: 0, restSeconds: 30 },
              { setNumber: 2, targetReps: "45s hold", targetWeight: 0, restSeconds: 30 },
              { setNumber: 3, targetReps: "45s hold", targetWeight: 0, restSeconds: 30 },
              { setNumber: 4, targetReps: "45s hold", targetWeight: 0, restSeconds: 30 },
            ],
          },
          {
            name: "Single-Leg Calf Raises",
            category: "accessory",
            notes: "2nd calf session. Ankle stiffness helps guard agility.",
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
        duration: "8 min",
        exercises: [
          {
            name: "Ab Wheel Rollouts",
            category: "core",
            notes: "Anti-extension core strength. From knees if needed.",
            sets: [
              { setNumber: 1, targetReps: "10", targetWeight: 0, restSeconds: 45 },
              { setNumber: 2, targetReps: "10", targetWeight: 0, restSeconds: 45 },
              { setNumber: 3, targetReps: "10", targetWeight: 0, restSeconds: 45 },
            ],
          },
          {
            name: "Russian Twists",
            category: "core",
            notes: "12kg KB, feet off ground. Rotational core for basketball.",
            sets: [
              { setNumber: 1, targetReps: "20", targetWeight: 12, restSeconds: 45 },
              { setNumber: 2, targetReps: "20", targetWeight: 12, restSeconds: 45 },
            ],
          },
        ],
      },
      {
        title: "Light Skill Work",
        duration: "55 min",
        exercises: [
          {
            name: "Form Shooting (Close Range)",
            category: "skill",
            notes: "Light session — 50 makes. Keep the touch alive before games.",
            sets: [
              { setNumber: 1, targetReps: "50 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Floaters + Runners",
            category: "skill",
            notes: "Guard finishing package. Off one foot and two. Both sides of the rim.",
            sets: [
              { setNumber: 1, targetReps: "15 makes each side", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "15 makes each side", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Ball Handling (Light)",
            category: "skill",
            notes: "Stationary pound dribbles, crossovers, between legs. Keep the handle sharp.",
            sets: [
              { setNumber: 1, targetReps: "5 min", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "5 min", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Free Throws",
            category: "skill",
            notes: "Track makes out of 20.",
            sets: [
              { setNumber: 1, targetReps: "20", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
    ],
  },
];
