import type { Metadata } from "next";
import { OpenStemsProject } from "@/components/openstems-project";

export const metadata: Metadata = {
  title: "openStems | Separación de audio con IA local | Cesco.dev",
  description: "Demo de openStems, plataforma local para separar, escuchar y gestionar stems musicales mediante Demucs.",
  alternates: { canonical: "https://cesco.dev/proyectos/openstems" },
  openGraph: { title: "openStems | IA local para separación de audio", description: "Separación y gestión de stems con Demucs, ejecutada completamente en local.", url: "https://cesco.dev/proyectos/openstems", images: [{ url: "https://i.ytimg.com/vi/_5ZUFD1iu-g/maxresdefault.jpg", width: 1280, height: 720, alt: "Demo de openStems con separación local de audio" }] },
};

export default function OpenStemsPage() { return <OpenStemsProject />; }
