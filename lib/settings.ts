export type WeightUnit = "kg" | "lbs";

const SETTINGS_KEY = "gym-buddy-settings";

interface Settings {
  unit: WeightUnit;
}

const defaults: Settings = {
  unit: "kg",
};

export function getSettings(): Settings {
  if (typeof window === "undefined") return defaults;
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (raw) return { ...defaults, ...JSON.parse(raw) };
  } catch {}
  return defaults;
}

export function saveSettings(settings: Partial<Settings>) {
  const current = getSettings();
  const updated = { ...current, ...settings };
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(updated));
  return updated;
}

export function convertWeight(
  value: number,
  from: WeightUnit,
  to: WeightUnit
): number {
  if (from === to) return value;
  if (from === "kg" && to === "lbs") return Math.round(value * 2.20462 * 10) / 10;
  return Math.round((value / 2.20462) * 10) / 10;
}
