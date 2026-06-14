import Link from "next/link";
import { FOOTER_SOCIALS } from "@/components/layout/footer.constants";

const PATHS: Record<string, string> = {
  Twitter:
    "M18.9 2H22l-7.5 8.6L23 22h-6.8l-5.3-7-6.1 7H1.7l8-9.2L1 2h7l4.8 6.3L18.9 2Zm-2.4 18h1.9L7.6 4H5.6l10.9 16Z",
  LinkedIn:
    "M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.25 8.25h4.5V24h-4.5V8.25ZM8 8.25h4.3v2.15h.06c.6-1.1 2.05-2.25 4.22-2.25 4.5 0 5.34 2.96 5.34 6.82V24h-4.5v-6.9c0-1.64-.03-3.75-2.28-3.75-2.29 0-2.64 1.78-2.64 3.63V24H8V8.25Z",
  Instagram:
    "M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16Zm0 3.68a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm0 9.9a3.9 3.9 0 1 1 0-7.8 3.9 3.9 0 0 1 0 7.8Zm6.24-10.16a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Z",
};

/** "Follow Us" social buttons — white tiles with brand glyphs (Figma footer). */
export function SocialLinks() {
  return (
    <ul className="flex gap-2">
      {FOOTER_SOCIALS.map((name) => (
        <li key={name}>
          <Link
            href="/"
            aria-label={name}
            className="grid size-9 place-items-center rounded-sm border border-footer-border bg-white text-[#404040] shadow-sm transition-colors hover:text-accent"
          >
            <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
              <path d={PATHS[name]} />
            </svg>
          </Link>
        </li>
      ))}
    </ul>
  );
}
