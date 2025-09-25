import SectionLayout from "../layouts/SectionLayout";
import ProductReviews from "./ProductReviews";
import ReviewsList from "./ReviewsList";

export default function ReviewsSection() {
  return (
    <SectionLayout title="Product Reviews">
      <ProductReviews />
      <ReviewsList />
    </SectionLayout>
  );
}
