import { notFound } from "next/navigation";

import { AppShell } from "@/components/layout/AppShell";
import { isValidLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getMessages(locale);

  return <AppShell locale={locale} messages={messages.shell} />;
}
