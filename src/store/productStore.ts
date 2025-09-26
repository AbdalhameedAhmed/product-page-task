import type { Product } from "@/types/shared/ProductCard";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { products } from "@/dummyData/products";

type ProductState = {
  products: Product[];
  decreaseItemStock: (id: number) => void;
  increaseItemStock: (id: number) => void;
  getItemCount: (id: number) => number;
};

export const useProductStore = create(
  persist<ProductState>(
    (set, get) => ({
      products: products,

      decreaseItemStock: (id) => {
        set((state) => ({
          products: state.products.map((product) =>
            product.id === id
              ? { ...product, stock: product.stock - 1 }
              : product,
          ),
        }));
      },
      increaseItemStock: (id) => {
        set((state) => ({
          products: state.products.map((product) =>
            product.id === id
              ? { ...product, stock: product.stock + 1 }
              : product,
          ),
        }));
      },
      getItemCount: (id) => {
        return get().products.find((product) => product.id === id)?.stock || 0;
      },
    }),
    {
      name: "products",
    },
  ),
);
