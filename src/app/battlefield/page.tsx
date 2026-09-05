import type { Metadata } from "next";
import Link from "next/link";
import ChapterHero from "@/components/ChapterHero";
import ChapterNav from "@/components/ChapterNav";
import BattlefieldMap from "@/components/BattlefieldMap";
import TroopMovementPlayer from "@/components/TroopMovementPlayer";
import PlaceImage from "@/components/PlaceImage";
import FadeIn from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "戦場マップ",
};

export default function BattlefieldPage() {
  return (
    <div>
      <ChapterHero
        chapter="第4章"
        title="戦場マップ"
        subtitle="関ヶ原周辺の学習用簡易SVG図と、時系列別の部隊移動アニメーション。実寸・正確な測量図ではありません。"
      />

      <PlaceImage
        className="mt-8"
        src="/images/places/sekigahara-byobu.jpg"
        alt="関ヶ原合戦図屏風による戦場の俯瞰"
        credit="Sekigahara_Kassen_Byōbu-zu_(Gifu_History_Museum).jpg"
        caption="屏風絵に描かれた関ヶ原。学習用マップとあわせて地形・布陣のイメージを掴む。"
      />

      <FadeIn className="mt-8">
        <TroopMovementPlayer />
      </FadeIn>

      <ul className="mt-6 space-y-2 rounded-xl border border-gold/15 bg-paper/[0.03] p-5 text-sm text-paper/70">
        <li>・再生すると早朝→午前→正午（小早川の寝返り）→午後の4局面で各軍が移動します。</li>
        <li>・南方の松尾山から大谷方面へ動く金枠が小早川秀秋の寝返り（概念）。</li>
        <li>・破線枠の毛利方面は「動かなかった」学習ポイントを示す待機表示です。</li>
        <li>・中山道は東西交通のイメージとして表現。詳細な流れは{" "}
          <Link href="/battle-flow" className="text-gold underline-offset-2 hover:underline">
            戦いの流れ
          </Link>
          {" "}も参照。</li>
      </ul>

      <details className="mt-8 rounded-xl border border-gold/15 bg-paper/[0.02] p-4 open:pb-5">
        <summary className="cursor-pointer font-serif text-paper/90">
          静的マップ（従来版）を表示
        </summary>
        <FadeIn className="mt-4">
          <BattlefieldMap />
        </FadeIn>
      </details>

      <ChapterNav current="/battlefield" />
    </div>
  );
}
