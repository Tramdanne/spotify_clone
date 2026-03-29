import * as React from "react";

import { cn } from "@/lib/utils";

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<"div"> & { role?: "radiogroup" }) {
  return <div data-slot="radio-group" className={cn("grid gap-3", className)} {...props} />;
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type="radio"
      data-slot="radio-group-item"
      className={cn(
        "size-4 shrink-0 border border-white/30 bg-transparent accent-[#1ed760] outline-none transition focus-visible:ring-2 focus-visible:ring-[#1ed760]/40 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { RadioGroup, RadioGroupItem };
