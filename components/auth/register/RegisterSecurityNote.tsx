import Link from "next/link";

type RegisterSecurityNoteProps = {
  prefix: string;
  privacyLink: string;
  andLabel: string;
  termsLink: string;
  suffix: string;
};

export function RegisterSecurityNote({
  prefix,
  privacyLink,
  andLabel,
  termsLink,
  suffix,
}: RegisterSecurityNoteProps) {
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
