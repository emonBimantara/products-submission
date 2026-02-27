"use client"

import { SparklesIcon } from "lucide-react"
import { Button } from "../ui/button"
import FormField from "./form-field"
import { addProduct } from "@/lib/products-post"

export default function ProductSubmitForm() {
    const handleSubmit = async (formData: FormData) => {
        await addProduct(formData)
    }

    return (
        <form className="space-y-6" action={handleSubmit}>
            <FormField
                label="Product Name"
                name="name"
                id="name"
                placeholder="My Awesome Product"
                required
                onChange={() => { }}
                error=""
            />
            <FormField
                label="Slug"
                name="slug"
                id="slug"
                placeholder="my-awesome-product"
                required
                onChange={() => { }}
                helperText="URL-friendly version of your product name"
                error=""
            />

            <FormField
                label="Tagline"
                name="tagline"
                id="tagline"
                placeholder="A brief, catchy description"
                required
                onChange={() => { }}
                error=""
            />

            <FormField
                label="Description"
                name="description"
                id="description"
                placeholder="Tell us more about your product..."
                required
                onChange={() => { }}
                error=""
            />

            <FormField
                label="Website URL"
                name="websiteUrl"
                id="websiteUrl"
                placeholder="https://yourproduct.com"
                required
                onChange={() => { }}
                error=""
                helperText="Enter your product's website or landing page"
            />
            <FormField
                label="Tags"
                name="tags"
                id="tags"
                placeholder="AI, Productivity, SaaS"
                required
                onChange={() => { }}
                error=""
                helperText="Comma-separated tags (e.g., AI, SaaS, Productivity)"
            />

            <Button type="submit" size="lg" className="w-full">
                <SparklesIcon className="size-4" />Submit Product
            </Button>
        </form>
    )
}
