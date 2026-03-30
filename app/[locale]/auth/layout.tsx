import type { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#121212] text-white">
      <main className="grid min-h-screen grid-cols-1 px-4 py-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,560px)_minmax(0,1fr)_minmax(0,1fr)] lg:px-8 lg:pt-[84px] lg:pb-10">
        <div className="flex w-full min-w-0 justify-center lg:col-start-3 lg:col-span-1 lg:items-start">
          {children}
        </div>
      </main>
    </div>
  );
}
