import { Award, Car, MapPin, Shield, TrendingUp, UserRoundCheck, Users, Wrench } from "lucide-react";
import type { Benefit, CompanyInfo, NavLink, ProductCategoryCard, StatItem } from "@/types/content";

/**
 * Fonte única de conteúdo do site. Na fase 2 (Supabase/admin) estes dados
 * passam a vir do banco — os componentes já consomem tudo por aqui, então
 * a troca não deve exigir mudanças nas sections/components.
 */

/**
 * `||` (não `??`) de propósito: na Vercel a env var pode existir mas vazia
 * (""), o que faria `new URL("")` quebrar o build em layout/robots/sitemap.
 */
export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || company.siteUrl;
}

export const company: CompanyInfo = {
  name: "Ouro Preto Pneus",
  shortDescription: "Segurança, qualidade e confiança para o seu veículo.",
  whatsappNumber: "5541999243784",
  whatsappDisplay: "(41) 99924-3784",
  address: {
    street: "Rua Paulina Kavinski Pontarolla, 451",
    neighborhood: "Tatuquara",
    city: "Curitiba",
    state: "PR",
    stateFull: "Paraná",
  },
  hours: "Segunda a sábado, das 8h às 18h",
  website: "ouropreto.meloja.com.br",
  siteUrl: "https://ouropreto.meloja.com.br",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  googleMapsEmbed: "",
};

export const navLinks: NavLink[] = [
  { label: "Início", href: "#inicio" },
  { label: "Pneus", href: "#produtos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Promoções", href: "#promocoes" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export const hero = {
  title: "Segurança, qualidade e confiança para o seu veículo.",
  description:
    "Pneus para carros, SUVs e utilitários das melhores marcas, com o atendimento que você confia.",
  primaryCta: "Solicitar orçamento",
  secondaryCta: "Ver produtos",
  sideLabelTop: "Qualidade move você mais longe",
  sideLabelBottom: "Pneus é mais segurança para o seu caminho",
};

export const benefits: Benefit[] = [
  {
    id: "seguranca",
    title: "Mais segurança",
    description: "Para você e sua família em todas as estradas.",
    icon: Shield,
  },
  {
    id: "marcas",
    title: "Marcas de qualidade",
    description: "Trabalhamos com as principais marcas do mercado.",
    icon: Award,
  },
  {
    id: "atendimento",
    title: "Atendimento especializado",
    description: "Equipe pronta para indicar o pneu ideal para o seu veículo.",
    icon: UserRoundCheck,
  },
  {
    id: "veiculos",
    title: "Pneus para carros, SUVs e utilitários",
    description: "Soluções completas para diferentes necessidades.",
    icon: Car,
  },
];

export const productsSection = {
  eyebrow: "Nossos produtos",
  title: "Encontre o pneu ideal para o seu veículo",
  description: "Qualidade, performance e segurança para qualquer tipo de caminho.",
  cta: "Ver todos os produtos",
};

export const productCards: ProductCategoryCard[] = [
  {
    id: "passeio",
    title: "Pneus para passeio",
    description: "Conforto e segurança no seu dia a dia.",
    href: "#produtos",
    visual: "passeio",
  },
  {
    id: "suv",
    title: "Pneus para SUV",
    description: "Mais estabilidade para grandes trajetos.",
    href: "#produtos",
    visual: "suv",
  },
  {
    id: "utilitarios",
    title: "Pneus para utilitários",
    description: "Resistência e desempenho para o seu trabalho.",
    href: "#produtos",
    visual: "utilitario",
  },
  {
    id: "promocoes",
    title: "Promoções da semana",
    description: "Qualidade com preços especiais.",
    href: "#promocoes",
    visual: "promocao",
    badge: "%",
  },
];

export const about = {
  eyebrow: "Sobre nós",
  title: "Por que escolher a Ouro Preto Pneus?",
  description:
    "Somos uma empresa comprometida com a sua segurança e satisfação. Trabalhamos com pneus das melhores marcas, oferecendo atendimento especializado e uma grande variedade de produtos para carros, SUVs e utilitários.",
  cta: "Conheça nossa loja",
  tagline: "Sempre com você na estrada",
};

export const stats: StatItem[] = [
  { id: "clientes", value: "+1.000", label: "Clientes atendidos", icon: Users },
  { id: "marcas", value: "Marcas renomadas", label: "", icon: Award },
  { id: "equipe", value: "Equipe especializada", label: "", icon: Wrench },
  { id: "tradicao", value: "Tradição e confiança", label: "", icon: TrendingUp },
];

export const whatsappCta = {
  title: "Fale agora pelo WhatsApp",
  description: "Tire suas dúvidas, solicite um orçamento e encontre o pneu ideal para o seu veículo.",
  cta: "Chamar no WhatsApp",
};

export const contact = {
  eyebrow: "Contato",
  title: "Vamos cuidar do seu veículo",
  description: "Fale com a nossa equipe, tire dúvidas sobre produtos e agende sua visita.",
  addressIcon: MapPin,
};
