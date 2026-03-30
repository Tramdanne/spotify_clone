"use client";

import type { ReactNode } from "react";
import { useState } from "react";

import { ArtistCard } from "@/components/album/ArtistCard";
import { AlbumCard } from "@/components/album/AlbumCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { HorizontalRail } from "@/components/common/HorizontalRail";
import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";
import { TopNavTabs } from "@/components/layout/TopNavTabs";
import { Card, CardContent } from "@/components/ui/card";
import type { Messages } from "@/i18n/messages";
import { getAlbumRouteKey } from "@/lib/data/album-details";
import { homePopularArtists, homeTrendingTracks } from "@/lib/data/home";

type AppShellProps = {
  locale: string;
  messages: Messages["shell"];
  variant: "guest" | "main";
  children?: ReactNode;
};

export function AppShell({ locale, messages, variant, children }: AppShellProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isMain = variant === "main";
  const content =
    children ?? (
      <div className="space-y-8">
        <div className="-mx-4 -mt-4 bg-[#121212]/95 px-4 pt-4 pb-3 backdrop-blur md:-mx-6 md:-mt-6 md:px-6 md:pt-6">
          <TopNavTabs tabs={messages.tabs} activeTab={messages.tabs[0]} />
        </div>

        <section className="space-y-5">
          <SectionHeader
            title={messages.trendingTitle}
            href="#"
            ctaLabel={messages.showAll}
          />
          <HorizontalRail
            previousLabel={messages.scrollLeftAriaLabel}
            nextLabel={messages.scrollRightAriaLabel}
          >
            {homeTrendingTracks.map((song) => (
              <AlbumCard
                key={song.id}
                href={`/${locale}/album/${getAlbumRouteKey(song.detailSlug)}`}
                title={song.title}
                subtitle={song.artists.join(", ")}
                label={song.artists[0]}
                imageUrl={song.imageUrl}
              />
            ))}
          </HorizontalRail>
        </section>

        <section className="space-y-5 pt-3">
          <SectionHeader
            title={messages.artistsTitle}
            href="#"
            ctaLabel={messages.showAll}
          />
          <HorizontalRail
            previousLabel={messages.scrollLeftAriaLabel}
            nextLabel={messages.scrollRightAriaLabel}
          >
            {homePopularArtists.map((artist) => (
              <ArtistCard
                key={artist.id}
                name={artist.stageName}
                subtitle={artist.fullName}
                avatarSrc={artist.imageUrl}
              />
            ))}
          </HorizontalRail>
        </section>
      </div>
    );

  return (
    <div className="dark h-screen overflow-hidden bg-black text-white">
      <div className="flex h-full flex-col gap-2 p-3">
        <Topbar locale={locale} messages={messages} variant={variant} />

        <div className="flex min-h-0 flex-1 gap-2">
          <Sidebar
            locale={locale}
            messages={messages}
            variant={variant}
            isCollapsed={isMain ? isCollapsed : false}
            onToggleCollapse={
              isMain ? () => setIsCollapsed((value) => !value) : undefined
            }
          />

          <Card className="min-h-0 flex-1 overflow-hidden border-white/6 bg-[#121212]">
            <CardContent className="scrollbar-hidden flex h-full min-h-0 flex-col overflow-y-auto overflow-x-hidden p-4 md:p-6">
              {content}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
