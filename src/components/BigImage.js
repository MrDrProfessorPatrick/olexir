"use client";
import { AnimatePresence, motion } from "framer-motion";

export default function BigImage({ src, alt, showBigImage, imageIndex }) {
  console.log("bigImage imageIndex", imageIndex);
  return (
    <div className="relative w-[700px] h-[700px] cursor-pointer rounded-lg overflow-hidden">
      <AnimatePresence>
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => showBigImage(false)}
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
          <motion.img
            src={src}
            alt="Expanded"
            layoutId={`expandable-image-${imageIndex}`}
            style={{
              width: "80%",
              width: "800px",
              height: "800px",
              borderRadius: 12,
            }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
