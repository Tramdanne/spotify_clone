import Link from "next/link";

type SectionHeaderProps = {
  title: string;
  href: string;
  ctaLabel: string;
};

export function SectionHeader({
  title,
  href,
  ctaLabel,
}: SectionHeaderProps) {
  return (
    <div className="flex items-end justify-between gap-4">
      <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
        {title}
      </h2>
      <Link
        href={href}
        className="text-sm font-semibold text-zinc-400 transition hover:text-white"
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
