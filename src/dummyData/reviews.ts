import review1Image from "@/assets/review1.png";
import review2Image from "@/assets/review2.png";
import review3Image from "@/assets/review3.png";
import review4Image from "@/assets/review4.png";
import type { Review } from "@/types/shared/reviews";
export const reviews: Review[] = [
  {
    id: 1,
    rating: 5,
    title: "This is amazing product! love it.",
    author: "Dominic Howard",
    date: "July 15, 2021",
    helpful: 115,
    verified: true,
    image: review1Image,
  },
  {
    id: 2,
    rating: 5,
    title: "This is amazing product! love it.",
    author: "Christie Rollins Hunt",
    date: "July 15, 2021",
    helpful: 89,
    verified: true,
    image: review2Image,
  },
  {
    id: 3,
    rating: 5,
    title: "This is amazing product! love it.",
    author: "Matthew Murphy",
    date: "July 15, 2021",
    helpful: 67,
    verified: true,
    image: review3Image,
  },
  {
    id: 4,
    rating: 5,
    title: "This is amazing product! love it.",
    author: "Richard Richards",
    date: "July 15, 2021",
    helpful: 34,
    verified: true,
    image: review4Image,
  },
];
