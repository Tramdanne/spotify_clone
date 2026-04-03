import { getDeezerChartAlbums, getDeezerChartArtists } from "@/lib/api/deezer";
import type { ArtistProfile, BrowseTrack } from "@/types/home";

function getAlbumImageUrl(album: {
  cover_medium?: string;
  cover_big?: string;
  cover_xl?: string;
}) {
  return album.cover_medium || album.cover_big || album.cover_xl || "";
}

function getArtistImageUrl(artist: {
  picture_medium?: string;
  picture_big?: string;
  picture_xl?: string;
}) {
  return artist.picture_medium || artist.picture_big || artist.picture_xl || "";
}

export async function getHomeTrendingTracks(): Promise<BrowseTrack[]> {
  const response = await getDeezerChartAlbums();
  const albums = response.data.slice(0, 5);
  const trendingTracks: BrowseTrack[] = [];

  for (const album of albums) {
    trendingTracks.push({
      id: String(album.id),
      title: album.title,
      artists: album.artist?.name ? [album.artist.name] : [],
      imageUrl: getAlbumImageUrl(album),
      detailSlug: `deezer-${album.id}`,
    });
  }
  console.log(trendingTracks);
  return trendingTracks;
}

export async function getHomePopularArtists(): Promise<ArtistProfile[]> {
  const response = await getDeezerChartArtists();
  const artists = response.data.slice(0, 6);
  const popularArtists: ArtistProfile[] = [];

  for (const artist of artists) {
    popularArtists.push({
      id: String(artist.id),
      fullName: artist.name,
      stageName: artist.name,
      imageUrl: getArtistImageUrl(artist),
    });
  }
  // console.log(popularArtists);
  return popularArtists;
}

export async function getHomePageData() {
  const trendingTracks = await getHomeTrendingTracks();
  const popularArtists = await getHomePopularArtists();
  console.log("Home page data:", { trendingTracks, popularArtists });
  return {
    trendingTracks,
    popularArtists,
  };
}
