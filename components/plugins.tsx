import Image from "next/image";
import Link from "next/link";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import type { Language } from "@/lib/translations";
import { pluginCopy, pluginDownload, pluginMacDownload, pluginImage, pluginSha256, pluginMacSha256 } from "@/lib/plugins";

export function PluginCard({ language, blog = false }: { language: Language; blog?: boolean }) {
  const t = pluginCopy[language];
  const detailHref = blog ? "/blog/celeste-parallel-vst3" : "/plugins/celeste-parallel";
  return <section className="py-12 lg:py-16" aria-labelledby="plugins-title">
    <p className="text-xs uppercase tracking-[.2em] text-primary mb-4">Plugins · Windows + macOS · Tang Control</p>
    <h2 id="plugins-title" className="font-display text-3xl md:text-5xl font-bold mb-6">CELESTE Parallel</h2>
    <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 items-center rounded-3xl border border-primary/20 bg-card/30 p-5 md:p-8">
      <Link href={detailHref}><Image src={pluginImage} alt={t.imageAlt} width={1181} height={789} sizes="(max-width: 1024px) 100vw, 650px" className="rounded-xl w-full h-auto" /></Link>
      <div><h3 className="font-display text-2xl md:text-3xl font-bold mb-4">{t.title}</h3><p className="text-muted-foreground leading-relaxed mb-6">{t.summary}</p>
        <div className="flex flex-wrap gap-4"><a href={pluginDownload} download className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 font-semibold"><ArrowDownToLine size={18} />{t.download}</a><a href={pluginMacDownload} download className="inline-flex items-center gap-2 rounded-full border border-primary text-primary px-5 py-3 font-semibold"><ArrowDownToLine size={18} />macOS · VST3 / AU</a><Link href={detailHref} className="inline-flex items-center gap-2 text-primary hover:underline">{t.explore}<ArrowUpRight size={18} /></Link></div>
        <p className="text-xs text-muted-foreground mt-4">{t.size}</p>
      </div>
    </div>
  </section>;
}

export function PluginArticle({ language }: { language: Language }) {
  const t = pluginCopy[language];
  return <article className="max-w-6xl mx-auto px-4 pt-32 pb-16">
    <Link href="/plugins" className="text-sm text-primary hover:underline">← {t.back}</Link>
    <header className="mt-8 mb-8"><p className="text-xs uppercase tracking-[.2em] text-primary mb-5">Native audio + Tang Control · VST3 / AU</p><h1 className="font-display text-4xl md:text-7xl font-bold mb-5">CELESTE Parallel</h1><p className="text-2xl md:text-3xl mb-5">{t.title}</p><p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">{t.summary}</p>
      <div className="flex flex-wrap gap-4 items-center mt-7"><a href={pluginDownload} download className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold"><ArrowDownToLine size={18} />{t.download}</a><a href={pluginMacDownload} download className="inline-flex items-center gap-2 rounded-full border border-primary text-primary px-5 py-3 font-semibold"><ArrowDownToLine size={18} />macOS · VST3 / AU</a><a href="#installation" className="text-primary hover:underline">{t.install}</a></div><p className="text-xs text-muted-foreground mt-4">{t.size}</p>
    </header>
    <Image src={pluginImage} alt={t.imageAlt} width={1181} height={789} priority sizes="(max-width: 1152px) 100vw, 1152px" className="w-full h-auto rounded-2xl border border-border/60" />
    <section id="story" className="scroll-mt-28 mt-12 max-w-3xl"><h2 className="font-display text-3xl font-bold mb-6">{t.storyTitle}</h2><div className="space-y-5 text-muted-foreground text-lg leading-relaxed">{t.story.map(p => <p key={p}>{p}</p>)}</div><Link href="/proyectos/celeste-parallel" className="inline-flex gap-2 items-center text-primary mt-5 hover:underline">{t.hardware}<ArrowUpRight size={16} /></Link></section>
    <section className="mt-10 rounded-2xl bg-primary/5 border border-primary/20 p-6 md:p-8" aria-labelledby="plugin-demo"><h2 id="plugin-demo" className="text-2xl font-bold mb-3">{t.demo}</h2><p className="text-muted-foreground mb-5">{t.demoText}</p><audio controls preload="none" aria-label={t.demo} className="w-full"><source src="/plugins/celeste-parallel/demo.mp3" type="audio/mpeg" /><a href="/plugins/celeste-parallel/demo.mp3">{t.demo}</a></audio></section>
    <div className="grid lg:grid-cols-2 gap-10 mt-12">
      <section id="installation" className="scroll-mt-28 min-w-0"><h2 className="text-3xl font-bold mb-6">{t.install}</h2><ol className="list-decimal pl-5 space-y-4 text-muted-foreground leading-relaxed">{t.steps.map(step => <li key={step}>{step}</li>)}</ol><code className="block mt-6 p-4 rounded-xl border border-border text-sm break-all">C:\Program Files\Common Files\VST3</code><code className="block mt-3 p-4 rounded-xl border border-border text-sm break-all">~/Library/Audio/Plug-Ins/VST3/<br />~/Library/Audio/Plug-Ins/Components/</code></section>
      <section><h2 className="text-3xl font-bold mb-6">{t.controls}</h2><ul className="space-y-4 text-muted-foreground leading-relaxed">{t.controlText.map(p => <li key={p} className="border-b border-border/50 pb-4">{p}</li>)}</ul></section>
    </div>
    <div className="grid md:grid-cols-2 gap-8 mt-12"><section><h2 className="text-2xl font-bold mb-4">{t.scope}</h2><p className="text-muted-foreground leading-relaxed">{t.scopeText}</p></section><section><h2 className="text-2xl font-bold mb-4">{t.tests}</h2><p className="text-muted-foreground leading-relaxed">{t.testsText}</p></section></div>
    <section className="mt-10 border-t border-border pt-8"><h2 className="text-xl font-bold mb-4">{t.files}</h2><div className="flex flex-wrap gap-6 text-primary"><a href="/plugins/celeste-parallel/LEEME-TANG.md" download className="hover:underline">{t.readme} · Markdown</a><a href="/plugins/celeste-parallel/validation-2026-09-24.json" download className="hover:underline">{t.validation} · JSON</a></div><p className="text-xs text-muted-foreground mt-6">SHA-256 · Windows ZIP</p><code className="block break-all text-xs text-muted-foreground mt-2">{pluginSha256}</code><p className="text-xs text-muted-foreground mt-4">SHA-256 · macOS ZIP</p><code className="block break-all text-xs text-muted-foreground mt-2">{pluginMacSha256}</code><div className="flex flex-wrap gap-6 mt-6 text-primary"><a href="https://github.com/cescofors75/celeste-VST3" className="hover:underline">GitHub · Plugin</a><a href="https://github.com/cescofors75/celeste-fpga" className="hover:underline">GitHub · FPGA / Web</a></div></section>
  </article>;
}
