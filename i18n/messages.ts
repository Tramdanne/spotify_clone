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
  homeButtonAriaLabel: string;
  notificationsAriaLabel: string;
  friendsAriaLabel: string;
  profileAriaLabel: string;
  sidebarCollapseAriaLabel: string;
  sidebarExpandAriaLabel: string;
  scrollLeftAriaLabel: string;
  scrollRightAriaLabel: string;
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

type RegisterMessages = {
  introTitle: string;
  introSubtitle: string;
  emailLabel: string;
  emailPlaceholder: string;
  introNext: string;
  introOr: string;
  introPhone: string;
  introGoogle: string;
  introApple: string;
  passwordTitle: string;
  passwordLabel: string;
  passwordPlaceholder: string;
  passwordHintTitle: string;
  passwordHints: readonly string[];
  continue: string;
  back: string;
  showPassword: string;
  hidePassword: string;
  profileTitle: string;
  nameLabel: string;
  namePlaceholder: string;
  nameHint: string;
  birthLabel: string;
  birthHint: string;
  dayPlaceholder: string;
  monthPlaceholder: string;
  yearPlaceholder: string;
  genderLabel: string;
  genderHint: string;
  genderOptions: {
    male: string;
    female: string;
    nonBinary: string;
    other: string;
    preferNotSay: string;
  };
  termsTitle: string;
  marketingOptOutLabel: string;
  shareDataLabel: string;
  termsParagraphOne: string;
  termsParagraphTwo: string;
  termsParagraphThree: string;
  termsLink: string;
  privacyLink: string;
  submit: string;
  footerLoginPrompt: string;
  footerLoginLink: string;
  recaptchaPrefix: string;
  recaptchaPrivacyLink: string;
  recaptchaAnd: string;
  recaptchaTermsLink: string;
  recaptchaSuffix: string;
  successTitle: string;
  successDescription: string;
  successButton: string;
};

type LoginMessages = {
  introTitle: string;
  introSubtitle: string;
  emailLabel: string;
  emailPlaceholder: string;
  introNext: string;
  introOr: string;
  introPhone: string;
  introGoogle: string;
  introFacebook: string;
  introRegisterPrompt: string;
  introRegisterLink: string;
  otpTitlePrefix: string;
  otpTitleSuffix: string;
  otpResend: string;
  otpSubmit: string;
  otpPasswordLink: string;
  passwordTitle: string;
  passwordDescription: string;
  passwordEmailLabel: string;
  passwordLabel: string;
  passwordPlaceholder: string;
  passwordSubmit: string;
  passwordlessLink: string;
  errors: {
    emailRequired: string;
    emailInvalid: string;
    otpRequired: string;
    otpInvalid: string;
    passwordRequired: string;
  };
  recaptchaPrefix: string;
  recaptchaPrivacyLink: string;
  recaptchaAnd: string;
  recaptchaTermsLink: string;
  recaptchaSuffix: string;
};

type AuthMessages = {
  register: RegisterMessages;
  login: LoginMessages;
};

export type Messages = {
  heading: string;
  description: string;
  deploy: string;
  docs: string;
  switchLanguage: string;
  shell: ShellMessages;
  auth: AuthMessages;
};

const messages = {
  en: enCommon,
  vi: viCommon,
} satisfies Record<Locale, Messages>;

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}
