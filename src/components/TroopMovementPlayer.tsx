"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  animationPhases,
  kobayakawaTrail,
  PHASE_DURATION_MS,
  sideStyles,
  troopUnits,
  type AnimationPhaseId,
  type TroopUnit,
} from "@/data/troopAnimation";

const MARKER_W = 108;
const MARKER_H = 44;

function MapBackground({ showFog }: { showFog: boolean }) {
  return (
    <>
      <defs>
        <pattern id="troop-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1f2a24" strokeWidth="1" />
        </pattern>
        <linearGradient id="fog-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9cae9a" stopOpacity="0.22" />
          <stop offset="55%" stopColor="#6b7f6e" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#0b100e" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="900" height="560" fill="#0b100e" />
      <rect width="900" height="560" fill="url(#troop-grid)" />

      <ellipse cx="160" cy="120" rx="110" ry="55" fill="#1a2a20" stroke="#3d5a45" />
      <text x="160" y="125" textAnchor="middle" fill="#9cae9a" fontSize="13">
        北の山地
      </text>

      <ellipse cx="720" cy="140" rx="100" ry="50" fill="#1a2a20" stroke="#3d5a45" />
      <text x="720" y="145" textAnchor="middle" fill="#9cae9a" fontSize="13">
        東側丘陵
      </text>

      <ellipse cx="700" cy="430" rx="120" ry="60" fill="#243528" stroke="#c9a227" strokeWidth="2" />
      <text x="700" y="428" textAnchor="middle" fill="#e8d5a3" fontSize="13">
        松尾山
      </text>

      <path
        d="M80 300 C 250 280, 450 320, 820 290"
        fill="none"
        stroke="#6b5a3a"
        strokeWidth="10"
        strokeLinecap="round"
        opacity="0.7"
      />
      <text x="450" y="275" textAnchor="middle" fill="#a89060" fontSize="12">
        中山道（概念）
      </text>

      <AnimatePresence>
        {showFog && (
          <motion.rect
            key="fog"
            width="900"
            height="560"
            fill="url(#fog-grad)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            style={{ pointerEvents: "none" }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function UnitMarker({
  unit,
  phaseId,
  reduceMotion,
}: {
  unit: TroopUnit;
  phaseId: AnimationPhaseId;
  reduceMotion: boolean | null;
}) {
  const pos = unit.positions[phaseId];
  const styles = sideStyles(unit.side);
  const opacity = pos.opacity ?? (unit.hesitant ? 0.7 : 1);
  const duration = reduceMotion ? 0 : 0.85;

  return (
    <motion.g
      initial={false}
      animate={{
        x: pos.x,
        y: pos.y,
        opacity,
      }}
      transition={{
        duration,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <rect
        width={MARKER_W}
        height={MARKER_H}
        rx={8}
        fill={styles.fill}
        stroke={styles.stroke}
        strokeWidth={unit.side === "defect" ? 2.5 : 2}
        strokeDasharray={unit.hesitant ? "4 3" : undefined}
      />
      <text
        x={MARKER_W / 2}
        y={MARKER_H / 2 + 1}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={styles.text}
        fontSize={13}
        fontFamily="var(--font-noto-sans), sans-serif"
      >
        {unit.shortLabel ?? unit.label}
      </text>
      {unit.hesitant && (
        <text x={MARKER_W / 2} y={MARKER_H + 12} textAnchor="middle" fill="#a78bfa" fontSize={9}>
          待機気味
        </text>
      )}
    </motion.g>
  );
}

function DefectionTrail({
  visible,
  reduceMotion,
}: {
  visible: boolean;
  reduceMotion: boolean | null;
}) {
  const d = kobayakawaTrail
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x + MARKER_W / 2} ${p.y + MARKER_H / 2}`)
    .join(" ");

  return (
    <AnimatePresence>
      {visible && (
        <motion.path
          key="trail"
          d={d}
          fill="none"
          stroke="#fbbf24"
          strokeWidth={2}
          strokeDasharray="6 5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.85 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 1.1, ease: "easeOut" }}
        />
      )}
    </AnimatePresence>
  );
}

export default function TroopMovementPlayer() {
  const reduceMotion = useReducedMotion();
  const liveId = useId();
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [loop, setLoop] = useState(true);
  const loopRef = useRef(loop);
  loopRef.current = loop;

  const phase = animationPhases[phaseIndex];
  const phaseId = phase.id;

  const goTo = useCallback((index: number) => {
    const len = animationPhases.length;
    setPhaseIndex(((index % len) + len) % len);
  }, []);

  const next = useCallback(() => {
    setPhaseIndex((i) => {
      if (i >= animationPhases.length - 1) {
        return loopRef.current ? 0 : i;
      }
      return i + 1;
    });
  }, []);

  const prev = useCallback(() => {
    setPhaseIndex((i) => {
      if (i <= 0) return loopRef.current ? animationPhases.length - 1 : 0;
      return i - 1;
    });
  }, []);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      setPhaseIndex((i) => {
        if (i >= animationPhases.length - 1) {
          if (loopRef.current) return 0;
          setPlaying(false);
          return i;
        }
        return i + 1;
      });
    }, PHASE_DURATION_MS);
    return () => clearInterval(id);
  }, [playing]);

  const liveText = `${phase.time} — ${phase.title}。${phase.narration}`;
  const phaseNotes = troopUnits
    .map((u) => ({ id: u.id, label: u.shortLabel ?? u.label, note: u.positions[phaseId].note }))
    .filter((x): x is { id: string; label: string; note: string } => Boolean(x.note));

  return (
    <section
      className="overflow-hidden rounded-xl border border-gold/20 bg-paper/[0.03]"
      aria-labelledby="troop-player-heading"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gold/15 px-4 py-3 md:px-5">
        <div>
          <h2 id="troop-player-heading" className="font-serif text-lg text-paper md:text-xl">
            時系列・部隊移動アニメーション
          </h2>
          <p className="mt-0.5 text-xs text-paper/50">学習用・配置は概念図（実測ではない）</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-[11px] text-paper/60">
          <span className="inline-flex items-center gap-1.5">
            <span className="inline-block h-3 w-3 rounded-sm border border-[#60a5fa] bg-[#16324f]" />
            東軍
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="inline-block h-3 w-3 rounded-sm border border-[#f87171] bg-[#4a1515]" />
            西軍
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="inline-block h-3 w-3 rounded-sm border border-[#fbbf24] bg-[#3d2a0a]" />
            寝返り
          </span>
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1fr_280px]">
        <div className="relative p-3 md:p-4">
          <svg
            viewBox="0 0 900 560"
            className="h-auto w-full rounded-lg border border-gold/10 bg-[#0b100e]"
            role="img"
            aria-label={`関ヶ原戦場の部隊配置アニメーション。現在の局面: ${phase.time} ${phase.title}`}
          >
            <MapBackground showFog={phaseId === "dawn"} />
            <DefectionTrail
              visible={phaseId === "noon" || phaseId === "afternoon"}
              reduceMotion={reduceMotion}
            />
            {troopUnits.map((unit) => (
              <UnitMarker key={unit.id} unit={unit} phaseId={phaseId} reduceMotion={reduceMotion} />
            ))}
            <text x="870" y="40" textAnchor="end" fill="#64748b" fontSize="11">
              Educational schematic
            </text>
          </svg>
        </div>

        <aside className="flex flex-col border-t border-gold/15 bg-[#0c1210]/60 p-4 md:p-5 lg:border-l lg:border-t-0">
          <p className="text-[10px] tracking-[0.25em] text-gold/70">
            PHASE {phaseIndex + 1} / {animationPhases.length}
          </p>
          <p className="mt-2 font-serif text-2xl text-gold">{phase.time}</p>
          <h3 className="mt-1 font-serif text-lg text-paper">{phase.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-paper/70">{phase.narration}</p>

          {phaseNotes.length > 0 && (
            <ul className="mt-4 space-y-1.5 border-t border-gold/10 pt-3 text-xs text-paper/55">
              {phaseNotes.map((n) => (
                <li key={n.id}>
                  <span className="text-paper/80">{n.label}</span>
                  <span className="mx-1 text-paper/30">·</span>
                  {n.note}
                </li>
              ))}
            </ul>
          )}
        </aside>
      </div>

      <div className="border-t border-gold/15 px-4 py-4 md:px-5">
        <div className="mb-4 grid grid-cols-4 gap-2" role="tablist" aria-label="局面タイムライン">
          {animationPhases.map((p, i) => {
            const active = i === phaseIndex;
            return (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => {
                  goTo(i);
                  setPlaying(false);
                }}
                className={`rounded-lg border px-2 py-2 text-left transition md:px-3 ${
                  active
                    ? "border-gold/50 bg-gold/15 text-gold"
                    : "border-gold/10 bg-paper/[0.02] text-paper/55 hover:border-gold/30 hover:text-paper/80"
                }`}
              >
                <span className="block text-[10px] tracking-wider opacity-70">{p.time}</span>
                <span className="mt-0.5 block truncate text-xs font-medium md:text-sm">{p.title}</span>
              </button>
            );
          })}
        </div>

        <div className="mb-4 h-1 overflow-hidden rounded-full bg-paper/10" aria-hidden>
          <motion.div
            className="h-full rounded-full bg-gold/70"
            initial={false}
            animate={{ width: `${((phaseIndex + 1) / animationPhases.length) * 100}%` }}
            transition={{ duration: reduceMotion ? 0 : 0.35 }}
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setPlaying((v) => !v)}
            className="rounded-lg border border-gold/40 bg-gold/20 px-4 py-2 text-sm font-medium text-gold transition hover:bg-gold/30"
            aria-pressed={playing}
          >
            {playing ? "一時停止" : "再生"}
          </button>
          <button
            type="button"
            onClick={() => {
              setPlaying(false);
              prev();
            }}
            className="rounded-lg border border-gold/20 bg-paper/[0.04] px-3 py-2 text-sm text-paper/80 transition hover:border-gold/40"
          >
            前へ
          </button>
          <button
            type="button"
            onClick={() => {
              setPlaying(false);
              next();
            }}
            className="rounded-lg border border-gold/20 bg-paper/[0.04] px-3 py-2 text-sm text-paper/80 transition hover:border-gold/40"
          >
            次へ
          </button>
          <label className="ml-auto flex cursor-pointer items-center gap-2 text-xs text-paper/55">
            <input
              type="checkbox"
              checked={loop}
              onChange={(e) => setLoop(e.target.checked)}
              className="accent-[#c9a227]"
            />
            ループ
          </label>
        </div>
      </div>

      <div id={liveId} className="sr-only" aria-live="polite" aria-atomic="true">
        {liveText}
      </div>
    </section>
  );
}
