"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, LogOut, User } from "lucide-react";
import { useRouter } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Messages } from "@/i18n/messages";

type UserMenuProps = {
  locale: string;
  messages: Messages["shell"];
  profileHref: string;
  displayName: string;
  avatarSrc?: string | null;
  onLogout?: () => void;
};

export function UserMenu({
  locale,
  messages,
  profileHref,
  displayName,
  avatarSrc,
  onLogout,
}: UserMenuProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const initial = displayName.trim().charAt(0).toUpperCase() || "U";
  const logoutHref = `/${locale}/`;

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const handleLogout = () => {
    setOpen(false);

    if (onLogout) {
      onLogout();
      return;
    }

    router.replace(logoutHref);
  };

  return (
    <div ref={menuRef} className="relative z-50 shrink-0">
      <Button
        type="button"
        variant="ghost"
        className={cn(
          "flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/8 px-2 pr-3 text-left text-white transition hover:bg-white/12 hover:text-white",
          open && "bg-white/12",
        )}
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={messages.profileAriaLabel}
      >
        <Avatar className="size-8 ring-2 ring-black/30">
          {avatarSrc ? <AvatarImage src={avatarSrc} alt={displayName} /> : null}
          <AvatarFallback className="bg-[#1db954] text-sm font-bold text-black">
            {avatarSrc ? null : initial}
          </AvatarFallback>
        </Avatar>
        <ChevronDown className="size-4 text-zinc-300" />
      </Button>

      <div
        role="menu"
        aria-hidden={!open}
        className={cn(
          "absolute right-0 top-full z-60 mt-3 w-60 origin-top-right rounded-[22px] border border-white/10 bg-[#181818] p-2 shadow-[0_24px_80px_rgba(0,0,0,0.55)] transition-all duration-150 ease-out",
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-1 scale-95 opacity-0",
        )}
      >
        <Link
          href={profileHref}
          role="menuitem"
          className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-zinc-200 transition hover:bg-white/10 hover:text-white"
          onClick={() => setOpen(false)}
        >
          <User className="size-4 shrink-0" />
          <span>{messages.profile}</span>
        </Link>

        <button
          type="button"
          role="menuitem"
          className="mt-1 flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-zinc-200 transition hover:bg-white/10 hover:text-white"
          onClick={handleLogout}
        >
          <LogOut className="size-4 shrink-0" />
          <span>{messages.logout}</span>
        </button>
      </div>
    </div>
  );
}
