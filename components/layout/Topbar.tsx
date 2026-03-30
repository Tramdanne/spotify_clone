import Image from "next/image";
import Link from "next/link";
import {
  Bell,
  CircleArrowDown,
  Home,
  Search,
  ShoppingBag,
  Users,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  getAuthenticatedTopbarActions,
  getGuestTopbarActions,
} from "@/lib/layout/topbar";
import type { Messages } from "@/i18n/messages";

type TopbarProps = {
  locale: string;
  messages: Messages["shell"];
  variant: "guest" | "main";
};

export function Topbar({ locale, messages, variant }: TopbarProps) {
  const actions =
    variant === "guest"
      ? getGuestTopbarActions(messages)
      : getAuthenticatedTopbarActions(messages);

  return (
    <header className="rounded-[28px] bg-black/90 px-3 py-3 backdrop-blur md:px-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex min-w-0 flex-1 items-center gap-2 md:gap-3">
          <Link
            href={variant === "guest" ? `/${locale}` : `/${locale}/main`}
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
            aria-label={messages.homeButtonAriaLabel}
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

        {variant === "guest" ? (
          <div className="flex flex-wrap items-center justify-end gap-3 text-sm">
            <Link
              href={actions.premium.href}
              className="hidden font-semibold text-zinc-300 transition hover:text-white lg:inline-flex"
            >
              {actions.premium.label}
            </Link>
            <Link
              href={actions.support.href}
              className="hidden font-semibold text-zinc-300 transition hover:text-white lg:inline-flex"
            >
              {actions.support.label}
            </Link>
            <Link
              href={actions.download.href}
              className="hidden font-semibold text-zinc-300 transition hover:text-white lg:inline-flex"
            >
              {actions.download.label}
            </Link>
            <Button
              asChild
              className="h-11 rounded-full bg-white px-5 text-sm font-bold text-black hover:bg-white/90"
            >
              <Link href={actions.installApp.href}>{actions.installApp.label}</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="h-11 rounded-full px-5 text-sm font-bold text-zinc-200 hover:bg-white/10 hover:text-white"
            >
              <Link href={`/${locale}/auth/register`}>{actions.signUp.label}</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="h-11 rounded-full px-5 text-sm font-bold text-zinc-200 hover:bg-white/10 hover:text-white"
            >
              <Link href={`/${locale}/auth/login`}>{actions.logIn.label}</Link>
            </Button>
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-end gap-3 text-sm">
            <Button
              asChild
              className="h-12 rounded-full bg-white px-5 text-base font-bold text-black hover:bg-white/90"
            >
              <Link href={actions.premium.href}>{actions.premium.label}</Link>
            </Button>

            <Link
              href={actions.installApp.href}
              className="hidden items-center gap-2 font-semibold text-zinc-300 transition hover:text-white xl:inline-flex"
            >
              <CircleArrowDown className="size-4" />
              {actions.installApp.label}
            </Link>

            <Separator orientation="vertical" className="hidden h-8 lg:block" />

            <Button
              type="button"
              size="icon"
              variant="ghost"
              className="hidden size-10 rounded-full text-zinc-300 hover:bg-white/10 hover:text-white md:inline-flex"
              aria-label={messages.notificationsAriaLabel}
            >
              <Bell className="size-4" />
            </Button>

            <Button
              type="button"
              size="icon"
              variant="ghost"
              className="hidden size-10 rounded-full text-zinc-300 hover:bg-white/10 hover:text-white md:inline-flex"
              aria-label={messages.friendsAriaLabel}
            >
              <Users className="size-4" />
            </Button>

            <Avatar className="size-11 ring-4 ring-[#2b1f18]">
              <AvatarFallback className="bg-[#7b4d2a] text-sm font-black text-black">
                T
              </AvatarFallback>
            </Avatar>
          </div>
        )}
      </div>
    </header>
  );
}
