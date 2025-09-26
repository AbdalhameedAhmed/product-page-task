import type { SeeMoreProps } from "@/types/shared/SeeMore";
import clsx from "clsx";
import DOMPurify from "dompurify";
import { useState } from "react";

export default function SeeMore({ title, content }: SeeMoreProps) {
  const [isSeeMoreOpen, setIsSeeMoreOpen] = useState(false);
  const toggleSeeMore = () => {
    setIsSeeMoreOpen((prev) => !prev);
  };

  return (
    <div className="mb-8 sm:mb-10">
      <h3 className="mb-3 font-semibold sm:text-lg">{title}</h3>

      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(content),
        }}
        className={clsx(
          "mb-4 max-h-[100px] overflow-hidden text-sm leading-relaxed text-[#666666] transition-all duration-300 sm:text-base",
          {
            "max-h-[1000px] py-4": isSeeMoreOpen,
          },
        )}
      />

      <button className="text-sm font-bold" onClick={toggleSeeMore}>
        {isSeeMoreOpen ? "See Less..." : "See More..."}
      </button>
    </div>
  );
}
