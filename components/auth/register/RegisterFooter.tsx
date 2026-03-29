"use client";

import Link from "next/link";

type RegisterFooterProps = {
  prompt: string;
  linkLabel: string;
  href: string;
};

export function RegisterFooter({ prompt, linkLabel, href }: RegisterFooterProps) {
  return (
    <p className="text-center text-sm text-zinc-400">
      {prompt}{" "}
      <Link href={href} className="font-semibold text-white transition hover:underline">
        {linkLabel}
      </Link>
    </p>
  );
}
