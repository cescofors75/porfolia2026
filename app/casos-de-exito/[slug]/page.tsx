import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/case-studies";

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
    <article className="py-20 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto">
        <Link
          href="/casos-de-exito"
          className="text-sm text-primary hover:underline mb-8 inline-block"
        >
          ← Todos los casos de éxito
        </Link>

        <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full mb-4">
          {cs.sector}
        </span>

        <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">
          {cs.title}
        </h1>
        <p className="text-muted-foreground mb-8">
          Cliente: {cs.client}
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {cs.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm border border-border rounded-full text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-3">El reto</h2>
            <p className="text-muted-foreground leading-relaxed">{cs.challenge}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">La solución</h2>
            <p className="text-muted-foreground leading-relaxed">{cs.solution}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">El resultado</h2>
            <p className="text-muted-foreground leading-relaxed">{cs.result}</p>
          </section>
        </div>

        {cs.link && (
          <a
            href={cs.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Ver proyecto
          </a>
        )}

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            ¿Buscas un ingeniero de software o consultor de IA en Girona,
            Lloret de Mar o Blanes para un proyecto similar?{" "}
            <a href="mailto:cescofors75@gmail.com" className="text-primary hover:underline">
              Escríbeme
            </a>
            .
          </p>
        </div>
      </div>
    </article>
  );
}
