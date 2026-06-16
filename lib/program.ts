import { type WorkoutTemplate } from "./db";

// ═══════════════════════════════════════════════════════════════════
// THE COMPLETE OFFENSIVE WEAPON — 12-Week Periodized Program
// 5'9" / 76→80–82 kg returning guard · 2 hrs/day × 5 days
// Phase 1: Foundation (Wk 1-4) → Phase 2: Power Conversion (Wk 5-8) → Phase 3: Expression (Wk 9-12)
//
// Estimated 1RMs (from 40kg×5 bench test):
// Bench 47kg, Squat ~60kg, Trap-bar DL ~80kg
// RDL ≈ 65% trap-bar (~52kg), Front squat ≈ 85% back squat (~50kg)
// Adjust after Week 0 testing.
// ═══════════════════════════════════════════════════════════════════

export const NBA_PROGRAM: WorkoutTemplate[] = [
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // PHASE 1 — FOUNDATION (Weeks 1–4)
  // Goal: Rebuild max + relative strength, groove tendon health,
  //        keep plyos low/technical. Lean bulk +250–300 kcal.
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // ─── P1 MONDAY: Lower Strength + Power ───
  {
    id: "p1-monday",
    name: "P1 Mon: Lower Strength + Power",
    day: "Monday",
    totalMinutes: 120,
    sections: [
      {
        title: "Warm-up Ramp",
        duration: "8 min",
        exercises: [
          {
            name: "Squat Ramp",
            category: "warmup",
            notes: "bar×8 → 25kg×5 → 35kg×3 → 42kg×2. Don't skip this.",
            sets: [
              { setNumber: 1, targetReps: "8", targetWeight: 20, restSeconds: 60 },
              { setNumber: 2, targetReps: "5", targetWeight: 25, restSeconds: 90 },
              { setNumber: 3, targetReps: "3", targetWeight: 35, restSeconds: 90 },
              { setNumber: 4, targetReps: "2", targetWeight: 42, restSeconds: 120 },
            ],
          },
        ],
      },
      {
        title: "Strength",
        duration: "20 min",
        exercises: [
          {
            name: "Back Squats",
            category: "strength",
            notes: "80% 1RM. Tempo: 3-0-X (3s down, explosive up). ~1-2 RIR.",
            sets: [
              { setNumber: 1, targetReps: "5", targetWeight: 48, restSeconds: 180 },
              { setNumber: 2, targetReps: "5", targetWeight: 48, restSeconds: 180 },
              { setNumber: 3, targetReps: "5", targetWeight: 48, restSeconds: 180 },
              { setNumber: 4, targetReps: "5", targetWeight: 48, restSeconds: 180 },
            ],
          },
          {
            name: "Bulgarian Split Squats",
            category: "strength",
            notes: "RPE 8. Tempo: 2-0-2. Each leg.",
            sets: [
              { setNumber: 1, targetReps: "8 each", targetWeight: 10, restSeconds: 90 },
              { setNumber: 2, targetReps: "8 each", targetWeight: 10, restSeconds: 90 },
              { setNumber: 3, targetReps: "8 each", targetWeight: 10, restSeconds: 90 },
            ],
          },
          {
            name: "Romanian Deadlifts",
            category: "strength",
            notes: "~65% trap-bar DL. Tempo: 3-1-2 (3s down, 1s pause, 2s up).",
            sets: [
              { setNumber: 1, targetReps: "8", targetWeight: 50, restSeconds: 90 },
              { setNumber: 2, targetReps: "8", targetWeight: 50, restSeconds: 90 },
              { setNumber: 3, targetReps: "8", targetWeight: 50, restSeconds: 90 },
            ],
          },
        ],
      },
      {
        title: "Contrast Training",
        duration: "15 min",
        exercises: [
          {
            name: "Half-Squat (Contrast)",
            category: "power",
            notes: "85% 1RM. 3 reps, then IMMEDIATELY do CMJs. Post-activation potentiation.",
            sets: [
              { setNumber: 1, targetReps: "3", targetWeight: 50, restSeconds: 0 },
              { setNumber: 2, targetReps: "3", targetWeight: 50, restSeconds: 0 },
              { setNumber: 3, targetReps: "3", targetWeight: 50, restSeconds: 0 },
              { setNumber: 4, targetReps: "3", targetWeight: 50, restSeconds: 0 },
            ],
          },
          {
            name: "Countermovement Jumps (Contrast)",
            category: "power",
            notes: "Do IMMEDIATELY after each half-squat set. MAX intent. Track height.",
            sets: [
              { setNumber: 1, targetReps: "3", targetWeight: 0, restSeconds: 150 },
              { setNumber: 2, targetReps: "3", targetWeight: 0, restSeconds: 150 },
              { setNumber: 3, targetReps: "3", targetWeight: 0, restSeconds: 150 },
              { setNumber: 4, targetReps: "3", targetWeight: 0, restSeconds: 150 },
            ],
          },
        ],
      },
      {
        title: "Prehab",
        duration: "7 min",
        exercises: [
          {
            name: "Patellar Isometrics (Spanish Squat)",
            category: "prehab",
            notes: "Band around knees, lean back, ~70-80% effort. Protects patellar tendon.",
            sets: [
              { setNumber: 1, targetReps: "45s hold", targetWeight: 0, restSeconds: 60 },
              { setNumber: 2, targetReps: "45s hold", targetWeight: 0, restSeconds: 60 },
              { setNumber: 3, targetReps: "45s hold", targetWeight: 0, restSeconds: 60 },
              { setNumber: 4, targetReps: "45s hold", targetWeight: 0, restSeconds: 60 },
              { setNumber: 5, targetReps: "45s hold", targetWeight: 0, restSeconds: 60 },
            ],
          },
        ],
      },
      {
        title: "Skill Work",
        duration: "60 min",
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
            notes: "Kobe sequence: triple-threat → jab → drive-by → balanced peak-release pull-up. Blocked practice.",
            sets: [
              { setNumber: 1, targetReps: "10 each spot", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "10 each spot", targetWeight: 0, restSeconds: 0 },
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

  // ─── P1 TUESDAY: Skill + Conditioning ───
  {
    id: "p1-tuesday",
    name: "P1 Tue: Skill + Conditioning",
    day: "Tuesday",
    totalMinutes: 120,
    sections: [
      {
        title: "Ball Handling",
        duration: "12 min",
        exercises: [
          {
            name: "Two-Ball Dribbling",
            category: "skill",
            notes: "Pound, crossover, in-out — stationary then full-court. Low handle, eyes up.",
            sets: [
              { setNumber: 1, targetReps: "6 min", targetWeight: 0, restSeconds: 30 },
              { setNumber: 2, targetReps: "6 min", targetWeight: 0, restSeconds: 30 },
            ],
          },
        ],
      },
      {
        title: "Melo Scoring Package",
        duration: "30 min",
        exercises: [
          {
            name: "Jab Series (Triple Threat)",
            category: "skill",
            notes: "Jab → pull-up / jab → rip-through drive / jab → step-back. Both sides.",
            sets: [
              { setNumber: 1, targetReps: "10 each move", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "10 each move", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Mid-Post Turnaround / Fadeaway",
            category: "skill",
            notes: "Catch mid-post → turnaround jumper + fadeaway. Both shoulders. Contact finish.",
            sets: [
              { setNumber: 1, targetReps: "10 each side", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "10 each side", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Up-and-Under + Contact Finishes",
            category: "skill",
            notes: "Pump fake → up-and-under. Two-foot gather, absorb contact, elbow shield finish.",
            sets: [
              { setNumber: 1, targetReps: "10 each side", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "10 each side", targetWeight: 0, restSeconds: 0 },
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
            notes: "6×30m all-out, 30s rest between reps. 3 min between sets.",
            sets: [
              { setNumber: 1, targetReps: "6 sprints", targetWeight: 0, restSeconds: 180 },
              { setNumber: 2, targetReps: "6 sprints", targetWeight: 0, restSeconds: 180 },
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
            notes: "60 makes total. 1 set per spot: L corner, L wing, top, R wing, R corner.",
            sets: [
              { setNumber: 1, targetReps: "12 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "12 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "12 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "12 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 5, targetReps: "12 makes", targetWeight: 0, restSeconds: 0 },
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
            notes: "Shoot FTs fatigued from conditioning. Track makes out of 20.",
            sets: [
              { setNumber: 1, targetReps: "20", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
    ],
  },

  // ─── P1 WEDNESDAY: Upper + Power Microdose ───
  {
    id: "p1-wednesday",
    name: "P1 Wed: Upper + Power Microdose",
    day: "Wednesday",
    totalMinutes: 120,
    sections: [
      {
        title: "Warm-up Ramp",
        duration: "6 min",
        exercises: [
          {
            name: "Bench Ramp",
            category: "warmup",
            notes: "bar×8 → 25kg×5 → 32kg×3, then work sets.",
            sets: [
              { setNumber: 1, targetReps: "8", targetWeight: 20, restSeconds: 60 },
              { setNumber: 2, targetReps: "5", targetWeight: 25, restSeconds: 90 },
              { setNumber: 3, targetReps: "3", targetWeight: 32, restSeconds: 90 },
            ],
          },
        ],
      },
      {
        title: "Strength",
        duration: "35 min",
        exercises: [
          {
            name: "Bench Press",
            category: "strength",
            notes: "78% 1RM. Tempo: 2-1-X (2s down, 1s pause, explosive up).",
            sets: [
              { setNumber: 1, targetReps: "6", targetWeight: 37, restSeconds: 180 },
              { setNumber: 2, targetReps: "6", targetWeight: 37, restSeconds: 180 },
              { setNumber: 3, targetReps: "6", targetWeight: 37, restSeconds: 180 },
              { setNumber: 4, targetReps: "6", targetWeight: 37, restSeconds: 180 },
            ],
          },
          {
            name: "Weighted Pull-ups",
            category: "strength",
            notes: "RPE 8. Tempo: 2-0-2. Add weight when BW×8 is easy.",
            sets: [
              { setNumber: 1, targetReps: "6-8", targetWeight: 0, restSeconds: 120 },
              { setNumber: 2, targetReps: "6-8", targetWeight: 0, restSeconds: 120 },
              { setNumber: 3, targetReps: "6-8", targetWeight: 0, restSeconds: 120 },
              { setNumber: 4, targetReps: "6-8", targetWeight: 0, restSeconds: 120 },
            ],
          },
          {
            name: "1-Arm Dumbbell Row",
            category: "strength",
            notes: "RPE 8. Tempo: 2-1-2. Each side.",
            sets: [
              { setNumber: 1, targetReps: "10 each", targetWeight: 16, restSeconds: 90 },
              { setNumber: 2, targetReps: "10 each", targetWeight: 16, restSeconds: 90 },
              { setNumber: 3, targetReps: "10 each", targetWeight: 16, restSeconds: 90 },
            ],
          },
          {
            name: "Dumbbell Shoulder Press",
            category: "strength",
            notes: "RPE 8. Tempo: 2-0-2. Each hand.",
            sets: [
              { setNumber: 1, targetReps: "10", targetWeight: 10, restSeconds: 90 },
              { setNumber: 2, targetReps: "10", targetWeight: 10, restSeconds: 90 },
              { setNumber: 3, targetReps: "10", targetWeight: 10, restSeconds: 90 },
            ],
          },
        ],
      },
      {
        title: "Power Microdose + Core",
        duration: "12 min",
        exercises: [
          {
            name: "Pogo Hops",
            category: "power",
            notes: "RSI focus — stiff ankles, minimal ground contact. Quality over quantity.",
            sets: [
              { setNumber: 1, targetReps: "10", targetWeight: 0, restSeconds: 120 },
              { setNumber: 2, targetReps: "10", targetWeight: 0, restSeconds: 120 },
              { setNumber: 3, targetReps: "10", targetWeight: 0, restSeconds: 120 },
              { setNumber: 4, targetReps: "10", targetWeight: 0, restSeconds: 120 },
            ],
          },
          {
            name: "Pallof Press",
            category: "core",
            notes: "RPE 7. Anti-rotation. Cable or band. Each side.",
            sets: [
              { setNumber: 1, targetReps: "12 each", targetWeight: 0, restSeconds: 60 },
              { setNumber: 2, targetReps: "12 each", targetWeight: 0, restSeconds: 60 },
              { setNumber: 3, targetReps: "12 each", targetWeight: 0, restSeconds: 60 },
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
            notes: "Make-based: 6/10 each spot minimum. L corner, L wing, top, R wing, R corner.",
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

  // ─── P1 THURSDAY: Skill + Heavy Makes ───
  {
    id: "p1-thursday",
    name: "P1 Thu: Skill + Heavy Makes",
    day: "Thursday",
    totalMinutes: 120,
    sections: [
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
        title: "Prehab",
        duration: "7 min",
        exercises: [
          {
            name: "Patellar Isometrics (Spanish Squat)",
            category: "prehab",
            notes: "2nd session this week. Consistency protects the tendon.",
            sets: [
              { setNumber: 1, targetReps: "45s hold", targetWeight: 0, restSeconds: 60 },
              { setNumber: 2, targetReps: "45s hold", targetWeight: 0, restSeconds: 60 },
              { setNumber: 3, targetReps: "45s hold", targetWeight: 0, restSeconds: 60 },
              { setNumber: 4, targetReps: "45s hold", targetWeight: 0, restSeconds: 60 },
              { setNumber: 5, targetReps: "45s hold", targetWeight: 0, restSeconds: 60 },
            ],
          },
        ],
      },
      {
        title: "Heavy Shooting Session (300+ makes)",
        duration: "75 min",
        exercises: [
          {
            name: "Form Shooting (Close Range)",
            category: "skill",
            notes: "100 makes within 10ft. Perfect mechanics every rep.",
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
            notes: "100+ makes. 1 set per spot: L corner, L wing, top, R wing, R corner.",
            sets: [
              { setNumber: 1, targetReps: "20 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "20 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "20 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "20 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 5, targetReps: "20 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Scoring Moves vs. Defender",
            category: "skill",
            notes: "One go-to move + one counter. Blocked practice this phase.",
            sets: [
              { setNumber: 1, targetReps: "10 min", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "10 min", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
      {
        title: "Cooldown",
        duration: "8 min",
        exercises: [
          {
            name: "Free Throws",
            category: "skill",
            notes: "Log makes per set. Simulate end-of-game.",
            sets: [
              { setNumber: 1, targetReps: "15", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "15", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
    ],
  },

  // ─── P1 FRIDAY: Primer + Maintenance ───
  {
    id: "p1-friday",
    name: "P1 Fri: Primer + Maintenance",
    day: "Friday",
    totalMinutes: 120,
    sections: [
      {
        title: "Strength (Short & Sharp)",
        duration: "30 min",
        exercises: [
          {
            name: "Front Squats",
            category: "strength",
            notes: "70% back squat 1RM. Tempo: 2-0-X. Keep legs fresh for weekend games.",
            sets: [
              { setNumber: 1, targetReps: "5", targetWeight: 42, restSeconds: 150 },
              { setNumber: 2, targetReps: "5", targetWeight: 42, restSeconds: 150 },
              { setNumber: 3, targetReps: "5", targetWeight: 42, restSeconds: 150 },
            ],
          },
          {
            name: "Dumbbell Bench Press",
            category: "strength",
            notes: "RPE 7. Tempo: 2-0-2. Each hand.",
            sets: [
              { setNumber: 1, targetReps: "8", targetWeight: 18, restSeconds: 120 },
              { setNumber: 2, targetReps: "8", targetWeight: 18, restSeconds: 120 },
              { setNumber: 3, targetReps: "8", targetWeight: 18, restSeconds: 120 },
            ],
          },
          {
            name: "Chin-ups",
            category: "strength",
            notes: "Bodyweight. Do max reps minus 2 (leave 2 in the tank). Tempo: 2-0-2.",
            sets: [
              { setNumber: 1, targetReps: "max-2", targetWeight: 0, restSeconds: 120 },
              { setNumber: 2, targetReps: "max-2", targetWeight: 0, restSeconds: 120 },
              { setNumber: 3, targetReps: "max-2", targetWeight: 0, restSeconds: 120 },
            ],
          },
        ],
      },
      {
        title: "Power (Low Volume)",
        duration: "10 min",
        exercises: [
          {
            name: "Low Box Jumps",
            category: "power",
            notes: "Soft landing focus. Step down — don't jump down. Quality reps only.",
            sets: [
              { setNumber: 1, targetReps: "4", targetWeight: 0, restSeconds: 120 },
              { setNumber: 2, targetReps: "4", targetWeight: 0, restSeconds: 120 },
              { setNumber: 3, targetReps: "4", targetWeight: 0, restSeconds: 120 },
              { setNumber: 4, targetReps: "4", targetWeight: 0, restSeconds: 120 },
            ],
          },
        ],
      },
      {
        title: "Light Skill Work",
        duration: "60 min",
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
            notes: "Guard finishing. Off one foot and two. Both sides of the rim.",
            sets: [
              { setNumber: 1, targetReps: "15 makes each side", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "15 makes each side", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Free Throws",
            category: "skill",
            notes: "Game walkthrough + FTs. Track makes out of 20.",
            sets: [
              { setNumber: 1, targetReps: "20", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // PHASE 2 — POWER CONVERSION (Weeks 5–8)
  // Goal: Convert strength to explosive power. Heavier %, lower reps,
  //        real contrast + moderate plyo volume. Bulk +250–300 kcal
  //        unless vertical drops.
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // ─── P2 MONDAY: Lower Strength + Power ───
  {
    id: "p2-monday",
    name: "P2 Mon: Lower Strength + Power",
    day: "Monday",
    totalMinutes: 120,
    sections: [
      {
        title: "Warm-up Ramp",
        duration: "8 min",
        exercises: [
          {
            name: "Squat Ramp",
            category: "warmup",
            notes: "bar×8 → 25kg×5 → 35kg×3 → 45kg×2. Heavier ramp for heavier work.",
            sets: [
              { setNumber: 1, targetReps: "8", targetWeight: 20, restSeconds: 60 },
              { setNumber: 2, targetReps: "5", targetWeight: 25, restSeconds: 90 },
              { setNumber: 3, targetReps: "3", targetWeight: 35, restSeconds: 90 },
              { setNumber: 4, targetReps: "2", targetWeight: 45, restSeconds: 120 },
            ],
          },
        ],
      },
      {
        title: "Strength",
        duration: "18 min",
        exercises: [
          {
            name: "Back Squats",
            category: "strength",
            notes: "87% 1RM. Lower reps, higher intensity than P1. Tempo: 2-0-X.",
            sets: [
              { setNumber: 1, targetReps: "3", targetWeight: 52, restSeconds: 210 },
              { setNumber: 2, targetReps: "3", targetWeight: 52, restSeconds: 210 },
              { setNumber: 3, targetReps: "3", targetWeight: 52, restSeconds: 210 },
              { setNumber: 4, targetReps: "3", targetWeight: 52, restSeconds: 210 },
            ],
          },
        ],
      },
      {
        title: "Contrast Training",
        duration: "18 min",
        exercises: [
          {
            name: "Back Squats (Contrast)",
            category: "power",
            notes: "87% 1RM, 2 reps → immediately do depth-to-CMJ.",
            sets: [
              { setNumber: 1, targetReps: "2", targetWeight: 52, restSeconds: 0 },
              { setNumber: 2, targetReps: "2", targetWeight: 52, restSeconds: 0 },
              { setNumber: 3, targetReps: "2", targetWeight: 52, restSeconds: 0 },
              { setNumber: 4, targetReps: "2", targetWeight: 52, restSeconds: 0 },
            ],
          },
          {
            name: "Depth-to-CMJ",
            category: "power",
            notes: "Step off 30cm box → absorb → explode into max CMJ. Immediately after squat.",
            sets: [
              { setNumber: 1, targetReps: "3", targetWeight: 0, restSeconds: 180 },
              { setNumber: 2, targetReps: "3", targetWeight: 0, restSeconds: 180 },
              { setNumber: 3, targetReps: "3", targetWeight: 0, restSeconds: 180 },
              { setNumber: 4, targetReps: "3", targetWeight: 0, restSeconds: 180 },
            ],
          },
          {
            name: "Broad Jumps",
            category: "power",
            notes: "Max distance, stick the landing. Full rest between sets.",
            sets: [
              { setNumber: 1, targetReps: "3", targetWeight: 0, restSeconds: 150 },
              { setNumber: 2, targetReps: "3", targetWeight: 0, restSeconds: 150 },
              { setNumber: 3, targetReps: "3", targetWeight: 0, restSeconds: 150 },
              { setNumber: 4, targetReps: "3", targetWeight: 0, restSeconds: 150 },
            ],
          },
        ],
      },
      {
        title: "Accessories",
        duration: "15 min",
        exercises: [
          {
            name: "Bulgarian Split Squats",
            category: "strength",
            notes: "RPE 8. Heavier than P1. Each leg.",
            sets: [
              { setNumber: 1, targetReps: "6 each", targetWeight: 14, restSeconds: 90 },
              { setNumber: 2, targetReps: "6 each", targetWeight: 14, restSeconds: 90 },
              { setNumber: 3, targetReps: "6 each", targetWeight: 14, restSeconds: 90 },
            ],
          },
          {
            name: "Romanian Deadlifts",
            category: "strength",
            notes: "~70% trap-bar DL. Tempo: 3-1-2.",
            sets: [
              { setNumber: 1, targetReps: "6", targetWeight: 55, restSeconds: 90 },
              { setNumber: 2, targetReps: "6", targetWeight: 55, restSeconds: 90 },
              { setNumber: 3, targetReps: "6", targetWeight: 55, restSeconds: 90 },
            ],
          },
          {
            name: "Patellar Isometrics (Spanish Squat)",
            category: "prehab",
            notes: "~70-80% effort. Non-negotiable.",
            sets: [
              { setNumber: 1, targetReps: "45s hold", targetWeight: 0, restSeconds: 60 },
              { setNumber: 2, targetReps: "45s hold", targetWeight: 0, restSeconds: 60 },
              { setNumber: 3, targetReps: "45s hold", targetWeight: 0, restSeconds: 60 },
              { setNumber: 4, targetReps: "45s hold", targetWeight: 0, restSeconds: 60 },
              { setNumber: 5, targetReps: "45s hold", targetWeight: 0, restSeconds: 60 },
            ],
          },
        ],
      },
      {
        title: "Skill Work",
        duration: "50 min",
        exercises: [
          {
            name: "Form Shooting (Close Range)",
            category: "skill",
            notes: "100 makes within 10ft.",
            sets: [
              { setNumber: 1, targetReps: "50 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "50 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Pull-up Jumper Footwork",
            category: "skill",
            notes: "Same Kobe sequence but now add the counter move (drop-step/spin).",
            sets: [
              { setNumber: 1, targetReps: "10 each spot", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "10 each spot", targetWeight: 0, restSeconds: 0 },
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

  // ─── P2 TUESDAY: Skill + Conditioning ───
  {
    id: "p2-tuesday",
    name: "P2 Tue: Skill + Conditioning",
    day: "Tuesday",
    totalMinutes: 120,
    sections: [
      {
        title: "Ball Handling",
        duration: "12 min",
        exercises: [
          {
            name: "Two-Ball Dribbling",
            category: "skill",
            notes: "Full-court at speed. Add combo moves: cross → hesi → step-back.",
            sets: [
              { setNumber: 1, targetReps: "6 min", targetWeight: 0, restSeconds: 30 },
              { setNumber: 2, targetReps: "6 min", targetWeight: 0, restSeconds: 30 },
            ],
          },
        ],
      },
      {
        title: "Melo Scoring Package",
        duration: "30 min",
        exercises: [
          {
            name: "Jab Series (Triple Threat)",
            category: "skill",
            notes: "Same as P1. Both sides. Add speed + deception.",
            sets: [
              { setNumber: 1, targetReps: "10 each move", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "10 each move", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Mid-Post Turnaround / Fadeaway",
            category: "skill",
            notes: "Both shoulders. Add pump-fake counter.",
            sets: [
              { setNumber: 1, targetReps: "10 each side", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "10 each side", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Up-and-Under + Contact Finishes",
            category: "skill",
            notes: "Increase contact intensity. Two-foot gather, elbow shield.",
            sets: [
              { setNumber: 1, targetReps: "10 each side", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "10 each side", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
      {
        title: "Conditioning",
        duration: "22 min",
        exercises: [
          {
            name: "Repeated Sprints",
            category: "conditioning",
            notes: "Upgraded from P1: 3 sets (was 2). 6×30m all-out, 30s rest between reps.",
            sets: [
              { setNumber: 1, targetReps: "6 sprints", targetWeight: 0, restSeconds: 180 },
              { setNumber: 2, targetReps: "6 sprints", targetWeight: 0, restSeconds: 180 },
              { setNumber: 3, targetReps: "6 sprints", targetWeight: 0, restSeconds: 180 },
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
            notes: "Same 60 makes. 1 set per spot. Start mixing in off-movement catches.",
            sets: [
              { setNumber: 1, targetReps: "12 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "12 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "12 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "12 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 5, targetReps: "12 makes", targetWeight: 0, restSeconds: 0 },
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
            notes: "Track makes out of 20.",
            sets: [
              { setNumber: 1, targetReps: "20", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
    ],
  },

  // ─── P2 WEDNESDAY: Upper + Power ───
  {
    id: "p2-wednesday",
    name: "P2 Wed: Upper + Power",
    day: "Wednesday",
    totalMinutes: 120,
    sections: [
      {
        title: "Warm-up Ramp",
        duration: "6 min",
        exercises: [
          {
            name: "Bench Ramp",
            category: "warmup",
            notes: "bar×8 → 25kg×5 → 35kg×3, then work sets.",
            sets: [
              { setNumber: 1, targetReps: "8", targetWeight: 20, restSeconds: 60 },
              { setNumber: 2, targetReps: "5", targetWeight: 25, restSeconds: 90 },
              { setNumber: 3, targetReps: "3", targetWeight: 35, restSeconds: 90 },
            ],
          },
        ],
      },
      {
        title: "Strength",
        duration: "35 min",
        exercises: [
          {
            name: "Bench Press",
            category: "strength",
            notes: "85% 1RM. Heavier, fewer reps than P1. Tempo: 2-1-X.",
            sets: [
              { setNumber: 1, targetReps: "4", targetWeight: 40, restSeconds: 210 },
              { setNumber: 2, targetReps: "4", targetWeight: 40, restSeconds: 210 },
              { setNumber: 3, targetReps: "4", targetWeight: 40, restSeconds: 210 },
              { setNumber: 4, targetReps: "4", targetWeight: 40, restSeconds: 210 },
            ],
          },
          {
            name: "Weighted Pull-ups",
            category: "strength",
            notes: "RPE 8. Progress weight from P1.",
            sets: [
              { setNumber: 1, targetReps: "6-8", targetWeight: 0, restSeconds: 120 },
              { setNumber: 2, targetReps: "6-8", targetWeight: 0, restSeconds: 120 },
              { setNumber: 3, targetReps: "6-8", targetWeight: 0, restSeconds: 120 },
              { setNumber: 4, targetReps: "6-8", targetWeight: 0, restSeconds: 120 },
            ],
          },
          {
            name: "1-Arm Dumbbell Row",
            category: "strength",
            notes: "RPE 8. Each side.",
            sets: [
              { setNumber: 1, targetReps: "10 each", targetWeight: 16, restSeconds: 90 },
              { setNumber: 2, targetReps: "10 each", targetWeight: 16, restSeconds: 90 },
              { setNumber: 3, targetReps: "10 each", targetWeight: 16, restSeconds: 90 },
            ],
          },
          {
            name: "Dumbbell Shoulder Press",
            category: "strength",
            notes: "RPE 8. Each hand.",
            sets: [
              { setNumber: 1, targetReps: "10", targetWeight: 10, restSeconds: 90 },
              { setNumber: 2, targetReps: "10", targetWeight: 10, restSeconds: 90 },
              { setNumber: 3, targetReps: "10", targetWeight: 10, restSeconds: 90 },
            ],
          },
        ],
      },
      {
        title: "Power",
        duration: "15 min",
        exercises: [
          {
            name: "Alternating Bounds",
            category: "power",
            notes: "Replaces pogos from P1. Max distance per bound. Each leg.",
            sets: [
              { setNumber: 1, targetReps: "6 each", targetWeight: 0, restSeconds: 120 },
              { setNumber: 2, targetReps: "6 each", targetWeight: 0, restSeconds: 120 },
              { setNumber: 3, targetReps: "6 each", targetWeight: 0, restSeconds: 120 },
              { setNumber: 4, targetReps: "6 each", targetWeight: 0, restSeconds: 120 },
            ],
          },
          {
            name: "Trap-Bar Jumps",
            category: "power",
            notes: "~30% trap-bar 1RM. Explosive hip extension. Full triple extension.",
            sets: [
              { setNumber: 1, targetReps: "3", targetWeight: 25, restSeconds: 150 },
              { setNumber: 2, targetReps: "3", targetWeight: 25, restSeconds: 150 },
              { setNumber: 3, targetReps: "3", targetWeight: 25, restSeconds: 150 },
              { setNumber: 4, targetReps: "3", targetWeight: 25, restSeconds: 150 },
            ],
          },
          {
            name: "Pallof Press",
            category: "core",
            notes: "RPE 7. Each side.",
            sets: [
              { setNumber: 1, targetReps: "12 each", targetWeight: 0, restSeconds: 60 },
              { setNumber: 2, targetReps: "12 each", targetWeight: 0, restSeconds: 60 },
              { setNumber: 3, targetReps: "12 each", targetWeight: 0, restSeconds: 60 },
            ],
          },
        ],
      },
      {
        title: "Skill Work",
        duration: "50 min",
        exercises: [
          {
            name: "3-Point Shooting (5 Spots)",
            category: "skill",
            notes: "Start mixing random/game-speed. L corner, L wing, top, R wing, R corner.",
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
            notes: "Game speed. Both directions.",
            sets: [
              { setNumber: 1, targetReps: "20 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "20 makes", targetWeight: 0, restSeconds: 0 },
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

  // ─── P2 THURSDAY: Skill + Heavy Makes ───
  {
    id: "p2-thursday",
    name: "P2 Thu: Skill + Heavy Makes",
    day: "Thursday",
    totalMinutes: 120,
    sections: [
      {
        title: "Mobility",
        duration: "10 min",
        exercises: [
          {
            name: "Hip Mobility Flow",
            category: "prehab",
            notes: "90/90s, hip circles, pigeon stretch, deep squat hold.",
            sets: [
              { setNumber: 1, targetReps: "5 min", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Ankle Mobility",
            category: "prehab",
            notes: "Banded dorsiflexion, calf stretch, ankle circles.",
            sets: [
              { setNumber: 1, targetReps: "5 min", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
      {
        title: "Prehab",
        duration: "7 min",
        exercises: [
          {
            name: "Patellar Isometrics (Spanish Squat)",
            category: "prehab",
            notes: "2nd session this week.",
            sets: [
              { setNumber: 1, targetReps: "45s hold", targetWeight: 0, restSeconds: 60 },
              { setNumber: 2, targetReps: "45s hold", targetWeight: 0, restSeconds: 60 },
              { setNumber: 3, targetReps: "45s hold", targetWeight: 0, restSeconds: 60 },
              { setNumber: 4, targetReps: "45s hold", targetWeight: 0, restSeconds: 60 },
              { setNumber: 5, targetReps: "45s hold", targetWeight: 0, restSeconds: 60 },
            ],
          },
        ],
      },
      {
        title: "Heavy Shooting Session (400 makes)",
        duration: "75 min",
        exercises: [
          {
            name: "Form Shooting (Close Range)",
            category: "skill",
            notes: "100 makes within 10ft.",
            sets: [
              { setNumber: 1, targetReps: "50 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "50 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Mid-Range Game Shots",
            category: "skill",
            notes: "100 makes. Mix blocked + random/game-speed (half and half).",
            sets: [
              { setNumber: 1, targetReps: "50 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "50 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "3-Point Shooting (5 Spots)",
            category: "skill",
            notes: "100+ makes. Half random/game-speed: timed drill (25 threes in 3:30), off-screen.",
            sets: [
              { setNumber: 1, targetReps: "20 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "20 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "20 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "20 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 5, targetReps: "20 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Scoring Moves vs. Defender",
            category: "skill",
            notes: "Go-to + counter. Add game-speed randomness.",
            sets: [
              { setNumber: 1, targetReps: "10 min", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "10 min", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
      {
        title: "Cooldown",
        duration: "8 min",
        exercises: [
          {
            name: "Free Throws",
            category: "skill",
            notes: "Log makes per set.",
            sets: [
              { setNumber: 1, targetReps: "15", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "15", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
    ],
  },

  // ─── P2 FRIDAY: Primer + Maintenance ───
  {
    id: "p2-friday",
    name: "P2 Fri: Primer + Maintenance",
    day: "Friday",
    totalMinutes: 120,
    sections: [
      {
        title: "Strength (Short & Sharp)",
        duration: "35 min",
        exercises: [
          {
            name: "Hang Clean / High Pull",
            category: "power",
            notes: "NEW for P2. RPE 7. Explosive hip drive. Olympic lift primer.",
            sets: [
              { setNumber: 1, targetReps: "3", targetWeight: 30, restSeconds: 150 },
              { setNumber: 2, targetReps: "3", targetWeight: 30, restSeconds: 150 },
              { setNumber: 3, targetReps: "3", targetWeight: 30, restSeconds: 150 },
              { setNumber: 4, targetReps: "3", targetWeight: 30, restSeconds: 150 },
            ],
          },
          {
            name: "Front Squats",
            category: "strength",
            notes: "75% back squat 1RM. Heavier, fewer reps than P1. Tempo: 2-0-X.",
            sets: [
              { setNumber: 1, targetReps: "3", targetWeight: 45, restSeconds: 150 },
              { setNumber: 2, targetReps: "3", targetWeight: 45, restSeconds: 150 },
              { setNumber: 3, targetReps: "3", targetWeight: 45, restSeconds: 150 },
            ],
          },
          {
            name: "Dumbbell Bench Press",
            category: "strength",
            notes: "RPE 7. Each hand.",
            sets: [
              { setNumber: 1, targetReps: "8", targetWeight: 18, restSeconds: 120 },
              { setNumber: 2, targetReps: "8", targetWeight: 18, restSeconds: 120 },
              { setNumber: 3, targetReps: "8", targetWeight: 18, restSeconds: 120 },
            ],
          },
          {
            name: "Chin-ups",
            category: "strength",
            notes: "Max reps minus 2.",
            sets: [
              { setNumber: 1, targetReps: "max-2", targetWeight: 0, restSeconds: 120 },
              { setNumber: 2, targetReps: "max-2", targetWeight: 0, restSeconds: 120 },
              { setNumber: 3, targetReps: "max-2", targetWeight: 0, restSeconds: 120 },
            ],
          },
        ],
      },
      {
        title: "Power (Low Volume)",
        duration: "10 min",
        exercises: [
          {
            name: "Low Box Jumps",
            category: "power",
            notes: "Soft landing. Step down. Quality.",
            sets: [
              { setNumber: 1, targetReps: "4", targetWeight: 0, restSeconds: 120 },
              { setNumber: 2, targetReps: "4", targetWeight: 0, restSeconds: 120 },
              { setNumber: 3, targetReps: "4", targetWeight: 0, restSeconds: 120 },
              { setNumber: 4, targetReps: "4", targetWeight: 0, restSeconds: 120 },
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
            notes: "50 makes. Touch alive before games.",
            sets: [
              { setNumber: 1, targetReps: "50 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Floaters + Runners",
            category: "skill",
            notes: "Both sides of the rim. Off one foot and two.",
            sets: [
              { setNumber: 1, targetReps: "15 makes each side", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "15 makes each side", targetWeight: 0, restSeconds: 0 },
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

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // PHASE 3 — EXPRESSION / COMPLETE WEAPON (Weeks 9–12)
  // Goal: Peak power expression + integrate against live defense.
  //        Hold 80–82 kg; shift to maintenance if BF creeps.
  //        Week 12 = deload + retest.
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // ─── P3 MONDAY: Lower Strength + Power ───
  {
    id: "p3-monday",
    name: "P3 Mon: Lower Strength + Power",
    day: "Monday",
    totalMinutes: 120,
    sections: [
      {
        title: "Warm-up Ramp",
        duration: "8 min",
        exercises: [
          {
            name: "Squat Ramp",
            category: "warmup",
            notes: "bar×8 → 25kg×5 → 37kg×3 → 48kg×2. Heaviest phase.",
            sets: [
              { setNumber: 1, targetReps: "8", targetWeight: 20, restSeconds: 60 },
              { setNumber: 2, targetReps: "5", targetWeight: 25, restSeconds: 90 },
              { setNumber: 3, targetReps: "3", targetWeight: 37, restSeconds: 90 },
              { setNumber: 4, targetReps: "2", targetWeight: 48, restSeconds: 120 },
            ],
          },
        ],
      },
      {
        title: "Strength",
        duration: "22 min",
        exercises: [
          {
            name: "Back Squats",
            category: "strength",
            notes: "90% 1RM. Heavy doubles. Technique must be perfect — get a spotter. Tempo: X (fast intent).",
            sets: [
              { setNumber: 1, targetReps: "2", targetWeight: 55, restSeconds: 240 },
              { setNumber: 2, targetReps: "2", targetWeight: 55, restSeconds: 240 },
              { setNumber: 3, targetReps: "2", targetWeight: 55, restSeconds: 240 },
              { setNumber: 4, targetReps: "2", targetWeight: 55, restSeconds: 240 },
              { setNumber: 5, targetReps: "2", targetWeight: 55, restSeconds: 240 },
            ],
          },
        ],
      },
      {
        title: "Contrast + Plyometrics",
        duration: "20 min",
        exercises: [
          {
            name: "Back Squats (Contrast)",
            category: "power",
            notes: "90% 1RM, 2 reps → immediately depth jump.",
            sets: [
              { setNumber: 1, targetReps: "2", targetWeight: 55, restSeconds: 0 },
              { setNumber: 2, targetReps: "2", targetWeight: 55, restSeconds: 0 },
              { setNumber: 3, targetReps: "2", targetWeight: 55, restSeconds: 0 },
              { setNumber: 4, targetReps: "2", targetWeight: 55, restSeconds: 0 },
            ],
          },
          {
            name: "Depth Jumps",
            category: "power",
            notes: "Step off 30-40cm box → reactive max jump. Only if squat ≥1.5× BW and RSI supports it.",
            sets: [
              { setNumber: 1, targetReps: "4", targetWeight: 0, restSeconds: 180 },
              { setNumber: 2, targetReps: "4", targetWeight: 0, restSeconds: 180 },
              { setNumber: 3, targetReps: "4", targetWeight: 0, restSeconds: 180 },
              { setNumber: 4, targetReps: "4", targetWeight: 0, restSeconds: 180 },
            ],
          },
          {
            name: "Single-Leg Bounds",
            category: "power",
            notes: "Max distance per bound, controlled landing. Each leg.",
            sets: [
              { setNumber: 1, targetReps: "5 each", targetWeight: 0, restSeconds: 150 },
              { setNumber: 2, targetReps: "5 each", targetWeight: 0, restSeconds: 150 },
              { setNumber: 3, targetReps: "5 each", targetWeight: 0, restSeconds: 150 },
            ],
          },
          {
            name: "Trap-Bar Jumps",
            category: "power",
            notes: "~30% 1RM. Full triple extension.",
            sets: [
              { setNumber: 1, targetReps: "3", targetWeight: 25, restSeconds: 150 },
              { setNumber: 2, targetReps: "3", targetWeight: 25, restSeconds: 150 },
              { setNumber: 3, targetReps: "3", targetWeight: 25, restSeconds: 150 },
              { setNumber: 4, targetReps: "3", targetWeight: 25, restSeconds: 150 },
            ],
          },
        ],
      },
      {
        title: "Accessories + Prehab",
        duration: "12 min",
        exercises: [
          {
            name: "Romanian Deadlifts",
            category: "strength",
            notes: "~72% trap-bar DL. Tempo: 3-1-2.",
            sets: [
              { setNumber: 1, targetReps: "5", targetWeight: 57, restSeconds: 90 },
              { setNumber: 2, targetReps: "5", targetWeight: 57, restSeconds: 90 },
              { setNumber: 3, targetReps: "5", targetWeight: 57, restSeconds: 90 },
            ],
          },
          {
            name: "Patellar Isometrics (Spanish Squat)",
            category: "prehab",
            notes: "Even more critical in P3 with heavier loads.",
            sets: [
              { setNumber: 1, targetReps: "45s hold", targetWeight: 0, restSeconds: 60 },
              { setNumber: 2, targetReps: "45s hold", targetWeight: 0, restSeconds: 60 },
              { setNumber: 3, targetReps: "45s hold", targetWeight: 0, restSeconds: 60 },
              { setNumber: 4, targetReps: "45s hold", targetWeight: 0, restSeconds: 60 },
              { setNumber: 5, targetReps: "45s hold", targetWeight: 0, restSeconds: 60 },
            ],
          },
        ],
      },
      {
        title: "Skill Work",
        duration: "45 min",
        exercises: [
          {
            name: "Form Shooting (Close Range)",
            category: "skill",
            notes: "100 makes.",
            sets: [
              { setNumber: 1, targetReps: "50 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "50 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Pull-up Jumper Footwork",
            category: "skill",
            notes: "Go-to + counter at game speed. Random practice dominates now.",
            sets: [
              { setNumber: 1, targetReps: "10 each spot", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "10 each spot", targetWeight: 0, restSeconds: 0 },
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

  // ─── P3 TUESDAY: Skill + Game-Specific Conditioning ───
  {
    id: "p3-tuesday",
    name: "P3 Tue: Skill + Game Conditioning",
    day: "Tuesday",
    totalMinutes: 120,
    sections: [
      {
        title: "Ball Handling",
        duration: "12 min",
        exercises: [
          {
            name: "Two-Ball Dribbling",
            category: "skill",
            notes: "Full-court at max speed. Game-speed combos.",
            sets: [
              { setNumber: 1, targetReps: "6 min", targetWeight: 0, restSeconds: 30 },
              { setNumber: 2, targetReps: "6 min", targetWeight: 0, restSeconds: 30 },
            ],
          },
        ],
      },
      {
        title: "Scoring Package (Game Speed)",
        duration: "30 min",
        exercises: [
          {
            name: "Jab Series (Triple Threat)",
            category: "skill",
            notes: "Full speed. Random order — simulate reads. Both sides.",
            sets: [
              { setNumber: 1, targetReps: "10 each move", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "10 each move", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Mid-Post Turnaround / Fadeaway",
            category: "skill",
            notes: "Full package with counters. Game speed.",
            sets: [
              { setNumber: 1, targetReps: "10 each side", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "10 each side", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Scoring Moves vs. Live Defense",
            category: "skill",
            notes: "Full scoring packages against live defender. 1-on-1 from triple threat.",
            sets: [
              { setNumber: 1, targetReps: "10 possessions", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "10 possessions", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
      {
        title: "Game-Specific Conditioning",
        duration: "22 min",
        exercises: [
          {
            name: "Reactive Sprints",
            category: "conditioning",
            notes: "Replaces straight sprints. Sprint on visual/audio cue. Game-specific reaction.",
            sets: [
              { setNumber: 1, targetReps: "6 sprints", targetWeight: 0, restSeconds: 180 },
              { setNumber: 2, targetReps: "6 sprints", targetWeight: 0, restSeconds: 180 },
              { setNumber: 3, targetReps: "6 sprints", targetWeight: 0, restSeconds: 180 },
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
            notes: "Game-speed catches. Off-movement, off-screen. 1 set per spot.",
            sets: [
              { setNumber: 1, targetReps: "12 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "12 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "12 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "12 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 5, targetReps: "12 makes", targetWeight: 0, restSeconds: 0 },
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
            notes: "Track makes out of 20.",
            sets: [
              { setNumber: 1, targetReps: "20", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
    ],
  },

  // ─── P3 WEDNESDAY: Upper + Power ───
  {
    id: "p3-wednesday",
    name: "P3 Wed: Upper + Power",
    day: "Wednesday",
    totalMinutes: 120,
    sections: [
      {
        title: "Warm-up Ramp",
        duration: "6 min",
        exercises: [
          {
            name: "Bench Ramp",
            category: "warmup",
            notes: "bar×8 → 25kg×5 → 35kg×3, then work sets.",
            sets: [
              { setNumber: 1, targetReps: "8", targetWeight: 20, restSeconds: 60 },
              { setNumber: 2, targetReps: "5", targetWeight: 25, restSeconds: 90 },
              { setNumber: 3, targetReps: "3", targetWeight: 35, restSeconds: 90 },
            ],
          },
        ],
      },
      {
        title: "Strength",
        duration: "35 min",
        exercises: [
          {
            name: "Bench Press",
            category: "strength",
            notes: "87% 1RM. Heavy triples. Tempo: 2-1-X.",
            sets: [
              { setNumber: 1, targetReps: "3", targetWeight: 40, restSeconds: 210 },
              { setNumber: 2, targetReps: "3", targetWeight: 40, restSeconds: 210 },
              { setNumber: 3, targetReps: "3", targetWeight: 40, restSeconds: 210 },
              { setNumber: 4, targetReps: "3", targetWeight: 40, restSeconds: 210 },
              { setNumber: 5, targetReps: "3", targetWeight: 40, restSeconds: 210 },
            ],
          },
          {
            name: "Weighted Pull-ups",
            category: "strength",
            notes: "RPE 8. Heaviest phase — add weight.",
            sets: [
              { setNumber: 1, targetReps: "6-8", targetWeight: 0, restSeconds: 120 },
              { setNumber: 2, targetReps: "6-8", targetWeight: 0, restSeconds: 120 },
              { setNumber: 3, targetReps: "6-8", targetWeight: 0, restSeconds: 120 },
              { setNumber: 4, targetReps: "6-8", targetWeight: 0, restSeconds: 120 },
            ],
          },
          {
            name: "1-Arm Dumbbell Row",
            category: "strength",
            notes: "RPE 8. Each side.",
            sets: [
              { setNumber: 1, targetReps: "10 each", targetWeight: 16, restSeconds: 90 },
              { setNumber: 2, targetReps: "10 each", targetWeight: 16, restSeconds: 90 },
              { setNumber: 3, targetReps: "10 each", targetWeight: 16, restSeconds: 90 },
            ],
          },
          {
            name: "Dumbbell Shoulder Press",
            category: "strength",
            notes: "RPE 8. Each hand.",
            sets: [
              { setNumber: 1, targetReps: "10", targetWeight: 10, restSeconds: 90 },
              { setNumber: 2, targetReps: "10", targetWeight: 10, restSeconds: 90 },
              { setNumber: 3, targetReps: "10", targetWeight: 10, restSeconds: 90 },
            ],
          },
        ],
      },
      {
        title: "Power",
        duration: "15 min",
        exercises: [
          {
            name: "Lateral Bounds",
            category: "power",
            notes: "NEW for P3. Max distance, stick landing. Guard agility. Each side.",
            sets: [
              { setNumber: 1, targetReps: "6 each", targetWeight: 0, restSeconds: 120 },
              { setNumber: 2, targetReps: "6 each", targetWeight: 0, restSeconds: 120 },
              { setNumber: 3, targetReps: "6 each", targetWeight: 0, restSeconds: 120 },
            ],
          },
          {
            name: "Single-Leg Pogos",
            category: "power",
            notes: "NEW for P3. Max RSI — stiff ankle, minimal contact time. Each leg.",
            sets: [
              { setNumber: 1, targetReps: "8 each", targetWeight: 0, restSeconds: 120 },
              { setNumber: 2, targetReps: "8 each", targetWeight: 0, restSeconds: 120 },
              { setNumber: 3, targetReps: "8 each", targetWeight: 0, restSeconds: 120 },
            ],
          },
          {
            name: "Pallof Press",
            category: "core",
            notes: "RPE 7. Each side.",
            sets: [
              { setNumber: 1, targetReps: "12 each", targetWeight: 0, restSeconds: 60 },
              { setNumber: 2, targetReps: "12 each", targetWeight: 0, restSeconds: 60 },
              { setNumber: 3, targetReps: "12 each", targetWeight: 0, restSeconds: 60 },
            ],
          },
        ],
      },
      {
        title: "Skill Work",
        duration: "50 min",
        exercises: [
          {
            name: "3-Point Shooting (5 Spots)",
            category: "skill",
            notes: "Random/game-speed dominates. Off-screen, off-dribble, contested. 1 set per spot.",
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
            notes: "Game speed. Random angles.",
            sets: [
              { setNumber: 1, targetReps: "20 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "20 makes", targetWeight: 0, restSeconds: 0 },
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

  // ─── P3 THURSDAY: Skill + Heavy Makes ───
  {
    id: "p3-thursday",
    name: "P3 Thu: Skill + Heavy Makes",
    day: "Thursday",
    totalMinutes: 120,
    sections: [
      {
        title: "Mobility",
        duration: "10 min",
        exercises: [
          {
            name: "Hip Mobility Flow",
            category: "prehab",
            notes: "90/90s, hip circles, pigeon stretch, deep squat hold.",
            sets: [
              { setNumber: 1, targetReps: "5 min", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Ankle Mobility",
            category: "prehab",
            notes: "Banded dorsiflexion, calf stretch, ankle circles.",
            sets: [
              { setNumber: 1, targetReps: "5 min", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
      {
        title: "Prehab",
        duration: "7 min",
        exercises: [
          {
            name: "Patellar Isometrics (Spanish Squat)",
            category: "prehab",
            notes: "Critical with P3 loads.",
            sets: [
              { setNumber: 1, targetReps: "45s hold", targetWeight: 0, restSeconds: 60 },
              { setNumber: 2, targetReps: "45s hold", targetWeight: 0, restSeconds: 60 },
              { setNumber: 3, targetReps: "45s hold", targetWeight: 0, restSeconds: 60 },
              { setNumber: 4, targetReps: "45s hold", targetWeight: 0, restSeconds: 60 },
              { setNumber: 5, targetReps: "45s hold", targetWeight: 0, restSeconds: 60 },
            ],
          },
        ],
      },
      {
        title: "Heavy Shooting Session (400-500 makes)",
        duration: "75 min",
        exercises: [
          {
            name: "Form Shooting (Close Range)",
            category: "skill",
            notes: "100 makes.",
            sets: [
              { setNumber: 1, targetReps: "50 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "50 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Mid-Range Game Shots",
            category: "skill",
            notes: "100 makes. Random/game-speed ≥70% of reps.",
            sets: [
              { setNumber: 1, targetReps: "50 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "50 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "3-Point Shooting (5 Spots)",
            category: "skill",
            notes: "150-200 makes. Random ≥70%: timed drills, off-screen, contested. 1 set per spot.",
            sets: [
              { setNumber: 1, targetReps: "30 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "30 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "30 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "30 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 5, targetReps: "30 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Scoring Moves vs. Live Defense",
            category: "skill",
            notes: "Full packages. Random reads. 1-on-1 from triple threat + off ball screen.",
            sets: [
              { setNumber: 1, targetReps: "10 possessions", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "10 possessions", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
      {
        title: "Cooldown",
        duration: "8 min",
        exercises: [
          {
            name: "Free Throws",
            category: "skill",
            notes: "Log makes per set.",
            sets: [
              { setNumber: 1, targetReps: "15", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "15", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
    ],
  },

  // ─── P3 FRIDAY: Primer Only ───
  {
    id: "p3-friday",
    name: "P3 Fri: Primer Only",
    day: "Friday",
    totalMinutes: 120,
    sections: [
      {
        title: "Strength (Primer — leave legs fresh)",
        duration: "25 min",
        exercises: [
          {
            name: "Front Squats",
            category: "strength",
            notes: "75% back squat 1RM. Doubles only — primer, not training.",
            sets: [
              { setNumber: 1, targetReps: "2", targetWeight: 45, restSeconds: 150 },
              { setNumber: 2, targetReps: "2", targetWeight: 45, restSeconds: 150 },
              { setNumber: 3, targetReps: "2", targetWeight: 45, restSeconds: 150 },
            ],
          },
          {
            name: "Low Box Jumps",
            category: "power",
            notes: "3×3 only. Soft landing. CNS activation, not fatigue.",
            sets: [
              { setNumber: 1, targetReps: "3", targetWeight: 0, restSeconds: 120 },
              { setNumber: 2, targetReps: "3", targetWeight: 0, restSeconds: 120 },
              { setNumber: 3, targetReps: "3", targetWeight: 0, restSeconds: 120 },
            ],
          },
          {
            name: "Dumbbell Bench Press",
            category: "strength",
            notes: "RPE 6-7. Light. Each hand.",
            sets: [
              { setNumber: 1, targetReps: "8", targetWeight: 16, restSeconds: 90 },
              { setNumber: 2, targetReps: "8", targetWeight: 16, restSeconds: 90 },
              { setNumber: 3, targetReps: "8", targetWeight: 16, restSeconds: 90 },
            ],
          },
        ],
      },
      {
        title: "Light Skill Work",
        duration: "60 min",
        exercises: [
          {
            name: "Form Shooting (Close Range)",
            category: "skill",
            notes: "50 makes. Touch alive before games.",
            sets: [
              { setNumber: 1, targetReps: "50 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Floaters + Runners",
            category: "skill",
            notes: "Both sides. Keep the guard finishing sharp.",
            sets: [
              { setNumber: 1, targetReps: "15 makes each side", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "15 makes each side", targetWeight: 0, restSeconds: 0 },
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
