/*
  Warnings:

  - The `id` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `brand` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "banner" TEXT,
ADD COLUMN     "brand" TEXT NOT NULL,
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" INTEGER NOT NULL,
ADD COLUMN     "images" TEXT[],
ADD COLUMN     "isFeatured" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "numReviews" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "price" DECIMAL(12,2) NOT NULL DEFAULT 0,
ADD COLUMN     "rating" DECIMAL(12,2) NOT NULL DEFAULT 0,
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("id");

-- RenameIndex
ALTER INDEX "Product_slug_key" RENAME TO "product_slug_idx";
