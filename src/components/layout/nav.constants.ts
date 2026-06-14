import { NavIconName, type NavItem } from "@/types/nav.types";

/**
 * Primary section navigation — labels, order and icons mirror the Figma header.
 * Sections resolve to the single mixed feed; the `?section=` query lets the
 * clicked item stay highlighted (and survive refresh/share) without needing
 * per-section index pages — a deliberate scope cut (see README).
 */
export const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/", icon: NavIconName.Home },
  { label: "World", href: "/?section=world", icon: NavIconName.World },
  { label: "Tech", href: "/?section=tech", icon: NavIconName.Tech },
  { label: "Business", href: "/?section=business", icon: NavIconName.Business },
  { label: "Culture", href: "/?section=culture", icon: NavIconName.Culture },
];
