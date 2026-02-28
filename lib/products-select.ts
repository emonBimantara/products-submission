import { db } from "@/db"
import { products } from "@/db/schema"
import { desc, eq } from "drizzle-orm";
import { cacheLife } from "next/cache";
import { connection } from "next/server";

// get all products that approved
export async function getAllProducts(){
    const productsData = await db
        .select()
        .from(products)
        .where(eq(products.status, "approved"))
        .orderBy(desc(products.voteCount))

    return productsData
}

// get featured products 
// "use cache" to enable server-side caching
export async function getFeaturedProducts() {
    "use cache"

    cacheLife("minutes") // updating cache every minute

    const productsData = await db
        .select()
        .from(products)
        .orderBy(desc(products.voteCount));

    return productsData
}

// getting list from the fetched featured product but filtering from memory side not db side 
// dont cache this function
export async function getRecentlyLaunchedProducts() {
    await connection()

    // give 3 seconds delay to give a loading while getting list from the fetched featured product
    await new Promise((resolve) => setTimeout(resolve, 3000))

    const productsData = await getAllProducts()
    const oneWeekAgo = new Date()
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)

    return productsData.filter(
        (product) => product.createdAt && new Date(product.createdAt.toISOString()) > oneWeekAgo
    )
}