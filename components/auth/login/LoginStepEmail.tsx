"use client";

import { Smartphone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type LoginStepEmailProps = {
  email: string;
  emailError?: string;
  emailLabel: string;
  emailPlaceholder: string;
  nextLabel: string;
  orLabel: string;
  phoneLabel: string;
  googleLabel: string;
  facebookLabel: string;
  onEmailChange: (value: string) => void;
  onNext: () => void;
};

function GoogleBadge() {
  return (
    <span className="flex size-5 items-center justify-center rounded-full border border-white/10 bg-black text-[0.95rem] font-black leading-none text-[#4285F4]">
      G
    </span>
  );
}

function FacebookBadge() {
  return (
    <span className="flex size-5 items-center justify-center rounded-full border border-white/10 bg-[#1877F2] text-[0.95rem] font-black leading-none text-white">
      f
    </span>
  );
}

export function LoginStepEmail({
  email,
  emailError,
  emailLabel,
  emailPlaceholder,
  nextLabel,
  orLabel,
  phoneLabel,
  googleLabel,
  facebookLabel,
  onEmailChange,
  onNext,
}: LoginStepEmailProps) {
  const providerButtonClass =
    "h-12 w-full justify-start gap-3 rounded-full border-white/20 bg-transparent px-5 text-sm font-bold text-white hover:bg-white/6 hover:text-white";

  return (
    <section className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="login-email" className="text-sm font-bold text-white">
          {emailLabel}
        </Label>
        <Input
          id="login-email"
          type="email"
          value={email}
          placeholder={emailPlaceholder}
          onChange={(event) => onEmailChange(event.target.value)}
          className="h-12 rounded-lg border-white/20 bg-[#121212] px-4 text-base text-white placeholder:text-zinc-500"
        />
        {emailError ? <p className="text-sm text-red-400">{emailError}</p> : null}
      </div>

      <Button
        type="button"
        onClick={onNext}
        className="h-12 w-full rounded-full bg-[#1ed760] text-base font-bold text-black hover:bg-[#30e36f]"
      >
        {nextLabel}
      </Button>

      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-white/12" />
        <span className="text-sm font-medium text-white">{orLabel}</span>
        <div className="h-px flex-1 bg-white/12" />
      </div>

      <div className="space-y-3">
        <Button type="button" variant="outline" className={providerButtonClass}>
          <Smartphone className="size-5" />
          {phoneLabel}
        </Button>

        <Button type="button" variant="outline" className={providerButtonClass}>
          <GoogleBadge />
          {googleLabel}
        </Button>

        <Button type="button" variant="outline" className={providerButtonClass}>
          <FacebookBadge />
          {facebookLabel}
        </Button>
      </div>
    </section>
  );
}
