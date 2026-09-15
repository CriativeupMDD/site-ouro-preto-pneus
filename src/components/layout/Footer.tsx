import { Logo } from "@/components/ui/Logo";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { company, navLinks } from "@/lib/site-content";

const fullAddress = `${company.address.street} - ${company.address.neighborhood}, ${company.address.city}/${company.address.state}`;
const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-brand-gray bg-brand-black">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-muted">
              {company.shortDescription}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Navegação</h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-brand-muted transition-colors hover:text-brand-yellow">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Contato</h3>
            <ul className="space-y-2.5 text-sm text-brand-muted">
              <li>{company.whatsappDisplay}</li>
              <li>{fullAddress}</li>
              <li>{company.website}</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Nos acompanhe</h3>
            <div className="flex gap-3">
              {company.instagram ? (
                <a
                  href={company.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gray text-white transition-colors hover:border-brand-yellow hover:text-brand-yellow"
                >
                  <InstagramIcon width={17} height={17} />
                </a>
              ) : null}
              {company.facebook ? (
                <a
                  href={company.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gray text-white transition-colors hover:border-brand-yellow hover:text-brand-yellow"
                >
                  <FacebookIcon width={17} height={17} />
                </a>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-brand-gray pt-6 text-xs text-brand-muted sm:flex-row">
          <p>© {year} {company.name}. Todos os direitos reservados.</p>
          <p>Qualidade move você mais longe.</p>
        </div>
      </div>
    </footer>
  );
}
