import cartIcon from "@/assets/cart.svg";
import useClickOutside from "@/hooks/useClickOutside";
import { useCartStore } from "@/store/cartStore";
import clsx from "clsx";
import { useRef, useState } from "react";
import { Trash } from "lucide-react";
import { toast } from "react-toastify";

export default function Cart() {
  const cartContainer = useRef<HTMLDivElement>(null);

  useClickOutside(cartContainer, () => setIsOpen(false));

  const [isOpen, setIsOpen] = useState(false);

  const { items, removeFromCart, getItemCount } = useCartStore();

  return (
    <div
      className="relative"
      onClick={() => setIsOpen((prev) => !prev)}
      ref={cartContainer}
    >
      <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#141414] text-[8px] leading-0 text-white">
        <span className="absolute top-1/2 left-1/2 -translate-x-[2px] translate-y-[1px] cursor-pointer">
          {getItemCount()}
        </span>
      </span>
      <img src={cartIcon} alt="cart" className="cursor-pointer" />
      <div
        onClick={(e) => e.stopPropagation()}
        className={clsx(
          "fixed left-1/2 z-30 w-[90%] origin-[90%_0%] -translate-x-1/2 scale-0 space-y-2 rounded-lg border border-gray-200 bg-white px-4 py-6 shadow-xl transition-all duration-300 sm:absolute sm:-right-4 sm:left-auto sm:w-[400px] sm:translate-x-0",
          {
            "scale-100": isOpen,
          },
        )}
      >
        {items.length === 0 ? (
          <p className="p-2 text-center">No items in the cart</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src={item.image} alt="product image" className="w-12" />
                <div className="flex flex-col gap-1">
                  <p className="text-sm">{item.name}</p>
                  <p className="text-sm">{item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <span>{item.quantity}</span>
                <button
                  className="cursor-pointer"
                  onClick={() => {
                    removeFromCart(item.id);
                    toast.success("Item removed from cart");
                  }}
                >
                  <Trash size={16} color="red" />
                </button>
              </div>
            </div>
          ))
        )}
        {}
      </div>
    </div>
  );
}
