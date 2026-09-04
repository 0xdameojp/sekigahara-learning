import type { Metadata } from "next";
import ChapterHero from "@/components/ChapterHero";
import ChapterNav from "@/components/ChapterNav";

export const metadata: Metadata = {
  title: "参考リンク",
};

const links = [
  {
    name: "関ケ原町（自治体）",
    href: "https://www.town.sekigahara.gifu.jp/",
    note: "現地の文化・観光情報の入口",
  },
  {
    name: "岐阜県公式サイト",
    href: "https://www.pref.gifu.lg.jp/",
    note: "地域史・文化財関連の公的情報",
  },
  {
    name: "国立国会図書館サーチ",
    href: "https://ndlsearch.ndl.go.jp/",
    note: "関ヶ原関連の文献探索に利用可",
  },
  {
    name: "文化庁",
    href: "https://www.bunka.go.jp/",
    note: "文化財・歴史資料の公的ポータル",
  },
];

export default function ReferencesPage() {
  return (
    <div>
      <ChapterHero
        chapter="ED"
        title="参考リンク・学習用免責"
        subtitle="映像の埋め込みは行いません。外部サイトは各自の責任で参照してください。"
      />

      <section className="mt-8 rounded-xl border border-gold/20 bg-paper/[0.03] p-6">
        <h2 className="font-serif text-xl text-gold">参考リンク</h2>
        <ul className="mt-4 space-y-3">
          {links.map((link) => (
            <li key={link.href} className="text-sm">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper underline decoration-gold/40 underline-offset-4 hover:text-gold"
              >
                {link.name}
              </a>
              <span className="ml-2 text-paper/50">— {link.note}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6 rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 text-sm leading-relaxed text-paper/75">
        <h2 className="font-serif text-lg text-amber-200">学習用免責事項</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>本サイトは学校教育・独学・番組視聴の補助を目的としたオリジナル教材です。</li>
          <li>歴史叙述には学説差があります。試験対策や研究では一次資料・専門書を優先してください。</li>
          <li>戦場マップ・勢力図は理解用の簡略図であり、正確な測量・完全な布陣再現ではありません。</li>
          <li>著作権で保護されたTV番組映像・音声・ロゴ等は埋め込んでいません。参考として外部リンクのみ示します。</li>
          <li>外部サイトの内容・可用性・利用規約については各運営者に帰属します。</li>
        </ul>
      </section>

      <ChapterNav current="/references" />
    </div>
  );
}
