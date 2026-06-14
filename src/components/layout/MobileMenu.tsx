"use client";

import { useEffect, useState } from "react";
import { Nav } from "@/components/layout/Nav";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MenuIcon, CloseIcon } from "@/components/ui/icons";

/** Mobile hamburger that opens a solid slide-in drawer with the full nav, the
 *  theme toggle and Subscribe. A dimmed scrim sits behind it; body scroll is
 *  locked while open. */
export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="grid size-9 place-items-center rounded-full text-fg transition-colors hover:bg-fg/5"
      >
        <MenuIcon className="size-5" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100]"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/60"
          />
          <div className="absolute right-0 top-0 flex h-full w-72 max-w-[82%] flex-col gap-6 border-l border-border bg-bg p-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="font-serif text-lg font-bold text-fg">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid size-9 place-items-center rounded-full text-fg hover:bg-fg/5"
              >
                <CloseIcon className="size-5" />
              </button>
            </div>
            <Nav variant="bar" orientation="vertical" onNavigate={() => setOpen(false)} />
            <div className="mt-auto flex flex-col gap-4 border-t border-border pt-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-fg-muted">Theme</span>
                <ThemeToggle />
              </div>
              <Button href="/" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
