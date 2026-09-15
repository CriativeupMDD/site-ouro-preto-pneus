import { Clock, Globe, MapPin, MessageCircle } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { company } from "@/lib/site-content";
import { buildWhatsappLink } from "@/lib/whatsapp";

const fullAddress = `${company.address.street} - ${company.address.neighborhood}, ${company.address.city}/${company.address.state}`;

export function Contact() {
  return (
    <section id="contato" aria-label="Contato" className="bg-brand-dark py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="mb-12 text-center lg:text-left">
          <span className="mx-auto mb-3 block h-1 w-10 rounded-full bg-brand-yellow lg:mx-0" />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-muted">Contato</p>
          <h2 className="mt-2 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Vamos cuidar do seu veículo
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <RevealOnScroll className="space-y-4">
            <a
              href={buildWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-brand-gray bg-brand-black p-5 transition-colors hover:border-brand-yellow/60"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-brand-black">
                <MessageCircle size={20} strokeWidth={2} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-muted">WhatsApp</p>
                <p className="font-bold text-white">{company.whatsappDisplay}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-brand-gray bg-brand-black p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-brand-black">
                <MapPin size={20} strokeWidth={2} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-muted">Endereço</p>
                <p className="font-bold text-white">{fullAddress}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-brand-gray bg-brand-black p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-brand-black">
                <Clock size={20} strokeWidth={2} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-muted">Horário</p>
                <p className="font-bold text-white">{company.hours}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-brand-gray bg-brand-black p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-brand-black">
                <Globe size={20} strokeWidth={2} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-muted">Site</p>
                <p className="font-bold text-white">{company.website}</p>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              {company.instagram ? (
                <a
                  href={company.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-gray text-white transition-colors hover:border-brand-yellow hover:text-brand-yellow"
                >
                  <InstagramIcon width={18} height={18} />
                </a>
              ) : null}
              {company.facebook ? (
                <a
                  href={company.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-gray text-white transition-colors hover:border-brand-yellow hover:text-brand-yellow"
                >
                  <FacebookIcon width={18} height={18} />
                </a>
              ) : null}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={150} className="min-h-[320px] overflow-hidden rounded-2xl border border-brand-gray">
            {company.googleMapsEmbed ? (
              <iframe
                src={company.googleMapsEmbed}
                title="Localização Ouro Preto Pneus"
                className="h-full min-h-[320px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center gap-3 bg-brand-black p-8 text-center">
                <MapPin size={32} className="text-brand-yellow" />
                <p className="max-w-xs text-sm text-brand-muted">{fullAddress}</p>
              </div>
            )}
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
