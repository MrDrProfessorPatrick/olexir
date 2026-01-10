'use client'
import React, { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import CarouselItem from './CaruselItem'

import BigImage from './BigImage'

export default function CaruselHome({ images, isBigCarousel }) {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: false,
            align: 'start',
        }
        // [Autoplay({ delay: 4000, stopOnInteraction: true })]
    )

    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState([])

    const [bigImageSrc, setBigImageSrc] = useState('')
    const [imageIndexes, setImageIndexes] = useState(
        new Array(images.length).fill(null)
    )
    const [bigImageIndex, setBigImageIndex] = useState(null)

    useEffect(() => {
        for (let index of imageIndexes) {
            if (index !== null) {
                setBigImageIndex(index)
                break
            }
        }
    }, [imageIndexes])

    const selectImg = useCallback(
        (currIndex) => {
            const selected = images.find((img) => img.index === currIndex)
            if (selected) {
                setImageIndexes((prev) =>
                    prev.map((val, i) => (i === currIndex ? currIndex : val))
                )
                setBigImageIndex(selected.index)
            }
        },
        [images]
    )

    const deSelectImg = useCallback(() => {
        setImageIndexes((prev) =>
            prev.map((val, i) => (i !== null ? null : val))
        )
    }, [])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        setScrollSnaps(emblaApi.scrollSnapList())
        emblaApi.on('select', onSelect)
        onSelect()
    }, [emblaApi, onSelect])

    const scrollPrev = () => emblaApi?.scrollPrev()
    const scrollNext = () => emblaApi?.scrollNext()
    const scrollTo = (index) => emblaApi?.scrollTo(index)

    return (
        <div className="relative pt-2 lg:pt-2 pb-20 px-0 xs:px-6">
            {bigImageSrc && (
                <BigImage
                    src={bigImageSrc}
                    alt={`Carousel image ${selectedIndex + 1}`}
                    setBigImageSrc={setBigImageSrc}
                    bigImageIndex={bigImageIndex}
                    deSelectImg={deSelectImg}
                    text={images[bigImageIndex]?.text}
                />
            )}

            <div className="flex items-center justify-center">
                <div className="flex items-center justify-center">
                    <button onClick={scrollPrev} className="cursor-pointer">
                        <ChevronLeft color="white" className="z-10" />
                    </button>
                </div>
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {images.map((imgObj, currIndex) => {
                            return (
                                <CarouselItem
                                    key={imgObj.index}
                                    src={imgObj.src}
                                    index={imgObj.index}
                                    setBigImageSrc={setBigImageSrc}
                                    imageIndex={imageIndexes[currIndex]}
                                    selectImg={selectImg}
                                    isBigCarousel={isBigCarousel}
                                />
                            )
                        })}
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button onClick={scrollNext} className="cursor-pointer">
                        <ChevronRight color="white" className="z-1000" />
                    </button>
                </div>
            </div>

            <div className="flex justify-center gap-2 mt-4">
                {scrollSnaps.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={`w-3 h-3 rounded-full ${
                            index === selectedIndex ? 'bg-black' : 'bg-gray-400'
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}
