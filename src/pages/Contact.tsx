import { PageShell } from "../components/PageShell";
import { links } from "../data";

export function Contact() {
  return (
    <PageShell title="Let's Talk" eyebrow="Get in Touch">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-orange-50/50 p-10 dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-orange-500/10">
        <p className="max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300">
          I am open to Summer 2027 software engineering and AI internship opportunities,
          research collaborations, and conversations about intelligent, secure systems.
          Feel free to reach out.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-slate-700 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
            href={links.email}
          >
            shrihanvijay06@gmail.com
          </a>
          <a
            className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors duration-150 hover:border-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-white"
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors duration-150 hover:border-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-white"
            href={links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </PageShell>
  );
}
