"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoginFooter } from "@/components/auth/login/LoginFooter";
import { LoginHeader } from "@/components/auth/login/LoginHeader";
import { LoginSecurityNote } from "@/components/auth/login/LoginSecurityNote";
import { LoginStepEmail } from "@/components/auth/login/LoginStepEmail";
import { LoginStepOtp } from "@/components/auth/login/LoginStepOtp";
import { LoginStepPassword } from "@/components/auth/login/LoginStepPassword";
import { INITIAL_LOGIN_FORM } from "@/lib/auth/login/constants";
import {
  loginEmailSchema,
  loginOtpSchema,
  loginPasswordSchema,
} from "@/lib/auth/login/schemas";
import {
  buildLoginProviders,
  getPreviousLoginStage,
  maskEmailForLogin,
} from "@/lib/auth/login/flow";
import { extractErrors } from "@/lib/auth/validation-utils";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import type { LoginFormState, LoginStage } from "@/types/auth-login";
type LoginWizardProps = {
  locale: Locale;
  messages: Messages["auth"]["login"];
};

type LoginValidationTexts = {
  emailRequired: string;
  emailInvalid: string;
  otpRequired: string;
  otpInvalid: string;
  passwordRequired: string;
};

function validateLoginIntro(
  values: LoginFormState,
  texts: Pick<LoginValidationTexts, "emailRequired" | "emailInvalid">,
) {
  const result = loginEmailSchema.safeParse({ email: values.email });

  return extractErrors(result, {
    email: !values.email.trim() ? texts.emailRequired : texts.emailInvalid,
  });
}

function validateLoginOtp(
  values: LoginFormState,
  texts: Pick<LoginValidationTexts, "otpRequired" | "otpInvalid">,
) {
  const result = loginOtpSchema.safeParse({ otpDigits: values.otpDigits });

  const errors = extractErrors(result);
  if (errors.otpDigits) {
    errors.otpDigits = values.otpDigits.join("").trim()
      ? texts.otpInvalid
      : texts.otpRequired;
  }

  return errors;
}

function validateLoginPassword(
  values: LoginFormState,
  texts: Pick<
    LoginValidationTexts,
    "emailRequired" | "emailInvalid" | "passwordRequired"
  >,
) {
  const result = loginPasswordSchema.safeParse({
    email: values.email,
    password: values.password,
  });

  return extractErrors(result, {
    email: !values.email.trim() ? texts.emailRequired : texts.emailInvalid,
    password: texts.passwordRequired,
  });
}

function getLoginErrorsForStage(
  stage: LoginStage,
  values: LoginFormState,
  texts: LoginValidationTexts,
) {
  switch (stage) {
    case "intro":
      return validateLoginIntro(values, texts);
    case "otp":
      return validateLoginOtp(values, texts);
    case "password":
      return validateLoginPassword(values, texts);
    default:
      return {};
  }
}

export function LoginWizard({ locale, messages }: LoginWizardProps) {
  const router = useRouter();
  const [stage, setStage] = useState<LoginStage>("intro");
  const [form, setForm] = useState<LoginFormState>(INITIAL_LOGIN_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);

  const providers = buildLoginProviders({
    phone: messages.introPhone,
    google: messages.introGoogle,
    facebook: messages.introFacebook,
  });

  const updateField = <K extends keyof LoginFormState>(
    key: K,
    value: LoginFormState[K],
  ) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      const nextErrors = { ...current };
      delete nextErrors[key];
      return nextErrors;
    });
  };

  const updateOtpDigit = (index: number, value: string) => {
    setForm((current) => {
      const nextDigits = current.otpDigits.slice();
      nextDigits[index] = value;
      return { ...current, otpDigits: nextDigits };
    });
    setErrors((current) => {
      const nextErrors = { ...current };
      delete nextErrors.otpDigits;
      return nextErrors;
    });
  };

  const handleIntroNext = () => {
    const nextErrors = getLoginErrorsForStage("intro", form, messages.errors);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setStage("otp");
  };

  const handleOtpSubmit = () => {
    const nextErrors = getLoginErrorsForStage("otp", form, messages.errors);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    router.replace(`/${locale}/main`);
  };

  const handlePasswordSubmit = () => {
    const nextErrors = getLoginErrorsForStage(
      "password",
      form,
      messages.errors,
    );
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    router.replace(`/${locale}/main`);
  };

  const handleBack = () => {
    setErrors({});
    setStage(getPreviousLoginStage(stage));
  };

  return (
    <div className="mx-auto flex w-full max-w-120 min-w-0 flex-col justify-center">
      <div className="space-y-8">
        <LoginHeader
          stage={stage}
          title={
            stage === "intro"
              ? messages.introTitle
              : stage === "otp"
                ? ""
                : messages.passwordTitle
          }
          subtitle={
            stage === "intro"
              ? messages.introSubtitle
              : stage === "password"
                ? messages.passwordDescription
                : undefined
          }
          onBack={stage === "intro" ? undefined : handleBack}
        />

        {stage === "intro" ? (
          <LoginStepEmail
            email={form.email}
            emailError={errors.email}
            emailLabel={messages.emailLabel}
            emailPlaceholder={messages.emailPlaceholder}
            nextLabel={messages.introNext}
            orLabel={messages.introOr}
            phoneLabel={providers[0]?.label ?? messages.introPhone}
            googleLabel={providers[1]?.label ?? messages.introGoogle}
            facebookLabel={providers[2]?.label ?? messages.introFacebook}
            onEmailChange={(value) => updateField("email", value)}
            onNext={handleIntroNext}
          />
        ) : stage === "otp" ? (
          <LoginStepOtp
            maskedEmail={maskEmailForLogin(form.email)}
            description={`${messages.otpTitlePrefix} `}
            otpDigits={form.otpDigits}
            otpError={errors.otpDigits}
            resendLabel={messages.otpResend}
            submitLabel={messages.otpSubmit}
            passwordLinkLabel={messages.otpPasswordLink}
            onOtpDigitChange={updateOtpDigit}
            onResend={() => {}}
            onSubmit={handleOtpSubmit}
            onSwitchToPassword={() => setStage("password")}
          />
        ) : (
          <LoginStepPassword
            email={form.email}
            password={form.password}
            emailLabel={messages.passwordEmailLabel}
            passwordLabel={messages.passwordLabel}
            passwordPlaceholder={messages.passwordPlaceholder}
            submitLabel={messages.passwordSubmit}
            passwordlessLinkLabel={messages.passwordlessLink}
            emailError={errors.email}
            passwordError={errors.password}
            showPassword={showPassword}
            onEmailChange={(value) => updateField("email", value)}
            onPasswordChange={(value) => updateField("password", value)}
            onToggleShowPassword={() => setShowPassword((current) => !current)}
            onSubmit={handlePasswordSubmit}
            onSwitchToOtp={() => setStage("otp")}
          />
        )}

        <div className="space-y-4">
          {stage === "intro" ? (
            <LoginFooter
              prompt={messages.introRegisterPrompt}
              linkLabel={messages.introRegisterLink}
              href={`/${locale}/auth/register`}
            />
          ) : null}

          <LoginSecurityNote
            prefix={messages.recaptchaPrefix}
            privacyLink={messages.recaptchaPrivacyLink}
            andLabel={messages.recaptchaAnd}
            termsLink={messages.recaptchaTermsLink}
            suffix={messages.recaptchaSuffix}
          />
        </div>
      </div>
    </div>
  );
}
