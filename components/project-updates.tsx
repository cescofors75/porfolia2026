import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, CircuitBoard } from "lucide-react";
import { projectUpdates, updateUI, reviewDate, type ProjectUpdate } from "@/lib/project-updates";
import type { Language } from "@/lib/translations";
import { RayDroneDemoLink } from "@/components/raydrone-demo-link";

export function ProjectUpdates({ language, blog = false }: { language: Language; blog?: boolean }) {
  const ui = updateUI[language];
  return <section id="septiembre-2026" className="py-20 scroll-mt-24" aria-labelledby="updates-title">
    <div className="flex items-center gap-3 text-xs uppercase tracking-[.2em] text-primary mb-5"><span className="h-2 w-2 rounded-full bg-primary" />{ui.latest}</div>
    <h2 id="updates-title" className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-5">{ui.title}</h2>
    <p className="text-muted-foreground text-lg mb-10">{ui.intro}</p>
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {projectUpdates.map((project, index) => {
        const copy = project.copy[language];
        return <article key={project.slug} className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/40 hover:border-primary/50 transition-colors">
          <Link href={`/${blog ? "blog" : "proyectos"}/${project.slug}`} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
            <div className="relative aspect-[16/10] overflow-hidden bg-background">
              {project.image ? <Image src={project.image} alt={copy.caption ?? project.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-contain transition-transform duration-500 group-hover:scale-[1.03]" /> : <div aria-hidden="true" className="h-full p-8 flex flex-col justify-between bg-gradient-to-br from-primary/15 via-background to-secondary/10"><CircuitBoard size={40} className="text-primary" /><span className="font-display font-bold text-2xl tracking-tight">{project.name}</span><span className="text-xs font-mono text-muted-foreground">{project.stack.slice(0, 2).join(" / ")}</span></div>}
            </div>
            <div className="px-6 pt-6"><p className="text-xs text-primary font-mono mb-3">{String(index + 1).padStart(2, "0")} / {project.name}</p><h3 className="text-xl font-semibold leading-snug mb-3">{copy.title}</h3></div>
          </Link>
          <p className="px-6 text-sm leading-relaxed text-muted-foreground mb-6">{copy.summary}</p>
          <div className="mt-auto p-6 pt-0 flex flex-wrap gap-x-5 gap-y-3 text-sm">
            <Link href={`/proyectos/${project.slug}`} className="inline-flex items-center gap-1 text-primary hover:underline">{ui.project}<ArrowUpRight size={14} /></Link>
            <Link href={`/blog/${project.slug}`} className="hover:underline text-muted-foreground">{ui.article}</Link>
          </div>
        </article>;
      })}
    </div>
  </section>;
}

export function ProjectUpdateArticle({ project, language, blog = false }: { project: ProjectUpdate; language: Language; blog?: boolean }) {
  const copy = project.copy[language];
  const ui = updateUI[language];
  return <article className="pt-32 pb-24 px-4">
    <div className="max-w-5xl mx-auto">
      <Link href={blog ? "/blog#septiembre-2026" : "/#septiembre-2026"} className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-10"><ArrowLeft size={16} />{blog ? ui.blog : ui.back}</Link>
      <header className="mb-10">
        <p className="text-xs font-mono uppercase tracking-[.2em] text-primary mb-5">{blog ? ui.latest : project.stack.slice(0, 2).join(" · ")}</p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-7">{blog ? copy.title : project.name}</h1>
        {!blog && <h2 className="text-xl md:text-2xl mb-5 text-foreground/90">{copy.title}</h2>}
        <p className="text-lg md:text-2xl leading-relaxed text-muted-foreground max-w-4xl">{copy.summary}</p>
        <time dateTime={reviewDate} className="block text-xs text-muted-foreground mt-6">{ui.period}</time>
      </header>
      {project.image && <figure className="mb-12"><div className="relative aspect-[1.44/1] rounded-2xl overflow-hidden border border-border/60 bg-black"><Image src={project.image} alt={copy.caption ?? project.name} fill priority sizes="(max-width: 1024px) 100vw, 1024px" className="object-contain" /></div><figcaption className="text-sm text-muted-foreground mt-4">{copy.caption}</figcaption></figure>}
      <div className="grid lg:grid-cols-[1fr_280px] gap-10">
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">{copy.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <aside className="p-6 rounded-2xl bg-primary/5 border border-primary/20 self-start"><h2 className="font-semibold mb-4 text-foreground">{ui.status}</h2><p className="text-sm leading-relaxed text-muted-foreground">{copy.status}</p></aside>
      </div>
      <ul className="flex flex-wrap gap-2 mt-10 mb-10" aria-label="Stack">{project.stack.map((tech) => <li key={tech} className="px-3 py-2 rounded-full border border-border text-xs font-mono">{tech}</li>)}</ul>
      <nav className="flex flex-wrap gap-4 border-t border-border pt-8">
        {project.slug === "raydrone" && <RayDroneDemoLink language={language} />}
        <Link href={`/${blog ? "proyectos" : "blog"}/${project.slug}`} className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold">{blog ? ui.project : ui.article}<ArrowUpRight size={16} /></Link>
        {project.href && <a href={project.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border rounded-full px-6 py-3">{ui.source}<ArrowUpRight size={16} /></a>}
      </nav>
    </div>
  </article>;
}
