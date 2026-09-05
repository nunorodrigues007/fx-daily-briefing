// ═══════════════════════════════════════════════════════════════════════════
// FX DAILY BRIEFING — CONFIG SEMANAL
// Este é o ÚNICO ficheiro a actualizar no update semanal.
// NUNCA editar index.html no processo semanal — só este ficheiro.
// Gerado automaticamente por _scripts/build_config.py
// ═══════════════════════════════════════════════════════════════════════════

const WEEK_CONFIG = {
  week: 37,
  period: "7 – 11 Set 2026",
  pairs: [
    {
      pair: "AUD/CHF",
      direction: "LONG",
      conviction: "★★★★★",
      score_diff: "7.6 pts",
      carry: "+435bp",
      thesis: "Diferencial 9.4 (AUD) − 1.8 (CHF) = 7.6 pontos. AUD revisto de 9.3 para 9.4 depois do GDP do Q2 a +0.4% trimestral (ABS, 2 Set) contra consenso de 0.3%, com o contributo positivo do comercio externo pela primeira vez desde Dezembro de 2023; a taxa mantem-se em 4.35%, a mais alta do G8, e a proxima reuniao so e a 28-29 Set. CHF revisto em alta de 1.5 para 1.8 mas continua ancorado em 0.00%: o CPI de Agosto saiu a 0.8% anual contra 0.5% esperado e o GDP do Q2 a +1.5% trimestral, o mais forte desde o Q3 de 2021, e ainda assim a curva de swaps so preve a primeira subida para 0.25% em Junho de 2027. Catalisador: CPI da China, quarta 9 Set, 01:30 GMT — sem dados australianos na semana, e a procura chinesa que move o AUD. Key risk: uma escalada em Hormuz atinge as duas pernas ao mesmo tempo — bid de refugio no CHF e venda do AUD como proxy de risco — e e o unico cenario que inverte o par sem que nenhum banco central se pronuncie.",
      base_ccy: "AUD",
      quote_ccy: "CHF"
    },
    {
      pair: "USD/CHF",
      direction: "LONG",
      conviction: "★★★★★",
      score_diff: "7.5 pts",
      carry: "+362bp",
      thesis: "Diferencial 9.3 (USD) − 1.8 (CHF) = 7.5 pontos. USD revisto de 9.2 para 9.3: o NFP de Agosto saiu a +162 mil contra um consenso de 53 a 56 mil (BLS, 4 Set), mais de cinco vezes a media dos ultimos doze meses de 31 mil, com o desemprego estavel em 4.1%; os yields a 2 anos tocaram 4.4246%, o valor mais alto desde Janeiro de 2025. A revisao e contida em +0.1 porque o reprice liquido da semana foi pequeno: os comentarios dovish de Waller a 3 Set tinham derrubado a probabilidade de hike para 48.4% e o NFP limitou-se a devolve-la aos ~57-63% onde ja estava, e o ISM abrandou de 55.6% para 54.6%. CHF sem catalisador proprio ate a SNB de 24 Set, apesar dos dois beats de 3 Set. Catalisador: CPI dos EUA de Agosto, sexta 11 Set, 12:30 GMT, o ultimo dado de inflacao antes do FOMC de 15-16 Set. Key risk: o par depende de um unico numero a uma unica hora — um CPI abaixo do consenso valida a leitura de Waller de que ha desinflacao e desfaz o premio hawkish acumulado desde Jackson Hole.",
      base_ccy: "USD",
      quote_ccy: "CHF"
    },
    {
      pair: "GBP/CHF",
      direction: "LONG",
      conviction: "★★★★",
      score_diff: "6.6 pts",
      carry: "+375bp",
      thesis: "Diferencial 8.4 (GBP) − 1.8 (CHF) = 6.6 pontos. GBP inalterado em 8.4 pela segunda semana: nao houve nenhum dado T1 do Reino Unido entre 31 Ago e 4 Set — a segunda-feira foi feriado bancario — e o CPI de Julho confirmado a 19 Ago em 2.9% anual continua dentro do intervalo neutro, sem activar nem o gatilho de subida acima de 3.0% nem o de descida abaixo de 2.4%. CHF em 1.8 pelos dois beats de 3 Set, ainda em 0.00%. Catalisador: GDP mensal do Reino Unido de Julho, sexta 11 Set, 07:00 BST (06:00 GMT) — e T2 e nao move o score, o que significa que o par entra na semana sem catalisador proprio de T1, tal como na semana passada. Key risk: e o par mais exposto ao CHF isolado, e o diferencial ja encolheu de 6.9 para 6.6 so por causa da revisao suica; outra subida do CHF da mesma ordem leva-o abaixo dos 5.5 pontos que separam as quatro estrelas das tres.",
      base_ccy: "GBP",
      quote_ccy: "CHF"
    },
    {
      pair: "AUD/CAD",
      direction: "LONG",
      conviction: "★★★★",
      score_diff: "7.5 pts",
      carry: "+210bp",
      thesis: "Diferencial 9.4 (AUD) − 1.9 (CAD) = 7.5 pontos, o unico do Top 5 que alargou esta semana. AUD reforcado pelo GDP do Q2 acima do consenso. CAD revisto em baixa de 2.0 para 1.9: o BOC manteve a taxa em 2.25% a 2 Set com linguagem de viés hawkish — 'upside risks to inflation have increased' — mas o emprego de Agosto saiu a -41.700 postos contra um consenso de +15.000 (StatCan, 4 Set), com o desemprego a manter-se em 6.4% e o crescimento salarial a arrefecer de 2.8% para 2.0%; o mercado passou a dar apenas 25% a um hike em 28 Out. Catalisador: CPI da China, quarta 9 Set, 01:30 GMT, que move o AUD; do lado canadiano o proximo T1 e o CPI de Agosto a 14 Set, tres dias depois de fechar esta semana. Key risk: o Brent subiu cerca de 9% na semana para 96.28 dolares com a escalada em Hormuz, e os termos de troca canadianos sao um vento a favor do CAD que este framework nao pontua — o diferencial de politica diz LONG enquanto o canal do petroleo empurra em sentido contrario, e esta divergencia e a maior desde W25.",
      base_ccy: "AUD",
      quote_ccy: "CAD"
    },
    {
      pair: "USD/CAD",
      direction: "LONG",
      conviction: "★★★",
      score_diff: "7.4 pts",
      carry: "+138bp",
      thesis: "Diferencial 9.3 (USD) − 1.9 (CAD) = 7.4 pontos. USD reforcado pelo NFP muito acima do consenso; CAD enfraquecido pelo emprego de Agosto e pelo arrefecimento salarial para 2.0%, apesar do hold com tom hawkish do BOC. Conviction mantem-se em 3 estrelas: com 138bp o carry fica abaixo do piso de 150bp das quatro estrelas, e a checklist do SOP fixa explicitamente 'USD/CAD com carry 138bp < 150bp -> maximo 3 estrelas'. O diferencial de 7.4 permitiria 5 estrelas, mas o carry e um tecto e nao um bonus. Catalisador: CPI dos EUA de Agosto, sexta 11 Set, 12:30 GMT. Key risk: o par tem dois lados a mexer ao mesmo tempo e ambos contra — um CPI abaixo do consenso comprime o USD enquanto o Brent perto dos 96 dolares sustenta o CAD pelos termos de troca; foi esta combinacao que produziu as maiores reversoes do par na serie.",
      base_ccy: "USD",
      quote_ccy: "CAD"
    }
  ],
  t1_events: [
    {
      date: "2026-09-01",
      time: "10:00 ET",
      release: "ISM Manufacturing PMI (Ago)",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-09-01",
      time: "09:00 GMT",
      release: "HICP flash Zona Euro (Ago)",
      ccy: "EUR",
      pairs: []
    },
    {
      date: "2026-09-02",
      time: "01:30 GMT",
      release: "GDP Q2 — ABS",
      ccy: "AUD",
      pairs: [
        "AUD/CHF",
        "AUD/CAD"
      ]
    },
    {
      date: "2026-09-02",
      time: "02:00 GMT",
      release: "RBNZ — decisao de taxa",
      ccy: "NZD",
      pairs: []
    },
    {
      date: "2026-09-02",
      time: "13:45 GMT",
      release: "Bank of Canada — decisao de taxa",
      ccy: "CAD",
      pairs: [
        "AUD/CAD",
        "USD/CAD"
      ]
    },
    {
      date: "2026-09-03",
      time: "06:30 GMT",
      release: "CPI (Ago) — BFS",
      ccy: "CHF",
      pairs: [
        "AUD/CHF",
        "USD/CHF",
        "GBP/CHF"
      ]
    },
    {
      date: "2026-09-03",
      time: "07:00 GMT",
      release: "GDP Q2 — SECO",
      ccy: "CHF",
      pairs: [
        "AUD/CHF",
        "USD/CHF",
        "GBP/CHF"
      ]
    },
    {
      date: "2026-09-04",
      time: "12:30 GMT",
      release: "Nonfarm Payrolls (Ago)",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-09-04",
      time: "12:30 GMT",
      release: "Emprego (Ago) — StatCan",
      ccy: "CAD",
      pairs: [
        "AUD/CAD",
        "USD/CAD"
      ]
    }
  ],
  t2_events: [
    {
      date: "2026-09-07",
      time: "—",
      release: "Labor Day — mercados EUA fechados",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-09-07",
      time: "23:50 GMT",
      release: "GDP Q2 final",
      ccy: "JPY",
      pairs: []
    },
    {
      date: "2026-09-08",
      time: "—",
      release: "EIA STEO Setembro",
      ccy: "—",
      pairs: []
    },
    {
      date: "2026-09-09",
      time: "01:30 GMT",
      release: "CPI China (Ago)",
      ccy: "CNY",
      pairs: []
    },
    {
      date: "2026-09-10",
      time: "12:15 GMT",
      release: "ECB — decisao de taxa (Berlim)",
      ccy: "EUR",
      pairs: []
    },
    {
      date: "2026-09-10",
      time: "12:30 GMT",
      release: "PPI (Ago)",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-09-11",
      time: "12:30 GMT",
      release: "CPI e core CPI (Ago)",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-09-11",
      time: "07:00 BST",
      release: "GDP mensal (Jul) — ONS",
      ccy: "GBP",
      pairs: [
        "GBP/CHF"
      ]
    },
    {
      date: "2026-09-14",
      time: "13:30 GMT",
      release: "CPI (Ago) — StatCan",
      ccy: "CAD",
      pairs: [
        "AUD/CAD",
        "USD/CAD"
      ]
    },
    {
      date: "2026-09-15",
      time: "—",
      release: "FOMC",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-09-16",
      time: "07:00 BST",
      release: "CPI (Ago) — ONS",
      ccy: "GBP",
      pairs: [
        "GBP/CHF"
      ]
    },
    {
      date: "2026-09-17",
      time: "—",
      release: "BOE — decisao de taxa",
      ccy: "GBP",
      pairs: [
        "GBP/CHF"
      ]
    },
    {
      date: "2026-09-17",
      time: "—",
      release: "BOJ — decisao de taxa",
      ccy: "JPY",
      pairs: []
    },
    {
      date: "2026-09-18",
      time: "TBC",
      release: "CPI nacional (Ago) — Statistics Japan",
      ccy: "JPY",
      pairs: []
    },
    {
      date: "2026-09-24",
      time: "01:30 GMT",
      release: "Labour Force (Ago) — ABS",
      ccy: "AUD",
      pairs: [
        "AUD/CHF",
        "AUD/CAD"
      ]
    },
    {
      date: "2026-09-24",
      time: "07:30 GMT",
      release: "SNB — avaliacao de politica monetaria",
      ccy: "CHF",
      pairs: [
        "AUD/CHF",
        "USD/CHF",
        "GBP/CHF"
      ]
    },
    {
      date: "2026-09-28",
      time: "—",
      release: "RBA — reuniao do Conselho",
      ccy: "AUD",
      pairs: [
        "AUD/CHF",
        "AUD/CAD"
      ]
    }
  ],
  holidays: [
    {
      date: "2026-09-07",
      country: "USA",
      label: "Labor Day — mercados fechados",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    }
  ]
};

const COMMODITY_CONFIG = {
  week: 32,
  assets: [
    {
      asset: "GOLD",
      score: 1,
      verdict_label: "MILD BULLISH",
      icon: "🥇",
      color_class: "xau",
      pillars: [
        {
          name: "Excess Liquidity (M1/IP)",
          n: "193.083 (Jul)",
          n1: "193.083 (Jul)",
          score: 0
        },
        {
          name: "Real Int. Rate (TIPS)",
          n: "2.42% (3 Set)",
          n1: "2.34% (26 Ago)",
          score: -1
        },
        {
          name: "ETF Flows (GLD)",
          n: "n/d",
          n1: "1,044.0t (!) deriv.",
          score: 0
        },
        {
          name: "COT Gold (MM)",
          n: "136,771 (1 Set)",
          n1: "144,747 (25 Ago)",
          score: 1
        },
        {
          name: "GDX Short Int.",
          n: "36.94M s/ report",
          n1: "36.94M (14 Ago)",
          score: 0
        },
        {
          name: "Sazonalidade",
          n: "Setembro",
          n1: "Agosto",
          score: 1
        }
      ],
      thesis: "Score cai de +4 (W31) para +1: dos seis pilares, tres ficam a zero por ausencia de dado novo ou de corroboracao — Excess Liquidity (FRED sem publicacao de Agosto), GDX (sem novo report biweekly desde 14 Ago) e ETF GLD (uma so fonte de derivacao valida, quando o Manual §8.4a exige duas). Dos dois pilares com sinal activo, o COT desce de 144.747 para 136.771 e descomprime o posicionamento (+1), enquanto os yields reais sobem de 2,34% para 2,42% (-1). A sazonalidade de Setembro mantem o +1. A descida e sobretudo perda de sinal, nao inversao de fundamentais. Sensibilidade: o intervalo real e 0 a +2 e o ETF GLD e decisivo — a leitura contraria levaria o gold a NEUTRAL.",
      key_event: "11 Set — CPI dos EUA de Agosto, 12:30 GMT: o dado que fixa a leitura do FOMC de 15-16 Set e, por essa via, o custo de oportunidade do metal. Antes disso, 18 Set traz a leitura do INDPRO que reactiva o pilar Excess Liquidity.",
      data_gaps: [
        "ETF GLD — n/d. Uma so fonte de derivacao valida esta semana (SSGA: AUM 151.250,23M / LBMA PM 4.467,15 a 3 Set, que daria ~1.053t). Barchart desactualizado, SPDR AWAITING, MacroMicro 403, Goldhub 404. DECISIVO: intervalo real 0 a +2",
        "Excess Liquidity — sem dado novo: M1SL e INDPRO ambos ainda em Julho; INDPRO so a 18 Set",
        "GDX Short Interest — sem novo report biweekly; settlement de ~31 Ago ainda nao publicado"
      ]
    },
    {
      asset: "CRUDE OIL",
      score: 2,
      verdict_label: "MILD BULLISH",
      icon: "🛢️",
      color_class: "oil",
      pillars: [
        {
          name: "Business Conf. (ISM)",
          n: "54.6% (Ago)",
          n1: "55.6% (Jul)",
          score: -1
        },
        {
          name: "EIA Stocks",
          n: "-4.5M bbl (28 Ago)",
          n1: "+0.1M bbl (21 Ago)",
          score: 1
        },
        {
          name: "US/SA Prod. (STEO)",
          n: "qualit. (!) Hormuz",
          n1: "5.5M b/d (Jul)",
          score: 1
        },
        {
          name: "COT Crude (WTI+Brent)",
          n: "n/d",
          n1: "266k (4 Ago)",
          score: 0
        },
        {
          name: "US Dollar (DXY)",
          n: "99.16 (4 Set)",
          n1: "99.65 (28 Ago)",
          score: 1
        }
      ],
      thesis: "Score sobe de -2 (W31) para +2, inversao de 4 pontos e a maior desde W30. O EIA registou um draw de 4,5M bbl na semana de 28 Ago depois de cinco semanas sem reducao (+1), o DXY cedeu de 99,65 para 99,16 (+1) e o pilar US/SA Production recebe +1 qualitativo pela escalada em Hormuz — transitos em 107 na semana de 24-30 Ago contra 121 na anterior, sem numero de shut-ins publicado. Trava o ISM, que desacelerou de 55,6% para 54,6% (-1). O COT continua n/d pela quinta semana. Sensibilidade: o intervalo real e +1 a +3 e uma descompressao do posicionamento levaria o crude a BULLISH.",
      key_event: "8 Set — EIA STEO de Setembro: primeira actualizacao de shut-ins desde 11 Ago, e substitui por um numero o +1 qualitativo que hoje sustenta um terco do score. A 14 Set, o COT Report adiado pelo feriado.",
      data_gaps: [
        "COT Crude — n/d pela 5.ª semana. O proxy Saxo nao volta a publicar figura combinada WTI+Brent desde a semana de 4 Ago (266k). DECISIVO: intervalo real +1 a +3",
        "US/SA Production — +1 QUALITATIVO, sem numero de shut-ins. Assenta na escalada em Hormuz; o STEO de 8 Set substitui-o por um valor",
        "STEO — sem publicacao nova desde 11 Ago"
      ]
    }
  ]
};
