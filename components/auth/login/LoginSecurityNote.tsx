"use client";

import Link from "next/link";

type LoginSecurityNoteProps = {
  prefix: string;
  privacyLink: string;
  andLabel: string;
  termsLink: string;
  suffix: string;
};

export function LoginSecurityNote({
  prefix,
  privacyLink,
  andLabel,
  termsLink,
  suffix,
}: LoginSecurityNoteProps) {
  return (
    <p className="text-center text-xs leading-5 text-zinc-400 md:text-sm">
      {prefix}{" "}
      <Link href="#" className="underline-offset-4 hover:text-white hover:underline">
        {privacyLink}
      </Link>{" "}
      {andLabel}{" "}
      <Link href="#" className="underline-offset-4 hover:text-white hover:underline">
        {termsLink}
      </Link>{" "}
      {suffix}
    </p>
  );
}
