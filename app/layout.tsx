import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Literata } from "next/font/google";
import { SiteShell } from "@/components/site-shell";
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
    default: "Abhimanyu Kucheria",
    template: "%s — Abhimanyu Kucheria",
  },
  description:
    "Public index for Abhimanyu Kucheria in Dubai, at Futurebits Tech. Biography, work, and writing are not filled in yet.",
  openGraph: {
    title: "Abhimanyu Kucheria",
    description:
      "Public index for Abhimanyu Kucheria in Dubai. The longer pages are still unwritten.",
    url: "https://abhikuch.com",
    siteName: "Abhimanyu Kucheria",
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
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
