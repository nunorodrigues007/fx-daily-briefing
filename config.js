// ═══════════════════════════════════════════════════════════════════════════
// FX DAILY BRIEFING — CONFIG SEMANAL
// Este é o ÚNICO ficheiro a actualizar no update semanal.
// NUNCA editar index.html no processo semanal — só este ficheiro.
// Gerado automaticamente por _scripts/build_config.py
// ═══════════════════════════════════════════════════════════════════════════

const WEEK_CONFIG = {
  week: 38,
  period: "14 – 18 Set 2026",
  pairs: [
    {
      pair: "AUD/CHF",
      direction: "LONG",
      conviction: "★★★★★",
      score_diff: "7.8 pts",
      carry: "+435bp",
      thesis: "Diferencial 9.6 (AUD) - 1.8 (CHF) = 7.8 pontos, o mais largo do quadro. AUD revisto de 9.4 para 9.6 pelo eixo do tom: a 8 Set o vice-governador Hauser disse a televisao publica australiana que a inflacao e 'the central bank's one big problem' e nao excluiu subida na reuniao de 29 Set, e a Hunter afirmou no mesmo dia que o banco pode ter de subir; os quatro grandes bancos australianos apontam +25pb para 4.60% e a Westpac poe Novembro como cenario base. A taxa continua nos 4.35%, a mais alta do G8, o que da ao par o carry maximo do quadro e o Carry Rank de 10.0. CHF inalterado em 1.8 e ancorado em 0.00%: Schlegel falou a 11 Set, disse que a inflacao subiu mas continua dentro do intervalo de estabilidade de precos, e nao deu sinal sobre a avaliacao de 24 Set. Catalisador: nao ha dado australiano de Tier 1 antes de 24 Set, pelo que a semana do par corre sem catalisador proprio e fica exposta ao CHF. Key risk: os dados T2 australianos da semana foram materialmente maus — as condicoes de negocio do NAB cairam para -1, a primeira leitura negativa em seis anos, e o sentimento do consumidor recuou 5.2% para 84.4. O framework nao pontua T2 e por isso o score nao desceu, mas se o Labour Force de 24 Set confirmar o abrandamento a revisao inverte-se e este par e o primeiro a sentir.",
      base_ccy: "AUD",
      quote_ccy: "CHF"
    },
    {
      pair: "USD/CHF",
      direction: "LONG",
      conviction: "★★★★★",
      score_diff: "7.7 pts",
      carry: "+362bp",
      thesis: "Diferencial 9.5 (USD) - 1.8 (CHF) = 7.7 pontos. USD revisto de 9.3 para 9.5 pelo eixo da direccao do ciclo: o CPI de Agosto, publicado a 11 Set, deu core mensal de +0.3% contra 0.2% de consenso e levou a probabilidade de subida no FOMC de 16 Set de 50-57% para acima de 65%, e o PPI do dia anterior reacelerou para +0.4% mensal e 5.4% anual. A revisao e contida em +0.2 porque a leitura nao e unidireccional: o core anual desceu para 2.4%, o mais baixo desde Marco de 2021, e a gasolina — mais 3.9% no mes e mais 27.4% no ano — explicou sozinha mais de um terco da subida mensal do indice, o que sustenta a leitura de que o pico e sobretudo energia. O Fed esta em blackout desde 5 Set, pelo que o eixo do tom nao teve informacao nova. CHF em 1.8, sem catalisador proprio ate 24 Set. Catalisador: FOMC de quarta 16 Set, com Summary of Economic Projections — e o dot plot, nao a decisao, que carrega a informacao. Key risk: um hold acompanhado de projeccoes que nao validem mais aperto desfaz o premio construido desde Jackson Hole, e o par perde as duas pernas ao mesmo tempo se a SNB de 24 Set vier menos dovish do que a curva preca.",
      base_ccy: "USD",
      quote_ccy: "CHF"
    },
    {
      pair: "GBP/CHF",
      direction: "LONG",
      conviction: "★★★★",
      score_diff: "6.6 pts",
      carry: "+375bp",
      thesis: "Diferencial 8.4 (GBP) - 1.8 (CHF) = 6.6 pontos, inalterado pela segunda semana. GBP mantem-se em 8.4 pela terceira semana consecutiva: nao houve comunicacao do MPC nem dado de Tier 1 britanico entre 7 e 11 Set. O GDP mensal de Julho, publicado a 11 Set, bateu com forca — mais 0.4% no mes contra 0.0% de consenso, servicos a mais 0.4%, e o oitavo periodo consecutivo de crescimento no 3m/3m — mas o GDP mensal foi classificado como T2 no ciclo anterior e mantem-se assim por consistencia de serie, pelo que nao move o score. Fica como questao em aberto. CHF em 1.8. Catalisador: e a moeda com mais Tier 1 na semana — Labour Market Overview na terca 15 Set as 07:00 BST, CPI de Agosto na quarta 16 Set as 07:00 BST e decisao do BOE na quinta 17 Set, tres dias seguidos. Key risk: o par entra numa semana em que o score da moeda base pode mudar duas vezes antes da decisao do banco central, e o diferencial esta a 0.4 pontos do limiar de 7.0 que separa as 4 das 5 estrelas — um CPI acima de 3.0% activa o gatilho de subida do score e o par muda de escalao de convicao dentro da propria semana.",
      base_ccy: "GBP",
      quote_ccy: "CHF"
    },
    {
      pair: "AUD/CAD",
      direction: "LONG",
      conviction: "★★★★",
      score_diff: "7.7 pts",
      carry: "+210bp",
      thesis: "Diferencial 9.6 (AUD) - 1.9 (CAD) = 7.7 pontos, com carry de 210bp. As 4 estrelas sao limitadas pelo carry e nao pelo diferencial: 7.7 pontos permitiriam 5 estrelas, mas 210bp fica abaixo dos 300bp que a tabela do Passo 3 exige para o escalao maximo. AUD em 9.6 pelo tom do RBA descrito acima. CAD inalterado em 1.9: nao houve um unico dado canadiano no calendario de 7 a 11 Set nem comunicacao do BOC, pelo que o quadro continua a ser o de 2 Set — hold em 2.25% com tom hawkish anulado pelo emprego a -41.700 e pelos salarios a descer de 2.8% para 2.0%. Catalisador: CPI canadiano de Agosto na segunda 14 Set as 12:30 GMT (08:30 ET), o primeiro Tier 1 da semana em todo o quadro. Key risk: a divergencia assinalada no ciclo anterior agravou-se. O Brent subiu 9% na semana para 104,61 dolares e os termos de troca canadianos melhoram com isso — um vento a favor do CAD que um framework de politica monetaria nao pontua, e que actua contra as duas pernas deste par ao mesmo tempo, porque a Australia e importadora liquida de energia.",
      base_ccy: "AUD",
      quote_ccy: "CAD"
    },
    {
      pair: "USD/CAD",
      direction: "LONG",
      conviction: "★★★",
      score_diff: "7.6 pts",
      carry: "+138bp",
      thesis: "Diferencial 9.5 (USD) - 1.9 (CAD) = 7.6 pontos, carry de 138bp. As 3 estrelas sao o tecto imposto pelo carry: 138bp fica abaixo dos 150bp que a tabela do Passo 3 exige para 4 estrelas, e este e o caso que o SOP cita explicitamente na sua propria checklist. Um diferencial de 7.6 pontos nao compra estrelas que o carry nao sustenta. USD em 9.5 pelo reprice do FOMC, CAD em 1.9 sem dado novo. Catalisador: dois eventos em tres dias — CPI canadiano na segunda 14 Set e FOMC na quarta 16 Set — e sao os dois do mesmo lado do par, o que faz deste o par com mais informacao a chegar no Top 5. Key risk: a mesma exposicao ao petroleo do par anterior, agravada por o dolar americano ser tambem uma moeda de bloco exportador de energia; se o CPI canadiano surpreender em alta a 14 Set, o CAD ganha o primeiro catalisador proprio em duas semanas e o diferencial encolhe antes de o FOMC se pronunciar.",
      base_ccy: "USD",
      quote_ccy: "CAD"
    }
  ],
  t1_events: [
    {
      date: "2026-09-10",
      time: "12:15 GMT",
      release: "BCE — decisao de taxa (Berlim)",
      ccy: "EUR",
      pairs: []
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
    }
  ],
  t2_events: [
    {
      date: "2026-09-07",
      time: "23:50 GMT",
      release: "GDP Q2 final (revisao, T2)",
      ccy: "JPY",
      pairs: []
    },
    {
      date: "2026-09-08",
      time: "—",
      release: "NAB Business Survey e Westpac-MI Sentiment",
      ccy: "AUD",
      pairs: [
        "AUD/CHF",
        "AUD/CAD"
      ]
    },
    {
      date: "2026-09-08",
      time: "—",
      release: "Hauser e Hunter (RBA) — declaracoes",
      ccy: "AUD",
      pairs: [
        "AUD/CHF",
        "AUD/CAD"
      ]
    },
    {
      date: "2026-09-09",
      time: "—",
      release: "EIA STEO Setembro",
      ccy: "—",
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
      time: "07:00 BST",
      release: "GDP mensal (Jul) — ONS (T2)",
      ccy: "GBP",
      pairs: [
        "GBP/CHF"
      ]
    },
    {
      date: "2026-09-11",
      time: "10:33 GMT",
      release: "Schlegel (SNB) — declaracoes",
      ccy: "CHF",
      pairs: [
        "AUD/CHF",
        "USD/CHF",
        "GBP/CHF"
      ]
    },
    {
      date: "2026-09-14",
      time: "12:30 GMT",
      release: "T1 · CPI (Ago) — StatCan",
      ccy: "CAD",
      pairs: [
        "AUD/CAD",
        "USD/CAD"
      ]
    },
    {
      date: "2026-09-15",
      time: "07:00 BST",
      release: "T1 · Labour Market Overview — ONS",
      ccy: "GBP",
      pairs: [
        "GBP/CHF"
      ]
    },
    {
      date: "2026-09-16",
      time: "18:00 GMT",
      release: "T1 · FOMC + Summary of Economic Projections",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-09-16",
      time: "07:00 BST",
      release: "T1 · CPI (Ago) — ONS",
      ccy: "GBP",
      pairs: [
        "GBP/CHF"
      ]
    },
    {
      date: "2026-09-16",
      time: "—",
      release: "Taxas do BCE tornam-se eficazes (deposito 2.50%)",
      ccy: "EUR",
      pairs: []
    },
    {
      date: "2026-09-17",
      time: "12:00 BST",
      release: "T1 · BOE — decisao do MPC",
      ccy: "GBP",
      pairs: [
        "GBP/CHF"
      ]
    },
    {
      date: "2026-09-17",
      time: "TBC",
      release: "T1 · GDP Q2 — Stats NZ (data nao confirmada)",
      ccy: "NZD",
      pairs: []
    },
    {
      date: "2026-09-18",
      time: "—",
      release: "T1 · BOJ — decisao (sem Outlook Report)",
      ccy: "JPY",
      pairs: []
    },
    {
      date: "2026-09-18",
      time: "TBC",
      release: "T1 · CPI nacional (Ago) (data nao confirmada)",
      ccy: "JPY",
      pairs: []
    },
    {
      date: "2026-09-24",
      time: "07:30 GMT",
      release: "T1 · SNB — avaliacao de politica monetaria",
      ccy: "CHF",
      pairs: [
        "AUD/CHF",
        "USD/CHF",
        "GBP/CHF"
      ]
    },
    {
      date: "2026-09-24",
      time: "01:30 GMT",
      release: "T1 · Labour Force (Ago) — ABS",
      ccy: "AUD",
      pairs: [
        "AUD/CHF",
        "AUD/CAD"
      ]
    },
    {
      date: "2026-09-29",
      time: "—",
      release: "RBA Monetary Policy Board — decisao",
      ccy: "AUD",
      pairs: [
        "AUD/CHF",
        "AUD/CAD"
      ]
    },
    {
      date: "2026-10-29",
      time: "—",
      release: "BCE — proxima reuniao (Frankfurt)",
      ccy: "EUR",
      pairs: []
    }
  ],
  holidays: []
};

const COMMODITY_CONFIG = {
  week: 33,
  assets: [
    {
      asset: "GOLD",
      score: 0,
      verdict_label: "NEUTRAL",
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
          n: "2.55% (10 Set)",
          n1: "2.42% (3 Set)",
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
          n: "134,972 (8 Set)",
          n1: "136,771 (1 Set)",
          score: 1
        },
        {
          name: "GDX Short Int.",
          n: "37.19M (31 Ago)",
          n1: "36.94M (14 Ago)",
          score: -1
        },
        {
          name: "Sazonalidade",
          n: "Setembro",
          n1: "Setembro",
          score: 1
        }
      ],
      thesis: "Score cai de +1 (W32) para 0: um unico pilar mudou de score e e ele que explica o delta inteiro. O GDX estava parado no settlement de 14 Ago por duas semanas sem report novo, recebeu o de 31 Ago e mostrou short interest a subir de 36,94M para 37,19M acoes — mais shorts nas mineiras, nao cobertura, e o pilar passa de 0 para -1. Os outros cinco repetem: yields reais -1 pela segunda semana (2.42% para 2.55%, com o salto no dia do CPI americano, o que agrava a margem sem mudar o sinal), COT +1 pela segunda semana (Managed Money a largar 1.799 contratos para 134.972, descompressao e nao inversao), Sazonalidade +1 pelo sinal absoluto de Setembro, Excess Liquidity 0 por N igual a N-1 com dado publicado, e ETF GLD 0 por protocolo n/d. Os dois zeros nao sao a mesma coisa: o do Excess Liquidity tem dado publicado e nao revisto, o do ETF GLD e ausencia de segunda fonte. O preco convergiu — 4.432,56 a 4 Set para 4.350,36 a 11 Set, terceira semana consecutiva de queda.",
      key_event: "18 Set — INDPRO de Agosto no FRED, a primeira metade do pilar Excess Liquidity, parado em Julho; o M1SL segue a 22 Set. Antes disso, o FOMC de 16 Set com dot plot fixa a trajectoria dos yields reais, que e o pilar que mais mexeu esta semana.",
      data_gaps: [
        "ETF GLD — n/d pela segunda semana. Uma so fonte de derivacao valida (SSGA: AUM 147.692,38M / LBMA PM 4.365,45 a 11 Set, que daria ~1.052t). Barchart congelado nos valores da semana passada, stockanalysis com AUM incompativel com o numero de acoes, MacroMicro 403, SPDR AWAITING. O Manual 8.4a exige 2+ fontes. DECISIVO: intervalo real -1 a +1",
        "Excess Liquidity — NAO e n/d: M1SL e INDPRO de Julho estao publicados e sem revisao, pelo que N iguala N-1 e o pilar pontua 0 pela regra normal. INDPRO de Agosto a 18 Set, M1SL a 22 Set",
        "Corte de observacao nao uniforme: precos de 11 Set, TIPS de 10 Set, COT de 8 Set, GDX de 31 Ago, Excess Liquidity de Julho"
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
          n: "54.6% s/ report",
          n1: "54.6% (Ago)",
          score: 0
        },
        {
          name: "EIA Stocks",
          n: "-0.4M bbl (4 Set)",
          n1: "-4.5M bbl (28 Ago)",
          score: 1
        },
        {
          name: "US/SA Prod. (STEO)",
          n: "6.7M b/d (Ago)",
          n1: "5.0M b/d (Jul rev.)",
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
          n: "99.12 (11 Set)",
          n1: "99.16 (4 Set)",
          score: 1
        }
      ],
      thesis: "Score sobe de +2 (W32) para +3, o valor mais alto das ultimas sete semanas (W27-W33, em que o anterior maximo eram os +2 de W32). Tres pilares positivos — EIA, STEO e DXY —, dois a zero e nenhum negativo. O delta de um ponto vem do ISM: pontuava -1 em W32 porque o indice tinha desacelerado de 55,6% para 54,6%, e esta semana nao ha publicacao mensal nova, pelo que N iguala N-1 e a regra devolve 0. O crude ganha um ponto por deixar de ter um pilar negativo, nao por haver informacao nova — e o ISM nao e um dos tres pontos, esta a zero. O pilar STEO deixou de ser qualitativo: a edicao de Setembro, publicada a 9 Set, da shut-ins de 6,7M b/d realizados em Agosto contra 5,0M b/d em Julho, valor que a propria edicao reviu, e o N-1 usado e esse e nao os 5,5M da edicao anterior, porque N e N-1 tem de vir da mesma serie. O EIA deu draw de 0,4M bbl na semana de 4 Set: +1 pelo sinal absoluto, com a magnitude a cair de 4,5M para 0,4M sem alterar o score. O DXY cedeu de 99,16 para 99,12 — quatro centesimas, direccao corroborada na TradingEconomics mas magnitude indistinguivel de ruido, e sem este ponto o crude seria +2. O Brent fechou a 104,61, mais 9% na semana.",
      key_event: "14 Set — boletim do Saxo com a semana de 8 Set, setima oportunidade de recuperar a figura combinada WTI+Brent que falta desde 4 Ago. O COT da CFTC seguinte e a 18 Set, com posicoes de 15 Set. E a 16 Set o FOMC, que e o que move o DXY.",
      data_gaps: [
        "COT Crude — n/d pela sexta semana consecutiva. O boletim do Saxo da semana de 1 Set (pub. 7 Set) volta a nao dar figura combinada e limita-se a dizer que os fundos acrescentaram longos em WTI e Brent — leitura qualitativa que aponta para crowding, ou seja para o lado -1. DECISIVO: intervalo real +2 a +4, com o lado mais provavel a ser o +2",
        "A figura da CFTC para o ICE Light Sweet (net short de 9.687 a 8 Set) existe e nao foi usada: e serie diferente do proxy composto do Saxo, e o Manual 4 proibe misturar series",
        "Business Confidence (ISM) — NAO e n/d: o dado de Agosto esta publicado e sem revisao, N iguala N-1 e o pilar pontua 0 pela regra normal. Setembro sai a 1 Out",
        "DXY — o pilar pontua sobre quatro centesimas. Direccao corroborada em duas fontes, magnitude no limite do ruido de fecho"
      ]
    }
  ]
};
