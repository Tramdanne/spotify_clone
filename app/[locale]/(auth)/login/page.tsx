import { notFound } from "next/navigation";

import { LoginWizard } from "@/components/auth/login/LoginWizard";
import { isValidLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

type LoginPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LoginPage({ params }: LoginPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getMessages(locale);

  return <LoginWizard locale={locale} messages={messages.auth.login} />;
}
