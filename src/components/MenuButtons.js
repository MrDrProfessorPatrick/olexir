"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MenuButtons({ buttons }) {
  const router = useRouter();
  const [pressed, setPressed] = useState(null);
  return (
    <div className="absolute flex gap-10 right-1 2xl:right-10 xl:right-10 lg:right-10 md:right-10 sm:gap-2 sm:right-1 mt-6 pb-4 pt-4 flex flex-row items-center">
      {buttons.map((button) => (
        <motion.button
          onMouseDown={() => setPressed(button)}
          onMouseUp={() => setPressed(null)}
          onMouseLeave={() => setPressed(null)}
          onClick={() =>
            router.push(`/${button.replace(/\s+/g, "").toLowerCase()}`)
          }
          type="button"
          key={button}
          animate={{
            backgroundColor: pressed === button ? "#D8AE02" : "#000000",
          }}
          transition={{
            backgroundColor: {
              duration: pressed === button ? 0 : 0.5, // instant press, smooth release
            },
          }}
          className="px-2 lg:px-6 py-2 rounded-xl relative cursor-pointer radial-gradient z-1000"
        >
          <motion.span
            initial={{ "--x": "100%", scale: 1 }}
            animate={{ "--x": "-100%" }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 1,
              type: "spring",
              stiffness: 20,
              damping: 15,
              mass: 2,
              scale: {
                type: "spring",
                stiffness: 10,
                damping: 5,
                mass: 0.1,
              },
            }}
            className="text-neutral-100 tracking-wide font-light px-4 block relative linear-mask"
          >
            {button}
          </motion.span>

          <span className="pointer-events-none block absolute inset-0 rounded-xl p-px linear-overlay" />
        </motion.button>
      ))}
    </div>
  );
}
