import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gold/15 bg-ink-deep">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-paper/55 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} 関ヶ原の戦い 学習サイト — 教育目的の参考資料です。
        </p>
        <div className="flex gap-4">
          <Link href="/quiz" className="hover:text-gold">
            確認クイズ
          </Link>
          <Link href="/references" className="hover:text-gold">
            参考・免責
          </Link>
        </div>
      </div>
    </footer>
  );
}
