"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function BigImage({
  src,
  alt,
  setBigImageSrc,
  bigImageIndex,
  deSelectImg,
  text,
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        onClick={() => {
          setBigImageSrc("");
          deSelectImg(bigImageIndex);
        }}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0, 0, 0, 0.8)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 999,
        }}
      >
        <motion.div
          className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] rounded-t-xl cursor-pointer overflow-hidden"
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
            className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] object-contain"
          />
        </motion.div>
        <motion.div
          className="bg-stone-900 w-[300px] sm:w-[400px] md:w-[600px] p-6 rounded-b-xl"
          initial={{ opacity: 0, scaleY: 0, transformOrigin: "top" }}
          animate={{ opacity: 1, scaleY: 1 }}
          exit={{ opacity: 0, scaleY: 0 }}
          transition={{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1],
            delay: 0.4,
          }}
        >
          <span className={`${montserrat.className} text-white`}>{text}</span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
