"use client";

import { X } from "lucide-react";
import { navLinks } from "@/lib/site-content";
import { buildWhatsappLink } from "@/lib/whatsapp";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-40 transition-opacity duration-300 lg:hidden ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <button
        type="button"
        aria-label="Fechar menu"
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />
      <div
        className={`absolute right-0 top-0 flex h-full w-[80%] max-w-sm flex-col bg-brand-dark p-6 shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar menu"
            className="rounded-full border border-brand-gray p-2 text-white transition-colors hover:border-brand-yellow hover:text-brand-yellow"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="rounded-lg px-3 py-3 text-lg font-medium text-white transition-colors hover:bg-brand-gray hover:text-brand-yellow"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={buildWhatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="mt-8 rounded-full bg-brand-yellow px-5 py-3 text-center font-bold text-brand-black transition-colors hover:bg-brand-yellow-light"
        >
          Chamar no WhatsApp
        </a>
      </div>
    </div>
  );
}
