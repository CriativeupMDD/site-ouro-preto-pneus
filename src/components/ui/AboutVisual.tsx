import { TireGraphic } from "@/components/ui/TireGraphic";

export function AboutVisual() {
  return (
    <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-3xl bg-brand-black sm:aspect-[16/11] lg:aspect-[4/5]">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(245,184,0,0.18), transparent 55%)",
        }}
        aria-hidden
      />
      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full border-8 border-brand-gray opacity-40" aria-hidden />
      <TireGraphic className="relative w-40 sm:w-52 lg:w-56" tone="dark" />
      <span className="absolute bottom-5 left-5 rounded-full bg-brand-yellow px-3 py-1 text-[11px] font-bold tracking-wide text-brand-black">
        Sempre com você na estrada
      </span>
    </div>
  );
}
