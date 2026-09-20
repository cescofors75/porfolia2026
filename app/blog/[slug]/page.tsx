import { notFound } from "next/navigation";
import { getLanguage } from "@/lib/language-server";
import { findUpdate } from "@/lib/project-updates";
import { updateMetadata } from "@/lib/update-metadata";
import { ProjectUpdateArticle } from "@/components/project-updates";

type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const project = findUpdate((await params).slug);
  if (!project) notFound();
  return updateMetadata(project, await getLanguage(), true);
}
export default async function UpdatePost({ params }: Props) {
  const project = findUpdate((await params).slug);
  if (!project) notFound();
  return <ProjectUpdateArticle project={project} language={await getLanguage()} blog />;
}
