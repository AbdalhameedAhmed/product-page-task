import type { Dispatch, SetStateAction } from "react";

export type HeaderResponsiveMenuItemType = "dropdown" | "link";

export interface HeaderResponsiveMenuLink {
  title: string;
  path: string;
}

export interface HeaderResponsiveMenuItem {
  type: HeaderResponsiveMenuItemType;
  title: string;
  items?: HeaderResponsiveMenuLink[];
}

export interface HeaderResponsiveMenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  items: HeaderResponsiveMenuItem[];
}
