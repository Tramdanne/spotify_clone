export const queryKeys = {
  home: () => ["home"] as const,
  trendingTracks: () => ["home", "trending-tracks"] as const,
  popularArtists: () => ["home", "popular-artists"] as const,

  albumDetail: (slug: string) => ["album-detail", slug] as const,
  artistDetail: (slug: string) => ["artist-detail", slug] as const,
  searchAlbums: (keyword: string) => ["search-albums", keyword] as const,

  deezerChartAlbums: () => ["deezer", "chart", "albums"] as const,
  deezerChartArtists: () => ["deezer", "chart", "artists"] as const,
  deezerAlbum: (id: string | number) =>
    ["deezer", "album", String(id)] as const,
  deezerAlbumTracks: (id: string | number) =>
    ["deezer", "album", String(id), "tracks"] as const,
  deezerArtistAlbums: (id: string | number) =>
    ["deezer", "artist", String(id), "albums"] as const,
  deezerAlbumSearch: (query: string) =>
    ["deezer", "search", "album", query] as const,
} as const;
