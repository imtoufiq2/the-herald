import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Wordmark } from "@/components/layout/Wordmark";
import { Nav } from "@/components/layout/Nav";
import { NavList } from "@/components/layout/NavList";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { SearchIcon } from "@/components/ui/icons";

const BAR = "hidden flex-1 justify-center md:flex";
const PILLS = "border-b border-border bg-bg md:hidden";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-bg">
      <div className="border-b border-border">
        <Container className="flex h-[68px] items-center gap-4">
          <Wordmark />
          <Suspense fallback={<NavList variant="bar" activeKey="home" className={BAR} />}>
            <Nav variant="bar" className={BAR} />
          </Suspense>
          <div className="ml-auto flex items-center gap-1 sm:gap-2 md:gap-3">
            <button
              type="button"
              aria-label="Search"
              title="Search"
              className="grid size-9 place-items-center rounded-full text-nav-inactive transition-colors hover:bg-fg/5"
            >
              <SearchIcon className="size-5" />
            </button>
            <span className="hidden md:block">
              <ThemeToggle />
            </span>
            <Button href="/" className="hidden md:inline-flex">
              Subscribe
            </Button>
            <MobileMenu />
          </div>
        </Container>
      </div>
      <Suspense fallback={<NavList variant="pills" activeKey="home" className={PILLS} />}>
        <Nav variant="pills" className={PILLS} />
      </Suspense>
    </header>
  );
}
