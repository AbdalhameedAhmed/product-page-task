import { useProductDetailsStore } from "@/hooks/productDetails/store/useProductDetailsStore";
import clsx from "clsx";
import { ChevronLeft, ChevronRight, Heart, Share2 } from "lucide-react";
import InnerImageZoom from "react-inner-image-zoom"; // This was already here, just confirming.
const ProductGallery = () => {
  const {
    availableColors,
    selectedVariations,
    setSelectedVariation,
    selectedVariant,
  } = useProductDetailsStore();
  console.log(selectedVariant, "from zustand");

  return (
    <div className="lg:w-1/2">
      <div className="relative mb-5 flex gap-3 sm:mb-6 sm:gap-8">
        <div className="relative flex-1 overflow-hidden">
          {/* Spacer image to set the container's aspect ratio and height */}
          <img
            src={availableColors[0]?.value}
            alt=""
            aria-hidden="true"
            className="invisible h-full w-full rounded-lg object-cover md:h-[600px]"
          />

          {availableColors.map((color) => (
            <InnerImageZoom
              key={color.id}
              src={color.value || ""}
              zoomType="hover"
              hideHint
              className={clsx(
                "!absolute inset-0 h-full w-full rounded-lg transition-opacity duration-300",
                { "z-20 opacity-100": selectedVariations.color === color.name },
                { "opacity-0": selectedVariations.color !== color.name },
              )}
              // The inner `img` needs these classes to be styled correctly
              imgAttributes={{
                className: "h-full w-full object-contain",
                alt: `${color.name} shoe image`,
              }}
            />
          ))}
        </div>
        <div className="flex shrink-0 flex-col items-center justify-between gap-6">
          <div className="flex flex-col gap-5">
            <button className="rounded-lg bg-[#F2F2F2] p-3 sm:p-4">
              <Heart size={20} />
            </button>
            <button className="rounded-lg bg-[#F2F2F2] p-3 sm:p-4">
              <Share2 size={20} />
            </button>
          </div>
          <div className="flex flex-col gap-5">
            <button
              className="cursor-pointer rounded-lg bg-[#F2F2F2] p-3 sm:p-4"
              onClick={() => {
                setSelectedVariation(
                  "color",
                  availableColors[
                    (availableColors.findIndex(
                      (color) => color.name === selectedVariations.color,
                    ) -
                      1 +
                      availableColors.length) %
                      availableColors.length
                  ].name,
                );
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="cursor-pointer rounded-lg bg-[#F2F2F2] p-3 sm:p-4"
              onClick={() => {
                setSelectedVariation(
                  "color",
                  availableColors[
                    (availableColors.findIndex(
                      (color) => color.name === selectedVariations.color,
                    ) +
                      1) %
                      availableColors.length
                  ].name,
                );
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Thumbnail images */}
      <div className="flex space-x-2 overflow-x-auto">
        {availableColors.map((color, index) => (
          <button
            key={color.id}
            onClick={() => setSelectedVariation("color", color.name)}
            className={`w-14 flex-shrink-0 overflow-hidden rounded-lg border-2 md:h-20 md:w-20 ${
              selectedVariations.color === color.name
                ? "border-gray-900"
                : "border-gray-200"
            }`}
          >
            <img
              src={color.value}
              loading="lazy"
              alt={`Product view ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
