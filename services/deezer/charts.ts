import type { DeezerAlbumSummary, DeezerSearchResponse } from "@/types/deezer";

import { callDeezerApi } from "./client";

export async function getDeezerChartAlbums(): Promise<
  DeezerSearchResponse<DeezerAlbumSummary>
> {
  return callDeezerApi("/chart/0/albums");
}
