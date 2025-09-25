import MainPage from "@/pages/MainPage";
import "./App.css";
import BreadCrumbs from "./components/BreadCrumbs";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductGallery from "./components/ProductGallery";
import RelatedProducts from "./components/RelatedProducts";
import ProductReviews from "./components/ReviewsSection/";

function App() {
  return (
    <>
      <MainPage />
      <Header />
      <BreadCrumbs
        pathArr={[
          "Homepage",
          "Women",
          "Women's Shirts & Tops",
          "Long Sleeve Overshirt, Khaki, 6",
        ]}
      />

      <main className="container mx-auto w-[90%] border-b border-dashed border-[#A3A3A3] pb-14 sm:pb-20">
        <div className="gap-32 lg:flex">
          <ProductGallery />
          <ProductDetails />
        </div>
      </main>

      <RelatedProducts />

      <ProductReviews />
    </>
  );
}

export default App;
