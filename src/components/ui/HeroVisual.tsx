import { TireGraphic } from "@/components/ui/TireGraphic";

/**
 * Composição visual do Hero: pneus empilhados sobre uma roda em destaque,
 * inspirada no mockup de referência. Placeholder até a foto real ser
 * enviada pelo painel administrativo.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto flex h-full w-full max-w-md items-center justify-center py-6 sm:max-w-lg lg:max-w-none">
      <div
        className="absolute h-[80%] w-[80%] rounded-full opacity-70 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(245,184,0,0.25), transparent 70%)" }}
        aria-hidden
      />
      <div className="relative flex items-end gap-4 sm:gap-6">
        <TireGraphic className="w-20 -translate-y-6 opacity-90 sm:w-28 lg:w-32" tone="dark" />
        <TireGraphic className="w-28 sm:w-40 lg:w-48" tone="dark" />
        <TireGraphic className="w-20 -translate-y-10 opacity-90 sm:w-28 lg:w-32" tone="dark" />
      </div>
    </div>
  );
}
