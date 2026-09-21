import { PluginCard } from "@/components/plugins";
import { getLanguage } from "@/lib/language-server";
import { pluginCopy, pluginMetadata } from "@/lib/plugins";

export async function generateMetadata() { return pluginMetadata(await getLanguage(), "/plugins"); }
export default async function PluginsPage() {
  const language = await getLanguage();
  return <div className="max-w-7xl mx-auto px-4 pt-32 pb-12"><h1 className="font-display text-5xl md:text-7xl font-bold mb-5">Plugins</h1><p className="text-xl text-muted-foreground">{pluginCopy[language].intro}</p><PluginCard language={language} /></div>;
}
