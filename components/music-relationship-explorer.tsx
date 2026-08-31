'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Network, Orbit, RotateCcw, Sparkles } from "lucide-react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import type { Language } from "@/lib/translations";
import { musicArtists, musicRelations, musicTags, type MusicArtist } from "@/lib/music-network";

const copy = {
  es: { back: "Volver a Music & Friends", eyebrow: "Archivo vivo · conexiones reales", title: "Constelación sonora", intro: "Músicos, lugares, escenas y recuerdos conectados. Filtra la red, abre una relación o viaja por la galaxia.", map: "Mapa", galaxy: "Galaxia 3D", all: "Todos", filters: "Filtrar por", connections: "Conexiones", tags: "Etiquetas", reset: "Restablecer vista", hintMap: "Toca un músico para descubrir sus vínculos", hintGalaxy: "Arrastra para orbitar · pellizca o usa la rueda para acercarte" },
  ca: { back: "Tornar a Música & Amics", eyebrow: "Arxiu viu · connexions reals", title: "Constel·lació sonora", intro: "Músics, llocs, escenes i records connectats. Filtra la xarxa, obre una relació o viatja per la galàxia.", map: "Mapa", galaxy: "Galàxia 3D", all: "Tots", filters: "Filtrar per", connections: "Connexions", tags: "Etiquetes", reset: "Restablir vista", hintMap: "Toca un músic per descobrir els seus vincles", hintGalaxy: "Arrossega per orbitar · pessiga o usa la roda per apropar-te" },
  en: { back: "Back to Music & Friends", eyebrow: "Living archive · real connections", title: "Sonic constellation", intro: "Musicians, places, scenes and memories connected. Filter the network, open a relationship or travel through the galaxy.", map: "Map", galaxy: "3D galaxy", all: "All", filters: "Filter by", connections: "Connections", tags: "Tags", reset: "Reset view", hintMap: "Tap a musician to discover their connections", hintGalaxy: "Drag to orbit · pinch or scroll to zoom" },
  de: { back: "Zurück zu Musik & Freunde", eyebrow: "Lebendiges Archiv · echte Verbindungen", title: "Klangkonstellation", intro: "Musiker, Orte, Szenen und Erinnerungen im Zusammenhang. Filtere das Netzwerk oder reise durch die Galaxie.", map: "Karte", galaxy: "3D-Galaxie", all: "Alle", filters: "Filtern nach", connections: "Verbindungen", tags: "Tags", reset: "Ansicht zurücksetzen", hintMap: "Musiker antippen, um Verbindungen zu entdecken", hintGalaxy: "Ziehen zum Kreisen · zoomen mit Geste oder Mausrad" },
  fr: { back: "Retour à Musique & Amis", eyebrow: "Archive vivante · liens réels", title: "Constellation sonore", intro: "Musiciens, lieux, scènes et souvenirs reliés. Filtrez le réseau ou voyagez dans la galaxie.", map: "Carte", galaxy: "Galaxie 3D", all: "Tous", filters: "Filtrer par", connections: "Connexions", tags: "Étiquettes", reset: "Réinitialiser la vue", hintMap: "Touchez un musicien pour découvrir ses liens", hintGalaxy: "Faites glisser pour orbiter · pincez ou utilisez la molette" },
} as const;

function useSize<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [size, setSize] = useState({ width: 900, height: 680 });
  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;
      setSize({ width, height: Math.max(560, Math.min(760, width * 0.76)) });
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, size };
}

function NetworkMap({ artists, selected, onSelect, hint }: { artists: MusicArtist[]; selected: string | null; onSelect: (id: string) => void; hint: string }) {
  const { ref, size } = useSize<HTMLDivElement>();
  const visible = new Set(artists.map((artist) => artist.id));
  const edges = musicRelations.filter((relation) => visible.has(relation.source) && visible.has(relation.target));
  const positions = useMemo(() => new Map(artists.map((artist) => [artist.id, {
    x: size.width / 2 + artist.position[0] * Math.min(58, size.width / 13),
    y: size.height / 2 + artist.position[1] * Math.min(49, size.height / 13),
  }])), [artists, size]);

  return <div ref={ref} className="relative min-h-[560px] overflow-hidden rounded-3xl border border-white/10 bg-black/25">
    <svg width="100%" height={size.height} viewBox={`0 0 ${size.width} ${size.height}`} role="img" aria-label={hint}>
      <defs><filter id="node-glow"><feGaussianBlur stdDeviation="5" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter></defs>
      <g>{edges.map((relation) => {
        const a = positions.get(relation.source); const b = positions.get(relation.target); if (!a || !b) return null;
        const highlighted = selected === relation.source || selected === relation.target;
        return <line key={`${relation.source}-${relation.target}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={highlighted ? "rgba(255,255,255,.62)" : "rgba(255,255,255,.15)"} strokeWidth={highlighted ? 2 : 1} />;
      })}</g>
      <g>{artists.map((artist) => {
        const point = positions.get(artist.id)!; const active = selected === artist.id;
        return <g key={artist.id} transform={`translate(${point.x} ${point.y})`} role="button" aria-label={artist.name} onClick={() => onSelect(artist.id)} className="cursor-pointer outline-none">
          {active && <circle r="34" fill={artist.color} opacity=".16" filter="url(#node-glow)" />}
          <circle r={active ? 20 : 15} fill={artist.color} opacity={active ? 1 : .78} stroke="rgba(255,255,255,.7)" strokeWidth={active ? 2 : 1} />
          <circle r={active ? 5 : 3} fill="white" opacity=".9" />
          <text y={active ? 39 : 32} textAnchor="middle" fill="white" fontSize={size.width < 520 ? 10 : 12} fontWeight="600">{artist.name}</text>
        </g>;
      })}</g>
    </svg>
    <p className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/65 px-4 py-2 text-[10px] uppercase tracking-widest text-white/55">{hint}</p>
  </div>;
}

function labelSprite(text: string, color: string) {
  const canvas = document.createElement("canvas"); canvas.width = 512; canvas.height = 96;
  const context = canvas.getContext("2d")!; context.clearRect(0, 0, 512, 96); context.font = "600 32px sans-serif"; context.textAlign = "center"; context.fillStyle = color; context.fillText(text, 256, 54);
  const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false })); sprite.scale.set(3.8, .72, 1); return sprite;
}

function Galaxy({ artists, selected, onSelect, hint, resetLabel }: { artists: MusicArtist[]; selected: string | null; onSelect: (id: string) => void; hint: string; resetLabel: string }) {
  const host = useRef<HTMLDivElement>(null);
  const resetRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const element = host.current; if (!element) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, element.clientWidth / element.clientHeight, .1, 100); camera.position.set(0, 1.5, 15);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); renderer.setPixelRatio(Math.min(devicePixelRatio, 2)); renderer.setSize(element.clientWidth, element.clientHeight); renderer.outputColorSpace = THREE.SRGBColorSpace; element.appendChild(renderer.domElement);
    const controls = new OrbitControls(camera, renderer.domElement); controls.enableDamping = true; controls.dampingFactor = .045; controls.autoRotate = true; controls.autoRotateSpeed = .28; controls.minDistance = 7; controls.maxDistance = 27;
    scene.add(new THREE.AmbientLight(0xffffff, 1.1)); const light = new THREE.PointLight(0xffffff, 45); light.position.set(3, 5, 7); scene.add(light);
    const starGeometry = new THREE.BufferGeometry(); const starPoints = new Float32Array(1800 * 3); for (let i = 0; i < starPoints.length; i += 3) { const radius = 10 + Math.random() * 25; const theta = Math.random() * Math.PI * 2; const phi = Math.acos(2 * Math.random() - 1); starPoints[i] = radius * Math.sin(phi) * Math.cos(theta); starPoints[i + 1] = radius * Math.cos(phi); starPoints[i + 2] = radius * Math.sin(phi) * Math.sin(theta); } starGeometry.setAttribute("position", new THREE.BufferAttribute(starPoints, 3)); scene.add(new THREE.Points(starGeometry, new THREE.PointsMaterial({ color: 0xffffff, size: .035, transparent: true, opacity: .62 })));
    const visible = new Set(artists.map((artist) => artist.id)); const objects: THREE.Mesh[] = [];
    musicRelations.filter((relation) => visible.has(relation.source) && visible.has(relation.target)).forEach((relation) => { const a = artists.find((item) => item.id === relation.source)!; const b = artists.find((item) => item.id === relation.target)!; const geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(...a.position), new THREE.Vector3(...b.position)]); scene.add(new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: selected && (selected === a.id || selected === b.id) ? .58 : .13 }))); });
    artists.forEach((artist, index) => { const radius = artist.id === selected ? .5 : .32 + (index % 3) * .035; const mesh = new THREE.Mesh(new THREE.SphereGeometry(radius, 32, 24), new THREE.MeshStandardMaterial({ color: artist.color, emissive: artist.color, emissiveIntensity: artist.id === selected ? 1.2 : .38, roughness: .28, metalness: .15 })); mesh.position.set(...artist.position); mesh.userData.artistId = artist.id; scene.add(mesh); objects.push(mesh); const ring = new THREE.Mesh(new THREE.TorusGeometry(radius * 1.65, .018, 8, 64), new THREE.MeshBasicMaterial({ color: artist.color, transparent: true, opacity: .55 })); ring.rotation.x = Math.PI / 2.7; mesh.add(ring); const label = labelSprite(artist.name, artist.id === selected ? "#ffffff" : artist.color); label.position.set(0, radius + .52, 0); mesh.add(label); });
    const raycaster = new THREE.Raycaster(); const pointer = new THREE.Vector2();
    const pick = (event: PointerEvent) => { const rect = renderer.domElement.getBoundingClientRect(); pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1; pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1; raycaster.setFromCamera(pointer, camera); const hit = raycaster.intersectObjects(objects, false)[0]; if (hit) onSelect(hit.object.userData.artistId as string); };
    renderer.domElement.addEventListener("pointerup", pick); const resize = () => { const width = element.clientWidth; const height = element.clientHeight; camera.aspect = width / height; camera.updateProjectionMatrix(); renderer.setSize(width, height); }; const observer = new ResizeObserver(resize); observer.observe(element);
    resetRef.current = () => { camera.position.set(0, 1.5, 15); controls.target.set(0, 0, 0); controls.update(); };
    let frame = 0; const animate = () => { frame = requestAnimationFrame(animate); controls.update(); scene.rotation.y += .00035; renderer.render(scene, camera); }; animate();
    return () => { cancelAnimationFrame(frame); observer.disconnect(); renderer.domElement.removeEventListener("pointerup", pick); controls.dispose(); renderer.dispose(); starGeometry.dispose(); while (element.firstChild) element.removeChild(element.firstChild); };
  }, [artists, selected, onSelect]);

  return <div className="relative"><div ref={host} className="h-[68vh] min-h-[560px] w-full overflow-hidden rounded-3xl border border-violet-400/20 bg-[radial-gradient(circle_at_center,rgba(76,29,149,.22),rgba(0,0,0,.78)_68%)]" aria-label={hint} /><button type="button" onClick={() => resetRef.current?.()} className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/55 px-4 py-2 text-xs font-semibold text-white/75 backdrop-blur hover:text-white"><RotateCcw size={14} />{resetLabel}</button><p className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/65 px-4 py-2 text-[10px] uppercase tracking-widest text-white/55">{hint}</p></div>;
}

export function MusicRelationshipExplorer({ language, initialTag = null }: { language: Language; initialTag?: string | null }) {
  const t = copy[language]; const [mode, setMode] = useState<"map" | "galaxy">("map"); const [tag, setTag] = useState<string | null>(initialTag && musicTags.includes(initialTag) ? initialTag : null); const [selected, setSelected] = useState<string | null>("alex");
  const artists = useMemo(() => tag ? musicArtists.filter((artist) => artist.tags.includes(tag)) : musicArtists, [tag]);
  const selectedArtist = musicArtists.find((artist) => artist.id === selected) ?? null;
  const relations = selectedArtist ? musicRelations.filter((relation) => relation.source === selectedArtist.id || relation.target === selectedArtist.id) : [];
  const handleSelect = useCallback((id: string) => setSelected(id), []);

  return <article className="min-h-screen overflow-hidden px-4 pb-24 pt-28"><div className="mx-auto max-w-7xl">
    <Link href="/music-friends" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"><ArrowLeft size={16} />{t.back}</Link>
    <header className="mb-9"><p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[.22em] text-violet-400"><Sparkles size={15} />{t.eyebrow}</p><h1 className="font-display text-5xl font-bold tracking-tighter md:text-7xl lg:text-8xl">{t.title}</h1><p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">{t.intro}</p></header>
    <div className="mb-5 flex flex-col gap-4 rounded-2xl border border-white/10 bg-card/35 p-4 md:flex-row md:items-center md:justify-between"><div className="flex gap-2"><button onClick={() => setMode("map")} aria-pressed={mode === "map"} className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold ${mode === "map" ? "bg-primary text-primary-foreground" : "bg-white/5 text-muted-foreground"}`}><Network size={16} />{t.map}</button><button onClick={() => setMode("galaxy")} aria-pressed={mode === "galaxy"} className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold ${mode === "galaxy" ? "bg-violet-500 text-white" : "bg-white/5 text-muted-foreground"}`}><Orbit size={16} />{t.galaxy}</button></div><p className="font-mono text-xs text-muted-foreground">{artists.length} / {musicArtists.length}</p></div>
    <div className="mb-6"><p className="mb-3 text-[10px] font-semibold uppercase tracking-[.2em] text-muted-foreground">{t.filters}</p><div className="flex flex-wrap gap-2"><button onClick={() => setTag(null)} aria-pressed={!tag} className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${!tag ? "border-primary bg-primary/15 text-primary" : "border-white/10 text-muted-foreground hover:text-foreground"}`}>{t.all}</button>{musicTags.map((item) => <button key={item} onClick={() => setTag(tag === item ? null : item)} aria-pressed={tag === item} className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${tag === item ? "border-primary bg-primary/15 text-primary" : "border-white/10 text-muted-foreground hover:text-foreground"}`}>{item}</button>)}</div></div>
    <div className="grid gap-6 xl:grid-cols-[1fr_300px]">{mode === "map" ? <NetworkMap artists={artists} selected={selected} onSelect={handleSelect} hint={t.hintMap} /> : <Galaxy artists={artists} selected={selected} onSelect={handleSelect} hint={t.hintGalaxy} resetLabel={t.reset} />}
      <aside className="rounded-3xl border border-white/10 bg-card/40 p-6 xl:min-h-full" aria-live="polite">{selectedArtist ? <><div className="mb-5 flex items-center gap-4"><span className="size-4 rounded-full shadow-[0_0_22px_currentColor]" style={{ color: selectedArtist.color, background: selectedArtist.color }} /><div><h2 className="font-display text-2xl font-bold">{selectedArtist.name}</h2><p className="text-xs text-muted-foreground">{selectedArtist.subtitle}</p></div></div><h3 className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{t.connections}</h3><div className="space-y-2">{relations.map((relation) => { const otherId = relation.source === selectedArtist.id ? relation.target : relation.source; const other = musicArtists.find((artist) => artist.id === otherId)!; return <button key={`${relation.source}-${relation.target}`} onClick={() => setSelected(other.id)} className="block w-full rounded-xl border border-white/8 bg-white/[.025] p-3 text-left hover:border-white/20"><span className="block text-sm font-bold">{other.name}</span><span className="mt-1 block text-xs leading-relaxed text-muted-foreground">{relation.label}</span></button>; })}</div><h3 className="mb-3 mt-6 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{t.tags}</h3><div className="flex flex-wrap gap-2">{selectedArtist.tags.map((item) => <button key={item} onClick={() => setTag(item)} className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-muted-foreground hover:border-primary/40 hover:text-primary">{item}</button>)}</div></> : null}</aside>
    </div>
  </div></article>;
}
