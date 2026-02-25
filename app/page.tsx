import FeaturedProducts from "@/components/page/featured-products";
import HeroSection from "@/components/page/hero-section";
import RecentlyLaunchedProducts from "@/components/page/recently-launced-products";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FeaturedProducts/>
      <RecentlyLaunchedProducts />
    </div>
  );
}
