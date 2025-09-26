import type { Product } from "@/types/shared/ProductCard";
import product1Image from "@/assets/product1.png";
import product2Image from "@/assets/product2.png";
import product3Image from "@/assets/product3.png";
import product4Image from "@/assets/product4.png";
import product5Image from "@/assets/product5.png";
export const products: Product[] = [
  {
    id: 1,
    name: "Whistles",
    price: "£26",
    originalPrice: "£52",
    rating: 4.5,
    reviews: 1258,
    image: product1Image,
    stock: 1,
    describtion: "Wide Leg Cropped Jeans,Denim",
    quantity: 0,
  },
  {
    id: 2,
    name: "John Lewis ANYDAY",
    price: "£26",
    originalPrice: "£40",
    rating: 4.0,
    reviews: 896,
    image: product2Image,
    describtion: "Long Sleeve Utility Shirt, Navy, 6",
    stock: 5,
    quantity: 0,
  },
  {
    id: 3,
    name: "John Lewis ANYDAY",
    price: "£32",
    originalPrice: null,
    rating: 4.5,
    reviews: 423,
    image: product3Image,
    describtion: "Stripe Curved Hem Shirt, Blue",
    stock: 2,
    quantity: 0,
  },
  {
    id: 4,
    name: "John Lewis ANYDAY",
    price: "£40",
    originalPrice: null,
    rating: 4.6,
    reviews: 234,
    image: product4Image,
    describtion: "Denim Overshirt, Mid Wash",
    stock: 3,
    quantity: 0,
  },
  {
    id: 5,
    name: "John Lewis",
    price: "£70",
    originalPrice: null,
    rating: 4.3,
    reviews: 156,
    image: product5Image,
    describtion: "Linen Blazer, Navy",
    stock: 4,
    quantity: 0,
  },
];
