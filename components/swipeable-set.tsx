"use client";

import { useState, useRef } from "react";
import { Trash2, Pencil, Flame } from "lucide-react";
import { type WorkoutSet } from "@/lib/db";
import { cn } from "@/lib/utils";

interface SwipeableSetProps {
  set: WorkoutSet;
  unitLabel: string;
  onDelete: (id: string) => void;
  onEdit: (set: WorkoutSet) => void;
}

export function SwipeableSet({
  set,
  unitLabel,
  onDelete,
  onEdit,
}: SwipeableSetProps) {
  const [offset, setOffset] = useState(0);
  const [swiping, setSwiping] = useState(false);
  const startX = useRef(0);
  const currentX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    currentX.current = startX.current;
    setSwiping(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!swiping) return;
    currentX.current = e.touches[0].clientX;
    const diff = currentX.current - startX.current;
    // Only allow left swipe, clamp to -100
    if (diff < 0) {
      setOffset(Math.max(diff, -100));
    } else {
      setOffset(0);
    }
  };

  const handleTouchEnd = () => {
    setSwiping(false);
    if (offset < -50) {
      setOffset(-100);
    } else {
      setOffset(0);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-lg">
      {/* Background actions */}
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          onClick={() => onEdit(set)}
          className="h-full w-12 bg-accent-blue flex items-center justify-center"
        >
          <Pencil className="w-3.5 h-3.5 text-white" />
        </button>
        <button
          onClick={() => onDelete(set.id)}
          className="h-full w-12 bg-danger flex items-center justify-center"
        >
          <Trash2 className="w-3.5 h-3.5 text-white" />
        </button>
      </div>

      {/* Foreground content */}
      <div
        className="relative bg-card flex items-center justify-between text-xs py-1.5 px-1 transition-transform"
        style={{
          transform: `translateX(${offset}px)`,
          transition: swiping ? "none" : "transform 0.2s ease-out",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={() => {
          if (offset === 0) onEdit(set);
          else setOffset(0);
        }}
      >
        <span className="text-muted w-6">#{set.setNumber}</span>
        <div className="flex items-center gap-1">
          {set.isWarmup && (
            <Flame className="w-3 h-3 text-yellow-500" />
          )}
          <span className={cn("font-medium", set.isWarmup && "text-muted")}>
            {set.weight > 0 ? `${set.weight}${unitLabel}` : "BW"} x {set.reps}
          </span>
        </div>
        {set.rpe ? (
          <span className="text-muted">RPE {set.rpe}</span>
        ) : (
          <span className="w-8" />
        )}
      </div>
    </div>
  );
}
