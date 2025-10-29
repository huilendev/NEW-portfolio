"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import SectionContainer from "@/components/ui/SectionContainer";

function HighlightedTerm({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) {
  const content = (
    <span className="italic hover:brightness-110 transition-all duration-200 hover:underline decoration-1 underline-offset-2">
      {children}
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        {content}
      </a>
    );
  }

  return content;
}

function ScrollRevealParagraph({
  children,
  scrollProgress,
  startProgress,
  endProgress,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  scrollProgress: any;
  startProgress: number;
  endProgress: number;
  delay?: number;
  className?: string;
}) {
  const opacity = useTransform(
    scrollProgress,
    [startProgress, endProgress],
    [0, 1]
  );
  const color = useTransform(
    scrollProgress,
    [startProgress, endProgress],
    ["rgb(148, 163, 184)", "rgb(241, 245, 249)"]
  );

  return (
    <motion.p
      style={{ opacity, color }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.p>
  );
}

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SectionContainer id="about">
      <section
        ref={containerRef}
        id="about-section"
        className="
          flex-1 flex flex-col items-center justify-center text-center
          px-6 md:px-8 lg:px-10 
          mx-4 sm:mx-auto  /* ← margen lateral solo en mobile */
          max-w-[800px] min-h-screen
        "
      >
        <ScrollRevealParagraph
          scrollProgress={scrollYProgress}
          startProgress={0.05}
          endProgress={0.35}
          delay={0.1}
          className="text-lg md:text-xl leading-relaxed mb-12 sm:mb-6"
        >
          Soy <strong className="text-slate-100">Full Stack Developer</strong>,
          apasionada por crear productos digitales que combinan tecnologías,
          diseño y creatividad. Me interesa construir productos con una mirada
          integral —desde la interfaz hasta la lógica interna— cuidando el
          detalle visual y la arquitectura del código.
        </ScrollRevealParagraph>

        <ScrollRevealParagraph
          scrollProgress={scrollYProgress}
          startProgress={0.15}
          endProgress={0.45}
          delay={0.2}
          className={`text-base md:text-lg leading-relaxed mb-12 sm:mb-6 md:block ${
            isExpanded ? "block" : "hidden"
          }`}
        >
          Cuento con más de 4 años de experiencia trabajando en fintechs
          procesando millones de transacciones, e-commerce de alto tráfico y
          logística, además de proyectos freelance que combinan desarrollo y
          diseño.
        </ScrollRevealParagraph>

        <ScrollRevealParagraph
          scrollProgress={scrollYProgress}
          startProgress={0.25}
          endProgress={0.55}
          delay={0.3}
          className={`text-base md:text-lg leading-relaxed mb-12 sm:mb-6 md:block ${
            isExpanded ? "block" : "hidden"
          }`}
        >
          Me siento cómoda trabajando con{" "}
          <HighlightedTerm>Golang</HighlightedTerm> y{" "}
          <HighlightedTerm>React</HighlightedTerm>, disfruto construir productos
          con arquitecturas limpias,microservicios y buenas prácticas
          de testing.
        </ScrollRevealParagraph>

        <ScrollRevealParagraph
          scrollProgress={scrollYProgress}
          startProgress={0.35}
          endProgress={0.65}
          delay={0.4}
          className={`text-base md:text-lg leading-relaxed md:block ${
            isExpanded ? "block" : "hidden"
          }`}
        >
          Me apasiona formar parte de equipos que buscan innovar y generar impacto. Soy muy curiosa y me encanta
          aprender, por eso siento que el mundo IT es el lugar ideal para mí:
          siempre hay algo nuevo para descubrir.
        </ScrollRevealParagraph>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="md:hidden mt-4 text-slate-400 hover:text-slate-200 transition-colors duration-200 text-sm"
        >
          {isExpanded ? "Ver menos" : "Ver más"}
        </button>
      </section>
    </SectionContainer>
  );
}