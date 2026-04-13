import type { Metadata } from "next";
import { Nunito, Fredoka } from "next/font/google";
import Script from "next/script";
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
  title: "Vasos Personalizados | Diseños Divertidos para Niños",
  description: "Vasos de plástico personalizados con diseños adorables para fiestas infantiles. Animales, héroes, princesas y más. ¡Ordena por WhatsApp!",
  keywords: ["vasos personalizados", "vasos para niños", "fiesta infantil", "vasos estampados", "vasos divertidos", "cumpleaños infantil"],
  metadataBase: new URL("https://vasos-personalizados.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vasos Personalizados | Diseños Divertidos para Niños",
    description: "Vasos de plástico personalizados con diseños adorables para fiestas infantiles.",
    locale: "es_MX",
    type: "website",
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
    "name": "Vasos Personalizados",
    "description": "Tienda de vasos de plástico personalizados con diseños infantiles",
    "priceRange": "$$",
    "telephone": "+523313262108",
    "url": "https://vasos-personalizados.vercel.app/"
  };

  return (
    <html lang="es">
      <body
        className={`${nunito.variable} ${fredoka.variable} antialiased`}
      >
        <Script
          id="json-ld-store"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
