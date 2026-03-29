import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { isValidLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

type LoginPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LoginPage({ params }: LoginPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getMessages(locale);

  return (
    <Card className="w-full max-w-[440px] border-white/8 bg-[#181818] shadow-[0_18px_60px_rgba(0,0,0,0.45)]">
      <CardContent className="space-y-6 p-6 md:p-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-black tracking-tight text-white">
            {messages.auth.login.title}
          </h1>
          <p className="text-sm text-zinc-400">{messages.auth.login.description}</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="login-email">{messages.auth.login.emailLabel}</Label>
            <Input
              id="login-email"
              type="email"
              placeholder="name@domain.com"
              className="h-12 rounded-xl border-white/15 bg-white/6 px-4 text-base text-white placeholder:text-zinc-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="login-password">{messages.auth.login.passwordLabel}</Label>
            <Input
              id="login-password"
              type="password"
              placeholder="••••••••••"
              className="h-12 rounded-xl border-white/15 bg-white/6 px-4 text-base text-white placeholder:text-zinc-500"
            />
          </div>

          <Button className="h-12 w-full rounded-full bg-[#1ed760] text-base font-bold text-black hover:bg-[#30e36f]">
            {messages.auth.login.submit}
          </Button>
        </div>

        <p className="text-center text-sm text-zinc-400">
          {messages.auth.login.registerPrompt} {" "}
          <Link
            href={`/${locale}/register`}
            className="font-semibold text-white transition hover:underline"
          >
            {messages.auth.login.registerLink}
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
