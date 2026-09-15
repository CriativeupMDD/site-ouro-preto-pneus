"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsappLink } from "@/lib/whatsapp";

export function FloatingWhatsapp() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={buildWhatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-3 pr-3 text-white shadow-lg shadow-black/30 transition-all duration-300 hover:pr-5 sm:bottom-6 sm:right-6"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle size={26} className="shrink-0 animate-[pulse_2.5s_ease-in-out_infinite]" fill="currentColor" strokeWidth={0} />
      <span
        className={`overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 ${
          hovered ? "max-w-[140px] opacity-100" : "max-w-0 opacity-0"
        }`}
      >
        Fale conosco
      </span>
    </a>
  );
}
