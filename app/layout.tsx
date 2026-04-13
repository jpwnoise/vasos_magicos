import type { Metadata } from "next";
import { Nunito, Fredoka } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vasos Mágicos | Diseños Divertidos para Niños",
  description: "Vasos de plástico personalizados con diseños adorables para fiestas infantiles. Animales, héroes, princesas y más. ¡Ordena por WhatsApp!",
  keywords: ["vasos personalizados", "vasos para niños", "fiesta infantil", "vasos estampados", "vasos divertidos", "cumpleaños infantil"],
  metadataBase: new URL("https://vasosmagicos.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vasos Mágicos | Diseños Divertidos para Niños",
    description: "Vasos de plástico personalizados con diseños adorables para fiestas infantiles.",
    url: "https://vasosmagicos.vercel.app/",
    siteName: "Vasos Mágicos",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vasos Mágicos - Diseños Divertidos para Niños",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vasos Mágicos | Diseños Divertidos para Niños",
    description: "Vasos de plástico personalizados con diseños adorables para fiestas infantiles.",
    images: ["/og-image.png"],
  },
};

export const viewport = {
  themeColor: "#faf5ff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "Vasos Mágicos",
    "description": "Tienda de vasos de plástico personalizados con diseños infantiles",
    "priceRange": "$$",
    "telephone": "+523313262108",
    "url": "https://vasosmagicos.vercel.app/"
  };

  return (
    <html lang="es">
      <body
        className={`${nunito.variable} ${fredoka.variable} antialiased`}
      >
        <CartProvider>
          <Script
            id="json-ld-store"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {children}
          <Analytics />
        </CartProvider>
      </body>
    </html>
  );
}
