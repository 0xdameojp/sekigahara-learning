import Link from "next/link";
import ChapterNav from "@/components/ChapterNav";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden rounded-2xl border border-gold/25 bg-gradient-to-br from-ink-deep via-[#1a120c] to-ink px-6 py-14 md:px-12 md:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          <div className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-crimson/20 blur-3xl" />
        </div>

        <p className="relative text-xs tracking-[0.35em] text-gold">DOCUMENTARY STYLE LEARNING</p>
        <h1 className="relative mt-4 font-serif text-4xl leading-tight text-paper md:text-6xl">
          関ヶ原の戦い
        </h1>
        <p className="relative mt-3 font-serif text-lg text-gold/90 md:text-2xl">
          歴史学習・参考番組風
        </p>
        <p className="relative mt-6 max-w-2xl text-sm leading-relaxed text-paper/70 md:text-base">
          慶長5年9月15日、美濃・関ヶ原で東西の軍勢が激突した。豊臣政権の揺らぎから徳川覇権へ——
          TVドキュメンタリー／参考番組を見ながらの理解を助ける、章立て学習サイトです。
        </p>

        <div className="relative mt-8 flex flex-wrap gap-3">
          <Link
            href="/synopsis"
            className="rounded-md border border-gold/50 bg-gold/20 px-5 py-2.5 text-sm text-gold hover:bg-gold/30"
          >
            第1章から見る
          </Link>
          <Link
            href="/quiz"
            className="rounded-md border border-paper/20 px-5 py-2.5 text-sm text-paper/80 hover:border-paper/40"
          >
            確認クイズへ
          </Link>
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          {
            title: "一日の決戦",
            body: "午前の激戦から小早川の寝返り、午後の決着までを時系列で整理。",
          },
          {
            title: "人と勢力",
            body: "東軍・西軍の人物カードと勢力図で、誰がどこに立ったかを把握。",
          },
          {
            title: "学び直し",
            body: "用語集と10問クイズで、番組視聴後の確認学習ができます。",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-xl border border-gold/15 bg-paper/[0.03] p-5"
          >
            <h2 className="font-serif text-lg text-gold">{card.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-paper/65">{card.body}</p>
          </div>
        ))}
      </section>

      <ChapterNav />

      <p className="mt-10 text-xs leading-relaxed text-paper/40">
        ※本サイトは教育目的のオリジナル教材です。映像の埋め込みは行いません。地図・勢力図は学習用の簡略SVGです。
      </p>
    </div>
  );
}
