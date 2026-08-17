import { GitHubIcon } from "../components/icons";
import { PageShell } from "../components/PageShell";
import { projects } from "../data";

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <PageShell title="Projects" eyebrow="Selected Work">
      {/* Featured project */}
      <div className="mb-4">
        <article className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-50/70 via-transparent to-transparent dark:from-orange-500/10" />
          <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 translate-x-10 -translate-y-10 rounded-full bg-orange-100/40 blur-3xl dark:bg-orange-500/10" />
          <div className="relative">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-700 dark:text-orange-400">
                  Featured Project
                </span>
                <h3 className="mt-1 text-2xl font-semibold text-slate-950 dark:text-white">{featured.name}</h3>
              </div>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:ring-slate-700">
                {featured.period}
              </span>
            </div>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
              {featured.description}
            </p>
            {featured.demoGif && (
              <img
                src={featured.demoGif}
                alt={`${featured.name} demo walkthrough`}
                className="mt-5 w-full max-w-2xl rounded-lg border border-slate-200 shadow-sm dark:border-slate-800"
              />
            )}
            <div className="mt-5 flex flex-wrap gap-2">
              {featured.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white dark:bg-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {featured.github && (
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition-all duration-150 hover:border-slate-950 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
                >
                  <GitHubIcon />
                  View on GitHub
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </a>
              )}
              {featured.demo && (
                <a
                  href={featured.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-150 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600"
                >
                  Try It
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </a>
              )}
            </div>
          </div>
        </article>
      </div>

      {/* Other projects */}
      <div className="grid gap-4 md:grid-cols-2">
        {rest.map((project) => (
          <article
            key={project.name}
            className="group relative rounded-xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="mb-1 flex items-center justify-between gap-2">
              <div className="h-0.5 w-8 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-16" />
              <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                {project.period}
              </span>
            </div>
            <h3 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">{project.name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white dark:bg-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors duration-150 hover:text-orange-700 dark:text-slate-300 dark:hover:text-orange-400"
              >
                <GitHubIcon />
                View on GitHub →
              </a>
            )}
          </article>
        ))}
      </div>
    </PageShell>
  );
}
