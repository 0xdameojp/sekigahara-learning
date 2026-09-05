import type { Metadata } from "next";
import Link from "next/link";
import ChapterHero from "@/components/ChapterHero";
import ChapterNav from "@/components/ChapterNav";
import PlaceImage from "@/components/PlaceImage";
import { StaggerItem, StaggerList } from "@/components/motion/Reveal";
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

      <PlaceImage
        className="mt-8"
        src="/images/places/sekigahara-byobu.jpg"
        alt="関ヶ原合戦図屏風"
        credit="Sekigahara_Kassen_Byōbu-zu_(Gifu_History_Museum).jpg"
        caption="岐阜市歴史博物館蔵の合戦図屏風。北から見た珍しい構図で戦場全体を描く。"
      />

      <div className="mt-6 rounded-xl border border-gold/25 bg-gold/10 p-4 text-sm text-paper/80 md:p-5">
        <p className="font-medium text-gold">部隊の動きをアニメで見る</p>
        <p className="mt-1 text-paper/65">
          早朝の布陣から小早川の寝返り・西軍崩壊まで、各群の移動を時系列で再生できます。
        </p>
        <Link
          href="/battlefield"
          className="mt-3 inline-flex rounded-lg border border-gold/40 bg-gold/20 px-4 py-2 text-sm font-medium text-gold transition hover:bg-gold/30"
        >
          戦場マップのアニメーションへ →
        </Link>
      </div>

      <StaggerList className="mt-8 grid gap-4">
        {battlePhases.map((phase, index) => (
          <StaggerItem key={phase.title}>
            <article className="grid gap-4 rounded-xl border border-gold/20 bg-paper/[0.03] p-5 transition hover:border-gold/40 md:grid-cols-[140px_1fr] md:p-6">
              <div>
                <p className="text-[10px] tracking-[0.25em] text-gold/70">SCENE {index + 1}</p>
                <p className="mt-2 font-serif text-2xl text-gold">{phase.time}</p>
              </div>
              <div>
                <h2 className="font-serif text-xl text-paper">{phase.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-paper/70">{phase.body}</p>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerList>
      <ChapterNav current="/battle-flow" />
    </div>
  );
}
