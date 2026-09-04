"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/data/nav";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-gold/50 bg-gold/10 text-sm font-bold text-gold">
            関
          </span>
          <div className="leading-tight">
            <p className="font-serif text-sm tracking-widest text-paper group-hover:text-gold">
              関ヶ原の戦い
            </p>
            <p className="text-[10px] tracking-wider text-paper/50">歴史学習・参考番組風</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded px-2.5 py-1.5 text-xs tracking-wide transition ${
                  active
                    ? "bg-gold/15 text-gold"
                    : "text-paper/70 hover:bg-paper/5 hover:text-paper"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="rounded border border-gold/30 px-3 py-1.5 text-xs text-gold lg:hidden"
          aria-expanded={open}
          aria-label="メニュー"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "閉じる" : "目次"}
        </button>
      </div>

      {open && (
        <div className="border-t border-gold/15 bg-ink/95 lg:hidden">
          <nav className="mx-auto grid max-w-6xl gap-1 px-4 py-3">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-md px-3 py-2.5 text-sm ${
                    active ? "bg-gold/15 text-gold" : "text-paper/80 hover:bg-paper/5"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-[10px] text-paper/40">{item.chapter}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
