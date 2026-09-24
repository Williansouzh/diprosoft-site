import type { ImageMetadata } from 'astro';
import {
  ArrowLeftRight,
  BedDouble,
  BellRing,
  Boxes,
  Calculator,
  CalendarClock,
  CalendarDays,
  Car,
  ChartColumn,
  ClipboardCheck,
  ClipboardList,
  Dog,
  FileHeart,
  FilePen,
  Globe,
  HandCoins,
  Microscope,
  Receipt,
  ReceiptText,
  RotateCcwClock,
  Scale,
  ScanBarcode,
  Scissors,
  Search,
  Shirt,
  ShoppingCart,
  Split,
  Syringe,
  Tags,
  Users,
  Wallet,
  WalletCards,
} from '@lucide/astro';

import petHero from '../assets/img/pet-hero.jpg';
import petProduto from '../assets/img/pet-produto.jpg';
import vetHero from '../assets/img/vet-hero.jpg';
import vetProduto from '../assets/img/vet-produto.jpg';
import autoHero from '../assets/img/auto-hero.jpg';
import autoProduto from '../assets/img/auto-produto.jpg';
import roupasHero from '../assets/img/roupas-hero.jpg';
import roupasProduto from '../assets/img/roupas-produto.jpg';
import mercadinhoHero from '../assets/img/mercadinho-hero.jpg';
import mercadinhoProduto from '../assets/img/mercadinho-produto.jpg';
import varejoHero from '../assets/img/varejo-hero.jpg';
import varejoProduto from '../assets/img/varejo-produto.jpg';
import acougueHero from '../assets/img/acougue-hero.jpg';
import acougueProduto from '../assets/img/acougue-produto.jpg';
import padariaHero from '../assets/img/padaria-hero.jpg';
import padariaProduto from '../assets/img/padaria-produto.jpg';
import servicosHero from '../assets/img/servicos-hero.jpg';
import servicosProduto from '../assets/img/servicos-produto.jpg';

import logoPet from '../assets/logos/diprosoft-pet.svg';
import logoCar from '../assets/logos/diprosoft-car.svg';
import logoServices from '../assets/logos/diprosoft-services.svg';
import logoWear from '../assets/logos/diprosoft-wear.svg';
import logoMax from '../assets/logos/diprosoft-max.svg';
import logoVarejo from '../assets/logos/diprosoft-varejo.svg';

/*
 * Conteúdo baseado nos recursos existentes no ERP (new-erp-diprosoft):
 * menus em resources/views/layouts/header/partials, docs/16-petshop-veterinario.md,
 * docs/05-cobranca-whatsapp.md, docs/lembretes-servico.md e docs/19-agenda-oficina.md.
 * Não citar recursos que o sistema ainda não tem.
 */

// Ícones de linha usados no lugar dos ícones vetoriais do design (não exportados separadamente).
type Icone = typeof Boxes;

export type Funcionalidade = {
  titulo: string;
  texto?: string;
  icone: Icone | 'whatsapp';
};

export type PaginaSegmento = {
  titulo: string;
  /** `\n` marca as quebras de linha do design. */
  heroTitulo: string;
  heroImagem: ImageMetadata;
  /** Ajuste de enquadramento da foto do hero (object-position). */
  heroPosicao?: string;
  ctaTestar: string;
  logo: ImageMetadata;
  logoAlt: string;
  produtoImagem: ImageMetadata;
  produtoImagemAlt: string;
  produtoTitulo: string;
  itens: string[];
  produtoTexto: string;
  publico: string;
  funcionalidades: Funcionalidade[];
  ctaTitulo: string;
};

export type Segmento = {
  slug: string;
  nome: string;
  card: { titulo: string; texto: string; imagem: ImageMetadata };
  pagina?: PaginaSegmento;
  /** Segmento sem página própria cujo card leva à página de outro segmento. */
  destino?: string;
};

// Funcionalidades comuns a vários segmentos.
const PDV: Funcionalidade = {
  titulo: 'PDV integrado',
  texto: 'Venda de balcão com leitor de código de barras, NFC-e e pagamento em PIX, cartão, TEF ou dinheiro.',
  icone: ScanBarcode,
};
const COBRANCA_WHATSAPP: Funcionalidade = {
  titulo: 'Cobrança automática via WhatsApp',
  texto: 'Avisos 7 e 3 dias antes do vencimento, no dia e em caso de atraso, sem mensagens repetidas.',
  icone: 'whatsapp',
};
const FINANCEIRO: Funcionalidade = {
  titulo: 'Financeiro',
  texto: 'Contas a pagar e a receber, fluxo de caixa, boletos e conciliação em um só lugar.',
  icone: Wallet,
};
const RELATORIOS: Funcionalidade = {
  titulo: 'Relatórios',
  texto: 'Vendas por período e por produto, lucro, formas de pagamento e curva ABC de clientes.',
  icone: ChartColumn,
};

export const segmentos: Segmento[] = [
  {
    slug: 'pet-shop',
    nome: 'Pet Shop',
    card: {
      titulo: 'Pet Shop',
      texto: 'Banho e tosa, hotel, creche e planos para tutores, integrados ao PDV e ao estoque.',
      imagem: petHero,
    },
    pagina: {
      titulo: 'Sistema para Pet Shop com PDV e Controle Completo',
      heroTitulo: 'Sistema para\nPet Shop com PDV\ne Controle Completo',
      heroImagem: petHero,
      heroPosicao: '60% 30%',
      ctaTestar: 'Testar sistema para Pet Shop',
      logo: logoPet,
      logoAlt: 'DiProSoft Pet',
      produtoImagem: petProduto,
      produtoImagemAlt: 'Atendente passando o cartão de um casal com um cachorro no caixa de um pet shop',
      produtoTitulo: 'Solução completa para\no seu Pet Shop!',
      itens: [
        'Controle de estoque de rações e produtos',
        'Gestão de clientes e pets',
        'Agenda de banho e tosa, hotel e creche',
      ],
      produtoTexto: 'Controle total do seu pet shop com sistema integrado de vendas, serviços e financeiro.',
      publico: 'de pet shops',
      funcionalidades: [
        {
          titulo: 'Cadastro de pets por cliente',
          texto: 'Ficha de cada animal com espécie, raça e pelagem, vinculada ao cadastro do tutor.',
          icone: Dog,
        },
        {
          titulo: 'Agenda de banho e tosa',
          texto: 'Agendamentos de estética com aprovação de pedidos e acompanhamento de cada etapa.',
          icone: Scissors,
        },
        {
          titulo: 'Hotel e creche',
          texto: 'Reservas de quartos, turmas de creche e painel de monitoramento dos animais.',
          icone: BedDouble,
        },
        {
          titulo: 'Planos para tutores',
          texto: 'Planos com franquia de uso por ciclo, aplicada automaticamente no preço de cada serviço.',
          icone: WalletCards,
        },
        {
          titulo: 'Controle de estoque',
          texto: 'Baixa automática dos produtos usados nos serviços e controle de rações e acessórios.',
          icone: ClipboardList,
        },
        PDV,
        {
          titulo: 'Histórico de atendimentos',
          texto: 'Serviços, vendas e atendimentos de cada pet reunidos em um só lugar.',
          icone: RotateCcwClock,
        },
        {
          titulo: 'Lembretes via WhatsApp',
          texto: 'Confirmação automática de agendamentos de banho e tosa e de check-in no hotel.',
          icone: BellRing,
        },
        COBRANCA_WHATSAPP,
      ],
      ctaTitulo: 'Pet shop mais ágil, inteligente e lucrativo começa na Diprosoft!',
    },
  },
  {
    slug: 'clinica-veterinaria',
    nome: 'Clínica Veterinária',
    card: {
      titulo: 'Clínica Veterinária',
      texto: 'Prontuário, vacinação com reforço automático, exames e internação em um só sistema.',
      imagem: vetHero,
    },
    pagina: {
      titulo: 'Sistema Completo para Clínica Veterinária',
      heroTitulo: 'Sistema Completo\npara Clínica\nVeterinária',
      heroImagem: vetHero,
      heroPosicao: '60% 30%',
      ctaTestar: 'Testar sistema para Clínica Veterinária',
      // Não há logo específico de Veterinário na pasta Logos; o design usa o de Services.
      logo: logoServices,
      logoAlt: 'DiProSoft Services',
      produtoImagem: vetProduto,
      produtoImagemAlt: 'Veterinária atendendo uma cliente com um cachorro no balcão de uma clínica',
      produtoTitulo: 'Solução completa para\na sua Clínica Veterinária!',
      itens: ['Controle de pacientes', 'Histórico clínico', 'Agenda', 'Vacinação e internação'],
      produtoTexto:
        'Controle total da sua clínica veterinária com sistema integrado de atendimentos, vendas e financeiro.',
      publico: 'de clínicas veterinárias',
      funcionalidades: [
        {
          titulo: 'Prontuário do animal',
          texto: 'Prontuário numerado pela clínica, com alergias, condições crônicas e curva de peso.',
          icone: FileHeart,
        },
        {
          titulo: 'Fila de consultas e agenda',
          texto: 'Acompanhe cada atendimento do agendamento à conclusão, com histórico de consultas.',
          icone: CalendarDays,
        },
        {
          titulo: 'Vacinação com reforço automático',
          texto: 'Ao aplicar uma dose, o reforço já fica agendado conforme o intervalo da vacina.',
          icone: Syringe,
        },
        {
          titulo: 'Exames e laboratórios',
          texto: 'Histórico de exames com anexos e cadastro dos laboratórios parceiros.',
          icone: Microscope,
        },
        {
          titulo: 'Internação',
          texto: 'Controle de internações, alta com resumo obrigatório e ocupação de leitos.',
          icone: BedDouble,
        },
        {
          titulo: 'Prescrição e receituário',
          texto: 'Modelos de prescrição, atendimento e avaliação para agilizar a rotina do veterinário.',
          icone: FilePen,
        },
        {
          titulo: 'Lembretes via WhatsApp',
          texto: 'Aviso automático ao tutor sobre vacinas a vencer e atendimentos agendados.',
          icone: BellRing,
        },
        {
          titulo: 'Faturamento integrado',
          texto: 'Atendimento, produtos e medicamentos faturados juntos, com baixa no estoque.',
          icone: Wallet,
        },
      ],
      ctaTitulo: 'Clínica veterinária mais ágil, inteligente e lucrativa começa na Diprosoft!',
    },
  },
  {
    slug: 'auto-center',
    nome: 'Auto Center',
    card: {
      titulo: 'Autocenter',
      texto: 'Ordem de serviço com checklist, consulta pela placa e aviso de veículo pronto por WhatsApp.',
      imagem: autoHero,
    },
    pagina: {
      titulo: 'Sistema para Auto Center e Serviços Automotivos',
      heroTitulo: 'Sistema para Auto\nCenter e Serviços\nAutomotivos',
      heroImagem: autoHero,
      heroPosicao: '60% 40%',
      ctaTestar: 'Testar sistema para Auto Center',
      logo: logoCar,
      logoAlt: 'DiProSoft Car',
      produtoImagem: autoProduto,
      produtoImagemAlt: 'Atendente registrando uma venda no balcão de uma loja de autopeças',
      produtoTitulo: 'Solução completa para\no seu Auto Center!',
      itens: [
        'Ordens de serviço com checklist',
        'Consulta do veículo pela placa',
        'Histórico por veículo',
        'Controle de peças',
        'Agenda da oficina',
        'Avisos ao cliente por WhatsApp',
      ],
      produtoTexto: 'Controle total do seu auto center com sistema integrado de vendas, serviços e financeiro.',
      publico: 'de auto centers e oficinas',
      funcionalidades: [
        {
          titulo: 'Ordem de serviço completa',
          texto: 'Serviços, peças, colaborador responsável e datas de entrada e entrega na mesma OS.',
          icone: ClipboardList,
        },
        {
          titulo: 'Consulta do veículo pela placa',
          texto: 'Digite a placa e os dados do veículo são preenchidos automaticamente.',
          icone: Search,
        },
        {
          titulo: 'Checklist de entrada',
          texto: 'Checklists personalizados para registrar o estado do veículo na recepção.',
          icone: ClipboardCheck,
        },
        {
          titulo: 'Histórico por veículo',
          texto: 'Todas as ordens de serviço de cada veículo e cliente, prontas para consulta e impressão.',
          icone: Car,
        },
        {
          titulo: 'Agenda da oficina',
          texto: 'Calendário das ordens de serviço por dia, semana ou mês, com filtro por colaborador.',
          icone: CalendarClock,
        },
        {
          titulo: 'Controle de peças',
          texto: 'Entrada por XML, inventário, transferência entre locais e baixa automática na OS.',
          icone: Boxes,
        },
        PDV,
        {
          titulo: 'Aviso de OS concluída',
          texto: 'O cliente recebe mensagem no WhatsApp quando o serviço termina e o veículo está pronto.',
          icone: 'whatsapp',
        },
        {
          titulo: 'Lembrete de revisão',
          texto: 'Mensagem automática lembrando o cliente da próxima revisão do veículo.',
          icone: BellRing,
        },
        {
          titulo: 'Notas fiscais',
          texto: 'Emissão de NFS-e para os serviços e de NF-e ou NFC-e para as peças.',
          icone: ReceiptText,
        },
        FINANCEIRO,
      ],
      ctaTitulo: 'Auto center mais ágil, inteligente e lucrativo começa na Diprosoft!',
    },
  },
  {
    slug: 'roupas-e-calcados',
    nome: 'Roupas & Calçados',
    card: {
      titulo: 'Roupas & Calçados',
      texto: 'Estoque por tamanho e cor, trocas, crediário e etiquetas com código de barras.',
      imagem: roupasHero,
    },
    pagina: {
      titulo: 'Sistema para Loja de Roupas e Calçados com Controle de Estoque',
      heroTitulo: 'Sistema para Loja\nde Roupas e Calçados\ncom Controle de Estoque',
      heroImagem: roupasHero,
      heroPosicao: '60% 35%',
      ctaTestar: 'Testar sistema para loja',
      logo: logoWear,
      logoAlt: 'DiProSoft Wear',
      produtoImagem: roupasProduto,
      produtoImagemAlt: 'Casal pagando uma compra no caixa de uma loja de roupas',
      produtoTitulo: 'Solução completa para\na sua loja!',
      itens: ['Controle de grade (tamanho/cor)', 'Estoque sempre organizado', 'Trocas e crediário'],
      produtoTexto: 'Controle total da sua loja com sistema integrado de vendas, estoque e financeiro.',
      publico: 'de lojas de roupas e calçados',
      funcionalidades: [
        {
          titulo: 'Controle por tamanho e cor',
          texto: 'Cadastro de tamanhos e cores para acompanhar o estoque de cada variação.',
          icone: Shirt,
        },
        PDV,
        {
          titulo: 'Trocas e devoluções',
          texto: 'Trocas registradas no sistema, com retorno automático do produto ao estoque.',
          icone: ArrowLeftRight,
        },
        {
          titulo: 'Crediário',
          texto: 'Venda parcelada no crediário com controle de parcelas e de inadimplência.',
          icone: HandCoins,
        },
        {
          titulo: 'Etiquetas',
          texto: 'Modelos de etiqueta e impressão em lote com código de barras.',
          icone: Tags,
        },
        {
          titulo: 'Relatórios de vendas',
          texto: 'Vendas por período e por produto, lucro e curva ABC de clientes.',
          icone: ChartColumn,
        },
      ],
      ctaTitulo: 'Loja mais ágil, inteligente e lucrativa começa na Diprosoft!',
    },
  },
  {
    slug: 'mercadinho',
    nome: 'Mercadinho',
    card: {
      titulo: 'Mercados',
      texto: 'PDV rápido com NFC-e, integração com balança e controle de caixa por operador.',
      imagem: mercadinhoHero,
    },
    pagina: {
      titulo: 'Sistema para Mercadinhos com PDV Rápido',
      heroTitulo: 'Sistema para\nMercadinhos com\nPDV Rápido',
      heroImagem: mercadinhoHero,
      heroPosicao: '60% 35%',
      ctaTestar: 'Testar sistema para mercado',
      logo: logoMax,
      logoAlt: 'DiProSoft Max',
      produtoImagem: mercadinhoProduto,
      produtoImagemAlt: 'Operador de caixa atendendo uma cliente em um mercadinho',
      produtoTitulo: 'Solução completa para\no seu mercadinho!',
      itens: ['Menos filas no caixa', 'Controle de estoque', 'Integração com balança'],
      produtoTexto: 'Controle total do seu mercadinho com sistema integrado de vendas, estoque e financeiro.',
      publico: 'de mercadinhos',
      funcionalidades: [
        {
          titulo: 'PDV rápido',
          texto: 'Leitor de código de barras e pagamento em PIX, cartão, TEF ou dinheiro.',
          icone: ScanBarcode,
        },
        {
          titulo: 'Emissão de NFC-e',
          texto: 'Cupom fiscal eletrônico com emissão em contingência quando a internet cai.',
          icone: ReceiptText,
        },
        {
          titulo: 'Integração com balança',
          texto: 'Exportação dos produtos pesáveis no layout das balanças Toledo MGV6.',
          icone: Scale,
        },
        {
          titulo: 'Caixa por operador',
          texto: 'Abertura e fechamento de caixa, sangria e suprimento por operador.',
          icone: Calculator,
        },
        {
          titulo: 'Controle de estoque',
          texto: 'Entrada de mercadoria por XML, inventário, conferência e alerta de estoque baixo.',
          icone: Boxes,
        },
        RELATORIOS,
      ],
      ctaTitulo: 'Mercadinho mais ágil, inteligente e lucrativo começa na Diprosoft!',
    },
  },
  {
    slug: 'acougue',
    nome: 'Açougue',
    card: {
      titulo: 'Açougue',
      texto: 'Venda por peso, integração com balança e fracionamento de estoque.',
      imagem: acougueHero,
    },
    pagina: {
      titulo: 'Sistema para Açougue com Controle por Peso',
      heroTitulo: 'Sistema para Açougue\ncom Controle por Peso',
      heroImagem: acougueHero,
      heroPosicao: '60% 35%',
      ctaTestar: 'Testar sistema para açougue',
      // O design usa o logo Varejo para açougue e padaria.
      logo: logoVarejo,
      logoAlt: 'DiProSoft Varejo',
      produtoImagem: acougueProduto,
      produtoImagemAlt: 'Açougueiro atendendo um casal no balcão de carnes',
      produtoTitulo: 'Solução completa para\no seu açougue!',
      itens: ['Controle de peso', 'Redução de perdas', 'Gestão automatizada'],
      produtoTexto: 'Controle total do seu açougue com sistema integrado de vendas, estoque e financeiro.',
      publico: 'de açougues',
      funcionalidades: [
        {
          titulo: 'Venda por peso',
          texto: 'Produtos vendidos por quilo, com quantidades fracionadas registradas com precisão.',
          icone: Scale,
        },
        {
          titulo: 'Integração com balança',
          texto: 'Exportação dos produtos no layout das balanças Toledo MGV6 e etiquetas com código de barras.',
          icone: Tags,
        },
        {
          titulo: 'Fracionamento de estoque',
          texto: 'Converta peças inteiras em cortes e acompanhe o histórico de cada conversão.',
          icone: Split,
        },
        PDV,
      ],
      ctaTitulo: 'Açougue mais ágil, inteligente e lucrativo começa na Diprosoft!',
    },
  },
  {
    slug: 'varejo',
    nome: 'Varejo',
    card: {
      titulo: 'Varejo',
      texto: 'PDV, estoque, financeiro e vendas online integradas a marketplaces.',
      imagem: varejoProduto,
    },
    pagina: {
      titulo: 'Sistema para Varejo Completo com PDV',
      heroTitulo: 'Sistema para Varejo\nCompleto com PDV',
      heroImagem: varejoHero,
      heroPosicao: '60% 35%',
      ctaTestar: 'Testar sistema para varejo',
      logo: logoVarejo,
      logoAlt: 'DiProSoft Varejo',
      produtoImagem: varejoProduto,
      produtoImagemAlt: 'Atendente passando as compras de um casal no caixa de um hortifrúti',
      produtoTitulo: 'Solução completa para\no seu varejo!',
      itens: ['Controle geral do negócio', 'Gestão automatizada', 'Vendas na loja e online'],
      produtoTexto: 'Controle total do seu varejo com sistema integrado de vendas, estoque e financeiro.',
      publico: 'do varejo',
      funcionalidades: [
        PDV,
        {
          titulo: 'Estoque',
          texto: 'Entrada por XML, inventário, transferência entre locais e histórico de movimentações.',
          icone: Boxes,
        },
        FINANCEIRO,
        {
          titulo: 'Vendas online',
          texto: 'Integração com Mercado Livre, Nuvem Shop e WooCommerce, além de e-commerce próprio.',
          icone: Globe,
        },
        {
          titulo: 'Crediário',
          texto: 'Venda parcelada com controle de parcelas e de inadimplência.',
          icone: HandCoins,
        },
        RELATORIOS,
      ],
      ctaTitulo: 'Varejo mais ágil, inteligente e lucrativo começa na Diprosoft!',
    },
  },
  {
    slug: 'padaria',
    nome: 'Padaria',
    card: {
      titulo: 'Padaria',
      texto: 'PDV rápido, venda por peso e fracionamento de estoque para o dia a dia da padaria.',
      imagem: padariaHero,
    },
    pagina: {
      // O design dizia "com Controle de Produção", mas o módulo de ordens de produção
      // ainda não está disponível no ERP (item desabilitado no menu de Estoque).
      titulo: 'Sistema para Padaria com PDV e Controle de Estoque',
      heroTitulo: 'Sistema para Padaria\ncom PDV e Controle\nde Estoque',
      heroImagem: padariaHero,
      heroPosicao: '60% 35%',
      ctaTestar: 'Testar sistema para padaria',
      logo: logoVarejo,
      logoAlt: 'DiProSoft Varejo',
      produtoImagem: padariaProduto,
      produtoImagemAlt: 'Atendente de padaria recebendo o pagamento de um casal no balcão',
      produtoTitulo: 'Solução completa para\na sua padaria!',
      itens: ['Controle geral do negócio', 'Gestão automatizada', 'Venda por peso'],
      produtoTexto: 'Controle total da sua padaria com sistema integrado de vendas, estoque e financeiro.',
      publico: 'de padarias',
      funcionalidades: [
        PDV,
        {
          titulo: 'Venda por peso',
          texto: 'Pães e produtos pesáveis exportados no layout das balanças Toledo MGV6.',
          icone: Scale,
        },
        {
          titulo: 'Estoque',
          texto: 'Fracionamento e conversão de produtos, inventário e alerta de estoque baixo.',
          icone: Boxes,
        },
        FINANCEIRO,
      ],
      ctaTitulo: 'Padaria mais ágil, inteligente e lucrativa começa na Diprosoft!',
    },
  },
  {
    slug: 'prestadores-de-servico',
    nome: 'Prestadores de Serviço',
    card: {
      titulo: 'Prestadores de Serviço',
      texto: 'Agenda, ordem de serviço, orçamentos, recibos e NFS-e para quem vende serviços.',
      imagem: servicosHero,
    },
    pagina: {
      titulo: 'Sistema Completo para Prestadores de Serviços',
      heroTitulo: 'Sistema Completo\npara Prestadores\nde Serviços',
      heroImagem: servicosHero,
      heroPosicao: '60% 35%',
      ctaTestar: 'Testar sistema para Prestadores de Serviço',
      logo: logoServices,
      logoAlt: 'DiProSoft Services',
      produtoImagem: servicosProduto,
      produtoImagemAlt: 'Atendente recebendo o pagamento de uma cliente no balcão de atendimento',
      produtoTitulo: 'Solução completa para\na sua prestação de serviço!',
      itens: ['Controle financeiro', 'Organização dos atendimentos', 'Emissão de NFS-e'],
      produtoTexto:
        'Controle total da sua prestação de serviço com sistema integrado de vendas, serviços e financeiro.',
      publico: 'de prestadores de serviço',
      funcionalidades: [
        {
          titulo: 'Agenda',
          texto: 'Calendário de atendimentos por dia, semana ou mês, com filtro por colaborador.',
          icone: CalendarDays,
        },
        {
          titulo: 'Ordem de serviço',
          texto: 'Serviços, materiais, responsável e prazos registrados em cada OS, com impressão.',
          icone: ClipboardList,
        },
        {
          titulo: 'Orçamentos',
          texto: 'Crie e imprima orçamentos e transforme em venda quando o cliente aprovar.',
          icone: Calculator,
        },
        {
          titulo: 'Pré-venda',
          texto: 'Registre o pedido no atendimento e finalize o pagamento depois, no caixa.',
          icone: ShoppingCart,
        },
        {
          titulo: 'Emissão de recibos e NFS-e',
          texto: 'Recibos de pagamento e nota fiscal de serviço emitidos pelo próprio sistema.',
          icone: Receipt,
        },
        {
          titulo: 'Cadastro de clientes',
          texto: 'Dados e histórico de serviços de cada cliente sempre à mão.',
          icone: Users,
        },
        {
          titulo: 'Aviso de OS concluída',
          texto: 'O cliente recebe mensagem no WhatsApp quando o serviço está pronto.',
          icone: 'whatsapp',
        },
        FINANCEIRO,
      ],
      ctaTitulo: 'Prestador de serviço mais ágil, inteligente e lucrativo começa na Diprosoft!',
    },
  },
  // Card do design sem página própria; a página de Varejo do design é ilustrada com um hortifrúti.
  {
    slug: 'hortifruti',
    nome: 'Hortifrúti',
    card: {
      titulo: 'Hortifrúti',
      texto: 'Venda por peso, integração com balança e controle de estoque dos perecíveis.',
      imagem: varejoHero,
    },
    destino: 'varejo',
  },
];

export const segmentosDisponiveis = segmentos.filter(
  (s): s is Segmento & { pagina: PaginaSegmento } => s.pagina !== undefined,
);
