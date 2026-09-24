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
- **Busca**: o ícone do header não tem funcionalidade (o design não define a página de resultados).
- **Textos**: descrições baseadas nos recursos do ERP (`new-erp-diprosoft`); não citar recursos que o sistema não tem.
  Ainda provisórios: os 4 cases (lorem ipsum) e o telefone `(123) 456-7890`.
- **Mockups de celular** nas páginas de segmento: imagem provisória repetida do design.
- **Logo Veterinário**: não existe na pasta de logos; a página usa o logo Services, como no design.
  Açougue e Padaria usam o logo Varejo, também como no design.
- **Hortifrúti**: o design tem o card, mas não a página. Como a página de Varejo do design é ilustrada com um
  hortifrúti, o card leva para `/segmentos/varejo`.
- **Ícones**: os ícones de linha do design não foram exportados separadamente; foram usados ícones Lucide equivalentes.
- **Contraste (acessibilidade)**: laranja `#ed7629` sobre cinza claro e branco sobre o verde `#71b52b` ficam abaixo de 4.5:1 — decisão de design a revisar.
