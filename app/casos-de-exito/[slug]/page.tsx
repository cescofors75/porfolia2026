import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/case-studies";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};

  const title = `${cs.title} | Caso de Éxito | Cesco.dev`;
  const url = `https://cesco.dev/casos-de-exito/${cs.slug}`;

  return {
    title,
    description: cs.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: cs.excerpt,
      url,
      type: "article",
    },
  };
}

export default async function CasoDeExitoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cs.title,
    description: cs.excerpt,
    author: {
      "@type": "Person",
      name: "Francesc 'Cesco' Fors Ferrer",
      url: "https://cesco.dev",
    },
    about: cs.client,
    keywords: cs.stack.join(", "),
  };

  return (
    <article className="py-24 lg:py-32 px-4 pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto">
        <Link
          href="/casos-de-exito"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowRight size={14} className="rotate-180" />
          Todos los casos de éxito
        </Link>

        <span className="inline-flex px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-6">
          {cs.sector}
        </span>

        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          {cs.title}
        </h1>
        <p className="text-muted-foreground mb-8">
          Cliente: <span className="text-foreground">{cs.client}</span>
        </p>

        <div className="flex flex-wrap gap-2 mb-12 p-4 rounded-xl border border-border/50 bg-card/30">
          {cs.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-lg border border-border/60 bg-background/50 text-xs text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              El reto
            </h2>
            <p className="text-muted-foreground leading-relaxed">{cs.challenge}</p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              La solución
            </h2>
            <p className="text-muted-foreground leading-relaxed">{cs.solution}</p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              El resultado
            </h2>
            <p className="text-muted-foreground leading-relaxed">{cs.result}</p>
          </section>
        </div>

        {cs.link && (
          <a
            href={cs.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 mt-12 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 elevation-2 hover:elevation-3"
          >
            Ver proyecto
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        )}

        <div className="mt-16 p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm">
          <p className="text-muted-foreground leading-relaxed">
            ¿Buscas un ingeniero de software o consultor de IA en Girona,
            Lloret de Mar o Blanes para un proyecto similar?{" "}
            <a
              href="mailto:cescofors75@gmail.com"
              className="text-primary hover:underline font-semibold"
            >
              Escríbeme
            </a>
            .
          </p>
        </div>
      </div>
    </article>
  );
}
