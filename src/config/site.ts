/**
 * Links e contatos centralizados.
 *
 * TODO: os destinos dos CTAs e as rotas de login ainda serão definidos.
 * Enquanto isso, todos apontam para `PENDENTE` e ficam marcados com
 * `data-pendente` no HTML, facilitando a busca antes da publicação.
 */
export const PENDENTE = '#';

/** Prefixa caminhos internos com o `base` do Astro (ex.: `/diprosoft-site` no GitHub Pages). */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (caminho: string) => `${BASE}${caminho}`;

export const site = {
  nome: 'Diprosoft One',
  descricao:
    'Soluções completas em tecnologia, gestão e automação comercial para empresas de pequeno, médio e grande porte.',
  // Placeholders presentes no design.
  contato: {
    email: 'vendas@diprosoft.com.br',
    telefone: '(123) 456-7890',
  },
  sociais: {
    facebook: PENDENTE,
    instagram: PENDENTE,
    x: PENDENTE,
    youtube: PENDENTE,
  },
} as const;

export const ctas = {
  whatsapp: PENDENTE,
  solicitarDemonstracao: PENDENTE,
  falarComConsultor: PENDENTE,
  falarComEspecialista: PENDENTE,
  parceria: PENDENTE,
  testarSistema: PENDENTE,
  faleConosco: PENDENTE,
  quemSomos: PENDENTE,
} as const;

export const rotas = {
  home: url('/'),
  areaDoCliente: url('/area-do-cliente'),
  portalDoContador: url('/portal-do-contador'),
  segmento: (slug: string) => url(`/segmentos/${slug}`),
} as const;

/** Âncoras do menu principal (seções da Home). */
export const menu = [
  { rotulo: 'Sobre', href: url('/#sobre') },
  { rotulo: 'Soluções', href: url('/#segmentos'), submenu: true },
  { rotulo: 'Funcionalidades', href: url('/#funcionalidades') },
  { rotulo: 'Diferenciais', href: url('/#diferenciais') },
  { rotulo: 'Cases', href: url('/#cases') },
] as const;

export const linksLegais = [
  { rotulo: 'Portal da Privacidade', href: PENDENTE },
  { rotulo: 'Aviso de Cookies', href: PENDENTE },
  { rotulo: 'Acessar Cookies', href: PENDENTE },
  { rotulo: 'Aviso de Privacidade', href: PENDENTE },
  { rotulo: 'Política de Segurança da Informação', href: PENDENTE },
] as const;

export const isPendente = (href: string) => href === PENDENTE;
