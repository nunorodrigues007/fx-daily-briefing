// ═══════════════════════════════════════════════════════════════════════════
// FX DAILY BRIEFING — CONFIG SEMANAL
// Este é o ÚNICO ficheiro a actualizar no update semanal de domingo.
// NUNCA editar index.html no processo semanal — só este ficheiro.
// ═══════════════════════════════════════════════════════════════════════════

const WEEK_CONFIG = {
  week: 35,
  period: "17 – 21 Ago 2026",
  pairs: [
    { pair:"AUD/CHF", direction:"LONG", conviction:"★★★★★", score_diff:"7.6 pts", carry:"+435bp",
      thesis:"Diferencial 9.1 (AUD) − 1.5 (CHF) = 7.6pts. AUD com score revisto em baixa (9.4→9.1) após Employment Jul fraco a 20 Ago (desemprego 4.5% vs 4.4% esp., emprego -15.800 vs +15.000 esp.), o nível mais alto pós-COVID. CHF em 0.00%, sem catalisadores. Catalisador: Jackson Hole 27-29 Ago. Key risk: novos dados fracos do mercado laboral australiano podem comprimir ainda mais o diferencial.",
      base_ccy:"AUD", quote_ccy:"CHF" },
    { pair:"USD/CHF", direction:"LONG", conviction:"★★★★★", score_diff:"7.1 pts", carry:"+363bp",
      thesis:"Diferencial 8.6 (USD) − 1.5 (CHF) = 7.1pts. Probabilidade de hold da Fed em Set subiu para 68.4% no CME FedWatch (20 Ago), acima dos 62-64% da semana anterior — maior convicção sem alteração de score. CHF sem alterações. Catalisador: discurso de estreia de Kevin Warsh como Fed Chair em Jackson Hole (28 Ago). Key risk: tom hawkish/dovish inesperado de Warsh pode mover o score USD em qualquer direcção.",
      base_ccy:"USD", quote_ccy:"CHF" },
    { pair:"GBP/CHF", direction:"LONG", conviction:"★★★★★", score_diff:"6.9 pts", carry:"+375bp",
      thesis:"Diferencial 8.4 (GBP) − 1.5 (CHF) = 6.9pts. UK CPI Jul confirmado em linha (2.9% YoY, core 2.6%), dentro do intervalo neutro definido — não activou nem o gatilho de subida (>3.0%) nem o de descida (<2.4%) do score GBP. Catalisador: BOE 17 Set. Key risk: gap apertado face a USD/CHF (7.47 vs 7.42 em score) pode inverter com qualquer surpresa de dados UK.",
      base_ccy:"GBP", quote_ccy:"CHF" },
    { pair:"AUD/CAD", direction:"LONG", conviction:"★★★★★", score_diff:"7.3 pts", carry:"+210bp",
      thesis:"Diferencial 9.1 (AUD) − 1.8 (CAD) = 7.3pts. AUD reduzido após miss de emprego (20 Ago); CAD em hold histórico, 6ª pausa consecutiva do BOC. Catalisador: BOC 2 Set. Key risk: carry mais baixo (+210bp) combinado com AUD mais fraco torna este o par mais vulnerável dos 5.",
      base_ccy:"AUD", quote_ccy:"CAD" },
    { pair:"USD/CAD", direction:"LONG", conviction:"★★★★★", score_diff:"6.8 pts", carry:"+138bp",
      thesis:"Diferencial 8.6 (USD) − 1.8 (CAD) = 6.8pts. USD estável, CAD em pausa histórica (6ª consecutiva). Catalisador: Jackson Hole 27-29 Ago + BOC 2 Set. Key risk: menor carry da lista (+138bp) torna o par mais sensível a correcções técnicas e a swings de sentimento de risco (Hormuz).",
      base_ccy:"USD", quote_ccy:"CAD" }
  ],
  t1_events: [
    { date:"2026-08-19", time:"07:00 BST", release:"UK CPI (Jul)", ccy:"GBP", pairs:["GBP/CHF"] },
    { date:"2026-08-20", time:"11:30 AEST", release:"Labour Force Australia (Jul)", ccy:"AUD", pairs:["AUD/CHF","AUD/CAD"] }
  ],
  t2_events: [
    { date:"2026-08-27", time:"n/d", release:"Jackson Hole Symposium (início)", ccy:"USD", pairs:["USD/CHF","USD/CAD"] },
    { date:"2026-08-28", time:"n/d", release:"Jackson Hole — discurso de estreia de Warsh (Fed Chair)", ccy:"USD", pairs:["USD/CHF","USD/CAD"] },
    { date:"2026-08-29", time:"n/d", release:"Jackson Hole Symposium (encerramento)", ccy:"USD", pairs:["USD/CHF","USD/CAD"] },
    { date:"2026-09-02", time:"09:45 ET", release:"Bank of Canada — Rate Decision", ccy:"CAD", pairs:["AUD/CAD","USD/CAD"] },
    { date:"2026-09-02", time:"n/d", release:"RBNZ — Monetary Policy Statement", ccy:"NZD", pairs:[] },
    { date:"2026-09-10", time:"n/d", release:"ECB — Rate Decision", ccy:"EUR", pairs:[] },
    { date:"2026-09-15", time:"n/d", release:"FOMC Meeting (Dia 1)", ccy:"USD", pairs:["USD/CHF","USD/CAD"] },
    { date:"2026-09-16", time:"n/d", release:"FOMC Meeting (Decisão)", ccy:"USD", pairs:["USD/CHF","USD/CAD"] },
    { date:"2026-09-17", time:"n/d", release:"BOE — Rate Decision", ccy:"GBP", pairs:["GBP/CHF"] }
  ],
  holidays: []
};

const COMMODITY_CONFIG = {
  week: 30,
  assets: [
    {
      asset: "GOLD",
      score: 0,
      verdict_label: "NEUTRAL",
      icon: "🥇",
      color_class: "xau",
      pillars: [
        { name:"Excess Liquidity",   n:"n/a",              n1:"n/a",       score:0 },
        { name:"Real Int. Rate",     n:"~2.47% est.",      n1:"2.41%",     score:-1 },
        { name:"ETF Flows (GLD)",    n:"n/d",              n1:"1,014.72t", score:0 },
        { name:"COT Gold (MM)",      n:"n/d (18 Ago)",     n1:"137,662",   score:0 },
        { name:"GDX Short Int.",     n:"38.03M",           n1:"38.03M",    score:0 },
        { name:"Sazonalidade",       n:"Agosto",           n1:"Positivo",  score:1 }
      ],
      thesis: "Score 0 (NEUTRAL) vs preço $4,624 (+5.56% semanal, máximo histórico da série) = maior divergência já registada. Gold subiu enquanto real yields estimados também subiram (2.41%→~2.47% est.) — a correlação inversa gold/yields de 40 anos está a quebrar, com analistas a confirmar 'regime change'. Drivers do rally: Trump 'Economic D-Day' contra o Irão, dólar em mínimo de 3 meses (DXY 98.8), e 30Y em máximo de 19 anos (5.34%) por pressão de dívida federal e AI debt issuance. COT Gold (18 Ago) ainda n/d — se crowding confirmado (gold +5.56%), score real desce para -1, total NEUTRAL ou BEARISH.",
      key_event: "COT Gold (dados 18 Ago, pendente) + Jackson Hole 27-29 Ago (Warsh) como sinal para a trajectória de real yields"
    },
    {
      asset: "CRUDE OIL",
      score: 1,
      verdict_label: "MILD BULLISH",
      icon: "🛢️",
      color_class: "oil",
      pillars: [
        { name:"Business Conf.(ISM)", n:"55.6%",              n1:"55.6%",             score:0 },
        { name:"EIA Stocks",          n:"+4.4M bbl build",    n1:"+17.4M bbl",        score:-1 },
        { name:"US/SA Prod.(STEO)",   n:"STEO Ago ↑ shut-ins",n1:"5.5M b/d (Jul)",    score:1 },
        { name:"COT Crude",           n:"n/d (18 Ago)",       n1:"291k (W29)",        score:0 },
        { name:"DXY",                 n:"98.80",              n1:"99.80",             score:1 }
      ],
      thesis: "Swing máximo da série: +5 numa semana (W29 -4 → W30 +1). Dois pilares inverteram: DXY caiu de 99.80 para 98.8 (Treasury buybacks + bloqueio Irão-Hormuz a enfraquecer o dólar) → +1; STEO de Agosto aumentou as estimativas de shut-ins face a Julho ('continued severe constraints on Hormuz') → reversão do -1 de W29 para +1. EIA Stocks: build de +4.4M (sem. 14 Ago), menor que o build de W29 (+17.4M) mas ainda build → -1. Brent $94 (+6% semanal). COT Crude ainda n/d (18 Ago) — se crowding confirmado (crude +6%), score desce para -1, total 0.",
      key_event: "EIA Inventários 26 Ago (sem. 22 Ago) + COT Report 28 Ago (dados 26 Ago) + Jackson Hole 27-29 Ago"
    }
  ]
};
