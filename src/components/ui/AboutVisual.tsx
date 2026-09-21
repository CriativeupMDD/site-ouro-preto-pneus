import Image from "next/image";
import { about } from "@/lib/site-content";

/**
 * Foto real da seção institucional (config `about_image`). A etiqueta
 * "Sempre com você na estrada" já faz parte da própria foto enviada —
 * por isso não duplicamos esse texto em HTML por cima aqui.
 */
export function AboutVisual() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-brand-gray shadow-2xl shadow-black/40">
      <Image
        src={about.image}
        alt={about.imageAlt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}
