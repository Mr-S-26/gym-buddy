"use client";

import { useState } from "react";
import { Calculator, X } from "lucide-react";

const BAR_WEIGHT = 20; // kg
const PLATES = [25, 20, 15, 10, 5, 2.5, 1.25]; // kg, each side

export function PlateCalculator() {
  const [open, setOpen] = useState(false);
  const [target, setTarget] = useState("");

  const targetWeight = parseFloat(target);
  const perSide = !isNaN(targetWeight) ? (targetWeight - BAR_WEIGHT) / 2 : 0;

  const plates: { plate: number; count: number }[] = [];
  if (perSide > 0) {
    let remaining = perSide;
    for (const plate of PLATES) {
      const count = Math.floor(remaining / plate);
      if (count > 0) {
        plates.push({ plate, count });
        remaining -= count * plate;
      }
    }
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="p-2 rounded-lg bg-card border border-card-border"
        title="Plate Calculator"
      >
        <Calculator className="w-4 h-4 text-muted" />
      </button>
    );
  }

  return (
    <div className="p-3 rounded-xl bg-card border border-card-border space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-muted flex items-center gap-1">
          <Calculator className="w-3 h-3" /> Plate Calculator
        </span>
        <button onClick={() => setOpen(false)}>
          <X className="w-4 h-4 text-muted" />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="number"
          inputMode="decimal"
          placeholder="Target weight (kg)"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          className="flex-1 p-2 rounded-lg bg-background border border-card-border text-sm text-center focus:outline-none focus:border-accent-orange"
          autoFocus
        />
      </div>
      {perSide > 0 ? (
        <div>
          <p className="text-[10px] text-muted mb-1">
            Bar ({BAR_WEIGHT}kg) + each side:
          </p>
          <div className="flex gap-1.5 flex-wrap">
            {plates.map(({ plate, count }) => (
              <span
                key={plate}
                className="text-xs px-2 py-1 rounded-lg bg-accent-blue/10 text-accent-blue font-semibold"
              >
                {plate}kg x{count}
              </span>
            ))}
          </div>
          {perSide * 2 + BAR_WEIGHT !== targetWeight && (
            <p className="text-[10px] text-danger mt-1">
              Closest: {perSide * 2 + BAR_WEIGHT}kg (can&apos;t make exact weight)
            </p>
          )}
        </div>
      ) : target && !isNaN(targetWeight) && targetWeight <= BAR_WEIGHT ? (
        <p className="text-[10px] text-muted">Just the bar ({BAR_WEIGHT}kg)</p>
      ) : null}
    </div>
  );
}
