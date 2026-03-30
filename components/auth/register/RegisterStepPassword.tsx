"use client";

import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { RegisterPasswordRequirement } from "@/types/auth-register";

type RegisterStepPasswordProps = {
  password: string;
  passwordError?: string;
  passwordLabel: string;
  passwordPlaceholder: string;
  passwordHintTitle: string;
  passwordRequirements: readonly RegisterPasswordRequirement[];
  nextLabel: string;
  backLabel: string;
  showPassword: boolean;
  showPasswordLabel: string;
  hidePasswordLabel: string;
  onToggleShowPassword: () => void;
  onPasswordChange: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
};

export function RegisterStepPassword({
  password,
  passwordError,
  passwordLabel,
  passwordPlaceholder,
  passwordHintTitle,
  passwordRequirements,
  nextLabel,
  backLabel,
  showPassword,
  showPasswordLabel,
  hidePasswordLabel,
  onToggleShowPassword,
  onPasswordChange,
  onNext,
  onBack,
}: RegisterStepPasswordProps) {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="register-password">{passwordLabel}</Label>
        <div className="relative">
          <Input
            id="register-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => onPasswordChange(event.target.value)}
            placeholder={passwordPlaceholder}
            className="h-12 rounded-xl border-white/15 bg-white/6 px-4 pr-12 text-base text-white placeholder:text-zinc-500"
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute top-1/2 right-2 size-8 -translate-y-1/2 rounded-full text-zinc-300 hover:bg-white/8 hover:text-white"
            onClick={onToggleShowPassword}
            aria-label={showPassword ? hidePasswordLabel : showPasswordLabel}
          >
            {showPassword ? (
              <EyeOff className="size-4" />
            ) : (
              <Eye className="size-4" />
            )}
          </Button>
        </div>
        {passwordError ? (
          <p className="text-sm text-red-400">{passwordError}</p>
        ) : null}
      </div>

      <div className="space-y-3 text-sm text-white">
        <p className="font-semibold">{passwordHintTitle}</p>
        <ul className="space-y-2 text-zinc-300">
          {passwordRequirements.map((requirement, index) => (
            <li
              key={`${requirement.label}-${index}`}
              className="flex items-start gap-2"
            >
              <span
                className={`mt-1.5 size-2.5 rounded-full ${
                  requirement.met ? "bg-[#1ed760]" : "bg-white/50"
                }`}
              />
              <span
                className={requirement.met ? "text-white" : "text-zinc-300"}
              >
                {requirement.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-3">
        <Button
          type="button"
          onClick={onNext}
          className="h-12 flex-1 rounded-full bg-[#1ed760] text-base font-bold text-black hover:bg-[#30e36f]"
        >
          {nextLabel}
        </Button>
      </div>
    </section>
  );
}
