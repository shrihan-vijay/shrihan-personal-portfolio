import { CompanyLogo } from "../components/CompanyLogo";
import { PageShell } from "../components/PageShell";
import { experiences } from "../data";

export function Experience() {
  return (
    <PageShell title="Experience" eyebrow="Work">
      <div className="space-y-4">
        {experiences.map((exp) => (
          <article
            key={exp.company}
            className="rounded-xl border border-slate-200 bg-white p-6 transition-shadow duration-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            {/* Header row */}
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <CompanyLogo name={exp.company} logo={exp.logo} />
                <div>
                  <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{exp.company}</h3>
                  <span className="mt-1 inline-block rounded-full bg-orange-50 px-2.5 py-0.5 text-xs font-medium text-orange-700 dark:bg-orange-500/10 dark:text-orange-300">
                    {exp.role}
                  </span>
                </div>
              </div>
              <div className="text-right text-sm text-slate-500 dark:text-slate-400">
                <p className="font-medium text-slate-700 dark:text-slate-300">{exp.period}</p>
                <p>{exp.location}</p>
              </div>
            </div>

            {/* Divider */}
            <div className="my-4 border-t border-slate-100 dark:border-slate-800" />

            {/* Bullets */}
            <ul className="space-y-2.5">
              {exp.bullets.map((bullet, j) => (
                <li key={j} className="flex gap-2.5 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-orange-400" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Skills */}
            <div className="mt-5 flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
