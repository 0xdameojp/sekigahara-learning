type Props = {
  chapter: string;
  title: string;
  subtitle: string;
};

export default function ChapterHero({ chapter, title, subtitle }: Props) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-gold/20 bg-gradient-to-br from-ink-deep via-ink to-ink-deep px-6 py-10 md:px-10">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -bottom-16 left-10 h-40 w-40 rounded-full bg-crimson/20 blur-3xl" />
      </div>
      <p className="relative text-xs tracking-[0.3em] text-gold">{chapter}</p>
      <h1 className="relative mt-2 font-serif text-3xl text-paper md:text-4xl">{title}</h1>
      <p className="relative mt-3 max-w-2xl text-sm leading-relaxed text-paper/70 md:text-base">
        {subtitle}
      </p>
    </div>
  );
}
