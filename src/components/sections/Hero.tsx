import { ArrowRight } from "lucide-react";
import { HeroPhoto } from "@/components/ui/HeroPhoto";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { hero } from "@/lib/site-content";
import { buildWhatsappLink } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-brand-black pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-40">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(245,184,0,0.12), transparent 45%), radial-gradient(circle at 85% 60%, rgba(245,184,0,0.08), transparent 50%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <RevealOnScroll className="text-center lg:text-left">
          <h1 className="text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]">
            <span className="text-brand-yellow">Segurança, qualidade</span> e confiança
            <br className="hidden sm:block" /> para o seu veículo.
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-brand-muted sm:text-lg lg:mx-0">
            {hero.description}
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={buildWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-yellow px-6 py-3.5 text-sm font-bold text-brand-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-yellow-light sm:w-auto"
            >
              {hero.primaryCta}
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
            <a
              href="#produtos"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-brand-yellow hover:text-brand-yellow sm:w-auto"
            >
              {hero.secondaryCta}
            </a>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={150}>
          <HeroPhoto />
        </RevealOnScroll>
      </div>
    </section>
  );
}
