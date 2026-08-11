// ═══════════════════════════════════════════════════════════════════════════
// FX DAILY BRIEFING — CONFIG SEMANAL
// Este é o ÚNICO ficheiro a actualizar no update semanal de domingo.
// NUNCA editar index.html no processo semanal — só este ficheiro.
// ═══════════════════════════════════════════════════════════════════════════

const WEEK_CONFIG = {
  week: 33,
  period: "10 – 14 Ago 2026",
  pairs: [
    { pair:"AUD/CHF", direction:"LONG", conviction:"★★★★★", score_diff:"7.8 pts", carry:"+435bp",
      thesis:"RBA 4.35% ciclo activo (TM 3.6% above target). SNB 0.00% dovish. RBA 11 Ago (HOLD 80-85%): tom do SMP e o sinal critico. Brent $78-80 (Iran-Oman deal) reduz CHF safe-haven bid.",
      base_ccy:"AUD", quote_ccy:"CHF" },
    { pair:"USD/CHF", direction:"LONG", conviction:"★★★★☆", score_diff:"7.1 pts", carry:"+363bp",
      thesis:"USD 8.6 (NFP Jul -23K miss catastrofico, Sep hike 40%). Fed 3 dissenters hawkish (Jul 29). US CPI Jul 12 Ago CRITICO: energia mais alta em Jul → headline pode subir → Sep hike volta. CHF 1.5 sem catalisador.",
      base_ccy:"USD", quote_ccy:"CHF" },
    { pair:"GBP/CHF", direction:"LONG", conviction:"★★★★☆", score_diff:"6.9 pts", carry:"+375bp",
      thesis:"BOE 6-3 hawkish (Greene+Pill+Mann). GBP 8.4. UK CPI Jul 19 Ago (W34). USD/CHF (7.47) vs GBP/CHF (7.42) — gap 0.05pts: US CPI Jul 12 Ago pode inverter #2 e #3.",
      base_ccy:"GBP", quote_ccy:"CHF" },
    { pair:"AUD/CAD", direction:"LONG", conviction:"★★★★☆", score_diff:"7.5 pts", carry:"+210bp",
      thesis:"AUD 9.3 (RBA ciclo intacto) vs CAD 1.8 (BOC neutro). Brent $78-80 retira suporte petro ao CAD — tailwind para esta tese. RBA 11 Ago e o event risk imediato.",
      base_ccy:"AUD", quote_ccy:"CAD" },
    { pair:"USD/CAD", direction:"LONG", conviction:"★★★☆☆", score_diff:"6.8 pts", carry:"+138bp",
      thesis:"USD 8.6 (NFP -23K) vs CAD 1.8 (BOC neutro). Brent $78-80 retira suporte CAD. US CPI Jul 12 Ago decide USD. NZD/CHF (5.01) vs USD/CAD (5.71) — gap 0.70pts.",
      base_ccy:"USD", quote_ccy:"CAD" }
  ],
  t1_events: [
    { date:"2026-08-11", time:"14:30 AEST", release:"RBA Rate Decision + SMP (Statement on Monetary Policy)", ccy:"AUD", pairs:["AUD/CHF","AUD/CAD"] },
    { date:"2026-08-12", time:"08:30 ET",   release:"US CPI Jul 2026 (BLS) — critico para Fed Set", ccy:"USD", pairs:["USD/CHF","USD/CAD"] }
  ],
  t2_events: [
    { date:"2026-08-13", time:"08:30 ET",  release:"US PPI Jul 2026 + Jobless Claims 9 Ago", ccy:"USD", pairs:["USD/CHF","USD/CAD"] },
    { date:"2026-08-14", time:"10:00 ET",  release:"UMich Consumer Sentiment Ago prelim", ccy:"USD", pairs:["USD/CHF","USD/CAD"] }
  ],
  holidays: []
};

// ─── COMMODITY WEEK CONFIG — actualizar cada domingo com PDF ───────────────
const COMMODITY_CONFIG = {
  week: 28,
  assets: [
    {
      asset: "GOLD",
      score: +3,
      verdict_label: "BULLISH",
      icon: "🥇",
      color_class: "xau",
      pillars: [
        { name:"Excess Liquidity",   n:"n/a",       n1:"n/a",        score:0  },
        { name:"Real Int. Rate",     n:"~2.42% est",n1:"2.47%",      score:+1 },
        { name:"ETF Flows (GLD)",    n:"n/d",       n1:"~1,017.6t",  score:0  },
        { name:"COT Gold (MM)",      n:"n/d",       n1:"119,795",    score:0  },
        { name:"GDX Short Int.",     n:"42.43M",    n1:"45.86M",     score:+1 },
        { name:"Sazonalidade",       n:"Agosto",    n1:"Positivo",   score:+1 }
      ],
      thesis: "MÁXIMO HISTÓRICO DA SÉRIE (+3 iguala W15). Três drivers: 1) GDX Short Interest RESOLVIDO após 11 semanas congelado em 44.03M — 42.43M (Jul 15) vs 45.86M (Jun 30) = -7.5% COBERTURA → +1. 2) NFP Jul -23K → Sep hike 58%→42% → real yields est. descida ~2.42% → +1. 3) Agosto sazonalidade historicamente positiva → +1. CAUTELA: TIPS 2.42% é ESTIMADO — se flat em 2.47%, score = +2 (BULLISH). GDX hoje +7.1% ($89.89).",
      key_event: "EIA STEO 11 Ago (CRÍTICO — 1º a incorporar Hormuz deal e Saudi loadings). COT Gold 4 Ago n/d — se confirmado bearish (posições longas a reduzir), score pode cair para +2. US CPI Jul 12 Ago: se headline sobe → yields reais sobem → pilar real rate inverte para -1."
    },
    {
      asset: "CRUDE OIL",
      score: 0,
      verdict_label: "NEUTRAL",
      icon: "🛢️",
      color_class: "oil",
      pillars: [
        { name:"Business Conf.(ISM)", n:"55.6%",       n1:"53.3%",    score:+1 },
        { name:"EIA Stocks",          n:"+2.5M build", n1:"-7.167M",  score:-1 },
        { name:"US/SA Prod.(STEO)",   n:"Hormuz deal", n1:"8.3M b/d", score:-1 },
        { name:"COT Crude",           n:"n/d",         n1:"n/d",      score:0  },
        { name:"DXY",                 n:"~98.7 est.",  n1:"~102.0",   score:+1 }
      ],
      thesis: "Balanço exacto: ISM Mfg Jul 55.6% (máximos Mai 2022, +2.3pp) → +1. DXY crashed pós-NFP ~102→~98.7 → +1. EIA sem. 31 Jul: +2.5M build (2.ª build consecutiva) → -1. Iran-Oman Hormuz deal (6 Ago) → produção a aumentar → -1. COT crude n/d — se descompressão confirmada: score sobe para +1. STEO 11 Ago CRÍTICO: 1.º a incorporar Hormuz deal e Saudi loadings.",
      key_event: "EIA STEO 11 Ago (CRÍTICO — incorpora Hormuz deal e Saudi 36% loadings). COT Crude 4 Ago n/d — se descompressão confirmada: crude sobe para +1 MILD BULLISH. EIA Inventários 12 Ago (W33). Brent ~$78-80 (Iran-Oman deal, -20% desde máximos de Jul)."
    }
  ]
};

