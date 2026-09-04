import type { Metadata } from "next";
import ChapterHero from "@/components/ChapterHero";
import ChapterNav from "@/components/ChapterNav";
import { battlePhases } from "@/data/battleFlow";

export const metadata: Metadata = {
  title: "戦いの流れ",
};

export default function BattleFlowPage() {
  return (
    <div>
      <ChapterHero
        chapter="第6章"
        title="戦いの流れ"
        subtitle="早朝の霧から午後の決着まで。番組チャプターに沿った進行表。"
      />
      <div className="mt-8 grid gap-4">
        {battlePhases.map((phase, index) => (
          <article
            key={phase.title}
            className="grid gap-4 rounded-xl border border-gold/20 bg-paper/[0.03] p-5 md:grid-cols-[140px_1fr] md:p-6"
          >
            <div>
              <p className="text-[10px] tracking-[0.25em] text-gold/70">SCENE {index + 1}</p>
              <p className="mt-2 font-serif text-2xl text-gold">{phase.time}</p>
            </div>
            <div>
              <h2 className="font-serif text-xl text-paper">{phase.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-paper/70">{phase.body}</p>
            </div>
          </article>
        ))}
      </div>
      <ChapterNav current="/battle-flow" />
    </div>
  );
}
