import type { Figure } from "@/data/figures";

const sideColor: Record<Figure["side"], string> = {
  東軍: "border-sky-400/40 bg-sky-500/10 text-sky-200",
  西軍: "border-rose-400/40 bg-rose-500/10 text-rose-200",
  "中立・複雑": "border-amber-400/40 bg-amber-500/10 text-amber-100",
};

export default function PersonCard({ figure }: { figure: Figure }) {
  return (
    <article className="rounded-xl border border-gold/20 bg-paper/[0.03] p-5 transition hover:border-gold/40">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-serif text-xl text-paper">{figure.name}</h3>
          <p className="mt-0.5 text-xs text-paper/45">{figure.reading}</p>
        </div>
        <span className={`rounded-full border px-2.5 py-1 text-[10px] ${sideColor[figure.side]}`}>
          {figure.side}
        </span>
      </div>
      <p className="mt-3 text-xs tracking-wider text-gold/80">{figure.role}</p>
      <p className="mt-2 text-sm leading-relaxed text-paper/70">{figure.summary}</p>
    </article>
  );
}
