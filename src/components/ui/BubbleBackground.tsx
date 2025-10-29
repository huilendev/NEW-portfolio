// src/components/ui/BubbleBackground.tsx
"use client";

import { motion } from "framer-motion";

export default function BubbleBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {/* Burbuja principal */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-[900px] h-[900px] rounded-full"
        style={{
          background: `
            conic-gradient(
              from 180deg at 50% 50%,
              rgba(255,0,150,0.4),
              rgba(0,200,255,0.4),
              rgba(150,0,255,0.3),
              rgba(255,0,150,0.4)
            )
          `,
          mixBlendMode: "screen",
          opacity: 0.8,
          filter: "blur(40px)",
        }}
        animate={{
          x: [0, 200, -150, 0],
          y: [0, -200, 150, 0],
          scale: [1, 1.4, 0.8, 1],
          rotate: [0, 60, -60, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Burbuja secundaria */}
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-[700px] h-[700px] rounded-full"
        style={{
          background: `
            conic-gradient(
              from 90deg at 50% 50%,
              rgba(0,200,255,0.35),
              rgba(150,0,255,0.25),
              rgba(255,0,150,0.35),
              rgba(0,200,255,0.35)
            )
          `,
          mixBlendMode: "screen",
          opacity: 0.7,
          filter: "blur(35px)",
        }}
        animate={{
          x: [0, -150, 200, 0],
          y: [0, 150, -200, 0],
          scale: [1, 0.9, 1.5, 1],
          rotate: [0, -45, 45, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
