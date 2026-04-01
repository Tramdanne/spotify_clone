import Link from "next/link";
import { notFound } from "next/navigation";

import { AppShell } from "@/components/layout/AppShell";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { isValidLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

type ProfilePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getMessages(locale);

  return (
    <AppShell locale={locale} messages={messages.shell} variant="main">
      <div className="space-y-6">
        <section className="overflow-hidden rounded-[28px] border border-white/6 bg-[#121212] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="size-20 ring-4 ring-[#1db954]/25 md:size-24">
                <AvatarImage
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&s"
                  alt={messages.shell.profile}
                />
                <AvatarFallback className="bg-[#1db954] text-2xl font-bold text-black">
                  S
                </AvatarFallback>
              </Avatar>

              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#1db954]">
                  Spotify
                </p>
                <h1 className="text-3xl font-black tracking-tight text-white md:text-5xl">
                  {messages.shell.profile}
                </h1>
                <p className="max-w-xl text-sm text-zinc-300 md:text-base">
                  Manage your account details and keep your listening setup in
                  sync.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="h-11 rounded-full bg-white px-5 text-sm font-bold text-black hover:bg-white/90"
              >
                <Link href={`/${locale}/main`}>Back to home</Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="h-11 rounded-full border border-white/10 bg-white/8 px-5 text-sm font-bold text-white hover:bg-white/12 hover:text-white"
              >
                <Link href={`/${locale}/auth/login`}>
                  {messages.shell.logout}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Display name", "Spotify User"],
            ["Plan", "Free"],
            ["Language", locale === "vi" ? "Tiếng Việt" : "English"],
          ].map(([label, value]) => (
            <Card
              key={label}
              className="border-white/6 bg-[#181818] text-white shadow-none"
            >
              <CardContent className="space-y-2 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  {label}
                </p>
                <p className="text-lg font-semibold">{value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-white/6 bg-[#181818] text-white shadow-none">
          <CardContent className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold">Listening activity</h2>
              <p className="text-sm text-zinc-400">
                Your recent music and artists will appear here when account data
                is connected.
              </p>
            </div>

            <div className="text-sm text-zinc-500">
              Demo profile page for the topnav menu.
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
