"use client";

import { StaggerItem, StaggerList } from "@/components/motion/Reveal";
import { timelineEvents } from "@/data/timeline";

export default function TimelineList() {
  return (
    <StaggerList className="relative mt-10 ml-3 space-y-0 border-l border-gold/30 md:ml-4" stagger={0.1}>
      {timelineEvents.map((event) => (
        <StaggerItem key={event.date}>
          <div className="relative pb-10 pl-8">
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
          </div>
        </StaggerItem>
      ))}
    </StaggerList>
  );
}
