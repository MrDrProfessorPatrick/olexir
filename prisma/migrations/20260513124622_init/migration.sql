-- CreateEnum
CREATE TYPE "BlockType" AS ENUM ('TEXT', 'IMAGE', 'CARUSEL');

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "imgUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostBlock" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "type" "BlockType" NOT NULL,
    "title" TEXT,
    "className" TEXT,
    "text" TEXT,
    "imageUrl" TEXT,
    "videoUrl" TEXT,
    "carouselId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PostBlock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Carousel" (
    "id" TEXT NOT NULL,
    "blockId" TEXT NOT NULL,

    CONSTRAINT "Carousel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarouselItem" (
    "id" TEXT NOT NULL,
    "carouselId" TEXT NOT NULL,
    "src" TEXT NOT NULL,
    "index" INTEGER NOT NULL,
    "text" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CarouselItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Carousel_blockId_key" ON "Carousel"("blockId");

-- AddForeignKey
ALTER TABLE "PostBlock" ADD CONSTRAINT "PostBlock_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostBlock" ADD CONSTRAINT "PostBlock_carouselId_fkey" FOREIGN KEY ("carouselId") REFERENCES "Carousel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarouselItem" ADD CONSTRAINT "CarouselItem_carouselId_fkey" FOREIGN KEY ("carouselId") REFERENCES "Carousel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
