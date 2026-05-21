# Gym Buddy - AI-Powered Personal Gym Coach PWA

## Project Overview
A personal AI-powered gym coach built as a Progressive Web App (PWA) for mobile use. Tracks workouts for an NBA athlete training program (RPT style, 5 days/week: M/W/F lifting, T/Th court drills), logs sets/reps/weight, and uses Claude AI to analyze performance and suggest progressions after a 30-day monitoring period.

## Tech Stack
- **Framework**: Next.js 16 (App Router) with TypeScript
- **Styling**: Tailwind CSS v4 (dark sporty theme, orange/blue accents)
- **AI**: Anthropic Claude API (claude-sonnet-4-20250514) via Next.js API routes
- **Storage**: IndexedDB via Dexie.js (fully offline, no backend)
- **PWA**: @ducanh2912/next-pwa
- **Charts**: Recharts
- **Icons**: Lucide React

## Architecture

### App Routes
- `/` — Dashboard (stats, streak, body weight tracker, recent workouts)
- `/workout` — Template selection + active workout logging
- `/workout/history` — Past sessions browser + detail view
- `/coach` — AI coach with auto-analysis (monitoring → coaching mode)
- `/progress` — Charts (weight progression, weekly volume, PRs)
- `/settings` — Unit toggle (kg/lbs), data export (JSON/CSV)

### Key Files
- `lib/db.ts` — Dexie.js database schema (exercises, sessions, sets, templates, bodyWeights, chatMessages)
- `lib/program.ts` — NBA athlete workout templates (Monday upper, Wednesday lower, Friday full body)
- `lib/seed.ts` — Seeds templates into IndexedDB on first launch
- `lib/settings.ts` — User preferences (weight unit) in localStorage
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)
- `app/api/chat/route.ts` — Claude API proxy with monitoring/coaching mode system prompts

### Database (IndexedDB via Dexie, version 3)
- `exercises` — Exercise library (auto-populated as user logs)
- `sessions` — Workout sessions (date, name, templateId, duration, completed)
- `sets` — Individual logged sets (sessionId, exerciseName, setNumber, reps, weight, rpe)
- `templates` — Workout program templates with sections and target sets
- `bodyWeights` — Body weight log entries
- `chatMessages` — AI coach chat history

### AI Coach Modes
The coach has two phases controlled by days since first completed session:
- **Monitoring Mode** (days 0-29): Observes and tracks patterns, no coaching advice. Acknowledges logs, builds baseline.
- **Active Coaching** (day 30+): Full coaching with progression recommendations, deload suggestions, baseline comparisons.

Analysis types: `post_workout`, `weekly`, `progression`, `chat`

### Key Features
- Template-driven workout logging with pre-filled weights/reps from program
- Last session data shown during active logging ("Last: 55kg x 10")
- Superset support (exercises alternate with shared rest timer)
- Session recovery from localStorage on accidental close
- Rest timer with browser notification when complete
- PR detection with animated celebration banner
- Body weight tracking with trend chart (goal: 73kg → 80-82kg)
- Weekly streak tracker
- Offline support for coach (cached insights, offline banner)

## Commands
- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run start` — Serve production build
- `npm run lint` — ESLint

## Environment Variables
```
ANTHROPIC_API_KEY=sk-ant-...  # Required for AI coach
```

## Conventions
- Weight units: kg by default, configurable in settings. Program data is stored in kg.
- All data is local (IndexedDB + localStorage). No server-side persistence.
- Components are in `components/`, utilities in `lib/`, pages use App Router in `app/`.
- Tailwind theme colors defined in `app/globals.css` as CSS variables: `--accent-orange`, `--accent-blue`, `--card`, `--card-border`, `--muted`, `--success`, `--danger`.
- Mobile-first design. Bottom tab navigation. Large touch targets. 16px minimum input font to prevent zoom.
