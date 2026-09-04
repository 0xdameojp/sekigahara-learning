import type { Metadata } from "next";
import ChapterHero from "@/components/ChapterHero";
import ChapterNav from "@/components/ChapterNav";
import PlaceImage from "@/components/PlaceImage";
import FadeIn from "@/components/motion/FadeIn";
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

      <PlaceImage
        className="mt-8"
        src="/images/places/osaka-castle.jpg"
        alt="大坂夏の陣図屏風（部分）に描かれた大坂城周辺"
        credit="The_Siege_of_Osaka_Castle_1615_cropped.jpg"
        caption="豊臣政権の本拠・大坂。秀吉死後の政争はここを中心に広がった。"
      />

      <div className="prose-jp mt-8 space-y-5 rounded-xl border border-gold/15 bg-paper/[0.03] p-6 md:p-8">
        {synopsisParagraphs.map((p, i) => (
          <FadeIn key={p.slice(0, 12)} delay={i * 0.06}>
            <p className="text-paper/80">{p}</p>
          </FadeIn>
        ))}
      </div>
      <ChapterNav current="/synopsis" />
    </div>
  );
}
