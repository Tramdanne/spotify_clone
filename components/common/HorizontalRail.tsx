"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type HorizontalRailProps = {
  children: React.ReactNode;
  className?: string;
};

export function HorizontalRail({ children, className }: HorizontalRailProps) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateState = () => {
    const el = viewportRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    updateState();

    const el = viewportRef.current;
    if (!el) return;

    const onResize = () => updateState();
    el.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      el.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const scrollByAmount = (direction: "left" | "right") => {
    const el = viewportRef.current;
    if (!el) return;

    const amount = Math.round(el.clientWidth * 0.8);
    el.scrollBy({ left: direction === "right" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <div className={cn("relative", className)}>
      <div
        ref={viewportRef}
        className="scrollbar-hidden flex gap-2 overflow-x-auto pb-2 pr-12 scroll-smooth"
      >
        {children}
      </div>

      {canScrollLeft ? (
        <Button
          type="button"
          size="icon"
          className="absolute top-1/2 left-2 z-10 size-10 -translate-y-1/2 rounded-full bg-[#181818] text-white shadow-lg hover:bg-[#242424]"
          onClick={() => scrollByAmount("left")}
          aria-label="Cuộn sang trái"
        >
          <ChevronLeft className="size-5" />
        </Button>
      ) : null}

      {canScrollRight ? (
        <Button
          type="button"
          size="icon"
          className="absolute top-1/2 right-2 z-10 size-10 -translate-y-1/2 rounded-full bg-[#181818] text-white shadow-lg hover:bg-[#242424]"
          onClick={() => scrollByAmount("right")}
          aria-label="Cuộn sang phải"
        >
          <ChevronRight className="size-5" />
        </Button>
      ) : null}
    </div>
  );
}