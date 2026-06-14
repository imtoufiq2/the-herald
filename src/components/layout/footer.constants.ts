import type { FooterColumn, NavLink } from "@/types/nav.types";

/** Footer link columns — labels and structure mirror the Figma footer. */
export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Sections",
    links: [
      { label: "World", href: "/" },
      { label: "Tech", href: "/" },
      { label: "Business", href: "/" },
      { label: "Culture", href: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/" },
      { label: "Careers", href: "/" },
      { label: "Contact", href: "/" },
      { label: "Press", href: "/" },
    ],
  },
];

/** Bottom-bar legal links. */
export const FOOTER_LEGAL: NavLink[] = [
  { label: "Privacy", href: "/" },
  { label: "Terms", href: "/" },
  { label: "Cookies", href: "/" },
];

/** Social platforms shown under "Follow Us". */
export const FOOTER_SOCIALS = ["Twitter", "LinkedIn", "Instagram"] as const;
