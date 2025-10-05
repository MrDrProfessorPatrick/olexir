import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function AnimatedNumber({ value, duration, className = "" }) {
  const { ref, inView } = useInView({ triggerOnce: false });
  const [finalValue] = useState(+value);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, finalValue, {
        duration: duration || 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [inView, count, finalValue]);

  return (
    <div ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
    </div>
  );
}
