interface TireGraphicProps {
  className?: string;
  tone?: "dark" | "light";
}

/**
 * Placeholder visual neutro (sem texto) usado até as fotos reais serem
 * enviadas pelo painel administrativo. Representa um pneu/roda de forma
 * estilizada, na paleta da marca.
 */
export function TireGraphic({ className = "", tone = "dark" }: TireGraphicProps) {
  const rim = tone === "dark" ? "#f5b800" : "#090909";
  const treadBg = tone === "dark" ? "#171717" : "#e5e5e5";
  const tread = tone === "dark" ? "#292929" : "#c7c7c7";

  return (
    <svg viewBox="0 0 400 400" className={className} role="img" aria-label="Ilustração de pneu">
      <circle cx="200" cy="200" r="190" fill={treadBg} />
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 360) / 24;
        return (
          <rect
            key={i}
            x="196"
            y="14"
            width="8"
            height="34"
            rx="2"
            fill={tread}
            transform={`rotate(${angle} 200 200)`}
          />
        );
      })}
      <circle cx="200" cy="200" r="150" fill="none" stroke={tread} strokeWidth="10" />
      <circle cx="200" cy="200" r="118" fill={tone === "dark" ? "#090909" : "#ffffff"} />
      <circle cx="200" cy="200" r="118" fill="none" stroke={rim} strokeWidth="6" />
      <circle cx="200" cy="200" r="34" fill={rim} />
      {Array.from({ length: 5 }).map((_, i) => {
        const angle = (i * 360) / 5;
        return (
          <rect
            key={i}
            x="192"
            y="96"
            width="16"
            height="70"
            rx="8"
            fill={rim}
            opacity="0.85"
            transform={`rotate(${angle} 200 200)`}
          />
        );
      })}
      <circle cx="200" cy="200" r="14" fill={tone === "dark" ? "#090909" : "#ffffff"} />
    </svg>
  );
}
