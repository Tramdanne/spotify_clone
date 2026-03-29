"use client";

import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type LoginStepPasswordProps = {
  email: string;
  password: string;
  emailLabel: string;
  passwordLabel: string;
  passwordPlaceholder: string;
  submitLabel: string;
  passwordlessLinkLabel: string;
  emailError?: string;
  passwordError?: string;
  showPassword: boolean;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onToggleShowPassword: () => void;
  onSubmit: () => void;
  onSwitchToOtp: () => void;
};

export function LoginStepPassword({
  email,
  password,
  emailLabel,
  passwordLabel,
  passwordPlaceholder,
  submitLabel,
  passwordlessLinkLabel,
  emailError,
  passwordError,
  showPassword,
  onEmailChange,
  onPasswordChange,
  onToggleShowPassword,
  onSubmit,
  onSwitchToOtp,
}: LoginStepPasswordProps) {
  return (
    <section className="space-y-5">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="login-password-email" className="text-sm font-bold text-white">
            {emailLabel}
          </Label>
          <Input
            id="login-password-email"
            type="email"
            value={email}
            onChange={(event) => onEmailChange(event.target.value)}
            className="h-12 rounded-lg border-white/20 bg-[#121212] px-4 text-base text-white placeholder:text-zinc-500"
          />
          {emailError ? <p className="text-sm text-red-400">{emailError}</p> : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="login-password" className="text-sm font-bold text-white">
            {passwordLabel}
          </Label>
          <div className="relative">
            <Input
              id="login-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => onPasswordChange(event.target.value)}
              placeholder={passwordPlaceholder}
              className="h-12 rounded-lg border-white/20 bg-[#121212] px-4 pr-12 text-base text-white placeholder:text-zinc-500"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={onToggleShowPassword}
              className="absolute right-1 top-1/2 size-10 -translate-y-1/2 rounded-full text-zinc-300 hover:bg-white/8 hover:text-white"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
            </Button>
          </div>
          {passwordError ? <p className="text-sm text-red-400">{passwordError}</p> : null}
        </div>
      </div>

      <Button
        type="button"
        onClick={onSubmit}
        className="h-12 w-full rounded-full bg-[#1ed760] text-base font-bold text-black hover:bg-[#30e36f]"
      >
        {submitLabel}
      </Button>

      <button
        type="button"
        onClick={onSwitchToOtp}
        className="mx-auto block text-base font-bold text-white transition hover:underline"
      >
        {passwordlessLinkLabel}
      </button>
    </section>
  );
}
