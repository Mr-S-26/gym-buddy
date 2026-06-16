import { db } from "./db";
import { NBA_PROGRAM } from "./program";

// Bump this version whenever program content changes (weights, exercises, etc.)
const PROGRAM_VERSION = 3;
const VERSION_KEY = "gym-buddy-program-version";

const PROGRAM_IDS = NBA_PROGRAM.map((t) => t.id);

export async function seedTemplates() {
  const existing = await db.templates.toArray();
  const storedVersion = parseInt(localStorage.getItem(VERSION_KEY) || "0", 10);

  if (existing.length === 0) {
    // Fresh install — seed all templates
    await db.templates.bulkAdd(NBA_PROGRAM);
    localStorage.setItem(VERSION_KEY, String(PROGRAM_VERSION));
    return;
  }

  // Check if IDs changed OR version bumped (content changed)
  const existingIds = new Set(existing.map((t) => t.id));
  const idsChanged = PROGRAM_IDS.some((id) => !existingIds.has(id));
  const versionChanged = storedVersion < PROGRAM_VERSION;

  if (idsChanged || versionChanged) {
    // Remove old program templates that are no longer in the current program
    const oldIds = existing
      .filter((t) => !PROGRAM_IDS.includes(t.id))
      .map((t) => t.id);
    if (oldIds.length > 0) {
      await db.templates.bulkDelete(oldIds);
    }

    // Add or update current program templates
    await db.templates.bulkPut(NBA_PROGRAM);
    localStorage.setItem(VERSION_KEY, String(PROGRAM_VERSION));
  }
}
