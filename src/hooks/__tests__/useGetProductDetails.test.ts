/**
 * @jest-environment jsdom
 */
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { createElement } from "react";

// Mock the API service
const mockApiReq = jest.fn();
jest.mock("../../services/apiReq", () => ({
  __esModule: true,
  default: mockApiReq,
}));

// Import after mocking
import { useGetProductDetails } from "../../hooks/useGetProductDetails";

// Mock product details type
interface ProductDetails {
  id: string;
  name: string;
  price: number;
  sale_price: number;
  description: string;
  slug: string;
  quantity: number;
  is_free_shipping: boolean;
  variations: Array<{
    id: string;
    name: string;
    props: Array<{
      id: string;
      name: string;
      variation_id: string;
    }>;
  }>;
  variants: Array<{
    id: string;
    variation_props: Array<{
      variation_prop: string;
    }>;
  }>;
  categories: Array<{
    id: string;
    name: string;
    show_in_header: boolean;
  }>;
}

// Create a test wrapper with QueryClient
const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return ({ children }: { children: ReactNode }) =>
    createElement(QueryClientProvider, { client: queryClient }, children);
};

describe("useGetProductDetails", () => {
  const mockProductDetails: ProductDetails = {
    id: "1",
    name: "Test Sneakers",
    price: 100,
    sale_price: 80,
    description: "High quality sneakers for athletes",
    slug: "test-sneakers",
    quantity: 50,
    is_free_shipping: true,
    variations: [
      {
        id: "var_1",
        name: "color",
        props: [
          {
            id: "prop_1",
            name: "Red",
            variation_id: "var_1",
          },
          {
            id: "prop_2",
            name: "Blue",
            variation_id: "var_1",
          },
        ],
      },
    ],
    variants: [
      {
        id: "variant_1",
        variation_props: [
          {
            variation_prop: "Red",
          },
        ],
      },
    ],
    categories: [
      {
        id: "cat_1",
        name: "Footwear",
        show_in_header: true,
      },
    ],
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Successful API response", () => {
    it("should return product details when API call succeeds", async () => {
      mockApiReq.mockResolvedValueOnce(mockProductDetails);

      const { result } = renderHook(() => useGetProductDetails(), {
        wrapper: createWrapper(),
      });

      expect(result.current.isPending).toBe(true);
      expect(result.current.productDetails).toBeUndefined();
      expect(result.current.error).toBe(null);

      await waitFor(() => {
        expect(result.current.isPending).toBe(false);
      });

      expect(result.current.productDetails).toEqual(mockProductDetails);
      expect(result.current.error).toBe(null);
      expect(mockApiReq).toHaveBeenCalledWith(
        "GET",
        "/products/slug/clear-theme/Sneakers12?join=reviews",
      );
    });

    it("should have correct product details structure", async () => {
      mockApiReq.mockResolvedValueOnce(mockProductDetails);

      const { result } = renderHook(() => useGetProductDetails(), {
        wrapper: createWrapper(),
      });

      await waitFor(() => {
        expect(result.current.isPending).toBe(false);
      });

      const productDetails = result.current.productDetails!;

      // Test main product properties
      expect(productDetails.id).toBe("1");
      expect(productDetails.name).toBe("Test Sneakers");
      expect(productDetails.price).toBe(100);
      expect(productDetails.sale_price).toBe(80);
      expect(productDetails.description).toBe(
        "High quality sneakers for athletes",
      );
      expect(productDetails.slug).toBe("test-sneakers");
      expect(productDetails.quantity).toBe(50);
      expect(productDetails.is_free_shipping).toBe(true);

      // Test variations structure
      expect(productDetails.variations).toHaveLength(1);
      expect(productDetails.variations[0].name).toBe("color");
      expect(productDetails.variations[0].props).toHaveLength(2);

      // Test variants structure
      expect(productDetails.variants).toHaveLength(1);
      expect(productDetails.variants[0].variation_props).toHaveLength(1);
      expect(productDetails.variants[0].variation_props[0].variation_prop).toBe(
        "Red",
      );

      // Test categories structure
      expect(productDetails.categories).toHaveLength(1);
      expect(productDetails.categories[0].name).toBe("Footwear");
      expect(productDetails.categories[0].show_in_header).toBe(true);
    });
  });

  describe("API error handling", () => {
    it("should handle API error", async () => {
      const errorMessage = "Failed to fetch product details";
      mockApiReq.mockRejectedValueOnce(new Error(errorMessage));

      const { result } = renderHook(() => useGetProductDetails(), {
        wrapper: createWrapper(),
      });

      expect(result.current.isPending).toBe(true);

      await waitFor(() => {
        expect(result.current.isPending).toBe(false);
      });

      expect(result.current.productDetails).toBeUndefined();
      expect(result.current.error).toBeTruthy();
    });

    it("should not retry on error", async () => {
      mockApiReq.mockRejectedValue(new Error("API Error"));

      const { result } = renderHook(() => useGetProductDetails(), {
        wrapper: createWrapper(),
      });

      await waitFor(() => {
        expect(result.current.isPending).toBe(false);
      });

      // Should only be called once due to retry: false
      expect(mockApiReq).toHaveBeenCalledTimes(1);
    });
  });

  describe("Query configuration", () => {
    it("should use correct API endpoint", async () => {
      mockApiReq.mockResolvedValueOnce(mockProductDetails);

      renderHook(() => useGetProductDetails(), {
        wrapper: createWrapper(),
      });

      await waitFor(() => {
        expect(mockApiReq).toHaveBeenCalledWith(
          "GET",
          "/products/slug/clear-theme/Sneakers12?join=reviews",
        );
      });
    });
  });
});
