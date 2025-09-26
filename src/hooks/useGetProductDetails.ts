import apiReq from "@/services/apiReq";
import type { ProductDetails } from "@/types/hooks/productDetails";
import { useQuery } from "@tanstack/react-query";

export const useGetProductDetails = () => {
  const {
    data: productDetails,
    isPending,
    error,
  } = useQuery<ProductDetails>({
    queryKey: ["productDetails"],
    queryFn: async () => {
      return await apiReq(
        "GET",
        "/products/slug/clear-theme/Sneakers12?join=reviews",
      );
    },
    retry: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return { productDetails, isPending, error };
};
