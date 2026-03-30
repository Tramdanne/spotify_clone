import { notFound } from "next/navigation";

import { RegisterWizard } from "@/components/auth/register/RegisterWizard";
import { isValidLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

type RegisterPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function RegisterPage({ params }: RegisterPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getMessages(locale);

  return <RegisterWizard locale={locale} messages={messages.auth.register} />;
}
