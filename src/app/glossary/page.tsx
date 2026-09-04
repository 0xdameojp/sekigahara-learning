import type { Metadata } from "next";
import ChapterHero from "@/components/ChapterHero";
import ChapterNav from "@/components/ChapterNav";
import { glossary } from "@/data/glossary";

export const metadata: Metadata = {
  title: "用語集",
};

export default function GlossaryPage() {
  return (
    <div>
      <ChapterHero
        chapter="第7章"
        title="用語集"
        subtitle="関ヶ原と戦国末期を読み解くための語彙リスト。"
      />
      <dl className="mt-8 divide-y divide-gold/10 rounded-xl border border-gold/20 bg-paper/[0.03]">
        {glossary.map((item) => (
          <div key={item.term} className="px-5 py-4 md:px-6">
            <dt className="font-serif text-lg text-gold">
              {item.term}
              {item.reading && (
                <span className="ml-2 text-xs font-sans text-paper/45">（{item.reading}）</span>
              )}
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-paper/70">{item.definition}</dd>
          </div>
        ))}
      </dl>
      <ChapterNav current="/glossary" />
    </div>
  );
}
