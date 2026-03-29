"use client";

import Link from "next/link";

type LoginFooterProps = {
  prompt: string;
  linkLabel: string;
  href: string;
};

export function LoginFooter({ prompt, linkLabel, href }: LoginFooterProps) {
  return (
    <p className="text-center text-sm text-zinc-400">
      {prompt}{" "}
      <Link href={href} className="font-semibold text-white transition hover:underline">
        {linkLabel}
      </Link>
    </p>
  );
}
