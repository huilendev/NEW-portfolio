// src/components/sections/Projects.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

// Contenido de proyectos
export const content = {
  projects: [
    {
      id: 1,
      title: "Spotify Clone ",
      description:
        "Exploración de transiciones animadas usando View Transitions API en Next.js. Demo de efectos suaves y modernos en cambios de vista.",
      github: "https://github.com/spookycoincidence/Spookyfi-ViewTransitions",
      technologies: [
        "Next.js",
        "View Transitions API",
        "Tailwind CSS",
        "Astro",
      ],
    },
    {
      id: 2,
      title: "Technicolor Blog",
      description:
        "Blog sobre Technicolor, desarrollado con Next.js, con contenido educativo y multimedia.",
      github: "https://github.com/spookycoincidence/cinecolor-blog",
      technologies: ["Next.js", "Markdown", "Tailwind CSS"],
    },
    {
      id: 3,
      title: "Go CRUD API",
      description:
        "API REST CRUD desarrollada en Go con arquitectura limpia. Ideal para gestionar recursos de forma eficiente y estructurada.",
      github: "https://github.com/spookycoincidence/-go-crud-api-portfolio",
      technologies: ["Go", "Gin", "MySQL"],
    },
    {
      id: 4,
      title: "Workflow API",
      description:
        "API de workflows construida en Go para orquestar y gestionar procesos de negocio de forma modular.",
      github: "https://github.com/spookycoincidence/go-workflow-api-portfolio",
      technologies: ["Go", "Clean Architecture", "Docker"],
    },
    {
      id: 5,
      title: "Portfolio Template",
      description: "Plantilla personalizable de portfolio.",
      github: "https://github.com/spookycoincidence/portfolio-starter",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    },
    {
      id: 6,
      title: "Password Generator",
      description:
        "Generador de contraseñas en Go con configuraciones personalizables.",
      github: "https://github.com/spookycoincidence/go-pass-portfolio",
      technologies: ["Go"],
    },
    {
      id: 7,
      title: "Snake Game",
      description:
        "Juego clásico de la serpiente con controles de teclado, pantalla de pausa y reinicio. Diseño minimalista y responsive con Next.js 13 y Tailwind CSS.",
      github: "https://github.com/spookycoincidence/SpookySnakeGame",
      technologies: ["Next.js", "React", "Tailwind CSS"],
    },
    {
      id: 8,
      title: "Gallery",
      description:
        "Galería de imágenes interactivas construida con React y Tailwind CSS.",
      github: "https://github.com/spookycoincidence/spooky-gallery",
      technologies: ["React", "Tailwind CSS"],
    },
    {
      id: 9,
      title: "Tetris Game",
      description:
        "Juego recreado con Next.js para una experiencia retro y divertida, con controles intuitivos y diseño responsive.",
      github: "https://github.com/spookycoincidence/tetrisgame",
      technologies: ["Next.js", "TypeScript", "CSS Modules"],
    },
    {
      id: 10,
      title: "Logistic API",
      description:
        "Servicio de rutas y distribución en Go con configuración robusta. Solución eficiente para logística y transporte.",
      github:
        "https://github.com/spookycoincidence/transport-challenge/blob/main/config/config.go",
      technologies: ["Go", "Hexagonal Architecture", "Postman"],
    },
    {
      id: 11,
      title: "HX Payments Web",
      description:
        "Frontend en React para el sistema HX Payments. Diseño simple para gestionar pagos y transacciones.",
      github: "https://github.com/spookycoincidence/hx-payments-web",
      technologies: ["React", "Tailwind CSS", "TypeScript"],
    },
    {
      id: 12,
      title: "HX Payments System",
      description:
        "Sistema de pagos robusto hecho en Go, orientado a transacciones seguras y procesamiento financiero.",
      github: "https://github.com/spookycoincidence/hx-payments-system",
      technologies: ["Go", "SQL", "AWS"],
    },
    {
      id: 13,
      title: "Financial TX",
      description:
        "Challenge de transacciones financieras en Go. Simulación de movimientos, control y trazabilidad.",
      github: "https://github.com/spookycoincidence/financial-tx-challenge",
      technologies: ["Go", "Transactions", "Testing"],
    },
    {
      id: 14,
      title: "American Stone and Marble",
      description: "Web corporativa para empresa de mármol en Estados Unidos.",
      external: "https://americanstonemarble.com/",
      technologies: ["UX/UI", "Graphic Design", "Web Design"],
    },
    {
      id: 15,
      title: "Clean Task API",
      description:
        "API en Go para gestión de tareas implementando Clean Architecture. Diseño mantenible y escalable.",
      external:
        "https://github.com/spookycoincidence/go-clean-template-portfolio",
      technologies: ["Go", "Docker"],
    },
    {
      id: 16,
      title: "Cafe Baires",
      description: "Web para cafeteria en New Jersey.",
      external: "https://cafebaires.com/",
      technologies: ["UX/UI", "Graphic Design", "Web Design"],
    },
    {
      id: 17,
      title: "To do app",
      description:
        "Aplicación de tareas sencilla y funcional para organizar actividades diarias.",
      external: "https://github.com/spookycoincidence/todoapp-2.0",
      technologies: ["next.js", "TypeScript", "CSS Modules"],
    },
  ],
};

export default function Projects() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // En mobile mostramos 3, en desktop 6
  const limit = isMobile ? 3 : 6;
  const visibleProjects = isExpanded 
    ? content.projects 
    : content.projects.slice(0, limit);

  return (
    <section id="projects" className="py-32">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Título completamente separado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 flex justify-center"
        >
          <h2 className="text-4xl font-bold text-white mb-3 text-center">
            Proyectos 
          </h2>
        </motion.div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              <a
                href={project.external || project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className="relative h-full bg-[#0a192f]/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-10 transition-all duration-300 hover:border-primary-400/30 hover:bg-[#112240]/50">
                  {/* Link Icon - Posición absoluta arriba derecha */}
                  <div className="absolute top-8 right-8">
                    <ExternalLink className="w-6 h-6 text-slate-500 group-hover:text-primary-400 transition-colors duration-300" />
                  </div>

                  {/* Número del proyecto */}
                  <div className="text-primary-400 font-mono text-sm mb-4">
                    {String(project.id).padStart(2, "0")}
                  </div>

                  {/* Título */}
                  <h3 className="text-2xl font-bold text-white mb-5 pr-12">
                    {project.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-slate-400 leading-relaxed mb-8 text-base">
                    {project.description}
                  </p>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-slate-800/40 text-primary-400 text-xs font-mono rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Botón Ver más */}
        {content.projects.length > limit && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-slate-400 hover:text-slate-200 transition-colors duration-200 text-sm"
            >
              {isExpanded ? "Ver menos" : "Ver más"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}