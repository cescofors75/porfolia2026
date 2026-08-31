import type { Metadata } from "next";
import { MusicRelationshipExplorer } from "@/components/music-relationship-explorer";
import { getLanguage } from "@/lib/language-server";

export const metadata: Metadata = {
  title: "Constelación sonora | Music & Friends | Cesco.dev",
  description: "Mapa interactivo y galaxia 3D de músicos, escenas, lugares y recuerdos conectados.",
  alternates: { canonical: "https://cesco.dev/music-friends/mapa" },
};

export default async function MusicFriendsMapPage({ searchParams }: { searchParams: Promise<{ tag?: string }> }) {
  const language = await getLanguage();
  const { tag } = await searchParams;
  return <MusicRelationshipExplorer language={language} initialTag={tag ?? null} />;
}
