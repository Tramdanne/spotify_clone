import * as React from "react";

import { cn } from "@/lib/utils";

function Progress({
  className,
  value = 0,
  ...props
}: React.ComponentProps<"div"> & { value?: number }) {
  return (
    <div
      data-slot="progress"
      aria-hidden="true"
      className={cn("h-1.5 w-full overflow-hidden rounded-full bg-white/20", className)}
      {...props}
    >
      <div
        className="h-full rounded-full bg-[#1ed760] transition-[width] duration-300"
        style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
      />
    </div>
  );
}

export { Progress };
