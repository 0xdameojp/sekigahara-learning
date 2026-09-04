import type { Metadata } from "next";
import ChapterHero from "@/components/ChapterHero";
import ChapterNav from "@/components/ChapterNav";
import { synopsisParagraphs } from "@/data/battleFlow";

export const metadata: Metadata = {
  title: "あらすじ",
};

export default function SynopsisPage() {
  return (
    <div>
      <ChapterHero
        chapter="第1章"
        title="あらすじ"
        subtitle="豊臣政権の崩壊から東西対立、そして関ヶ原へ。"
      />
      <div className="prose-jp mt-8 space-y-5 rounded-xl border border-gold/15 bg-paper/[0.03] p-6 md:p-8">
        {synopsisParagraphs.map((p) => (
          <p key={p.slice(0, 12)} className="text-paper/80">
            {p}
          </p>
        ))}
      </div>
      <ChapterNav current="/synopsis" />
    </div>
  );
}
