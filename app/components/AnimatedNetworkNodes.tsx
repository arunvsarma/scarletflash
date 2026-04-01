"use client";

import { motion } from "motion/react";

const nodes = [
  { id: 1,  x: 10, y: 75, delay: 0   },
  { id: 2,  x: 18, y: 28, delay: 0.2 },
  { id: 3,  x: 28, y: 55, delay: 0.4 },
  { id: 4,  x: 35, y: 90, delay: 0.1 },
  { id: 5,  x: 42, y: 38, delay: 0.6 },
  { id: 6,  x: 52, y: 70, delay: 0.3 },
  { id: 7,  x: 62, y: 45, delay: 0.5 },
  { id: 8,  x: 68, y: 25, delay: 0.7 },
  { id: 9,  x: 75, y: 55, delay: 0.2 },
  { id: 10, x: 82, y: 30, delay: 0.4 },
  { id: 11, x: 88, y: 20, delay: 0.6 },
  { id: 12, x: 92, y: 50, delay: 0.1 },
  { id: 13, x: 96, y: 65, delay: 0.8 },
];

const travelingPaths = [
  {
    id: "path1",
    keyframes: [
      { x: 5,  y: 80 }, { x: 15, y: 65 }, { x: 25, y: 55 }, { x: 35, y: 50 },
      { x: 45, y: 48 }, { x: 55, y: 52 }, { x: 65, y: 58 }, { x: 75, y: 60 },
      { x: 85, y: 55 }, { x: 95, y: 50 },
    ],
    duration: 8,
    delay: 0,
  },
  {
    id: "path2",
    keyframes: [
      { x: 10, y: 20 }, { x: 20, y: 25 }, { x: 30, y: 35 }, { x: 40, y: 38 },
      { x: 50, y: 40 }, { x: 60, y: 42 }, { x: 70, y: 38 }, { x: 80, y: 32 },
      { x: 90, y: 28 },
    ],
    duration: 7,
    delay: 1.5,
  },
  {
    id: "path3",
    keyframes: [
      { x: 8,  y: 50 }, { x: 18, y: 48 }, { x: 28, y: 52 }, { x: 38, y: 58 },
      { x: 48, y: 65 }, { x: 58, y: 70 }, { x: 68, y: 68 }, { x: 78, y: 62 },
      { x: 88, y: 58 }, { x: 95, y: 60 },
    ],
    duration: 9,
    delay: 3,
  },
  {
    id: "path4",
    keyframes: [
      { x: 15, y: 85 }, { x: 25, y: 82 }, { x: 35, y: 78 }, { x: 45, y: 72 },
      { x: 55, y: 68 }, { x: 65, y: 70 }, { x: 75, y: 75 }, { x: 85, y: 78 },
      { x: 92, y: 80 },
    ],
    duration: 7.5,
    delay: 2,
  },
  {
    id: "path5",
    keyframes: [
      { x: 12, y: 15 }, { x: 22, y: 18 }, { x: 32, y: 22 }, { x: 42, y: 28 },
      { x: 52, y: 32 }, { x: 62, y: 30 }, { x: 72, y: 25 }, { x: 82, y: 22 },
      { x: 92, y: 20 },
    ],
    duration: 8.5,
    delay: 0.5,
  },
];

// Stable random values to avoid hydration mismatch
const particles = [
  { left: "5%",   top: "12%",  dur: 3.8, delay: 0.4 },
  { left: "13%",  top: "67%",  dur: 4.2, delay: 1.1 },
  { left: "21%",  top: "41%",  dur: 3.2, delay: 0.7 },
  { left: "29%",  top: "83%",  dur: 4.6, delay: 1.8 },
  { left: "37%",  top: "19%",  dur: 3.5, delay: 0.2 },
  { left: "44%",  top: "57%",  dur: 4.0, delay: 1.5 },
  { left: "52%",  top: "32%",  dur: 3.7, delay: 0.9 },
  { left: "59%",  top: "76%",  dur: 4.4, delay: 0.3 },
  { left: "66%",  top: "9%",   dur: 3.1, delay: 1.3 },
  { left: "73%",  top: "48%",  dur: 4.8, delay: 0.6 },
  { left: "80%",  top: "91%",  dur: 3.4, delay: 1.9 },
  { left: "86%",  top: "35%",  dur: 4.1, delay: 0.1 },
  { left: "91%",  top: "62%",  dur: 3.9, delay: 1.6 },
  { left: "96%",  top: "23%",  dur: 4.3, delay: 0.8 },
  { left: "3%",   top: "89%",  dur: 3.6, delay: 1.2 },
  { left: "48%",  top: "4%",   dur: 4.5, delay: 0.5 },
  { left: "17%",  top: "54%",  dur: 3.3, delay: 1.7 },
  { left: "61%",  top: "38%",  dur: 4.7, delay: 0.0 },
  { left: "76%",  top: "71%",  dur: 3.0, delay: 1.4 },
  { left: "33%",  top: "26%",  dur: 4.9, delay: 1.0 },
];

export function AnimatedNetworkNodes() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true" style={{ maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)" }}>
      {/* Background network image */}
      <img
        src="/bg-image.png"
        alt=""
        className="absolute w-full h-full object-cover opacity-30"
        style={{ objectPosition: "center 20%" }}
      />

      {/* Pulsating nodes — heartbeat rhythm: quick double-beat, long rest */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale:   [1, 1.35, 1, 1.18, 1, 1, 1, 1],
            opacity: [0.25, 0.55, 0.25, 0.4, 0.25, 0.25, 0.25, 0.25],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeOut",
            delay: node.delay,
            times: [0, 0.1, 0.22, 0.32, 0.44, 0.6, 0.8, 1],
          }}
        >
          {/* Outer glow */}
          <div
            className="absolute rounded-full blur-lg bg-[#c8102e] opacity-20"
            style={{ width: 28, height: 28, transform: "translate(-50%, -50%)", left: "50%", top: "50%" }}
          />
          {/* Inner core */}
          <motion.div
            className="relative rounded-full bg-[#c8102e]"
            style={{ width: 8, height: 8, opacity: 0.5 }}
            animate={{
              boxShadow: [
                "0 0 4px 1px rgba(200,16,46,0.2)",
                "0 0 10px 3px rgba(200,16,46,0.5)",
                "0 0 4px 1px rgba(200,16,46,0.2)",
                "0 0 8px 2px rgba(200,16,46,0.35)",
                "0 0 4px 1px rgba(200,16,46,0.2)",
                "0 0 4px 1px rgba(200,16,46,0.2)",
                "0 0 4px 1px rgba(200,16,46,0.2)",
                "0 0 4px 1px rgba(200,16,46,0.2)",
              ],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeOut",
              delay: node.delay,
              times: [0, 0.1, 0.22, 0.32, 0.44, 0.6, 0.8, 1],
            }}
          />
        </motion.div>
      ))}

      {/* Traveling nodes */}
      {travelingPaths.map((path) => (
        <motion.div
          key={path.id}
          className="absolute"
          style={{ transform: "translate(-50%, -50%)" }}
          animate={{
            left: path.keyframes.map((kf) => `${kf.x}%`),
            top:  path.keyframes.map((kf) => `${kf.y}%`),
          }}
          transition={{ duration: path.duration, repeat: Infinity, ease: "linear", delay: path.delay }}
        >
          {/* Trailing glow */}
          <motion.div
            className="absolute rounded-full blur-md bg-[#c8102e]"
            style={{ width: 16, height: 16, transform: "translate(-50%, -50%)", left: "50%", top: "50%" }}
            animate={{ opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Main dot */}
          <motion.div
            className="relative rounded-full bg-gradient-to-r from-[#e05030] via-[#c8102e] to-[#e8294a]"
            style={{ width: 6, height: 6, opacity: 0.5 }}
            animate={{
              scale: [1, 1.1, 1],
              boxShadow: [
                "0 0 6px 1px rgba(200,16,46,0.4)",
                "0 0 10px 2px rgba(200,16,46,0.5)",
                "0 0 6px 1px rgba(200,16,46,0.4)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      ))}

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-[#c8102e] rounded-full opacity-50"
          style={{ left: p.left, top: p.top }}
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
        />
      ))}
    </div>
  );
}
