import Link from "next/link";
import Image from "next/image";

type AlbumCardProps = {
  href: string;
  title: string;
  subtitle: string;
  label: string;
  imageUrl: string;
};

export function AlbumCard({
  href,
  title,
  subtitle,
  label,
  imageUrl,
}: AlbumCardProps) {
  return (
    <Link
      href={href}
      className="group block w-55 shrink-0 rounded-3xl p-3 transition hover:bg-white/6 md:w-60"
    >
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#1b1b1b]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="240px"
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 via-black/10 to-transparent p-4">
          <p className="text-xs font-bold tracking-[0.24em] text-white/85">
            {label}
          </p>
        </div>
        <div className="absolute right-3 bottom-3 grid size-11 place-items-center rounded-full bg-[#1ed760] text-black opacity-0 shadow-lg transition group-hover:opacity-100">
          <span className="block size-0 border-y-[8px] border-y-transparent border-l-[13px] border-l-black" />
        </div>
      </div>
      <div className="space-y-1 px-1 pt-4">
        <h3 className="line-clamp-2 text-lg font-semibold text-white md:text-xl">
          {title}
        </h3>
        <p className="line-clamp-2 text-sm text-zinc-400 md:text-base">
          {subtitle}
        </p>
      </div>
    </Link>
  );
}
