import type { Metadata } from "next";
import ChapterHero from "@/components/ChapterHero";
import ChapterNav from "@/components/ChapterNav";
import TimelineList from "@/components/TimelineList";

export const metadata: Metadata = {
  title: "タイムライン",
};

export default function TimelinePage() {
  return (
    <div>
      <ChapterHero
        chapter="第2章"
        title="タイムライン"
        subtitle="1598年の秀吉死去から慶長5年9月15日の決戦、そして戦後へ。"
      />
      <TimelineList />
      <ChapterNav current="/timeline" />
    </div>
  );
}
