import axios from "axios";

import type {
  DeezerAlbumResponse,
  DeezerAlbumSummary,
  DeezerAlbumTracksResponse,
  DeezerArtistAlbumsResponse,
  DeezerArtistChartResponse,
  DeezerSearchResponse,
} from "@/types/deezer";

const DEEZER_BASE_URL = "https://api.deezer.com";

async function callDeezerApi(
  path: string,
  params: Record<string, string | number | boolean | undefined> = {},
) {
  const response = await axios.get(`${DEEZER_BASE_URL}${path}`, { params });
  return response.data;
}

export async function searchDeezerAlbums(
  query: string,
): Promise<DeezerSearchResponse<DeezerAlbumSummary>> {
  return callDeezerApi("/search/album", { q: query });
}

export async function getDeezerAlbum(
  id: string | number,
): Promise<DeezerAlbumResponse> {
  return callDeezerApi(`/album/${id}`);
}

export async function getDeezerAlbumTracks(
  id: string | number,
): Promise<DeezerAlbumTracksResponse> {
  return callDeezerApi(`/album/${id}/tracks`);
}

export async function getDeezerArtistAlbums(
  id: string | number,
): Promise<DeezerArtistAlbumsResponse> {
  return callDeezerApi(`/artist/${id}/albums`);
}

export async function getDeezerChartAlbums(): Promise<
  DeezerSearchResponse<DeezerAlbumSummary>
> {
  return callDeezerApi("/chart/0/albums");
}

export async function getDeezerChartArtists(): Promise<DeezerArtistChartResponse> {
  return callDeezerApi("/chart/0/artists");
}
