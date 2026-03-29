import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type TopNavTabsProps = {
  tabs: readonly string[];
  activeTab?: string;
};

export function TopNavTabs({ tabs, activeTab }: TopNavTabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => {
        const isActive = tab === activeTab;

        return (
          <Button
            key={tab}
            variant="secondary"
            className={cn(
              "h-9 rounded-full border border-white/8 px-4 text-sm font-semibold transition",
              isActive
                ? "bg-white text-black hover:bg-white/90"
                : "bg-white/8 text-white hover:bg-white/14"
            )}
          >
            {tab}
          </Button>
        );
      })}
    </div>
  );
}
