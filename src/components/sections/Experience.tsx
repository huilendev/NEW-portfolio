// src/components/sections/Experience.tsx
"use client";
import React from "react";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  period,
  location,
  responsibilities,
}) => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-white mb-3">{title}</h2>
      <p className="text-lg text-gray-400 mb-8">
        {company} • {period} • {location}
      </p>
      <ul className="text-left list-disc list-inside text-gray-400 leading-relaxed space-y-2 max-w-2xl mx-auto">
        {responsibilities.map((responsibility, index) => (
          <li className="font-medium text-base" key={index}>
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );
};

const experiences = [
  {
    title: "Mercado Libre - Software Engineer",
    company: "",
    period: "Enero 2020 – Diciembre 2021",
    location: "Argentina",
    responsibilities: [
      "Desarrollo en el equipo de KYC y Prevención de Fraude: validación de identidad, manejo de datos biométricos y protección de información sensible.",
      "Implementación de middleware en Golang que conectaba frontend y backend para procesos críticos.",
      "Migración de servicios de Java a Golang.",
      "Automatización de pipelines DevSecOps, logrando un incremento del 50% en productividad del equipo.",
      "Monitoreo y detección de loops de fraude mediante métricas personalizadas (Datadog).",
    ],
  },
  {
    title: "Andreani - Full Stack Developer",
    company: "",
    period: "Enero 2022 – Junio 2022",
    location: "Argentina",
    responsibilities: [
      "Desarrollo de sistemas de trazabilidad y monitoreo logístico para distribución.",
      "Refactor del sitio institucional y la plataforma de envíos.",
      "Implementación de herramientas de monitoreo que mejoraron la estabilidad y redujeron tiempos de respuesta ante fallas.",
    ],
  },
  {
    title: "Ualá - Software Engineer",
    company: "",
    period: "Julio 2022 – Diciembre 2023",
    location: "Argentina",
    responsibilities: [
      "Desarrollo backend para la solución de cobros Ualá Bis: links de pago, QR y acreditación inmediata.",
      "Automatización del flujo de validación de identidad durante el onboarding, reduciendo el tiempo en un 50%.",
      "Implementación y optimización de APIs REST para medios de pago.",
      "Optimización del código no funcional y abordaje de deuda técnica significativa.",
    ],
  },
  {
    title: "Cult Studio - Golang & React Developer",
    company: "",
    period: "Enero 2024 – Actualidad",
    location: "Estados Unidos",
    responsibilities: [
      "Desarrollo de aplicaciones web y APIs REST con arquitectura hexagonal y principios SOLID.",
      "Implementación de lógica de negocio, interfaces accesibles y experiencias de usuario optimizadas.",
      "Creación de e-commerce, landings y backoffice administrativo para ONGs y marcas.",
      "Automatización de procesos, integración con servicios de terceros y despliegue en Vercel y AWS.",
      "Asesoramiento integral en branding, marca, identidad digital, diseño gráfico y diseño UX/UI.",
    ],
  },
];
const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center text-gray-200"
    >
      <div className="max-w-3xl w-full space-y-28">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            title={experience.title}
            company={experience.company}
            period={experience.period}
            location={experience.location}
            responsibilities={experience.responsibilities}
          />
        ))}

        {/* Stack General */}
        <div className="border-t border-gray-700 pt-10">
          <h3 className="text-3xl font-semibold text-white mb-6">Stack</h3>
          <p className="text-gray-400 leading-relaxed text-center whitespace-pre-line max-w-2xl mx-auto">
            Golang & React, TypeScript, Next.js, MySQL, AWS, Docker, Tailwind,
            Postman.
            {"\n"}Gin, Echo, Go Modules, Testify, Wire, DataDog, New Relic.
            {"\n"}Framer Motion, Radix UI, CSS Modules.
            {"\n"}Railway, Vercel, Kubernetes, Terraform, GitHub Actions.
            {"\n"}Figma, Adobe Illustrator, Notion.
          </p>
        </div>

        {/* Descargar CV */}
        <div className="flex justify-center mt-10">
          <a
            href="/CV_Huilen_Vilches.pdf"
            download
            className="relative inline-flex items-center justify-center px-8 py-4 rounded-full shadow-lg text-white font-medium transition-all duration-300 ease-in-out"
            style={{
              backgroundColor: "#1a1a1a",
              boxShadow:
                "0 8px 20px rgba(0,0,0,0.4), inset 0 0 0 0 rgba(255,255,255,0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 8px 20px rgba(0,0,0,0.4), inset 0 0 8px rgba(255,255,255,0.3)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 8px 20px rgba(0,0,0,0.4), inset 0 0 0 0 rgba(255,255,255,0.1)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
