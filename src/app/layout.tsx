import type { Metadata } from "next";
import { Allura, Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = Geist({ subsets: ["latin"], variable: "--font-sans" });

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
      className={cn(
        "h-full scroll-smooth antialiased font-sans",
        fontSans.variable,
        fontSerif.variable,
        fontScript.variable,
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
