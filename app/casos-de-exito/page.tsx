import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";

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
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Casos de Éxito
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soy Francesc &quot;Cesco&quot; Fors Ferrer, Ingeniero de Software y consultor
            de IA afincado en Girona, en plena Costa Brava. Trabajo tanto en
            remoto como de forma presencial con empresas de Girona, Lloret de
            Mar y Blanes, y estos son algunos de los proyectos reales en los
            que he trabajado: desde plataformas de travel tech con pagos
            integrados hasta consultoría de inteligencia artificial aplicada
            y sistemas IoT propios.
          </p>
        </div>

        <div className="space-y-6">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/casos-de-exito/${cs.slug}`}
              className="block p-6 border border-border rounded-xl hover:border-primary/50 transition-colors glass"
            >
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full mb-3">
                {cs.sector}
              </span>
              <h2 className="text-2xl font-bold mb-2">{cs.title}</h2>
              <p className="text-muted-foreground mb-3">{cs.excerpt}</p>
              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                {cs.stack.map((tech) => (
                  <span key={tech} className="px-2 py-1 border border-border rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            ¿Tienes un proyecto de desarrollo de software o consultoría de IA
            en Girona, Lloret de Mar, Blanes o cualquier otro punto de la
            Costa Brava?
          </p>
          <a
            href="mailto:cescofors75@gmail.com"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Hablemos de tu proyecto
          </a>
        </div>
      </div>
    </section>
  );
}
