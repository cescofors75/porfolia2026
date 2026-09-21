import { PluginArticle } from "@/components/plugins";
import { getLanguage } from "@/lib/language-server";
import { pluginMetadata } from "@/lib/plugins";

export async function generateMetadata() { return pluginMetadata(await getLanguage()); }
export default async function Page() { return <PluginArticle language={await getLanguage()} />; }
