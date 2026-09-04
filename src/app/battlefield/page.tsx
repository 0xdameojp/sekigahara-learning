import type { Metadata } from "next";
import ChapterHero from "@/components/ChapterHero";
import ChapterNav from "@/components/ChapterNav";
import BattlefieldMap from "@/components/BattlefieldMap";

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
      <div className="mt-8">
        <BattlefieldMap />
      </div>
      <ul className="mt-6 space-y-2 rounded-xl border border-gold/15 bg-paper/[0.03] p-5 text-sm text-paper/70">
        <li>・中央付近に東軍本隊、北方〜中央に西軍中核を概念配置。</li>
        <li>・南方の松尾山に小早川秀秋。開戦後の寝返りが学習上の重要ポイント。</li>
        <li>・中山道は東西交通のイメージとして破線的に表現。</li>
      </ul>
      <ChapterNav current="/battlefield" />
    </div>
  );
}
