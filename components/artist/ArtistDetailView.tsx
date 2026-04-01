import Image from "next/image";
import Link from "next/link";
import { Ellipsis, Heart, Play, Shuffle } from "lucide-react";

import { AlbumCard } from "@/components/album/AlbumCard";
import { ArtistCard } from "@/components/album/ArtistCard";
import { HorizontalRail } from "@/components/common/HorizontalRail";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { type Locale } from "@/i18n/config";
import { getAlbumRouteKey } from "@/lib/data/album-details";
import type { Messages } from "@/i18n/messages";
import type { ArtistDetail } from "@/types/artist";

type ArtistDetailViewProps = {
  artist: ArtistDetail;
  locale: Locale;
  messages: Messages["artist"];
};

export function ArtistDetailView({
  artist,
  locale,
  messages,
}: ArtistDetailViewProps) {
  return (
    <div className="space-y-6">
      <section
        className="overflow-hidden rounded-[32px] border border-white/6"
        style={{
          background: `linear-gradient(180deg, ${artist.accentFrom} 0%, ${artist.accentTo} 100%)`,
        }}
      >
        <div className="grid gap-6 px-5 py-6 md:grid-cols-[240px_minmax(0,1fr)] md:items-end md:px-6 md:py-8">
          <div className="relative mx-auto aspect-square w-full max-w-60 overflow-hidden rounded-full shadow-[0_18px_60px_rgba(0,0,0,0.34)]">
            <Image
              src={artist.heroImageUrl}
              alt={artist.stageName}
              fill
              className="object-cover"
              sizes="240px"
            />
          </div>

          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/75">
              {messages.profileLabel}
            </p>
            <div className="space-y-3">
              <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl">
                {artist.stageName}
              </h1>
              <p className="text-sm font-medium text-white/80 md:text-base">
                {artist.fullName}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button className="h-12 rounded-full bg-[#1ed760] px-6 text-black hover:bg-[#30e36f]">
                <Play className="size-5 fill-current" />
                {messages.play}
              </Button>
              <Button
                variant="outline"
                className="h-12 rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white"
              >
                {messages.follow}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="size-12 rounded-full text-white hover:bg-white/10"
              >
                <Heart className="size-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="size-12 rounded-full text-white hover:bg-white/10"
              >
                <Ellipsis className="size-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Card className="border-white/6 bg-[#141414]">
          <CardContent className="space-y-2 p-5">
            <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
              {messages.monthlyListeners}
            </p>
            <p className="text-3xl font-black text-white">
              {artist.monthlyListeners}
            </p>
          </CardContent>
        </Card>
        <Card className="border-white/6 bg-[#141414]">
          <CardContent className="space-y-2 p-5">
            <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
              {messages.followers}
            </p>
            <p className="text-3xl font-black text-white">{artist.followers}</p>
          </CardContent>
        </Card>
        <Card className="border-white/6 bg-[#141414]">
          <CardContent className="space-y-2 p-5">
            <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
              {messages.genres}
            </p>
            <p className="text-lg font-semibold text-white">
              {artist.genreLabel[locale]}
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="overflow-hidden rounded-[32px] bg-[#141414]">
        <div className="flex flex-wrap items-center gap-4 bg-linear-to-r from-[#2c0f31] via-[#381338] to-[#431a43] px-5 py-5 md:px-6">
          <Button
            size="icon"
            className="size-14 rounded-full bg-[#1ed760] text-black shadow-[0_12px_28px_rgba(30,215,96,0.28)] hover:bg-[#30e36f]"
          >
            <Play className="size-6 fill-current" />
          </Button>

          <Button
            size="icon"
            variant="ghost"
            className="size-12 rounded-full text-zinc-300 hover:bg-white/10 hover:text-white"
            aria-label={messages.shuffleAriaLabel}
          >
            <Shuffle className="size-6" />
          </Button>

          <Button
            variant="outline"
            className="h-12 rounded-full border border-white/20 bg-transparent px-6 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
          >
            {messages.following}
          </Button>

          <Button
            size="icon"
            variant="ghost"
            className="size-12 rounded-full text-zinc-300 hover:bg-white/10 hover:text-white"
            aria-label={messages.moreOptionsAriaLabel}
          >
            <Ellipsis className="size-5" />
          </Button>
        </div>

        <div className="px-5 py-5 md:px-6">
          <div className="overflow-hidden rounded-2xl border border-white/6">
            <div className="grid grid-cols-[40px_minmax(0,1.8fr)_minmax(0,1fr)_88px] gap-4 border-b border-white/6 px-4 py-3 text-sm text-zinc-400">
              <span>#</span>
              <span>{messages.title}</span>
              <span>{messages.album}</span>
              <span className="justify-self-end">
                <Heart className="size-4" />
              </span>
            </div>

            <div className="divide-y divide-white/6">
              {artist.topTracks.map((track) => (
                <div
                  key={track.id}
                  className="grid grid-cols-[40px_minmax(0,1.8fr)_minmax(0,1fr)_88px] items-center gap-4 px-4 py-3 transition hover:bg-white/5"
                >
                  <span className="text-sm text-zinc-400">{track.index}</span>
                  <div className="flex min-w-0 items-center gap-3">
                    <Image
                      src={track.imageUrl}
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
                        {track.plays} {messages.playsSuffix}
                      </p>
                    </div>
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm text-zinc-400">
                      {track.albumTitle}
                    </p>
                    <p className="truncate text-xs text-zinc-500">
                      {track.duration}
                    </p>
                  </div>
                  <p className="justify-self-end text-sm text-zinc-400">
                    {track.albumSlug ? (
                      <Link
                        href={`/${locale}/album/${getAlbumRouteKey(track.albumSlug)}`}
                        className="inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300 transition hover:border-white/20 hover:text-white"
                      >
                        {messages.openAlbum}
                      </Link>
                    ) : null}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">
              {messages.featuredAlbums}
            </h2>
          </div>
        </div>

        <HorizontalRail previousLabel="Scroll left" nextLabel="Scroll right">
          {artist.releases.map((release) => (
            <AlbumCard
              key={release.slug}
              href={`/${locale}/album/${getAlbumRouteKey(release.slug)}`}
              title={release.title}
              subtitle={artist.stageName}
              label={release.year}
              imageUrl={release.imageUrl}
            />
          ))}
        </HorizontalRail>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">
              {messages.relatedArtists}
            </h2>
          </div>
        </div>

        <HorizontalRail previousLabel="Scroll left" nextLabel="Scroll right">
          {artist.relatedArtists.map((related) => (
            <ArtistCard
              key={related.id}
              href={`/${locale}/artist/${related.id}`}
              name={related.stageName}
              subtitle={related.fullName}
              avatarSrc={related.imageUrl}
            />
          ))}
        </HorizontalRail>
      </section>

      <Card className="border-white/6 bg-[#121212]">
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col gap-6">
            <div className="relative aspect-square w-full max-w-60 overflow-hidden rounded-full shadow-[0_18px_60px_rgba(0,0,0,0.34)]">
              <Image
                src={artist.imageUrl}
                alt={artist.stageName}
                fill
                className="object-cover"
                sizes="240px"
              />
            </div>

            <div className="max-w-3xl space-y-4">
              <p className="text-2xl font-black tracking-tight text-white md:text-3xl">
                {artist.monthlyListeners}{" "}
                <span className="text-zinc-300">
                  {messages.monthlyListeners.toLowerCase()}
                </span>
              </p>
              <p className="text-base leading-7 text-zinc-300 md:text-lg">
                {artist.bio[locale]}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
