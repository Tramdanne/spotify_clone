import type { AlbumDetail, RelatedAlbum } from "@/types/album";

const albumRouteIds: Record<string, string> = {
  "hoa-ra": "7x3k9p",
  "dao-buoc": "3n8q1v",
  "tung-la-cua-nhau": "9d2m7z",
  swim: "5r4c8h",
  "i-know-youre-hurting": "2k6t4a",
};

export function getAlbumRouteKey(slug: string) {
  const routeId = albumRouteIds[slug];

  if (!routeId) {
    return slug;
  }

  return `${slug}-${routeId}`;
}

export function getAlbumSlugFromRouteKey(routeKey: string) {
  const separatorIndex = routeKey.lastIndexOf("-");

  if (separatorIndex <= 0) {
    return routeKey;
  }

  return routeKey.slice(0, separatorIndex);
}

export function getAlbumDetailByRouteKey(routeKey: string) {
  const directAlbum = getAlbumDetail(routeKey);

  if (directAlbum) {
    return directAlbum;
  }

  const slug = getAlbumSlugFromRouteKey(routeKey);
  const album = getAlbumDetail(slug);

  if (!album) {
    return undefined;
  }

  return getAlbumRouteKey(album.slug) === routeKey ? album : undefined;
}

const relatedAlbumsBySlug: Record<string, RelatedAlbum[]> = {
  "hoa-ra": [
    {
      slug: "dao-buoc",
      title: "Dạo Bước Hong Kong 1999",
      year: "2024",
      imageUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/7/2/7/5727b41713b75cc876f3b20d7c6dde9d.jpg",
    },
    {
      slug: "tung-la-cua-nhau",
      title: "Từng Là Của Nhau",
      year: "2022",
      imageUrl:
        "https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/d/f/4/6/df46a2117fff0cb1090d3665ac595f12.jpg",
    },
    {
      slug: "swim",
      title: "SWIM",
      year: "2023",
      imageUrl:
        "https://i.scdn.co/image/ab67616100005174d1ca69ee35e22cb183d5505e",
    },
    {
      slug: "i-know-youre-hurting",
      title: "I Know You're Hurting.",
      year: "2024",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN88lxrxGEeSdvv4VY3yAl2tu_IyBMa1ymew&s",
    },
  ],
  "dao-buoc": [
    {
      slug: "hoa-ra",
      title: "Hóa ra...",
      year: "2024",
      imageUrl:
        "https://i.scdn.co/image/ab67616d00001e027a99782f42e7c615e8752915",
    },
    {
      slug: "tung-la-cua-nhau",
      title: "Từng Là Của Nhau",
      year: "2022",
      imageUrl:
        "https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/d/f/4/6/df46a2117fff0cb1090d3665ac595f12.jpg",
    },
    {
      slug: "swim",
      title: "SWIM",
      year: "2023",
      imageUrl:
        "https://i.scdn.co/image/ab67616100005174d1ca69ee35e22cb183d5505e",
    },
    {
      slug: "i-know-youre-hurting",
      title: "I Know You're Hurting.",
      year: "2024",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN88lxrxGEeSdvv4VY3yAl2tu_IyBMa1ymew&s",
    },
  ],
  "tung-la-cua-nhau": [
    {
      slug: "hoa-ra",
      title: "Hóa ra...",
      year: "2024",
      imageUrl:
        "https://i.scdn.co/image/ab67616d00001e027a99782f42e7c615e8752915",
    },
    {
      slug: "dao-buoc",
      title: "Dạo Bước Hong Kong 1999",
      year: "2024",
      imageUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/7/2/7/5727b41713b75cc876f3b20d7c6dde9d.jpg",
    },
    {
      slug: "swim",
      title: "SWIM",
      year: "2023",
      imageUrl:
        "https://i.scdn.co/image/ab67616100005174d1ca69ee35e22cb183d5505e",
    },
    {
      slug: "i-know-youre-hurting",
      title: "I Know You're Hurting.",
      year: "2024",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN88lxrxGEeSdvv4VY3yAl2tu_IyBMa1ymew&s",
    },
  ],
  swim: [
    {
      slug: "hoa-ra",
      title: "Hóa ra...",
      year: "2024",
      imageUrl:
        "https://i.scdn.co/image/ab67616d00001e027a99782f42e7c615e8752915",
    },
    {
      slug: "dao-buoc",
      title: "Dạo Bước Hong Kong 1999",
      year: "2024",
      imageUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/7/2/7/5727b41713b75cc876f3b20d7c6dde9d.jpg",
    },
    {
      slug: "tung-la-cua-nhau",
      title: "Từng Là Của Nhau",
      year: "2022",
      imageUrl:
        "https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/d/f/4/6/df46a2117fff0cb1090d3665ac595f12.jpg",
    },
    {
      slug: "i-know-youre-hurting",
      title: "I Know You're Hurting.",
      year: "2024",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN88lxrxGEeSdvv4VY3yAl2tu_IyBMa1ymew&s",
    },
  ],
  "i-know-youre-hurting": [
    {
      slug: "hoa-ra",
      title: "Hóa ra...",
      year: "2024",
      imageUrl:
        "https://i.scdn.co/image/ab67616d00001e027a99782f42e7c615e8752915",
    },
    {
      slug: "dao-buoc",
      title: "Dạo Bước Hong Kong 1999",
      year: "2024",
      imageUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/7/2/7/5727b41713b75cc876f3b20d7c6dde9d.jpg",
    },
    {
      slug: "tung-la-cua-nhau",
      title: "Từng Là Của Nhau",
      year: "2022",
      imageUrl:
        "https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/d/f/4/6/df46a2117fff0cb1090d3665ac595f12.jpg",
    },
    {
      slug: "swim",
      title: "SWIM",
      year: "2023",
      imageUrl:
        "https://i.scdn.co/image/ab67616100005174d1ca69ee35e22cb183d5505e",
    },
  ],
};

const albumDetails: AlbumDetail[] = [
  {
    slug: "hoa-ra",
    title: "Hóa ra...",
    artist: "GREY D",
    year: "2024",
    totalTracks: 5,
    durationLabel: "16 phút 08 giây",
    coverImageUrl:
      "https://i.scdn.co/image/ab67616d00001e027a99782f42e7c615e8752915",
    accentFrom: "#6e4b36",
    accentTo: "#1f120c",
    tracks: [
      {
        id: "hoa-ra-1",
        index: 1,
        title: "Hóa ra...",
        artist: "GREY D",
        album: "Hóa ra...",
        duration: "3:08",
        dateAdded: "1 ngày trước",
        coverImageUrl:
          "https://i.scdn.co/image/ab67616d00001e027a99782f42e7c615e8752915",
      },
      {
        id: "hoa-ra-2",
        index: 2,
        title: "Không Còn Là Của Nhau",
        artist: "GREY D",
        album: "Hóa ra...",
        duration: "3:24",
        dateAdded: "2 ngày trước",
        coverImageUrl:
          "https://i.scdn.co/image/ab67616d00001e027a99782f42e7c615e8752915",
      },
      {
        id: "hoa-ra-3",
        index: 3,
        title: "Mùa Mưa Cuối",
        artist: "GREY D",
        album: "Hóa ra...",
        duration: "3:12",
        dateAdded: "3 ngày trước",
        coverImageUrl:
          "https://i.scdn.co/image/ab67616d00001e027a99782f42e7c615e8752915",
      },
      {
        id: "hoa-ra-4",
        index: 4,
        title: "Những Ngày Đã Qua",
        artist: "GREY D",
        album: "Hóa ra...",
        duration: "3:01",
        dateAdded: "4 ngày trước",
        coverImageUrl:
          "https://i.scdn.co/image/ab67616d00001e027a99782f42e7c615e8752915",
      },
      {
        id: "hoa-ra-5",
        index: 5,
        title: "Ánh Đèn Đêm",
        artist: "GREY D",
        album: "Hóa ra...",
        duration: "3:23",
        dateAdded: "5 ngày trước",
        coverImageUrl:
          "https://i.scdn.co/image/ab67616d00001e027a99782f42e7c615e8752915",
      },
    ],
    relatedAlbums: relatedAlbumsBySlug["hoa-ra"],
  },
  {
    slug: "dao-buoc",
    title: "Dạo Bước Hong Kong 1999",
    artist: "NHONHO",
    year: "2024",
    totalTracks: 5,
    durationLabel: "15 phút 50 giây",
    coverImageUrl:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/7/2/7/5727b41713b75cc876f3b20d7c6dde9d.jpg",
    accentFrom: "#5a3b1e",
    accentTo: "#170d05",
    tracks: [
      {
        id: "dao-buoc-1",
        index: 1,
        title: "Dạo Bước Hong Kong 1999",
        artist: "NHONHO",
        album: "Dạo Bước Hong Kong 1999",
        duration: "3:14",
        dateAdded: "1 ngày trước",
        coverImageUrl:
          "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/7/2/7/5727b41713b75cc876f3b20d7c6dde9d.jpg",
      },
      {
        id: "dao-buoc-2",
        index: 2,
        title: "Mưa Phố Đêm",
        artist: "NHONHO",
        album: "Dạo Bước Hong Kong 1999",
        duration: "3:03",
        dateAdded: "2 ngày trước",
        coverImageUrl:
          "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/7/2/7/5727b41713b75cc876f3b20d7c6dde9d.jpg",
      },
      {
        id: "dao-buoc-3",
        index: 3,
        title: "Đèn Neon",
        artist: "NHONHO",
        album: "Dạo Bước Hong Kong 1999",
        duration: "3:06",
        dateAdded: "3 ngày trước",
        coverImageUrl:
          "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/7/2/7/5727b41713b75cc876f3b20d7c6dde9d.jpg",
      },
      {
        id: "dao-buoc-4",
        index: 4,
        title: "Tàu Đêm",
        artist: "NHONHO",
        album: "Dạo Bước Hong Kong 1999",
        duration: "3:10",
        dateAdded: "4 ngày trước",
        coverImageUrl:
          "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/7/2/7/5727b41713b75cc876f3b20d7c6dde9d.jpg",
      },
      {
        id: "dao-buoc-5",
        index: 5,
        title: "Phố Cũ",
        artist: "NHONHO",
        album: "Dạo Bước Hong Kong 1999",
        duration: "3:17",
        dateAdded: "5 ngày trước",
        coverImageUrl:
          "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/7/2/7/5727b41713b75cc876f3b20d7c6dde9d.jpg",
      },
    ],
    relatedAlbums: relatedAlbumsBySlug["dao-buoc"],
  },
  {
    slug: "tung-la-cua-nhau",
    title: "Từng Là Của Nhau",
    artist: "Bảo Anh",
    year: "2022",
    totalTracks: 5,
    durationLabel: "16 phút 15 giây",
    coverImageUrl:
      "https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/d/f/4/6/df46a2117fff0cb1090d3665ac595f12.jpg",
    accentFrom: "#3568a5",
    accentTo: "#11253d",
    tracks: [
      {
        id: "tung-1",
        index: 1,
        title: "Từng Là Của Nhau",
        artist: "Bảo Anh, Táo",
        album: "Từng Là Của Nhau",
        duration: "4:29",
        dateAdded: "1 ngày trước",
        coverImageUrl:
          "https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/d/f/4/6/df46a2117fff0cb1090d3665ac595f12.jpg",
      },
      {
        id: "tung-2",
        index: 2,
        title: "Mãi Bên Em",
        artist: "Bảo Anh",
        album: "Từng Là Của Nhau",
        duration: "3:41",
        dateAdded: "2 ngày trước",
        coverImageUrl:
          "https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/d/f/4/6/df46a2117fff0cb1090d3665ac595f12.jpg",
      },
      {
        id: "tung-3",
        index: 3,
        title: "Cơn Mưa Ngang Qua",
        artist: "Bảo Anh",
        album: "Từng Là Của Nhau",
        duration: "3:12",
        dateAdded: "3 ngày trước",
        coverImageUrl:
          "https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/d/f/4/6/df46a2117fff0cb1090d3665ac595f12.jpg",
      },
      {
        id: "tung-4",
        index: 4,
        title: "Đêm Thành Phố",
        artist: "Táo",
        album: "Từng Là Của Nhau",
        duration: "3:03",
        dateAdded: "4 ngày trước",
        coverImageUrl:
          "https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/d/f/4/6/df46a2117fff0cb1090d3665ac595f12.jpg",
      },
      {
        id: "tung-5",
        index: 5,
        title: "Nếu Còn Nhớ",
        artist: "Bảo Anh",
        album: "Từng Là Của Nhau",
        duration: "2:50",
        dateAdded: "5 ngày trước",
        coverImageUrl:
          "https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/d/f/4/6/df46a2117fff0cb1090d3665ac595f12.jpg",
      },
    ],
    relatedAlbums: relatedAlbumsBySlug["tung-la-cua-nhau"],
  },
  {
    slug: "swim",
    title: "SWIM",
    artist: "BTS",
    year: "2023",
    totalTracks: 5,
    durationLabel: "15 phút 40 giây",
    coverImageUrl:
      "https://i.scdn.co/image/ab67616100005174d1ca69ee35e22cb183d5505e",
    accentFrom: "#1d3f5b",
    accentTo: "#08111b",
    tracks: [
      {
        id: "swim-1",
        index: 1,
        title: "SWIM",
        artist: "BTS",
        album: "SWIM",
        duration: "3:09",
        dateAdded: "1 ngày trước",
        coverImageUrl:
          "https://i.scdn.co/image/ab67616100005174d1ca69ee35e22cb183d5505e",
      },
      {
        id: "swim-2",
        index: 2,
        title: "Blue Night",
        artist: "BTS",
        album: "SWIM",
        duration: "3:02",
        dateAdded: "2 ngày trước",
        coverImageUrl:
          "https://i.scdn.co/image/ab67616100005174d1ca69ee35e22cb183d5505e",
      },
      {
        id: "swim-3",
        index: 3,
        title: "Silver Line",
        artist: "BTS",
        album: "SWIM",
        duration: "2:47",
        dateAdded: "3 ngày trước",
        coverImageUrl:
          "https://i.scdn.co/image/ab67616100005174d1ca69ee35e22cb183d5505e",
      },
      {
        id: "swim-4",
        index: 4,
        title: "Half Moon",
        artist: "BTS",
        album: "SWIM",
        duration: "3:00",
        dateAdded: "4 ngày trước",
        coverImageUrl:
          "https://i.scdn.co/image/ab67616100005174d1ca69ee35e22cb183d5505e",
      },
      {
        id: "swim-5",
        index: 5,
        title: "Distant Call",
        artist: "BTS",
        album: "SWIM",
        duration: "3:42",
        dateAdded: "5 ngày trước",
        coverImageUrl:
          "https://i.scdn.co/image/ab67616100005174d1ca69ee35e22cb183d5505e",
      },
    ],
    relatedAlbums: relatedAlbumsBySlug["swim"],
  },
  {
    slug: "i-know-youre-hurting",
    title: "I Know You're Hurting.",
    artist: "RAYE",
    year: "2024",
    totalTracks: 5,
    durationLabel: "14 phút 55 giây",
    coverImageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN88lxrxGEeSdvv4VY3yAl2tu_IyBMa1ymew&s",
    accentFrom: "#43372d",
    accentTo: "#110d0b",
    tracks: [
      {
        id: "hurting-1",
        index: 1,
        title: "I Know You're Hurting.",
        artist: "RAYE",
        album: "I Know You're Hurting.",
        duration: "3:12",
        dateAdded: "1 ngày trước",
        coverImageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN88lxrxGEeSdvv4VY3yAl2tu_IyBMa1ymew&s",
      },
      {
        id: "hurting-2",
        index: 2,
        title: "Blue Room",
        artist: "RAYE",
        album: "I Know You're Hurting.",
        duration: "2:55",
        dateAdded: "2 ngày trước",
        coverImageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN88lxrxGEeSdvv4VY3yAl2tu_IyBMa1ymew&s",
      },
      {
        id: "hurting-3",
        index: 3,
        title: "Silver Line",
        artist: "RAYE",
        album: "I Know You're Hurting.",
        duration: "3:06",
        dateAdded: "3 ngày trước",
        coverImageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN88lxrxGEeSdvv4VY3yAl2tu_IyBMa1ymew&s",
      },
      {
        id: "hurting-4",
        index: 4,
        title: "Half Moon",
        artist: "RAYE",
        album: "I Know You're Hurting.",
        duration: "2:43",
        dateAdded: "4 ngày trước",
        coverImageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN88lxrxGEeSdvv4VY3yAl2tu_IyBMa1ymew&s",
      },
      {
        id: "hurting-5",
        index: 5,
        title: "Distant Call",
        artist: "RAYE",
        album: "I Know You're Hurting.",
        duration: "2:59",
        dateAdded: "5 ngày trước",
        coverImageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN88lxrxGEeSdvv4VY3yAl2tu_IyBMa1ymew&s",
      },
    ],
    relatedAlbums: relatedAlbumsBySlug["i-know-youre-hurting"],
  },
];

export function getAlbumDetail(slug: string) {
  return albumDetails.find((album) => album.slug === slug);
}
