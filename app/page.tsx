import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import CategoryBanners from "@/components/CategoryBanners";
import PerfumeCollection from "@/components/PerfumeCollection";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div id="content" role="main">
      <HeroSection />
      <StorySection />
      <CategoryBanners />
      <PerfumeCollection />
      <ProductGrid products={products} />
    </div>
  );
}

