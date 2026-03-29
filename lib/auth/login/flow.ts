import type { Locale } from "@/i18n/config";
import type { LoginProviderOption, LoginStage } from "@/types/auth-login";

export function getNextLoginStage(stage: LoginStage): LoginStage {
  switch (stage) {
    case "intro":
      return "otp";
    case "otp":
      return "password";
    default:
      return "password";
  }
}

export function getPreviousLoginStage(stage: LoginStage): LoginStage {
  switch (stage) {
    case "password":
      return "otp";
    case "otp":
      return "intro";
    default:
      return "intro";
  }
}

export function getLoginStepLabel(stage: Exclude<LoginStage, "intro">, locale: Locale) {
  return locale === "vi" ? `Bước ${stage === "otp" ? 1 : 2} của 2` : `Step ${stage === "otp" ? 1 : 2} of 2`;
}

export function buildLoginProviders(labels: {
  phone: string;
  google: string;
  facebook: string;
}): LoginProviderOption[] {
  return [
    { value: "phone", label: labels.phone },
    { value: "google", label: labels.google },
    { value: "facebook", label: labels.facebook },
  ];
}

export function maskEmailForLogin(email: string) {
  const trimmed = email.trim();
  const [localPart = "", domainPart = ""] = trimmed.split("@");

  if (!localPart || !domainPart) {
    return trimmed;
  }

  const maskedLocal =
    localPart.length <= 2
      ? `${localPart[0] ?? ""}*`
      : `${localPart[0]}${"*".repeat(Math.max(3, localPart.length - 2))}${localPart.at(-1)}`;

  const [domainName = "", tld = ""] = domainPart.split(".");
  const maskedDomain =
    domainName.length <= 2
      ? `${domainName[0] ?? ""}*`
      : `${domainName[0]}${"*".repeat(Math.max(1, domainName.length - 2))}${domainName.at(-1)}`;

  return `${maskedLocal}@${maskedDomain}${tld ? `.${tld}` : ""}`;
}
