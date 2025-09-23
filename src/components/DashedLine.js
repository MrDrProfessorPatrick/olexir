"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function getCenter(el) {
  const r = el.getBoundingClientRect();
  const container = document
    .getElementById("container")
    .getBoundingClientRect();
  return {
    x: r.left + r.width / 2 - container.left,
    y: r.top + r.height / 2 - container.top,
  };
}

function getUpperCenter(el) {
  const r = el.getBoundingClientRect();
  const container = document
    .getElementById("container")
    .getBoundingClientRect();
  return {
    x: r.left + r.width / 2,
    y: r.top - container.top,
  };
}

function getLefttMiddleEdge(el) {
  const elementCords = el.getBoundingClientRect();
  const container = document
    .getElementById("container")
    .getBoundingClientRect();
  return {
    x: elementCords.left,
    y: elementCords.top + elementCords.height / 2 - container.top,
  };
}

function getRightMiddleEdge(el) {
  const elementCords = el.getBoundingClientRect();
  const container = document
    .getElementById("container")
    .getBoundingClientRect();
  return {
    x: elementCords.left + elementCords.width,
    y: elementCords.top + elementCords.height / 2 - container.top,
  };
}

function getEndUpperRightEdge(el) {
  const elementCords = el.getBoundingClientRect();
  const container = document
    .getElementById("container")
    .getBoundingClientRect();
  return {
    x: elementCords.right - elementCords.right * 0.1,
    y: elementCords.top - container.top,
  };
}

function getMiddleBottomEdge(el) {
  const elementCords = el.getBoundingClientRect();
  const container = document
    .getElementById("container")
    .getBoundingClientRect();
  return {
    x: elementCords.right - elementCords.width / 2,
    y: elementCords.bottom - container.top,
  };
}

function getBottomRightEdge(el) {
  const elementCords = el.getBoundingClientRect();
  const container = document
    .getElementById("container")
    .getBoundingClientRect();
  return {
    x: elementCords.right - 40, // change to some % value
    y: elementCords.bottom - container.top,
  };
}

const positionFunctions = {
  getCenter,
  getUpperCenter,
  getLefttMiddleEdge,
  getRightMiddleEdge,
  getEndUpperRightEdge,
  getMiddleBottomEdge,
  getBottomRightEdge,
};

export default function DashedLine({
  fromId,
  toId,
  startFn,
  endFn,
  curveIndex = 2,
  curveDistX1 = 2,
  curveDistY1 = 2,
  curveDistX2 = 2,
  curveDistY2 = 2,
}) {
  const pathRef = useRef(null);
  const [d, setD] = useState("");

  useEffect(() => {
    function update() {
      const fromEl = document.getElementById(fromId);
      const toEl = document.getElementById(toId);
      if (!fromEl || !toEl) return;

      const a = positionFunctions[startFn](fromEl);
      const b = positionFunctions[endFn](toEl);

      const dx = Math.abs(b.x - a.x);
      const dy = Math.abs(b.y - a.y);
      const curvature = dx * 0 + dy * curveIndex; // curve size change here

      const cx1 = (a.x + b.x) / curveDistX1; // this is middle of the line if is diviede by 2 (curveDist)
      const cy1 = (a.y + b.y) / curveDistY1;

      const cx2 = (a.x + b.x) / curveDistX2; // this is middle of the line if is diviede by 2 (curveDist)
      const cy2 = (a.y + b.y) / curveDistY2;

      setD(`M ${a.x} ${a.y} C ${cx1} ${cy1} ${cx2} ${cy2} ${b.x} ${b.y}`);
    }
    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update);
    };
  }, [fromId, toId]);

  return (
    <svg
      className="absolute inset-0 pointer-events-none overflow-visible"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="wobble" x="-40%" y="-40%" width="180%" height="180%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            stitchTiles="stitch"
            result="turb"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="turb"
            scale="2"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <motion.path
        ref={pathRef}
        d={d}
        fill="none"
        stroke="#ffd600"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="12 8"
        animate={{ strokeDashoffset: [0, -20] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </svg>
  );
}
