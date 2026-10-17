// ═══════════════════════════════════════════════════════════════════════════
// FX DAILY BRIEFING — CONFIG SEMANAL
// Este é o ÚNICO ficheiro a actualizar no update semanal.
// NUNCA editar index.html no processo semanal — só este ficheiro.
// Gerado automaticamente por _scripts/build_config.py
// ═══════════════════════════════════════════════════════════════════════════

const WEEK_CONFIG = {
  week: 43,
  period: "19 – 23 Out 2026",
  pairs: [
    {
      pair: "AUD/CHF",
      direction: "LONG",
      conviction: "★★★★★",
      score_diff: "7.5 pts",
      carry: "+460bp",
      thesis: "Diferencial 9.4 (AUD) - 1.9 (CHF) = 7.5 pontos, de 8.0 no W42, porque o AUD desceu 0.5 e o CHF ficou igual. MOEDA BASE: o RBA tem a taxa mais alta do G8 em 4,60% depois da subida unanime de 29 Set, e as minutas publicadas a 13 Out mantem o enviesamento de aperto — 'including increasing the cash rate target further if required' — e registam que 'excess demand was greater than previously assessed'. Mas o Labour Force de 15 Out falhou com menos 39,3 mil postos contra consenso de mais 20 mil, o desemprego subiu para 4,7% e a subida de 3 Nov caiu de 27,9% para 17,1% de probabilidade precada. MOEDA COTADA: o SNB esta em 0,00%, o minimo do G8, sem catalisador de alta a prazo visivel — a subida de 10 Dez cedeu de 25,9% para 17,9% — e os dois membros da Direccao-Geral que apareceram a 15 Out nao deixaram texto publicado. Catalisador semanal: NENHUM dentro do periodo rotulado para qualquer das duas pernas, e isso e uma forca deste par esta semana — o proximo T1 do AUD e o CPI de 28 Out as 00:30 GMT e o do CHF e o CPI de 3 Nov as 07:30 GMT, os dois FORA de 19-23 Out, e nenhum dos dois bancos reune no periodo. CARRY 460bp, o maximo do G8 e por isso o denominador do Carry Rank desta semana, que da 10.0. CONVICCAO 5 estrelas, limitada por ambos os criterios. Key risk: o CPI australiano de 28 Out e o unico evento que pode confirmar ou desfazer a descida desta semana antes da reuniao de 3 Nov; se o CPI arrefecer depois de um mercado de trabalho fraco, a subida sai do preco e o diferencial encolhe pelo lado da base. Risco secundario: CHF bid por risk-off, que e o risco permanente de todos os shorts de franco. Score Final 8.25, de 8.60, e mantem-se #1 — mas com 0,12 de folga apenas sobre o USD/CHF, contra 0,82 na semana passada.",
      base_ccy: "AUD",
      quote_ccy: "CHF"
    },
    {
      pair: "USD/CHF",
      direction: "LONG",
      conviction: "★★★★★",
      score_diff: "8.0 pts",
      carry: "+388bp",
      thesis: "Diferencial 9.9 (USD) - 1.9 (CHF) = 8.0 pontos, de 7.5 no W42, porque o USD subiu 0.5. MOEDA BASE: o Fed esta em 3,875% e o CPI de Setembro, divulgado a 14 Out, bateu em tres das quatro medidas — 0,6% em cadeia no indice geral, 3,7% em doze meses, e o nucleo a 0,3% em cadeia e 2,6% em doze meses, contra 2,4% nos doze meses terminados em Agosto. A subida de Dezembro esta precada entre 85,8% e cerca de 90%, e Hammack diz que ve as condicoes financeiras como 'neutral rather than holding demand back' enquanto considera apropriado um stance restritivo. MOEDA COTADA: identica a do #1 — SNB em 0,00%, subida de Dezembro a ceder, sem texto de nenhuma das duas aparicoes de 15 Out. Catalisador semanal: NENHUM dentro do periodo rotulado para qualquer das duas pernas. O proximo T1 do USD e a reuniao do FOMC de 27-28 Out, e foi verificado nos dois calendarios oficiais que nada se interpoe — o BLS nao tem T1 entre 19 e 28 Out e a BEA poe o GDP flash do 3T e o PCE de Setembro os dois a 29 Out, depois da reuniao. CARRY 388bp. CONVICCAO 5 estrelas, limitada por ambos os criterios. Key risk: o proprio delta do USD depende de uma classificacao em aberto — se o T1 de inflacao do USD for o PCE e nao o CPI, este CPI e T2, o USD volta a 9.4 e este par volta a 7.78 e ao #2 com a folga antiga. Risco de mercado: a subida de Outubro foi precada a 41,5% no dia do CPI e desfez-se para 13-18% ate sexta, aparentemente depois de Warsh declinar pre-anunciar a reuniao — o que mostra que este eixo se move nos dois sentidos dentro da mesma semana. Score Final 8.13, de 7.78, e sobe a 0,12 do primeiro lugar. E o par com o SEGUNDO diferencial mais largo do quadro.",
      base_ccy: "USD",
      quote_ccy: "CHF"
    },
    {
      pair: "GBP/CHF",
      direction: "LONG",
      conviction: "★★★★",
      score_diff: "6.8 pts",
      carry: "+375bp",
      thesis: "Diferencial 8.7 (GBP) - 1.9 (CHF) = 6.8 pontos, INALTERADO, porque nenhuma das duas pernas mexeu. MOEDA BASE: o BOE esta em 3,75% e a subida de 5 Nov esta precada entre 82% e 93,3%, consoante a fonte — uma dispersao de 11,3pp que fica declarada como intervalo e nao reduzida a um numero. O tom nao trouxe sinal novo verificavel: nenhum membro do MPC proferiu discurso entre 12 e 16 Out, ausencia confirmada no indice de discursos do proprio BOE, e o unico item do MPC e um paper de Catherine Mann publicado a 16 Out mas apresentado em Jackson Hole a 28 Ago. MOEDA COTADA: a mesma dos #1 e #2. Catalisador semanal: DOIS, e os dois na perna base, dentro do periodo rotulado — o Labour market overview de Outubro a 20 Out as 06:00 GMT e o CPI de Setembro a 21 Out as 06:00 GMT, os dois confirmados no JSON do proprio ONS. Sao os unicos dois T1 do Top 5 na perna BASE de um par. CARRY 375bp. CONVICCAO 4 estrelas, limitada pelo diferencial, que esta na banda 5.5-6.9. Key risk: a concentracao de dois T1 em dois dias na mesma perna — um mercado de trabalho fraco seguido de um CPI em linha inverteria a precificacao de 5 Nov, que e o que sustenta a banda alta deste score, e o diferencial encolheria pelo lado da base. Risco secundario: CHF bid por risk-off. Score Final 7.21, INALTERADO, e SUBIU de #4 para #3 — nao por merito proprio, mas porque o AUD/CAD desceu 0,35 com o AUD. E a distincao vale a pena fazer: este par e o unico dos cinco cujo valor nao mudou, e mudou de posicao.",
      base_ccy: "GBP",
      quote_ccy: "CHF"
    },
    {
      pair: "AUD/CAD",
      direction: "LONG",
      conviction: "★★★★",
      score_diff: "8.0 pts",
      carry: "+235bp",
      thesis: "Diferencial 9.4 (AUD) - 1.4 (CAD) = 8.0 pontos, de 8.5 no W42, porque o AUD desceu 0.5 e o CAD ficou igual. MOEDA BASE: a mesma do #1 — RBA em 4,60%, minutas hawkish de 13 Out, e um Labour Force que falhou a 15 Out com a subida de 3 Nov a cair para 17,1%. MOEDA COTADA: o BOC esta em 2,25% e e a moeda mais fraca do quadro com score 1.4, sexta semana de distorcao estrutural — o Brent fechou a 109,69 USD, mais de nove dolares acima dos 100 que Macklem nomeou como condicao, e o framework mantem o CAD no fundo. A direccao do banco apareceu quatro vezes em publico na semana, em Bangkok e em Halifax, e o proprio banco declarou em cada aviso que as palavras nao serao publicadas. Catalisador semanal: UM, na perna COTADA e no primeiro dia do periodo — o CPI do Canada de Setembro a 19 Out as 12:30 GMT, com a data confirmada no calendario anual de divulgacao do proprio StatCan. No mesmo dia as 15:30 GMT o proprio banco publica o Business Outlook Survey, com expectativas de inflacao. CARRY 235bp. CONVICCAO 4 estrelas, limitada pelo CARRY, que esta na banda 150-300bp e nao chega aos 300bp que as cinco estrelas exigem — o diferencial de 8.0 permitiria cinco. Key risk: um CPI canadiano forte a 19 Out e o unico evento que pode reverter a descida do CAD das ultimas semanas, e atacaria este par pelo lado cotado nove dias antes de uma reuniao que ja tem 38 a 41% de subida precada. Score Final 7.13, de 7.48, e desce de #3 para #4.",
      base_ccy: "AUD",
      quote_ccy: "CAD"
    },
    {
      pair: "USD/CAD",
      direction: "LONG",
      conviction: "★★★★",
      score_diff: "8.5 pts",
      carry: "+162bp",
      thesis: "Diferencial 9.9 (USD) - 1.4 (CAD) = 8.5 pontos, de 8.0 no W42, e e o DIFERENCIAL MAIS LARGO DO QUADRO. MOEDA BASE: a mesma do #2 — Fed em 3,875%, CPI de Setembro a bater em tres das quatro medidas a 14 Out, Dezembro precado entre 85,8% e cerca de 90%. MOEDA COTADA: a mesma do #4 — BOC em 2,25%, score 1.4, sexta semana de distorcao estrutural com o Brent acima de 109 USD, e quatro aparicoes da direccao sem texto publicado. Catalisador semanal: UM, na perna cotada e no primeiro dia do periodo — o CPI do Canada a 19 Out as 12:30 GMT, confirmado no calendario anual do proprio StatCan. CARRY 162bp, o mais baixo dos cinco. CONVICCAO 4 estrelas, limitada pelo CARRY: 162bp cai na banda 150-300bp, e vale notar que a checklist do SOP §7 ainda escreve 'USD/CAD com carry 138bp < 150bp -> maximo 3 estrelas' — esse 138bp era o carry de um momento anterior e com 162bp o par cumpre o minimo das quatro estrelas; o `conviction()` aplica a tabela mecanicamente. Key risk: as duas pernas tem evento de risco e em sentidos opostos — um CPI canadiano forte a 19 Out encolhe o diferencial pelo lado cotado, e a classificacao em aberto do T1 de inflacao do USD pode retirar o delta desta semana pelo lado base, devolvendo o par a 6.66. Score Final 7.01, de 6.66, e mantem-se #5 — mas o gap ao par imediatamente abaixo alargou de 0,57 para 0,92.",
      base_ccy: "USD",
      quote_ccy: "CAD"
    }
  ],
  t1_events: [
    {
      date: "2026-10-14",
      time: "12:30 GMT / 08:30 ET",
      release: "CPI de Setembro — BLS",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-15",
      time: "00:30 GMT / 11:30 AEDT",
      release: "Labour Force de Setembro — ABS",
      ccy: "AUD",
      pairs: [
        "AUD/CHF",
        "AUD/CAD"
      ]
    }
  ],
  t2_events: [
    {
      date: "2026-10-12",
      time: "—",
      release: "TRES feriados no G8 — ver nota de feriados",
      ccy: "—",
      pairs: []
    },
    {
      date: "2026-10-12",
      time: "—",
      release: "Hammack (Fed de Cleveland) — NABE, Cleveland",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-13",
      time: "00:30 GMT",
      release: "Minutas do RBA da reuniao de 28-29 Set",
      ccy: "AUD",
      pairs: [
        "AUD/CHF",
        "AUD/CAD"
      ]
    },
    {
      date: "2026-10-13",
      time: "—",
      release: "Lane (BCE, Conselho Executivo) — Dublim",
      ccy: "EUR",
      pairs: []
    },
    {
      date: "2026-10-13",
      time: "—",
      release: "Waller (Fed) — Bloomberg New Economy Forum, Nova Delhi",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-13",
      time: "—",
      release: "Minutas das reunioes de taxa de desconto (Ago/Set)",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-14",
      time: "12:30 GMT",
      release: "Real Earnings de Setembro — BLS",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-14",
      time: "—",
      release: "Beige Book",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-14",
      time: "—",
      release: "Bowman (Fed, vice-presidente para a Supervisao) — Bangkok",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-14",
      time: "06:05 GMT / 02:05 ET",
      release: "Macklem (BOC) — fireside chat do IIF, Bangkok",
      ccy: "CAD",
      pairs: [
        "AUD/CAD",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-14",
      time: "—",
      release: "Elderson (BCE, Conselho Executivo) — Frankfurt",
      ccy: "EUR",
      pairs: []
    },
    {
      date: "2026-10-15",
      time: "06:00 GMT / 07:00 BST",
      release: "GDP mensal do Reino Unido de Agosto — ONS",
      ccy: "GBP",
      pairs: [
        "GBP/CHF"
      ]
    },
    {
      date: "2026-10-15",
      time: "12:30 GMT",
      release: "PPI de Setembro — BLS",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-15",
      time: "12:30 GMT / 08:30 ET",
      release: "Advance Monthly Retail Sales de Setembro — Census Bureau",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-15",
      time: "—",
      release: "Koeda (BOJ, Policy Board) — Kumamoto",
      ccy: "JPY",
      pairs: []
    },
    {
      date: "2026-10-15",
      time: "06:30",
      release: "Schlegel (SNB, presidente) — painel do FMI, Bangkok",
      ccy: "CHF",
      pairs: [
        "AUD/CHF",
        "USD/CHF",
        "GBP/CHF"
      ]
    },
    {
      date: "2026-10-15",
      time: "12:30",
      release: "Tschudin (SNB, Direccao-Geral) — Singapura",
      ccy: "CHF",
      pairs: [
        "AUD/CHF",
        "USD/CHF",
        "GBP/CHF"
      ]
    },
    {
      date: "2026-10-15",
      time: "09:00 GMT / 05:00 ET",
      release: "Rogers (BOC, vice-governadora senior) — Atlantic Council, Bangkok",
      ccy: "CAD",
      pairs: [
        "AUD/CAD",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-15",
      time: "—",
      release: "Hammack (Fed) — evento Goldman Sachs, Nova Iorque",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-15",
      time: "21:45 GMT / 16 Out 10:45 NZDT",
      release: "Selected price indexes e Electronic card transactions de Setembro — Stats NZ",
      ccy: "NZD",
      pairs: []
    },
    {
      date: "2026-10-16",
      time: "03:30 GMT / 15 Out 23:30 ET",
      release: "Warsh (Fed, presidente) — fireside chat com Georgieva (FMI), Bangkok",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-16",
      time: "12:30 GMT",
      release: "Import/Export Price Indexes de Setembro — BLS",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-16",
      time: "—",
      release: "Macklem (BOC) — painel do FMI, Bangkok",
      ccy: "CAD",
      pairs: [
        "AUD/CAD",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-16",
      time: "12:00 GMT / 08:00 ET",
      release: "Alexopoulos (BOC, vice-governadora externa) — Halifax",
      ccy: "CAD",
      pairs: [
        "AUD/CAD",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-16",
      time: "—",
      release: "Paper de Catherine Mann (MPC) publicado pelo BOE",
      ccy: "GBP",
      pairs: [
        "GBP/CHF"
      ]
    },
    {
      date: "2026-10-15",
      time: "—",
      release: "Conway (RBNZ, economista-chefe e membro do MPC) — intervencao nao identificada",
      ccy: "NZD",
      pairs: []
    },
    {
      date: "2026-10-16",
      time: "—",
      release: "FRED INDPRO de Setembro (103,9506)",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-19",
      time: "12:30 GMT / 08:30 ET",
      release: "CPI do Canada de Setembro — StatCan",
      ccy: "CAD",
      pairs: [
        "AUD/CAD",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-19",
      time: "15:30 GMT / 11:30 ET",
      release: "Business Outlook Survey e Canadian Survey of Consumer Expectations — BOC",
      ccy: "CAD",
      pairs: [
        "AUD/CAD",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-20",
      time: "06:00 GMT / 07:00 BST",
      release: "Labour market overview de Outubro — ONS",
      ccy: "GBP",
      pairs: [
        "GBP/CHF"
      ]
    },
    {
      date: "2026-10-20",
      time: "14:00 GMT / 10:00 ET",
      release: "State Employment and Unemployment de Setembro — BLS",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-21",
      time: "06:00 GMT / 07:00 BST",
      release: "CPI do Reino Unido de Setembro — ONS",
      ccy: "GBP",
      pairs: [
        "GBP/CHF"
      ]
    },
    {
      date: "2026-10-21",
      time: "14:00 GMT / 10:00 ET",
      release: "Usual Weekly Earnings do 3T — BLS",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-21",
      time: "14:30 GMT / 10:30 ET",
      release: "EIA WPSR com a semana de 16 Out",
      ccy: "—",
      pairs: []
    },
    {
      date: "2026-10-21",
      time: "21:45 GMT / 22 Out 10:45 NZDT",
      release: "CPI do 3T da Nova Zelandia — Stats NZ",
      ccy: "NZD",
      pairs: []
    },
    {
      date: "2026-10-22",
      time: "—",
      release: "Sumario da discussao de politica monetaria — SNB",
      ccy: "CHF",
      pairs: [
        "AUD/CHF",
        "USD/CHF",
        "GBP/CHF"
      ]
    },
    {
      date: "2026-10-22",
      time: "23:30 GMT / 23 Out 08:30 JST",
      release: "CPI nacional do Japao de Setembro — Statistics Japan",
      ccy: "JPY",
      pairs: []
    },
    {
      date: "2026-10-22",
      time: "—",
      release: "Settlement do GDX de 15 Out",
      ccy: "—",
      pairs: []
    },
    {
      date: "2026-10-23",
      time: "13:45 GMT / 09:45 ET",
      release: "PMI flash de Outubro, manufactura e servicos — S&P Global",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-23",
      time: "14:00 GMT / 10:00 ET",
      release: "UoM de Outubro, leitura final",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-28",
      time: "00:30 GMT / 11:30 AEDT",
      release: "CPI da Australia de Setembro — ABS",
      ccy: "AUD",
      pairs: [
        "AUD/CHF",
        "AUD/CAD"
      ]
    },
    {
      date: "2026-10-28",
      time: "—",
      release: "FOMC (decisao), BOC com Monetary Policy Report (13:45 GMT) e RBNZ",
      ccy: "USD/CAD/NZD",
      pairs: []
    },
    {
      date: "2026-10-29",
      time: "—",
      release: "BCE (decisao e conferencia); GDP flash do 3T e PCE de Setembro dos EUA (12:30 GMT)",
      ccy: "EUR/USD",
      pairs: []
    },
    {
      date: "2026-11-03",
      time: "07:30 GMT / 08:30 CET",
      release: "CPI da Suica de Outubro — FSO",
      ccy: "CHF",
      pairs: [
        "AUD/CHF",
        "USD/CHF",
        "GBP/CHF"
      ]
    }
  ],
  holidays: [
    "FERIADOS: **NENHUM nos oito mercados do G8 entre 19 e 23 Out 2026**, e a ausencia foi verificada activamente em fonte oficial e nao inferida de nao se ter encontrado nada — que foi exactamente o erro do ciclo W42, em que se declarou a ausencia de feriados numa semana que fechava tres mercados. JAPAO: o calendario oficial de feriados de 2026 da JPX, lido na integra, da 'Oct. 12 (Mon.) Sports Day' e depois dele o feriado seguinte e 'Nov. 3 (Tue.) Culture Day' — nada entre 19 e 23 Out. CANADA: a pagina de eventos do proprio Banco do Canada, lida na integra, da como feriado nacional seguinte 'November 11, 2026 Remembrance Day' — nada entre 19 e 23 Out, e tambem nenhuma intervencao do banco nesse periodo. ESTADOS UNIDOS: o calendario de Outubro do proprio BLS lista um unico feriado em Outubro, o Columbus Day de 12 Out. REINO UNIDO, ZONA EURO, AUSTRALIA e SUICA: sem feriado bancario nesta semana. DUAS NOTAS DE CALENDARIO QUE CAEM JUNTO AO PERIODO E IMPORTAM: (1) o Labour Day da Nova Zelandia e, por definicao estatutaria, a QUARTA segunda-feira de Outubro, que em 2026 e **26 Out** — fora do periodo, mas e a segunda-feira imediatamente seguinte e cai na semana da reuniao do RBNZ de 28 Out. (2) os relogios europeus recuam no ultimo domingo de Outubro, **25 Out 2026**, pelo que as divulgacoes do ONS de 20 e 21 Out estao em BST (07:00 BST = 06:00 GMT) e as de Novembro estarao em GMT; a Australia e a Nova Zelandia ja estao em horario de verao desde 4 Out e 27 Set, logo AEDT = UTC+11 e NZDT = UTC+13. E a familia de falha do log §7 #55, em que uma mudanca de horario dentro do ciclo poe duas datas da mesma fonte em fusos diferentes."
  ]
};

const COMMODITY_CONFIG = {
  week: 38,
  assets: [
    {
      asset: "GOLD",
      score: 2,
      verdict_label: "MILD BULLISH",
      icon: "🥇",
      color_class: "xau",
      pillars: [
        {
          name: "Excess Liquidity (M1/IP)",
          n: "193,588 (Ago)",
          n1: "193,588 (Ago, revisto)",
          score: 0
        },
        {
          name: "Real Int. Rate (TIPS)",
          n: "2,78% (15 Out)",
          n1: "2,87% (8 Out)",
          score: 1
        },
        {
          name: "ETF Flows (GLD)",
          n: "1.053,91t (15 Out)",
          n1: "1.055,41t (8 Out)",
          score: -1
        },
        {
          name: "COT Gold (MM)",
          n: "107.089 (13 Out)",
          n1: "110.987 (6 Out)",
          score: 1
        },
        {
          name: "GDX Short Int.",
          n: "36,57M (sett. 30 Set)",
          n1: "36,57M (sett. 30 Set)",
          score: 0
        },
        {
          name: "Sazonalidade",
          n: "Outubro",
          n1: "Outubro",
          score: 1
        }
      ],
      thesis: "Score total +2 (MILD BULLISH): o yield real cede nove pontos base, o COT descomprime pela sexta semana consecutiva e Outubro é sazonalmente positivo, contra a tonelagem do GLD a liquidar 1,50t. O ponto ganho face ao W37 vem inteiramente do GDX, que passa de -1 a 0 por não haver settlement novo — é um -1 que adormeceu, não informação nova. O preço divergiu do framework: este subiu e o metal caiu 0,66%, para 4.166,39 USD/oz.",
      key_event: "27 Out — FRED M1SL de Setembro, a metade que falta ao pilar Excess Liquidity (o INDPRO de Setembro ja saiu a 16 Out com 103,9506); e ~22 Out o settlement do GDX de 15 Out, que devolve informacao ao pilar que esta a 0 por ausencia de report.",
      data_gaps: [
        "ZERO pilares n/d nos seis pela classificacao aplicada, segunda semana consecutiva. Gold exactamente +2 por essa via, sem semaforo alternativo por dado em falta.",
        "DOIS pilares a 0 por AUSENCIA DE PUBLICACAO NOVA e nao por n/d, os dois com a nao-publicacao verificada na fonte: Excess Liquidity (o M1SL de Setembro so sai a 27 Out, e Agosto continua a ser o ultimo mes comum) e GDX Short Int. (a primeira linha da tabela da MarketBeat continua a ser o settlement de 30 Set; o de 15 Out e esperado ~22 Out).",
        "REVISAO DE VINTAGE no INDPRO, declarada e aplicada: o INDPRO de AGOSTO foi revisto de 103,0682 para 103,2664 e o racio M1/INDPRO de Agosto passou de 193,960 para 193,588. N e N-1 saem os dois da edicao corrente, logo N=N-1 e o pilar da 0. Comparar o racio novo com o valor gravado na semana passada daria uma falsa descida e um -1 que nao existe.",
        "O delta de +1 do gold vem INTEIRAMENTE de um pilar: o GDX passa de -1 a 0 por nao haver settlement novo. Os outros cinco tem o mesmo score da semana passada. O ponto ganho e um -1 que adormeceu, nao informacao nova.",
        "RESSALVA DE HOMOGENEIDADE no pilar ETF GLD, que se mantem: o nivel nao e comparavel com os valores DERIVADOS de W31-W32 nem com a serie MacroMicro. Esta semana N e N-1 sao quintas-feiras homologas (15 Out e 8 Out)."
      ]
    },
    {
      asset: "CRUDE OIL",
      score: 3,
      verdict_label: "BULLISH",
      icon: "🛢️",
      color_class: "oil",
      pillars: [
        {
          name: "Business Conf. (ISM)",
          n: "54,5% (Set)",
          n1: "54,5% (Set)",
          score: 0
        },
        {
          name: "EIA Stocks",
          n: "-8,6M bbl (sem. 9 Out)",
          n1: "-3,2M bbl (sem. 2 Out)",
          score: 1
        },
        {
          name: "US/SA Prod. (STEO)",
          n: "4,8M b/d (Set)",
          n1: "4,8M b/d (Set)",
          score: 0
        },
        {
          name: "COT Crude (WTI+Brent)",
          n: "313k (6 Out)",
          n1: "335k (29 Set)",
          score: 1
        },
        {
          name: "US Dollar (DXY)",
          n: "101,84 (16 Out)",
          n1: "102,21 (9 Out)",
          score: 1
        }
      ],
      thesis: "Score total +3 (BULLISH): três dos cinco pilares estão a +1 — o draw de 8,6M bbl do EIA, a descompressão do COT (313k contra 335k) e o dólar a quebrar quatro semanas de subida (DXY 101,84). O salto de cinco pontos face à semana anterior reparte-se em STEO +1, COT +2 e dólar +2: o do STEO é pura mecânica, por não haver edição nova, e os dois do COT assentam num -1 anterior que o ciclo passado declarou dependente de método — só os dois do dólar são mercado sem ressalva. Se a edição do STEO de 10 Nov repetir a leitura de Outubro, o pilar volta a -1 e o crude desce a +2 por efeito de calendário.",
      key_event: "21 Out 14:30 GMT — EIA WPSR com a semana de 16 Out, depois do draw de 8,6M bbl, e de volta a quarta por nao haver feriado. E 10 Nov a proxima edicao do STEO, que e o unico evento de calendario que, por si so, pode fazer o crude descer um ponto sem informacao nova.",
      data_gaps: [
        "CONFLITO NORMATIVO NO PILAR DO STEO, assinalado e nao silenciado, e vale o semaforo. Tres textos em vigor dizem tres coisas sobre como pontuar entre edicoes: o Manual §1 e o §4 SCORING dao 0 (aplicado); o SOP §10 manda manter o score da ultima edicao, o que daria -1 e um crude de +2 MILD BULLISH; e o Manual §4 bloco ENTRE STEOS chama-lhe 'protocolo n/d', o que daria +3 com intervalo +2 a +4 e MILD BULLISH no extremo inferior. Seguiu-se a tabela do engine, o que o codigo implementa e a convencao da serie (W34, W35 e W36 pontuaram 0 entre edicoes). SOBE PARA DECISAO.",
        "DOIS dos cinco pontos do crude vem de mecanica e nao de mercado: o STEO passa de -1 a 0 por nao haver edicao nova (a de 6 Out continua em vigor e continua a dar shut-ins a cair, e volta a -1 a 10 Nov se a direccao se repetir), e o COT passa de -1 a +1 em parte porque o -1 da semana passada era a leitura que o proprio W42 declarou dependente de metodo.",
        "O COT Crude tem o PRIMEIRO N-1 LIMPO desde Agosto: 335k, da propria serie e da semana anterior, e nao o last_confirmed de 266k de 4 Ago. As duas convencoes dao agora o mesmo sinal, +1, pelo que a ambiguidade que no W42 valia um semaforo nao se levanta. A questao de principio continua sem decisao.",
        "DOIS pilares a 0 por ausencia de publicacao e nao por n/d: ISM (o dado de Outubro sai a 2 Nov, primeiro dia util do mes) e STEO (a propria pagina da EIA diz 'Next Release Date: November 10, 2026').",
        "ARITMETICA DO EIA NAO FECHA AO DECIMO: 424,1 - 8,6 da 415,5 e nao 415,6. Os tres numeros estao transcritos como a Table 1 os publica; a explicacao por arredondamento fica como HIPOTESE porque nao foi possivel reler a emissao arquivada de 15 Out. Importa porque o 415,6 semeia o N-1 da proxima semana.",
        "O WPSR desta semana foi publicado QUINTA 15 Out e nao a quarta habitual, por causa do Columbus Day de 12 Out — exactamente como o Manual §4 preve. Data verificada no dropdown de emissoes anteriores da propria EIA."
      ]
    }
  ]
};
