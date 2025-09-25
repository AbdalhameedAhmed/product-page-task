import star from "@/assets/Star.svg";
import SectionLayout from "./layouts/SectionLayout";
export default function Popular() {
  const products = [
    {
      id: 1,
      name: "Whistles",
      price: "£26",
      originalPrice: "£52",
      rating: 4.5,
      reviews: 1258,
      image:
        "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=400",
      describtion: "Wide Leg Cropped Jeans,Denim",
    },
    {
      id: 2,
      name: "John Lewis ANYDAY",
      price: "£26",
      originalPrice: "£40",
      rating: 4.0,
      reviews: 896,
      image:
        "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=400",
      describtion: "Long Sleeve Utility Shirt, Navy, 6",
    },
    {
      id: 3,
      name: "John Lewis ANYDAY",
      price: "£32",
      originalPrice: null,
      rating: 4.5,
      reviews: 423,
      image:
        "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=400",
      describtion: "Stripe Curved Hem Shirt, Blue",
    },
    {
      id: 4,
      name: "John Lewis ANYDAY",
      price: "£40",
      originalPrice: null,
      rating: 4.6,
      reviews: 234,
      image:
        "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=400",

      describtion: "Denim Overshirt, Mid Wash",
    },
    {
      id: 5,
      name: "John Lewis",
      price: "£70",
      originalPrice: null,
      rating: 4.3,
      reviews: 156,
      image:
        "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=400",
      describtion: "Linen Blazer, Navy",
    },
  ];

  return (
    <SectionLayout
      title="Popular this week"
      showViewAll={true}
      className="border-none"
    >
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="mb-3 aspect-square overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium sm:text-lg">{product.name}</h3>
              <p className="text-lg font-bold sm:text-xl">{product.price}</p>
              <p className="text-[13px] text-[#7A7A7A] sm:text-base">
                {product.describtion}
              </p>
              <div className="flex items-center gap-2 md:gap-x-2">
                <img src={star} alt="product rate" className="w-3 sm:w-6" />
                <div className="text-xs sm:text-base">{product.rating}</div>
                <span className="text-xs text-[#666666] sm:text-base">
                  {product.reviews} Sold
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
