import { company } from "@/lib/site-content";

export function buildWhatsappLink(message?: string): string {
  const text = message ?? "Olá! Vim através do site da Ouro Preto Pneus e gostaria de solicitar um orçamento.";
  return `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
