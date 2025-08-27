"use client";
import React, { useEffect, useState, useCallback } from "react";

import { AnimatePresence, motion } from "framer-motion";

const CarouselItem = React.memo(function CarouselItem({
  src,
  index,
  setBigImageSrc,
  selectImg,
  imageIndex,
}) {
  function itemClick(index, src) {
    setBigImageSrc(src);
    selectImg(index);
  }
  console.log("carouselItem index", imageIndex);

  return (
    <motion.div
      key={index}
      className="flex-[0_0_100%] 2xl:flex-[0_0_33.333%] xl:flex-[0_0_50%] lg:flex-[0_0_50%] md:flex-[0_0_100%] sm:flex-[0_0_100%] flex items-center justify-center content-center p-4"
      onClick={() => itemClick(index, src)}
    >
      <div className="relative w-[250px] h-[250px] 2xl:w-[500px] xl:w-[500px] lg:w-[500px] md:w-[500px] 2xl:w-[500px] xl:h-[500px] lg:h-[500px] md:h-[500px] sm:w-[400px] sm:h-[400px] cursor-pointer rounded-lg overflow-hidden">
        {imageIndex === null && (
          <motion.img
            src={src}
            key={index}
            layoutId={`expandable-image-${index}`} // animation problem is here
            transition={{
              layout: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
            }}
            alt={`Carousel image ${imageIndex}`}
            className="object-cover w-full h-full"
          />
        )}
      </div>
    </motion.div>
  );
});

export default CarouselItem;
