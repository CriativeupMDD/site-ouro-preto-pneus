import { BenefitCard } from "@/components/ui/BenefitCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { benefits } from "@/lib/site-content";

export function Benefits() {
  return (
    <section aria-label="Benefícios" className="bg-brand-black pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <RevealOnScroll key={benefit.id} delay={index * 100}>
              <BenefitCard {...benefit} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
