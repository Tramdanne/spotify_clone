export const locales = ["en", "vi"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "vi";

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
