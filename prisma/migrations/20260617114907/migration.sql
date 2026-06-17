/*
  Warnings:

  - You are about to drop the column `blockId` on the `Carousel` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[carouselId]` on the table `PostBlock` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `position` to the `PostBlock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "BlockType" ADD VALUE 'VIDEO';

-- DropIndex
DROP INDEX "Carousel_blockId_key";

-- AlterTable
ALTER TABLE "Carousel" DROP COLUMN "blockId";

-- AlterTable
ALTER TABLE "PostBlock" ADD COLUMN     "position" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "PostBlock_carouselId_key" ON "PostBlock"("carouselId");
