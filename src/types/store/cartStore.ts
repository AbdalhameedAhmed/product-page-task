export interface CartItem {
  id: string;
  name: string;
  size: string;
  color: string;
  image: string;
  quantity?: number;
  stock: number;
  price: string;
}
