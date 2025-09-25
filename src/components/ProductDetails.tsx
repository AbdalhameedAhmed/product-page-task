import { useState } from "react";
import star from "@/assets/Star.svg";
import clsx from "clsx";

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState("8");
  const [selectedColor, setSelectedColor] = useState("Royal Brown");

  const colors = [
    { name: "Royal Brown", color: "#8B4513", selected: true },
    { name: "Navy", color: "#1e3a8a", selected: false },
    { name: "Black", color: "#000000", selected: false },
    { name: "Yellow", color: "#FFD700", selected: false },
  ];

  const sizes = ["6", "8", "10", "14", "18", "20"];

  return (
    <div className="mt-12 lg:mt-0 lg:w-1/2">
      {/* Product info */}
      <div className="mb-6">
        <p className="mb-3 text-sm text-[#8F8F8F] sm:text-base">
          Exclusive ANYDAY
        </p>
        <h1 className="mb-5 text-2xl font-bold md:text-3xl">
          Long Sleeve Overshirt, Khaki, 6
        </h1>
        <div className="flex items-center justify-between border-b border-dashed border-[#A3A3A3] pb-6">
          <div className="flex items-center">
            <span className="mr-2 text-sm text-gray-500 line-through sm:mr-4 sm:text-base">
              £40.00
            </span>
            <span className="text-xl font-bold sm:text-[28px]">£28.00</span>
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
      <div className="mb-8 sm:mb-10">
        <h3 className="mb-3 font-semibold sm:text-lg">Description</h3>
        <p className="text-sm leading-relaxed text-[#666666] sm:text-base">
          Effortless in style, this mid-weight overshirt provides comfortable
          coverage. A relaxed casual fit makes this the perfect autumn cover-up
          to pair with jeans, trousers and leggings for a multitude of
          occasions. <button className="text-sm font-bold">See More...</button>
        </p>
      </div>

      {/* Color selection */}
      <div className="mb-8 sm:mb-10">
        <h3 className="mb-3 font-semibold text-[#8F8F8F]">
          Color: <span className="font-bold text-black">Royal Brown</span>
        </h3>
        <div className="flex space-x-3">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              className={clsx(`h-10 w-1/4 rounded-lg border-2 sm:w-[75px]`, {
                "border-6 !border-white outline-1 outline-black":
                  selectedColor === color.name,
              })}
              style={{ backgroundColor: color.color, borderColor: color.color }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Size selection */}
      <div className="mb-8 sm:mb-10">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="mb-3 font-semibold text-[#8F8F8F]">
            Size: <span className="font-bold text-black">8</span>
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={clsx(
                `h-10 w-[74px] min-w-[74px] rounded-lg border-1 font-semibold`,
                {
                  "border-[#333333] bg-[#EBEBEB]": selectedSize === size,
                  "border-[#E6E6E6]": selectedSize !== size,
                },
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Add to cart section */}
      <div className="flex flex-wrap items-center justify-between gap-5 sm:flex-nowrap">
        <button className="w-[296px] min-w-[296px] rounded-lg bg-gray-900 py-4 font-semibold text-white transition-colors hover:bg-gray-800 md:w-8/12">
          Add To Cart
        </button>
        <button className="w-[187px] min-w-[187px] rounded-lg border border-gray-300 py-4 font-semibold transition-colors hover:bg-gray-50 md:w-4/12">
          Checkout Now
        </button>
      </div>

      {/* Delivery info */}
      <p className="hidden text-[#7A7A7A] sm:block">Delivery T&C</p>
    </div>
  );
};

export default ProductDetails;
