"use client";

import { useEffect, useRef, type ClipboardEvent, type KeyboardEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type LoginStepOtpProps = {
  maskedEmail: string;
  description: string;
  otpDigits: string[];
  otpError?: string;
  resendLabel: string;
  submitLabel: string;
  passwordLinkLabel: string;
  onOtpDigitChange: (index: number, value: string) => void;
  onResend: () => void;
  onSubmit: () => void;
  onSwitchToPassword: () => void;
};

export function LoginStepOtp({
  maskedEmail,
  description,
  otpDigits,
  otpError,
  resendLabel,
  submitLabel,
  passwordLinkLabel,
  onOtpDigitChange,
  onResend,
  onSubmit,
  onSwitchToPassword,
}: LoginStepOtpProps) {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    const digitsOnly = value.replace(/\D/g, "").slice(-1);
    onOtpDigitChange(index, digitsOnly);

    if (digitsOnly && index < otpDigits.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    event: KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Backspace" && !otpDigits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (event: ClipboardEvent<HTMLDivElement>) => {
    const pasted = event.clipboardData.getData("text").replace(/\D/g, "");

    if (!pasted) {
      return;
    }

    event.preventDefault();
    const nextDigits = otpDigits.slice();

    pasted
      .slice(0, otpDigits.length)
      .split("")
      .forEach((digit, index) => {
        nextDigits[index] = digit;
        onOtpDigitChange(index, digit);
      });

    const nextIndex = Math.min(pasted.length, otpDigits.length - 1);
    inputRefs.current[nextIndex]?.focus();
  };

  return (
    <section className="space-y-5">
      <p className="text-2xl font-black leading-tight tracking-tight text-white md:text-[2rem]">
        {description} {maskedEmail}.
      </p>

      <div className="space-y-3" onPaste={handlePaste}>
        <div className="flex flex-wrap gap-3">
          {otpDigits.map((digit, index) => (
            <Input
              key={index}
              ref={(node) => {
                inputRefs.current[index] = node;
              }}
              value={digit}
              onChange={(event) => handleChange(index, event.target.value)}
              onKeyDown={(event) => handleKeyDown(index, event)}
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              aria-label={`OTP digit ${index + 1}`}
              className="h-14 w-12 rounded-lg border-white/20 bg-[#121212] p-0 text-center text-lg font-semibold text-white placeholder:text-zinc-500"
            />
          ))}
        </div>

        {otpError ? <p className="text-sm text-red-400">{otpError}</p> : null}

        <Button
          type="button"
          variant="outline"
          onClick={onResend}
          className="h-10 rounded-full border-white/20 bg-transparent px-4 text-sm font-semibold text-white hover:bg-white/6 hover:text-white"
        >
          {resendLabel}
        </Button>
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
        onClick={onSwitchToPassword}
        className="mx-auto block text-base font-bold text-white transition hover:underline"
      >
        {passwordLinkLabel}
      </button>
    </section>
  );
}
