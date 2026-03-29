import type { Locale } from "@/i18n/config";
import enCommon from "@/messages/en/common.json";
import viCommon from "@/messages/vi/common.json";

type PromoMessage = {
  id: string;
  title: string;
  description: string;
  cta: string;
};

type ShellMessages = {
  topbarAriaLabel: string;
  searchPlaceholder: string;
  searchAriaLabel: string;
  premium: string;
  support: string;
  download: string;
  installApp: string;
  signUp: string;
  logIn: string;
  library: string;
  create: string;
  switchTo: string;
  languageChoices: Record<Locale, string>;
  tabs: readonly string[];
  trendingTitle: string;
  artistsTitle: string;
  showAll: string;
  footerLinks: readonly string[];
  promos: readonly PromoMessage[];
};

export type Messages = {
  heading: string;
  description: string;
  deploy: string;
  docs: string;
  switchLanguage: string;
  shell: ShellMessages;
};

const messages = {
  en: enCommon,
  vi: viCommon,
} satisfies Record<Locale, Messages>;

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}