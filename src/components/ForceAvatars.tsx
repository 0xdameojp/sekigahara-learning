"use client";

import Image from "next/image";
import { figures } from "@/data/figures";
import FadeIn from "@/components/motion/FadeIn";

const eastNames = ["徳川家康", "福島正則", "本多忠勝"];
const westNames = ["石田三成", "毛利輝元", "宇喜多秀家", "大谷吉継", "小早川秀秋"];

function AvatarRow({ names, tone }: { names: string[]; tone: "east" | "west" }) {
  const ring = tone === "east" ? "ring-sky-400/40" : "ring-rose-400/40";
  return (
    <div className="mt-4 flex flex-wrap gap-3">
      {names.map((name) => {
        const fig = figures.find((f) => f.name === name);
        if (!fig?.image) return null;
        return (
          <div key={name} className="flex items-center gap-2 rounded-full border border-gold/15 bg-ink/40 py-1 pl-1 pr-3">
            <Image
              src={fig.image}
              alt={name}
              width={36}
              height={36}
              className={`h-9 w-9 rounded-full object-cover object-top ring-2 ${ring}`}
            />
            <span className="text-xs text-paper/80">{name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default function ForceAvatars() {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      <FadeIn>
        <div className="rounded-xl border border-sky-400/20 bg-sky-500/5 p-5">
          <h2 className="font-serif text-lg text-sky-200">東軍の要点</h2>
          <p className="mt-2 text-sm leading-relaxed text-paper/70">
            徳川家康を中心に、福島正則など豊臣恩顧の一部も参加。組織力と戦後処理の主導権が勝敗後の政権移行を加速させた。
          </p>
          <AvatarRow names={eastNames} tone="east" />
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className="rounded-xl border border-rose-400/20 bg-rose-500/5 p-5">
          <h2 className="font-serif text-lg text-rose-200">西軍の要点</h2>
          <p className="mt-2 text-sm leading-relaxed text-paper/70">
            石田三成が中核となり毛利輝元を総大将に据える。兵力は集まるが、指揮統一と諸将の利害が難しく、離反が致命傷となった。
          </p>
          <AvatarRow names={westNames} tone="west" />
        </div>
      </FadeIn>
    </div>
  );
}
