import { redirect } from "next/navigation";

import { isValidLocale } from "@/i18n/config";

type AuthPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AuthPage({ params }: AuthPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    redirect("/vi");
  }

  redirect(`/${locale}/register`);
}
