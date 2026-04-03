import {
  getDeezerAlbum,
  getDeezerAlbumTracks,
  getDeezerArtistAlbums,
  searchDeezerAlbums,
} from "@/lib/api/deezer";
import type { AlbumDetail, AlbumTrack, RelatedAlbum } from "@/types/album";
import type {
  DeezerAlbumResponse,
  DeezerAlbumSummary,
  DeezerTrack,
} from "@/types/deezer";

const DEFAULT_ACCENT_FROM = "#1a1a1a";
const DEFAULT_ACCENT_TO = "#090909";

function slugToSearchQuery(slug: string) {
  return slug.replace(/-/g, " ");
}

function normalizeText(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function formatDuration(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function chooseBestAlbumMatch(
  query: string,
  artistName: string | undefined,
  results: DeezerAlbumSummary[],
) {
  const expectedTitle = normalizeText(query);
  const expectedArtist = normalizeText(artistName ?? "");
  // console.log("Expected title:", expectedTitle);
  // console.log("Expected artist:", expectedArtist);

  // console.log("Search results:", results);

  return (
    results.find((album) => {
      const albumTitle = normalizeText(album.title);
      const albumArtist = normalizeText(album.artist?.name ?? "");

      return (
        albumTitle.includes(expectedTitle) ||
        (expectedArtist.length > 0 &&
          albumTitle.includes(expectedArtist) &&
          albumArtist.includes(expectedArtist))
      );
    }) ?? results[0]
  );
}

function mapTrack(
  track: DeezerTrack,
  album: DeezerAlbumResponse,
  fallbackTitle: string,
  fallbackArtist: string,
  index: number,
): AlbumTrack {
  // console.log("Mapping track:", track);
  console.log("Album info:", album);
  return {
    id: String(track.id),
    index: track.track_position || index + 1,
    title: track.title,
    artist: track.artist?.name || album.artist?.name || fallbackArtist,
    album: album.title || fallbackTitle,
    duration: formatDuration(track.duration),
    dateAdded: album.release_date?.slice(0, 4) || "",
    coverImageUrl:
      track.album?.cover_medium ||
      track.album?.cover_big ||
      album.cover_medium ||
      album.cover_big ||
      "",
  };
}

function mapRelatedAlbum(album: DeezerAlbumSummary): RelatedAlbum {
  return {
    slug: `deezer-${album.id}`,
    title: album.title,
    year: album.release_date?.slice(0, 4) ?? "",
    imageUrl: album.cover_medium || album.cover_big || album.cover_xl || "",
  };
}

async function fetchAlbumDetailFromDeezer(slug: string) {
  const query = slugToSearchQuery(slug);
  const searchResponse = await searchDeezerAlbums(query);
  const deezerAlbum =
    chooseBestAlbumMatch(query, undefined, searchResponse.data) ??
    searchResponse.data[0];

  if (!deezerAlbum) {
    return undefined;
  }

  const album = await getDeezerAlbum(deezerAlbum.id);
  const tracksResponse = await getDeezerAlbumTracks(deezerAlbum.id);
  const artistAlbumsResponse = album.artist?.id
    ? await getDeezerArtistAlbums(album.artist.id)
    : undefined;

  const tracks = tracksResponse.data.map((track, index) =>
    mapTrack(track, album, slug, album.artist?.name ?? "", index),
  );
  const relatedAlbums =
    artistAlbumsResponse?.data
      .filter((related) => String(related.id) !== String(album.id))
      .slice(0, 4)
      .map(mapRelatedAlbum) ?? [];

  return {
    slug: `deezer-${album.id}`,
    title: album.title,
    artist: album.artist?.name ?? "",
    year: album.release_date?.slice(0, 4) ?? "",
    totalTracks: album.nb_tracks ?? tracks.length,
    durationLabel: formatDuration(
      tracksResponse.data.reduce(
        (total, track) => total + (track.duration || 0),
        0,
      ),
    ),
    coverImageUrl:
      album.cover_xl || album.cover_big || album.cover_medium || "",
    accentFrom: DEFAULT_ACCENT_FROM,
    accentTo: DEFAULT_ACCENT_TO,
    tracks,
    relatedAlbums,
  } satisfies AlbumDetail;
}

export function getAlbumRouteKey(slug: string) {
  return slug;
}

export function getAlbumSlugFromRouteKey(routeKey: string) {
  if (routeKey.startsWith("deezer-")) {
    return routeKey;
  }

  const separatorIndex = routeKey.lastIndexOf("-");

  if (separatorIndex <= 0) {
    return routeKey;
  }

  return routeKey.slice(0, separatorIndex);
}

export async function getAlbumDetailByRouteKey(routeKey: string) {
  if (routeKey.startsWith("deezer-")) {
    const deezerId = routeKey.slice("deezer-".length);

    if (!deezerId) {
      return undefined;
    }

    const album = await getDeezerAlbum(deezerId);
    const tracksResponse = await getDeezerAlbumTracks(deezerId);
    const relatedAlbumsResponse = album.artist?.id
      ? await getDeezerArtistAlbums(album.artist.id)
      : undefined;

    const tracks = tracksResponse.data.map((track, index) =>
      mapTrack(track, album, routeKey, album.artist?.name ?? "", index),
    );
    const relatedAlbums =
      relatedAlbumsResponse?.data
        .filter((related) => String(related.id) !== String(album.id))
        .slice(0, 4)
        .map(mapRelatedAlbum) ?? [];

    return {
      slug: routeKey,
      title: album.title,
      artist: album.artist?.name ?? "",
      year: album.release_date?.slice(0, 4) ?? "",
      totalTracks: album.nb_tracks ?? tracks.length,
      durationLabel: formatDuration(
        tracksResponse.data.reduce(
          (total, track) => total + (track.duration || 0),
          0,
        ),
      ),
      coverImageUrl:
        album.cover_xl || album.cover_big || album.cover_medium || "",
      accentFrom: DEFAULT_ACCENT_FROM,
      accentTo: DEFAULT_ACCENT_TO,
      tracks,
      relatedAlbums,
    } satisfies AlbumDetail;
  }

  const slug = getAlbumSlugFromRouteKey(routeKey);
  return fetchAlbumDetailFromDeezer(slug);
}
