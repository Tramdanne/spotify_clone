import { notFound } from "next/navigation";

import { ArtistDetailView } from "@/components/artist/ArtistDetailView";
import { AppShell } from "@/components/layout/AppShell";
import { isValidLocale, locales } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { getArtistDetailBySlug, getAllArtistSlugs } from "@/lib/data/artist-details";

type ArtistPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    getAllArtistSlugs().map((slug) => ({
      locale,
      slug,
    }))
  );
}

export default async function ArtistPage({ params }: ArtistPageProps) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const artist = getArtistDetailBySlug(slug);

  if (!artist) {
    notFound();
  }

  const messages = getMessages(locale);

  return (
    <AppShell locale={locale} messages={messages.shell} variant="main">
      <ArtistDetailView artist={artist} locale={locale} messages={messages.artist} />
    </AppShell>
  );
}
