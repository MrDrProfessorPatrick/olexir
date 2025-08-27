"use client";
import { AnimatePresence, motion } from "framer-motion";

export default function BigImage({
  src,
  alt,
  setBigImageSrc,
  openedImageIndex,
  deSelectImg,
}) {
  return (
    <div className="relative w-[700px] h-[700px] cursor-pointer rounded-lg overflow-hidden">
      <div
        onClick={() => {
          setBigImageSrc("");
          deSelectImg(openedImageIndex);
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
        <AnimatePresence>
          <motion.img
            src={src}
            key={openedImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            alt="Expanded"
            layoutId={`expandable-image-${openedImageIndex}`}
            transition={{ layout: { duration: 0.9, ease: "easeInOut" } }}
            style={{
              width: "80%",
              width: "700px",
              height: "700px",
              borderRadius: 12,
            }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
