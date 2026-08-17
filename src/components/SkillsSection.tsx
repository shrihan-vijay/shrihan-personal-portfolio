import { useState } from "react";
import { skills, type SkillItem } from "../data";
import { Section } from "./Section";

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState(skills[0].category);
  const [selected, setSelected] = useState<SkillItem | null>(null);
  const activeGroup = skills.find((s) => s.category === activeTab)!;

  function handleTabChange(cat: string) {
    setActiveTab(cat);
    setSelected(null);
  }

  function handlePillClick(skill: SkillItem) {
    if (skill.usedIn.length === 0) return;
    setSelected(selected?.name === skill.name ? null : skill);
  }

  return (
    <Section id="skills" title="Skills" eyebrow="Toolkit">
      {/* Tab strip */}
      <div className="mb-6 flex flex-wrap gap-2">
        {skills.map((s) => (
          <button
            key={s.category}
            onClick={() => handleTabChange(s.category)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-150 ${
              activeTab === s.category
                ? "bg-slate-950 text-white shadow-sm dark:bg-white dark:text-slate-950"
                : "border border-slate-200 bg-white text-slate-600 hover:border-slate-400 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-white"
            }`}
          >
            {s.category}
          </button>
        ))}
      </div>

      {/* Skills panel — key forces remount so stagger animation replays */}
      <div key={activeTab} className="rounded-xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-orange-700 dark:text-orange-400">
          {activeGroup.items.length} skills · click any to see where it was used
        </p>
        <ul className="flex flex-wrap gap-2.5">
          {activeGroup.items.map((skill, i) => {
            const isSelected = selected?.name === skill.name;
            const hasContext = skill.usedIn.length > 0;
            return (
              <li
                key={skill.name}
                onClick={() => handlePillClick(skill)}
                className={`skill-pill flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm transition-colors duration-150 ${
                  hasContext ? "cursor-pointer" : "cursor-default"
                } ${
                  isSelected
                    ? "border-orange-400 bg-orange-50 text-orange-800 dark:border-orange-500/50 dark:bg-orange-500/10 dark:text-orange-300"
                    : hasContext
                    ? "border-slate-200 bg-slate-50 text-slate-700 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-orange-500/50 dark:hover:bg-orange-500/10 dark:hover:text-orange-300"
                    : "border-slate-200 bg-slate-50 text-slate-400 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-600"
                }`}
                style={{ animationDelay: `${i * 35}ms` }}
              >
                {skill.icon && (
                  <img
                    src={skill.icon}
                    alt=""
                    className="h-4 w-4 flex-shrink-0 object-contain"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                )}
                {skill.name}
              </li>
            );
          })}
        </ul>

        {/* "Used in" callout */}
        {selected && (
          <div className="callout-in mt-5 flex flex-wrap items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-800/60">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Used in
            </span>
            <div className="flex flex-wrap gap-2">
              {selected.usedIn.map((u) =>
                u.href ? (
                  <a
                    key={u.label}
                    href={u.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-orange-200 bg-white px-3 py-0.5 text-sm font-medium text-orange-700 transition-colors hover:bg-orange-50 dark:border-orange-500/30 dark:bg-slate-900 dark:text-orange-300 dark:hover:bg-orange-500/10"
                  >
                    {u.label}
                    <span className="text-orange-400">→</span>
                  </a>
                ) : (
                  <span
                    key={u.label}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-0.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                  >
                    {u.label}
                  </span>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
