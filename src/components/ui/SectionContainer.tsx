//src/components/ui/SectionContainer.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface SectionContainerProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function SectionContainer({
  id,
  children,
  className = "",
}: SectionContainerProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`min-h-screen flex flex-col items-center justify-center py-24 px-6 md:px-12 lg:px-24 ${className}`}
    >
      <div className="max-w-3xl w-full">{children}</div>
    </motion.section>
  );
}
