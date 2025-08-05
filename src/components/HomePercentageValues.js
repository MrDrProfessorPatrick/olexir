"use client";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import AnimatedNumber from "./AnimatedNumber";

export default function HomePercentageValues() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (inView) setShow(true);
  }, [inView]);

  return (
    <div className="w-full h-[948px] pt-[200px] bg-black">
      <div className="relative flex justify-center gap-30">
        <div className="flex flex-col justify-around w-[440px] h-[518px]">
          <div ref={ref} className="text-[98px] text-[#CED3CF] text-center">
            {show ? <AnimatedNumber value="60" /> : null}
          </div>
          <div className="w-[440px] h-[320px] bg-[#CED3CF] rounded-[62px] flex justify-center items-center text-center text-[32px]">
            <div className="p-10">
              skincare & haircare stuck with petroleum or animal base: plant
              oils can’t solidify
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-around w-[440px] h-[518px]">
          <div className="text-[98px] text-[#CED3CF] text-center">
            {" "}
            {show ? <AnimatedNumber value="90" duration={4} /> : null}{" "}
          </div>
          <div className="w-[440px] h-[320px] bg-[#FFFFED] rounded-[62px] flex justify-center items-center text-center text-[32px]">
            <div className="p-10 text-[32px]">
              reduced stability of cosmetics & food  due to rapid oxidation of
              oils
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-around w-[440px] h-[518px]">
          <div className="text-[98px] text-[#CED3CF] text-center">
            {" "}
            {show ? <AnimatedNumber value="92" duration={4} /> : null}{" "}
          </div>
          <div className="w-[440px] h-[320px] bg-[#FAEBA9] rounded-[62px] flex justify-center items-center text-center">
            <div className="p-10 text-[32px]">
              liphophilic bioactive compounds leak out: no solid structure, no
              retention
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
