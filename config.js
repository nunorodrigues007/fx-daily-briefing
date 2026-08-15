// ═══════════════════════════════════════════════════════════════════════════
// FX DAILY BRIEFING — CONFIG SEMANAL
// Este é o ÚNICO ficheiro a actualizar no update semanal de domingo.
// NUNCA editar index.html no processo semanal — só este ficheiro.
// ═══════════════════════════════════════════════════════════════════════════

const WEEK_CONFIG = {
  week: 34,
  period: "10 – 14 Ago 2026",
  pairs: [
    { pair:"AUD/CHF", direction:"LONG", conviction:"★★★★★", score_diff:"7.9 pts", carry:"+435bp",
      thesis:"Diferencial 9.4 (AUD) − 1.5 (CHF) = 7.9pts. AUD: RBA manteve taxa em 4.35% a 11 Ago (HOLD unânime), com Bullock a reforçar que 'further monetary tightening is very likely' — tom mais hawkish que a reunião anterior. CHF: SNB mantém-se em 0.00%, sem sinais de mudança de política. Catalisador: AUS Employment Jul, 20 Ago 11:30 AEST. Key risk: dado de emprego australiano fraco pode reduzir score AUD; qualquer sinal hawkish inesperado do SNB comprimiria o diferencial.",
      base_ccy:"AUD", quote_ccy:"CHF" },
    { pair:"USD/CHF", direction:"LONG", conviction:"★★★★", score_diff:"7.1 pts", carry:"+363bp",
      thesis:"Diferencial 8.6 (USD) − 1.5 (CHF) = 7.1pts. USD: Fed em 3.625%, CPI Jul saiu em linha (3.4% headline, 2.5% core), mercado a precificar HOLD em Set (62-64% CME). CHF: SNB em 0.00%, sem catalisadores próximos. Catalisador: Jackson Hole 27-29 Ago (discurso de Warsh, sinal para Fed 15-16 Set). Key risk: gap de apenas 0.05pts face a GBP/CHF (7.47 vs 7.42) — UK CPI quente a 19 Ago pode inverter o ranking entre os dois pares.",
      base_ccy:"USD", quote_ccy:"CHF" },
    { pair:"GBP/CHF", direction:"LONG", conviction:"★★★★", score_diff:"6.9 pts", carry:"+375bp",
      thesis:"Diferencial 8.4 (GBP) − 1.5 (CHF) = 6.9pts. GBP: BOE em 3.75%, score pendente de confirmação do UK CPI Jul. CHF: SNB em 0.00%, sem sinais de mudança. Catalisador: UK CPI Jul, 19 Ago 07:00 BST. Key risk: se CPI sair >3.0%, GBP sobe para 8.6 e GBP/CHF ultrapassa USD/CHF no ranking (troca de posição #2/#3); se <2.4%, GBP desce para 8.1 e o par perde força relativa.",
      base_ccy:"GBP", quote_ccy:"CHF" },
    { pair:"AUD/CAD", direction:"LONG", conviction:"★★★★", score_diff:"7.6 pts", carry:"+210bp",
      thesis:"Diferencial 9.4 (AUD) − 1.8 (CAD) = 7.6pts. AUD: RBA hawkish hold a 11 Ago. CAD: BOC em 2.25%, viés dovish mantido, próxima reunião 2 Set. Catalisador: AUS Employment Jul 20 Ago + BOC 2 Set. Key risk: carry mais baixo (+210bp) que AUD/CHF torna o par mais sensível a choques de risk-off, onde o CAD pode beneficiar de correlação com petróleo em caso de escalada geopolítica (Hormuz).",
      base_ccy:"AUD", quote_ccy:"CAD" },
    { pair:"USD/CAD", direction:"LONG", conviction:"★★★", score_diff:"6.8 pts", carry:"+138bp",
      thesis:"Diferencial 8.6 (USD) − 1.8 (CAD) = 6.8pts. USD: Fed hold esperado em Set, CPI Jul in-line. CAD: BOC dovish, 2.25%, reunião 2 Set. Catalisador: BOC 2 Set + Jackson Hole 27-29 Ago. Key risk: carry mais reduzido (138bp) da lista top-5 torna o par mais vulnerável a correcções técnicas e a qualquer surpresa dovish adicional do lado Fed.",
      base_ccy:"USD", quote_ccy:"CAD" }
  ],
  t1_events: [
    { date:"2026-08-11", time:"04:30 AEST", release:"RBA Rate Decision", ccy:"AUD", pairs:["AUD/CHF","AUD/CAD"] },
    { date:"2026-08-12", time:"13:30 EDT", release:"US CPI (Jul)", ccy:"USD", pairs:["USD/CHF","USD/CAD"] },
    { date:"2026-08-19", time:"07:00 BST", release:"UK CPI (Jul)", ccy:"GBP", pairs:["GBP/CHF"] },
    { date:"2026-08-20", time:"11:30 AEST", release:"Labour Force Australia (Jul)", ccy:"AUD", pairs:["AUD/CHF","AUD/CAD"] }
  ],
  t2_events: [
    { date:"2026-08-27", time:"n/d", release:"Jackson Hole Symposium (dia 1)", ccy:"USD", pairs:["USD/CHF","USD/CAD"] },
    { date:"2026-08-29", time:"n/d", release:"Jackson Hole Symposium (encerramento)", ccy:"USD", pairs:["USD/CHF","USD/CAD"] }
  ],
  holidays: []
};

const COMMODITY_CONFIG = {
  week: 29,
  assets: [
    {
      asset: "GOLD",
      score: 3,
      verdict_label: "BULLISH",
      icon: "🥇",
      color_class: "xau",
      pillars: [
        { name:"Excess Liquidity",   n:"n/a",         n1:"n/a",        score:0 },
        { name:"Real Int. Rate",     n:"2.41%",       n1:"~2.42%",     score:1 },
        { name:"ETF Flows (GLD)",    n:"1,014.72t",   n1:"1,017.6t",   score:-1 },
        { name:"COT Gold (MM)",      n:"137,662",     n1:"130,766",    score:1 },
        { name:"GDX Short Int.",     n:"38.03M",      n1:"42.43M",     score:1 },
        { name:"Sazonalidade",       n:"Agosto",      n1:"Positivo",   score:1 }
      ],
      thesis: "Score +3, máximo histórico da série. Real rate TIPS a 2.41% e short interest GDX em queda (38.03M vs 42.43M) sinalizam cobertura de posições curtas e ambiente real de yields mais favorável ao ouro. COT Gold Managed Money subiu para 137,662 contratos, primeira confirmação directa via fonte após 5 semanas sem dado fiável. Sazonalidade de Agosto historicamente positiva reforça o viés. Único contrapeso: outflow ligeiro do ETF GLD (-1).",
      key_event: "Próxima leitura FRED real yields + revisão COT Gold MM (sem 18 Ago)"
    },
    {
      asset: "CRUDE OIL",
      score: -4,
      verdict_label: "BEARISH",
      icon: "🛢️",
      color_class: "oil",
      pillars: [
        { name:"Business Conf.(ISM)", n:"55.6%",           n1:"55.6%",   score:0 },
        { name:"EIA Stocks",          n:"+17.4M bbl build", n1:"+2.5M bbl", score:-1 },
        { name:"US/SA Prod.(STEO)",   n:"5.5M b/d real",   n1:"8.3M est", score:-1 },
        { name:"COT Crude",           n:"266k",            n1:"291k",    score:-1 },
        { name:"DXY",                 n:"99.80",           n1:"~98.7",   score:-1 }
      ],
      thesis: "Score -4, novo mínimo da série. Build de stocks EIA muito acima do esperado (+17.4M vs +2.5M), shut-ins reais abaixo da estimativa STEO, COT combinado WTI+Brent em queda e DXY mais forte pressionam o framework para bearish. ATENÇÃO: divergência activa entre score fundamental e preço — Brent negoceia em $87-88 e WTI ~$82 devido ao bloqueio naval em Hormuz (ataques a navios ADNOC a 14 Ago), risco geopolítico não capturado directamente pelos 5 pilares.",
      key_event: "Evolução do bloqueio naval em Hormuz + EIA Stocks (próxima semana) + STEO revisão de Agosto"
    }
  ]
};
