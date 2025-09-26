import { useProductStore } from "@/store/productStore";
import type { Product } from "@/types/shared/ProductCard";
import { create } from "zustand";
import { persist } from "zustand/middleware";
type CartState = {
  items: Product[];
  addToCart: (item: Product) => void;
  removeFromCart: (id: number) => void;
  getItemCount: () => number;
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
            if (exists.quantity >= exists.stock) return state;

            useProductStore.getState().decreaseItemStock(item.id);
            return {
              items: state.items.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
              ),
            };
          }
          if (item.stock === 0) return state;
          useProductStore.getState().decreaseItemStock(item.id);
          return {
            items: [...state.items, { ...item, quantity: 1 }],
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
              i.id === id ? { ...i, quantity: i.quantity - 1 } : i,
            ),
          }));
      },
      getItemCount: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
    }),
    {
      name: "cart",
    },
  ),
);
