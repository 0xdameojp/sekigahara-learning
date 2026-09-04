import type { Metadata } from "next";
import ChapterHero from "@/components/ChapterHero";
import ChapterNav from "@/components/ChapterNav";
import PersonCard from "@/components/PersonCard";
import { figures } from "@/data/figures";

export const metadata: Metadata = {
  title: "主要人物",
};

export default function FiguresPage() {
  return (
    <div>
      <ChapterHero
        chapter="第5章"
        title="主要人物"
        subtitle="東軍・西軍・寝返りの鍵となった人物をカードで整理。"
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {figures.map((figure) => (
          <PersonCard key={figure.name} figure={figure} />
        ))}
      </div>
      <ChapterNav current="/figures" />
    </div>
  );
}
