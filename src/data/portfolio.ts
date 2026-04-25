import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";
import portfolio8 from "@/assets/portfolio-8.jpg";
import portfolio9 from "@/assets/portfolio-9.jpg";
import portfolio10 from "@/assets/portfolio-10.jpg";
import portfolio11 from "@/assets/portfolio-11.jpg";
import portfolio12 from "@/assets/portfolio-12.jpg";
import portfolio13 from "@/assets/portfolio-13.jpg";
import portfolio14 from "@/assets/portfolio-14.jpg";
import portfolio15 from "@/assets/portfolio-15.jpg";

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
  { src: portfolio9, alt: "Ethnic fashion portrait in white embroidered jacket", category: "Portrait" },
  { src: portfolio10, alt: "Full length traditional dance portrait with dandiya", category: "Portrait" },
  { src: portfolio11, alt: "LaFace night cream luxury product photography", category: "Products" },
  { src: portfolio12, alt: "Gourmet chocolate dessert plating shoot", category: "Products" },
  { src: portfolio13, alt: "Artisan pizza food photography on wood", category: "Products" },
  { src: portfolio14, alt: "Embroidered green ethnic heels product shoot", category: "Products" },
  { src: portfolio15, alt: "Handcrafted leather sandals on marble backdrop", category: "Products" },
];

export const categories: Category[] = ["All Pics", "Portrait", "Ambience", "Events", "Products", "Wedding"];
