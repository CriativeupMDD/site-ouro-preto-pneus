import type { Benefit } from "@/types/content";

export function BenefitCard({ title, description, icon: Icon }: Benefit) {
  return (
    <div className="group rounded-2xl border border-brand-gray bg-brand-dark p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/60">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-yellow text-brand-yellow transition-transform duration-300 group-hover:scale-110">
        <Icon size={22} strokeWidth={2} />
      </div>
      <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-brand-muted">{description}</p>
    </div>
  );
}
