"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CaruselHome() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const images = [
    "/CaruselHome1.jpg",
    "/CaruselHome2.png",
    "/CaruselHome3.png",
    "/CaruselHome4.jpg",
    "/CaruselHome5.png",
  ];

  // Update selected index on scroll
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Setup Embla callbacks
  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  const scrollTo = (index) => emblaApi?.scrollTo(index);

  return (
    <div className="relative pt-84 pb-84 2xl:pl-34 2xl:pr-34 xl:pl-24 xl:pr-24 lg:pl-16 lg:pr-16 md:pl-8 md:pr-8 sm:pl-4 sm:pr-4 pl-2 pr-2 bg-[url('/caruselBg.webp')] bg-cover bg-center">
      <div className="overflow-hidden " ref={emblaRef}>
        <div className="flex ">
          {images.map((src, index) => (
            <div
              className="flex-[0_0_100%] md:flex-[0_0_33.3333%] flex items-center justify-center content-center p-4"
              key={index}
            >
              <div className="relative w-[250px] h-[250px] 2xl:w-[500px] xl:w-[500px] lg:w-[500px] md:w-[500px] sm:w-[400px] 2xl:w-[500px] xl:h-[500px] lg:h-[500px] md:h-[500px] sm:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={src}
                  alt={`Carousel image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-10 -translate-y-1/2 z-10 bg-white/70 hover:bg-white rounded-full p-2 shadow"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-10 -translate-y-1/2 z-10 bg-white/70 hover:bg-white rounded-full p-2 shadow"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full ${
              index === selectedIndex ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
