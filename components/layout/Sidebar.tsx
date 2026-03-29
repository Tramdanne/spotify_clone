import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import type { Messages } from "@/i18n/messages";

type SidebarProps = {
  locale: string;
  messages: Messages["shell"];
};

export function Sidebar({ locale, messages }: SidebarProps) {
  return (
    <aside className="scrollbar-hidden h-full overflow-y-auto overflow-x-hidden rounded-[28px] bg-[#121212] p-3 shadow-[0_18px_60px_rgba(0,0,0,0.34)]">
      <div className="flex items-center justify-between gap-3 px-2 py-2">
        <h2 className="text-lg font-bold tracking-tight text-white">
          {messages.library}
        </h2>
        <Button
          variant="ghost"
          className="h-9 rounded-full bg-white/8 px-3 text-sm font-semibold text-white hover:bg-white/14"
        >
          <Plus className="size-4" />
          {messages.create}
        </Button>
      </div>

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

      <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 px-2 text-xs text-zinc-400">
        {messages.footerLinks.map((link) => (
          <span key={link} className="transition hover:text-white">
            {link}
          </span>
        ))}
      </div>

      <div className="mt-8 px-2">
        <LanguageSwitcher locale={locale} messages={messages} />
      </div>
    </aside>
  );
}