import arrowRight from "@/assets/arrow-right.svg";
import { Fragment } from "react/jsx-runtime";
export default function BreadCrumbs({ pathArr }: { pathArr: string[] }) {
  return (
    <div className="container mx-auto flex w-[90%] flex-wrap items-center gap-2 py-6 sm:py-10">
      {pathArr.map((path) => (
        <Fragment key={path}>
          <span className="text-[13px] text-[#8F8F8F] last-of-type:text-black sm:text-base">
            {path}
          </span>
          <img
            src={arrowRight}
            alt="breadcrumbs arrow"
            className="last:hidden"
          />
        </Fragment>
      ))}
    </div>
  );
}
