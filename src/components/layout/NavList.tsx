import Link from "next/link";
import { NAV_LINKS } from "@/components/layout/nav.constants";
import { isPill, navItemClass, navListClass } from "@/components/layout/nav.styles";
import { NavIcon } from "@/components/ui/nav-icons";

type Props = {
  variant: "bar" | "pills";
  orientation?: "horizontal" | "vertical";
  activeKey: string;
  className?: string;
  onNavigate?: () => void;
};

/** Presentational primary nav (no hooks) — shared by the desktop bar, the mobile
 *  pill row and the drawer. The item whose icon matches `activeKey` is accented.
 *  All class logic lives in nav.styles.ts so this render stays structural. */
export function NavList({
  variant,
  orientation = "horizontal",
  activeKey,
  className,
  onNavigate,
}: Props) {
  const pill = isPill(variant, orientation);

  return (
    <nav aria-label="Primary" className={className}>
      <ul className={navListClass(variant, orientation)}>
        {NAV_LINKS.map((item) => {
          const active = item.icon === activeKey;
          return (
            <li key={item.label} className={pill ? "" : "w-full"}>
              <Link
                href={item.href}
                onClick={onNavigate}
                aria-current={active ? "page" : undefined}
                className={navItemClass(variant, orientation, active)}
              >
                <NavIcon name={item.icon} className={pill ? "size-3.5" : "size-4"} />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
