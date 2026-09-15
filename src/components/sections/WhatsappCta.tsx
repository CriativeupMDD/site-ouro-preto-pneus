import { MessageCircle } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { whatsappCta } from "@/lib/site-content";
import { buildWhatsappLink } from "@/lib/whatsapp";

export function WhatsappCta() {
  return (
    <section aria-label="Fale pelo WhatsApp" className="bg-brand-yellow py-12 lg:py-14">
      <RevealOnScroll>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 lg:flex-row lg:text-left lg:px-8">
          <div className="flex flex-col items-center gap-3 lg:flex-row lg:items-center">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-black text-brand-yellow">
              <MessageCircle size={22} strokeWidth={2} />
            </span>
            <div>
              <h2 className="text-xl font-extrabold text-brand-black sm:text-2xl">{whatsappCta.title}</h2>
              <p className="mt-1 max-w-lg text-sm font-medium text-brand-black/80">{whatsappCta.description}</p>
            </div>
          </div>
          <a
            href={buildWhatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-brand-black px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gray sm:w-auto"
          >
            <MessageCircle size={17} strokeWidth={2.5} />
            {whatsappCta.cta}
          </a>
        </div>
      </RevealOnScroll>
    </section>
  );
}
