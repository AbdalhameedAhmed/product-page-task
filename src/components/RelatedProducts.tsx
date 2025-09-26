import { useProductStore } from "@/store/productStore";
import SectionLayout from "./layouts/SectionLayout";
import ProductCard from "./shared/ProductCard";
const RelatedProducts = () => {
  const { products } = useProductStore();

  return (
    <SectionLayout title="Related Products" showViewAll={true}>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default RelatedProducts;
