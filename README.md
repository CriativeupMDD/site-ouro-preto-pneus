# Ouro Preto Pneus — Site Institucional

Site one-page institucional da Ouro Preto Pneus, construído com Next.js (App Router), TypeScript e Tailwind CSS.

> **Status:** Fase 1 — site público estático (sem Supabase/admin ainda). A Fase 2 vai conectar Supabase (Auth, Postgres, Storage) e o painel `/admin` para gerenciamento de conteúdo, produtos, promoções e imagens.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- [lucide-react](https://lucide.dev) para ícones

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Scripts

```bash
npm run dev     # ambiente de desenvolvimento
npm run lint    # ESLint
npm run build   # build de produção
npm run start   # servir o build de produção
```

## Variáveis de ambiente

Copie `.env.example` para `.env.local`:

```bash
cp .env.example .env.local
```

- `NEXT_PUBLIC_SITE_URL`: URL pública do site, usada em metadata/SEO (Open Graph, sitemap, robots).

## Estrutura

```
src/
  app/            App Router: layout, home, metadata, robots.ts, sitemap.ts
  components/
    layout/        Header, MobileMenu, Footer
    sections/       Hero, Benefits, Products, About, WhatsappCta, Contact
    ui/             Componentes reutilizáveis (cards, logo, placeholders SVG, botão flutuante)
  lib/
    site-content.ts  Conteúdo do site (textos, cards, dados da empresa) — fonte única de verdade
    whatsapp.ts       Helper para montar links wa.me
  types/           Tipos TypeScript do conteúdo
public/
  images/placeholders/  Reservado para uploads futuros (ver README da pasta)
```

Todo o conteúdo textual e os dados dos cards ficam centralizados em `src/lib/site-content.ts`. Isso foi proposital: na Fase 2, esse arquivo será substituído por chamadas ao Supabase (site_settings, products, categories, promotions) sem precisar alterar os componentes visuais.

As imagens ainda não existem — hero, produtos e seção institucional usam placeholders SVG neutros na paleta da marca (`TireGraphic`, `HeroVisual`, `AboutVisual`), sem nenhum texto embutido na imagem, prontos para serem substituídos por fotos reais mais adiante.

## Próxima fase (não incluída ainda)

- Supabase (Auth, Postgres, Storage) e migrations SQL.
- Painel administrativo em `/admin` (produtos, categorias, promoções, mídia, SEO, usuários).
- Upload de imagens reais (logo, hero, produtos, institucional) via Supabase Storage.

## Deploy

Projeto pronto para GitHub + [Vercel](https://vercel.com). Configure `NEXT_PUBLIC_SITE_URL` nas variáveis de ambiente do projeto na Vercel antes do deploy.
