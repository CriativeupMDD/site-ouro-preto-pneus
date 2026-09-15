import { ArrowRight, Percent } from "lucide-react";
import { TireGraphic } from "@/components/ui/TireGraphic";
import type { ProductCategoryCard } from "@/types/content";

export function ProductCard({ title, description, href, visual, badge }: ProductCategoryCard) {
  return (
    <a
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative flex aspect-[4/3] items-center justify-center bg-neutral-100 p-8">
        {visual === "promocao" ? (
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-yellow">
            <Percent size={36} className="text-brand-black" strokeWidth={2.5} />
          </div>
        ) : (
          <TireGraphic className="w-28 transition-transform duration-300 group-hover:scale-105" tone="light" />
        )}
        {badge ? (
          <span className="absolute right-4 top-4 rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold text-brand-black">
            Oferta
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 items-center justify-between gap-4 p-5">
        <div>
          <h3 className="font-bold text-brand-black">{title}</h3>
          <p className="mt-1 text-sm text-neutral-500">{description}</p>
        </div>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-brand-black transition-transform duration-300 group-hover:translate-x-1">
          <ArrowRight size={16} strokeWidth={2.5} />
        </span>
      </div>
    </a>
  );
}
