import type { Metadata } from "next";
import ChapterHero from "@/components/ChapterHero";
import ChapterNav from "@/components/ChapterNav";
import { timelineEvents } from "@/data/timeline";

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
      <ol className="relative mt-10 space-y-0 border-l border-gold/30 ml-3 md:ml-4">
        {timelineEvents.map((event) => (
          <li key={event.date} className="relative pb-10 pl-8">
            <span
              className={`absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border ${
                event.highlight
                  ? "border-gold bg-gold shadow-[0_0_12px_rgba(201,162,39,0.8)]"
                  : "border-gold/50 bg-ink"
              }`}
            />
            <p className="text-xs tracking-wider text-gold">{event.date}</p>
            <h2 className="mt-1 font-serif text-xl text-paper">{event.title}</h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-paper/70">{event.detail}</p>
          </li>
        ))}
      </ol>
      <ChapterNav current="/timeline" />
    </div>
  );
}
