import useClickOutside from "@/hooks/useClickOutside";
import type { HeaderResponsiveMenuProps } from "@/types/Header/HeaderMenu";
import clsx from "clsx";
import { useRef } from "react";
import DropDownItem from "./DropDownItem";

export default function HeaderResponsiveMenu({
  isOpen,
  setIsOpen,
  items,
}: HeaderResponsiveMenuProps) {
  const MenuRef = useRef(null);
  useClickOutside(MenuRef, () => setIsOpen(false));

  return (
    <div
      ref={MenuRef}
      className={clsx(
        "fixed top-0 right-0 z-30 h-screen w-[300px] origin-right scale-x-0 bg-gray-200 transition duration-300 sm:static sm:h-auto sm:w-auto sm:scale-100 sm:bg-transparent",
        {
          "scale-x-100": isOpen,
        },
      )}
    >
      {items.map((item, index) => {
        return <DropDownItem key={index} {...item} />;
      })}
    </div>
  );
}
