"use client";

import { cn } from "@/lib/utils";

interface WorkoutCalendarProps {
  workoutDates: Set<string>;
}

export function WorkoutCalendar({ workoutDates }: WorkoutCalendarProps) {
  const today = new Date();
  const weeks = 12;
  const days: { date: string; dayOfWeek: number; hasWorkout: boolean }[] = [];

  // Go back `weeks` weeks from today
  for (let i = weeks * 7 - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const dateStr = d.toISOString().split("T")[0];
    days.push({
      date: dateStr,
      dayOfWeek: d.getDay(),
      hasWorkout: workoutDates.has(dateStr),
    });
  }

  // Group into weeks (columns)
  const columns: typeof days[] = [];
  let currentWeek: typeof days = [];
  for (const day of days) {
    currentWeek.push(day);
    if (day.dayOfWeek === 6) {
      columns.push(currentWeek);
      currentWeek = [];
    }
  }
  if (currentWeek.length > 0) columns.push(currentWeek);

  const dayLabels = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-0.5 min-w-fit">
        {/* Day labels */}
        <div className="flex flex-col gap-0.5 mr-1">
          {dayLabels.map((l, i) => (
            <div
              key={i}
              className="w-3 h-3 text-[7px] text-muted flex items-center justify-center"
            >
              {i % 2 === 1 ? l : ""}
            </div>
          ))}
        </div>
        {columns.map((week, wIdx) => (
          <div key={wIdx} className="flex flex-col gap-0.5">
            {/* Pad first week if it doesn't start on Sunday */}
            {wIdx === 0 &&
              week[0] &&
              Array.from({ length: week[0].dayOfWeek }).map((_, i) => (
                <div key={`pad-${i}`} className="w-3 h-3" />
              ))}
            {week.map((day) => (
              <div
                key={day.date}
                className={cn(
                  "w-3 h-3 rounded-[2px]",
                  day.hasWorkout
                    ? "bg-accent-orange"
                    : "bg-card-border/40"
                )}
                title={`${day.date}${day.hasWorkout ? " - Workout" : ""}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
