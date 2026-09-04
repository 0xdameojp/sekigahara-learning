"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function FloatingOrbs() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-crimson/20 blur-3xl" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-gold/15 blur-3xl"
        animate={{ y: [0, -18, 0], x: [0, 10, 0], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-crimson/25 blur-3xl"
        animate={{ y: [0, 14, 0], x: [0, -8, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute left-1/3 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-gold/10 blur-2xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
    </div>
  );
}
