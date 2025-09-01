"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CarouselItem from "./CaruselItem";
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

const images = [
  { src: "/CaruselHome1.jpg", index: 0 },
  { src: "/CaruselHome2.png", index: 1 },
  { src: "/CaruselHome3.png", index: 2 },
  { src: "/CaruselHome4.jpg", index: 3 },
  { src: "/CaruselHome5.png", index: 4 },
];

export default function CaruselHome() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: "start",
    }
    // [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const [bigImageSrc, setBigImageSrc] = useState("");
  const [imageIndexes, setImageIndexes] = useState([
    null,
    null,
    null,
    null,
    null,
  ]);
  const [bigImageIndex, setBigImageIndex] = useState(null);

  useEffect(() => {
    for (let index of imageIndexes) {
      if (index !== null) {
        setBigImageIndex(index);
        break;
      }
    }
  }, [imageIndexes]);

  const selectImg = useCallback((currIndex) => {
    const selected = images.find((img) => img.index === currIndex);
    if (selected) {
      setImageIndexes((prev) =>
        prev.map((val, i) => (i === currIndex ? currIndex : val))
      );
      setBigImageIndex(selected.index);
    }
  }, []);

  const deSelectImg = useCallback(() => {
    setImageIndexes((prev) => prev.map((val, i) => (i !== null ? null : val)));
  }, []);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

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
    <div className="relative pt-40 pb-40 2xl:pl-34 2xl:pr-34 xl:pl-24 xl:pr-24 lg:pl-16 lg:pr-16 md:pl-8 md:pr-8 sm:pl-4 sm:pr-4 pl-2 pr-2 bg-[url('/caruselBg.png')] bg-cover bg-center">
      {bigImageSrc && (
        <BigImage
          src={bigImageSrc}
          alt={`Carousel image ${selectedIndex + 1}`}
          setBigImageSrc={setBigImageSrc}
          bigImageIndex={bigImageIndex}
          deSelectImg={deSelectImg}
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
            {images.map((imgObj, currIndex) => {
              return (
                <CarouselItem
                  key={imgObj.index}
                  src={imgObj.src}
                  index={imgObj.index}
                  setBigImageSrc={setBigImageSrc}
                  imageIndex={imageIndexes[currIndex]}
                  selectImg={selectImg}
                />
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
