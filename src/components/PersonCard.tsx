"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { Figure } from "@/data/figures";

const sideColor: Record<Figure["side"], string> = {
  東軍: "border-sky-400/40 bg-sky-500/10 text-sky-200",
  西軍: "border-rose-400/40 bg-rose-500/10 text-rose-200",
  "中立・複雑": "border-amber-400/40 bg-amber-500/10 text-amber-100",
};

function Silhouette({ name }: { name: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-[#2a2118] to-[#14110f]">
      <svg viewBox="0 0 120 140" className="h-28 w-24 opacity-70" aria-hidden>
        <defs>
          <linearGradient id="goldInk" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e8d5a3" />
            <stop offset="100%" stopColor="#c9a227" />
          </linearGradient>
        </defs>
        <ellipse cx="60" cy="42" rx="28" ry="32" fill="url(#goldInk)" opacity="0.85" />
        <path
          d="M22 130 C22 88 40 72 60 72 C80 72 98 88 98 130 Z"
          fill="url(#goldInk)"
          opacity="0.75"
        />
        <circle cx="60" cy="118" r="18" fill="none" stroke="#c9a227" strokeWidth="1.5" opacity="0.5" />
      </svg>
      <span className="sr-only">{name}のシルエット</span>
    </div>
  );
}

export default function PersonCard({ figure }: { figure: Figure }) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      className="group overflow-hidden rounded-xl border border-gold/20 bg-paper/[0.03] transition hover:border-gold/45 hover:shadow-[0_12px_40px_rgba(201,162,39,0.12)]"
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-ink-deep">
        {figure.image ? (
          <Image
            src={figure.image}
            alt={`${figure.name}の肖像`}
            width={640}
            height={480}
            className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        ) : (
          <Silhouette name={figure.name} />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/20 to-transparent" />
        <span
          className={`absolute right-3 top-3 rounded-full border px-2.5 py-1 text-[10px] backdrop-blur-sm ${sideColor[figure.side]}`}
        >
          {figure.side}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-serif text-xl text-paper">{figure.name}</h3>
        <p className="mt-0.5 text-xs text-paper/45">{figure.reading}</p>
        <p className="mt-3 text-xs tracking-wider text-gold/80">{figure.role}</p>
        <p className="mt-2 text-sm leading-relaxed text-paper/70">{figure.summary}</p>
        {figure.imageCredit && (
          <p className="mt-3 text-[10px] leading-relaxed text-paper/35">
            出典: Wikimedia Commons — {figure.imageCredit.split("—").slice(1).join("—").trim() || figure.imageCredit}
          </p>
        )}
      </div>
    </motion.article>
  );
}
