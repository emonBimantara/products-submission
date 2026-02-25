import { db } from "@/db"
import { products } from "@/db/schema"
import { desc } from "drizzle-orm";

export async function getFeaturedProducts() {
    const productsData = await db
        .select()
        .from(products)
        .orderBy(desc(products.voteCount));

    return productsData
}