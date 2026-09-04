import type { Metadata } from "next";
import ChapterHero from "@/components/ChapterHero";
import ChapterNav from "@/components/ChapterNav";
import FadeIn from "@/components/motion/FadeIn";

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
  {
    name: "Wikimedia Commons",
    href: "https://commons.wikimedia.org/",
    note: "本サイトの肖像・合戦図の出典（パブリックドメイン／自由ライセンス）",
  },
];

const imageCredits = [
  {
    path: "public/images/figures/tokugawa-ieyasu.jpg",
    file: "Tokugawa_Ieyasu2.JPG",
    note: "伝狩野探幽筆・大阪城天守閣所蔵（パブリックドメイン）",
  },
  {
    path: "public/images/figures/ishida-mitsunari.jpg",
    file: "Ishida_Mitsunari.jpg",
    note: "絹本著色石田三成像（模本）・東京大学史料編纂所蔵",
  },
  {
    path: "public/images/figures/mori-terumoto.jpg",
    file: "Mori_Terumoto.jpg",
    note: "江戸時代初期の肖像",
  },
  {
    path: "public/images/figures/kobayakawa-hideaki.jpg",
    file: "Kobayakawa_Hideaki_cropped.jpg",
    note: "小早川秀秋肖像・絹本着色",
  },
  {
    path: "public/images/figures/fukushima-masanori.jpg",
    file: "Masanori_Fukushima.JPG",
    note: "福島正則肖像",
  },
  {
    path: "public/images/figures/otani-yoshitsugu.jpg",
    file: "Ōtani_Yoshitsugu.jpg",
    note: "『太平記英雄傳』錦絵",
  },
  {
    path: "public/images/figures/ukita-hideie.jpg",
    file: "Ukita_Hideie.jpg",
    note: "宇喜多秀家肖像",
  },
  {
    path: "public/images/figures/honda-tadakatsu.jpg",
    file: "Portrait-Honda-Tadakatsu.jpg",
    note: "紙本著色本多忠勝像",
  },
  {
    path: "public/images/places/osaka-castle.jpg",
    file: "The_Siege_of_Osaka_Castle_1615_cropped.jpg",
    note: "大坂夏の陣図屏風（部分）・17世紀・パブリックドメイン",
  },
  {
    path: "public/images/places/sekigahara-byobu.jpg / hero/sekigahara-battle.jpg",
    file: "Sekigahara_Kassen_Byōbu-zu_(Gifu_History_Museum).jpg",
    note: "関ヶ原合戦図屏風・岐阜市歴史博物館蔵・江戸時代後期",
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

      <FadeIn>
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
      </FadeIn>

      <FadeIn delay={0.08}>
        <section className="mt-6 rounded-xl border border-gold/20 bg-paper/[0.03] p-6">
          <h2 className="font-serif text-xl text-gold">画像出典（Wikimedia Commons）</h2>
          <p className="mt-2 text-sm text-paper/60">
            肖像・合戦図は Wikimedia Commons 上のパブリックドメインまたは自由ライセンス作品をローカルに保存して使用しています。
            各ページのキャプションにも「出典: Wikimedia Commons」とファイル名を記載しています。
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            {imageCredits.map((item) => (
              <li key={item.file} className="border-b border-gold/10 pb-3 last:border-0">
                <p className="text-paper/85">
                  <span className="text-gold/80">{item.file}</span>
                </p>
                <p className="mt-0.5 text-xs text-paper/45">{item.path}</p>
                <p className="mt-1 text-paper/60">{item.note}</p>
              </li>
            ))}
          </ul>
        </section>
      </FadeIn>

      <section className="mt-6 rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 text-sm leading-relaxed text-paper/75">
        <h2 className="font-serif text-lg text-amber-200">学習用免責事項</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>本サイトは学校教育・独学・番組視聴の補助を目的としたオリジナル教材です。</li>
          <li>歴史叙述には学説差があります。試験対策や研究では一次資料・専門書を優先してください。</li>
          <li>戦場マップ・勢力図は理解用の簡略図であり、正確な測量・完全な布陣再現ではありません。</li>
          <li>著作権で保護されたTV番組映像・音声・ロゴ等は埋め込んでいません。参考として外部リンクのみ示します。</li>
          <li>外部サイトの内容・可用性・利用規約については各運営者に帰属します。</li>
          <li>歴史肖像・絵画は可能な限り Wikimedia Commons の自由ライセンス／パブリックドメインを使用しています。</li>
        </ul>
      </section>

      <ChapterNav current="/references" />
    </div>
  );
}
