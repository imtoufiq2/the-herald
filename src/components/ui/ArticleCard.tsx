import Link from "next/link";
import type { ArticleSummary } from "@/types/article.types";
import { CardImage } from "@/components/ui/CardImage";
import { CategoryLabel } from "@/components/ui/CategoryLabel";
import { cn } from "@/lib/cn";

type Variant = "top" | "pick";

const TITLE: Record<Variant, string> = {
  top: "text-[22px] leading-[1.25]",
  pick: "text-[18px] leading-[1.375]",
};

export function ArticleCard({
  article,
  variant = "top",
  priority,
}: {
  article: ArticleSummary;
  variant?: Variant;
  priority?: boolean;
}) {
  const sizes =
    variant === "top"
      ? "(min-width:1024px) 384px, (min-width:640px) 50vw, 100vw"
      : "(min-width:1024px) 288px, (min-width:640px) 50vw, 100vw";

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-md bg-surface shadow-(--shadow-card) ring-1 ring-border/60">
      <span className="relative block aspect-16/10 overflow-hidden bg-surface-muted">
        <CardImage
          src={article.imageUrl}
          alt={article.title}
          sizes={sizes}
          priority={priority}
          className="transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </span>
      <div
        className={cn(
          "flex flex-1 flex-col",
          variant === "top" ? "px-6 pb-5 pt-4" : "p-4",
        )}
      >
        <CategoryLabel category={article.category} className="relative z-10 w-fit" />
        <h3
          className={cn(
            "mt-[7.25px] font-serif font-bold text-fg transition-colors group-hover:text-accent",
            TITLE[variant],
          )}
        >
          <Link
            href={`/article/${article.slug}`}
            className="after:absolute after:inset-0"
          >
            {article.title}
          </Link>
        </h3>
        {variant === "top" && (
          <p className="mt-2 line-clamp-3 text-sm leading-[22px] text-fg-muted">
            {article.excerpt}
          </p>
        )}
      </div>
    </article>
  );
}
