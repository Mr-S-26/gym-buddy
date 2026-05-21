"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  Scale,
  Trash2,
  Upload,
  Pencil,
  Plus,
  X,
  Check,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import {
  db,
  type WorkoutTemplate,
  type TemplateExercise,
  type TemplateSet,
} from "@/lib/db";
import {
  getSettings,
  saveSettings,
  type WeightUnit,
} from "@/lib/settings";
import { cn } from "@/lib/utils";

export default function SettingsPage() {
  const [unit, setUnit] = useState<WeightUnit>(() => getSettings().unit);
  const [exporting, setExporting] = useState(false);
  const [importing, setImporting] = useState(false);
  const [importStatus, setImportStatus] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Template editor
  const [templates, setTemplates] = useState<WorkoutTemplate[]>([]);
  const [editingTemplate, setEditingTemplate] = useState<WorkoutTemplate | null>(null);
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  useEffect(() => {
    db.templates.toArray().then(setTemplates);
  }, []);

  const handleUnitChange = (newUnit: WeightUnit) => {
    setUnit(newUnit);
    saveSettings({ unit: newUnit });
  };

  const exportData = async (format: "json" | "csv") => {
    setExporting(true);
    try {
      const sessions = await db.sessions.toArray();
      const sets = await db.sets.toArray();
      const exercises = await db.exercises.toArray();
      const bodyWeights = await db.bodyWeights.toArray();
      const templates = await db.templates.toArray();

      if (format === "json") {
        const data = {
          sessions,
          sets,
          exercises,
          bodyWeights,
          templates,
          exportedAt: new Date().toISOString(),
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], {
          type: "application/json",
        });
        downloadBlob(blob, `gym-buddy-export-${today()}.json`);
      } else {
        let csv = "Date,Session,Exercise,Set,Weight,Reps,RPE,Warmup\n";
        for (const set of sets) {
          const session = sessions.find((s) => s.id === set.sessionId);
          csv += `${session?.date || ""},${csvEscape(session?.name || "")},${csvEscape(set.exerciseName)},${set.setNumber},${set.weight},${set.reps},${set.rpe || ""},${set.isWarmup ? "Y" : ""}\n`;
        }
        const blob = new Blob([csv], { type: "text/csv" });
        downloadBlob(blob, `gym-buddy-export-${today()}.csv`);
      }
    } finally {
      setExporting(false);
    }
  };

  const importData = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImporting(true);
    setImportStatus(null);

    try {
      const text = await file.text();
      const data = JSON.parse(text);

      let imported = 0;

      if (data.sessions && Array.isArray(data.sessions)) {
        for (const session of data.sessions) {
          const exists = await db.sessions.get(session.id);
          if (!exists) {
            await db.sessions.add(session);
            imported++;
          }
        }
      }

      if (data.sets && Array.isArray(data.sets)) {
        for (const set of data.sets) {
          const exists = await db.sets.get(set.id);
          if (!exists) {
            await db.sets.add(set);
            imported++;
          }
        }
      }

      if (data.exercises && Array.isArray(data.exercises)) {
        for (const ex of data.exercises) {
          const exists = await db.exercises.get(ex.id);
          if (!exists) {
            await db.exercises.add(ex);
            imported++;
          }
        }
      }

      if (data.bodyWeights && Array.isArray(data.bodyWeights)) {
        for (const bw of data.bodyWeights) {
          const exists = await db.bodyWeights.get(bw.id);
          if (!exists) {
            await db.bodyWeights.add(bw);
            imported++;
          }
        }
      }

      if (data.templates && Array.isArray(data.templates)) {
        for (const t of data.templates) {
          const exists = await db.templates.get(t.id);
          if (!exists) {
            await db.templates.add(t);
            imported++;
          }
        }
      }

      setImportStatus(`Imported ${imported} records successfully.`);
      db.templates.toArray().then(setTemplates);
    } catch {
      setImportStatus("Failed to import. Make sure the file is a valid Gym Buddy JSON export.");
    } finally {
      setImporting(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const clearChatHistory = async () => {
    if (confirm("Clear all AI coach chat history?")) {
      await db.chatMessages.clear();
      localStorage.removeItem("coach-insights");
    }
  };

  // Template editor functions
  const startEditTemplate = (t: WorkoutTemplate) => {
    setEditingTemplate(JSON.parse(JSON.stringify(t)));
    setExpandedSection(null);
  };

  const saveTemplate = async () => {
    if (!editingTemplate) return;
    await db.templates.put(editingTemplate);
    setTemplates((prev) =>
      prev.map((t) => (t.id === editingTemplate.id ? editingTemplate : t))
    );
    setEditingTemplate(null);
  };

  const updateTemplateName = (name: string) => {
    if (!editingTemplate) return;
    setEditingTemplate({ ...editingTemplate, name });
  };

  const updateExercise = (
    sIdx: number,
    eIdx: number,
    field: keyof TemplateExercise,
    value: string
  ) => {
    if (!editingTemplate) return;
    const updated = { ...editingTemplate };
    const sections = [...updated.sections];
    const exercises = [...sections[sIdx].exercises];
    exercises[eIdx] = { ...exercises[eIdx], [field]: value };
    sections[sIdx] = { ...sections[sIdx], exercises };
    updated.sections = sections;
    setEditingTemplate(updated);
  };

  const updateSet = (
    sIdx: number,
    eIdx: number,
    setIdx: number,
    field: keyof TemplateSet,
    value: string
  ) => {
    if (!editingTemplate) return;
    const updated = { ...editingTemplate };
    const sections = [...updated.sections];
    const exercises = [...sections[sIdx].exercises];
    const sets = [...exercises[eIdx].sets];
    if (field === "targetReps") {
      sets[setIdx] = { ...sets[setIdx], targetReps: value };
    } else {
      sets[setIdx] = { ...sets[setIdx], [field]: parseFloat(value) || 0 };
    }
    exercises[eIdx] = { ...exercises[eIdx], sets };
    sections[sIdx] = { ...sections[sIdx], exercises };
    updated.sections = sections;
    setEditingTemplate(updated);
  };

  const addSetToExercise = (sIdx: number, eIdx: number) => {
    if (!editingTemplate) return;
    const updated = { ...editingTemplate };
    const sections = [...updated.sections];
    const exercises = [...sections[sIdx].exercises];
    const sets = [...exercises[eIdx].sets];
    const lastSet = sets[sets.length - 1];
    sets.push({
      setNumber: sets.length + 1,
      targetReps: lastSet?.targetReps || "8",
      targetWeight: lastSet?.targetWeight || 0,
      restSeconds: lastSet?.restSeconds || 90,
    });
    exercises[eIdx] = { ...exercises[eIdx], sets };
    sections[sIdx] = { ...sections[sIdx], exercises };
    updated.sections = sections;
    setEditingTemplate(updated);
  };

  const removeSet = (sIdx: number, eIdx: number, setIdx: number) => {
    if (!editingTemplate) return;
    const updated = { ...editingTemplate };
    const sections = [...updated.sections];
    const exercises = [...sections[sIdx].exercises];
    const sets = exercises[eIdx].sets.filter((_, i) => i !== setIdx);
    exercises[eIdx] = { ...exercises[eIdx], sets };
    sections[sIdx] = { ...sections[sIdx], exercises };
    updated.sections = sections;
    setEditingTemplate(updated);
  };

  // Template editor view
  if (editingTemplate) {
    return (
      <div className="p-4 max-w-md mx-auto pb-24">
        <div className="flex items-center justify-between mb-4 pt-2">
          <button
            onClick={() => setEditingTemplate(null)}
            className="flex items-center gap-1 text-sm text-muted"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <button
            onClick={saveTemplate}
            className="px-3 py-1.5 rounded-lg bg-accent-orange text-white text-sm font-semibold flex items-center gap-1"
          >
            <Check className="w-3.5 h-3.5" /> Save
          </button>
        </div>

        <div className="mb-4">
          <label className="text-xs text-muted block mb-1">Template Name</label>
          <input
            type="text"
            value={editingTemplate.name}
            onChange={(e) => updateTemplateName(e.target.value)}
            className="w-full p-2 rounded-lg bg-card border border-card-border text-sm focus:outline-none focus:border-accent-orange"
          />
        </div>

        <div className="space-y-3">
          {editingTemplate.sections.map((section, sIdx) => (
            <div
              key={sIdx}
              className="rounded-xl bg-card border border-card-border overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpandedSection(expandedSection === sIdx ? null : sIdx)
                }
                className="w-full p-3 flex items-center justify-between"
              >
                <span className="font-semibold text-sm">{section.title}</span>
                {expandedSection === sIdx ? (
                  <ChevronDown className="w-4 h-4 text-muted" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-muted" />
                )}
              </button>

              {expandedSection === sIdx && (
                <div className="px-3 pb-3 space-y-3">
                  {section.exercises.map((ex, eIdx) => (
                    <div
                      key={eIdx}
                      className="p-2 rounded-lg bg-background border border-card-border/50 space-y-2"
                    >
                      <input
                        type="text"
                        value={ex.name}
                        onChange={(e) =>
                          updateExercise(sIdx, eIdx, "name", e.target.value)
                        }
                        className="w-full text-sm font-semibold bg-transparent focus:outline-none"
                      />
                      <input
                        type="text"
                        value={ex.notes || ""}
                        onChange={(e) =>
                          updateExercise(sIdx, eIdx, "notes", e.target.value)
                        }
                        placeholder="Notes..."
                        className="w-full text-[10px] text-muted bg-transparent focus:outline-none"
                      />
                      {/* Sets */}
                      <div className="space-y-1">
                        {ex.sets.map((s, setIdx) => (
                          <div
                            key={setIdx}
                            className="flex items-center gap-1.5 text-[10px]"
                          >
                            <span className="text-muted w-4">
                              #{setIdx + 1}
                            </span>
                            <input
                              type="text"
                              value={s.targetReps}
                              onChange={(e) =>
                                updateSet(
                                  sIdx,
                                  eIdx,
                                  setIdx,
                                  "targetReps",
                                  e.target.value
                                )
                              }
                              placeholder="Reps"
                              className="w-16 px-1.5 py-1 rounded bg-card border border-card-border text-center focus:outline-none focus:border-accent-orange"
                            />
                            <span className="text-muted">@</span>
                            <input
                              type="number"
                              value={s.targetWeight || ""}
                              onChange={(e) =>
                                updateSet(
                                  sIdx,
                                  eIdx,
                                  setIdx,
                                  "targetWeight",
                                  e.target.value
                                )
                              }
                              placeholder="kg"
                              className="w-14 px-1.5 py-1 rounded bg-card border border-card-border text-center focus:outline-none focus:border-accent-orange"
                            />
                            <span className="text-muted">rest</span>
                            <input
                              type="number"
                              value={s.restSeconds || ""}
                              onChange={(e) =>
                                updateSet(
                                  sIdx,
                                  eIdx,
                                  setIdx,
                                  "restSeconds",
                                  e.target.value
                                )
                              }
                              placeholder="sec"
                              className="w-12 px-1.5 py-1 rounded bg-card border border-card-border text-center focus:outline-none focus:border-accent-orange"
                            />
                            <button
                              onClick={() => removeSet(sIdx, eIdx, setIdx)}
                              className="text-danger/50 hover:text-danger p-0.5"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                        <button
                          onClick={() => addSetToExercise(sIdx, eIdx)}
                          className="text-[10px] text-accent-blue flex items-center gap-0.5"
                        >
                          <Plus className="w-2.5 h-2.5" /> Add set
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-md mx-auto pb-24">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-muted mb-4 pt-2"
      >
        <ArrowLeft className="w-4 h-4" /> Home
      </Link>

      <h1 className="text-xl font-bold mb-6">Settings</h1>

      {/* Unit Preference */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-muted block mb-3">
          <Scale className="w-4 h-4 inline mr-1.5" />
          Weight Unit
        </label>
        <div className="flex gap-2">
          {(["kg", "lbs"] as const).map((u) => (
            <button
              key={u}
              onClick={() => handleUnitChange(u)}
              className={cn(
                "flex-1 p-3 rounded-xl border font-semibold text-sm transition-colors",
                unit === u
                  ? "bg-accent-orange text-white border-accent-orange"
                  : "bg-card border-card-border text-muted"
              )}
            >
              {u.toUpperCase()}
            </button>
          ))}
        </div>
        <p className="text-[10px] text-muted mt-2">
          Changes display unit across the app. Does not convert existing data.
        </p>
      </div>

      {/* Template Editor */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-muted block mb-3">
          <Pencil className="w-4 h-4 inline mr-1.5" />
          Edit Templates
        </label>
        <div className="space-y-2">
          {templates.map((t) => (
            <button
              key={t.id}
              onClick={() => startEditTemplate(t)}
              className="w-full p-3 rounded-xl bg-card border border-card-border flex items-center justify-between text-left"
            >
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted">
                  {t.day} ·{" "}
                  {t.sections.reduce(
                    (sum, s) => sum + s.exercises.length,
                    0
                  )}{" "}
                  exercises
                </p>
              </div>
              <Pencil className="w-3.5 h-3.5 text-muted" />
            </button>
          ))}
        </div>
      </div>

      {/* Export */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-muted block mb-3">
          <Download className="w-4 h-4 inline mr-1.5" />
          Export Data
        </label>
        <div className="flex gap-2">
          <button
            onClick={() => exportData("json")}
            disabled={exporting}
            className="flex-1 p-3 rounded-xl bg-card border border-card-border text-sm font-semibold disabled:opacity-50"
          >
            Export JSON
          </button>
          <button
            onClick={() => exportData("csv")}
            disabled={exporting}
            className="flex-1 p-3 rounded-xl bg-card border border-card-border text-sm font-semibold disabled:opacity-50"
          >
            Export CSV
          </button>
        </div>
        <p className="text-[10px] text-muted mt-2">
          Download all your workout data as a backup file.
        </p>
      </div>

      {/* Import */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-muted block mb-3">
          <Upload className="w-4 h-4 inline mr-1.5" />
          Import Data
        </label>
        <input
          ref={fileInputRef}
          type="file"
          accept=".json"
          onChange={importData}
          className="hidden"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={importing}
          className="w-full p-3 rounded-xl bg-card border border-card-border text-sm font-semibold disabled:opacity-50"
        >
          {importing ? "Importing..." : "Import JSON"}
        </button>
        {importStatus && (
          <p
            className={cn(
              "text-[10px] mt-2",
              importStatus.includes("Failed") ? "text-danger" : "text-success"
            )}
          >
            {importStatus}
          </p>
        )}
        <p className="text-[10px] text-muted mt-2">
          Import a previously exported Gym Buddy JSON file. Existing data won&apos;t be overwritten.
        </p>
      </div>

      {/* Danger Zone */}
      <div>
        <label className="text-sm font-semibold text-muted block mb-3">
          <Trash2 className="w-4 h-4 inline mr-1.5" />
          Data Management
        </label>
        <button
          onClick={clearChatHistory}
          className="w-full p-3 rounded-xl bg-card border border-danger/20 text-danger text-sm font-semibold"
        >
          Clear Coach History
        </button>
      </div>
    </div>
  );
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function csvEscape(str: string): string {
  if (str.includes(",") || str.includes('"') || str.includes("\n")) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

function today(): string {
  return new Date().toISOString().split("T")[0];
}
