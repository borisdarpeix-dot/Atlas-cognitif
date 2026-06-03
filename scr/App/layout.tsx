import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";

export const metadata: Metadata = {
  title: "ATLAS ⊙ — Architecture cognitive humain-IA",
  description:
    "ATLAS est un système cognitif pour structurer la collaboration entre un humain et une IA. Grammaire vivante, souveraineté humaine, orbitation.",
  openGraph: {
    title: "ATLAS ⊙",
    description: "Architecture cognitive pour la collaboration humain-IA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400;500&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
