"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Menu } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { navLinks } from "@/lib/site-content";
import { buildWhatsappLink } from "@/lib/whatsapp";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-brand-black/95 shadow-lg shadow-black/30 backdrop-blur" : "bg-brand-black/70 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
          <a href="#inicio" aria-label="Ouro Preto Pneus - Início">
            <Logo />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/90 transition-colors hover:text-brand-yellow"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={buildWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-brand-yellow px-5 py-2.5 text-sm font-bold text-brand-black transition-colors duration-300 hover:bg-brand-yellow-light lg:flex"
            >
              <MessageCircle size={16} strokeWidth={2.5} />
              Chamar no WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menu"
              className="rounded-lg border border-brand-gray p-2 text-white lg:hidden"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
