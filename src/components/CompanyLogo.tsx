import { useState } from "react";

export function CompanyLogo({ name, logo }: { name: string; logo: string }) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(" ")
    .filter((w) => w.length > 1)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

  if (failed) {
    return (
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-slate-100 text-sm font-bold text-slate-600 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700">
        {initials}
      </div>
    );
  }

  return (
    <img
      src={logo}
      alt={name}
      className="h-12 w-12 flex-shrink-0 rounded-xl bg-white object-contain p-1 ring-1 ring-slate-200 dark:ring-slate-700"
      onError={() => setFailed(true)}
    />
  );
}
