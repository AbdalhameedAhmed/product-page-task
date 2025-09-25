import { ChevronLeft, ChevronRight, Heart, Share2 } from "lucide-react";
import { useState } from "react";

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <div className="lg:w-1/2">
      <div className="relative mb-5 flex gap-3 sm:mb-6 sm:gap-8">
        <img
          src={images[selectedImage]}
          alt="Long Sleeve Overshirt"
          className="h-96 flex-1 rounded-lg object-cover md:h-[600px]"
        />
        <div className="flex shrink-0 flex-col items-center justify-between">
          <div className="flex flex-col gap-5">
            <button className="rounded-lg bg-[#F2F2F2] p-3 sm:p-4">
              <Heart size={20} />
            </button>
            <button className="rounded-lg bg-[#F2F2F2] p-3 sm:p-4">
              <Share2 size={20} />
            </button>
          </div>
          <div className="flex flex-col gap-5">
            <button
              className="rounded-lg bg-[#F2F2F2] p-3 sm:p-4"
              onClick={() =>
                setSelectedImage((prev) =>
                  prev > 0 ? prev - 1 : images.length - 1,
                )
              }
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="rounded-lg bg-[#F2F2F2] p-3 sm:p-4"
              onClick={() =>
                setSelectedImage((prev) =>
                  prev < images.length - 1 ? prev + 1 : 0,
                )
              }
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Thumbnail images */}
      <div className="flex space-x-2 overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`w-14 flex-shrink-0 overflow-hidden rounded-lg border-2 md:h-20 md:w-20 ${
              selectedImage === index ? "border-gray-900" : "border-gray-200"
            }`}
          >
            <img
              src={image}
              alt={`Product view ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
