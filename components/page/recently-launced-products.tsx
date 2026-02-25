import { Calendar1Icon, RocketIcon } from "lucide-react";
import SectionHeader from "./section-header";
import ProductCard from "./product-card";
import EmptyState from "./empty-state";

const recentlyLaunchedProducts = []

export default function RecentlyLaunchedProducts() {
    return (
        <section className="py-20">
            <div className="wrapper space-y-8">
                <SectionHeader
                    title="Recently Launched"
                    icon={RocketIcon}
                    description="The most recently launched products on the platform "
                />
                
                    {recentlyLaunchedProducts.length > 0 ? (
                        <div className="grid-wrapper">
                            {recentlyLaunchedProducts.map((product) =>
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            )}
                        </div>
                    ) : (
                        <EmptyState 
                            message="No products launched in the last week. Check back soon for new launches."
                            icon={Calendar1Icon}
                        />
                    )}
                        
                    
                
            </div>
        </section>
    )
}
