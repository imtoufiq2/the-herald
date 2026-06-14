type NavVariant = "bar" | "pills";
type NavOrientation = "horizontal" | "vertical";

const ITEM_BASE =
  "inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium leading-5 transition-[color,opacity]";

const INACTIVE = "text-nav-inactive hover:text-fg";

export function isPill(variant: NavVariant, orientation: NavOrientation): boolean {
  return variant === "pills" && orientation === "horizontal";
}

/** <ul> layout per surface: desktop bar, mobile pill row, or vertical drawer. */
export function navListClass(variant: NavVariant, orientation: NavOrientation): string {
  if (orientation === "vertical") return "flex flex-col items-start gap-1";
  if (variant === "bar") return "flex items-center gap-8";
  return "flex gap-2 overflow-x-auto px-4 py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";
}

/**
 * Per-item link class. Mobile pill = filled chip; desktop bar = nav colors
 * (+ red underline on active in dark mode); drawer (bar + vertical) = accent
 * text on active.
 */
export function navItemClass(
  variant: NavVariant,
  orientation: NavOrientation,
  active: boolean,
): string {
  const barHorizontal = variant === "bar" && orientation === "horizontal";

  let state: string;
  if (isPill(variant, orientation)) {
    state = active
      ? "rounded-full border border-transparent bg-accent px-3 py-1 text-accent-fg"
      : `rounded-full border border-border px-3 py-1 hover:border-accent ${INACTIVE}`;
  } else if (barHorizontal) {
    state = active
      ? "relative py-1 text-nav-active dark:after:absolute dark:after:inset-x-0 dark:after:-bottom-1.5 dark:after:h-0.5 dark:after:rounded-full dark:after:bg-accent"
      : `py-1 ${INACTIVE}`;
  } else {
    state = active ? "py-1 text-nav-active" : `py-1 ${INACTIVE}`;
  }

  return `${ITEM_BASE} ${state}`;
}
