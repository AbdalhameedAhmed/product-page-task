import logo from "@/assets/Logo.png";
import bars from "@/assets/bars.svg";
import cartIcon from "@/assets/cart.svg";
import HeaderResponsiveMenu from "@/components/Header/HeaderResponsiveMenu";
import type { HeaderResponsiveMenuItem } from "@/types/Header/HeaderMenu";
import { useState } from "react";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="container mx-auto flex w-[90%] items-center justify-between border-b-[1px] border-dashed border-[#A3A3A3] py-8">
      <img src={logo} alt="Logo" className="w-[140px] sm:w-auto" />

      <div className="flex items-center gap-4">
        <HeaderResponsiveMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          items={navItems}
        />
        <img src={cartIcon} alt="cart" className="cursor-pointer" />
        <img
          src={bars}
          alt="open side menu"
          className="cursor-pointer sm:hidden"
          onClick={() => setIsOpen(true)}
        />
      </div>
    </header>
  );
}

const navItems: HeaderResponsiveMenuItem[] = [
  {
    type: "dropdown",
    title: "Category",
    items: [
      {
        title: "Men",
        path: "/",
      },
      {
        title: "Women",
        path: "/",
      },
    ],
  },
];
