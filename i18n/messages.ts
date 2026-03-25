import type { Locale } from "@/i18n/config";

type Messages = {
  heading: string;
  description: string;
  deploy: string;
  docs: string;
  switchLanguage: string;
};

const messages: Record<Locale, Messages> = {
  en: {
    heading: "To get started, edit the page.tsx file.",
    description:
      "This is a basic i18n setup for Next.js App Router with locale-based routing.",
    deploy: "Deploy Now",
    docs: "Documentation",
    switchLanguage: "Switch language",
  },
  vi: {
    heading: "Để bắt đầu, hãy chỉnh sửa file page.tsx.",
    description:
      "Đây là cấu hình i18n cơ bản cho Next.js App Router theo route ngôn ngữ.",
    deploy: "Triển khai ngay",
    docs: "Tài liệu",
    switchLanguage: "Chuyển ngôn ngữ",
  },
};

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}
