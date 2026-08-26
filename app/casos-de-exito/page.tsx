import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Casos de Éxito | Desarrollador y Consultor IA en Girona",
  description:
    "Casos de éxito de desarrollo de software, IA y sistemas IoT de Francesc 'Cesco' Fors, Ingeniero de Software y consultor de IA en Girona, Costa Brava. Proyectos reales para clientes de Girona, Lloret de Mar y Blanes.",
  alternates: {
    canonical: "https://cesco.dev/casos-de-exito",
  },
  openGraph: {
    title: "Casos de Éxito | Desarrollador y Consultor IA en Girona",
    description:
      "Proyectos reales de desarrollo full stack, IA y sistemas IoT realizados desde Girona para clientes de Girona, Lloret de Mar y Blanes.",
    url: "https://cesco.dev/casos-de-exito",
  },
};

export default function CasosDeExitoPage() {
  return (
    <section className="py-24 lg:py-32 px-4 pt-32">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 md:mb-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowRight size={14} className="rotate-180" />
            Volver al inicio
          </Link>

          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-4">
            Case Studies
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Casos de Éxito
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Soy Francesc &quot;Cesco&quot; Fors Ferrer, Ingeniero de Software y consultor
            de IA afincado en Girona, en plena Costa Brava. Trabajo tanto en
            remoto como de forma presencial con empresas de Girona, Lloret de
            Mar y Blanes, y estos son algunos de los proyectos reales en los
            que he trabajado: desde consultoría de inteligencia artificial
            aplicada hasta sistemas de audio, IoT y hardware propios.
          </p>
        </div>

        <div className="space-y-5">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/casos-de-exito/${cs.slug}`}
              className="group block p-6 md:p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-card/60 hover:-translate-y-1 elevation-1 hover:elevation-2"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div className="flex-grow">
                  <span className="inline-flex px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-4">
                    {cs.sector}
                  </span>
                  <h2 className="text-xl md:text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {cs.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-1">
                    Cliente: {cs.client}
                  </p>
                </div>
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/30 transition-colors">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {cs.excerpt}
              </p>

              <div className="flex flex-wrap gap-2">
                {cs.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg border border-border/60 bg-background/50 text-xs text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm text-center">
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto leading-relaxed">
            ¿Tienes un proyecto de desarrollo de software o consultoría de IA
            en Girona, Lloret de Mar, Blanes o cualquier otro punto de la
            Costa Brava?
          </p>
          <a
            href="mailto:cescofors75@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 elevation-2 hover:elevation-3"
          >
            Hablemos de tu proyecto
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
