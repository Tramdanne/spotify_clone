export type RelatedAlbum = {
  slug: string;
  title: string;
  year: string;
  imageUrl: string;
};

export type AlbumTrack = {
  id: string;
  index: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  dateAdded: string;
  coverImageUrl: string;
};

export type AlbumDetail = {
  slug: string;
  title: string;
  artist: string;
  year: string;
  totalTracks: number;
  durationLabel: string;
  coverImageUrl: string;
  accentFrom: string;
  accentTo: string;
  tracks: AlbumTrack[];
  relatedAlbums: RelatedAlbum[];
};
