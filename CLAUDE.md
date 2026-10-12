# Genci Website

## Sobre o projeto
Site da Genci, serviço de criação de conteúdo publicitário com IA voltado ao mercado dos Estados Unidos. Objetivo principal: apresentar o serviço e gerar contato com clientes.

## Stack
- Astro (site estático) com HTML, CSS e JavaScript puro.
- Não usar React, Vue, Svelte ou Tailwind sem pedido explícito.
- Animações com GSAP em JavaScript puro, somente quando melhorarem a leitura da página. Sempre respeitar `prefers-reduced-motion`.
- Node.js 22.12 ou superior (exigência do Astro 7).

## Comandos
- `npm install`: instala as dependências.
- `npm run dev`: servidor local para visualizar o site.
- `npm run build`: gera a versão final em `dist/`.

## Regras de trabalho
- Antes de criar ou alterar layout, aplicar as skills `impeccable` e `frontend-design`. Evitar cara de template.
- Depois de cada página pronta, rodar `web-quality-audit` e `accessibility`.
- Textos devem ser diretos, específicos e sem clichês. Priorizar clareza e benefício concreto.
- Não adicionar dependências novas sem perguntar antes.
- Manter SEO básico em todas as páginas: título, descrição, hierarquia de títulos e dados estruturados quando fizer sentido (`seo-audit` e `schema`).

## Decisões tomadas (2026-10-10)
- Idioma do site: inglês americano. Nunca dizer que a GENCI é fluente em algum idioma; só dizer que o idioma dos vídeos é adaptado.
- Identidade: ver `DESIGN.md` (sistema "placas de sinalização": preto, branco e quatro cinzas; cor só nos vídeos).
- Páginas: landing page (`src/pages/index.astro`), política de privacidade (`/privacy/`) e página 404.
- Contato: formulário Formspree (`PUBLIC_FORMSPREE_ENDPOINT` no `.env`), mais ligação, SMS e e-mail.
- Contexto de produto e marketing: `PRODUCT.md` e `.claude/product-marketing.md`.
- Vídeos originais em 4K ficam em `video-sources/` (fora do build); versões web em `public/videos/`.
- Domínio: https://www.genciinternational.com (definido em `astro.config.mjs`; `SITE_URL` só substitui para testes).
- Fonte de títulos: TeX Gyre Adventor (escolha final, licença GUST em `public/fonts/licenses/`).
- E-mail comercial: contact@genciinternational.com (criado no Cloudflare Email Routing).
- Publicação: GitHub + Cloudflare Pages (build `npm run build`, saída `dist`, variável `NODE_VERSION=22.12.0`). Passo a passo no `README.md`.
- Rastreamento de anúncios opcional: variáveis `PUBLIC_GA4_ID` e `PUBLIC_META_PIXEL_ID` no Cloudflare. Vazias = nada carrega.
- Contrato: Visual Growth mensal, sem fidelidade, cancela antes da próxima cobrança, cliente fica com os vídeos. Amostra grátis não tem revisões; planos têm 3 rodadas por vídeo.
- Bloco "Who edits your videos" (`src/components/Founder.astro`) aparece quando `founder.name` e `founder.photo` forem preenchidos em `src/data/site.js`.
- Neste PC, o Smart App Control do Windows bloqueia os módulos nativos do Astro; o build local precisa de outro caminho (ex.: WSL). O Cloudflare compila normalmente.
