"use client";
import { useEffect, useState } from "react";
import { Lato } from "next/font/google";
import { useIsMobile, useIsTablet } from "@/hooks/useIsMobile";
import DashedLine from "./DashedLine";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RoundTabs({ tabText }) {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);

  return (
    <div className="flex justify-center md:justify-around">
      <div className="flex flex-col w-full sm:w-[65%] md:w-full md:flex-row items-center gap-10 md:gap-0 justify-around">
        <span
          id="solutionResult"
          className={`wrap-break-word pl-4 pr-4 sm:w-full sm:pl-0 sm:pr-0 md:w-auto border-1 border-solid border-white rounded-full text-[18px] md:text-[14px] lg:text-[20px] text-white md:px-3  py-4 text-center ${lato.className}`}
        >
          skincare creams & gels
        </span>
        {hydrated && (
          <DashedLine
            fromId="solutionResult"
            toId="noOilHeating"
            startFn={isMobile ? "getMiddleBottomEdge" : "getRightMiddleEdge"}
            endFn={isMobile ? "getUpperCenter" : "getLefttMiddleEdge"}
            curveIndex={2}
            curveDist={2}
          />
        )}
        <span
          id="noOilHeating"
          className={`wrap-break-word pl-5 pr-5 sm:w-full sm:pl-0 sm:pr-0 md:w-auto border-1 border-solid border-white rounded-full text-[18px] md:text-[14px] lg:text-[20px] text-white md:px-3 py-4 text-center ${lato.className}`}
        >
          Serums & masks
        </span>
        {hydrated && (
          <DashedLine
            fromId="noOilHeating"
            toId="proteinPower"
            startFn={isMobile ? "getMiddleBottomEdge" : "getRightMiddleEdge"}
            endFn={isMobile ? "getUpperCenter" : "getLefttMiddleEdge"}
            curveIndex={2}
            curveDist={2}
          />
        )}
        <span
          id="proteinPower"
          className={`wrap-break-word pl-5 pr-5 sm:w-full sm:pl-0 sm:pr-0 md:w-auto border-1 border-solid border-white rounded-full text-[18px] md:text-[14px] lg:text-[20px] text-white md:px-3  py-4 text-center ${lato.className}`}
        >
          Sunscreens & after-sun care
        </span>
        {hydrated && (
          <DashedLine
            fromId="proteinPower"
            toId="solidityPlant"
            startFn={isMobile ? "getMiddleBottomEdge" : "getRightMiddleEdge"}
            endFn={isMobile ? "getUpperCenter" : "getLefttMiddleEdge"}
            curveIndex={2}
            curveDist={2}
          />
        )}
        <span
          id="solidityPlant"
          className={`wrap-break-word pl-5 pr-5 sm:w-full sm:pl-0 sm:pr-0 md:w-auto border-1 border-solid border-white rounded-full text-[18px] md:text-[14px] lg:text-[20px] text-white md:px-3  py-4 text-center ${lato.className}`}
        >
          Scalp & hair treatments
        </span>
      </div>
    </div>
  );
}
