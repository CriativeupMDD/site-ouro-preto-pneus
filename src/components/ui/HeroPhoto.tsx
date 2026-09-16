import Image from "next/image";
import { hero } from "@/lib/site-content";

/**
 * Foto real do Hero (config `hero_image`). Só a imagem em si — nenhum
 * texto/CTA fica embutido nela, tudo isso é HTML por cima nas outras
 * colunas/seções.
 */
export function HeroPhoto() {
  return (
    <div className="relative mx-auto w-full max-w-md sm:max-w-lg lg:max-w-none">
      <div
        className="absolute -inset-6 rounded-[2rem] opacity-70 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(245,184,0,0.18), transparent 70%)" }}
        aria-hidden
      />
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/50 sm:aspect-[16/10] lg:aspect-[4/3]">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, (min-width: 640px) 80vw, 100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-black/50 via-transparent to-transparent" />
      </div>
    </div>
  );
}
