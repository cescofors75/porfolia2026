export type ProcessPhase = "Origen" | "Prototipo" | "Integración" | "Interfaz" | "Instrumento";

const files = [
  "024E21CF-B281-45F2-B984-8882B79763D3", "03250929-56D4-4299-8A8B-E1DDFFEBC295", "06DAD186-B2AB-4061-B3CE-374E2D614B75",
  "25ea47ca-18ff-4133-ac24-d63d17904e2f", "3355e089-de62-4b80-8584-51411fdf1897", "3B2D37E9-CF2A-461F-910B-D37628E0CF77",
  "8dced7d5-5878-4c78-b532-f0829dadfdd5", "bb86264d-a12b-4bd3-baf6-4e84914fe769", "E8D38C57-27EF-43CE-A39D-0555EA0D0815",
  "F51D7076-249D-4F7A-B53E-EE7F6970CBD9", "F7667D45-43CA-4702-9920-7214F29B0F9D", "IMG_6497", "IMG_6507", "IMG_6640",
  "IMG_6704", "IMG_6713", "IMG_6723", "IMG_6746", "IMG_6747", "IMG_6749", "IMG_6752", "IMG_6805", "IMG_6806", "IMG_6841",
  "IMG_6843", "IMG_6847", "IMG_6877", "IMG_6908", "IMG_6996", "IMG_7105", "IMG_7170", "IMG_7177", "IMG_7202", "IMG_7209",
  "IMG_7298", "IMG_7304", "IMG_7333", "IMG_7363", "IMG_7392", "IMG_7399", "IMG_7400", "IMG_7429", "IMG_7550",
  "IMG_7742", "IMG_7770", "IMG_7891", "IMG_7892", "IMG_7893", "IMG_7894", "IMG_7895", "IMG_7896", "IMG_7916", "IMG_8006",
  "IMG_8083", "IMG_A812A7EB-F854-4D76-B0CC-E50D02643C36", "IMG_ECDFE0E8-D963-4BD1-A81B-BEA30BBC69B6",
];

function numericId(name: string) {
  const match = name.match(/IMG_(\d+)/);
  return match ? Number(match[1]) : 7000;
}

function phaseFor(name: string): ProcessPhase {
  const id = numericId(name);
  if (id < 6700) return "Origen";
  if (id < 7100) return "Prototipo";
  if (id < 7400) return "Integración";
  if (id < 7900) return "Interfaz";
  return "Instrumento";
}

const phaseCopy: Record<ProcessPhase, string> = {
  Origen: "Primeras pruebas eléctricas y decisiones de arquitectura.",
  Prototipo: "Placas, buses y firmware encontrando una forma común.",
  Integración: "Sincronización entre módulos y primeras sesiones completas.",
  Interfaz: "La máquina aprende a explicarse con luz, color y tacto.",
  Instrumento: "El prototipo se convierte en una unidad que se puede tocar.",
};

export const processArchive = files.map((name, index) => {
  const phase = phaseFor(name);
  return {
    id: name,
    src: `/gallery/${name}.webp`,
    phase,
    caption: phaseCopy[phase],
    number: String(index + 1).padStart(2, "0"),
  };
}).concat([
  { id: "daisy-pod-partner", src: "/daisy/daisyPodParther.jpeg", phase: "Instrumento" as ProcessPhase, caption: "Daisy Pod, cables y material del ecosistema tecnológico.", number: String(files.length + 1).padStart(2, "0") },
  { id: "daisy-crew", src: "/daisy/daisyRopa.jpeg", phase: "Instrumento" as ProcessPhase, caption: "Material de Electrosmith y Daisy para el laboratorio.", number: String(files.length + 2).padStart(2, "0") },
]);
