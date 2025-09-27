import star from "@/assets/Star.svg";
import { useCartStore } from "@/store/cartStore";
import type { Product } from "@/types/shared/ProductCard";
import { toast } from "react-toastify";
export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCartStore();
  const { iSAvailable: isAvailable } = useCartStore();
  return (
    <div
      key={product.id}
      className="group flex cursor-pointer flex-col justify-between gap-6"
    >
      <div>
        <div className="mb-3 aspect-square overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium sm:text-lg">{product.name}</h3>
          <p className="text-lg font-bold sm:text-xl">{product.price}</p>
          <p className="text-[13px] text-[#7A7A7A] sm:text-base">
            {product.describtion}
          </p>
          <div className="flex items-center gap-2 md:gap-x-2">
            <img src={star} alt="product rate" className="w-3 sm:w-6" />
            <div className="text-xs sm:text-base">{product.rating}</div>
            <span className="text-xs text-[#666666] sm:text-base">
              {product.reviews} Sold
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          addToCart({ ...product, size: "18", color: "black" });
          toast.success("Item added to cart");
        }}
        disabled={!isAvailable(product.id)}
        className="w-full cursor-pointer rounded-lg bg-gray-900 py-2 text-sm text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {!isAvailable(product.id) ? `Out of stock` : "Add To Cart"}
      </button>
    </div>
  );
}
