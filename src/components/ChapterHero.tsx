"use client";

import { motion, useReducedMotion } from "framer-motion";
import FloatingOrbs from "@/components/motion/FloatingOrbs";

type Props = {
  chapter: string;
  title: string;
  subtitle: string;
};

export default function ChapterHero({ chapter, title, subtitle }: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl border border-gold/20 bg-gradient-to-br from-ink-deep via-ink to-ink-deep px-6 py-10 md:px-10"
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <FloatingOrbs />
      <div className="pointer-events-none absolute inset-0 opacity-40 grain-overlay" />
      <motion.p
        className="relative text-xs tracking-[0.3em] text-gold"
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        {chapter}
      </motion.p>
      <motion.h1
        className="relative mt-2 font-serif text-3xl text-paper md:text-4xl"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.55 }}
      >
        {title}
      </motion.h1>
      <motion.p
        className="relative mt-3 max-w-2xl text-sm leading-relaxed text-paper/70 md:text-base"
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.32, duration: 0.55 }}
      >
        {subtitle}
      </motion.p>
    </motion.div>
  );
}
