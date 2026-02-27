import ProductSubmitForm from "@/components/page/product-submit-form";
import SectionHeader from "@/components/page/section-header";
import { SparklesIcon } from "lucide-react";

export default function SubmitPage() {
    return (
        <div>
            <section className="py-20">
                <div className="mb-12">
                    <SectionHeader
                        title="Submit Your Product"
                        icon={SparklesIcon}
                        description="Share your creation with the community. Your submission will be reviewed before going live."
                    />
                </div>

                <div className="max-w-2xl mx-auto">
                    <ProductSubmitForm />
                </div>
            </section>
        </div>
    )
}
