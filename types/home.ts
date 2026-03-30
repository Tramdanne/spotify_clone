export type BrowseTrack = {
  id: string;
  title: string;
  artists: string[];
  imageUrl: string;
  detailSlug: string;
};

export type ArtistProfile = {
  id: string;
  fullName: string;
  stageName: string;
  imageUrl: string;
};

export type HomeSidebarPromo = {
  id: string;
  title: string;
  description: string;
  cta: string;
};

export type HomeFooterLink = {
  id: string;
  label: string;
  href: string;
};

export type HomeTopbarAction = {
  id: string;
  label: string;
  href: string;
};
