import downArrow from "@/assets/downArrow.svg";
import type { HeaderResponsiveMenuItem } from "@/types/Header/HeaderMenu";
import clsx from "clsx";
import { useState, type MouseEventHandler } from "react";

export default function DropDownItem({
  title,
  items,
  type,
}: HeaderResponsiveMenuItem) {
  const [isDropMenuOpen, setIsDropMenuOpen] = useState(false);
  const toggleDropDown: MouseEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    setIsDropMenuOpen((prev) => !prev);
  };

  if (type != "dropdown") return;

  return (
    <div className="relative w-full p-4 sm:p-0">
      <div
        className="flex w-full cursor-pointer items-center justify-between gap-4 border-b border-dashed border-gray-600 py-2 sm:border-none"
        onClick={toggleDropDown}
      >
        <p className="">{title}</p>
        <img
          src={downArrow}
          alt="toggle dropdown"
          className={clsx("transition-all duration-300", {
            "rotate-180 sm:rotate-0": isDropMenuOpen,
          })}
        />
      </div>
      <div
        className={clsx(
          "flex max-h-0 flex-col items-center justify-center gap-2 overflow-hidden transition-all duration-300 sm:absolute sm:left-1/2 sm:!max-h-max sm:w-[150px] sm:origin-[80%_0%] sm:-translate-x-1/2 sm:scale-0 sm:rounded sm:p-0 sm:shadow-lg",
          {
            "max-h-96 py-4 sm:scale-100": isDropMenuOpen,
          },
        )}
      >
        {items?.map((item) => (
          <a
            href={item.path}
            className="block w-[85%] border-b border-dashed border-gray-600 py-2 sm:border-none"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
}
