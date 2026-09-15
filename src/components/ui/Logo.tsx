interface LogoProps {
  className?: string;
}

/**
 * Placeholder do logotipo oficial (círculo + pneu + wordmark), até a arte
 * definitiva ser enviada pelo painel administrativo (config `logo`).
 */
export function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 48 48" className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" role="img" aria-label="Logotipo Ouro Preto Pneus">
        <circle cx="24" cy="24" r="22" fill="#090909" />
        <circle cx="24" cy="24" r="22" fill="none" stroke="#f5b800" strokeWidth="2" />
        <circle cx="24" cy="24" r="13" fill="none" stroke="#f5b800" strokeWidth="3" />
        <circle cx="24" cy="24" r="13" fill="none" stroke="#090909" strokeWidth="1" />
        <circle cx="24" cy="24" r="4" fill="#f5b800" />
        {Array.from({ length: 6 }).map((_, i) => (
          <rect
            key={i}
            x="22.5"
            y="10"
            width="3"
            height="6"
            rx="1"
            fill="#f5b800"
            transform={`rotate(${i * 60} 24 24)`}
          />
        ))}
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-base font-extrabold tracking-tight text-white sm:text-lg">
          Ouro Preto
        </span>
        <span className="text-[11px] font-medium tracking-[0.2em] text-brand-yellow sm:text-xs">
          PNEUS
        </span>
      </span>
    </div>
  );
}
