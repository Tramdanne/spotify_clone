"use client";

import { Apple, Globe, Smartphone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type RegisterStepIntroProps = {
  email: string;
  emailError?: string;
  emailLabel: string;
  emailPlaceholder: string;
  nextLabel: string;
  orLabel: string;
  phoneLabel: string;
  googleLabel: string;
  appleLabel: string;
  onEmailChange: (value: string) => void;
  onNext: () => void;
};

export function RegisterStepIntro({
  email,
  emailError,
  emailLabel,
  emailPlaceholder,
  nextLabel,
  orLabel,
  phoneLabel,
  googleLabel,
  appleLabel,
  onEmailChange,
  onNext,
}: RegisterStepIntroProps) {
  return (
    <section className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="register-email" className="text-sm">
          {emailLabel}
        </Label>
        <Input
          id="register-email"
          type="email"
          value={email}
          onChange={(event) => onEmailChange(event.target.value)}
          placeholder={emailPlaceholder}
          className="h-12 rounded-xl border-white/15 bg-white/6 px-4 text-sm text-white placeholder:text-zinc-500"
        />
        {emailError ? <p className="text-sm text-red-400">{emailError}</p> : null}
      </div>

      <Button
        type="button"
        onClick={onNext}
        className="h-11 w-full rounded-full bg-[#1ed760] px-6 text-sm font-bold text-black hover:bg-[#30e36f]"
      >
        {nextLabel}
      </Button>

      <div className="flex justify-center">
        <span className="text-xs font-semibold text-zinc-400 md:text-sm">
          {orLabel}
        </span>
      </div>

      <div className="space-y-3">
        <Button
          type="button"
          variant="outline"
          className="h-11 w-full justify-start rounded-full border-white/16 bg-transparent px-4 text-sm font-semibold text-white hover:bg-white/8"
        >
          <Smartphone className="size-5" />
          {phoneLabel}
        </Button>

        <Button
          type="button"
          variant="outline"
          className="h-11 w-full justify-start rounded-full border-white/16 bg-transparent px-4 text-sm font-semibold text-white hover:bg-white/8"
        >
          <Globe className="size-5" />
          {googleLabel}
        </Button>

        <Button
          type="button"
          variant="outline"
          className="h-11 w-full justify-start rounded-full border-white/16 bg-transparent px-4 text-sm font-semibold text-white hover:bg-white/8"
        >
          <Apple className="size-5" />
          {appleLabel}
        </Button>
      </div>
    </section>
  );
}
