import type { Metadata } from "next";
import { Allura, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontSerif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const fontScript = Allura({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Emmily Dias | Social Media • Filmmaker • Editora",
  description:
    "Portfólio e proposta comercial de Emmily Dias — Social Media, Filmmaker e Editora.",
  openGraph: {
    title: "Emmily Dias | Social Media • Filmmaker • Editora",
    description:
      "Portfólio e proposta comercial de Emmily Dias — Social Media, Filmmaker e Editora.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${fontSans.variable} ${fontSerif.variable} ${fontScript.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
