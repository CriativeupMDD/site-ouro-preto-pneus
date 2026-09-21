import Image from "next/image";

interface LogoProps {
  className?: string;
}

/**
 * Logotipo oficial (versão horizontal amarela, para fundos escuros).
 * O painel administrativo (config `logo`) poderá trocar este arquivo
 * futuramente sem alterar este componente.
 */
export function Logo({ className = "" }: LogoProps) {
  return (
    <Image
      src="/images/logo/logo-horizontal-yellow.png"
      alt="Ouro Preto Pneus"
      width={480}
      height={160}
      priority
      className={`h-9 w-auto sm:h-11 ${className}`}
    />
  );
}
