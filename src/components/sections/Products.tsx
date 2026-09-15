import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/ui/ProductCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { productCards, productsSection } from "@/lib/site-content";

export function Products() {
  return (
    <section id="produtos" aria-label="Nossos produtos" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="mb-3 block h-1 w-10 rounded-full bg-brand-yellow" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
              {productsSection.eyebrow}
            </p>
            <h2 className="mt-2 max-w-xl text-3xl font-extrabold leading-tight text-brand-black sm:text-4xl">
              {productsSection.title}
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-sm text-neutral-500">{productsSection.description}</p>
            <a
              href="#produtos"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-brand-black transition-colors hover:text-brand-yellow"
            >
              {productsSection.cta}
              <ArrowRight size={15} strokeWidth={2.5} />
            </a>
          </div>
        </RevealOnScroll>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {productCards.map((card, index) => (
            <RevealOnScroll key={card.id} delay={index * 100}>
              <ProductCard {...card} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
