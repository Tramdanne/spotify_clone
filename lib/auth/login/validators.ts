import type { LoginFieldErrors, LoginFormState, LoginStage } from "@/types/auth-login";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const GMAIL_SUFFIX = "@gmail.com";

type LoginValidationTexts = {
  emailRequired: string;
  emailInvalid: string;
  otpRequired: string;
  otpInvalid: string;
  passwordRequired: string;
};

export function isValidEmail(value: string) {
  return EMAIL_PATTERN.test(value.trim());
}

export function isValidGmail(value: string) {
  const trimmed = value.trim().toLowerCase();
  return isValidEmail(trimmed) && trimmed.endsWith(GMAIL_SUFFIX);
}

export function isValidOtpDigits(values: string[]) {
  return values.every((digit) => /^\d$/.test(digit));
}

export function validateLoginIntro(
  values: LoginFormState,
  texts: Pick<LoginValidationTexts, "emailRequired" | "emailInvalid">,
) {
  const errors: LoginFieldErrors = {};
  const email = values.email.trim();

  if (!email) {
    errors.email = texts.emailRequired;
  } else if (!isValidEmail(email) || !email.toLowerCase().endsWith(GMAIL_SUFFIX)) {
    errors.email = texts.emailInvalid;
  }

  return errors;
}

export function validateLoginOtp(
  values: LoginFormState,
  texts: Pick<LoginValidationTexts, "otpRequired" | "otpInvalid">,
) {
  const errors: LoginFieldErrors = {};
  const otp = values.otpDigits.join("");

  if (!otp.trim()) {
    errors.otpDigits = texts.otpRequired;
  } else if (otp.length !== values.otpDigits.length || !isValidOtpDigits(values.otpDigits)) {
    errors.otpDigits = texts.otpInvalid;
  }

  return errors;
}

export function validateLoginPassword(
  values: LoginFormState,
  texts: Pick<LoginValidationTexts, "emailRequired" | "emailInvalid" | "passwordRequired">,
) {
  const errors: LoginFieldErrors = {};

  if (!values.email.trim()) {
    errors.email = texts.emailRequired;
  } else if (!isValidEmail(values.email) || !values.email.toLowerCase().endsWith(GMAIL_SUFFIX)) {
    errors.email = texts.emailInvalid;
  }

  if (!values.password.trim()) {
    errors.password = texts.passwordRequired;
  }

  return errors;
}

export function getLoginErrorsForStage(
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
