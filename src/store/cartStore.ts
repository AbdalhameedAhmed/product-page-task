import { useProductStore } from "@/store/productStore";
import type { CartItem } from "@/types/store/cartStore";
import { create } from "zustand";
import { persist } from "zustand/middleware";
type CartState = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  getItemCount: () => number;
  iSAvailable: (id: string) => boolean;
};

export const useCartStore = create(
  persist<CartState>(
    (set, get) => ({
      items: [],
      addToCart: (item) => {
        set((state) => {
          const exists = state.items.find((i) => i.id === item.id);
          if (exists) {
            // Don't add if out of stock
            if (exists.quantity && exists.quantity >= exists.stock)
              return state;
            return {
              items: state.items.map((i) =>
                i.id === item.id
                  ? {
                      ...i,
                      quantity: (i.quantity || 0) + 1,
                      stock: i.stock - 1,
                    }
                  : i,
              ),
            };
          }
          if (item.stock === 0) return state;
          return {
            items: [
              ...state.items,
              { ...item, quantity: 1, stock: item.stock - 1 },
            ],
          };
        });
      },
      removeFromCart: (id) => {
        useProductStore.getState().increaseItemStock(id);
        const element = get().items.find((i) => i.id === id);
        if (!element) return;
        if (element.quantity === 1)
          set((state) => ({
            items: state.items.filter((i) => i.id !== id),
          }));
        else
          set((state) => ({
            items: state.items.map((i) =>
              i.id === id
                ? { ...i, quantity: (i.quantity || 1) - 1, stock: i.stock + 1 }
                : i,
            ),
          }));
      },
      getItemCount: () =>
        get().items.reduce((sum, i) => sum + (i.quantity || 0), 0),
      iSAvailable: (id) => {
        const item = get().items.find((product) => product.id === id);
        console.log("avaialbe", item);
        if (item && item.quantity) {
          return !(item.quantity >= item.stock);
        } else {
          return true;
        }
      },
    }),
    {
      name: "cart",
    },
  ),
);
// getItemCount: (id) => {
//         return get().products.find((product) => product.id === id)?.stock || 0;
