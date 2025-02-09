"use server"

import { prisma } from "@/db/prisma"
import { convertToPlainObject } from "../utils"
import { LATEST_PRODUCTS_LIMIT } from "../constants"

// get latest products
export async function getLatestProducts() {
	try {
		const data = await prisma.product.findMany({
			take: LATEST_PRODUCTS_LIMIT,
			orderBy: {
				createdAt: 'desc'
			}
		})
		return convertToPlainObject(data)
	} catch (error) {
		console.error("Error fetching latest products:", error)
		throw new Error("Could not find latest products")
	}
}

// get product by slug

export async function getProductBySlug(slug: string){
	try {
		return await prisma.product.findFirst({
			where: {
				slug
			}
		})
	} catch (error) {
		console.error('Error fetching product by slug:', error)
		throw new Error('Could not find product.')
	}
}