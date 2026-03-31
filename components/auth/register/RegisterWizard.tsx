"use client";

import { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { RegisterFooter } from "@/components/auth/register/RegisterFooter";
import { RegisterHeader } from "@/components/auth/register/RegisterHeader";
import { RegisterSecurityNote } from "@/components/auth/register/RegisterSecurityNote";
import { RegisterStepIntro } from "@/components/auth/register/RegisterStepIntro";
import { RegisterStepPassword } from "@/components/auth/register/RegisterStepPassword";
import { RegisterStepProfile } from "@/components/auth/register/RegisterStepProfile";
import { RegisterStepTerms } from "@/components/auth/register/RegisterStepTerms";
import {
  buildMonthOptions,
  getGenderOptions,
  getNextRegisterStage,
  getPreviousRegisterStage,
  getRegisterProgress,
  getRegisterStepLabel,
} from "@/lib/auth/register/flow";
import { INITIAL_REGISTER_FORM } from "@/lib/auth/register/constants";
import {
  registerEmailSchema,
  registerPasswordSchema,
  registerProfileSchema,
  registerConsentSchema,
} from "@/lib/auth/register/schemas";
import { extractErrors } from "@/lib/auth/validation-utils";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import type {
  RegisterFieldErrors,
  RegisterFormState,
  RegisterStage,
} from "@/types/auth-register";

type RegisterWizardProps = {
  locale: Locale;
  messages: Messages["auth"]["register"];
};

const LETTER_PATTERN = /\p{L}/u;
const NUMBER_OR_SPECIAL_PATTERN = /[\d#?!&@$%^*()_+\-=\[\]{};':"\\|,.<>/?`~]/;

function validateEmailStep(values: RegisterFormState): RegisterFieldErrors {
  const result = registerEmailSchema.safeParse({ email: values.email });

  return extractErrors(result);
}

function validatePasswordStep(values: RegisterFormState): RegisterFieldErrors {
  const result = registerPasswordSchema.safeParse({
    password: values.password,
  });

  return extractErrors(result);
}

function validateProfileStep(values: RegisterFormState): RegisterFieldErrors {
  const result = registerProfileSchema.safeParse({
    name: values.name,
    day: values.birthDay,
    month: values.birthMonth,
    year: values.birthYear,
    gender: values.gender,
  });

  const errors = extractErrors(result);

  if (errors.day) {
    errors.birthDay = errors.day;
    delete errors.day;
  }
  if (errors.month) {
    errors.birthMonth = errors.month;
    delete errors.month;
  }
  if (errors.year) {
    errors.birthYear = errors.year;
    delete errors.year;
  }

  return errors;
}

function validateConsentStep(values: RegisterFormState): RegisterFieldErrors {
  const result = registerConsentSchema.safeParse({
    marketingOptOut: values.marketingOptOut,
    shareData: values.shareData,
  });

  return extractErrors(result);
}

function getRegisterErrorsForStage(
  stage: RegisterStage,
  values: RegisterFormState,
): RegisterFieldErrors {
  switch (stage) {
    case "intro":
      return validateEmailStep(values);
    case 1:
      return validatePasswordStep(values);
    case 2:
      return validateProfileStep(values);
    case 3:
      return validateConsentStep(values);
    default:
      return {};
  }
}

function getPasswordRequirementStates(
  value: string,
  labels: readonly string[],
) {
  const trimmed = value.trim();

  return [
    {
      label: labels[0] ?? "",
      met: LETTER_PATTERN.test(trimmed),
    },
    {
      label: labels[1] ?? "",
      met: NUMBER_OR_SPECIAL_PATTERN.test(trimmed),
    },
    {
      label: labels[2] ?? "",
      met: trimmed.length >= 10,
    },
  ];
}

export function RegisterWizard({ locale, messages }: RegisterWizardProps) {
  const [stage, setStage] = useState<RegisterStage>("intro");
  const [form, setForm] = useState<RegisterFormState>(INITIAL_REGISTER_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const monthOptions = buildMonthOptions(locale);
  const genderOptions = getGenderOptions(messages.genderOptions);
  const passwordRequirements = getPasswordRequirementStates(
    form.password,
    messages.passwordHints,
  );

  const updateField = <K extends keyof RegisterFormState>(
    key: K,
    value: RegisterFormState[K],
  ) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      const nextErrors = { ...current };
      delete nextErrors[key];
      return nextErrors;
    });
  };

  const handleNext = () => {
    const stageErrors = getRegisterErrorsForStage(stage, form);
    setErrors(stageErrors);

    if (Object.keys(stageErrors).length > 0) {
      return;
    }

    setStage(getNextRegisterStage(stage));
  };

  const handleBack = () => {
    setErrors({});
    setStage(getPreviousRegisterStage(stage));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="mx-auto flex w-full max-w-110 min-w-0 flex-col justify-center">
      <div className="space-y-8">
        <RegisterHeader
          stage={stage}
          progress={getRegisterProgress(stage)}
          introTitle={messages.introTitle}
          introSubtitle={messages.introSubtitle}
          title={
            stage === 1
              ? messages.passwordTitle
              : stage === 2
                ? messages.profileTitle
                : messages.termsTitle
          }
          stepLabel={
            stage === 1
              ? getRegisterStepLabel(1, locale)
              : stage === 2
                ? getRegisterStepLabel(2, locale)
                : getRegisterStepLabel(3, locale)
          }
          backLabel={messages.back}
          onBack={stage === "intro" ? undefined : handleBack}
        />

        {isSubmitted ? (
          <section className="space-y-6 rounded-3xl border border-white/8 bg-white/5 p-8 text-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-black tracking-tight text-white">
                {messages.successTitle}
              </h2>
              <p className="text-sm leading-6 text-zinc-300">
                {messages.successDescription}
              </p>
            </div>
            <Button
              asChild
              className="h-12 w-full rounded-full bg-[#1ed760] text-base font-bold text-black hover:bg-[#30e36f]"
            >
              <Link href={`/${locale}/main`}>{messages.successButton}</Link>
            </Button>
          </section>
        ) : stage === "intro" ? (
          <RegisterStepIntro
            email={form.email}
            emailError={errors.email}
            emailLabel={messages.emailLabel}
            emailPlaceholder={messages.emailPlaceholder}
            nextLabel={messages.introNext}
            orLabel={messages.introOr}
            phoneLabel={messages.introPhone}
            googleLabel={messages.introGoogle}
            appleLabel={messages.introApple}
            onEmailChange={(value) => updateField("email", value)}
            onNext={handleNext}
          />
        ) : stage === 1 ? (
          <RegisterStepPassword
            password={form.password}
            passwordError={errors.password}
            passwordLabel={messages.passwordLabel}
            passwordPlaceholder={messages.passwordPlaceholder}
            passwordHintTitle={messages.passwordHintTitle}
            passwordRequirements={passwordRequirements}
            nextLabel={messages.continue}
            backLabel={messages.back}
            showPassword={showPassword}
            showPasswordLabel={messages.showPassword}
            hidePasswordLabel={messages.hidePassword}
            onToggleShowPassword={() => setShowPassword((value) => !value)}
            onPasswordChange={(value) => updateField("password", value)}
            onNext={handleNext}
            onBack={handleBack}
          />
        ) : stage === 2 ? (
          <RegisterStepProfile
            name={form.name}
            birthDay={form.birthDay}
            birthMonth={form.birthMonth}
            birthYear={form.birthYear}
            gender={form.gender}
            errors={errors}
            nameLabel={messages.nameLabel}
            namePlaceholder={messages.namePlaceholder}
            nameHint={messages.nameHint}
            birthLabel={messages.birthLabel}
            birthHint={messages.birthHint}
            dayPlaceholder={messages.dayPlaceholder}
            monthPlaceholder={messages.monthPlaceholder}
            yearPlaceholder={messages.yearPlaceholder}
            genderLabel={messages.genderLabel}
            genderHint={messages.genderHint}
            monthOptions={monthOptions}
            genderOptions={genderOptions}
            nextLabel={messages.continue}
            onNameChange={(value) => updateField("name", value)}
            onBirthDayChange={(value) => updateField("birthDay", value)}
            onBirthMonthChange={(value) => updateField("birthMonth", value)}
            onBirthYearChange={(value) => updateField("birthYear", value)}
            onGenderChange={(value) =>
              updateField("gender", value as RegisterFormState["gender"])
            }
            onNext={handleNext}
          />
        ) : (
          <RegisterStepTerms
            marketingOptOut={form.marketingOptOut}
            shareData={form.shareData}
            termsTitle={messages.termsTitle}
            marketingLabel={messages.marketingOptOutLabel}
            shareDataLabel={messages.shareDataLabel}
            termsParagraphOne={messages.termsParagraphOne}
            termsParagraphTwo={messages.termsParagraphTwo}
            termsParagraphThree={messages.termsParagraphThree}
            termsLink={messages.termsLink}
            privacyLink={messages.privacyLink}
            submitLabel={messages.submit}
            onMarketingOptOutChange={(value) =>
              updateField("marketingOptOut", value)
            }
            onShareDataChange={(value) => updateField("shareData", value)}
            onSubmit={handleSubmit}
          />
        )}

        {!isSubmitted ? (
          <div className="space-y-4">
            {stage === "intro" ? (
              <RegisterFooter
                prompt={messages.footerLoginPrompt}
                linkLabel={messages.footerLoginLink}
                href={`/${locale}/auth/login`}
              />
            ) : null}

            <RegisterSecurityNote
              prefix={messages.recaptchaPrefix}
              privacyLink={messages.recaptchaPrivacyLink}
              andLabel={messages.recaptchaAnd}
              termsLink={messages.recaptchaTermsLink}
              suffix={messages.recaptchaSuffix}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
