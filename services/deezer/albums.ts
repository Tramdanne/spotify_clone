import type {
  DeezerAlbumResponse,
  DeezerAlbumSummary,
  DeezerAlbumTracksResponse,
  DeezerSearchResponse,
} from "@/types/deezer";

import { callDeezerApi } from "./client";

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
