"use client";

import { useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

const listeners = new Set<() => void>();

function subscribe(onChange: () => void): () => void {
  listeners.add(onChange);
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getSnapshot(): Theme {
  return (document.documentElement.dataset.theme as Theme) ?? "light";
}

function getServerSnapshot(): Theme {
  return "light";
}

export function useTheme(): readonly [Theme, (next: Theme) => void] {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setTheme = (next: Theme) => {
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    listeners.forEach((notify) => notify());
  };

  return [theme, setTheme] as const;
}
