import type { ArtistProfile } from "@/types/home";
import type { RelatedAlbum } from "@/types/album";
import type { Locale } from "@/i18n/config";

export type ArtistTrack = {
  id: string;
  index: number;
  title: string;
  albumTitle: string;
  albumSlug: string;
  duration: string;
  plays: string;
  imageUrl: string;
};

export type ArtistDetail = {
  slug: string;
  stageName: string;
  fullName: string;
  imageUrl: string;
  heroImageUrl: string;
  accentFrom: string;
  accentTo: string;
  monthlyListeners: string;
  followers: string;
  genreLabel: Record<Locale, string>;
  bio: Record<Locale, string>;
  topTracks: ArtistTrack[];
  releases: RelatedAlbum[];
  relatedArtists: ArtistProfile[];
};
