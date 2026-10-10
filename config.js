// ═══════════════════════════════════════════════════════════════════════════
// FX DAILY BRIEFING — CONFIG SEMANAL
// Este é o ÚNICO ficheiro a actualizar no update semanal.
// NUNCA editar index.html no processo semanal — só este ficheiro.
// Gerado automaticamente por _scripts/build_config.py
// ═══════════════════════════════════════════════════════════════════════════

const WEEK_CONFIG = {
  week: 42,
  period: "12 – 16 Out 2026",
  pairs: [
    {
      pair: "AUD/CHF",
      direction: "LONG",
      conviction: "★★★★★",
      score_diff: "8.0 pts",
      carry: "+460bp",
      thesis: "Diferencial 9.9 (AUD) - 1.9 (CHF) = 8.0 pontos, inalterado, porque nem o AUD nem o CHF mexeram esta semana. Moeda base: o RBA esta em 4,60% depois da subida unanime de 29 Set, nao comunicou nada entre 5 e 9 Out — silencio confirmado no indice de discursos do proprio banco — e tem o Labour Force de Setembro a 15 Out. Moeda cotada: o SNB esta em 0,00%, manteve em Setembro, e o seu vice-presidente disse a 8 Out que a pressao inflacionista se acentuou ligeiramente desde Junho mas que o aumento vem de produtos petroliferos; a proxima decisao e a 10 Dez. Carry +460bp, o maximo do quadro, que e o denominador do Carry Rank desta matriz. Catalisador semanal: Labour Force da Australia, 15 Out, 11:30 AEDT = 00:30 GMT, DENTRO do periodo rotulado. Key risk: e exactamente esse catalisador. Um Labour Force fraco retira ao AUD o eixo 2 que a precificacao de 27,9% para 3 Nov ainda lhe da, e este par e o que tem mais diferencial a perder. E ha uma questao de conviction a declarar: as cinco estrelas saem da tabela do Passo 3 por diferencial 8.0 e carry 460bp, mas o SOP lista 'dados Tier 1 iminentes que podem alterar o score' entre os factores que BAIXAM a conviction, sem regra mecanica — e ha um Tier 1 da perna base dentro do periodo.",
      base_ccy: "AUD",
      quote_ccy: "CHF"
    },
    {
      pair: "USD/CHF",
      direction: "LONG",
      conviction: "★★★★★",
      score_diff: "7.5 pts",
      carry: "+388bp",
      thesis: "Diferencial 9.4 (USD) - 1.9 (CHF) = 7.5 pontos, inalterado. Moeda base: o Fed esta em 3,875% e as minutas de 15-16 Set, publicadas 7 Out, mostram subida unanime, risco de inflacao em alta e a maioria dos participantes a considerar apropriada outra subida ate ao fim do ano; mas tambem registam varios participantes a ver a taxa actual como pouco ou nada restritiva. Moeda cotada: SNB em 0,00%, inflacao suica descrita pelo proprio banco como baixa em comparacao internacional e o aumento atribuido a petroliferos. Carry +388bp, inalterado, o segundo maior do quadro. Catalisador semanal: CPI dos EUA de Setembro, 14 Out, 08:30 ET = 12:30 GMT, DENTRO do periodo rotulado. Key risk: um CPI abaixo do consenso junta-se ao NFP de 2 Out e deixa o eixo 1 sozinho a sustentar um 9.4 que esta cerca de 68pb acima do longo prazo dos proprios dots — a banda 9-10 pede mais de 150pb. Vale aqui a mesma declaracao de conviction do #1: cinco estrelas pela tabela do Passo 3, com um Tier 1 da perna base dentro do periodo rotulado.",
      base_ccy: "USD",
      quote_ccy: "CHF"
    },
    {
      pair: "AUD/CAD",
      direction: "LONG",
      conviction: "★★★★",
      score_diff: "8.5 pts",
      carry: "+235bp",
      thesis: "Diferencial 9.9 (AUD) - 1.4 (CAD) = 8.5 pontos, de 8.0 no W41, e e agora o MAIS LARGO do quadro, acima dos 8.0 do AUD/CHF e do USD/CAD. O par sobe de #4 para #3 e passa o GBP/CHF, e a razao e aritmetica e esta toda do lado do CAD: a descida de 0.5 acrescentou 0,70 vezes 0,5 = 0,35 ao Score Final, de 7.13 para 7.48, contra os 7.21 do GBP/CHF, que nao mexeu. Moeda base: RBA em 4,60%, sem comunicacao na semana, Labour Force a 15 Out. Moeda cotada: o Banco do Canada esta em 2,25% e o emprego de Setembro caiu 68 mil postos contra um consenso de criacao, segunda queda mensal consecutiva, com a subida de 28 Out a cair de cerca de 40% para cerca de 27% de probabilidade precada. Carry +235bp, inalterado, porque nenhuma das duas taxas mexeu. Catalisador semanal: Labour Force da Australia, 15 Out, 00:30 GMT. Key risk: o CPI canadiano de 19 Out, fora do periodo rotulado mas na semana seguinte. Com inflacao perto de 3% e o Brent acima de 104 dolares, um CPI em alta devolve ao CAD o eixo 2 que o emprego lhe tirou, e este par e o que mais diferencial tem a perder nesse cenario. As quatro estrelas sao o tecto que o carry impoe: o diferencial de 8.5 pediria cinco, mas a linha de cinco estrelas exige carry de 300bp e este par tem 235bp.",
      base_ccy: "AUD",
      quote_ccy: "CAD"
    },
    {
      pair: "GBP/CHF",
      direction: "LONG",
      conviction: "★★★★",
      score_diff: "6.8 pts",
      carry: "+375bp",
      thesis: "Diferencial 8.7 (GBP) - 1.9 (CHF) = 6.8 pontos, inalterado, e Score Final 7.21, tambem inalterado. O par desce de #3 para #4 sem que nada do seu lado tenha mudado: foi o AUD/CAD que o passou, por efeito da descida do CAD. Moeda base: o BOE esta em 3,75% e, dos cinco membros do MPC a quem o calendario atribui intervencoes na semana, DOIS foram lidos e os dois apontam para cima: Pill, a 8 Out, disse que ha pressoes inflacionistas e que a politica tem de estar resolutamente centrada nelas, e Bailey reafirmou o compromisso com o objectivo no mesmo dia; o conteudo dos outros tres nao foi lido. A subida de 5 Nov esta precada entre 81% e 88,8%, consoante a leitura. Moeda cotada: SNB em 0,00%, com a proxima decisao a 10 Dez e uma subida nessa reuniao precada em 25,9%. Carry +375bp, inalterado, o terceiro maior do quadro. Catalisador semanal: GDP mensal do Reino Unido de Agosto, 15 Out, 07:00 BST = 06:00 GMT, que e T2 pela convencao da serie; o T1 do GBP e o labour market de 20 Out, ja fora do periodo. Key risk: a subida de 5 Nov esta precada acima de 80% e o score ja a reflecte; o risco assimetrico e de desapontamento no labour market de 20 Out, que daria razao ao lado cauteloso do MPC.",
      base_ccy: "GBP",
      quote_ccy: "CHF"
    },
    {
      pair: "USD/CAD",
      direction: "LONG",
      conviction: "★★★★",
      score_diff: "8.0 pts",
      carry: "+162bp",
      thesis: "Diferencial 9.4 (USD) - 1.4 (CAD) = 8.0 pontos, de 7.5 no W41, e Score Final 6.66, de 6.31 — outra vez exactamente mais 0,35, e outra vez todo do lado do CAD. Moeda base: Fed em 3,875%, minutas hawkish a 7 Out, CPI de Setembro a 14 Out. Moeda cotada: Banco do Canada em 2,25%, emprego de Setembro a cair 68 mil postos, eixo 2 a enfraquecer de cerca de 40% para cerca de 27%. Carry +162bp, inalterado, o mais baixo do Top 5 e apenas 12bp acima do minimo de 150bp que a linha de quatro estrelas exige. Catalisador semanal: CPI dos EUA, 14 Out, 12:30 GMT. Key risk: este par tem Tier 1 nas DUAS pernas em seis dias — o CPI americano a 14 Out e o CPI canadiano a 19 Out — e os dois cenarios adversos empilham-se, um CPI americano fraco com um CPI canadiano forte. E o par do Top 5 com mais risco de evento por unidade de carry.",
      base_ccy: "USD",
      quote_ccy: "CAD"
    }
  ],
  t1_events: [
    {
      date: "2026-10-09",
      time: "12:30 GMT",
      release: "Labour Force Survey (Set) — StatCan",
      ccy: "CAD",
      pairs: [
        "AUD/CAD",
        "USD/CAD"
      ]
    }
  ],
  t2_events: [
    {
      date: "2026-10-05",
      time: "07:45 GMT",
      release: "Nagel (Bundesbank) — intervencao",
      ccy: "EUR",
      pairs: []
    },
    {
      date: "2026-10-05",
      time: "TBC",
      release: "Uchida (BOJ, vice-governador) — ECONDAT 2026",
      ccy: "JPY",
      pairs: []
    },
    {
      date: "2026-10-05",
      time: "14:00 GMT",
      release: "ISM Services (Set)",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-06",
      time: "06:35 GMT",
      release: "Ueda (BOJ) — National Securities Convention",
      ccy: "JPY",
      pairs: []
    },
    {
      date: "2026-10-06",
      time: "07:00 GMT",
      release: "Taxa de desemprego (Set)",
      ccy: "CHF",
      pairs: [
        "AUD/CHF",
        "USD/CHF",
        "GBP/CHF"
      ]
    },
    {
      date: "2026-10-06",
      time: "TBC",
      release: "Mann (BOE, MPC) — intervencao",
      ccy: "GBP",
      pairs: [
        "GBP/CHF"
      ]
    },
    {
      date: "2026-10-06",
      time: "14:45 GMT",
      release: "Bowman (Fed) — intervencao",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-06",
      time: "17:15 GMT",
      release: "Schmid (Fed) — intervencao",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-06",
      time: "TBC",
      release: "Martin (SNB) — reservas abundantes",
      ccy: "CHF",
      pairs: [
        "AUD/CHF",
        "USD/CHF",
        "GBP/CHF"
      ]
    },
    {
      date: "2026-10-06",
      time: "23:30 GMT",
      release: "Salarios nominais (Ago) — 7 Out 08:30 JST",
      ccy: "JPY",
      pairs: []
    },
    {
      date: "2026-10-07",
      time: "TBC",
      release: "Martin (SNB) — quadro de politica do banco",
      ccy: "CHF",
      pairs: [
        "AUD/CHF",
        "USD/CHF",
        "GBP/CHF"
      ]
    },
    {
      date: "2026-10-07",
      time: "14:30 GMT",
      release: "EIA WPSR (semana de 2 Out)",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-07",
      time: "18:00 GMT",
      release: "Minutas do FOMC de 15-16 Set",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-08",
      time: "08:05 GMT",
      release: "Martin (SNB) — Foire du Valais, Martigny",
      ccy: "CHF",
      pairs: [
        "AUD/CHF",
        "USD/CHF",
        "GBP/CHF"
      ]
    },
    {
      date: "2026-10-08",
      time: "09:00 GMT",
      release: "Pill (BOE, economista-chefe)",
      ccy: "GBP",
      pairs: [
        "GBP/CHF"
      ]
    },
    {
      date: "2026-10-08",
      time: "09:15 GMT",
      release: "Greene (BOE, MPC)",
      ccy: "GBP",
      pairs: [
        "GBP/CHF"
      ]
    },
    {
      date: "2026-10-08",
      time: "11:30 GMT",
      release: "Contas da reuniao do BCE de 9-10 Set",
      ccy: "EUR",
      pairs: []
    },
    {
      date: "2026-10-08",
      time: "12:15 GMT",
      release: "Bailey (BOE, governador)",
      ccy: "GBP",
      pairs: [
        "GBP/CHF"
      ]
    },
    {
      date: "2026-10-08",
      time: "12:30 GMT",
      release: "Jobless claims (semana de 2 Out)",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-08",
      time: "13:00 GMT",
      release: "Lombardelli (BOE, vice-governadora)",
      ccy: "GBP",
      pairs: [
        "GBP/CHF"
      ]
    },
    {
      date: "2026-10-08",
      time: "17:40 GMT",
      release: "Musalem (Fed)",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-08",
      time: "TBC",
      release: "Waller (Fed)",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-09",
      time: "14:00 GMT",
      release: "UoM preliminar (Out)",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-09",
      time: "20:00 GMT",
      release: "Collins (Fed)",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-12",
      time: "—",
      release: "Sports Day no Japao — bolsa de Toquio fechada",
      ccy: "JPY",
      pairs: []
    },
    {
      date: "2026-10-12",
      time: "—",
      release: "Thanksgiving no Canada — mercado fechado",
      ccy: "CAD",
      pairs: [
        "AUD/CAD",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-12",
      time: "—",
      release: "Columbus Day nos EUA",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-13",
      time: "00:30 GMT",
      release: "Minutas da reuniao do RBA de 29 Set",
      ccy: "AUD",
      pairs: [
        "AUD/CHF",
        "AUD/CAD"
      ]
    },
    {
      date: "2026-10-14",
      time: "12:30 GMT",
      release: "CPI dos EUA (Set)",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-14",
      time: "TBC",
      release: "Fireside chat de Macklem (BOC) — IIF, Bangkok",
      ccy: "CAD",
      pairs: [
        "AUD/CAD",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-14",
      time: "14:30 GMT",
      release: "EIA WPSR (semana de 9 Out)",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-15",
      time: "00:30 GMT",
      release: "Labour Force da Australia (Set)",
      ccy: "AUD",
      pairs: [
        "AUD/CHF",
        "AUD/CAD"
      ]
    },
    {
      date: "2026-10-15",
      time: "06:00 GMT",
      release: "GDP mensal do Reino Unido (Ago)",
      ccy: "GBP",
      pairs: [
        "GBP/CHF"
      ]
    },
    {
      date: "2026-10-15",
      time: "12:30 GMT",
      release: "PPI dos EUA (Set)",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-15",
      time: "TBC",
      release: "Painel de Carolyn Rogers (BOC, vice-governadora senior) — Atlantic Council, Bangkok",
      ccy: "CAD",
      pairs: [
        "AUD/CAD",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-15",
      time: "TBC",
      release: "Koeda (BOJ, Conselho) — Kumamoto",
      ccy: "JPY",
      pairs: []
    },
    {
      date: "2026-10-15",
      time: "21:45 GMT",
      release: "Indices de precos seleccionados e cartoes (Set) — 16 Out 10:45 NZDT",
      ccy: "NZD",
      pairs: []
    },
    {
      date: "2026-10-16",
      time: "TBC",
      release: "Painel de Macklem (BOC) — FMI, Bangkok",
      ccy: "CAD",
      pairs: [
        "AUD/CAD",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-16",
      time: "TBC",
      release: "Fireside chat de Alexopoulos (BOC, vice-governadora externa) — Halifax",
      ccy: "CAD",
      pairs: [
        "AUD/CAD",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-16",
      time: "12:30 GMT",
      release: "Precos de importacao e exportacao (Set)",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-16",
      time: "TBC",
      release: "FRED INDPRO (Set)",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    }
  ],
  holidays: [
    "FERIADOS: a segunda-feira 12 Out 2026 e a SEGUNDA SEGUNDA-FEIRA DE OUTUBRO e tem feriado em TRES dos oito mercados do G8, no dia de abertura do periodo rotulado. JAPAO — Sports Day: o calendario de feriados da propria bolsa de Toquio da 'Oct. 12 (Mon.) Sports Day' e o mercado esta FECHADO. CANADA — Thanksgiving: o calendario de feriados do proprio Banco do Canada da 'October 12, 2026 · Thanksgiving Day · National holiday' e o mercado esta FECHADO. ESTADOS UNIDOS — Columbus Day: o calendario do proprio BLS marca o feriado a 12 Out; o mercado de obrigacoes fecha e o de accoes abre. Nos outros cinco mercados do G8 nao ha feriado entre 12 e 16 Out 2026."
  ]
};

const COMMODITY_CONFIG = {
  week: 37,
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
          n: "193,960 (Ago)",
          n1: "193,960 (Ago)",
          score: 0
        },
        {
          name: "Real Int. Rate (TIPS)",
          n: "2,87% (8 Out)",
          n1: "2,88% (1 Out)",
          score: 1
        },
        {
          name: "ETF Flows (GLD)",
          n: "1.055,41t (8 Out)",
          n1: "1.056,55t (1 Out)",
          score: -1
        },
        {
          name: "COT Gold (MM)",
          n: "110.987 (6 Out)",
          n1: "120.318 (29 Set)",
          score: 1
        },
        {
          name: "GDX Short Int.",
          n: "36,57M (30 Set)",
          n1: "35,51M (15 Set)",
          score: -1
        },
        {
          name: "Sazonalidade",
          n: "Outubro",
          n1: "Outubro",
          score: 1
        }
      ],
      thesis: "Score total declarado +1 (MILD BULLISH), de +2 no W36. Delta de -1, e esta semana a decomposicao muda de natureza: nas duas edicoes anteriores o delta vinha sobretudo da PRESENCA ou AUSENCIA de publicacao; nesta vem de tres pilares que receberam dado genuinamente novo e se moveram em sentidos opostos. OS PILARES QUE MUDARAM. Real Int. Rate de -1 para +1: o DFII10 fechou a 2,87% a 8 Out contra 2,88% a 1 Out, lido do CSV primario do FRED. A descida e de UM ponto base e isso tem de ser dito, porque e o minimo que a regra binaria do Manual reconhece — e porque dentro da semana o yield real subiu a 2,95% a 5 Out antes de voltar a cair. O corte de observacao e quinta 8 Out e nao sexta, porque o valor de 9 Out so sai com um dia util de lag; N e N-1 sao as duas quintas-feiras homologas. ETF Flows de +1 para -1: a tonelagem do GLD caiu de 1.056,55t a 1 Out para 1.055,41t a 8 Out, uma liquidacao de 1,14t, lida da coluna 'Tonnes of Gold' do arquivo historico do proprio emitente. Tambem aqui o corte e quinta, porque o arquivo ainda nao tem linha de 9 Out, e tambem aqui N e N-1 sao quintas-feiras homologas. GDX Short Int. de 0 para -1: o settlement de 30 Set foi publicado e da 36.574.720 accoes contra 35.514.478 a 15 Set, um aumento de 3,0% e 12,2% do float. Aumento de shorts e o lado bearish do pilar. A tabela foi lida linha a linha do HTML e o proprio quadro traz a variacao de +3,0%, que reconcilia com os dois valores. A fonte alternativa consultada continua no settlement de 15 Set, pelo que confirma o N-1 e os cinco settlements anteriores mas NAO confirma o N de forma independente (!). OS PILARES QUE NAO MUDARAM, e porque. COT Gold mantem +1: managed money net long de 110.987 contratos no report da CFTC de 6 Out, uma queda de 9.331 contratos sobre os 120.318 de 29 Set, e a aritmetica fecha na propria fonte. E a QUINTA semana consecutiva de descompressao e a maior das cinco: W33 -1.799, W34 -1.856, W35 -5.727, W36 -7.071, W37 -9.331. Open interest em 396.109, -10.347 na semana. Excess Liquidity mantem 0 por AUSENCIA DE PUBLICACAO NOVA, verificada activamente na fonte: Agosto continua a ser o ultimo mes do M1SL e do INDPRO e os dois valores estao identicos aos gravados, pelo que nao houve revisao de vintage; o INDPRO de Setembro sai a 16 Out e o M1SL a 27 Out. Sazonalidade mantem +1: Outubro, mes historicamente positivo, e nao houve transicao de mes desde a edicao anterior. SENSIBILIDADE. Nenhum dos seis pilares esta n/d, pela segunda semana consecutiva, pelo que o intervalo real do gold e exactamente +1 e nao existe semaforo alternativo. A unica fragilidade declarada e de leitura e nao de disponibilidade: se o settlement de 30 Set do GDX nao estivesse publicado, aquele pilar seria 0 e o gold seria +2 — mas esta publicado e foi lido na tabela. DIVERGENCIA COM O PRECO, pela terceira semana consecutiva e agora por outro mecanismo. O framework desce para +1 MILD BULLISH e o metal SUBIU 1,30% na semana, de 4.140,19 para 4.193,87 USD/oz. A composicao dos pontos mudou e e preciso conta-los bem: ficam TRES positivos — Real Int. Rate, que virou de -1 para +1, COT Gold, na quinta semana de descompressao, e Sazonalidade — contra DOIS negativos, o fluxo do ETF e os shorts do GDX. E a atribuicao do premio tem de ser dita com o sinal certo: o metal subiu 1,30% CONTRA um dolar na quarta subida semanal consecutiva, que e vento contra o ouro, e o unico canal que virou claramente a seu favor — o yield real a ceder um ponto base — e um canal que este engine CAPTA e pontua. Ou seja, o premio que falta explicar nao esta em nenhum dos seis pilares, e nao e o dolar: o engine do gold nao tem pilar de expectativas de inflacao nem de premio de risco geopolitico, e esta foi a semana em que as expectativas de inflacao a um ano nos EUA subiram de 4,6% para 4,7% e em que as contas do BCE descreveram o choque energetico como mais persistente do que se supunha. O score nao se altera por causa do preco: a divergencia e documentada, nao resolvida.",
      key_event: "FRED INDPRO de Setembro a 16 Out, metade do pilar Excess Liquidity, que esta a 0 por nao haver publicacao nova — a outra metade, o M1SL, so sai a 27 Out. E o settlement do GDX de 15 Out, esperado ~22 Out pela regra dos cinco dias uteis e ~26-27 Out pelo lag observado nesta serie.",
      data_gaps: [
        "Nenhum pilar a n/d no gold, pela segunda semana consecutiva. Intervalo de sensibilidade exactamente +1, sem semaforo alternativo.",
        "GDX: o settlement de 30 Set foi lido por parse do HTML da tabela da fonte primaria, com corroboracao interna na propria coluna de variacao de +3,0%. A fonte alternativa consultada por outro meio continua no settlement de 15 Set — confirma o N-1 e os cinco anteriores, mas NAO confirma o N de forma independente, pelo que a verificacao em fonte alternativa esta cumprida apenas em parte.",
        "RESSALVA DE HOMOGENEIDADE que se mantem no pilar ETF GLD: o nivel nao e comparavel com os valores derivados das semanas W31-W32 nem com a serie MacroMicro. Esta semana, ao contrario da anterior, N e N-1 sao o mesmo dia da semana (quinta 8 Out e quinta 1 Out).",
        "DIVERGENCIA COM O PRECO: framework +1 MILD BULLISH e o metal subiu 1,30% na semana, de 4.140,19 para 4.193,87 USD/oz. Tres pilares positivos e dois negativos; o metal subiu contra um dolar na quarta subida semanal consecutiva, e o premio que falta explicar nao esta em nenhum dos seis pilares."
      ]
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
          n: "54,5% (Set)",
          n1: "54,5% (Set)",
          score: 0
        },
        {
          name: "EIA Stocks",
          n: "-3,2M bbl (2 Out)",
          n1: "+0,9M bbl (25 Set)",
          score: 1
        },
        {
          name: "US/SA Prod. (STEO)",
          n: "4,8M b/d (Set)",
          n1: "5,8M b/d (Ago)",
          score: -1
        },
        {
          name: "COT Crude (WTI+Brent)",
          n: "335k (29 Set)",
          n1: "266k (4 Ago)",
          score: -1
        },
        {
          name: "US Dollar (DXY)",
          n: "102,21 (9 Out)",
          n1: "101,93 (2 Out)",
          score: -1
        }
      ],
      thesis: "Score total declarado -2 (MILD BEARISH), de -3 no W36. Delta de +1, e o crude sai de BEARISH. Mas o ponto NAO vem de um pilar isolado: vem de quatro pilares a mexerem, dois para cada lado, e o saldo depende de uma convencao do Manual que esta por fixar. O PILAR QUE DECIDE. O COT Crude tem numero outra vez, depois de nove semanas consecutivas de n/d: o boletim COT do Saxo Bank da semana de 29 Set, publicado 5 Out, diz em texto literal que o net long combinado de WTI e Brent foi cortado em 31.000 contratos para 335.000, um minimo de cinco semanas. O N e portanto 335k, de terca 29 Set. O N-1 e que esta em causa. A Regra 3 do Manual manda que, onde um pilar esteja n/d, o N-1 seja o ultimo valor CONFIRMADO, que e 266k de 4 Ago; 335 acima de 266 e subida de net longs, ou seja crowding, ou seja -1, e e esse o valor que este relatorio declara, porque e o que a regra escrita manda. Pela convencao alternativa — o valor da propria serie na semana anterior, que o proprio boletim implica em 366k ao declarar o corte de 31.000 — 335 abaixo de 366 e descompressao, ou seja +1, e o crude total passaria de -2 MILD BEARISH a 0 NEUTRAL. As duas leituras do mesmo pilar dao sinais OPOSTOS e a diferenca vale um semaforo (!). A questao e a mesma que ficou aberta quando a serie de tonelagem do GLD foi reposta e nao esta fixada no Manual; sobe para decisao. OS OUTROS PILARES QUE MUDARAM. EIA Stocks de -1 para +1: a Table 1 do balanco oficial da semana terminada a 2 Out da existencias comerciais, excluindo a SPR, de 424,1M contra 427,3M, diferenca de -3,2M, ou seja um DRAW depois de dois builds consecutivos. A regra do Manual e o sinal absoluto: draw da +1. A aritmetica fecha com o N-1 gravado, 427,3 - 3,2 = 424,1. US/SA Prod. de 0 para -1: saiu a edicao de Outubro do STEO, a 6 Out, e da shut-ins de 4,8M b/d em Setembro. Esta edicao REVE O PASSADO: diz 'down from 5.8 million b/d in August', quando a edicao de Setembro dava 6,7M para Agosto. N e N-1 saem os dois da edicao corrente, como a regra de vintage manda, pelo que o N-1 passa a ser 5,8 e nao 6,7. A descida dos shut-ins e producao a recuperar, ou seja o lado bearish. O sinal seria o mesmo com qualquer dos dois N-1, mas o valor gravado muda e a revisao tem de ser dita. Business Conf. de -1 para 0: nao houve publicacao nova do ISM — Setembro continua a ser o ultimo mes e o dado de Outubro sai a 2 Nov, primeiro dia util do mes. N igual a N-1 da 0 e NAO e n/d. O PILAR QUE NAO MUDOU. DXY mantem -1: fechou a 102,21 a 9 Out contra 101,93 a 2 Out, uma subida de 0,27% e a QUARTA semana consecutiva de subida do dolar. Tres fontes concordantes com dispersao de 0,10, e nunca estimado, como o Manual exige. SENSIBILIDADE. Nenhum dos cinco pilares esta n/d, pelo que nao existe intervalo de sensibilidade por dado em falta: o intervalo real do crude por essa via e exactamente -2. O intervalo que existe e de METODO, nao de dados, e esta no pilar do COT: -2 pela regra escrita, 0 pela convencao alternativa, com inversao de semaforo de MILD BEARISH para NEUTRAL no extremo. DIVERGENCIA COM O PRECO, de volta depois de uma semana alinhado, e dupla. O framework sobe para -2 MILD BEARISH e o Brent SUBIU 1,68%, de 102,70 para 104,43 USD/bbl. Dupla porque nem a melhoria do framework nem a subida do preco vem do mesmo canal: o framework melhora por um draw de 3,2M bbl nas existencias comerciais americanas, e o preco foi feito pela promessa de nao atacar o Irao antes das intercalares e pela licenca temporaria para diesel russo, cerca de 22,5 milhoes de barris — e nenhum desses canais entra em pilar algum. Ao mesmo tempo a propria EIA, na edicao que baixa os shut-ins para 4,8M b/d, SOBE a previsao do Brent para 105 dolares no 4T26, 14 acima da edicao anterior: a autoridade que alimenta o pilar bearish projecta preco mais alto. O score nao se altera por causa do preco.",
      key_event: "Boletim COT do Saxo Bank com a semana de 6 Out, esperado ~12 Out: decide se a figura combinada WTI+Brent fica, e da o primeiro N-1 limpo deste pilar desde Agosto. E o EIA WPSR de 14 Out, com a semana de 9 Out, depois do draw de 3,2M bbl.",
      data_gaps: [
        "Nenhum pilar a n/d no crude, pela primeira vez desde que o COT Crude entrou em n/d — nove semanas. O intervalo de sensibilidade por dado em falta e exactamente -2.",
        "INTERVALO DE METODO, NAO DE DADOS, no pilar COT Crude, e vale um semaforo: N = 335k (29 Set). Pela Regra 3 do Manual o N-1 e o ultimo confirmado, 266k de 4 Ago, e o pilar da -1 por crowding — foi o declarado. Pela convencao alternativa, o valor da propria serie na semana anterior (366k, implicito no corte de 31.000 que o boletim declara), o pilar daria +1 e o crude total seria 0 NEUTRAL. Ha uma semana, quando a serie do GLD foi reposta, o criterio usado foi o da propria serie — ou seja o contrario deste. Seguiu-se a regra escrita e a questao sobe para decisao.",
        "REVISAO DE VINTAGE no pilar STEO, declarada e aplicada: a edicao de Outubro reve os shut-ins de Agosto de 6,7M para 5,8M b/d, e N e N-1 saem os dois da edicao corrente. O sinal seria -1 com qualquer dos dois N-1; o valor gravado e que muda.",
        "DIVERGENCIA COM O PRECO: framework -2 MILD BEARISH e o Brent subiu 1,68% na semana, de 102,70 para 104,43 USD/bbl. O framework melhora por um draw de 3,2M bbl nas existencias americanas e o preco foi feito pela promessa de nao atacar o Irao antes das intercalares e pela licenca temporaria para diesel russo — canais que nao entram em pilar algum. A propria EIA, na mesma edicao que baixa os shut-ins, sobe a previsao do Brent para 105 dolares no 4T26."
      ]
    }
  ]
};
