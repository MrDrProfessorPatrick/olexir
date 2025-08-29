"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Lato } from "next/font/google";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function BigImage({
  src,
  alt,
  setBigImageSrc,
  bigImageIndex,
  deSelectImg,
}) {
  console.log("BigImage index", bigImageIndex);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        onClick={() => {
          setBigImageSrc("");
          deSelectImg(bigImageIndex);
        }}
        className="fixed inset-0 bg-[rgba(0,0,0,0.8)] flex flex-col justify-center items-center z-[999]"
      >
        <motion.div
          className="relative w-[600px] h-[600px] cursor-pointer overflow-hidden"
          key={bigImageIndex}
          layoutId={`expandable-image-${bigImageIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            layout: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
          }}
        >
          <motion.img
            src={src}
            alt="Expanded"
            className="w-[700px]  object-contain rounded-t-[10px]"
          />
        </motion.div>
        <motion.div
          className={`bg-zinc-400 w-[600px] p-6 rounded-b-[10px] ${lato.className} text-justify`}
          initial={{ opacity: 0, scaleY: 0, transformOrigin: "top" }}
          animate={{ opacity: 1, scaleY: 1 }}
          exit={{ opacity: 0, scaleY: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
            delay: 0.4,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
