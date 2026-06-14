import Link from "next/link";
import type { Category } from "@/types/article.types";
import { ChevronRightIcon } from "@/components/ui/icons";

/** Article breadcrumb — sits in the light content area below the hero (Figma),
 *  so it uses theme text colors rather than the hero's white-on-dark. */
export function Breadcrumb({ category }: { category: Category }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-sm">
        <li>
          <Link href="/" className="text-fg-muted transition-colors hover:text-fg">
            Home
          </Link>
        </li>
        <ChevronRightIcon className="size-3.5 text-fg-muted" />
        <li aria-current="page" className="font-medium text-fg">
          {category.label}
        </li>
      </ol>
    </nav>
  );
}
