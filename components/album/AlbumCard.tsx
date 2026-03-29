import Image from "next/image";
import { Play } from "lucide-react";

import { Button } from "@/components/ui/button";

type AlbumCardProps = {
  title: string;
  subtitle: string;
  label: string;
  imageUrl: string;
};

export function AlbumCard({
  title,
  subtitle,
  label,
  imageUrl,
}: AlbumCardProps) {
  return (
    <article className="group w-55 shrink-0 rounded-3xl p-3 transition hover:bg-white/6 md:w-60">
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
        <Button
          size="icon"
          className="absolute right-3 bottom-3 size-11 rounded-full bg-[#1ed760] text-black opacity-0 shadow-lg transition group-hover:opacity-100 hover:bg-[#3be477]"
        >
          <Play className="size-5 fill-current" />
        </Button>
      </div>
      <div className="space-y-1 px-1 pt-4">
        <h3 className="line-clamp-2 text-lg font-semibold text-white md:text-xl">
          {title}
        </h3>
        <p className="line-clamp-2 text-sm text-zinc-400 md:text-base">
          {subtitle}
        </p>
      </div>
    </article>
  );
}
