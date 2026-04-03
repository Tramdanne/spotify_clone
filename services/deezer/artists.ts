import type {
  DeezerArtistAlbumsResponse,
  DeezerArtistChartResponse,
} from "@/types/deezer";

import { callDeezerApi } from "./client";

export async function getDeezerArtistAlbums(
  id: string | number,
): Promise<DeezerArtistAlbumsResponse> {
  return callDeezerApi(`/artist/${id}/albums`);
}

export async function getDeezerChartArtists(): Promise<DeezerArtistChartResponse> {
  return callDeezerApi("/chart/0/artists");
}
