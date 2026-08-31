export type MusicArtist = {
  id: string;
  name: string;
  subtitle: string;
  tags: string[];
  color: string;
  position: [number, number, number];
};

export type MusicRelation = {
  source: string;
  target: string;
  label: string;
  tags: string[];
};

export const musicArtists: MusicArtist[] = [
  { id: "noeron", name: "Noeron", subtitle: "Psicodelia · Techno", tags: ["Lloret", "Techno", "Psicodelia", "Producción"], color: "#fb923c", position: [-4.8, 2.7, 0.5] },
  { id: "limabeatz", name: "Limabeatz", subtitle: "Javi Lara · Producción", tags: ["Lloret", "Zoom Club", "Hip-hop", "Producción"], color: "#34d399", position: [-2.8, 4.3, -1.2] },
  { id: "francesc", name: "Francesc Ferrer", subtitle: "Inkiet · ON·OFF", tags: ["Lloret", "ON·OFF", "Comunidad", "DJ"], color: "#fb7185", position: [1.2, 4.8, 0.6] },
  { id: "nuria", name: "Núria Ghia", subtitle: "BlueCube Records", tags: ["Barcelona", "ON·OFF", "Techno", "Producción", "Sello"], color: "#f472b6", position: [3.8, 3.6, -0.8] },
  { id: "manel", name: "Manel Alsina", subtitle: "Productor · Selector", tags: ["Catalunya", "Electrónica", "Producción", "Experimental"], color: "#38bdf8", position: [5.3, 1.1, 1.4] },
  { id: "oriol", name: "Oriol Vilella", subtitle: "Guitarra · Flamenco", tags: ["Lloret", "Instrumentos", "Flamenco", "Experimental"], color: "#f59e0b", position: [5.1, -2.2, -0.2] },
  { id: "nico", name: "Nico Cabañas", subtitle: "Estado de Bienestar", tags: ["Barcelona", "Electro", "Producción", "Sello", "Ombra"], color: "#22d3ee", position: [2.9, -4.4, 0.8] },
  { id: "none", name: "None", subtitle: "Andropunk Records", tags: ["Lloret", "Electrónica", "Experimental", "Producción", "Sello"], color: "#e879f9", position: [-0.4, -5.2, -1.5] },
  { id: "replicante", name: "Replicante Norman", subtitle: "Electro · Ciencia ficción", tags: ["Lloret", "Barcelona", "Electro", "Producción", "Ciencia ficción"], color: "#a78bfa", position: [-3.5, -4.1, 1.1] },
  { id: "tillo", name: "DJ Tillo", subtitle: "Skratch Comando", tags: ["Girona", "Hip-hop", "Turntablism", "DJ"], color: "#fbbf24", position: [-5.3, -1.4, -0.8] },
  { id: "panda", name: "DJ Panda", subtitle: "Cultura urbana", tags: ["Lloret", "Hip-hop", "Reggae", "DJ"], color: "#a3e635", position: [-5.9, 0.7, 1.7] },
  { id: "victor", name: "Víctor Garnier", subtitle: "neXus · Chapman Stick", tags: ["Lloret", "Barcelona", "Instrumentos", "Audiovisual", "Experimental"], color: "#10b981", position: [4.3, -0.4, -2] },
  { id: "alex", name: "Alex Klar", subtitle: "Zoom Club · 1998—2012", tags: ["Lloret", "Zoom Club", "House", "Minimal", "Techno", "DJ"], color: "#06b6d4", position: [-1.2, 2.1, 2.1] },
  { id: "mae-citrico", name: "Mae & Cítrico", subtitle: "Girona · Zoom orbit", tags: ["Girona", "Zoom Club", "Minimal", "Techno", "DJ"], color: "#ec4899", position: [1.3, 1.8, -2.2] },
  { id: "rotten", name: "Rotten", subtitle: "Trance · Hipnótico", tags: ["Lloret", "Memoria", "Trance", "DJ"], color: "#cbd5e1", position: [-2.4, -0.4, -3.2] },
  { id: "javi-lobato", name: "Javi Lobato", subtitle: "Minimal · Hip-hop", tags: ["Lloret", "Memoria", "Minimal", "Hip-hop", "DJ"], color: "#94a3b8", position: [0, -1.8, 3.4] },
  { id: "jrob", name: "J.Rob", subtitle: "Techno atmosférico", tags: ["Lloret", "Zoom Club", "Memoria", "Minimal", "Techno", "DJ"], color: "#e2e8f0", position: [-2.2, 0.8, 3.1] },
];

export const musicRelations: MusicRelation[] = [
  { source: "alex", target: "limabeatz", label: "Cabina de Zoom Club", tags: ["Zoom Club", "Lloret"] },
  { source: "alex", target: "jrob", label: "Resistencia y sesiones en Zoom", tags: ["Zoom Club", "Lloret", "Memoria"] },
  { source: "alex", target: "mae-citrico", label: "Órbita Zoom · 2009", tags: ["Zoom Club", "Girona"] },
  { source: "jrob", target: "javi-lobato", label: "Memoria de club", tags: ["Memoria", "Minimal"] },
  { source: "javi-lobato", target: "rotten", label: "Amistad y noches de Lloret", tags: ["Memoria", "Lloret"] },
  { source: "francesc", target: "nuria", label: "Encuentro ON·OFF", tags: ["ON·OFF", "Comunidad"] },
  { source: "francesc", target: "noeron", label: "Escena electrónica local", tags: ["Lloret", "Comunidad"] },
  { source: "none", target: "replicante", label: "Electrónica experimental de Lloret", tags: ["Lloret", "Electrónica", "Experimental"] },
  { source: "replicante", target: "nico", label: "Escena electro de Barcelona", tags: ["Barcelona", "Electro", "Producción"] },
  { source: "nico", target: "nuria", label: "Sellos y producción electrónica", tags: ["Barcelona", "Producción", "Sello"] },
  { source: "tillo", target: "panda", label: "Hip-hop y cultura urbana", tags: ["Hip-hop", "DJ"] },
  { source: "panda", target: "limabeatz", label: "Cultura urbana de Lloret", tags: ["Lloret", "Hip-hop"] },
  { source: "oriol", target: "victor", label: "Instrumentos y exploración", tags: ["Instrumentos", "Experimental"] },
  { source: "victor", target: "manel", label: "Producción y lenguaje experimental", tags: ["Producción", "Experimental"] },
  { source: "manel", target: "nuria", label: "Electrónica catalana", tags: ["Catalunya", "Producción"] },
  { source: "noeron", target: "none", label: "Investigación sonora local", tags: ["Lloret", "Experimental"] },
];

export const musicTags = Array.from(new Set(musicArtists.flatMap((artist) => artist.tags))).sort((a, b) => a.localeCompare(b));
