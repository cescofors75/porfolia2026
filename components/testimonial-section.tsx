'use client';

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const testimonials = [
  {
    author: "VisitToo.com",
    role: "Empresa de Travel Tech",
    text: "Excelente trabajo en el desarrollo de APIs REST con Next.js y C#. Implementación impecable de pasarelas de pago y sistemas DevOps en Azure.",
    rating: 5,
  },
  {
    author: "Euro4x4parts",
    role: "Departamento de R+D",
    text: "Soluciones innovadoras en IoT y sistemas OBD2. Gran capacidad técnica para conectar vehículos antiguos con tecnología moderna.",
    rating: 5,
  },
  {
    author: "Microsoft Startup Founders Hub",
    role: "Patrocinador de Baco AI",
    text: "Proyecto innovador con patrones dinámicos de RAG y embeddings. Implementación profesional de IA aplicada al sector gastronómico.",
    rating: 5,
  },
];

export function TestimonialSection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t.testimonials.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 border border-border rounded-xl glass hover:border-primary/50 transition-colors"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 italic">"{testimonial.text}"</p>

              {/* Author */}
              <div>
                <p className="font-bold text-sm">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
