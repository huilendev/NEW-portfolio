// src/components/sections/Hero.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { content } from "@/data/content";
import BubbleBackground from "@/components/ui/BubbleBackground";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = content.hero.greeting;

  const rotatingPhrases = [
    "Backend Developer",
    "Frontend Developer",
    "Full-Stack Developer",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  // Efecto de máquina de escribir
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [fullText]);

  // Rotación de frases
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToNextSection = () => {
    const element = document.getElementById("about");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24"
    >
      <BubbleBackground />

      <div className="max-w-5xl w-full text-center relative z-10">
        {/* Texto de máquina de escribir un poco más arriba */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-3 md:mb-4" // antes era mb-6
        >
          <span className="text-primary-400 font-mono text-base md:text-lg">
            {displayedText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        {/* Nombre más grande */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-200 mb-4"
        >
          {content.hero.name}
        </motion.h1>

        {/* Texto rotativo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="h-16 md:h-20 lg:h-24 flex items-center justify-center overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.h2
              key={currentPhraseIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-400"
            >
              {rotatingPhrases[currentPhraseIndex]}
            </motion.h2>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Flecha scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
        onClick={scrollToNextSection}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown size={32} className="text-primary-400" />
      </motion.div>
    </section>
  );
}
