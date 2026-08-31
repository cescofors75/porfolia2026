'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Crosshair, Network, Orbit, RotateCcw, Sparkles } from "lucide-react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import type { Language } from "@/lib/translations";
import { musicArtists, musicRelations, musicTags, type MusicArtist } from "@/lib/music-network";

const copy = {
  es: { back: "Volver a Music & Friends", eyebrow: "Archivo vivo · conexiones reales", title: "Constelación sonora", intro: "Una cartografía emocional de músicos, lugares, escenas y recuerdos. Filtra la red, sigue un vínculo o entra en órbita.", map: "Mapa orbital", galaxy: "Galaxia 3D", all: "Todo el universo", filters: "Explorar por señales", connections: "Órbitas cercanas", tags: "Coordenadas", reset: "Centrar universo", hintMap: "Toca un nodo · sigue la energía", hintGalaxy: "Arrastra para orbitar · pellizca o rueda para acercarte", nodes: "cuerpos", links: "vínculos", live: "SEÑAL EN VIVO" },
  ca: { back: "Tornar a Música & Amics", eyebrow: "Arxiu viu · connexions reals", title: "Constel·lació sonora", intro: "Una cartografia emocional de músics, llocs, escenes i records. Filtra la xarxa, segueix un vincle o entra en òrbita.", map: "Mapa orbital", galaxy: "Galàxia 3D", all: "Tot l’univers", filters: "Explorar per senyals", connections: "Òrbites properes", tags: "Coordenades", reset: "Centrar univers", hintMap: "Toca un node · segueix l’energia", hintGalaxy: "Arrossega per orbitar · pessiga o usa la roda", nodes: "cossos", links: "vincles", live: "SENYAL EN VIU" },
  en: { back: "Back to Music & Friends", eyebrow: "Living archive · real connections", title: "Sonic constellation", intro: "An emotional cartography of musicians, places, scenes and memories. Filter the network, follow a link or enter orbit.", map: "Orbital map", galaxy: "3D galaxy", all: "Whole universe", filters: "Explore by signal", connections: "Nearby orbits", tags: "Coordinates", reset: "Center universe", hintMap: "Tap a node · follow the energy", hintGalaxy: "Drag to orbit · pinch or scroll to zoom", nodes: "bodies", links: "links", live: "LIVE SIGNAL" },
  de: { back: "Zurück zu Musik & Freunde", eyebrow: "Lebendiges Archiv · echte Verbindungen", title: "Klangkonstellation", intro: "Eine emotionale Kartografie von Musikern, Orten, Szenen und Erinnerungen. Filtere das Netz oder begib dich in den Orbit.", map: "Orbitalkarte", galaxy: "3D-Galaxie", all: "Ganzes Universum", filters: "Nach Signalen suchen", connections: "Nahe Umlaufbahnen", tags: "Koordinaten", reset: "Universum zentrieren", hintMap: "Knoten antippen · Energie folgen", hintGalaxy: "Ziehen zum Kreisen · zoomen mit Geste oder Mausrad", nodes: "Körper", links: "Verbindungen", live: "LIVE-SIGNAL" },
  fr: { back: "Retour à Musique & Amis", eyebrow: "Archive vivante · liens réels", title: "Constellation sonore", intro: "Une cartographie émotionnelle de musiciens, lieux, scènes et souvenirs. Filtrez le réseau ou entrez en orbite.", map: "Carte orbitale", galaxy: "Galaxie 3D", all: "Tout l’univers", filters: "Explorer les signaux", connections: "Orbites proches", tags: "Coordonnées", reset: "Centrer l’univers", hintMap: "Touchez un nœud · suivez l’énergie", hintGalaxy: "Faites glisser pour orbiter · pincez pour zoomer", nodes: "corps", links: "liens", live: "SIGNAL LIVE" },
} as const;

function useSize<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [size, setSize] = useState({ width: 900, height: 680 });
  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;
      setSize({ width, height: Math.max(560, Math.min(780, width * 0.8)) });
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, size };
}

function curvedPath(a: { x: number; y: number }, b: { x: number; y: number }, bend = 0.1) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const cx = (a.x + b.x) / 2 - dy * bend;
  const cy = (a.y + b.y) / 2 + dx * bend;
  return `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`;
}

function NetworkMap({ artists, selected, onSelect, hint, live }: { artists: MusicArtist[]; selected: string | null; onSelect: (id: string) => void; hint: string; live: string }) {
  const { ref, size } = useSize<HTMLDivElement>();
  const visible = new Set(artists.map((artist) => artist.id));
  const edges = musicRelations.filter((relation) => visible.has(relation.source) && visible.has(relation.target));
  const positions = useMemo(() => new Map(artists.map((artist) => [artist.id, {
    x: size.width / 2 + artist.position[0] * Math.min(58, size.width / 13),
    y: size.height / 2 + artist.position[1] * Math.min(49, size.height / 13),
  }])), [artists, size]);

  return <div ref={ref} className="group relative min-h-[560px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#05050b] shadow-[0_40px_120px_rgba(0,0,0,.55)]">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(112,88,255,.24),transparent_30%),radial-gradient(circle_at_82%_64%,rgba(0,217,255,.13),transparent_32%),radial-gradient(circle_at_50%_100%,rgba(227,71,255,.12),transparent_38%)]" />
    <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(circle_at_center,black,transparent_83%)]" />
    <div className="pointer-events-none absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-2 text-[9px] font-bold tracking-[.2em] text-white/55 backdrop-blur-xl"><span className="size-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />{live}</div>
    <svg width="100%" height={size.height} viewBox={`0 0 ${size.width} ${size.height}`} role="img" aria-label={hint}>
      <defs>
        <filter id="map-glow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="7" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <linearGradient id="energy" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#7060ff" /><stop offset=".5" stopColor="#ffffff" /><stop offset="1" stopColor="#00d9ff" /></linearGradient>
        <radialGradient id="node-core"><stop stopColor="#fff" /><stop offset=".25" stopColor="#fff" stopOpacity=".8" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></radialGradient>
      </defs>
      <g opacity=".28" fill="none" stroke="rgba(170,160,255,.22)">{[110, 220, 330].map((radius) => <ellipse key={radius} cx={size.width / 2} cy={size.height / 2} rx={radius} ry={radius * .62} strokeDasharray="3 12" />)}</g>
      <g>{edges.map((relation, index) => {
        const a = positions.get(relation.source); const b = positions.get(relation.target); if (!a || !b) return null;
        const highlighted = selected === relation.source || selected === relation.target;
        const d = curvedPath(a, b, index % 2 ? -.11 : .11);
        return <g key={`${relation.source}-${relation.target}`}>
          <path d={d} fill="none" stroke={highlighted ? "url(#energy)" : "rgba(255,255,255,.12)"} strokeWidth={highlighted ? 2.2 : 1} opacity={highlighted ? 1 : .75} />
          {highlighted && <circle r="3" fill="#fff" filter="url(#map-glow)"><animateMotion dur={`${2.4 + index * .07}s`} repeatCount="indefinite" path={d} /></circle>}
        </g>;
      })}</g>
      <g>{artists.map((artist, index) => {
        const point = positions.get(artist.id)!; const active = selected === artist.id;
        const labelWidth = Math.max(72, artist.name.length * (size.width < 520 ? 6.2 : 7.4) + 24);
        return <g key={artist.id} transform={`translate(${point.x} ${point.y})`} role="button" tabIndex={0} aria-label={artist.name} onClick={() => onSelect(artist.id)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") onSelect(artist.id); }} className="cursor-pointer outline-none">
          <circle r={active ? 42 : 28} fill={artist.color} opacity={active ? .18 : .07} filter="url(#map-glow)" />
          <circle r={active ? 30 : 22} fill="none" stroke={artist.color} strokeWidth={active ? 1.4 : .7} strokeDasharray={active ? "3 5" : "2 7"} opacity={active ? .9 : .42}><animateTransform attributeName="transform" type="rotate" from="0" to={index % 2 ? "-360" : "360"} dur={`${12 + index}s`} repeatCount="indefinite" /></circle>
          <circle r={active ? 18 : 13} fill="#080811" stroke={artist.color} strokeWidth={active ? 2.5 : 1.5} />
          <circle r={active ? 11 : 7} fill={artist.color} opacity=".9" filter="url(#map-glow)" />
          <circle r={active ? 5 : 3.5} fill="url(#node-core)" />
          <g transform={`translate(${-labelWidth / 2} ${active ? 34 : 27})`}>
            <rect width={labelWidth} height="25" rx="12.5" fill="rgba(5,5,12,.78)" stroke={active ? artist.color : "rgba(255,255,255,.1)"} strokeWidth=".8" />
            <text x={labelWidth / 2} y="16.5" textAnchor="middle" fill={active ? "white" : "rgba(255,255,255,.78)"} fontSize={size.width < 520 ? 9.5 : 11} fontWeight="700" letterSpacing=".3">{artist.name}</text>
          </g>
        </g>;
      })}</g>
    </svg>
    <p className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-black/50 px-4 py-2 text-[9px] uppercase tracking-[.18em] text-white/55 backdrop-blur-xl">{hint}</p>
  </div>;
}

function roundedRect(context: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) {
  context.beginPath(); context.roundRect(x, y, width, height, radius); context.closePath();
}

function labelSprite(text: string, color: string, active: boolean) {
  const canvas = document.createElement("canvas"); canvas.width = 640; canvas.height = 128;
  const context = canvas.getContext("2d")!; context.clearRect(0, 0, 640, 128);
  roundedRect(context, 64, 18, 512, 78, 39); context.fillStyle = active ? "rgba(8,8,18,.94)" : "rgba(8,8,18,.72)"; context.fill();
  context.strokeStyle = active ? color : "rgba(255,255,255,.16)"; context.lineWidth = active ? 4 : 2; context.stroke();
  context.font = `${active ? 700 : 600} 32px sans-serif`; context.textAlign = "center"; context.fillStyle = active ? "#ffffff" : color; context.fillText(text, 320, 68);
  const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false })); sprite.scale.set(4.4, .88, 1); return sprite;
}

function glowTexture() {
  const canvas = document.createElement("canvas"); canvas.width = 128; canvas.height = 128; const context = canvas.getContext("2d")!;
  const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64); gradient.addColorStop(0, "rgba(255,255,255,1)"); gradient.addColorStop(.18, "rgba(255,255,255,.8)"); gradient.addColorStop(.5, "rgba(255,255,255,.16)"); gradient.addColorStop(1, "rgba(255,255,255,0)"); context.fillStyle = gradient; context.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(canvas);
}

function Galaxy({ artists, selected, onSelect, hint, resetLabel, live }: { artists: MusicArtist[]; selected: string | null; onSelect: (id: string) => void; hint: string; resetLabel: string; live: string }) {
  const host = useRef<HTMLDivElement>(null);
  const resetRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const element = host.current; if (!element) return;
    const scene = new THREE.Scene(); scene.fog = new THREE.FogExp2(0x05050c, .027);
    const camera = new THREE.PerspectiveCamera(47, element.clientWidth / element.clientHeight, .1, 100); camera.position.set(0, 2.2, 16);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); renderer.setPixelRatio(Math.min(devicePixelRatio, 2)); renderer.setSize(element.clientWidth, element.clientHeight); renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.18; element.appendChild(renderer.domElement);
    const controls = new OrbitControls(camera, renderer.domElement); controls.enableDamping = true; controls.dampingFactor = .04; controls.autoRotate = !matchMedia("(prefers-reduced-motion: reduce)").matches; controls.autoRotateSpeed = .22; controls.minDistance = 6; controls.maxDistance = 28;
    scene.add(new THREE.AmbientLight(0x9d8fff, 1.2)); const light = new THREE.PointLight(0xb8deff, 80, 40); light.position.set(2, 4, 5); scene.add(light);
    const glow = glowTexture();
    const universe = new THREE.Group(); scene.add(universe);

    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(.52, 2), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0x8b5cff, emissiveIntensity: 2.8, roughness: .12, metalness: .3 })); universe.add(core);
    const coreGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glow, color: 0x8b5cff, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })); coreGlow.scale.set(4.6, 4.6, 1); universe.add(coreGlow);
    [1.05, 1.48].forEach((radius, index) => { const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, .012, 8, 120), new THREE.MeshBasicMaterial({ color: index ? 0x00d9ff : 0xa678ff, transparent: true, opacity: .45 })); ring.rotation.set(Math.PI / (2.4 + index), index * .8, index * .4); universe.add(ring); });

    const starGeometry = new THREE.BufferGeometry(); const starPoints = new Float32Array(2200 * 3); const starColors = new Float32Array(2200 * 3);
    for (let i = 0; i < 2200; i++) { const radius = 7 + Math.random() * 29; const theta = Math.random() * Math.PI * 2; const phi = Math.acos(2 * Math.random() - 1); starPoints[i * 3] = radius * Math.sin(phi) * Math.cos(theta); starPoints[i * 3 + 1] = radius * Math.cos(phi); starPoints[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta); const tint = i % 5 === 0 ? new THREE.Color(0x8dbdff) : i % 7 === 0 ? new THREE.Color(0xd9a0ff) : new THREE.Color(0xffffff); starColors.set(tint.toArray(), i * 3); }
    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPoints, 3)); starGeometry.setAttribute("color", new THREE.BufferAttribute(starColors, 3)); const stars = new THREE.Points(starGeometry, new THREE.PointsMaterial({ vertexColors: true, size: .045, transparent: true, opacity: .72, sizeAttenuation: true })); scene.add(stars);

    const dustGeometry = new THREE.BufferGeometry(); const dustPoints = new Float32Array(1000 * 3); const dustColors = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) { const arm = i % 3; const radius = .8 + Math.random() * 10; const theta = radius * .72 + arm * Math.PI * 2 / 3 + (Math.random() - .5) * .55; dustPoints[i * 3] = Math.cos(theta) * radius; dustPoints[i * 3 + 1] = (Math.random() - .5) * (.16 + radius * .04); dustPoints[i * 3 + 2] = Math.sin(theta) * radius; const tint = arm === 1 ? new THREE.Color(0x00d9ff) : new THREE.Color(0x9c63ff); dustColors.set(tint.toArray(), i * 3); }
    dustGeometry.setAttribute("position", new THREE.BufferAttribute(dustPoints, 3)); dustGeometry.setAttribute("color", new THREE.BufferAttribute(dustColors, 3)); universe.add(new THREE.Points(dustGeometry, new THREE.PointsMaterial({ vertexColors: true, size: .035, transparent: true, opacity: .32, blending: THREE.AdditiveBlending })));

    const visible = new Set(artists.map((artist) => artist.id)); const objects: THREE.Mesh[] = []; const planets: Array<{ mesh: THREE.Mesh; baseY: number; speed: number }> = [];
    musicRelations.filter((relation) => visible.has(relation.source) && visible.has(relation.target)).forEach((relation, index) => {
      const a = artists.find((item) => item.id === relation.source)!; const b = artists.find((item) => item.id === relation.target)!; const start = new THREE.Vector3(...a.position); const end = new THREE.Vector3(...b.position); const midpoint = start.clone().lerp(end, .5); midpoint.y += .65 + (index % 3) * .16; midpoint.multiplyScalar(1.06); const curve = new THREE.QuadraticBezierCurve3(start, midpoint, end); const highlighted = selected && (selected === a.id || selected === b.id);
      const geometry = highlighted ? new THREE.TubeGeometry(curve, 32, .018, 6, false) : new THREE.BufferGeometry().setFromPoints(curve.getPoints(36)); const material = highlighted ? new THREE.MeshBasicMaterial({ color: index % 2 ? 0x9c7cff : 0x37d9ff, transparent: true, opacity: .78, blending: THREE.AdditiveBlending }) : new THREE.LineBasicMaterial({ color: 0x9a96c9, transparent: true, opacity: .15 }); const connection = highlighted ? new THREE.Mesh(geometry, material) : new THREE.Line(geometry, material); universe.add(connection);
    });
    artists.forEach((artist, index) => {
      const active = artist.id === selected; const radius = active ? .48 : .29 + (index % 4) * .028; const material = new THREE.MeshStandardMaterial({ color: artist.color, emissive: artist.color, emissiveIntensity: active ? 2.1 : .65, roughness: .23, metalness: .22 }); const mesh = new THREE.Mesh(new THREE.SphereGeometry(radius, 32, 24), material); mesh.position.set(...artist.position); mesh.userData.artistId = artist.id; universe.add(mesh); objects.push(mesh); planets.push({ mesh, baseY: mesh.position.y, speed: .65 + index * .035 });
      const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: glow, color: artist.color, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: active ? .9 : .52 })); halo.scale.set(active ? 2.6 : 1.5, active ? 2.6 : 1.5, 1); mesh.add(halo);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(radius * (active ? 2 : 1.72), active ? .022 : .012, 8, 80), new THREE.MeshBasicMaterial({ color: artist.color, transparent: true, opacity: active ? .9 : .48, blending: THREE.AdditiveBlending })); ring.rotation.set(Math.PI / (2.5 + index % 2), index * .33, index * .18); mesh.add(ring);
      if (active) { const secondRing = ring.clone(); secondRing.scale.setScalar(1.34); secondRing.rotation.set(Math.PI / 3.2, 1.1, .3); mesh.add(secondRing); }
      const label = labelSprite(artist.name, artist.color, active); label.position.set(0, radius + .58, 0); mesh.add(label);
    });

    const raycaster = new THREE.Raycaster(); const pointer = new THREE.Vector2();
    const pick = (event: PointerEvent) => { const rect = renderer.domElement.getBoundingClientRect(); pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1; pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1; raycaster.setFromCamera(pointer, camera); const hit = raycaster.intersectObjects(objects, false)[0]; if (hit) onSelect(hit.object.userData.artistId as string); };
    const hover = (event: PointerEvent) => { const rect = renderer.domElement.getBoundingClientRect(); pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1; pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1; raycaster.setFromCamera(pointer, camera); renderer.domElement.style.cursor = raycaster.intersectObjects(objects, false).length ? "pointer" : "grab"; };
    renderer.domElement.addEventListener("pointerup", pick); renderer.domElement.addEventListener("pointermove", hover);
    const resize = () => { const width = element.clientWidth; const height = element.clientHeight; camera.aspect = width / height; camera.updateProjectionMatrix(); renderer.setSize(width, height); }; const observer = new ResizeObserver(resize); observer.observe(element);
    resetRef.current = () => { camera.position.set(0, 2.2, 16); controls.target.set(0, 0, 0); controls.update(); };
    const clock = new THREE.Clock(); let frame = 0; const animate = () => { frame = requestAnimationFrame(animate); const time = clock.getElapsedTime(); controls.update(); core.rotation.x = time * .22; core.rotation.y = time * .34; coreGlow.material.rotation = time * .05; planets.forEach(({ mesh, baseY, speed }, index) => { mesh.rotation.y += .002 + index * .00003; mesh.position.y = baseY + Math.sin(time * speed + index) * .045; }); stars.rotation.y = time * .002; universe.rotation.y += .00025; renderer.render(scene, camera); }; animate();
    return () => { cancelAnimationFrame(frame); observer.disconnect(); renderer.domElement.removeEventListener("pointerup", pick); renderer.domElement.removeEventListener("pointermove", hover); controls.dispose(); renderer.dispose(); glow.dispose(); scene.traverse((object) => { if (object instanceof THREE.Mesh || object instanceof THREE.Line || object instanceof THREE.Points) { object.geometry?.dispose(); const materials = Array.isArray(object.material) ? object.material : [object.material]; materials.forEach((item) => { if (item instanceof THREE.SpriteMaterial && item.map) item.map.dispose(); item.dispose(); }); } }); while (element.firstChild) element.removeChild(element.firstChild); };
  }, [artists, selected, onSelect]);

  return <div className="relative overflow-hidden rounded-[2rem] border border-violet-300/15 bg-[#03030a] shadow-[0_40px_120px_rgba(0,0,0,.65)]">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(112,75,255,.24),transparent_32%),radial-gradient(circle_at_17%_18%,rgba(0,217,255,.12),transparent_28%),radial-gradient(circle_at_82%_78%,rgba(234,66,255,.12),transparent_31%)]" />
    <div ref={host} className="relative h-[70vh] min-h-[560px] w-full" aria-label={hint} />
    <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-2 text-[9px] font-bold tracking-[.2em] text-white/60 backdrop-blur-xl"><span className="size-1.5 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" />{live}</div>
    <button type="button" onClick={() => resetRef.current?.()} className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-4 py-2 text-xs font-semibold text-white/70 backdrop-blur-xl transition hover:border-white/30 hover:text-white"><RotateCcw size={14} />{resetLabel}</button>
    <p className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-black/50 px-4 py-2 text-[9px] uppercase tracking-[.18em] text-white/55 backdrop-blur-xl">{hint}</p>
  </div>;
}

export function MusicRelationshipExplorer({ language, initialTag = null }: { language: Language; initialTag?: string | null }) {
  const t = copy[language]; const [mode, setMode] = useState<"map" | "galaxy">("map"); const [tag, setTag] = useState<string | null>(initialTag && musicTags.includes(initialTag) ? initialTag : null); const [selected, setSelected] = useState<string | null>("alex");
  const artists = useMemo(() => tag ? musicArtists.filter((artist) => artist.tags.includes(tag)) : musicArtists, [tag]);
  const visible = useMemo(() => new Set(artists.map((artist) => artist.id)), [artists]);
  const visibleRelations = useMemo(() => musicRelations.filter((relation) => visible.has(relation.source) && visible.has(relation.target)), [visible]);
  const selectedArtist = musicArtists.find((artist) => artist.id === selected) ?? null;
  const relations = selectedArtist ? musicRelations.filter((relation) => relation.source === selectedArtist.id || relation.target === selectedArtist.id) : [];
  const handleSelect = useCallback((id: string) => setSelected(id), []);

  return <article className="relative min-h-screen overflow-hidden px-4 pb-24 pt-28">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-[760px] bg-[radial-gradient(circle_at_10%_8%,rgba(100,76,255,.2),transparent_34%),radial-gradient(circle_at_84%_22%,rgba(0,174,255,.12),transparent_32%)]" />
    <div className="pointer-events-none absolute left-1/2 top-40 h-px w-[82vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />
    <div className="relative mx-auto max-w-[1480px]">
      <Link href="/music-friends" className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:-translate-x-1"><ArrowLeft size={16} />{t.back}</Link>
      <header className="mb-10 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end"><div><p className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.28em] text-violet-300"><Sparkles size={15} />{t.eyebrow}</p><h1 className="gradient-text-animated font-display text-5xl font-bold tracking-[-.055em] md:text-7xl lg:text-[6.4rem] lg:leading-[.9]">{t.title}</h1></div><p className="max-w-xl border-l border-violet-300/30 pl-5 text-base leading-relaxed text-muted-foreground md:text-lg">{t.intro}</p></header>
      <section className="mb-6 rounded-[1.6rem] border border-white/10 bg-white/[.025] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,.04)] backdrop-blur-xl md:flex md:items-center md:justify-between">
        <div className="flex gap-2"><button onClick={() => setMode("map")} aria-pressed={mode === "map"} className={`inline-flex flex-1 items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold transition md:flex-none ${mode === "map" ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-[0_8px_30px_rgba(111,76,255,.35)]" : "text-muted-foreground hover:bg-white/5 hover:text-white"}`}><Network size={16} />{t.map}</button><button onClick={() => setMode("galaxy")} aria-pressed={mode === "galaxy"} className={`inline-flex flex-1 items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold transition md:flex-none ${mode === "galaxy" ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-[0_8px_30px_rgba(182,70,255,.3)]" : "text-muted-foreground hover:bg-white/5 hover:text-white"}`}><Orbit size={16} />{t.galaxy}</button></div>
        <div className="mt-3 flex items-center justify-between gap-6 px-3 pb-1 font-mono text-[10px] uppercase tracking-[.16em] text-white/45 md:mt-0 md:pb-0"><span>{String(artists.length).padStart(2, "0")} {t.nodes}</span><span className="h-3 w-px bg-white/15" /><span>{String(visibleRelations.length).padStart(2, "0")} {t.links}</span></div>
      </section>
      <div className="mb-6"><div className="mb-3 flex items-center justify-between"><p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.22em] text-muted-foreground"><Crosshair size={13} />{t.filters}</p>{tag && <button onClick={() => setTag(null)} className="text-[10px] font-bold uppercase tracking-wider text-primary hover:text-white">× {tag}</button>}</div><div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"><button onClick={() => setTag(null)} aria-pressed={!tag} className={`shrink-0 rounded-full border px-3.5 py-2 text-xs font-semibold transition ${!tag ? "border-violet-400/70 bg-violet-500/15 text-violet-200 shadow-[0_0_24px_rgba(124,92,255,.18)]" : "border-white/10 text-muted-foreground hover:border-white/25 hover:text-white"}`}>{t.all}</button>{musicTags.map((item) => <button key={item} onClick={() => setTag(tag === item ? null : item)} aria-pressed={tag === item} className={`shrink-0 rounded-full border px-3.5 py-2 text-xs font-semibold transition ${tag === item ? "border-violet-400/70 bg-violet-500/15 text-violet-200 shadow-[0_0_24px_rgba(124,92,255,.18)]" : "border-white/10 text-muted-foreground hover:border-white/25 hover:text-white"}`}>{item}</button>)}</div></div>
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_330px]">{mode === "map" ? <NetworkMap artists={artists} selected={selected} onSelect={handleSelect} hint={t.hintMap} live={t.live} /> : <Galaxy artists={artists} selected={selected} onSelect={handleSelect} hint={t.hintGalaxy} resetLabel={t.reset} live={t.live} />}
        <aside className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#080810]/75 p-6 shadow-[0_40px_90px_rgba(0,0,0,.35)] backdrop-blur-xl xl:min-h-full" aria-live="polite">{selectedArtist ? <><div className="pointer-events-none absolute -right-12 -top-12 size-48 rounded-full opacity-20 blur-3xl" style={{ background: selectedArtist.color }} /><div className="relative mb-7 border-b border-white/10 pb-7"><div className="mb-5 flex items-center justify-between"><span className="relative grid size-16 place-items-center rounded-full border text-lg font-black text-white shadow-[0_0_32px_currentColor]" style={{ color: selectedArtist.color, borderColor: selectedArtist.color, background: `${selectedArtist.color}22` }}>{selectedArtist.name.slice(0, 2).toUpperCase()}<span className="absolute -inset-2 animate-[spin_12s_linear_infinite] rounded-full border border-dashed opacity-40" /></span><span className="font-mono text-[9px] uppercase tracking-[.22em] text-white/35">ID · {selectedArtist.id.slice(0, 8)}</span></div><h2 className="font-display text-3xl font-bold tracking-tight">{selectedArtist.name}</h2><p className="mt-1 text-sm text-muted-foreground">{selectedArtist.subtitle}</p></div><h3 className="mb-3 text-[10px] font-bold uppercase tracking-[.2em] text-muted-foreground">{t.connections}</h3><div className="space-y-2">{relations.map((relation) => { const otherId = relation.source === selectedArtist.id ? relation.target : relation.source; const other = musicArtists.find((artist) => artist.id === otherId)!; return <button key={`${relation.source}-${relation.target}`} onClick={() => setSelected(other.id)} className="group/link flex w-full items-start gap-3 rounded-2xl border border-white/[.07] bg-white/[.025] p-3 text-left transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[.05]"><span className="mt-1.5 size-2 shrink-0 rounded-full shadow-[0_0_12px_currentColor]" style={{ color: other.color, background: other.color }} /><span><span className="block text-sm font-bold transition group-hover/link:text-violet-200">{other.name}</span><span className="mt-1 block text-xs leading-relaxed text-muted-foreground">{relation.label}</span></span></button>; })}</div><h3 className="mb-3 mt-7 text-[10px] font-bold uppercase tracking-[.2em] text-muted-foreground">{t.tags}</h3><div className="flex flex-wrap gap-2">{selectedArtist.tags.map((item) => <button key={item} onClick={() => setTag(item)} className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-muted-foreground transition hover:border-primary/50 hover:bg-primary/10 hover:text-primary">#{item}</button>)}</div></> : null}</aside>
      </div>
    </div>
  </article>;
}
