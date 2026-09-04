import type { Metadata } from "next";
import ChapterHero from "@/components/ChapterHero";
import ChapterNav from "@/components/ChapterNav";
import ForceDiagram from "@/components/ForceDiagram";
import ForceAvatars from "@/components/ForceAvatars";
import FadeIn from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "勢力図",
};

export default function ForcesPage() {
  return (
    <div>
      <ChapterHero
        chapter="第3章"
        title="勢力図"
        subtitle="東軍徳川／西軍石田。小早川など寝返りの注記付き概念図。"
      />
      <FadeIn className="mt-8">
        <ForceDiagram />
      </FadeIn>
      <ForceAvatars />
      <ChapterNav current="/forces" />
    </div>
  );
}
