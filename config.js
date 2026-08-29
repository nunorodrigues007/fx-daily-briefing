// ═══════════════════════════════════════════════════════════════════════════
// FX DAILY BRIEFING — CONFIG SEMANAL
// Este é o ÚNICO ficheiro a actualizar no update semanal.
// NUNCA editar index.html no processo semanal — só este ficheiro.
// Gerado automaticamente por _scripts/build_config.py
// ═══════════════════════════════════════════════════════════════════════════

const WEEK_CONFIG = {
  week: 36,
  period: "31 Ago – 4 Set 2026",
  pairs: [
    {
      pair: "AUD/CHF",
      direction: "LONG",
      conviction: "★★★★★",
      score_diff: "7.8 pts",
      carry: "+435bp",
      thesis: "Diferencial 9.3 (AUD) − 1.5 (CHF) = 7.8 pontos. AUD revisto em alta após o CPI de Julho a 3.5% YoY contra consenso de 3.2% — a desinflação continua mas mais devagar do que o esperado, e o trimmed mean estável em 3.6% sustenta o 'further tightening is very likely' de Bullock. CHF em 0.00%, sem reunião até 25 Set e com sondagem Reuters a apontar manutenção durante todo o 2026. Catalisador: AUS GDP Q2, quarta 2 Set, 01:30 GMT. Key risk: o CPI suíço de 3 Set (06:30 GMT) é o único evento que pode mover o CHF nesta semana e afecta simultaneamente as três posições CHF do Top 5.",
      base_ccy: "AUD",
      quote_ccy: "CHF"
    },
    {
      pair: "USD/CHF",
      direction: "LONG",
      conviction: "★★★★★",
      score_diff: "7.7 pts",
      carry: "+363bp",
      thesis: "Diferencial 9.2 (USD) − 1.5 (CHF) = 7.7 pontos. USD com a maior revisão da semana: PCE de Julho acima do consenso em headline e core, seguido do discurso hawkish de Warsh em Jackson Hole que levou a probabilidade de hike em Setembro de 35.5% para 57.5-59% num dia. CHF sem catalisadores próprios. Catalisador: Nonfarm Payrolls, sexta 4 Set, 12:30 GMT. Key risk: um NFP fraco desfaz parte do reprice hawkish — foi exactamente um miss de emprego que cortou o AUD duas semanas antes, e o mecanismo é o mesmo.",
      base_ccy: "USD",
      quote_ccy: "CHF"
    },
    {
      pair: "GBP/CHF",
      direction: "LONG",
      conviction: "★★★★",
      score_diff: "6.9 pts",
      carry: "+375bp",
      thesis: "Diferencial 8.4 (GBP) − 1.5 (CHF) = 6.9 pontos. GBP sem dados T1 esta semana; o CPI de Julho já tinha confirmado 2.9% YoY a 19 Ago, dentro do intervalo neutro, sem activar o gatilho de subida acima de 3.0% nem o de descida abaixo de 2.4%. CHF inalterado. Catalisador: decisão do BOE a 17 Set — não há catalisador próprio dentro da semana, o que é o ponto fraco desta posição. Conviction desce de 5★ para 4★: o diferencial de 6.9 fica abaixo do mínimo de 7.0 exigido pela tabela do Passo 3, apesar de o carry de 375bp sustentar 5★ — a estrela é limitada pelo diferencial, não pelo carry. Key risk: o gap para o USD/CHF alargou de 0.05 para 0.47 com a revisão do USD; sem dados UK, o par depende do CHF e é o mais exposto a uma surpresa no CPI suíço de 3 Set.",
      base_ccy: "GBP",
      quote_ccy: "CHF"
    },
    {
      pair: "AUD/CAD",
      direction: "LONG",
      conviction: "★★★★",
      score_diff: "7.3 pts",
      carry: "+210bp",
      thesis: "Diferencial 9.3 (AUD) − 2.0 (CAD) = 7.3 pontos. AUD reforçado pelo CPI acima do consenso. CAD revisto em alta de forma contida após o GDP do Q2 a +3.3% anualizado contra 2.5% projectados pelo BOC, com o Q1 revisto de contracção para +0.3% — o cenário de recessão canadiana desapareceu, o que comprime o diferencial. Conviction desce de 5★ para 4★: o diferencial de 7.3 permitiria 5★, mas o carry de 210bp fica abaixo do mínimo de 300bp — limitado pelo carry. Catalisador: decisão do BOC, quarta 2 Set, 13:45 GMT, com conferência de imprensa às 14:30. Key risk: o mercado dá 99% de probabilidade a um hold, portanto o risco não está na taxa mas no tom — se Macklem validar a leitura de que o GDP forte afasta cortes, o CAD sobe mais e o diferencial comprime abaixo de 7.0.",
      base_ccy: "AUD",
      quote_ccy: "CAD"
    },
    {
      pair: "USD/CAD",
      direction: "LONG",
      conviction: "★★★",
      score_diff: "7.2 pts",
      carry: "+138bp",
      thesis: "Diferencial 9.2 (USD) − 2.0 (CAD) = 7.2 pontos. USD reforçado por Warsh e pelo PCE; CAD em hold com GDP surpreendentemente forte. Conviction desce de 5★ para 3★: com 138bp o carry fica abaixo do piso de 150bp das quatro estrelas, e a checklist do SOP fixa explicitamente 'USD/CAD com carry 138bp < 150bp → máximo 3★'. O diferencial de 7.2 permitiria 5★, mas o carry é um tecto, não um bónus. Catalisador: dois no mesmo dia — desemprego canadiano e NFP americano, ambos sexta 4 Set às 12:30 GMT, o que concentra todo o risco do par numa única hora. Key risk: a coincidência dos dois dados significa que uma combinação de NFP fraco com emprego canadiano forte inverte os dois lados do diferencial ao mesmo tempo.",
      base_ccy: "USD",
      quote_ccy: "CAD"
    }
  ],
  t1_events: [
    {
      date: "2026-08-26",
      time: "11:30 AEST",
      release: "CPI mensal (Jul) — ABS",
      ccy: "AUD",
      pairs: [
        "AUD/CHF",
        "AUD/CAD"
      ]
    },
    {
      date: "2026-08-26",
      time: "12:30 ET",
      release: "PCE Price Index (Jul)",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-08-28",
      time: "—",
      release: "Jackson Hole — discurso de Warsh",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-08-28",
      time: "12:30 ET",
      release: "GDP Q2 — Statistics Canada",
      ccy: "CAD",
      pairs: [
        "AUD/CAD",
        "USD/CAD"
      ]
    }
  ],
  t2_events: [
    {
      date: "2026-09-01",
      time: "09:00 GMT",
      release: "HICP flash Zona Euro (Ago)",
      ccy: "EUR",
      pairs: []
    },
    {
      date: "2026-09-01",
      time: "14:00 GMT",
      release: "ISM Manufacturing PMI (Ago)",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-09-02",
      time: "01:30 GMT",
      release: "GDP Q2 Austrália",
      ccy: "AUD",
      pairs: [
        "AUD/CHF",
        "AUD/CAD"
      ]
    },
    {
      date: "2026-09-02",
      time: "02:00 GMT",
      release: "RBNZ — decisão de taxa",
      ccy: "NZD",
      pairs: []
    },
    {
      date: "2026-09-02",
      time: "13:45 GMT",
      release: "Bank of Canada — decisão de taxa",
      ccy: "CAD",
      pairs: [
        "AUD/CAD",
        "USD/CAD"
      ]
    },
    {
      date: "2026-09-03",
      time: "06:30 GMT",
      release: "CPI suíço (Ago)",
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
      release: "Desemprego canadiano (Ago)",
      ccy: "CAD",
      pairs: [
        "AUD/CAD",
        "USD/CAD"
      ]
    },
    {
      date: "2026-09-10",
      time: "—",
      release: "ECB — decisão de taxa",
      ccy: "EUR",
      pairs: []
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
      date: "2026-09-17",
      time: "—",
      release: "BOE — decisão de taxa",
      ccy: "GBP",
      pairs: [
        "GBP/CHF"
      ]
    }
  ],
  holidays: [
    {
      date: "2026-08-31",
      country: "GBP",
      label: "Summer Bank Holiday (UK)",
      pairs: [
        "GBP/CHF"
      ]
    }
  ]
};

const COMMODITY_CONFIG = {
  week: 31,
  assets: [
    {
      asset: "GOLD",
      score: 4,
      verdict_label: "BULLISH",
      icon: "🥇",
      color_class: "xau",
      pillars: [
        {
          name: "Excess Liquidity (M1/IP)",
          n: "193.083 (Jul)",
          n1: "192.566 (Jun)",
          score: 1
        },
        {
          name: "Real Int. Rate (TIPS)",
          n: "2.34% (26 Ago)",
          n1: "2.40% (21 Ago)",
          score: 1
        },
        {
          name: "ETF Flows (GLD)",
          n: "~1,044t ⚠️ derivada",
          n1: "1,014.72t (6 Ago)",
          score: 1
        },
        {
          name: "COT Gold (MM)",
          n: "144,747 (25 Ago)",
          n1: "141,648 (18 Ago)",
          score: -1
        },
        {
          name: "GDX Short Int.",
          n: "36.94M (14 Ago)",
          n1: "38.03M (31 Jul)",
          score: 1
        },
        {
          name: "Sazonalidade",
          n: "Agosto",
          n1: "Positivo",
          score: 1
        }
      ],
      thesis: "Score sobe de 0 (W30) para +3, o melhor desde W29. Três pilares viraram a favor. O Excess Liquidity produz sinal pela primeira vez desde o arranque da série em Maio: com os dados de Julho do FRED (M1 19.886,4 publicado 25 Ago; INDPRO 102,9939 publicado 18 Ago), o rácio sobe de 192,57 para 193,08 — liquidez a crescer acima da produção industrial. Os yields reais recuaram de 2,40% (21 Ago) para 2,34% (26 Ago), ambos valores confirmados do DFII10 e de semanas consecutivas, baixando o custo de oportunidade de deter o metal. E o GDX teve report biweekly novo: short interest cai de 38,03M (31 Jul) para 36,94M (14 Ago), cobertura de 2,88%. O único travão é o COT: Managed Money sobe de 141.648 (18 Ago) para 144.747 (25 Ago) — crowding, -1. O ETF GLD deixa de estar n/d: com o MacroMicro a devolver 403 e o SPDR bloqueado, o valor foi derivado do AUM publicado a dividir pelo preço LBMA, em duas fontes independentes — SSGA dá 153,70 mil milhões sobre 4.568,95 (27 Ago) = 1.046,4t, e o Barchart dá 149,22 mil milhões sobre 4.454,08 (28 Ago) = 1.042,0t. Contra os 1.014,72t confirmados de 6 Ago, ambas apontam acumulação de perto de 3%. O valor está marcado como derivado: não é directamente comparável em NÍVEL com a série do MacroMicro, porque o NAV desconta despesas acumuladas — mas esse desvio é inferior a 0,5% e a variação observada é de 2,9%, seis vezes maior, pelo que a DIRECÇÃO é segura e é ela que o scoring N vs N-1 usa (Manual §8.4a). Divergência a registar: o framework virou bullish precisamente na semana em que o preço corrigiu 3,7%, de 4.624 para 4.454 dólares, travado pelo discurso hawkish de Warsh. O score é de fundamentais e não se altera por causa do preço (Manual §5).",
      key_event: "1 Set — ISM Manufacturing (Agosto): primeira leitura nova do pilar desde Julho"
    },
    {
      asset: "CRUDE OIL",
      score: -2,
      verdict_label: "MILD BEARISH",
      icon: "🛢️",
      color_class: "oil",
      pillars: [
        {
          name: "Business Conf. (ISM)",
          n: "55.6% (Jul, s/ nova leitura)",
          n1: "55.6% (Jul)",
          score: 0
        },
        {
          name: "EIA Stocks",
          n: "+0.1M bbl (sem. 21 Ago)",
          n1: "+4.4M bbl (sem. 14 Ago)",
          score: -1
        },
        {
          name: "US/SA Prod. (STEO)",
          n: "sem novo STEO",
          n1: "5.5M b/d (Jul)",
          score: 0
        },
        {
          name: "COT Crude (WTI+Brent)",
          n: "n/d",
          n1: "266k (sem. 4 Ago)",
          score: 0
        },
        {
          name: "US Dollar (DXY)",
          n: "99.65 (28 Ago)",
          n1: "98.80 (21 Ago)",
          score: -1
        }
      ],
      thesis: "Score cai de +1 (W30) para -2, uma inversão de 3 pontos. Os dois pilares que tinham sustentado o W30 desapareceram ou inverteram. O DXY reverteu: o dólar subiu de 98,80 (21 Ago, mínimo de 3 meses) para 99,65 no fecho de sexta 28 Ago, empurrado pelo discurso de Warsh em Jackson Hole — dólar mais forte pressiona o crude, -1. O STEO não teve publicação nova (é mensal, 2.ª terça; o último é de 11 Ago e o próximo sai a 8 Set), pelo que o +1 qualitativo de W30 cai para 0. O EIA registou nova acumulação, ainda que marginal: +0,1M bbl na semana de 21 Ago, para um total de 428,9M — build é build, e a regra é o sinal absoluto, não a magnitude, -1. O ISM mantém-se em 55,6% de Julho: a subida face aos 53,3% de Junho já foi pontuada quando o dado saiu a 1 de Agosto, e entre publicações mensais o pilar vale 0 por regra (Manual §4). A leitura de Agosto sai a 1 Set. O COT fica n/d: o proxy Saxo (combinado WTI+Brent) não publica figura comparável desde a semana de 4 Ago, e a série WTI-only da CFTC foi recusada para não misturar séries. Ao contrário do gold, aqui framework e preço convergem: Brent caiu para 88,29 dólares, mais de 5% na semana, com a percepção de risco geopolítico a aliviar. NOTA DE SENSIBILIDADE: o COT em falta não é neutro. Com o score em -2, o intervalo real é de -3 a -1 — se o posicionamento vier em crowding, o crude passa a BEARISH e muda de semáforo. Tentei resolver pelo CFTC directo, mas os dois endpoints devolveram magnitudes incompatíveis para o WTI-PHYSICAL (195.538 contratos longos no report de 18 Ago via petroleum_lf.htm contra 323.243 no de 25 Ago via deanymesf.htm), o que indica formatos diferentes. Comparar N e N-1 vindos de endpoints com bases distintas é precisamente o erro que o Manual §4 proíbe, e por isso o pilar fica em 0 em vez de receber um número forçado.",
      key_event: "4 Set — COT Report (dados 1 Set): resolve o pilar que hoje mantém o crude entre -3 e -1"
    }
  ]
};
