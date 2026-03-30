import type { Messages } from "@/i18n/messages";

export function getGuestTopbarActions(messages: Messages["shell"]) {
  return {
    premium: {
      id: "premium",
      label: messages.premium,
      href: "#",
    },
    support: {
      id: "support",
      label: messages.support,
      href: "#",
    },
    download: {
      id: "download",
      label: messages.download,
      href: "#",
    },
    installApp: {
      id: "install",
      label: messages.installApp,
      href: "#",
    },
    signUp: {
      id: "signup",
      label: messages.signUp,
      href: "#",
    },
    logIn: {
      id: "login",
      label: messages.logIn,
      href: "#",
    },
  };
}

export function getAuthenticatedTopbarActions(messages: Messages["shell"]) {
  return {
    premium: {
      id: "premium",
      label: messages.premium,
      href: "#",
    },
    installApp: {
      id: "install",
      label: messages.installApp,
      href: "#",
    },
  };
}
