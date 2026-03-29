"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

type RegisterStepTermsProps = {
  marketingOptOut: boolean;
  shareData: boolean;
  termsTitle: string;
  marketingLabel: string;
  shareDataLabel: string;
  termsParagraphOne: string;
  termsParagraphTwo: string;
  termsParagraphThree: string;
  termsLink: string;
  privacyLink: string;
  submitLabel: string;
  onMarketingOptOutChange: (value: boolean) => void;
  onShareDataChange: (value: boolean) => void;
  onSubmit: () => void;
};

export function RegisterStepTerms({
  marketingOptOut,
  shareData,
  termsTitle,
  marketingLabel,
  shareDataLabel,
  termsParagraphOne,
  termsParagraphTwo,
  termsParagraphThree,
  termsLink,
  privacyLink,
  submitLabel,
  onMarketingOptOutChange,
  onShareDataChange,
  onSubmit,
}: RegisterStepTermsProps) {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <div className="rounded-xl bg-white/10 p-4">
          <label className="flex cursor-pointer items-start gap-3 text-xs font-semibold text-white md:text-sm">
            <Checkbox
              checked={marketingOptOut}
              onChange={(event) => onMarketingOptOutChange(event.target.checked)}
              className="mt-1"
            />
            <span>{marketingLabel}</span>
          </label>
        </div>

        <div className="rounded-xl bg-white/10 p-4">
          <label className="flex cursor-pointer items-start gap-3 text-xs font-semibold text-white md:text-sm">
            <Checkbox
              checked={shareData}
              onChange={(event) => onShareDataChange(event.target.checked)}
              className="mt-1"
            />
            <span>{shareDataLabel}</span>
          </label>
        </div>
      </div>

      <div className="space-y-3 text-xs leading-6 text-white md:text-sm">
        <p className="font-semibold">{termsTitle}</p>
        <p>{termsParagraphOne}</p>
        <p>
          {termsParagraphTwo}{" "}
          <Link href="#" className="text-[#1ed760] underline-offset-4 hover:underline">
            {termsLink}
          </Link>
        </p>
        <p>
          {termsParagraphThree}{" "}
          <Link href="#" className="text-[#1ed760] underline-offset-4 hover:underline">
            {privacyLink}
          </Link>
        </p>
      </div>

      <Button
        type="button"
        onClick={onSubmit}
        className="h-11 w-full rounded-full bg-[#1ed760] text-sm font-bold text-black hover:bg-[#30e36f]"
      >
        {submitLabel}
      </Button>
    </section>
  );
}
