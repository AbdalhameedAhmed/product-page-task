import { products } from "@/dummyData/products";
import SectionLayout from "./layouts/SectionLayout";
import ProductCard from "./shared/ProductCard";

export default function Popular() {
  return (
    <SectionLayout
      title="Popular this week"
      showViewAll={true}
      className="border-none"
    >
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </SectionLayout>
  );
}
