'use client'
import React from 'react'

import { AnimatePresence, motion } from 'framer-motion'

const CarouselItem = React.memo(function CarouselItem({
    src,
    index,
    setBigImageSrc,
    selectImg,
    imageIndex,
    isBigCarousel,
}) {
    function itemClick(index, src) {
        setBigImageSrc(src)
        selectImg(index)
    }

    let itemsQuantity = isBigCarousel
        ? 'flex-[0_0_100%] md:flex-[0_0_100%] lg:flex-[0_0_50%] xl:flex-[0_0_33.333%]'
        : 'flex-[0_0_100%] md:flex-[0_0_50%] xl:flex-[0_0_33.333%] 3xl:flex-[0_0_33.333%]'

    let cardSize = isBigCarousel
        ? 'w-[250px] h-[250px] xs:w-[290px] xs:h-[290px] sm:w-[420px] sm:h-[420px] md:w-[450px] md:h-[450px] lg:w-[360px] lg:h-[360px] xl:w-[365px] xl:h-[365px] 2xl:w-[400px] 2xl:h-[400px] 3xl:w-[500px] 3xl:h-[500px]'
        : 'w-[250px] h-[250px] xs:w-[290px] xs:h-[290px] sm:w-[300px] sm:h-[300px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[380px] xl:h-[380px] 3xl:w-[500px] 3xl:h-[500px]'

    return (
        <motion.div
            key={src}
            className={`flex  items-center ${itemsQuantity} justify-center content-center p-0 xs:p-4`}
            onClick={() => itemClick(index, src)}
            layoutId={`expandable-image-${src}`} // animation problem is here
            transition={{
                layout: { duration: 0 },
            }}
        >
            <div
                className={`relative ${cardSize} cursor-pointer rounded-lg overflow-hidden`}
            >
                {imageIndex === null && (
                    <motion.img
                        src={src}
                        key={src}
                        alt={`Carousel image ${imageIndex}`}
                        className="object-cover w-full h-full"
                    />
                )}
            </div>
        </motion.div>
    )
})

export default CarouselItem
