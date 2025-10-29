// src/components/layout/CustomCursor.tsx
"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);

  const springGlowX = useSpring(glowX, { stiffness: 300, damping: 25, mass: 0.2 });
  const springGlowY = useSpring(glowY, { stiffness: 300, damping: 25, mass: 0.2 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      glowX.set(e.clientX - 192);
      glowY.set(e.clientY - 192);

      mouseX.set(e.clientX - 6); 
      mouseY.set(e.clientY - 6);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY, glowX, glowY]);

  return (
    <>
      {/* Glow grande */}
      <motion.div
        className="fixed top-0 left-0 w-96 h-96 rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{
          x: springGlowX,
          y: springGlowY,
          background:
            "radial-gradient(circle, rgba(167, 139, 250, 0.25) 0%, rgba(167, 139, 250, 0.1) 40%, transparent 70%)",
        }}
      />

      {/* Punto central */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[10000]"
        style={{
          x: mouseX,
          y: mouseY,
          background: "white",
          border: "2px solid rgba(167, 139, 250, 0.8)",
          boxShadow: "0 0 6px rgba(167, 139, 250, 0.7)",
        }}
      />
    </>
  );
}
