"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Languages } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Messages } from "@/i18n/messages";

type LanguageSwitcherProps = {
  locale: string;
  messages: Messages["shell"];
};

export function LanguageSwitcher({ locale, messages }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const currentLabel = messages.languageChoices[locale as keyof typeof messages.languageChoices];
  const choices = (Object.entries(messages.languageChoices) as Array<[keyof typeof messages.languageChoices, string]>).filter(
    ([value]) => value !== locale,
  );

  return (
    <div className="relative">
      <Button
        type="button"
        variant="outline"
        className="h-10 rounded-full border-white/16 bg-transparent px-4 text-sm font-semibold text-white hover:bg-white/8"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <Languages className="size-4" />
        {currentLabel}
        <ChevronDown className="size-4 opacity-70" />
      </Button>

      {open ? (
        <div
          role="menu"
          className="absolute left-0 bottom-full z-50 mb-2 min-w-44 overflow-hidden rounded-2xl border border-white/10 bg-[#181818] p-1 shadow-[0_20px_60px_rgba(0,0,0,0.55)]"
        >
          {choices.map(([value, label]) => (
            <Link
              key={value}
              href={`/${value}`}
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