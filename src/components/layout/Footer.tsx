import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/layout/Wordmark";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { FOOTER_COLUMNS, FOOTER_LEGAL } from "@/components/layout/footer.constants";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-footer-border bg-footer-bg text-footer-fg">
      <Container className="py-12 lg:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2.5">
            <Wordmark size="sm" />
            <p className="max-w-xs text-sm leading-[1.6] text-footer-muted">
              Independent journalism for a changing world. Reporting that informs,
              challenges, and endures.
            </p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title} className="flex flex-col gap-2">
              <h2 className="text-sm font-medium text-footer-fg">{col.title}</h2>
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-footer-muted transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          ))}

          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-medium text-footer-fg">Follow Us</h2>
            <SocialLinks />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-footer-border pt-6 text-sm text-footer-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 The Herald Media. All rights reserved.</p>
          <ul className="flex gap-4">
            {FOOTER_LEGAL.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition-colors hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
