import { getLanguage } from "@/lib/language-server";
import { findUpdate } from "@/lib/project-updates";
import { updateMetadata } from "@/lib/update-metadata";
import { ProjectUpdateArticle } from "@/components/project-updates";

export async function generateMetadata() {
  return updateMetadata(findUpdate("raydrone")!, await getLanguage());
}
export default async function RayDronePage() {
  return <ProjectUpdateArticle project={findUpdate("raydrone")!} language={await getLanguage()} />;
}
