import { notFound } from "next/navigation";

import { AlbumDetailView } from "@/components/album/AlbumDetailView";
import { AppShell } from "@/components/layout/AppShell";
import { isValidLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { getAlbumDetailByRouteKey } from "@/lib/data/album-details";

type AlbumPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function AlbumPage({ params }: AlbumPageProps) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const album = await getAlbumDetailByRouteKey(slug);

  if (!album) {
    notFound();
  }

  const messages = getMessages(locale);

  return (
    <AppShell locale={locale} messages={messages.shell} variant="main">
      <AlbumDetailView album={album} locale={locale} />
    </AppShell>
  );
}
