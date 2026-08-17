import { useState } from "react";
import { NavLink } from "react-router-dom";
import { links, navItems } from "../data";
import { CloseIcon, GitHubIcon, LinkedInIcon, MenuIcon, MoonIcon, ResumeIcon, SunIcon } from "./icons";

export function Header({ isDark, onToggleDark }: { isDark: boolean; onToggleDark: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <NavLink to="/" className="text-sm font-semibold tracking-wide text-slate-950 dark:text-white" onClick={() => setMobileOpen(false)}>
          Shrihan Vijay
        </NavLink>

        <div className="flex items-center gap-5">
          <div className="hidden items-center gap-6 text-sm text-slate-600 dark:text-slate-400 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `transition-colors duration-150 hover:text-slate-950 dark:hover:text-white ${
                    isActive ? "text-slate-950 dark:text-white" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3 border-l border-slate-200 pl-4 dark:border-slate-800">
            <a
              href={links.resume}
              aria-label="Resume"
              className="text-slate-500 transition-colors duration-150 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
            >
              <ResumeIcon />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-500 transition-colors duration-150 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
            >
              <LinkedInIcon />
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-500 transition-colors duration-150 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
            >
              <GitHubIcon />
            </a>
            <button
              type="button"
              onClick={onToggleDark}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors duration-150 hover:border-slate-400 hover:text-slate-950 dark:border-slate-700 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-white"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              className="flex h-7 w-7 items-center justify-center text-slate-600 dark:text-slate-400 md:hidden"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <div className="flex flex-col gap-4 text-sm text-slate-600 dark:text-slate-400">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `transition-colors duration-150 hover:text-slate-950 dark:hover:text-white ${
                    isActive ? "text-slate-950 dark:text-white" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
