import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type ArtistCardProps = {
  href: string;
  name: string;
  subtitle: string;
  avatarSrc: string;
};

export function ArtistCard({ href, name, subtitle, avatarSrc }: ArtistCardProps) {
  return (
    <Link
      href={href}
      className="group block w-55 shrink-0 rounded-3xl p-3 transition hover:bg-white/6 md:w-60"
    >
      <Avatar className="mx-auto aspect-square size-full max-h-55 max-w-55 rounded-full ring-1 ring-white/10">
        <AvatarImage src={avatarSrc} alt={name} />
        <AvatarFallback className="bg-white/10" />
      </Avatar>
      <div className="space-y-1 px-1 pt-4">
        <h3 className="text-lg font-semibold text-white md:text-xl">{name}</h3>
        <p className="line-clamp-2 text-sm text-zinc-400 md:text-base">
          {subtitle}
        </p>
      </div>
    </Link>
  );
}
