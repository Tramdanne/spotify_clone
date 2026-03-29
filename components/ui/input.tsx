import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        data-slot="input"
        className={cn(
          "flex h-11 w-full min-w-0 rounded-full border border-white/8 bg-white/8 px-4 py-2 text-sm text-white outline-none placeholder:text-zinc-400 focus-visible:border-white/16 focus-visible:ring-2 focus-visible:ring-white/12 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export { Input };
