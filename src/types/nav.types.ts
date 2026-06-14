export interface NavLink {
  label: string;
  href: string;
}

/** Section icons rendered next to primary nav labels (matches Figma).
 *  String-valued so the enum value doubles as the URL `?section=` key. */
export enum NavIconName {
  Home = "home",
  World = "world",
  Tech = "tech",
  Business = "business",
  Culture = "culture",
}

export interface NavItem {
  label: string;
  href: string;
  icon: NavIconName;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}
