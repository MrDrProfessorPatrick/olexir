"use client";
import { AnimatePresence, motion } from "framer-motion";

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
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0, 0, 0, 0.8)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 999,
        }}
      >
        <motion.div
            className="relative w-[700px] h-[700px] cursor-pointer rounded-lg overflow-hidden"
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
             className="w-[700px] h-[700px] rounded-lg object-contain"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
