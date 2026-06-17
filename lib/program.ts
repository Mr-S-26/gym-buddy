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
  // ─── UNIVERSAL WARM-UP ───
  {
    id: "warmup-universal",
    name: "Universal Warm-up",
    day: "Every Day",
    totalMinutes: 10,
    sections: [
      {
        title: "Raise Temperature",
        duration: "4 min",
        exercises: [
          {
            name: "Easy Bike / Jog",
            category: "warmup",
            notes: "3-5 min easy pace. Just get the blood flowing and raise body temperature.",
            sets: [
              { setNumber: 1, targetReps: "3-5 min", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
      {
        title: "Dynamic Mobility",
        duration: "5 min",
        exercises: [
          {
            name: "Leg Swings (Front/Back + Lateral)",
            category: "warmup",
            notes: "10 each direction, each leg. Hold a wall for balance. Full range of motion.",
            sets: [
              { setNumber: 1, targetReps: "10 each direction/leg", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "World's Greatest Stretch",
            category: "warmup",
            notes: "Lunge → rotate → reach. Opens hips, thoracic spine, and ankles. 5 each side.",
            sets: [
              { setNumber: 1, targetReps: "5 each side", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Ankle Rocks + Hip 90/90",
            category: "warmup",
            notes: "Ankle rocks: 15/side (knees over toes). Hip 90/90: 8/side (rotate between internal/external).",
            sets: [
              { setNumber: 1, targetReps: "15 + 8 each side", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Glute Bridge + Bodyweight Squat",
            category: "warmup",
            notes: "Glute bridge ×15 (squeeze at top). Bodyweight squat ×10 (full depth, controlled).",
            sets: [
              { setNumber: 1, targetReps: "15 + 10", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
      {
        title: "Activation (pick based on session)",
        duration: "1 min",
        exercises: [
          {
            name: "Pre-Lifting: Ramp Sets",
            category: "warmup",
            notes: "Before lifting → do the ramp sets listed on that day's first big lift (squat ramp, bench ramp, etc.).",
            sets: [
              { setNumber: 1, targetReps: "see day's ramp", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Pre-Plyos/Court: Build-Up Sprints + Pogos",
            category: "warmup",
            notes: "Before plyos or court → 3 progressive build-up sprints (50%, 70%, 90%) + 5 low pogo hops.",
            sets: [
              { setNumber: 1, targetReps: "3 sprints + 5 pogos", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
    ],
  },

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
        title: "Block 0 — Form Shooting",
        duration: "15 min",
        exercises: [
          {
            name: "One-Hand Form (Under Rim)",
            category: "skill",
            notes: "~3ft out, shooting hand only. Wrist snap, hold follow-through. 25 makes.",
            sets: [
              { setNumber: 1, targetReps: "25 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Two-Hand Close Form",
            category: "skill",
            notes: "~6-8ft, normal grip, no jump. Groove the release. 25 makes.",
            sets: [
              { setNumber: 1, targetReps: "25 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Four-Way Form Shooting",
            category: "skill",
            notes: "~10ft. 5 makes each: front, left 45, right 45, step further back. ~50 makes total.",
            sets: [
              { setNumber: 1, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 5, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 6, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 7, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 8, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 9, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 10, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
      {
        title: "Block A — Kobe Pull-Up Footwork",
        duration: "35 min",
        exercises: [
          {
            name: "Triple-Threat Jab Freeze",
            category: "skill",
            notes: "Catch triple threat, hard jab at defender's front foot, rip back, rise into jumper. Blocked practice. 10 makes each elbow.",
            sets: [
              { setNumber: 1, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "One-Dribble Pull-Up",
            category: "skill",
            notes: "Start wing inside arc ~17ft. Jab → 1 hard dribble toward middle → plant inside foot, gather, rise on 1-2 step. Blocked. 8 makes each: L wing, R wing, L elbow, R elbow.",
            sets: [
              { setNumber: 1, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Go-To + Counter",
            category: "skill",
            notes: "Go-to: jab → cross to middle → pull-up. Counter: same setup → spin or step-back. Blocked. 10 go-to + 10 counter from fav spot, then alternate randomly.",
            sets: [
              { setNumber: 1, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
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
        title: "Block E — Ball Handling",
        duration: "12 min",
        exercises: [
          {
            name: "Two-Ball Pound Low",
            category: "skill",
            notes: "Below knee, eyes up. 3x30s. Blocked practice.",
            sets: [
              { setNumber: 1, targetReps: "30s", targetWeight: 0, restSeconds: 15 },
              { setNumber: 2, targetReps: "30s", targetWeight: 0, restSeconds: 15 },
              { setNumber: 3, targetReps: "30s", targetWeight: 0, restSeconds: 15 },
            ],
          },
          {
            name: "Two-Ball Crossover",
            category: "skill",
            notes: "3x20 reps. Tight and snappy crosses.",
            sets: [
              { setNumber: 1, targetReps: "20", targetWeight: 0, restSeconds: 15 },
              { setNumber: 2, targetReps: "20", targetWeight: 0, restSeconds: 15 },
              { setNumber: 3, targetReps: "20", targetWeight: 0, restSeconds: 15 },
            ],
          },
          {
            name: "Single-Ball Combo",
            category: "skill",
            notes: "Cross/between/behind combos. 2 min continuous, full speed.",
            sets: [
              { setNumber: 1, targetReps: "2 min", targetWeight: 0, restSeconds: 30 },
            ],
          },
          {
            name: "Attack Series",
            category: "skill",
            notes: "Hesi→go, cross→go, between→pull-up. 5 each, each ends in shot/finish.",
            sets: [
              { setNumber: 1, targetReps: "5 reps", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "5 reps", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "5 reps", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Full-Court Speed Handle",
            category: "skill",
            notes: "4 lengths, crossover every 2 steps. Game speed.",
            sets: [
              { setNumber: 1, targetReps: "4 lengths", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
      {
        title: "Block D — Melo Paint/Post Package",
        duration: "30 min",
        exercises: [
          {
            name: "Jab Series — Jab & Shoot",
            category: "skill",
            notes: "Face-up, right slot/wing. Jab → shoot (defender gives space). Blocked. 8 makes each side.",
            sets: [
              { setNumber: 1, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Jab Series — Rip-Through Drive",
            category: "skill",
            notes: "Jab → rip-through one-dribble pull-up/finish (defender bites). 8 makes each side.",
            sets: [
              { setNumber: 1, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Jab Series — Double Jab Drive",
            category: "skill",
            notes: "Jab → jab → drive (defender doesn't react). 8 makes each side.",
            sets: [
              { setNumber: 1, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Mid-Post Turnaround",
            category: "skill",
            notes: "Right + left block. Drop step baseline, turn over inside shoulder, rise. 8 makes per side.",
            sets: [
              { setNumber: 1, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Mid-Post Fadeaway",
            category: "skill",
            notes: "Turn to middle, fade slightly, square in air. 6 makes per side.",
            sets: [
              { setNumber: 1, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Up-and-Under",
            category: "skill",
            notes: "Shot fake → step through under defender → finish. 6 makes per side.",
            sets: [
              { setNumber: 1, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Contact Finishes",
            category: "skill",
            notes: "Two-foot gather, jump into contact, shield with off-elbow, finish high off glass. 10 makes per side.",
            sets: [
              { setNumber: 1, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
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
        title: "Block C — Catch-and-Shoot 5-Spot",
        duration: "25 min",
        exercises: [
          {
            name: "Catch-and-Shoot (5 Spots)",
            category: "skill",
            notes: "Catch on hop or 1-2 into shot, square, rise. Blocked. Make 6/10 (60%) each spot. L corner, L wing, top, R wing, R corner.",
            sets: [
              { setNumber: 1, targetReps: "6/10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "6/10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "6/10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "6/10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 5, targetReps: "6/10 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Off-the-Move Catch-and-Shoot",
            category: "skill",
            notes: "Start under rim, sprint to spot, plant, catch, shoot. Inside foot down first, square fast. 5 makes per spot.",
            sets: [
              { setNumber: 1, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 5, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
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
        title: "Block 0 — Form Shooting",
        duration: "15 min",
        exercises: [
          {
            name: "One-Hand Form (Under Rim)",
            category: "skill",
            notes: "~3ft out, shooting hand only. Wrist snap, hold follow-through. 25 makes.",
            sets: [
              { setNumber: 1, targetReps: "25 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Two-Hand Close Form",
            category: "skill",
            notes: "~6-8ft, normal grip, no jump. 25 makes.",
            sets: [
              { setNumber: 1, targetReps: "25 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Four-Way Form Shooting",
            category: "skill",
            notes: "~10ft. 5 makes each: front, left 45, right 45, step further back. ~50 makes total.",
            sets: [
              { setNumber: 1, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 5, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 6, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 7, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 8, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 9, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 10, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
      {
        title: "Block B — Off-Dribble Pull-Ups & Step-Backs",
        duration: "25 min",
        exercises: [
          {
            name: "Stationary Pull-Up",
            category: "skill",
            notes: "Right wing, one dribble in, gather, rise, shoot. Blocked. 8 makes per wing + top = 24.",
            sets: [
              { setNumber: 1, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Drive → Pull-Up",
            category: "skill",
            notes: "Start at 3-pt line, 2 hard dribbles toward elbow, plant, gather, pull up. 8 makes each side.",
            sets: [
              { setNumber: 1, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Drive → Hesi → Step-Back",
            category: "skill",
            notes: "1-2 hard dribbles toward paint, hesi at elbow, push off inside foot, step back behind arc, gather and rise. Cue: hesi=freeze, step-back=separation, base=accuracy. 6 per wing + 6 top = 18.",
            sets: [
              { setNumber: 1, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Crossover Step-Back Counter",
            category: "skill",
            notes: "Drive → between-legs or cross → step-back. 6 makes per side.",
            sets: [
              { setNumber: 1, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
      {
        title: "Block C — Catch-and-Shoot 5-Spot",
        duration: "15 min",
        exercises: [
          {
            name: "Catch-and-Shoot (5 Spots)",
            category: "skill",
            notes: "Catch on hop or 1-2 into shot, square, rise. Blocked. Make 6/10 (60%) each spot.",
            sets: [
              { setNumber: 1, targetReps: "6/10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "6/10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "6/10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "6/10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 5, targetReps: "6/10 makes", targetWeight: 0, restSeconds: 0 },
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
        title: "Block F — Heavy Makes (300-500)",
        duration: "75 min",
        exercises: [
          {
            name: "Form Opener (Block 0)",
            category: "skill",
            notes: "One-hand 25 + two-hand 25 + four-way 50 = 100 makes. Same Block 0 sequence.",
            sets: [
              { setNumber: 1, targetReps: "25 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "25 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "50 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Mid-Range Circuit (5 Spots)",
            category: "skill",
            notes: "Both elbows, both wings, top of key. Blocked. 8 makes each spot = 40 total.",
            sets: [
              { setNumber: 1, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 5, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "3-Point Circuit (5 Spots x2 Laps)",
            category: "skill",
            notes: "5 spots, make 6 each = 30 per lap, 2 laps = 60 total. Blocked practice.",
            sets: [
              { setNumber: 1, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 5, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 6, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 7, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 8, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 9, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 10, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Free Throws (Fatigued)",
            category: "skill",
            notes: "Sets of 10. Do 5 push-ups before each set to simulate fatigue. 40 total makes.",
            sets: [
              { setNumber: 1, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Off-Dribble Integration",
            category: "skill",
            notes: "Step-back + pull-up mixed/random. 30 makes total. Blocked practice.",
            sets: [
              { setNumber: 1, targetReps: "15 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "15 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Scoring vs. Defender",
            category: "skill",
            notes: "Go-to + counter + one Melo post move. 10-15 possessions. Blocked practice.",
            sets: [
              { setNumber: 1, targetReps: "10 possessions", targetWeight: 0, restSeconds: 0 },
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
            name: "Light Form Shooting",
            category: "skill",
            notes: "50 makes total. One-hand 15 + two-hand 15 + four-way 20. Keep touch alive before games.",
            sets: [
              { setNumber: 1, targetReps: "15 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "15 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "20 makes", targetWeight: 0, restSeconds: 0 },
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
        title: "Block 0 — Form Shooting",
        duration: "15 min",
        exercises: [
          {
            name: "One-Hand Form (Under Rim)",
            category: "skill",
            notes: "~3ft out, shooting hand only. Wrist snap, hold follow-through. 25 makes.",
            sets: [
              { setNumber: 1, targetReps: "25 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Two-Hand Close Form",
            category: "skill",
            notes: "~6-8ft, normal grip, no jump. 25 makes.",
            sets: [
              { setNumber: 1, targetReps: "25 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Four-Way Form Shooting",
            category: "skill",
            notes: "~10ft. 5 makes each: front, left 45, right 45, step further back. ~50 makes total.",
            sets: [
              { setNumber: 1, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 5, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 6, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 7, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 8, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 9, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 10, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
      {
        title: "Block A — Kobe Pull-Up Footwork",
        duration: "25 min",
        exercises: [
          {
            name: "Triple-Threat Jab Freeze",
            category: "skill",
            notes: "Hard jab, rip back, rise into jumper. Mix blocked + game-speed. Add counter (drop-step/spin). 10 makes each elbow.",
            sets: [
              { setNumber: 1, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "One-Dribble Pull-Up",
            category: "skill",
            notes: "Jab → 1 hard dribble → plant inside foot, gather, rise. Mix blocked + game-speed. Add token defender. 8 makes x 4 spots.",
            sets: [
              { setNumber: 1, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Go-To + Counter (Timed)",
            category: "skill",
            notes: "Go-to: jab → cross → pull-up. Counter: spin/step-back. Mix blocked + game-speed. Alternate randomly. 10 go-to + 10 counter.",
            sets: [
              { setNumber: 1, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
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
        title: "Block E — Ball Handling",
        duration: "12 min",
        exercises: [
          {
            name: "Two-Ball Pound Low",
            category: "skill",
            notes: "Below knee, eyes up. 3x30s. Add speed from P1.",
            sets: [
              { setNumber: 1, targetReps: "30s", targetWeight: 0, restSeconds: 15 },
              { setNumber: 2, targetReps: "30s", targetWeight: 0, restSeconds: 15 },
              { setNumber: 3, targetReps: "30s", targetWeight: 0, restSeconds: 15 },
            ],
          },
          {
            name: "Two-Ball Crossover",
            category: "skill",
            notes: "3x20 reps. Tight and snappy. Add combo moves: cross → hesi → step-back.",
            sets: [
              { setNumber: 1, targetReps: "20", targetWeight: 0, restSeconds: 15 },
              { setNumber: 2, targetReps: "20", targetWeight: 0, restSeconds: 15 },
              { setNumber: 3, targetReps: "20", targetWeight: 0, restSeconds: 15 },
            ],
          },
          {
            name: "Single-Ball Combo",
            category: "skill",
            notes: "Cross/between/behind combos. 2 min continuous, full speed. Game-speed moves.",
            sets: [
              { setNumber: 1, targetReps: "2 min", targetWeight: 0, restSeconds: 30 },
            ],
          },
          {
            name: "Attack Series",
            category: "skill",
            notes: "Hesi→go, cross→go, between→pull-up. 5 each, each ends in shot/finish. Add deception.",
            sets: [
              { setNumber: 1, targetReps: "5 reps", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "5 reps", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "5 reps", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Full-Court Speed Handle",
            category: "skill",
            notes: "4 lengths, crossover every 2 steps. Full-court at speed.",
            sets: [
              { setNumber: 1, targetReps: "4 lengths", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
      {
        title: "Block D — Melo Paint/Post Package",
        duration: "30 min",
        exercises: [
          {
            name: "Jab Series — Jab & Shoot",
            category: "skill",
            notes: "Face-up, right slot/wing. Jab → shoot. Mix blocked + game-speed. Add deception. 8 makes each side.",
            sets: [
              { setNumber: 1, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Jab Series — Rip-Through Drive",
            category: "skill",
            notes: "Jab → rip-through one-dribble pull-up/finish. Mix blocked + game-speed. 8 makes each side.",
            sets: [
              { setNumber: 1, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Jab Series — Double Jab Drive",
            category: "skill",
            notes: "Jab → jab → drive. Add speed + deception. 8 makes each side.",
            sets: [
              { setNumber: 1, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Mid-Post Turnaround",
            category: "skill",
            notes: "Right + left block. Drop step baseline, turn over inside shoulder, rise. Add pump-fake counter. 8 makes per side.",
            sets: [
              { setNumber: 1, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Mid-Post Fadeaway",
            category: "skill",
            notes: "Turn to middle, fade slightly, square in air. 6 makes per side.",
            sets: [
              { setNumber: 1, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Up-and-Under",
            category: "skill",
            notes: "Shot fake → step through under defender → finish. Increase contact intensity. 6 makes per side.",
            sets: [
              { setNumber: 1, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Contact Finishes",
            category: "skill",
            notes: "Two-foot gather, jump into contact, shield with off-elbow, finish high off glass. Increase intensity. 10 makes per side.",
            sets: [
              { setNumber: 1, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
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
        title: "Block C — Catch-and-Shoot 5-Spot",
        duration: "25 min",
        exercises: [
          {
            name: "Catch-and-Shoot (5 Spots)",
            category: "skill",
            notes: "Catch on hop or 1-2 into shot. Mix blocked + off-movement catches. Make 6/10 each spot.",
            sets: [
              { setNumber: 1, targetReps: "6/10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "6/10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "6/10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "6/10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 5, targetReps: "6/10 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Off-the-Move Catch-and-Shoot",
            category: "skill",
            notes: "Sprint to spot, plant, catch, shoot. Inside foot down first, square fast. Add fatigue timer. 5 makes per spot.",
            sets: [
              { setNumber: 1, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 5, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
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
        title: "Block 0 — Form Shooting",
        duration: "15 min",
        exercises: [
          {
            name: "One-Hand Form (Under Rim)",
            category: "skill",
            notes: "~3ft out, shooting hand only. Wrist snap, hold follow-through. 25 makes.",
            sets: [
              { setNumber: 1, targetReps: "25 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Two-Hand Close Form",
            category: "skill",
            notes: "~6-8ft, normal grip, no jump. 25 makes.",
            sets: [
              { setNumber: 1, targetReps: "25 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Four-Way Form Shooting",
            category: "skill",
            notes: "~10ft. 5 makes each: front, left 45, right 45, step further back. ~50 makes total.",
            sets: [
              { setNumber: 1, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 5, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 6, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 7, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 8, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 9, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 10, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
      {
        title: "Block B — Off-Dribble Pull-Ups & Step-Backs",
        duration: "20 min",
        exercises: [
          {
            name: "Stationary Pull-Up",
            category: "skill",
            notes: "One dribble in, gather, rise. Mix blocked + game-speed. 8 makes per wing + top = 24.",
            sets: [
              { setNumber: 1, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Drive → Pull-Up",
            category: "skill",
            notes: "2 hard dribbles toward elbow, plant, gather, pull up. Game-speed. 8 makes each side.",
            sets: [
              { setNumber: 1, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Drive → Hesi → Step-Back",
            category: "skill",
            notes: "Hesi at elbow, step back behind arc. Add fatigue timer: make 10 step-back 3s in 4:00. 6 per wing + 6 top = 18.",
            sets: [
              { setNumber: 1, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Crossover Step-Back Counter",
            category: "skill",
            notes: "Drive → between-legs or cross → step-back. Add token defender. 6 makes per side.",
            sets: [
              { setNumber: 1, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
      {
        title: "Block C — Catch-and-Shoot 5-Spot",
        duration: "10 min",
        exercises: [
          {
            name: "Catch-and-Shoot (5 Spots)",
            category: "skill",
            notes: "Mix blocked + game-speed. Off-movement catches. Make 6/10 each spot.",
            sets: [
              { setNumber: 1, targetReps: "6/10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "6/10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "6/10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "6/10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 5, targetReps: "6/10 makes", targetWeight: 0, restSeconds: 0 },
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
        title: "Block F — Heavy Makes (400)",
        duration: "75 min",
        exercises: [
          {
            name: "Form Opener (Block 0)",
            category: "skill",
            notes: "One-hand 25 + two-hand 25 + four-way 50 = 100 makes. Same Block 0 sequence.",
            sets: [
              { setNumber: 1, targetReps: "25 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "25 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "50 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Mid-Range Circuit (5 Spots)",
            category: "skill",
            notes: "Both elbows, both wings, top. Mix blocked + game-speed (half and half). 8 makes each = 40.",
            sets: [
              { setNumber: 1, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 5, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "3-Point Circuit (5 Spots x2 Laps)",
            category: "skill",
            notes: "Make 6 each spot per lap, 2 laps = 60. Half timed: 25 threes in 3:30, off-screen.",
            sets: [
              { setNumber: 1, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 5, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 6, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 7, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 8, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 9, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 10, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Free Throws (Fatigued)",
            category: "skill",
            notes: "Sets of 10. Do 5 push-ups before each set to simulate fatigue. 40 total makes.",
            sets: [
              { setNumber: 1, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Off-Dribble Integration",
            category: "skill",
            notes: "Step-back + pull-up mixed/random. Add game-speed randomness. 30 makes total.",
            sets: [
              { setNumber: 1, targetReps: "15 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "15 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Scoring vs. Defender",
            category: "skill",
            notes: "Go-to + counter + one Melo post move. Add game-speed randomness. 10-15 possessions.",
            sets: [
              { setNumber: 1, targetReps: "10 possessions", targetWeight: 0, restSeconds: 0 },
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
            name: "Light Form Shooting",
            category: "skill",
            notes: "50 makes total. One-hand 15 + two-hand 15 + four-way 20. Keep touch alive before games.",
            sets: [
              { setNumber: 1, targetReps: "15 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "15 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "20 makes", targetWeight: 0, restSeconds: 0 },
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
        title: "Block 0 — Form Shooting",
        duration: "12 min",
        exercises: [
          {
            name: "One-Hand Form (Under Rim)",
            category: "skill",
            notes: "~3ft out, shooting hand only. Wrist snap, hold follow-through. 25 makes.",
            sets: [
              { setNumber: 1, targetReps: "25 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Two-Hand Close Form",
            category: "skill",
            notes: "~6-8ft, normal grip, no jump. 25 makes.",
            sets: [
              { setNumber: 1, targetReps: "25 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Four-Way Form Shooting",
            category: "skill",
            notes: "~10ft. 5 makes each: front, left 45, right 45, step further back. ~50 makes total.",
            sets: [
              { setNumber: 1, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 5, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 6, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 7, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 8, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 9, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 10, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
      {
        title: "Block A — Kobe Pull-Up Footwork",
        duration: "23 min",
        exercises: [
          {
            name: "Triple-Threat Jab Freeze",
            category: "skill",
            notes: "Hard jab, rip back, rise. Random/game-speed ≥70%. Live defender. 10 makes each elbow.",
            sets: [
              { setNumber: 1, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "One-Dribble Pull-Up",
            category: "skill",
            notes: "Jab → 1 hard dribble → plant, gather, rise. Random angles, live defender. 8 makes x 4 spots.",
            sets: [
              { setNumber: 1, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Go-To + Counter (Random/Live)",
            category: "skill",
            notes: "Go-to: jab → cross → pull-up. Counter: spin/step-back. Random practice dominates. Live defender. 10 go-to + 10 counter.",
            sets: [
              { setNumber: 1, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
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
        title: "Block E — Ball Handling",
        duration: "12 min",
        exercises: [
          {
            name: "Two-Ball Pound Low",
            category: "skill",
            notes: "Below knee, eyes up. 3x30s. Max speed.",
            sets: [
              { setNumber: 1, targetReps: "30s", targetWeight: 0, restSeconds: 15 },
              { setNumber: 2, targetReps: "30s", targetWeight: 0, restSeconds: 15 },
              { setNumber: 3, targetReps: "30s", targetWeight: 0, restSeconds: 15 },
            ],
          },
          {
            name: "Two-Ball Crossover",
            category: "skill",
            notes: "3x20 reps. Game-speed combos. Full-court at max speed.",
            sets: [
              { setNumber: 1, targetReps: "20", targetWeight: 0, restSeconds: 15 },
              { setNumber: 2, targetReps: "20", targetWeight: 0, restSeconds: 15 },
              { setNumber: 3, targetReps: "20", targetWeight: 0, restSeconds: 15 },
            ],
          },
          {
            name: "Single-Ball Combo",
            category: "skill",
            notes: "Cross/between/behind combos. 2 min continuous, max speed, game reads.",
            sets: [
              { setNumber: 1, targetReps: "2 min", targetWeight: 0, restSeconds: 30 },
            ],
          },
          {
            name: "Attack Series",
            category: "skill",
            notes: "Hesi→go, cross→go, between→pull-up. 5 each, each ends in shot/finish. Random order, live defender.",
            sets: [
              { setNumber: 1, targetReps: "5 reps", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "5 reps", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "5 reps", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Full-Court Speed Handle",
            category: "skill",
            notes: "4 lengths, crossover every 2 steps. Max speed, game pressure.",
            sets: [
              { setNumber: 1, targetReps: "4 lengths", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
      {
        title: "Block D — Melo Scoring (Game Speed)",
        duration: "30 min",
        exercises: [
          {
            name: "Jab Series — Jab & Shoot",
            category: "skill",
            notes: "Full speed, random order — simulate reads. Both sides. Live defender. 8 makes each side.",
            sets: [
              { setNumber: 1, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Jab Series — Rip-Through Drive",
            category: "skill",
            notes: "Jab → rip-through drive/finish. Random/game-speed ≥70%. Live defender. 8 makes each side.",
            sets: [
              { setNumber: 1, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Jab Series — Double Jab Drive",
            category: "skill",
            notes: "Jab → jab → drive. Random reads, full speed. 8 makes each side.",
            sets: [
              { setNumber: 1, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Mid-Post Turnaround",
            category: "skill",
            notes: "Right + left block. Full package with counters. Game speed. 8 makes per side.",
            sets: [
              { setNumber: 1, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Mid-Post Fadeaway",
            category: "skill",
            notes: "Turn to middle, fade, square in air. Game speed. 6 makes per side.",
            sets: [
              { setNumber: 1, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Scoring vs. Live Defense",
            category: "skill",
            notes: "Full scoring packages vs live defender. 1-on-1 from triple threat + off ball screen. Random reads. 10 possessions each side.",
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
        title: "Block C — Catch-and-Shoot 5-Spot",
        duration: "25 min",
        exercises: [
          {
            name: "Catch-and-Shoot (5 Spots)",
            category: "skill",
            notes: "Game-speed catches. Off-movement, off-screen, contested. Make 6/10 each spot.",
            sets: [
              { setNumber: 1, targetReps: "6/10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "6/10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "6/10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "6/10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 5, targetReps: "6/10 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Off-the-Move Catch-and-Shoot",
            category: "skill",
            notes: "Sprint to spot, plant, catch, shoot. Timed drills, game-speed ≥70%. 5 makes per spot.",
            sets: [
              { setNumber: 1, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 5, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
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
        title: "Block 0 — Form Shooting",
        duration: "12 min",
        exercises: [
          {
            name: "One-Hand Form (Under Rim)",
            category: "skill",
            notes: "~3ft out, shooting hand only. Wrist snap, hold follow-through. 25 makes.",
            sets: [
              { setNumber: 1, targetReps: "25 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Two-Hand Close Form",
            category: "skill",
            notes: "~6-8ft, normal grip, no jump. 25 makes.",
            sets: [
              { setNumber: 1, targetReps: "25 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Four-Way Form Shooting",
            category: "skill",
            notes: "~10ft. 5 makes each: front, left 45, right 45, step further back. ~50 makes total.",
            sets: [
              { setNumber: 1, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 5, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 6, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 7, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 8, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 9, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 10, targetReps: "5 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
      {
        title: "Block B — Off-Dribble Pull-Ups & Step-Backs",
        duration: "20 min",
        exercises: [
          {
            name: "Stationary Pull-Up",
            category: "skill",
            notes: "One dribble in, gather, rise. Random/game-speed ≥70%, contested. 8 makes per wing + top = 24.",
            sets: [
              { setNumber: 1, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Drive → Pull-Up",
            category: "skill",
            notes: "2 hard dribbles, plant, gather, pull up. Random angles, live defender. 8 makes each side.",
            sets: [
              { setNumber: 1, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Drive → Hesi → Step-Back",
            category: "skill",
            notes: "Hesi at elbow, step back behind arc. Timed drills, random/game-speed ≥70%. 6 per wing + 6 top = 18.",
            sets: [
              { setNumber: 1, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Crossover Step-Back Counter",
            category: "skill",
            notes: "Drive → between-legs or cross → step-back. Live defender. 6 makes per side.",
            sets: [
              { setNumber: 1, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
        ],
      },
      {
        title: "Block C — Catch-and-Shoot 5-Spot",
        duration: "13 min",
        exercises: [
          {
            name: "Catch-and-Shoot (5 Spots)",
            category: "skill",
            notes: "Random/game-speed ≥70%. Off-screen, off-dribble, contested. Make 6/10 each spot.",
            sets: [
              { setNumber: 1, targetReps: "6/10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "6/10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "6/10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "6/10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 5, targetReps: "6/10 makes", targetWeight: 0, restSeconds: 0 },
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
        title: "Block F — Heavy Makes (400-500)",
        duration: "75 min",
        exercises: [
          {
            name: "Form Opener (Block 0)",
            category: "skill",
            notes: "One-hand 25 + two-hand 25 + four-way 50 = 100 makes. Same Block 0 sequence.",
            sets: [
              { setNumber: 1, targetReps: "25 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "25 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "50 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Mid-Range Circuit (5 Spots)",
            category: "skill",
            notes: "Both elbows, both wings, top. Random/game-speed ≥70%. 8 makes each = 40.",
            sets: [
              { setNumber: 1, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 5, targetReps: "8 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "3-Point Circuit (5 Spots x2 Laps)",
            category: "skill",
            notes: "Make 6 each per lap, 2 laps = 60. Random ≥70%: timed drills, off-screen, contested.",
            sets: [
              { setNumber: 1, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 5, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 6, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 7, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 8, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 9, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 10, targetReps: "6 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Free Throws (Fatigued)",
            category: "skill",
            notes: "Sets of 10. Do 5 push-ups before each set. 40 total makes.",
            sets: [
              { setNumber: 1, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 4, targetReps: "10 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Off-Dribble Integration",
            category: "skill",
            notes: "Step-back + pull-up mixed/random. Game-speed ≥70%. 30 makes total.",
            sets: [
              { setNumber: 1, targetReps: "15 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "15 makes", targetWeight: 0, restSeconds: 0 },
            ],
          },
          {
            name: "Scoring vs. Live Defense",
            category: "skill",
            notes: "Full packages. Random reads. 1-on-1 from triple threat + off ball screen. One Melo post move. 10-15 possessions.",
            sets: [
              { setNumber: 1, targetReps: "10 possessions", targetWeight: 0, restSeconds: 0 },
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
            name: "Light Form Shooting",
            category: "skill",
            notes: "50 makes total. One-hand 15 + two-hand 15 + four-way 20. Keep touch alive before games.",
            sets: [
              { setNumber: 1, targetReps: "15 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 2, targetReps: "15 makes", targetWeight: 0, restSeconds: 0 },
              { setNumber: 3, targetReps: "20 makes", targetWeight: 0, restSeconds: 0 },
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
