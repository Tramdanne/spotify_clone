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

export type SidebarPromo = {
  id: string;
  title: string;
  description: string;
  buttonLabel: string;
};

export type FooterLink = {
  id: string;
  label: string;
  href: string;
};

export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export const guestNavItems: NavItem[] = [
  { id: "premium", label: "Premium", href: "#" },
  { id: "support", label: "Support", href: "#" },
  { id: "download", label: "Download", href: "#" },
];

export const sidebarPromos: SidebarPromo[] = [
  {
    id: "playlist",
    title: "Create your first playlist",
    description: "It's easy, we'll help you",
    buttonLabel: "Create playlist",
  },
  {
    id: "podcast",
    title: "Let's find some podcasts to follow",
    description: "We'll keep you updated on new episodes",
    buttonLabel: "Browse podcasts",
  },
];

export const sidebarFooterLinks: FooterLink[] = [
  { id: "legal", label: "Legal", href: "#" },
  { id: "safety", label: "Safety", href: "#" },
  { id: "privacy", label: "Privacy", href: "#" },
  { id: "cookies", label: "Cookies", href: "#" },
  { id: "aboutAds", label: "About Ads", href: "#" },
  { id: "accessibility", label: "Accessibility", href: "#" },
  { id: "cookieSettings", label: "Cookie Settings", href: "#" },
];

export const trendingTracks: BrowseTrack[] = [
  {
    id: "hoa-ra",
    title: "Hóa ra...",
    artists: ["GREY D"],
    imageUrl:
      "https://i.scdn.co/image/ab67616d00001e027a99782f42e7c615e8752915",
    detailSlug: "hoa-ra",
  },
  {
    id: "dao-buoc",
    title: "Dạo Bước Hong Kong 1999",
    artists: ["NHONHO"],
    imageUrl:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/7/2/7/5727b41713b75cc876f3b20d7c6dde9d.jpg",
    detailSlug: "dao-buoc",
  },
  {
    id: "tung-la-cua-nhau",
    title: "Từng Là Của Nhau",
    artists: ["Bảo Anh", "Táo"],
    imageUrl:
      "https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/d/f/4/6/df46a2117fff0cb1090d3665ac595f12.jpg",
    detailSlug: "tung-la-cua-nhau",
  },
  {
    id: "swim",
    title: "SWIM",
    artists: ["BTS"],
    imageUrl:
      "https://i.scdn.co/image/ab67616100005174d1ca69ee35e22cb183d5505e",
    detailSlug: "swim",
  },
  {
    id: "i-know-youre-hurting",
    title: "I Know You're Hurting.",
    artists: ["RAYE"],
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN88lxrxGEeSdvv4VY3yAl2tu_IyBMa1ymew&s",
    detailSlug: "i-know-youre-hurting",
  },
];

export const popularArtists: ArtistProfile[] = [
  {
    id: "son-tung",
    fullName: "Nguyễn Thanh Tùng",
    stageName: "Sơn Tùng M-TP",
    imageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb5a79a6ca8c60e4ec1440be53",
  },
  {
    id: "duc-phuc",
    fullName: "Nguyễn Đức Phúc",
    stageName: "Đức Phúc",
    imageUrl:
      "https://cdn-images.vtv.vn/66349b6076cb4dee98746cf1/2025/07/15/intervision-world-1752249860-3674460608917821140-75142348346-46051888035638632971573.jpg",
  },
  {
    id: "jack",
    fullName: "Trịnh Trần Phương Tuấn",
    stageName: "Jack",
    imageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb87abe41e26c5b7664fb86377",
  },
  {
    id: "gerdnang",
    fullName: "Tổ đội HURRYKNG, HIEUTHUHAI, MANBO",
    stageName: "GERDNANG",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-VdTeprqntQmL1l-AONghdWIO2sTudVfjvQ&s",
  },
  {
    id: "hieuthuhai",
    fullName: "Trần Minh Hiếu",
    stageName: "HIEUTHUHAI",
    imageUrl:
      "https://cdn-media.sforum.vn/storage/app/media/giakhanh/t%C3%B3c%20hieuthuhai/toc-hieuthuhai-4.jpg",
  },
  {
    id: "erik",
    fullName: "Lê Trung Thành",
    stageName: "ERIK",
    imageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb916407e907705dc1ab9010c3",
  },
];

const relatedAlbums: Record<
  string,
  { slug: string; title: string; year: string; imageUrl: string }[]
> = {
  arirang: [
    {
      slug: "who",
      title: "Who",
      year: "2024",
      imageUrl:
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    },
    {
      slug: "gia-vo",
      title: "Giả Vờ",
      year: "2025",
      imageUrl:
        "https://i.scdn.co/image/ab67616d00001e02fc307e330d771ad864a28130",
    },
    {
      slug: "tung-la-cua-nhau",
      title: "Từng Là Của Nhau",
      year: "2022",
      imageUrl:
        "https://i.scdn.co/image/ab67616d0000b27367e926bba0c1032a8414fc8c",
    },
    {
      slug: "khong-buong",
      title: "Không Buông",
      year: "2024",
      imageUrl:
        "https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/b/7/b/1/b7b1a47096c2d8ac786da78c7fe6c987.jpg",
    },
    {
      slug: "anh-la-cua-em",
      title: "Anh Là Của Em",
      year: "2015",
      imageUrl:
        "https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/covers/0/c/0c2b0067691ef5521afcebe2887028dc_1443425336.jpg",
    },
  ],
};

export function getBrowseTracks() {
  return trendingTracks;
}

export function getPopularArtists() {
  return popularArtists;
}

export function getRelatedAlbums(slug: string) {
  return relatedAlbums[slug] ?? [];
}
