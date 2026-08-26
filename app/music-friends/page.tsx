import type { Metadata } from "next";
import { MusicFriends } from "@/components/music-friends";

export const metadata: Metadata = {
  title: "Music & Friends | Noeron, Limabeatz y Manel Alsina | Cesco.dev",
  description: "Una colección abierta de música creada por amigos y artistas cercanos: Noeron, Limabeatz, Manel Alsina y próximas incorporaciones.",
  alternates: { canonical: "https://cesco.dev/music-friends" },
  openGraph: { title: "Music & Friends | Cesco.dev", description: "Escuchar la música de Noeron, Limabeatz, Manel Alsina y más artistas amigos.", url: "https://cesco.dev/music-friends", images: [{ url: "https://image-cdn-fa.spotifycdn.com/image/ab676161000051741e3c2370aee5ddfe451d3e5c", width: 320, height: 320, alt: "Limabeatz" }] },
};

export default function MusicFriendsPage() { return <MusicFriends />; }
