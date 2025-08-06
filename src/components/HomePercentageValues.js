"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import AnimatedNumber from "./AnimatedNumber";
import TypewriterText from "./TypeWriterText";

export default function HomePercentageValues() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (inView) setShow(true);
  }, [inView]);

  return (
    <div className="w-full min-h-screen pt-[10vh] bg-black overflow-x-auto">
      <div className="flex justify-center gap-6 px-4">
        {[
          {
            value: 60,
            bg: "#CED3CF",
            text: "skincare & haircare stuck with petroleum or animal base: plant oils can’t solidify",
          },
          {
            value: 90,
            bg: "#FFFFED",
            text: "reduced stability of cosmetics & food due to rapid oxidation of oils",
          },
          {
            value: 92,
            bg: "#FAEBA9",
            text: "lipophilic bioactive compounds leak out: no solid structure, no retention",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-around 2xl:w-[440px] 2xl:h-[518px] 2xl:h-[336px] xl:w-[400px] xl:h-[471px] lg:w-[350px] lg:h-[412px] md:w-[300px] md:h-[353px] sm:w-[200px] sm:h-[235px] w-[100px] h-[117px] shrink-0"
          >
            <div
              ref={index === 0 ? ref : null}
              className="text-center text-[#CED3CF]"
            >
              {show ? <AnimatedNumber value={item.value} duration={4} /> : null}
            </div>

            <div
              className="flex justify-center items-center text-center bg-opacity-80 rounded-[6vw] lg:rounded-[62px] px-[6vw] py-[6vw] sm:px-6 sm:py-8"
              style={{
                backgroundColor: item.bg,
                height: "60%",
              }}
            >
              <div className="text-[1vw] sm:text-[20px] md:text-[26px] lg:text-[32px]">
                <TypewriterText text={item.text} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
