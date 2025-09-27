/**
 * @jest-environment jsdom
 */
import { renderHook, act } from "@testing-library/react";

// Mock zustand persist
jest.mock("zustand/middleware", () => ({
  persist: (config: unknown) => config,
}));

// Mock the product store
const mockDecreaseItemStock = jest.fn();
const mockIncreaseItemStock = jest.fn();
const mockProductStore = {
  getState: jest.fn(() => ({
    decreaseItemStock: mockDecreaseItemStock,
    increaseItemStock: mockIncreaseItemStock,
  })),
};

jest.mock("../../store/productStore", () => ({
  useProductStore: mockProductStore,
}));

// Import after mocking
import { useCartStore } from "../../store/cartStore";

// Product type definition for testing
interface Product {
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

describe("CartStore", () => {
  const mockProduct: Product = {
    id: 1,
    name: "Test Product",
    price: "£20",
    originalPrice: "£30",
    rating: 4.5,
    reviews: 100,
    image: "test-image.jpg",
    describtion: "Test description",
    stock: 5,
    quantity: 0,
  };

  const mockProductOutOfStock: Product = {
    ...mockProduct,
    id: 2,
    stock: 0,
  };

  beforeEach(() => {
    // Reset the store before each test
    act(() => {
      useCartStore.setState({ items: [] });
    });
    jest.clearAllMocks();
  });

  describe("addToCart", () => {
    it("should add a new product to cart with quantity 1", () => {
      const { result } = renderHook(() => useCartStore());

      act(() => {
        result.current.addToCart(mockProduct);
      });

      expect(result.current.items).toHaveLength(1);
      expect(result.current.items[0]).toEqual({
        ...mockProduct,
        quantity: 1,
      });
      expect(mockDecreaseItemStock).toHaveBeenCalledWith(1);
    });

    it("should increase quantity if product already exists in cart", () => {
      const { result } = renderHook(() => useCartStore());

      // Add product first time
      act(() => {
        result.current.addToCart(mockProduct);
      });

      // Add same product again
      act(() => {
        result.current.addToCart(mockProduct);
      });

      expect(result.current.items).toHaveLength(1);
      expect(result.current.items[0].quantity).toBe(2);
      expect(mockDecreaseItemStock).toHaveBeenCalledTimes(2);
    });

    it("should not add product if out of stock", () => {
      const { result } = renderHook(() => useCartStore());

      act(() => {
        result.current.addToCart(mockProductOutOfStock);
      });

      expect(result.current.items).toHaveLength(0);
      expect(mockDecreaseItemStock).not.toHaveBeenCalled();
    });

    it("should not increase quantity if item quantity equals stock", () => {
      const { result } = renderHook(() => useCartStore());

      // Pre-populate cart with item at max stock
      act(() => {
        useCartStore.setState({
          items: [{ ...mockProduct, quantity: 5 }],
        });
      });

      act(() => {
        result.current.addToCart(mockProduct);
      });

      expect(result.current.items[0].quantity).toBe(5);
      expect(mockDecreaseItemStock).not.toHaveBeenCalled();
    });
  });

  describe("removeFromCart", () => {
    it("should decrease quantity by 1 when product quantity > 1", () => {
      const { result } = renderHook(() => useCartStore());

      // Pre-populate cart with item quantity 2
      act(() => {
        useCartStore.setState({
          items: [{ ...mockProduct, quantity: 2 }],
        });
      });

      act(() => {
        result.current.removeFromCart(1);
      });

      expect(result.current.items).toHaveLength(1);
      expect(result.current.items[0].quantity).toBe(1);
      expect(mockIncreaseItemStock).toHaveBeenCalledWith(1);
    });

    it("should remove item completely when quantity is 1", () => {
      const { result } = renderHook(() => useCartStore());

      // Pre-populate cart with item quantity 1
      act(() => {
        useCartStore.setState({
          items: [{ ...mockProduct, quantity: 1 }],
        });
      });

      act(() => {
        result.current.removeFromCart(1);
      });

      expect(result.current.items).toHaveLength(0);
      expect(mockIncreaseItemStock).toHaveBeenCalledWith(1);
    });

    it("should handle removing from cart with multiple items", () => {
      const { result } = renderHook(() => useCartStore());
      const secondProduct = { ...mockProduct, id: 3, quantity: 1 };

      // Pre-populate cart with multiple items
      act(() => {
        useCartStore.setState({
          items: [{ ...mockProduct, quantity: 2 }, secondProduct],
        });
      });

      act(() => {
        result.current.removeFromCart(3);
      });

      expect(result.current.items).toHaveLength(1);
      expect(result.current.items[0].id).toBe(1);
      expect(result.current.items[0].quantity).toBe(2);
    });
  });

  describe("getItemCount", () => {
    it("should return 0 for empty cart", () => {
      const { result } = renderHook(() => useCartStore());

      expect(result.current.getItemCount()).toBe(0);
    });

    it("should return total quantity of all items", () => {
      const { result } = renderHook(() => useCartStore());

      // Pre-populate cart with multiple items
      act(() => {
        useCartStore.setState({
          items: [
            { ...mockProduct, id: 1, quantity: 2 },
            { ...mockProduct, id: 2, quantity: 3 },
            { ...mockProduct, id: 3, quantity: 1 },
          ],
        });
      });

      expect(result.current.getItemCount()).toBe(6);
    });

    it("should update count after adding items", () => {
      const { result } = renderHook(() => useCartStore());

      act(() => {
        result.current.addToCart(mockProduct);
      });

      expect(result.current.getItemCount()).toBe(1);

      act(() => {
        result.current.addToCart(mockProduct);
      });

      expect(result.current.getItemCount()).toBe(2);
    });
  });

  describe("Cart integration scenarios", () => {
    it("should handle complex add/remove operations", () => {
      const { result } = renderHook(() => useCartStore());
      const product1 = { ...mockProduct, id: 1 };
      const product2 = { ...mockProduct, id: 2 };

      // Add first product twice
      act(() => {
        result.current.addToCart(product1);
        result.current.addToCart(product1);
      });

      // Add second product once
      act(() => {
        result.current.addToCart(product2);
      });

      expect(result.current.items).toHaveLength(2);
      expect(result.current.getItemCount()).toBe(3);

      // Remove one quantity from first product
      act(() => {
        result.current.removeFromCart(1);
      });

      expect(result.current.items).toHaveLength(2);
      expect(result.current.getItemCount()).toBe(2);

      // Remove completely second product
      act(() => {
        result.current.removeFromCart(2);
      });

      expect(result.current.items).toHaveLength(1);
      expect(result.current.getItemCount()).toBe(1);
      expect(result.current.items[0].id).toBe(1);
    });
  });
});
