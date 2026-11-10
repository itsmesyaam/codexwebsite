import type { Metadata } from "next";

export function pageMeta({
  title,
  description,
  path,
  noindex = false,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  type?: "website" | "article";
}): Metadata {
  const ogTitle = title.split(" | ")[0];
  const image = `/og/?title=${encodeURIComponent(ogTitle)}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type,
      siteName: "CodXQ",
      locale: "en_IN",
      images: [{ url: image, width: 1200, height: 630, alt: ogTitle }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

export const buildMetadata = pageMeta;
