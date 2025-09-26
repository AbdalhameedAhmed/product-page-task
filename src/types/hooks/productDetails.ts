export interface ProductDetails {
  id: string;
  updated_at: string;
  created_at: string;
  store_id: string;
  name: string;
  price: number;
  sale_price: number;
  description: string;
  slug: string;
  thumb: string;
  images: string[];
  position: number;
  hidden: boolean;
  quantity: number;
  track_stock: boolean;
  disable_orders_for_no_stock: boolean;
  show_landing_in_same_page: boolean;
  buy_now_text: string;
  is_fixed_bottom_buy: boolean;
  is_one_page_checkout: boolean;
  fake_visitors_min: number;
  fake_visitors_max: number;
  fake_timer_hours: number;
  is_quantity_hidden: boolean;
  is_header_hidden: boolean;
  is_free_shipping: boolean;
  custom_currency: string;
  is_checkout_before_description: boolean;
  hide_related_products: boolean;
  is_taager_submit_active: boolean;
  is_ecombo_submit_active: boolean;
  is_mosaweq_submit_active: boolean;
  is_alturky_submit_active: boolean;
  is_jamaica_submit_active: boolean;
  is_engzny_submit_active: boolean;
  is_digital: boolean;
  is_cloaking_active: boolean;
  variations: Variation[];
  variants: Variant[];
  categories: Category[];
}

export interface Variation {
  id: string;
  name: string;
  product_id: string;
  type: string;
  props: Prop[];
}

export interface Prop {
  id: string;
  name: string;
  variation_id: string;
  value?: string;
}

export interface Variant {
  id: string;
  product_id: string;
  price: number;
  sale_price: number;
  quantity: number;
  taager_code: string;
  variation_props: VariationProp[];
}

export interface VariationProp {
  id: string;
  variation: string;
  variation_prop: string;
  product_variant_id: string;
}

export interface Category {
  id: string;
  updated_at: string;
  thumb: string;
  created_at: string;
  name: string;
  store_id: string;
  slug: string;
  show_in_header: boolean;
  position: number;
}

export interface ProductDetailsStore {
  product: ProductDetails | null;
  selectedVariations: Record<string, string>; // { color: "brown", size: "40" }
  selectedVariant: Variant | null;
  availableColors: Prop[];
  availableSizes: Prop[];

  // Actions
  setProduct: (product: ProductDetails) => void;
  setSelectedVariation: (variationType: string, value: string) => void;
  clearSelectedVariations: () => void;

  // Computed
  getCurrentPrice: () => number;
  getCurrentSalePrice: () => number;
  isVariantAvailable: () => boolean;
}
