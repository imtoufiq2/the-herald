"use client";

import { useSearchParams } from "next/navigation";
import { NavList } from "@/components/layout/NavList";

type Props = {
  variant: "bar" | "pills";
  orientation?: "horizontal" | "vertical";
  className?: string;
  onNavigate?: () => void;
};

// Client wrapper that derives the active section from the `?section=` query
export function Nav(props: Props) {
  const activeKey = useSearchParams().get("section") || "home";
  return <NavList {...props} activeKey={activeKey} />;
}
