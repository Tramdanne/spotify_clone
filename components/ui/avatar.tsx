import * as React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

function Avatar({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar"
      className={cn(
        "relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/8 text-white",
        className
      )}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  src,
  alt,
  ...props
}: React.ComponentProps<typeof Image>) {
  return (
    <Image
      data-slot="avatar-image"
      src={src}
      alt={alt}
      fill
      className={cn("object-cover", className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center rounded-full bg-linear-to-br from-neutral-300 via-neutral-500 to-neutral-800 text-sm font-semibold text-white",
        className
      )}
      {...props}
    />
  );
}

export { Avatar, AvatarFallback, AvatarImage };
