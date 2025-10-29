"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";
import SectionContainer from "@/components/ui/SectionContainer";

export default function Contact({ children }: { children: React.ReactNode }) {
  return (
    <SectionContainer id="contact" className="py-32">
      <div className="max-w-3xl mx-auto text-center">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-3 text-center">
            Trabajemos juntos
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-lg mx-auto">
            {content.contact.description}
          </p>
        </motion.div>

        {/* Card glassmorph con el formulario */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto max-w-lg bg-[#0a192f]/60 backdrop-blur-sm 
                     border border-slate-800/50 rounded-xl p-5 shadow-lg
                     hover:border-slate-700/70 transition-colors"
        >
          {children}
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-32 text-slate-400 text-xs"
        >
          <p className="font-mono">Diseñado con ❤️ por Huilen Vilches</p>
        </motion.footer>
      </div>
    </SectionContainer>
  );
}
