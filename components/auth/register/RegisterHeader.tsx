"use client";

import Image from "next/image";
import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import type { RegisterStage } from "@/types/auth-register";

type RegisterHeaderProps = {
  stage: RegisterStage;
  progress: number;
  title: string;
  introTitle: string;
  introSubtitle: string;
  stepLabel: string;
  backLabel: string;
  onBack?: () => void;
};

export function RegisterHeader({
  stage,
  progress,
  title,
  introTitle,
  introSubtitle,
  stepLabel,
  backLabel,
  onBack,
}: RegisterHeaderProps) {
  if (stage === "intro") {
    return (
      <header className="space-y-8 text-center">
        <Image
          src="/images/logo.png"
          alt="Spotify"
          width={48}
          height={48}
          className="mx-auto size-12 object-contain"
          priority
        />
        <div className="space-y-3">
          <h1 className="text-9xl font-black tracking-tight text-white md:text-4xl">
            {introTitle}
          </h1>
          <p className="text-xs text-zinc-400 md:text-sm">{introSubtitle}</p>
        </div>
      </header>
    );
  }

  return (
    <header className="space-y-6">
      <Image
        src="/images/logo.png"
        alt="Spotify"
        width={44}
        height={44}
        className="mx-auto size-11 object-contain"
        priority
      />
      <Progress value={progress} />
      <div className="flex items-start gap-4">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="mt-1 size-10 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10"
          onClick={onBack}
          aria-label={backLabel}
        >
          <ChevronLeft className="size-5" />
        </Button>

        <div className="space-y-1">
          <p className="text-xs text-zinc-400">{stepLabel}</p>
          <h1 className="text-xl font-bold tracking-tight text-white md:text-2xl">
            {title}
          </h1>
        </div>
      </div>
    </header>
  );
}
