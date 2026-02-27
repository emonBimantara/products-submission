import FeaturedProducts from "@/components/page/featured-products";
import HeroSection from "@/components/page/hero-section";
import RecentlyLaunchedProducts from "@/components/page/recently-launced-products";
import { LoaderIcon } from "lucide-react";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <HeroSection />
        <FeaturedProducts />
        <Suspense fallback={
          <div className="wrapper flex items-center gap-2">
            Loading Recenly Launched Products...
            <LoaderIcon className="size-4 animate-spin" />
          </div>
        }>
            <RecentlyLaunchedProducts />
        </Suspense>
    </div>
  );
}
