import { notFound } from "next/navigation";

import { AppShell } from "@/components/layout/AppShell";
import { isValidLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { getHomePageData } from "@/lib/data/home";

type LocaleHomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocaleHomePage({ params }: LocaleHomePageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getMessages(locale);
  const homeData = await getHomePageData();

  return (
    <AppShell
      locale={locale}
      messages={messages.shell}
      variant="guest"
      trendingTracks={homeData.trendingTracks}
      popularArtists={homeData.popularArtists}
    />
  );
}
