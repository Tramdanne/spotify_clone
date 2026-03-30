import { ChevronLeft, ChevronRight, LibraryBig, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import {
  getSidebarToggleAriaLabel,
  getSidebarWidthClass,
} from "@/lib/layout/sidebar";
import type { Messages } from "@/i18n/messages";

type SidebarProps = {
  locale: string;
  messages: Messages["shell"];
  variant: "guest" | "main";
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
};

export function Sidebar({
  locale,
  messages,
  isCollapsed,
  onToggleCollapse,
  variant,
}: SidebarProps) {
  const collapsed = variant === "main" ? isCollapsed ?? false : false;
  const canToggleCollapse = variant === "main" && onToggleCollapse;

  return (
    <aside
      className={[
        "scrollbar-hidden h-full min-h-0 overflow-y-auto overflow-x-hidden rounded-[28px] bg-[#121212] p-3 shadow-[0_18px_60px_rgba(0,0,0,0.34)] transition-[width] duration-300",
        variant === "main" ? getSidebarWidthClass(collapsed) : "w-[400px]",
      ].join(" ")}
    >
      <div className="flex items-center justify-between gap-3 px-2 py-2">
        <div className="flex min-w-0 items-center gap-2">
          {canToggleCollapse ? (
            <Button
              type="button"
              size="icon-sm"
              variant="ghost"
              className="rounded-full bg-white/8 text-white hover:bg-white/14"
              onClick={onToggleCollapse}
              aria-label={getSidebarToggleAriaLabel(collapsed, messages)}
            >
              {collapsed ? (
                <ChevronRight className="size-4" />
              ) : (
                <ChevronLeft className="size-4" />
              )}
            </Button>
          ) : (
            <Button
              type="button"
              size="icon-sm"
              variant="ghost"
              className="rounded-full bg-white/8 text-white hover:bg-white/14"
              aria-label={messages.library}
            >
              <LibraryBig className="size-4" />
            </Button>
          )}

          {!collapsed ? (
            <h2 className="text-lg font-bold tracking-tight text-white">
              {messages.library}
            </h2>
          ) : null}
        </div>

        <Button
          variant="ghost"
          className="h-9 rounded-full bg-white/8 px-3 text-sm font-semibold text-white hover:bg-white/14"
        >
          <Plus className="size-4" />
          {collapsed ? null : messages.create}
        </Button>
      </div>

      {collapsed ? (
        <div className="mt-6 flex flex-col items-center gap-3 px-2">
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="size-12 rounded-full bg-white/8 text-white hover:bg-white/14"
          >
            <LibraryBig className="size-5" />
          </Button>
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="size-12 rounded-full bg-white/8 text-white hover:bg-white/14"
          >
            <Plus className="size-5" />
          </Button>
        </div>
      ) : (
        <div className="mt-4 space-y-3">
          {messages.promos.map((promo) => (
            <Card key={promo.id} className="border-0 bg-white/7 shadow-none">
              <CardContent className="space-y-4 p-4">
                <div className="space-y-2">
                  <h3 className="text-base font-bold leading-tight text-white">
                    {promo.title}
                  </h3>
                  <p className="text-sm text-zinc-300">{promo.description}</p>
                </div>
                <Button className="h-9 rounded-full bg-white px-4 text-sm font-bold text-black hover:bg-white/90">
                  {promo.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {!collapsed ? (
        <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 px-2 text-xs text-zinc-400">
          {messages.footerLinks.map((link) => (
            <span key={link} className="transition hover:text-white">
              {link}
            </span>
          ))}
        </div>
      ) : null}

      <div className="mt-8 px-2">
        <LanguageSwitcher
          locale={locale}
          messages={messages}
          compact={collapsed}
        />
      </div>
    </aside>
  );
}
