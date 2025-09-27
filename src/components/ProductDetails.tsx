import star from "@/assets/Star.svg";
import { useProductDetailsStore } from "@/store/useProductDetailsStore";
import { useGetProductDetails } from "@/hooks/useGetProductDetails";
import clsx from "clsx";
import { useEffect } from "react";
import SeeMore from "./shared/SeeMore";
const ProductDetails = () => {
  const { productDetails, isPending } = useGetProductDetails();
  const {
    setProduct,
    availableColors,
    availableSizes,
    setSelectedVariation,
    selectedVariations,
    isVariantAvailable,
  } = useProductDetailsStore();

  useEffect(() => {
    if (productDetails) {
      setProduct(productDetails);
    }
  }, [productDetails, setProduct]);
  if (isPending) {
    return <DetailsSkeleton />;
  }

  return (
    <div className="mt-12 lg:mt-0 lg:w-1/2">
      {/* Product info */}
      <div className="mb-6">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm text-[#8F8F8F] sm:text-base">
            {productDetails?.slug}
          </p>
          {!isVariantAvailable() && (
            <p className="text-sm text-red-500">
              Selected variant is not available
            </p>
          )}
        </div>
        <h1 className="mb-5 text-2xl font-bold md:text-3xl">
          {productDetails?.name}
        </h1>
        <div className="flex items-center justify-between border-b border-dashed border-[#A3A3A3] pb-6">
          <div className="flex items-center">
            {(productDetails?.price ?? 0) >
            (productDetails?.sale_price ?? 0) ? (
              <>
                <span className="mr-2 text-sm text-gray-500 line-through sm:mr-4 sm:text-base">
                  £{productDetails?.price}
                </span>
                <span className="text-xl font-bold sm:text-[28px]">
                  £{productDetails?.sale_price}
                </span>
              </>
            ) : (
              <span className="text-xl font-bold sm:text-[28px]">
                £{productDetails?.price}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 sm:gap-3">
            <span className="text-[#666666] sm:text-2xl">1,238 Sold</span>
            <span className="block h-[6px] w-[6px] rounded-full bg-[#E0E0E0]"></span>
            <img src={star} alt="star" className="sm:w-6" />
            <div className="flex items-center font-semibold sm:text-2xl">
              4.5
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      {productDetails?.description && (
        <SeeMore content={productDetails?.description} title="Description" />
      )}

      {/* Color selection */}
      <div className="mb-8 sm:mb-10">
        <h3 className="mb-3 font-semibold text-[#8F8F8F]">
          Color:{" "}
          <span className="font-bold text-black">
            {selectedVariations.color}
          </span>
        </h3>
        <div className="flex space-x-3">
          {availableColors?.map((color) => (
            <button
              key={color.id}
              onClick={() => setSelectedVariation("color", color.name)}
              className={clsx(`h-10 w-1/4 rounded-lg border-2 sm:w-[75px]`, {
                "border-6 !border-white outline-1 outline-black":
                  selectedVariations.color === color.name,
              })}
              style={{ backgroundColor: color.name, borderColor: color.name }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Size selection */}
      <div className="mb-8 sm:mb-10">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="mb-3 font-semibold text-[#8F8F8F]">
            Size:{" "}
            <span className="font-bold text-black">
              {selectedVariations.size}
            </span>
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {availableSizes.map((size) => (
            <button
              key={size.id}
              onClick={() => setSelectedVariation("size", size.name)}
              className={clsx(
                `h-10 w-[74px] min-w-[74px] rounded-lg border-1 font-semibold`,
                {
                  "border-[#333333] bg-[#EBEBEB]":
                    selectedVariations.size === size.name,
                  "border-[#E6E6E6]": selectedVariations.size !== size.name,
                },
              )}
            >
              {size.name}
            </button>
          ))}
        </div>
      </div>

      {/* Add to cart section */}
      <div className="flex flex-wrap items-center justify-between gap-5 sm:mb-10 sm:flex-nowrap lg:flex-wrap xl:flex-nowrap">
        <button
          disabled={!isVariantAvailable()}
          className="w-[296px] min-w-[296px] rounded-lg bg-gray-900 py-4 font-semibold text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50 md:w-8/12"
        >
          Add To Cart
        </button>
        <button
          disabled={!isVariantAvailable()}
          className="w-[187px] min-w-[187px] rounded-lg border border-gray-300 py-4 font-semibold transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 md:w-4/12"
        >
          Checkout Now
        </button>
      </div>

      {/* Delivery info */}
      <p className="hidden text-[#7A7A7A] sm:block">Delivery T&C</p>
    </div>
  );
};

function DetailsSkeleton() {
  return (
    <div className="flex animate-pulse flex-col gap-6 lg:mt-0 lg:w-1/2">
      <div className="size-10 h-5 w-[150px] bg-gray-200"></div>
      <div className="size-10 h-8 w-full bg-gray-200"></div>
      <div className="flex items-center justify-between">
        <div className="size-10 h-5 w-[150px] bg-gray-200"></div>
        <div className="size-10 h-5 w-[150px] bg-gray-200"></div>
      </div>
      <div className="size-10 h-[300px] w-full bg-gray-200"></div>
      <div className="size-10 h-20 w-full bg-gray-200"></div>

      <div className="flex flex-wrap items-center justify-between gap-5 sm:mb-10 sm:flex-nowrap lg:flex-wrap xl:flex-nowrap">
        <div className="size-10 h-10 w-[296px] min-w-[296px] flex-1 bg-gray-200"></div>
        <div className="size-10 h-10 w-[187px] min-w-[187px] bg-gray-200"></div>
      </div>
    </div>
  );
}
export default ProductDetails;
