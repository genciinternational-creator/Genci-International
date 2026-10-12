# GENCI website

Landing page da GENCI (www.genciinternational.com). Astro estático, HTML/CSS/JS puro.

## Rodar localmente

Requer Node.js 22.12 ou superior.

```bash
npm install
npm run dev      # servidor local em http://localhost:4321
npm run build    # gera a versão final em dist/
```

> Neste computador, o Controle Inteligente de Aplicativos do Windows (Smart App Control) bloqueia os
> módulos nativos do Astro. Solução: depois de qualquer `npm install`, rode uma vez `npm run fix:windows`
> (instala versões WebAssembly desses módulos só nesta máquina, sem mudar o `package.json` de dependências).
> Isso não afeta a publicação: o Cloudflare compila em Linux.

## Publicar (GitHub + Cloudflare Pages)

### 1. Enviar o projeto para o GitHub
1. Crie uma conta em github.com e instale o **GitHub Desktop** (desktop.github.com).
2. No GitHub Desktop: **File › Add local repository** e escolha esta pasta. O repositório já está criado, com o primeiro commit.
3. Clique em **Publish repository**, deixe **Keep this code private** marcado e publique.

A pasta `video-sources/` (originais em 4K) e o arquivo `.env` ficam fora do GitHub pelo `.gitignore`.

### 2. Conectar o Cloudflare Pages
1. Crie uma conta em dash.cloudflare.com.
2. **Workers & Pages › Create application › aba Pages › Import an existing Git repository**.
3. Autorize o GitHub, escolha o repositório e clique em **Begin setup**.
4. Configuração:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variables: `NODE_VERSION` = `22.12.0`
5. **Save and Deploy**. Em 1 a 2 minutos o site fica no ar em um endereço `*.pages.dev`.

### 3. Domínio (genciinternational.com já registrado)
**Caminho mais simples (o e-mail não é tocado):** mantenha o DNS onde está. No projeto do Pages, em **Custom domains › Set up a custom domain**, digite `www.genciinternational.com`; o Cloudflare mostra um registro **CNAME** (`www` › `seu-projeto.pages.dev`). Crie esse CNAME no painel do provedor onde o domínio está e, nesse mesmo painel, encaminhe `genciinternational.com` (sem www) para `https://www.genciinternational.com`. Pronto.

**Caminho completo (DNS no Cloudflare):**
1. No Cloudflare: **Add a domain** › `genciinternational.com` › plano **Free**.
2. **Antes de continuar, confira os registros DNS que o Cloudflare importou.** Os registros **MX** (e os TXT de SPF/DKIM) do e-mail `contact@genciinternational.com` precisam estar na lista, iguais aos do provedor atual. Se faltar algum, copie do painel do registrador. Sem eles, o e-mail para de funcionar.
3. No site onde o domínio foi comprado, troque os **nameservers** pelos dois que o Cloudflare mostrar. A troca leva de minutos a algumas horas.
4. No projeto do Pages: **Custom domains › Set up a custom domain** › `www.genciinternational.com`. O Cloudflare cria o DNS do site sozinho.
5. Para quem digitar sem "www": em **Rules › Redirect Rules**, use o modelo **Redirect from root to WWW** (a raiz precisa de um registro DNS com proxy, o modelo explica).

### 4. E-mail
O `contact@genciinternational.com` já existe. Depois da troca de nameservers, mande um e-mail de teste para ele e responda de volta para confirmar que recebimento e envio continuam funcionando.

### 5. Formulário (Formspree)
- O formulário envia para `https://formspree.io/f/xppqrlgw` (pode ser trocado pela variável `PUBLIC_FORMSPREE_ENDPOINT`).
- No painel do Formspree, confira o e-mail que recebe os pedidos.
- O plano grátis aceita 50 envios por mês. Com anúncios, considere o plano pago.
- Depois de publicar, envie um pedido de teste pelo site.

### 6. Rastreamento de anúncios (opcional)
No Cloudflare Pages, **Settings › Variables and Secrets**, adicione e faça um novo deploy:
- `PUBLIC_GA4_ID` = ID do Google Analytics 4 (`G-XXXXXXXXXX`)
- `PUBLIC_META_PIXEL_ID` = ID do Meta Pixel

Com elas preenchidas, o site registra envios do formulário (`generate_lead` / `Lead`) e toques em ligar, SMS e e-mail (`contact` / `Contact`), e a política de privacidade passa a citar as ferramentas.

### Atualizações
Edite, faça commit e **Push** no GitHub Desktop. O Cloudflare publica a nova versão sozinho.

## Links de anúncio por nicho
Abra a página já no nicho certo com `?trade=`:
- `https://www.genciinternational.com/?trade=house-cleaning`
- `https://www.genciinternational.com/?trade=remodeling`
- `https://www.genciinternational.com/?trade=carpet-cleaning`
- `https://www.genciinternational.com/?trade=junk-removal`

## Onde editar
- Textos, preços, FAQ, contato, nichos: `src/data/site.js`
- Bloco do fundador (aparece quando nome e foto forem preenchidos): `founder` em `src/data/site.js`, foto em `public/brand/`
- Vídeos: `public/videos/` (9:16, H.264, até ~10 MB, com pôster `.webp` do mesmo nome)
- Sistema visual: `DESIGN.md`
