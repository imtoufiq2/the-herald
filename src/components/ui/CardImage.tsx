import Image from "next/image";
import { cn } from "@/lib/cn";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

export function CardImage({ src, alt, sizes, priority, className }: Props) {
  if (!src) {
    return <div className={cn("size-full bg-surface-muted", className)} aria-hidden />;
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={cn("object-cover", className)}
    />
  );
}
