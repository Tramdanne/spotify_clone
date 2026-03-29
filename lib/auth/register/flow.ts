import type { Locale } from "@/i18n/config";
import type { RegisterGenderOption, RegisterMonthOption, RegisterStage } from "@/types/auth-register";

export function getNextRegisterStage(stage: RegisterStage): RegisterStage {
  switch (stage) {
    case "intro":
      return 1;
    case 1:
      return 2;
    case 2:
      return 3;
    default:
      return 3;
  }
}

export function getPreviousRegisterStage(stage: RegisterStage): RegisterStage {
  switch (stage) {
    case 1:
      return "intro";
    case 2:
      return 1;
    case 3:
      return 2;
    default:
      return "intro";
  }
}

export function getRegisterProgress(stage: RegisterStage) {
  if (stage === "intro") {
    return 0;
  }

  return (stage / 3) * 100;
}

export function getRegisterStepLabel(
  stage: Exclude<RegisterStage, "intro">,
  locale: Locale,
) {
  return locale === "vi" ? `Bước ${stage} của 3` : `Step ${stage} of 3`;
}

export function buildMonthOptions(locale: Locale): RegisterMonthOption[] {
  const formatter = new Intl.DateTimeFormat(locale, { month: "long" });

  return Array.from({ length: 12 }, (_, index) => {
    const date = new Date(2024, index, 1);
    const rawLabel = formatter.format(date);
    const label = rawLabel.charAt(0).toUpperCase() + rawLabel.slice(1);

    return {
      value: String(index + 1),
      label,
    };
  });
}

export function getGenderOptions(labels: {
  male: string;
  female: string;
  nonBinary: string;
  other: string;
  preferNotSay: string;
}): RegisterGenderOption[] {
  return [
    { value: "male", label: labels.male },
    { value: "female", label: labels.female },
    { value: "nonBinary", label: labels.nonBinary },
    { value: "other", label: labels.other },
    { value: "preferNotSay", label: labels.preferNotSay },
  ];
}
