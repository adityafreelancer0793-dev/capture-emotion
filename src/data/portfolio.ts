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
import portfolio16 from "@/assets/portfolio-16.jpg";
import portfolio17 from "@/assets/portfolio-17.jpg";
import portfolio18 from "@/assets/portfolio-18.jpg";
import portfolio19 from "@/assets/portfolio-19.jpg";
import portfolio20 from "@/assets/portfolio-20.jpg";
import portfolio21 from "@/assets/portfolio-21.jpg";
import portfolio22 from "@/assets/portfolio-22.jpg";
import portfolio23 from "@/assets/portfolio-23.jpg";
import portfolio24 from "@/assets/portfolio-24.jpg";
import portfolioNew1 from "@/assets/portfolio-new-1.jpg";
import portfolioNew2 from "@/assets/portfolio-new-2.jpg";
import portfolioNew3 from "@/assets/portfolio-new-3.jpg";
import portfolioNew4 from "@/assets/portfolio-new-4.jpg";
import portfolioNew5 from "@/assets/portfolio-new-5.jpg";
import portfolioNew6 from "@/assets/portfolio-new-6.jpg";

export type Category = "All Pics" | "Portrait" | "Ads Work" | "Events" | "Products" | "Wedding";

export interface PortfolioItem {
  src: string;
  alt: string;
  category: Exclude<Category, "All Pics" | "Ads Work">;
}

export const portfolioItems: PortfolioItem[] = [
  // New uploads first — exact order
  { src: portfolioNew1, alt: "Black evening gown event portrait at Rasha's celebration", category: "Events" },
  { src: portfolioNew2, alt: "Glamorous birthday celebration setup with disco backdrop", category: "Events" },
  { src: portfolioNew3, alt: "Hema Malini in regal maroon Banarasi saree portrait", category: "Portrait" },
  { src: portfolioNew4, alt: "Elegant celebrity portrait in maroon silk saree", category: "Portrait" },
  { src: portfolioNew5, alt: "Soha Ali Khan in pearl draped white saree at home", category: "Portrait" },
  { src: portfolioNew6, alt: "Cinematic editorial portrait with bokeh fairy lights", category: "Portrait" },
  // The two specifically requested portraits next
  { src: portfolio17, alt: "Joyful portrait with mosaic backdrop", category: "Portrait" },
  { src: portfolio16, alt: "Elegant pearl draped saree portrait", category: "Portrait" },
  // Existing portfolio
  { src: portfolio1, alt: "Bridal portrait with traditional jewelry", category: "Wedding" },
  { src: portfolio2, alt: "Elegant bride in ivory lehenga", category: "Wedding" },
  { src: portfolio3, alt: "Pearl jewelry close-up portrait", category: "Portrait" },
  { src: portfolio4, alt: "Editorial portrait with statement earrings", category: "Portrait" },
  { src: portfolio5, alt: "Yellow ethnic kurta studio shoot", category: "Portrait" },
  { src: portfolio6, alt: "Outdoor floral co-ord set fashion shoot", category: "Portrait" },
  { src: portfolio7, alt: "Mood portrait with dramatic lighting", category: "Portrait" },
  { src: portfolio8, alt: "Cinematic white gown architectural shoot", category: "Portrait" },
  { src: portfolio9, alt: "Ethnic fashion portrait in white embroidered jacket", category: "Portrait" },
  { src: portfolio10, alt: "Full length traditional dance portrait with dandiya", category: "Portrait" },
  { src: portfolio11, alt: "LaFace night cream luxury product photography", category: "Products" },
  { src: portfolio12, alt: "Gourmet chocolate dessert plating shoot", category: "Products" },
  { src: portfolio13, alt: "Artisan pizza food photography on wood", category: "Products" },
  { src: portfolio18, alt: "Gold diamond ring product photography", category: "Products" },
  { src: portfolio19, alt: "Pre-wedding couple shoot with marigold petals", category: "Wedding" },
  { src: portfolio20, alt: "Heritage kurta menswear portrait", category: "Portrait" },
  { src: portfolio21, alt: "Festive menswear duo portrait", category: "Portrait" },
  { src: portfolio22, alt: "Embroidered designer kurta menswear portrait", category: "Portrait" },
  { src: portfolio23, alt: "Beatlab DJ night live event coverage", category: "Events" },
  { src: portfolio24, alt: "Fashion editorial portrait with statement jacket", category: "Portrait" },
];

export const categories: Category[] = ["All Pics", "Ads Work", "Portrait", "Events", "Products", "Wedding"];

export interface AdVideo {
  id: string;
  title: string;
  url: string;
}

const ytId = (url: string) => {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/);
  return m ? m[1] : "";
};

const adUrls = [
  "https://youtu.be/GXtTh6q1-5Y",
  "https://youtu.be/UNgeg8k_eJo",
  "https://youtu.be/bnN8sPUKDN8",
  "https://youtu.be/Cr3R68TOrvE",
  "https://youtu.be/rVvAMnZ7IsM",
  "https://youtu.be/95S5aZtP4U0",
  "https://youtu.be/hPmHopqCljg",
  "https://youtu.be/guUBBKsA4u4",
];

export const adVideos: AdVideo[] = adUrls.map((url, i) => ({
  id: ytId(url),
  title: `Capture Emotions Ad Film ${String(i + 1).padStart(2, "0")}`,
  url,
}));

// First image (new-1) used for homepage recent work
export const homepageRecent: PortfolioItem[] = [
  portfolioItems[0], // 1st uploaded
  portfolioItems[2], // 3rd uploaded
];
