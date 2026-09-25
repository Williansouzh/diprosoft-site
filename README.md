# Site Diprosoft One

Site institucional em [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), construído a partir dos arquivos em `files de design/`.

## Comandos

```sh
npm install
npm run dev       # desenvolvimento em http://localhost:4321
npm run build     # gera o site estático em dist/
npm run preview   # serve o build localmente
npx astro check   # checagem de tipos
```

## Estrutura

```
src/
  config/site.ts         # links, CTAs, contatos e menu (destinos pendentes aqui)
  data/segmentos.ts      # conteúdo de todos os segmentos; os que têm `pagina` geram rota
  styles/global.css      # tokens de cor/fonte extraídos do design
  layouts/BaseLayout.astro
  components/            # Header, Footer, Hero, LoginMock, aba "Área do Contador"
    home/                # seções da Home
    segmento/            # seções do modelo de página de segmento
    ui/                  # Button, Carrossel, Logo, BrandIcon
  pages/
    index.astro
    segmentos/[slug].astro   # 9 segmentos (ver src/data/segmentos.ts)
    area-do-cliente.astro    # login simulado
    portal-do-contador.astro # login simulado
  assets/                # fotos extraídas do Figma e logos (SVG com texto em curvas)
```

### Adicionar um segmento

Preencha o campo `pagina` do segmento em `src/data/segmentos.ts` (o modelo é o mesmo de Pet Shop).
A rota `/segmentos/<slug>`, o item do menu "Soluções" e o link do card na Home são criados automaticamente.
Segmentos sem `pagina` aparecem na Home com o selo "Em breve", a menos que tenham `destino`
(card que leva à página de outro segmento — hoje, Hortifrúti → Varejo).

## Pendências

- **CTAs, redes sociais e links legais**: apontam para `#` e estão marcados com `data-pendente`
  (`src/config/site.ts`). Liste-os com `grep -rn data-pendente dist/` após o build.
- **Login**: `LoginMock.astro` apenas valida os campos e exibe uma mensagem. Trocar pelo envio/redirecionamento real.
- **Newsletter**: envio simulado no `Footer.astro`.
- **Textos**: descrições baseadas nos recursos do ERP (`new-erp-diprosoft`); não citar recursos que o sistema não tem.
  Ainda provisórios: os 4 cases (lorem ipsum) e o telefone `(123) 456-7890`.
- **Mockups de celular** nas páginas de segmento: imagem provisória repetida do design.
- **Logo Veterinário**: não existe na pasta de logos; a página usa o logo Services, como no design.
  Açougue e Padaria usam o logo Varejo, também como no design.
- **Hortifrúti**: o design tem o card, mas não a página. Como a página de Varejo do design é ilustrada com um
  hortifrúti, o card leva para `/segmentos/varejo`.
- **Ícones**: os ícones de linha do design não foram exportados separadamente; foram usados ícones Lucide equivalentes.
- **Contraste (acessibilidade)**: sobre fundos claros o laranja usa tons mais escuros (`laranja-texto`, `laranja-titulo`,
  `laranja-icone`) e o botão de WhatsApp usa verde `#4a7f1a` em vez do `#71b52b` do design, para passar no WCAG AA.
  Para voltar às cores do design, altere os tokens em `src/styles/global.css`.

## Publicação (GitHub Pages)

Cada push na `main` publica em https://williansouzh.github.io/diprosoft-site/ (`.github/workflows/deploy.yml`).

### Variáveis opcionais

Cadastre em *Settings → Secrets and variables → Actions → Variables* (ou em `.env` localmente; veja `.env.example`):

| Variável | Efeito |
|---|---|
| `PUBLIC_GA_ID` | Ativa o Google Analytics 4 e o banner de consentimento de cookies. O script só carrega depois de "Aceitar"; "Acessar Cookies" no rodapé reabre o banner. |
| `PUBLIC_RECAPTCHA_SITE_KEY` | Exibe o aviso de reCAPTCHA no rodapé. A validação do token precisa ser feita no servidor que receber os formulários. |
| `SITE_URL` / `BASE_PATH` | Domínio próprio (ver abaixo). |

### Domínio próprio (ex.: www.diprosoft.com.br)

1. No DNS do domínio, crie um `CNAME` de `www` apontando para `williansouzh.github.io`.
2. Em *Settings → Pages → Custom domain*, informe `www.diprosoft.com.br` e marque *Enforce HTTPS* quando liberar.
3. Crie as variáveis `SITE_URL=https://www.diprosoft.com.br` e `BASE_PATH=/` e rode o workflow de novo.

O `robots.txt` e o `sitemap-index.xml` são gerados automaticamente; os buscadores só leem o `robots.txt`
na raiz do domínio, então ele passa a valer de fato com o domínio próprio.

