import type { Metadata } from "next";
import ChapterHero from "@/components/ChapterHero";
import ChapterNav from "@/components/ChapterNav";
import Quiz from "@/components/Quiz";

export const metadata: Metadata = {
  title: "確認クイズ",
};

export default function QuizPage() {
  return (
    <div>
      <ChapterHero
        chapter="第8章"
        title="確認クイズ"
        subtitle="全10問。すべて選ぶと採点でき、解説付きで振り返れます。"
      />
      <div className="mt-8">
        <Quiz />
      </div>
      <ChapterNav current="/quiz" />
    </div>
  );
}
