"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ChevronDown, Languages } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { locales } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";

type LanguageSwitcherProps = {
  locale: string;
  messages: Messages["shell"];
  compact?: boolean;
};

export function LanguageSwitcher({
  locale,
  messages,
  compact = false,
}: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLabel =
    messages.languageChoices[locale as keyof typeof messages.languageChoices];
  const choices = (
    Object.entries(messages.languageChoices) as Array<
      [keyof typeof messages.languageChoices, string]
    >
  ).filter(([value]) => value !== locale);
  const queryString = mounted ? searchParams.toString() : "";

  useEffect(() => {
    setMounted(true);
  }, []);

  //Keep the current route when switching language so detail pages stay on the same slug.
  const getLocaleHref = (nextLocale: string) => {
    if (!mounted || !pathname) {
      return `/${nextLocale}`;
    }

    const segments = pathname.split("/").filter(Boolean);
    const hasLocalePrefix =
      segments.length > 0 &&
      locales.includes(segments[0] as (typeof locales)[number]);

    if (hasLocalePrefix) {
      segments[0] = nextLocale;
    } else {
      segments.unshift(nextLocale);
    }

    const nextPathname = `/${segments.join("/")}`;
    return queryString ? `${nextPathname}?${queryString}` : nextPathname;
  };

  return (
    <div className="relative">
      <Button
        type="button"
        variant="outline"
        className={cn(
          "rounded-full border-white/16 bg-transparent text-sm font-semibold text-white hover:bg-white/8",
          compact ? "size-10 px-0" : "h-10 px-4",
        )}
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={compact ? currentLabel : undefined}
      >
        <Languages className="size-4" />
        {compact ? null : currentLabel}
        {compact ? null : <ChevronDown className="size-4 opacity-70" />}
      </Button>

      {open ? (
        <div
          role="menu"
          className="absolute left-0 bottom-full z-50 mb-2 min-w-44 overflow-hidden rounded-2xl border border-white/10 bg-[#181818] p-1 shadow-[0_20px_60px_rgba(0,0,0,0.55)]"
        >
          {choices.map(([value, label]) => (
            <Link
              key={value}
              href={getLocaleHref(value)}
              role="menuitem"
              className="block rounded-xl px-4 py-3 text-sm font-medium text-zinc-200 transition hover:bg-white/10 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
