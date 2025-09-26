export interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice: string | null;
  rating: number;
  reviews: number;
  image: string;
  describtion: string;
  stock: number;
  quantity: number;
}
