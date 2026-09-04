import type { Metadata } from "next";
import ChapterHero from "@/components/ChapterHero";
import ChapterNav from "@/components/ChapterNav";
import ForceDiagram from "@/components/ForceDiagram";

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
      <div className="mt-8">
        <ForceDiagram />
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-sky-400/20 bg-sky-500/5 p-5">
          <h2 className="font-serif text-lg text-sky-200">東軍の要点</h2>
          <p className="mt-2 text-sm leading-relaxed text-paper/70">
            徳川家康を中心に、福島正則など豊臣恩顧の一部も参加。組織力と戦後処理の主導権が勝敗後の政権移行を加速させた。
          </p>
        </div>
        <div className="rounded-xl border border-rose-400/20 bg-rose-500/5 p-5">
          <h2 className="font-serif text-lg text-rose-200">西軍の要点</h2>
          <p className="mt-2 text-sm leading-relaxed text-paper/70">
            石田三成が中核となり毛利輝元を総大将に据える。兵力は集まるが、指揮統一と諸将の利害が難しく、離反が致命傷となった。
          </p>
        </div>
      </div>
      <ChapterNav current="/forces" />
    </div>
  );
}
