import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";
import portfolio8 from "@/assets/portfolio-8.jpg";

export type Category = "All Pics" | "Portrait" | "Ambience" | "Events" | "Products" | "Wedding";

export interface PortfolioItem {
  src: string;
  alt: string;
  category: Exclude<Category, "All Pics">;
}

export const portfolioItems: PortfolioItem[] = [
  { src: portfolio1, alt: "Bridal portrait with traditional jewelry", category: "Wedding" },
  { src: portfolio2, alt: "Elegant bride in ivory lehenga", category: "Wedding" },
  { src: portfolio3, alt: "Pearl jewelry close-up portrait", category: "Portrait" },
  { src: portfolio4, alt: "Editorial portrait with statement earrings", category: "Portrait" },
  { src: portfolio5, alt: "Yellow ethnic kurta studio shoot", category: "Ambience" },
  { src: portfolio6, alt: "Outdoor floral co-ord set fashion shoot", category: "Ambience" },
  { src: portfolio7, alt: "Mood portrait with dramatic lighting", category: "Portrait" },
  { src: portfolio8, alt: "Cinematic white gown architectural shoot", category: "Ambience" },
];

export const categories: Category[] = ["All Pics", "Portrait", "Ambience", "Events", "Products", "Wedding"];
