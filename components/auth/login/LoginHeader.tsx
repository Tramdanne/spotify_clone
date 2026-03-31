"use client";

import Image from "next/image";
import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { LoginStage } from "@/types/auth-login";

type LoginHeaderProps = {
  stage: LoginStage;
  title: string;
  subtitle?: string;
  onBack?: () => void;
};

export function LoginHeader({
  stage,
  title,
  subtitle,
  onBack,
}: LoginHeaderProps) {
  const isIntro = stage === "intro";
  const hasText = Boolean(title || subtitle);

  return (
    <header className={isIntro ? "space-y-8 text-center" : "space-y-6"}>
      <div
        className={
          isIntro
            ? "flex justify-center"
            : "flex justify-center lg:justify-start"
        }
      >
        <Image
          src="/images/logo.png"
          alt="Spotify"
          width={44}
          height={44}
          className="size-11 object-contain"
          priority
        />
      </div>

      {isIntro ? (
        hasText ? (
          <div className="space-y-4">
            <h1 className="text-3xl font-black tracking-tight text-white md:text-4xl">
              {title}
            </h1>
            {subtitle ? (
              <p className="mx-auto max-w-104 text-sm leading-6 text-zinc-400 md:text-base">
                {subtitle}
              </p>
            ) : null}
          </div>
        ) : null
      ) : hasText ? (
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            {onBack ? (
              <Button
                type="button"
                size="icon"
                variant="ghost"
                onClick={onBack}
                className="mt-1 size-10 shrink-0 rounded-full bg-white/6 text-zinc-200 hover:bg-white/10 hover:text-white"
                aria-label="Back"
              >
                <ChevronLeft className="size-6" />
              </Button>
            ) : null}

            <div className="space-y-2">
              <h1 className="text-2xl font-black tracking-tight text-white md:text-[2rem]">
                {title}
              </h1>
              {subtitle ? (
                <p className="max-w-120 text-sm leading-6 text-zinc-400 md:text-base">
                  {subtitle}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-start">
          {onBack ? (
            <Button
              type="button"
              size="icon"
              variant="ghost"
              onClick={onBack}
              className="mt-1 size-10 shrink-0 rounded-full bg-white/6 text-zinc-200 hover:bg-white/10 hover:text-white"
              aria-label="Back"
            >
              <ChevronLeft className="size-6" />
            </Button>
          ) : null}
        </div>
      )}
    </header>
  );
}
