import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { HeroPhoto } from "@/components/ui/HeroPhoto";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { hero } from "@/lib/site-content";
import { buildWhatsappLink } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-brand-black pb-16 pt-28 sm:pt-32 lg:flex lg:min-h-[680px] lg:items-center lg:pb-0 lg:pt-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(245,184,0,0.12), transparent 45%), radial-gradient(circle at 85% 60%, rgba(245,184,0,0.08), transparent 50%)",
        }}
        aria-hidden
      />

      {/* Foto em sangria (bleed) até a borda direita da tela — só no desktop. */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[56%] lg:block xl:w-[52%]">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          sizes="56vw"
          className="object-cover"
          style={{ objectPosition: "72% 50%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-brand-black/20" />
      </div>

      <span className="pointer-events-none absolute right-6 top-10 hidden w-32 text-right text-[11px] font-semibold uppercase leading-snug tracking-wide text-white/60 lg:block xl:right-12">
        {hero.sideLabelTop}
      </span>
      <span className="pointer-events-none absolute bottom-12 right-6 hidden w-36 text-right text-[11px] font-semibold uppercase leading-snug tracking-wide text-white/60 lg:block xl:right-12">
        {hero.sideLabelBottom}
      </span>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
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

        {/* No mobile/tablet a foto fica contida, abaixo do texto (sem sangria). */}
        <RevealOnScroll delay={150} className="lg:hidden">
          <HeroPhoto />
        </RevealOnScroll>
      </div>
    </section>
  );
}
