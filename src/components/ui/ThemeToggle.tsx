"use client";

import { useTheme } from "@/lib/theme/use-theme";

/** Light/dark toggle. Shows the Figma moon glyph in both themes (only its color
 *  changes); the aria-label conveys the action. Reads the live `data-theme` via
 *  useSyncExternalStore, so there is no setState-in-effect / hydration mismatch. */
export function ThemeToggle() {
  const [theme, setTheme] = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      aria-pressed={isDark}
      className="grid size-9 shrink-0 place-items-center rounded-full text-nav-inactive transition-colors hover:bg-fg/5"
    >
      <svg
        viewBox="0 0 20 20"
        className="size-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.66667}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M17.4875 10.405C17.2699 14.4362 13.9003 17.5719 9.86388 17.4995C5.82742 17.4271 2.57251 14.1725 2.49966 10.1361C2.4268 6.09961 5.56214 2.72971 9.59337 2.51167C9.93087 2.49333 10.1075 2.895 9.92837 3.18083C8.69435 5.15521 8.98645 7.72004 10.6328 9.3664C12.2792 11.0128 14.844 11.3048 16.8184 10.0708C17.105 9.89167 17.5059 10.0675 17.4875 10.405Z" />
      </svg>
    </button>
  );
}
