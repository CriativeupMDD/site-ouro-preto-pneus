import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsapp } from "@/components/ui/FloatingWhatsapp";
import { company } from "@/lib/site-content";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? company.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ouro Preto Pneus | Qualidade e confiança para o seu veículo",
    template: "%s | Ouro Preto Pneus",
  },
  description:
    "Pneus para carros, SUVs e utilitários das melhores marcas em Curitiba/PR. Atendimento especializado, segurança e o melhor custo-benefício. Fale agora pelo WhatsApp.",
  keywords: [
    "pneus curitiba",
    "pneus tatuquara",
    "troca de pneus",
    "pneus para carro",
    "pneus para suv",
    "loja de pneus",
    "ouro preto pneus",
  ],
  authors: [{ name: "Ouro Preto Pneus" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Ouro Preto Pneus",
    title: "Ouro Preto Pneus | Qualidade e confiança para o seu veículo",
    description:
      "Pneus para carros, SUVs e utilitários das melhores marcas em Curitiba/PR. Atendimento especializado e segurança para todas as estradas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ouro Preto Pneus | Qualidade e confiança para o seu veículo",
    description:
      "Pneus para carros, SUVs e utilitários das melhores marcas em Curitiba/PR. Fale agora pelo WhatsApp.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "TireShop",
  name: company.name,
  description: company.shortDescription,
  url: siteUrl,
  telephone: `+${company.whatsappNumber}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressLocality: company.address.city,
    addressRegion: company.address.state,
    addressCountry: "BR",
  },
  openingHours: "Mo-Sa 08:00-18:00",
  sameAs: [company.instagram, company.facebook].filter(Boolean),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-brand-black">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsapp />
      </body>
    </html>
  );
}
