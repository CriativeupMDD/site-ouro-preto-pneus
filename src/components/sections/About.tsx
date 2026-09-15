import { AboutVisual } from "@/components/ui/AboutVisual";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { about, stats } from "@/lib/site-content";

export function About() {
  return (
    <section id="sobre" aria-label="Sobre nós" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <RevealOnScroll>
            <span className="mb-3 block h-1 w-10 rounded-full bg-brand-yellow" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">{about.eyebrow}</p>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight text-brand-black sm:text-4xl">
              {about.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-600">{about.description}</p>

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
              {stats.map((stat) => (
                <div key={stat.id} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-black text-brand-yellow">
                    <stat.icon size={17} strokeWidth={2} />
                  </span>
                  <p className="text-sm font-bold leading-snug text-brand-black sm:text-base">
                    {stat.value}
                    {stat.label ? <span className="mt-0.5 block text-xs font-medium text-neutral-500">{stat.label}</span> : null}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#contato"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-brand-black px-6 py-3.5 text-sm font-bold text-white transition-colors duration-300 hover:bg-brand-gray"
            >
              {about.cta}
            </a>
          </RevealOnScroll>

          <RevealOnScroll delay={150}>
            <AboutVisual />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
