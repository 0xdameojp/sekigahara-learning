import Link from "next/link";
import { navItems } from "@/data/nav";

type Props = {
  current?: string;
};

export default function ChapterNav({ current }: Props) {
  const chapters = navItems.filter((n) => n.href !== "/");

  return (
    <section className="mt-10">
      <div className="mb-4 flex items-end justify-between gap-4">
        <h2 className="font-serif text-xl text-gold">番組チャプター</h2>
        <p className="text-xs text-paper/45">TVドキュメンタリー風の章立て</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {chapters.map((item) => {
          const active = current === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group rounded-lg border p-4 transition ${
                active
                  ? "border-gold/50 bg-gold/10"
                  : "border-gold/15 bg-paper/[0.03] hover:border-gold/40 hover:bg-gold/5"
              }`}
            >
              <p className="text-[10px] tracking-[0.25em] text-gold/80">{item.chapter}</p>
              <p className="mt-1 font-serif text-lg text-paper group-hover:text-gold">
                {item.label}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-paper/55">{item.description}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
