import { db } from "./db";
import { NBA_PROGRAM } from "./program";

const PROGRAM_IDS = NBA_PROGRAM.map((t) => t.id);

export async function seedTemplates() {
  const existing = await db.templates.toArray();

  if (existing.length === 0) {
    // Fresh install — seed all templates
    await db.templates.bulkAdd(NBA_PROGRAM);
    return;
  }

  // Check if the stored templates match the current program
  const existingIds = new Set(existing.map((t) => t.id));
  const programChanged = PROGRAM_IDS.some((id) => !existingIds.has(id));

  if (programChanged) {
    // Remove old program templates that are no longer in the current program
    const oldIds = existing
      .filter((t) => !PROGRAM_IDS.includes(t.id))
      .map((t) => t.id);
    if (oldIds.length > 0) {
      await db.templates.bulkDelete(oldIds);
    }

    // Add or update current program templates
    await db.templates.bulkPut(NBA_PROGRAM);
  }
}
