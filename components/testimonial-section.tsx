'use client';

import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const techMarquee = [
  "React", "Next.js", "TypeScript", "Node.js", "C#", "Azure",
  "OpenAI", "Anthropic", "RAG", "PostgreSQL", "Docker", "Power BI"
];

export function TestimonialSection() {
  const { t } = useLanguage();

  const testimonials = t.testimonials.items.map((item) => ({
    ...item,
    rating: 5,
    initials: item.author
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase(),
  }));

  return (
    <section className="py-24 lg:py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20 text-center reveal-scroll">
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t.testimonials.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="group relative p-8 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-700 hover:border-primary/30 hover:bg-card/60 hover:-translate-y-2 elevation-1 hover:elevation-2 reveal-scroll"
            >
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={56} className="text-primary" />
              </div>

              <div className="flex gap-1.5 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              <p className="text-foreground mb-10 leading-relaxed relative z-10 text-lg">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-border/30">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 flex items-center justify-center text-sm font-bold text-primary font-display transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[5deg]">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Marquee */}
        <div className="relative reveal-scroll">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="overflow-hidden py-6 border-y border-border/50">
            <div className="flex gap-12 whitespace-nowrap animate-marquee">
              {[...techMarquee, ...techMarquee].map((tech, index) => (
                <span
                  key={index}
                  className="text-2xl font-display font-bold text-muted-foreground/30 hover:text-foreground transition-colors cursor-default shrink-0"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
