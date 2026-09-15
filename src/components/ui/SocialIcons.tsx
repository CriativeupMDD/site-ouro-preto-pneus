import type { SVGProps } from "react";

/**
 * lucide-react removeu os ícones de marca (Instagram, Facebook...) a partir
 * da v1. Estes SVGs seguem o mesmo estilo (stroke, 24x24, round) para se
 * encaixarem visualmente ao lado dos demais ícones Lucide do site.
 */

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14.5 21v-7.5h2.5l.5-3h-3V8.5c0-.9.3-1.5 1.6-1.5H17.5V4.3C17.2 4.3 16.2 4 15 4c-2.4 0-4 1.5-4 4.1V10.5H8.5v3H11V21" />
    </svg>
  );
}
