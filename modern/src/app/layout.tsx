import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFrame } from "@/components/site-frame";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://morganerouvroy.github.io"),
  title: {
    default: "Morgane Rouvroy | Systems Engineering Portfolio",
    template: "%s | Morgane Rouvroy",
  },
  description:
    "Senior Software Engineer specialized in database systems, query optimization, metadata interoperability, and analytical infrastructure.",
  openGraph: {
    type: "website",
    url: "https://morganerouvroy.github.io",
    title: "Morgane Rouvroy | Systems Engineering Portfolio",
    description:
      "Senior Software Engineer specialized in database systems, query optimization, and metadata interoperability.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Morgane Rouvroy – Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Morgane Rouvroy | Systems Engineering Portfolio",
    description:
      "Senior Software Engineer specialized in database systems, query optimization, and metadata interoperability.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
