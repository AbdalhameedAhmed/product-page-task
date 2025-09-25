import downArrow from "@/assets/downArrow.svg";
import type { AccordionMenuProps } from "@/types/shared/AccorionMenu";
import clsx from "clsx";
import { useState } from "react";

export default function AccordionMenu({ title, children }: AccordionMenuProps) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const toggleAccordian = () => {
    setIsAccordionOpen((prev) => !prev);
  };

  return (
    <div className="w-full">
      <div
        className="flex w-full cursor-pointer items-center justify-between gap-4 py-2"
        onClick={toggleAccordian}
      >
        <p className="font-bold">{title}</p>
        <img
          src={downArrow}
          alt="toggle dropdown"
          className={clsx("rotate-180 transition-all duration-300", {
            "!rotate-0": isAccordionOpen,
          })}
        />
      </div>
      <div
        className={clsx("max-h-0 overflow-hidden transition-all duration-300", {
          "max-h-96 py-4": isAccordionOpen,
        })}
      >
        {children}
      </div>
    </div>
  );
}
