"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FloatingOrbs from "@/components/motion/FloatingOrbs";

export default function HomeHero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.35]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden rounded-2xl border border-gold/25 bg-ink-deep px-6 py-14 md:px-12 md:py-20"
    >
      <motion.div className="absolute inset-0" style={{ y, opacity }}>
        <Image
          src="/images/hero/sekigahara-battle.jpg"
          alt="関ヶ原合戦図屏風（岐阜市歴史博物館蔵）"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 1200px) 100vw, 1152px"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink-deep/92 via-ink/85 to-ink-deep/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-transparent to-ink-deep/50" />
      </motion.div>

      <FloatingOrbs />
      <div className="pointer-events-none absolute inset-0 grain-overlay opacity-50" />

      <div className="relative">
        <motion.p
          className="text-xs tracking-[0.35em] text-gold"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          DOCUMENTARY STYLE LEARNING
        </motion.p>
        <motion.h1
          className="mt-4 font-serif text-4xl leading-tight text-paper md:text-6xl"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          関ヶ原の戦い
        </motion.h1>
        <motion.p
          className="mt-3 font-serif text-lg text-gold/90 md:text-2xl"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
        >
          歴史学習・参考番組風
        </motion.p>
        <motion.p
          className="mt-6 max-w-2xl text-sm leading-relaxed text-paper/75 md:text-base"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28 }}
        >
          慶長5年9月15日、美濃・関ヶ原で東西の軍勢が激突した。豊臣政権の揺らぎから徳川覇権へ——
          TVドキュメンタリー／参考番組を見ながらの理解を助ける、章立て学習サイトです。
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div whileHover={reduce ? undefined : { scale: 1.04 }} whileTap={reduce ? undefined : { scale: 0.98 }}>
            <Link
              href="/synopsis"
              className="inline-block rounded-md border border-gold/50 bg-gold/25 px-5 py-2.5 text-sm text-gold shadow-[0_0_24px_rgba(201,162,39,0.25)] hover:bg-gold/35"
            >
              第1章から見る
            </Link>
          </motion.div>
          <motion.div whileHover={reduce ? undefined : { scale: 1.04 }} whileTap={reduce ? undefined : { scale: 0.98 }}>
            <Link
              href="/quiz"
              className="inline-block rounded-md border border-paper/25 bg-paper/5 px-5 py-2.5 text-sm text-paper/85 backdrop-blur-sm hover:border-paper/45"
            >
              確認クイズへ
            </Link>
          </motion.div>
        </motion.div>

        <p className="mt-6 text-[10px] text-paper/40">
          背景出典: Wikimedia Commons — Sekigahara_Kassen_Byōbu-zu_(Gifu_History_Museum).jpg
        </p>
      </div>
    </section>
  );
}
