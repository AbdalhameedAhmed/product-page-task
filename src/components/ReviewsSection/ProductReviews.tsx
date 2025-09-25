import useGetWindowSize from "@/hooks/useGetWindowSize";
import { Star } from "lucide-react";
import CircularProgressBar from "../shared/CircularProgress";

export default function ProductReviews() {
  const { width } = useGetWindowSize();

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={20}
        className={
          i < Math.floor(rating)
            ? "fill-current text-[#FFA439]"
            : "text-gray-300"
        }
      />
    ));
  };

  return (
    <div className="mb-6 flex flex-col gap-6 rounded-lg border-[1px] border-dashed border-[#B8B8B8] bg-white p-6 sm:flex-row sm:justify-between md:items-start">
      <div className="flex items-center gap-4">
        <CircularProgressBar
          sqSize={width && width > 640 ? 100 : 80}
          strokeWidth={6}
          percentage={(4.5 / 5) * 100}
          percentageText="4.5"
        />
        <div className="flex flex-col gap-2">
          <div className="flex">{renderStars(4.5)}</div>
          <div className="text-sm text-[#525252]">1,258 Total reviews</div>
        </div>
      </div>

      {/* Rating breakdown */}
      <div className="max-w-[800px] space-y-2 sm:flex-1 md:space-y-3">
        {[5.0, 4.0, 3.0, 2.0, 1.0].map((star) => (
          <div key={star} className="flex items-center text-sm">
            <span className="w-[17px] text-xs font-semibold md:w-6 md:text-lg">
              {star.toFixed(1)}
            </span>
            <Star className="mx-2 w-4 fill-current text-[#FFA439] md:w-5" />
            <div className="mx-2 h-2 flex-1 rounded-full bg-gray-200">
              <div
                className="h-2 rounded-full bg-black"
                style={{
                  width:
                    star === 5
                      ? "80%"
                      : star === 4
                        ? "15%"
                        : star === 3
                          ? "3%"
                          : "0",
                }}
              />
            </div>
            <span className="w-8 text-right text-xs md:w-9 md:text-base">
              {star === 5
                ? "2823"
                : star === 4
                  ? "38"
                  : star === 3
                    ? "4"
                    : star === 2
                      ? "0"
                      : "0"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
