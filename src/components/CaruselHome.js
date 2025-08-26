"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Lato } from "next/font/google";
import { Inter } from "next/font/google";
import BigImage from "./BigImage";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function CaruselHome() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    }
    // [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [isBigImageShown, showBigImage] = useState(false);
  const [bigImageSrc, setBigImageSrc] = useState("");
  const [imageIndex, setImageIndex] = useState(1);

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
    <div className="relative pt-40 pb-40 2xl:pl-34 2xl:pr-34 xl:pl-24 xl:pr-24 lg:pl-16 lg:pr-16 md:pl-8 md:pr-8 sm:pl-4 sm:pr-4 pl-2 pr-2 bg-[url('/caruselBg.webp')] bg-cover bg-center">
      {isBigImageShown && (
        <BigImage
          src={bigImageSrc}
          alt={`Carousel image ${selectedIndex + 1}`}
          showBigImage={showBigImage}
          imageIndex={imageIndex}
        />
      )}
      <div className="flex w-full pb-40">
        <div className="flex-4">
          <h2 className="text-[60px] font-medium text-white">
            Amplify Oleosensation:
          </h2>
          <p className="text-[40px] font-medium text-white">
            [Feel. Taste. Heal]
          </p>
        </div>
        <div className="flex-3">
          <p
            className={`text-[28px] font-normal text-white ${inter.className}`}
          >
            At <span className="font-bold">Olexir</span>, we harness the power
            of plant proteins to microencapsulate natural oils into next‑gen
            functional oleogels. Through interface engineering, we employ
            structured plant protein hydrolysates to empower natural oils with
            boosted bioavailability and stability for beauty, food and health.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <h2 className={`text-[40px] font-medium text-white ${lato.className}`}>
          We turn liquid oils into solid wellness with plant proteins
        </h2>
      </div>

      <div className="flex">
        <div className="flex items-center justify-center">
          <button onClick={scrollPrev} className="cursor-pointer">
            <ChevronLeft color="white" className="z-10" />
          </button>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((src, index) => {
              const isSelected = isBigImageShown && imageIndex === index + 1;

              return (
                <div
                  onClick={() => {
                    console.log("imageIndex set", index + 1);
                    showBigImage(true);
                    setBigImageSrc(src);
                    setImageIndex(index + 1);
                  }}
                  className="flex-[0_0_100%] 2xl:flex-[0_0_33.333%] xl:flex-[0_0_50%] lg:flex-[0_0_50%] md:flex-[0_0_100%] sm:flex-[0_0_100%] flex items-center justify-center content-center p-4"
                  key={index}
                >
                  <div className="relative w-[250px] h-[250px] 2xl:w-[500px] xl:w-[500px] lg:w-[500px] md:w-[500px] 2xl:w-[500px] xl:h-[500px] lg:h-[500px] md:h-[500px] sm:w-[400px] sm:h-[400px] cursor-pointer rounded-lg overflow-hidden">
                    {!isSelected && (
                      <motion.img
                        src={src}
                        alt={`Carousel image ${index + 1}`}
                        layoutId={
                          isBigImageShown && imageIndex === index + 1
                            ? `expandable-image-${index + 1}`
                            : undefined
                        }
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>
                </div>
              );
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
              index === selectedIndex ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
