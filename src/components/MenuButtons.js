"use client";

import { motion } from "framer-motion";

export default function MenuButtons({ buttons }) {
  return (
    <div className="absolute flex gap-10 right-1 2xl:right-10 xl:right-10 lg:right-10 md:right-10 sm:gap-2 sm:right-1 mt-10 pb-4 pt-4 flex flex-row items-center">
      {buttons.map((button) => (
        <motion.button
          key={button}
          initial={{ "--x": "100%", scale: 1 }}
          animate={{ "--x": "-100%" }}
          whileTap={{ scale: 0.97 }}
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
          className="px-6 py-2 rounded-xl relative cursor-pointer radial-gradient"
        >
          <span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask ">
            {button}
          </span>
          <span className="pointer-events-none block absolute inset-0 rounded-xl p-px linear-overlay" />
        </motion.button>
      ))}
    </div>
  );
}
