import Image from "next/image";
import type { Byline as BylineData } from "@/types/article.types";
import { Time } from "@/components/ui/Time";
import { cn } from "@/lib/cn";

export function Byline({
  byline,
  publishedAt,
  tone = "default",
}: {
  byline: BylineData;
  publishedAt: string;
  tone?: "default" | "invert";
}) {
  const invert = tone === "invert";
  return (
    <div className="flex items-center gap-3">
      <span className="relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-full bg-surface-muted text-sm font-semibold text-fg-muted">
        {byline.avatarUrl ? (
          <Image
            src={byline.avatarUrl}
            alt=""
            fill
            sizes="40px"
            className="object-cover"
          />
        ) : (
          byline.author.charAt(0)
        )}
      </span>
      <span className="flex flex-col text-sm leading-5">
        <span className={cn("font-medium", invert ? "text-white" : "text-fg")}>
          {byline.author}
        </span>
        <Time iso={publishedAt} className={invert ? "text-white/70" : "text-fg-muted"} />
      </span>
    </div>
  );
}
