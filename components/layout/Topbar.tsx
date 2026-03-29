import Image from "next/image";
import Link from "next/link";
import { CircleArrowDown, Home, Search, ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import type { Messages } from "@/i18n/messages";

type TopbarProps = {
  locale: string;
  messages: Messages["shell"];
};

export function Topbar({ locale, messages }: TopbarProps) {
  const primaryLinks = [
    { label: messages.premium, href: `/${locale}/premium` },
    { label: messages.support, href: `/${locale}/support` },
    { label: messages.download, href: `/${locale}/download` },
  ];

  return (
    <header className="px-3 pt-3 md:px-4">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-[28px] bg-black/90 px-3 py-3 backdrop-blur md:px-5">
        <div className="flex min-w-0 flex-1 items-center gap-2 md:gap-3">
          <Link
            href={`/${locale}`}
            className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-transparent transition hover:scale-[1.02]"
            aria-label={messages.topbarAriaLabel}
          >
            <Image
              src="/images/logo.png"
              alt="logo Spotify"
              width={40}
              height={40}
              className="size-full object-contain"
              priority
            />
          </Link>

          <Button
            size="icon"
            variant="secondary"
            className="size-12 shrink-0 rounded-full bg-white/10 text-white hover:bg-white/16"
          >
            <Home className="size-5" />
          </Button>

          <div className="flex min-w-0 flex-1 items-center gap-3 rounded-full border border-white/8 bg-white/8 px-3 py-1.5">
            <Search className="size-5 shrink-0 text-zinc-400" />
            <Input
              aria-label={messages.searchAriaLabel}
              placeholder={messages.searchPlaceholder}
              className="h-10 border-0 bg-transparent px-0 text-base shadow-none ring-0 focus-visible:ring-0"
            />
            <Separator orientation="vertical" className="hidden h-7 md:block" />
            <Button
              size="icon-sm"
              variant="ghost"
              className="hidden rounded-full text-zinc-300 hover:bg-white/10 hover:text-white md:inline-flex"
            >
              <ShoppingBag className="size-5" />
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-3 text-sm">
          <nav className="hidden items-center gap-5 text-zinc-300 lg:flex">
            {primaryLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-semibold transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Separator orientation="vertical" className="hidden h-8 lg:block" />

          <Link
            href={`/${locale}/install`}
            className="hidden items-center gap-2 font-semibold text-zinc-300 transition hover:text-white xl:inline-flex"
          >
            <CircleArrowDown className="size-4" />
            {messages.installApp}
          </Link>

          <Link
            href={`/${locale}/register`}
            className="px-2 text-sm font-semibold text-zinc-300 transition hover:text-white md:px-4"
          >
            {messages.signUp}
          </Link>

          <Button
            asChild
            className="h-12 rounded-full bg-white px-7 text-base font-bold text-black hover:bg-white/90"
          >
            <Link href={`/${locale}/login`}>{messages.logIn}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
