# Placeholders

Nesta fase, os placeholders visuais (hero, produtos, seção institucional, logo) são renderizados como SVG inline pelos componentes em `src/components/ui` (`TireGraphic`, `HeroVisual`, `AboutVisual`, `Logo`), sem depender de arquivos de imagem — mantendo o layout leve e sem texto embutido em imagem.

Esta pasta fica reservada para quando as imagens reais (fotos de produto, foto institucional, foto do hero, logo oficial) forem enviadas. Na fase 2, o painel administrativo passa a gerenciar esses uploads via Supabase Storage e os componentes trocam o SVG pela imagem real (`next/image`) sem precisar de mudanças estruturais.
