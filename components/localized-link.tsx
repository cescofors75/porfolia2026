import Link from "next/link";
import type { ComponentProps } from "react";
import type { Language } from "@/lib/translations";
import { localizedHref } from "@/lib/seo";

export default function LocalizedLink({ language, href, ...props }: ComponentProps<typeof Link> & { language: Language }) {
  return <Link {...props} href={typeof href === "string" ? localizedHref(href, language) : href} />;
}
