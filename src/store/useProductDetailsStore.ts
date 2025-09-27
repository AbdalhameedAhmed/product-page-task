import type { ProductDetailsStore, Prop } from "@/types/hooks/productDetails";
import { create } from "zustand";

export const useProductDetailsStore = create<ProductDetailsStore>(
  (set, get) => ({
    product: null,
    selectedVariations: {},
    availableColors: [],
    availableSizes: [],
    selectedVariant: null,

    setProduct: (product) => {
      let availableColors: Prop[] = [];
      let availableSizes: Prop[] = [];

      product.variations.forEach((variation) => {
        if (variation.name === "color") {
          availableColors = variation.props;
        } else if (variation.name === "size") {
          availableSizes = variation.props;
        }
      });

      set({
        product,
        selectedVariations: {
          color: availableColors[0].name,
          size: availableSizes[0].name,
        },
        selectedVariant: null,
        availableColors,
        availableSizes,
      });
    },

    setSelectedVariation: (variationType, value) => {
      const { product, selectedVariations } = get();
      if (!product) return;

      const newSelected = { ...selectedVariations, [variationType]: value };

      // Match selected variant
      let matchedVariant = null;

      if (selectedVariations.color && selectedVariations.size) {
        matchedVariant =
          product.variants.find(
            (variant) =>
              variant.variation_props[0].variation_prop ===
                selectedVariations.color &&
              variant.variation_props[1].variation_prop ===
                selectedVariations.size,
          ) || null;
      }
      set({
        selectedVariations: newSelected,
        selectedVariant: matchedVariant,
      });
    },

    clearSelectedVariations: () =>
      set({ selectedVariations: {}, selectedVariant: null }),

    getCurrentPrice: () => {
      const { selectedVariant, product } = get();
      if (selectedVariant) return selectedVariant.price;
      return product?.price ?? 0;
    },

    getCurrentSalePrice: () => {
      const { selectedVariant, product } = get();
      if (selectedVariant)
        return selectedVariant.sale_price || selectedVariant.price;
      return product?.sale_price || product?.price || 0;
    },

    isVariantAvailable: () => {
      const { selectedVariant } = get();
      return !!selectedVariant && selectedVariant.quantity > 0;
    },
  }),
);
