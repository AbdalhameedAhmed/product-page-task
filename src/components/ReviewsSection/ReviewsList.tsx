import { ChevronRight, Star, ThumbsDown, ThumbsUp } from "lucide-react";
import { useState } from "react";
import AccordionMenu from "../shared/AccordionMenu";
import { reviews } from "@/dummyData/reviews";

export default function ReviewsList() {
  const [activeFilter, setActiveFilter] = useState("All Reviews");
  const [currentPage, setCurrentPage] = useState(1);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={20}
        className={
          i < Math.floor(rating)
            ? "fill-current text-[#FFA439]"
            : "text-gray-300"
        }
      />
    ));
  };

  return (
    <div className="lg:flex lg:items-start lg:space-x-12">
      {/* Left side - Filters */}
      <div className="mb-8 lg:sticky lg:top-[20px] lg:mb-0 lg:w-1/4">
        {/* Review filters */}
        <div className="rounded-lg border-[1px] border-dashed border-[#BBBBBB] bg-white p-6">
          <h3 className="mb-4 border-b border-dashed border-[#BBBBBB] pb-4 text-base font-semibold sm:mb-6 sm:pb-6">
            Reviews Filter
          </h3>

          <div className="mb-6">
            <AccordionMenu title="Rating">
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <label key={rating} className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <div className="flex items-center">
                      <Star size={16} className="fill-current text-[#FFA439]" />
                      <span className="ml-1 text-sm text-[#818B9C] sm:text-base">
                        {rating}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </AccordionMenu>
          </div>

          <div>
            <AccordionMenu title="Review Topics">
              <div className="space-y-2 text-sm">
                <label className="flex items-center text-[#818B9C]">
                  <input type="checkbox" className="mr-2" />
                  Product Quality
                </label>
                <label className="flex items-center text-[#818B9C]">
                  <input type="checkbox" className="mr-2" />
                  Better Service
                </label>
                <label className="flex items-center text-[#818B9C]">
                  <input type="checkbox" className="mr-2" />
                  Product Price
                </label>
                <label className="flex items-center text-[#818B9C]">
                  <input type="checkbox" className="mr-2" />
                  Shipment
                </label>
                <label className="flex items-center text-[#818B9C]">
                  <input type="checkbox" className="mr-2" />
                  Match with Description
                </label>
              </div>
            </AccordionMenu>
          </div>
        </div>
      </div>

      {/* Right side - Reviews */}
      <div className="lg:w-3/4">
        {/* Filter tabs */}
        <div className="hideScroll mb-8 flex space-x-6 overflow-auto border-b">
          {["All Reviews", "With Photos & Video", "With Description"].map(
            (filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 border-b-2 pb-4 transition-colors ${
                  activeFilter === filter
                    ? "border-[#FFA439] text-[#FFA439]"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                {filter}
              </button>
            ),
          )}
        </div>

        {/* Reviews list */}

        <div className="mb-8 space-y-6 sm:space-y-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col gap-3 rounded-lg border-b border-dashed border-[#E4E9EE] bg-white pb-6 last:border-none last-of-type:p-0 sm:gap-4 sm:pb-8"
            >
              {/* Rate */}
              <div className="mb-1 flex items-center gap-1">
                {renderStars(review.rating)}
              </div>

              {/* Review title ans date*/}
              <div>
                <h4 className="mb-0.5 text-sm font-medium sm:mb-1 sm:text-lg">
                  {review.title}
                </h4>
                <p className="text-sm text-[#818B9C] sm:text-base">
                  {review.date}
                </p>
              </div>

              <div className="flex items-center justify-between">
                {/* User info */}
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 sm:h-8 sm:w-8">
                    <img src={review.image} alt={`${review.author}`} />
                  </div>
                  <div className="text-xs font-medium sm:text-base">
                    {review.author}
                  </div>
                </div>
                {/* Like and Dislike */}
                <div className="flex items-center justify-between gap-2">
                  <button className="flex items-center gap-x-1 rounded-lg border-[1px] border-[#E4E9EE] p-[10px] text-sm text-[#0B0F0E] hover:text-gray-900 sm:p-3 sm:text-base">
                    <ThumbsUp className="w-4 sm:w-5" />
                    <span>{review.helpful}</span>
                  </button>
                  <button className="rounded-lg border-[1px] border-[#E4E9EE] p-[10px] text-sm text-[#0B0F0E] hover:text-gray-900 sm:p-3 sm:text-base">
                    <ThumbsDown size={16} className="w-4 -scale-x-100 sm:w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center space-x-2">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`h-9 w-9 rounded-lg border text-xs sm:h-11 sm:w-11 sm:text-base ${
                currentPage === page
                  ? "border-[#333333] text-black"
                  : "border-gray-300 text-[#7A7A7A] hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-[#7A7A7A]`}
          >
            ...
          </span>
          <button className="cursor-pointer">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
