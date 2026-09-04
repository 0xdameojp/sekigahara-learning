import ChapterNav from "@/components/ChapterNav";
import HomeHero from "@/components/HomeHero";
import FadeIn from "@/components/motion/FadeIn";

export default function HomePage() {
  return (
    <div>
      <HomeHero />

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
        ].map((card, i) => (
          <FadeIn key={card.title} delay={i * 0.1}>
            <div className="rounded-xl border border-gold/15 bg-paper/[0.03] p-5 transition hover:border-gold/35">
              <h2 className="font-serif text-lg text-gold">{card.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-paper/65">{card.body}</p>
            </div>
          </FadeIn>
        ))}
      </section>

      <FadeIn delay={0.15}>
        <ChapterNav />
      </FadeIn>

      <p className="mt-10 text-xs leading-relaxed text-paper/40">
        ※本サイトは教育目的のオリジナル教材です。映像の埋め込みは行いません。地図・勢力図は学習用の簡略SVGです。
        肖像・合戦図は Wikimedia Commons のパブリックドメイン／自由ライセンス画像を使用しています。
      </p>
    </div>
  );
}
