"use client";

import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";

type Props = {
  src: string;
  alt: string;
  credit: string;
  caption?: string;
  className?: string;
  priority?: boolean;
};

export default function PlaceImage({
  src,
  alt,
  credit,
  caption,
  className = "",
  priority,
}: Props) {
  return (
    <FadeIn className={className}>
      <figure className="overflow-hidden rounded-xl border border-gold/20 bg-ink-deep">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1152px"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-deep/50 to-transparent" />
        </div>
        <figcaption className="space-y-1 border-t border-gold/10 px-4 py-3">
          {caption && <p className="text-sm text-paper/75">{caption}</p>}
          <p className="text-[10px] text-paper/40">出典: Wikimedia Commons — {credit}</p>
        </figcaption>
      </figure>
    </FadeIn>
  );
}
