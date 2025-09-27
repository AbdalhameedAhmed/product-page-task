export interface Product {
  id: string;
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
