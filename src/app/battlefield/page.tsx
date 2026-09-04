import type { Metadata } from "next";
import ChapterHero from "@/components/ChapterHero";
import ChapterNav from "@/components/ChapterNav";
import BattlefieldMap from "@/components/BattlefieldMap";
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
        subtitle="関ヶ原周辺の学習用簡易SVG図。実寸・正確な測量図ではありません。"
      />

      <PlaceImage
        className="mt-8"
        src="/images/places/sekigahara-byobu.jpg"
        alt="関ヶ原合戦図屏風による戦場の俯瞰"
        credit="Sekigahara_Kassen_Byōbu-zu_(Gifu_History_Museum).jpg"
        caption="屏風絵に描かれた関ヶ原。学習用マップとあわせて地形・布陣のイメージを掴む。"
      />

      <FadeIn className="mt-8">
        <BattlefieldMap />
      </FadeIn>
      <ul className="mt-6 space-y-2 rounded-xl border border-gold/15 bg-paper/[0.03] p-5 text-sm text-paper/70">
        <li>・中央付近に東軍本隊、北方〜中央に西軍中核を概念配置。</li>
        <li>・南方の松尾山に小早川秀秋。開戦後の寝返りが学習上の重要ポイント。</li>
        <li>・中山道は東西交通のイメージとして破線的に表現。</li>
      </ul>
      <ChapterNav current="/battlefield" />
    </div>
  );
}
