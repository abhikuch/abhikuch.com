import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Literata } from "next/font/google";
import { SiteShell } from "@/components/site-shell";
import { identity, personJsonLd, websiteJsonLd } from "@/lib/facts";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
});

const plex = IBM_Plex_Mono({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abhikuch.com"),
  title: {
    default: identity.name,
    template: `%s — ${identity.name}`,
  },
  description: identity.sentence,
  openGraph: {
    title: identity.name,
    description: identity.sentence,
    url: "https://abhikuch.com",
    siteName: identity.name,
    locale: "en_AE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${literata.variable} ${plex.variable} h-full antialiased`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
