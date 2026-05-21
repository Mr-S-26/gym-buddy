import { db } from "./db";
import { NBA_PROGRAM } from "./program";

export async function seedTemplates() {
  const count = await db.templates.count();
  if (count === 0) {
    await db.templates.bulkAdd(NBA_PROGRAM);
  }
}
