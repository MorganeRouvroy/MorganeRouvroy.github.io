import type { Metadata } from "next";
import { generateMetadata as postGenerateMetadata } from "../../posts/[slug]/page";

type Props = { params: Promise<{ slug: string }> };

export { generateStaticParams } from "../../posts/[slug]/page";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const base = await postGenerateMetadata({ params });
  return { ...base, robots: { index: false } };
}

export { default } from "../../posts/[slug]/page";
