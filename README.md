# Gym Buddy

An AI-powered personal gym coach built as a Progressive Web App (PWA). Designed for mobile-first use — log workouts, track progress, and get intelligent coaching suggestions powered by Claude AI. No app store needed, just open in your browser and install.

## Features

### Workout Logging
- **Template-driven sessions** — Pre-loaded NBA athlete program (Monday upper, Wednesday lower, Friday full body) with target weights, reps, and rest times
- **Free workouts** — Start an unstructured session and add any exercise
- **Smart input** — Pre-filled weight/reps from your program template, with last session data shown for reference
- **Warm-up toggle** — Mark sets as warm-up (excluded from PR tracking and analytics)
- **Swipeable sets** — Swipe left on any logged set to reveal edit and delete actions
- **Tap to edit** — Tap any logged set to modify weight, reps, RPE, or warm-up status
- **Superset support** — Linked exercises automatically alternate between partners
- **Rest timer** — Auto-starts between sets with configurable duration per exercise, sends browser notifications when complete
- **Haptic feedback** — Vibration alerts when rest timer ends and on new PRs
- **Session notes** — Add notes to any workout session
- **Session recovery** — Automatically saves progress to localStorage; resume if you accidentally close the browser
- **PR detection** — Real-time personal record alerts with animated banner

### AI Coaching
- **Automatic analysis** — No chat required; the AI analyzes your data and provides insights
- **Monitoring mode** — For the first 30 days, the AI observes your training patterns without giving advice
- **Active coaching** — After 30 days of data, unlocks personalized progression suggestions, weekly reviews, and post-workout analysis
- **Context-aware** — The AI receives your full workout history, body weight trends, and program structure
- **Offline support** — Cached insights available without internet; full analysis requires API connection
- **Optional chat** — Collapsible "Ask Coach" interface for specific questions

### Progress Analytics
- **Weight progression charts** — Track max weight per exercise over time
- **Estimated 1RM tracking** — Epley formula calculations shown per exercise
- **Volume tracking** — Total volume (weight x reps) per session and weekly trends
- **Muscle group breakdown** — Weekly volume split by push/pull/legs/core with progress bars
- **Personal records** — Top PRs ranked by estimated 1RM with date and actual performance
- **Chart toggle** — Switch between weight, estimated 1RM, and volume views per exercise

### Body Weight Tracking
- **Quick weigh-in** — Log body weight from the home dashboard
- **Trend chart** — Mini sparkline showing last 14 entries
- **Goal tracking** — Start weight vs target weight display

### Dashboard
- **Workout calendar** — 12-week GitHub-style contribution graph showing training days
- **Stats grid** — This week's sessions, total sessions, total sets, weekly streak
- **Recent workouts** — Quick access to last 5 completed sessions
- **Body weight card** — Latest weight with trend visualization

### Settings & Data
- **Unit toggle** — Switch between kg and lbs globally
- **Template editor** — Edit exercise names, notes, target reps/weight/rest for each set in your program
- **JSON export** — Full backup of all data (sessions, sets, exercises, body weights, templates)
- **CSV export** — Spreadsheet-friendly format with all set data
- **JSON import** — Restore from a previous backup; non-destructive merge that skips existing records
- **Plate calculator** — Enter a target barbell weight, see plates needed per side (20kg bar)

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| Language | TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| AI | [Anthropic Claude API](https://docs.anthropic.com/) via Next.js API routes |
| Database | [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) via [Dexie.js](https://dexie.org/) |
| Charts | [Recharts](https://recharts.org/) |
| Icons | [Lucide React](https://lucide.dev/) |
| PWA | [@ducanh2912/next-pwa](https://github.com/nicoleahmed/next-pwa) |

## Project Structure

```
gym-buddy/
├── app/
│   ├── layout.tsx              # Root layout, PWA meta, bottom nav
│   ├── page.tsx                # Dashboard (stats, calendar, body weight)
│   ├── globals.css             # Tailwind v4 theme (dark mode colors)
│   ├── workout/
│   │   ├── page.tsx            # Template selection + active workout logging
│   │   └── history/
│   │       └── page.tsx        # Workout history browser
│   ├── coach/
│   │   └── page.tsx            # AI coaching (auto-analysis + chat)
│   ├── progress/
│   │   └── page.tsx            # Analytics (charts, PRs, muscle groups)
│   ├── settings/
│   │   └── page.tsx            # Settings, template editor, import/export
│   └── api/
│       └── chat/
│           └── route.ts        # Claude API proxy (monitoring + coaching prompts)
├── components/
│   ├── nav-bar.tsx             # Bottom tab navigation
│   ├── plate-calculator.tsx    # Barbell plate calculator widget
│   ├── swipeable-set.tsx       # Touch-swipeable set row (edit/delete)
│   └── workout-calendar.tsx    # 12-week activity heatmap
├── lib/
│   ├── db.ts                   # Dexie schema, types, 1RM calc, muscle groups
│   ├── program.ts              # NBA athlete workout templates (3 days)
│   ├── seed.ts                 # Auto-seeds templates on first launch
│   ├── settings.ts             # User preferences (localStorage)
│   └── utils.ts                # cn() helper (clsx + tailwind-merge)
├── public/
│   ├── manifest.json           # PWA manifest
│   └── icons/
│       └── icon.svg            # App icon
├── next.config.ts              # PWA + Turbopack config
└── package.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- An [Anthropic API key](https://console.anthropic.com/) (for AI coaching features)

### Installation

```bash
# Clone the repository
git clone https://github.com/Mr-S-26/gym-buddy.git
cd gym-buddy

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local and add your Anthropic API key
```

Create a `.env.local` file in the project root:

```env
ANTHROPIC_API_KEY=your-api-key-here
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) on your phone or browser.

### Production Build

```bash
npm run build
npm start
```

### Install as PWA

1. Open the app in Chrome/Safari on your phone
2. Tap the browser menu
3. Select **"Add to Home Screen"** / **"Install App"**
4. The app will behave like a native app with its own icon

## Database Schema

All data is stored locally in IndexedDB via Dexie.js. No server-side database required.

| Table | Description |
|-------|-------------|
| `sessions` | Workout sessions (date, name, duration, template reference) |
| `sets` | Individual sets (exercise, weight, reps, RPE, warm-up flag) |
| `exercises` | Exercise catalog (name, category, muscle group) |
| `templates` | Workout program templates (sections, exercises, target sets) |
| `bodyWeights` | Body weight entries (date, weight, unit) |
| `chatMessages` | AI coach conversation history |

## AI Coaching System

The AI coach operates in two modes:

**Monitoring Mode (Days 0-29)**
- Silently observes training patterns
- Provides neutral data summaries without prescriptive advice
- Shows a progress bar counting down to active coaching

**Active Coaching (Day 30+)**
- Post-workout analysis with specific feedback
- Weekly performance reviews
- Progression recommendations based on logged data trends
- Considers RPE patterns, volume trends, and recovery indicators

The AI receives workout history, body weight data, and program structure as context with each analysis request. All API calls go through the Next.js route handler — the API key is never exposed client-side.

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import the repo on [Vercel](https://vercel.com/)
3. Add `ANTHROPIC_API_KEY` to environment variables
4. Deploy

### Other Platforms

Any platform that supports Next.js can host this app. Ensure the `ANTHROPIC_API_KEY` environment variable is set. The app works offline for logging (IndexedDB), but AI features require server connectivity.

## License

This project is for personal use.
