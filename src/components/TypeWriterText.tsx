import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string, 
  delay: number, 
  className : string,
}

export default function TypewriterText({ text, delay = 0.03, className = "" } : TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[currentIndex]);
      currentIndex++;
      if (currentIndex === text.length) clearInterval(interval);
    }, delay * 1000);

    return () => clearInterval(interval);
  }, [text, delay]);

  return (
    <div className={`${className}`}>
      {displayed.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="inline-block"
        >
          {char === " " ? "\u2002" : char}
        </motion.span>
      ))}
    </div>
  );
}
