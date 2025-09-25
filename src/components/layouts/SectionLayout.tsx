import type { SectionLayoutProps } from "@/types/layouts/SectionLayout";
import clsx from "clsx";

export default function SectionLayout({
  title,
  showViewAll,
  onViewAllClick,
  children,
  className,
}: SectionLayoutProps) {
  return (
    <section
      className={clsx(
        "container mx-auto w-[90%] border-b border-dashed border-[#A3A3A3] py-14 sm:py-20",
        className,
      )}
    >
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold sm:text-[28px]">{title}</h2>
        {showViewAll && (
          <button
            onClick={onViewAllClick}
            className="flex cursor-pointer items-center text-[#525252] underline"
          >
            View All
          </button>
        )}
      </div>
      {children}
    </section>
  );
}
