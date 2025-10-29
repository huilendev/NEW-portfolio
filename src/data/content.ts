// src/data/content.ts
import { Content } from "@/types";
export const content: Content = {
  nav: [
    { name: "Sobre mí", href: "#about" },
    { name: "Experiencia", href: "#experience" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
  ],

  hero: {
    greeting: "Hola, mi nombre es",
    name: "Huilen Vilches",
    tagline: "Construyo cosas para la web.",
    description:
      "Soy un desarrollador full-stack especializado en crear experiencias digitales excepcionales. Actualmente, estoy enfocado en construir productos accesibles y centrados en el usuario.",
    cta: "¡Hablemos!",
  },

  about: {
    description: [" sarasa sarasa sarasa sarasa "],
    technologies: ["Golang", "TypeScript", "React", "Next.js", "SQL"],
  },

  experiences: [
    {
      id: "exp-1",
      company: "Tu Empresa Actual",
      position: "Desarrollador Full-Stack",
      period: "Enero 2023 - Presente",
      description: [
        "Desarrollo y mantenimiento de aplicaciones web utilizando React, Next.js y Node.js",
        "Colaboración con equipos multifuncionales para definir, diseñar y desarrollar nuevas funcionalidades",
        "Implementación de mejores prácticas de código y optimización del rendimiento",
        "Mentoría a desarrolladores junior en el equipo",
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB"],
      url: "https://example.com",
    },
    {
      id: "exp-2",
      company: "Empresa Anterior",
      position: "Desarrollador Frontend",
      period: "Junio 2021 - Diciembre 2022",
      description: [
        "Creación de componentes reutilizables y mantenibles en React",
        "Implementación de diseños responsivos y accesibles",
        "Trabajo con APIs RESTful y GraphQL",
        "Optimización del rendimiento de aplicaciones web",
      ],
      technologies: ["React", "JavaScript", "CSS", "REST API"],
      url: "https://example.com",
    },
  ],

  projects: [
    {
      id: "proj-1",
      title: "E-Commerce Platform",
      description:
        "Una plataforma de comercio electrónico completa con carrito de compras, sistema de pagos y panel de administración. Incluye autenticación de usuarios, gestión de productos y dashboard de analíticas.",
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/usuario/proyecto",
      external: "https://proyecto.com",
      featured: true,
    },
    {
      id: "proj-2",
      title: "Dashboard de Analíticas",
      description:
        "Dashboard interactivo para visualización de datos en tiempo real con gráficos dinámicos, filtros avanzados y exportación de reportes. Diseñado para ayudar a las empresas a tomar decisiones basadas en datos.",
      technologies: ["React", "TypeScript", "D3.js", "Tailwind CSS"],
      github: "https://github.com/usuario/proyecto",
      external: "https://proyecto.com",
      featured: true,
    },
    {
      id: "proj-3",
      title: "Red Social para Desarrolladores",
      description:
        "Plataforma social donde los desarrolladores pueden compartir proyectos, colaborar y conectarse. Incluye sistema de publicaciones, comentarios, mensajería y búsqueda de perfiles.",
      technologies: ["Next.js", "PostgreSQL", "Prisma", "NextAuth"],
      github: "https://github.com/usuario/proyecto",
      featured: false,
    },
    {
      id: "proj-4",
      title: "API de Gestión de Tareas",
      description:
        "API RESTful robusta para gestión de tareas y proyectos con autenticación JWT, documentación Swagger y tests automatizados. Diseñada para ser escalable y mantenible.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/usuario/proyecto",
      featured: false,
    },
  ],

  contact: {
    title: "¿Qué sigue?",
    description:
      "Estoy disponible para proyectos freelance, propuestas laborales o para charlar sobre tech, música y cine. Escribime!",
    email: "Huilénvilches@gmail.com",
  },

  socials: [
    {
      name: "GitHub",
      url: "https://github.com/spookycoincidence",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/Huilénvilches/",
      icon: "linkedin",
    },
    {
      name: "Mail",
      url: "Huilénvilches@gmail.com",
      icon: "mail",
    },
  ],
};
