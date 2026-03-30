import Image from "next/image";
import { CircleArrowDown, Download, Ellipsis, ListMusic, Play, Plus, Shuffle } from "lucide-react";

import { AlbumCard } from "@/components/album/AlbumCard";
import { HorizontalRail } from "@/components/common/HorizontalRail";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getAlbumRouteKey } from "@/lib/data/album-details";
import type { AlbumDetail } from "@/types/album";

type AlbumDetailViewProps = {
  album: AlbumDetail;
  locale: string;
};

export function AlbumDetailView({ album, locale }: AlbumDetailViewProps) {
  return (
    <div className="space-y-6">
      <section
        className="overflow-hidden rounded-[32px] border border-white/6"
        style={{
          background: `linear-gradient(180deg, ${album.accentFrom} 0%, ${album.accentTo} 100%)`,
        }}
      >
        <div className="grid gap-6 px-5 py-6 md:grid-cols-[240px_minmax(0,1fr)] md:items-end md:px-6 md:py-8">
          <div className="relative aspect-square overflow-hidden rounded-2xl shadow-[0_18px_60px_rgba(0,0,0,0.34)]">
            <Image
              src={album.coverImageUrl}
              alt={album.title}
              fill
              className="object-cover"
              sizes="240px"
            />
          </div>

          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/75">
              Public Playlist
            </p>
            <div className="space-y-3">
              <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl">
                {album.title}
              </h1>
              <p className="text-sm font-medium text-white/80 md:text-base">
                {album.artist}
              </p>
              <p className="text-sm text-white/70 md:text-base">
                Spotify • {album.totalTracks} songs, about {album.durationLabel}
              </p>
              <p className="max-w-2xl text-sm text-white/65 md:text-base">
                About recommendations and the impact of promotion
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[32px] bg-[#141414] px-5 py-5 md:px-6">
        <div className="flex flex-wrap items-center gap-3">
          <Button
            size="icon"
            className="size-14 rounded-full bg-[#1ed760] text-black hover:bg-[#30e36f]"
          >
            <Play className="size-6 fill-current" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="size-12 rounded-full text-zinc-300 hover:bg-white/10 hover:text-white"
          >
            <Shuffle className="size-5" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="size-12 rounded-full text-zinc-300 hover:bg-white/10 hover:text-white"
          >
            <Plus className="size-5" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="size-12 rounded-full text-zinc-300 hover:bg-white/10 hover:text-white"
          >
            <Download className="size-5" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="size-12 rounded-full text-zinc-300 hover:bg-white/10 hover:text-white"
          >
            <Ellipsis className="size-5" />
          </Button>

          <div className="ml-auto flex items-center gap-2 text-sm text-zinc-400">
            <span>List</span>
            <ListMusic className="size-4" />
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/6">
          <div className="grid grid-cols-[40px_minmax(0,1.8fr)_minmax(0,1fr)_minmax(0,1fr)_72px] gap-4 border-b border-white/6 px-4 py-3 text-sm text-zinc-400">
            <span>#</span>
            <span>Title</span>
            <span>Album</span>
            <span>Date added</span>
            <span className="justify-self-end">
              <CircleArrowDown className="size-4" />
            </span>
          </div>

          <div className="divide-y divide-white/6">
            {album.tracks.map((track) => (
              <div
                key={track.id}
                className="grid grid-cols-[40px_minmax(0,1.8fr)_minmax(0,1fr)_minmax(0,1fr)_72px] items-center gap-4 px-4 py-3 transition hover:bg-white/5"
              >
                <span className="text-sm text-zinc-400">{track.index}</span>
                <div className="flex min-w-0 items-center gap-3">
                  <Image
                    src={track.coverImageUrl}
                    alt={track.title}
                    width={44}
                    height={44}
                    className="size-11 shrink-0 rounded-md object-cover"
                  />
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-white">
                      {track.title}
                    </p>
                    <p className="truncate text-sm text-zinc-400">
                      {track.artist}
                    </p>
                  </div>
                </div>
                <p className="truncate text-sm text-zinc-400">{track.album}</p>
                <p className="truncate text-sm text-zinc-400">{track.dateAdded}</p>
                <p className="justify-self-end text-sm text-zinc-400">
                  {track.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">
              You might also like
            </h2>
          </div>
        </div>

        <HorizontalRail
          previousLabel="Scroll left"
          nextLabel="Scroll right"
        >
          {album.relatedAlbums.map((related) => (
            <AlbumCard
              key={related.slug}
              href={`/${locale}/album/${getAlbumRouteKey(related.slug)}`}
              title={related.title}
              subtitle="By Spotify"
              label={related.year}
              imageUrl={related.imageUrl}
            />
          ))}
        </HorizontalRail>
      </section>

      <Card className="border-white/6 bg-[#121212]">
        <CardContent className="space-y-3 p-6 text-sm text-zinc-400">
          <p>Company</p>
          <Separator />
          <div className="flex flex-wrap gap-4">
            <span>About</span>
            <span>Jobs</span>
            <span>For the Record</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
