export type DeezerArtist = {
  id: number;
  name: string;
  link?: string;
  picture?: string;
  picture_small?: string;
  picture_medium?: string;
  picture_big?: string;
  picture_xl?: string;
};

export type DeezerAlbumSummary = {
  id: number;
  title: string;
  link?: string;
  cover?: string;
  cover_small?: string;
  cover_medium?: string;
  cover_big?: string;
  cover_xl?: string;
  nb_tracks?: number;
  duration?: number;
  release_date?: string;
  artist?: DeezerArtist;
};

export type DeezerArtistSummary = {
  id: number;
  name: string;
  link?: string;
  picture?: string;
  picture_small?: string;
  picture_medium?: string;
  picture_big?: string;
  picture_xl?: string;
};

export type DeezerTrack = {
  id: number;
  readable?: boolean;
  title: string;
  title_short?: string;
  duration: number;
  track_position: number;
  disk_number?: number;
  rank?: number;
  link?: string;
  preview?: string;
  artist?: DeezerArtist;
  album?: DeezerAlbumSummary;
};

export type DeezerSearchResponse<T> = {
  data: T[];
  total: number;
  next?: string;
  prev?: string;
};

export type DeezerAlbumTracksResponse = DeezerSearchResponse<DeezerTrack>;

export type DeezerAlbumResponse = DeezerAlbumSummary & {
  tracks?: DeezerAlbumTracksResponse;
};

export type DeezerArtistAlbumsResponse = DeezerSearchResponse<DeezerAlbumSummary>;

export type DeezerArtistChartResponse = DeezerSearchResponse<DeezerArtistSummary>;
