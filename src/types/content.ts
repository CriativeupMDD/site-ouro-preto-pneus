import type { LucideIcon } from "lucide-react";

export interface CompanyInfo {
  name: string;
  shortDescription: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    stateFull: string;
  };
  hours: string;
  website: string;
  siteUrl: string;
  instagram?: string;
  facebook?: string;
  googleMapsEmbed?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export type ProductVisualVariant = "passeio" | "suv" | "utilitario" | "promocao";

export interface ProductCategoryCard {
  id: string;
  title: string;
  description: string;
  href: string;
  visual: ProductVisualVariant;
  badge?: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  icon: LucideIcon;
}
