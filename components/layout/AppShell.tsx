import { ArtistCard } from "@/components/album/ArtistCard";
import { AlbumCard } from "@/components/album/AlbumCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { HorizontalRail } from "@/components/common/HorizontalRail";
import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";
import { TopNavTabs } from "@/components/layout/TopNavTabs";
import { Card, CardContent } from "@/components/ui/card";
import type { Messages } from "@/i18n/messages";
import { getBrowseTracks, getPopularArtists } from "@/lib/data/albums";

type AppShellProps = {
  locale: string;
  messages: Messages["shell"];
};

export function AppShell({ locale, messages }: AppShellProps) {
  const trendingSongs = getBrowseTracks();
  const popularArtists = getPopularArtists();

  return (
    <div className="dark h-screen overflow-hidden bg-black text-white">
      <div className="mx-auto flex h-full max-w-480 flex-col">
        <Topbar locale={locale} messages={messages} />

        <div className="grid min-h-0 flex-1 gap-2 px-3 pb-3 md:px-4 lg:grid-cols-[360px_minmax(0,1fr)]">
          <div className="min-h-0 overflow-hidden">
            <Sidebar locale={locale} messages={messages} />
          </div>

          <Card className="h-full min-h-0 overflow-hidden border-white/6 bg-[#121212]">
            <CardContent className="scrollbar-hidden flex h-full min-h-0 flex-col overflow-y-auto overflow-x-hidden p-4 md:p-6">
              <div className="space-y-8">
                <div className="-mx-4 -mt-4 bg-[#121212]/95 px-4 pt-4 pb-3 backdrop-blur md:-mx-6 md:-mt-6 md:px-6 md:pt-6">
                  <TopNavTabs
                    tabs={messages.tabs}
                    activeTab={messages.tabs[0]}
                  />
                </div>

                <section className="space-y-5">
                  <SectionHeader
                    title={messages.trendingTitle}
                    href={`/${locale}/trending`}
                    ctaLabel={messages.showAll}
                  />
                  <HorizontalRail>
                    {trendingSongs.map((song) => (
                      <AlbumCard
                        key={song.id}
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
                    href={`/${locale}/artists`}
                    ctaLabel={messages.showAll}
                  />
                  <HorizontalRail>
                    {popularArtists.map((artist) => (
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
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
