import { Link } from "react-router-dom";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { useTypewriter } from "../hooks";

export function Home() {
  const heroText = "Hi, I'm Shrihan Vijay";
  const { output: typedName, done: nameDone } = useTypewriter(heroText);

  return (
    <>
      <section className="relative mx-auto grid min-h-[calc(100vh-65px)] max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_65%_0%,rgba(251,146,60,0.08),transparent)] dark:bg-[radial-gradient(ellipse_70%_60%_at_65%_0%,rgba(251,146,60,0.12),transparent)]" />
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-orange-700 dark:text-orange-400">
            CS @ University of Virginia
          </p>
          <h1 className="relative text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl md:text-6xl">
            <span className="invisible" aria-hidden="true">
              {heroText}
            </span>
            <span className="absolute inset-0" aria-label={heroText}>
              {typedName}
              <span
                className="typing-cursor h-[0.9em] translate-y-[0.08em]"
                style={{ animationPlayState: nameDone ? "running" : "paused", opacity: nameDone ? undefined : 1 }}
              />
            </span>
          </h1>
          <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">Graduating Dec 2027</p>
          <p className="mt-5 text-xl text-slate-700 dark:text-slate-300">
            Software Engineer · AI Engineer · Cybersecurity
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            I build intelligent, secure software at the intersection of AI and cybersecurity.
            Currently interning at Idea Nirvana and GuidePoint Security while
            pursuing my BS in Computer Science at UVA.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              className="rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-slate-700 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
              to="/experience"
            >
              View Experience
            </Link>
            <Link
              className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition-colors duration-150 hover:border-slate-950 dark:border-slate-700 dark:text-slate-200 dark:hover:border-white"
              to="/projects"
            >
              View Projects
            </Link>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[290px] md:justify-self-end">
          <div className="overflow-hidden rounded-2xl bg-slate-100 shadow-xl ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700">
            <img
              src="/headshot.png"
              alt="Shrihan Vijay"
              className="aspect-[290/315] w-full object-cover object-top"
            />
          </div>
        </div>
      </section>
      <AboutSection />
      <SkillsSection />
    </>
  );
}
