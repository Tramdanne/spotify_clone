import { homePopularArtists } from "@/lib/data/home";
import type { ArtistDetail } from "@/types/artist";

function getArtistProfile(id: string) {
  const artist = homePopularArtists.find((item) => item.id === id);

  if (!artist) {
    throw new Error(`Missing artist profile: ${id}`);
  }

  return artist;
}

const sonTung = getArtistProfile("son-tung");
const ducPhuc = getArtistProfile("duc-phuc");
const jack = getArtistProfile("jack");
const gerdnang = getArtistProfile("gerdnang");
const hieuthuhai = getArtistProfile("hieuthuhai");
const erik = getArtistProfile("erik");

export const artistDetails: ArtistDetail[] = [
  {
    slug: "son-tung",
    stageName: sonTung.stageName,
    fullName: sonTung.fullName,
    imageUrl: sonTung.imageUrl,
    heroImageUrl: sonTung.imageUrl,
    accentFrom: "#2f5b4d",
    accentTo: "#091611",
    monthlyListeners: "12.4M",
    followers: "8.1M",
    genreLabel: {
      en: "Pop, V-pop",
      vi: "Pop, V-pop",
    },
    bio: {
      en: "A polished pop headliner with stadium-sized hooks, sleek visuals, and a loyal fanbase that follows every release closely.",
      vi: "Một giọng ca pop chỉn chu với những giai điệu bắt tai, hình ảnh sắc sảo và lượng người hâm mộ luôn theo sát từng lần phát hành.",
    },
    topTracks: [
      {
        id: "son-tung-1",
        index: 1,
        title: "Hay Trao Cho Anh",
        albumTitle: "Featured Singles",
        albumSlug: "hoa-ra",
        duration: "3:55",
        plays: "42.8M",
        imageUrl: sonTung.imageUrl,
      },
      {
        id: "son-tung-2",
        index: 2,
        title: "Muon Roi Ma Sao Con",
        albumTitle: "Featured Singles",
        albumSlug: "swim",
        duration: "4:02",
        plays: "35.1M",
        imageUrl: sonTung.imageUrl,
      },
      {
        id: "son-tung-3",
        index: 3,
        title: "Lac Troi",
        albumTitle: "Featured Singles",
        albumSlug: "i-know-youre-hurting",
        duration: "4:15",
        plays: "29.6M",
        imageUrl: sonTung.imageUrl,
      },
    ],
    releases: [
      {
        slug: "hoa-ra",
        title: "Hóa ra...",
        year: "2024",
        imageUrl:
          "https://i.scdn.co/image/ab67616d00001e027a99782f42e7c615e8752915",
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
    relatedArtists: [ducPhuc, jack, hieuthuhai],
  },
  {
    slug: "duc-phuc",
    stageName: ducPhuc.stageName,
    fullName: ducPhuc.fullName,
    imageUrl: ducPhuc.imageUrl,
    heroImageUrl: ducPhuc.imageUrl,
    accentFrom: "#4b335e",
    accentTo: "#140c1b",
    monthlyListeners: "8.6M",
    followers: "5.2M",
    genreLabel: {
      en: "Pop, Ballad",
      vi: "Pop, Ballad",
    },
    bio: {
      en: "Emotive vocals and clean production make every ballad feel intimate, even when the room is full of people singing along.",
      vi: "Giọng hát giàu cảm xúc cùng phần hòa âm gọn gàng khiến mỗi bản ballad đều rất gần gũi, ngay cả khi cả khán phòng cùng hát theo.",
    },
    topTracks: [
      {
        id: "duc-phuc-1",
        index: 1,
        title: "Em Dong Y",
        albumTitle: "Featured Singles",
        albumSlug: "dao-buoc",
        duration: "4:10",
        plays: "31.2M",
        imageUrl: ducPhuc.imageUrl,
      },
      {
        id: "duc-phuc-2",
        index: 2,
        title: "Khong Can Phai Hen Uoc",
        albumTitle: "Featured Singles",
        albumSlug: "tung-la-cua-nhau",
        duration: "3:47",
        plays: "24.5M",
        imageUrl: ducPhuc.imageUrl,
      },
      {
        id: "duc-phuc-3",
        index: 3,
        title: "Nang Am Xa Danh",
        albumTitle: "Featured Singles",
        albumSlug: "hoa-ra",
        duration: "3:39",
        plays: "18.9M",
        imageUrl: ducPhuc.imageUrl,
      },
    ],
    releases: [
      {
        slug: "dao-buoc",
        title: "Dao Buoc Hong Kong 1999",
        year: "2024",
        imageUrl:
          "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/7/2/7/5727b41713b75cc876f3b20d7c6dde9d.jpg",
      },
      {
        slug: "tung-la-cua-nhau",
        title: "Tung La Cua Nhau",
        year: "2022",
        imageUrl:
          "https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/d/f/4/6/df46a2117fff0cb1090d3665ac595f12.jpg",
      },
      {
        slug: "hoa-ra",
        title: "Hoa ra...",
        year: "2024",
        imageUrl:
          "https://i.scdn.co/image/ab67616d00001e027a99782f42e7c615e8752915",
      },
    ],
    relatedArtists: [sonTung, erik, hieuthuhai],
  },
  {
    slug: "jack",
    stageName: jack.stageName,
    fullName: jack.fullName,
    imageUrl: jack.imageUrl,
    heroImageUrl: jack.imageUrl,
    accentFrom: "#6a4d2f",
    accentTo: "#130c08",
    monthlyListeners: "9.9M",
    followers: "6.4M",
    genreLabel: {
      en: "Rap, Pop",
      vi: "Rap, Pop",
    },
    bio: {
      en: "A high-energy artist with a distinctive melodic tone, balancing sharp rap phrasing with hooks that stick instantly.",
      vi: "Một nghệ sĩ giàu năng lượng với màu giọng giai điệu rất riêng, cân bằng giữa lối rap sắc nét và phần hook bám tai ngay lập tức.",
    },
    topTracks: [
      {
        id: "jack-1",
        index: 1,
        title: "Hong Nhan",
        albumTitle: "Featured Singles",
        albumSlug: "hoa-ra",
        duration: "4:22",
        plays: "45.7M",
        imageUrl: jack.imageUrl,
      },
      {
        id: "jack-2",
        index: 2,
        title: "Em Ggi Oi",
        albumTitle: "Featured Singles",
        albumSlug: "i-know-youre-hurting",
        duration: "3:58",
        plays: "27.3M",
        imageUrl: jack.imageUrl,
      },
      {
        id: "jack-3",
        index: 3,
        title: "Thien Ly Oi",
        albumTitle: "Featured Singles",
        albumSlug: "swim",
        duration: "4:08",
        plays: "22.1M",
        imageUrl: jack.imageUrl,
      },
    ],
    releases: [
      {
        slug: "hoa-ra",
        title: "Hoa ra...",
        year: "2024",
        imageUrl:
          "https://i.scdn.co/image/ab67616d00001e027a99782f42e7c615e8752915",
      },
      {
        slug: "dao-buoc",
        title: "Dao Buoc Hong Kong 1999",
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
    ],
    relatedArtists: [gerdnang, hieuthuhai, sonTung],
  },
  {
    slug: "gerdnang",
    stageName: gerdnang.stageName,
    fullName: gerdnang.fullName,
    imageUrl: gerdnang.imageUrl,
    heroImageUrl: gerdnang.imageUrl,
    accentFrom: "#25516d",
    accentTo: "#0b141d",
    monthlyListeners: "4.3M",
    followers: "2.7M",
    genreLabel: {
      en: "Hip-hop, Trap",
      vi: "Hip-hop, Trap",
    },
    bio: {
      en: "A collective-first identity with sharp verses, stacked harmonies, and a stage presence built for a packed crowd.",
      vi: "Một bản sắc tập thể với những verse sắc nét, bè chồng lớp và phong thái sân khấu sinh ra cho đám đông náo nhiệt.",
    },
    topTracks: [
      {
        id: "gerdnang-1",
        index: 1,
        title: "No Cap Cypher",
        albumTitle: "Featured Singles",
        albumSlug: "tung-la-cua-nhau",
        duration: "3:24",
        plays: "19.4M",
        imageUrl: gerdnang.imageUrl,
      },
      {
        id: "gerdnang-2",
        index: 2,
        title: "Northside Energy",
        albumTitle: "Featured Singles",
        albumSlug: "swim",
        duration: "3:38",
        plays: "14.0M",
        imageUrl: gerdnang.imageUrl,
      },
      {
        id: "gerdnang-3",
        index: 3,
        title: "Crew Anthem",
        albumTitle: "Featured Singles",
        albumSlug: "hoa-ra",
        duration: "3:11",
        plays: "11.8M",
        imageUrl: gerdnang.imageUrl,
      },
    ],
    releases: [
      {
        slug: "tung-la-cua-nhau",
        title: "Tung La Cua Nhau",
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
        slug: "hoa-ra",
        title: "Hoa ra...",
        year: "2024",
        imageUrl:
          "https://i.scdn.co/image/ab67616d00001e027a99782f42e7c615e8752915",
      },
    ],
    relatedArtists: [jack, hieuthuhai, erik],
  },
  {
    slug: "hieuthuhai",
    stageName: hieuthuhai.stageName,
    fullName: hieuthuhai.fullName,
    imageUrl: hieuthuhai.imageUrl,
    heroImageUrl: hieuthuhai.imageUrl,
    accentFrom: "#6f3f52",
    accentTo: "#180b10",
    monthlyListeners: "7.1M",
    followers: "4.8M",
    genreLabel: {
      en: "Hip-hop, R&B",
      vi: "Hip-hop, R&B",
    },
    bio: {
      en: "Smooth phrasing, confident delivery, and a polished visual identity have made him one of the most recognizable new-school voices.",
      vi: "Cách nhả chữ mượt mà, lối trình diễn tự tin và hình ảnh chỉn chu đã giúp anh trở thành một trong những gương mặt new-school dễ nhận ra nhất.",
    },
    topTracks: [
      {
        id: "hieuthuhai-1",
        index: 1,
        title: "Sai Gon",
        albumTitle: "Featured Singles",
        albumSlug: "swim",
        duration: "3:17",
        plays: "28.2M",
        imageUrl: hieuthuhai.imageUrl,
      },
      {
        id: "hieuthuhai-2",
        index: 2,
        title: "Nghe Nhu Tinh Yeu",
        albumTitle: "Featured Singles",
        albumSlug: "i-know-youre-hurting",
        duration: "3:44",
        plays: "22.6M",
        imageUrl: hieuthuhai.imageUrl,
      },
      {
        id: "hieuthuhai-3",
        index: 3,
        title: "Sao Hang A",
        albumTitle: "Featured Singles",
        albumSlug: "hoa-ra",
        duration: "3:05",
        plays: "18.0M",
        imageUrl: hieuthuhai.imageUrl,
      },
    ],
    releases: [
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
      {
        slug: "hoa-ra",
        title: "Hoa ra...",
        year: "2024",
        imageUrl:
          "https://i.scdn.co/image/ab67616d00001e027a99782f42e7c615e8752915",
      },
    ],
    relatedArtists: [gerdnang, jack, erik],
  },
  {
    slug: "erik",
    stageName: erik.stageName,
    fullName: erik.fullName,
    imageUrl: erik.imageUrl,
    heroImageUrl: erik.imageUrl,
    accentFrom: "#3d4f7a",
    accentTo: "#0b101a",
    monthlyListeners: "6.2M",
    followers: "4.1M",
    genreLabel: {
      en: "Ballad, Pop",
      vi: "Ballad, Pop",
    },
    bio: {
      en: "A bright pop voice with emotional lift, carrying heartfelt ballads and radio-ready hooks with equal ease.",
      vi: "Một giọng pop sáng và giàu cảm xúc, cân trọn những bản ballad chân thành lẫn các hook dễ lên sóng radio.",
    },
    topTracks: [
      {
        id: "erik-1",
        index: 1,
        title: "Xoa Nhieu Be Dau",
        albumTitle: "Featured Singles",
        albumSlug: "hoa-ra",
        duration: "3:53",
        plays: "25.1M",
        imageUrl: erik.imageUrl,
      },
      {
        id: "erik-2",
        index: 2,
        title: "Yeu Va Yeu",
        albumTitle: "Featured Singles",
        albumSlug: "dao-buoc",
        duration: "4:01",
        plays: "19.7M",
        imageUrl: erik.imageUrl,
      },
      {
        id: "erik-3",
        index: 3,
        title: "Dau Co Loi",
        albumTitle: "Featured Singles",
        albumSlug: "tung-la-cua-nhau",
        duration: "3:27",
        plays: "16.2M",
        imageUrl: erik.imageUrl,
      },
    ],
    releases: [
      {
        slug: "hoa-ra",
        title: "Hoa ra...",
        year: "2024",
        imageUrl:
          "https://i.scdn.co/image/ab67616d00001e027a99782f42e7c615e8752915",
      },
      {
        slug: "i-know-youre-hurting",
        title: "I Know You're Hurting.",
        year: "2024",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN88lxrxGEeSdvv4VY3yAl2tu_IyBMa1ymew&s",
      },
      {
        slug: "dao-buoc",
        title: "Dao Buoc Hong Kong 1999",
        year: "2024",
        imageUrl:
          "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/7/2/7/5727b41713b75cc876f3b20d7c6dde9d.jpg",
      },
    ],
    relatedArtists: [ducPhuc, hieuthuhai, sonTung],
  },
];

export function getArtistDetailBySlug(slug: string) {
  return artistDetails.find((artist) => artist.slug === slug);
}

export function getAllArtistSlugs() {
  return artistDetails.map((artist) => artist.slug);
}
