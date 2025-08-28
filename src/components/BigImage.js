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
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 999,
        }}
      >
        <motion.div
            className="relative w-[600px] rounded-t-xl h-[600px] cursor-pointer overflow-hidden"
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
             className="w-[700px] h-[700px] object-contain"
          />
        </motion.div>
        <motion.div 
            className="bg-white w-[600px] p-6 rounded-b-xl"
            initial={{ opacity: 0, scaleY: 0, transformOrigin: "top" }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
              delay: 0.4,
      }}
        >
          THIS DIV SHOULD EXPAND HERE
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
