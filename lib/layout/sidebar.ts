import type { Messages } from "@/i18n/messages";

export function getSidebarWidthClass(isCollapsed: boolean) {
  return isCollapsed ? "w-20" : "w-[400px]";
}

export function getSidebarToggleAriaLabel(
  isCollapsed: boolean,
  messages: Messages["shell"],
) {
  return isCollapsed
    ? messages.sidebarExpandAriaLabel
    : messages.sidebarCollapseAriaLabel;
}
