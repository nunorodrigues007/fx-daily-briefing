// ═══════════════════════════════════════════════════════════════════════════
// FX DAILY BRIEFING — CONFIG SEMANAL
// Este é o ÚNICO ficheiro a actualizar no update semanal.
// NUNCA editar index.html no processo semanal — só este ficheiro.
// Gerado automaticamente por _scripts/build_config.py
// ═══════════════════════════════════════════════════════════════════════════

const WEEK_CONFIG = {
  week: 40,
  period: "28 Set – 2 Out 2026",
  pairs: [
    {
      pair: "AUD/CHF",
      direction: "LONG",
      conviction: "★★★★★",
      score_diff: "7.9 pts",
      carry: "+435bp",
      thesis: "Diferencial 9.8 (AUD) - 1.9 (CHF) = 7.9 pontos, inalterado face ao W39 porque as duas pernas subiram 0.1 ao mesmo tempo — o que e uma coincidencia e nao uma ausencia de movimento. O par NAO e o de maior diferencial do quadro: sao o #2 USD/CHF e o #5 USD/CAD, ambos a 8.0. E o de maior CARRY, 435bp, o maximo do G8, que e o que define a escala de Carry Rank da formula. Narrativa da base: o RBA decide na terca 29 Set com cerca de 90% de subida para 4,60% precada e os quatro grandes bancos australianos todos a preve-la; o emprego de Agosto bateu o dobro do consenso, com mais 39,5 mil, embora com desemprego a subir para 4,6% e todo o ganho a tempo parcial. Narrativa da cotada: a SNB manteve em 0,00% a 24 Set e a sua propria previsao mantem a inflacao em 0,8% ate 2028, abaixo do limiar de 1% que o banco associa a discutir subidas — nao ha saida do zero no horizonte, e Schlegel disse explicitamente que a taxa baixa torna o franco atractivo para carry trade. Catalisador semanal: a decisao do RBA, terca 29 Set as 04:30 GMT, seguida do CPI mensal australiano de Agosto na quarta 30 Set as 01:30 GMT — duas provas da mesma perna em dois dias, e pela primeira vez nesta serie a perna do franco nao tem evento nenhum no periodo. Key risk: o RBA manter. Uma subida de 90% precada que nao aparece desfaz a revisao do AUD e aperta o diferencial de cima, e o par esta no topo da escala, onde so tem espaco para descer. Risco secundario: um CPI australiano fraco a 30 Set, no dia seguinte a decisao, que poria em causa a sequencia.",
      base_ccy: "AUD",
      quote_ccy: "CHF"
    },
    {
      pair: "USD/CHF",
      direction: "LONG",
      conviction: "★★★★★",
      score_diff: "8.0 pts",
      carry: "+388bp",
      thesis: "Diferencial 9.9 (USD) - 1.9 (CHF) = 8.0 pontos, o maior do quadro a par com o #5, mas ENCOLHIDO de 8.1 pela revisao do franco — e o Score Final desce de 8.35 para 8.28 por essa unica razao. Narrativa da base: o Fed subiu 25pb a 16 Set e a semana de 21-25 Set foi de reprecificacao do que vem a seguir, com Outubro a passar de 49% para mais de 70% e o Treasury a dez anos a fechar em 5,175%, maximo de 19 anos, o mais alto desde Julho de 2007. Nao houve comunicacao de politica: o calendario oficial da apenas Jefferson sobre a janela de desconto e Barr sobre habitacao. Narrativa da cotada: 0,00% reconfirmado a 24 Set, com a SNB a abandonar a linguagem de 'increased willingness' a intervir — menos defesa declarada do franco e a mesma taxa. Catalisador semanal: o PCE de Agosto na quarta 30 Set as 12:30 GMT, primeiro teste de inflacao depois da subida, e o NFP de Setembro na sexta 2 Out a mesma hora; do lado suico, o CPI de Setembro na quinta 1 Out. Os tres eventos que importam ao par estao nos ultimos tres dias uteis do periodo. Key risk: um PCE brando. O eixo 2 do USD esta hoje sustentado por precificacao, nao por dado publicado, e um PCE abaixo do esperado desfaz a subida dos yields que suporta a metade dela; a queda seria em ambas as pernas ao mesmo tempo, porque um dolar mais fraco costuma trazer franco mais forte.",
      base_ccy: "USD",
      quote_ccy: "CHF"
    },
    {
      pair: "GBP/CHF",
      direction: "LONG",
      conviction: "★★★★",
      score_diff: "6.8 pts",
      carry: "+375bp",
      thesis: "Diferencial 8.7 (GBP) - 1.9 (CHF) = 6.8 pontos, inalterado porque as duas pernas subiram 0.1 — a mesma coincidencia do #1. Score Final 7.35, igual ao do W39. As 4 estrelas sao tecto de diferencial e nao de carry: 6.8 fica na banda de 5.5-6.9 e os 375bp permitiriam 5, o que o codigo aplica sem margem para interpretacao. Narrativa da base: Lombardelli, vice-governadora e uma das seis que votaram MANTER a 17 Set, disse a 24 Set que 'policy is increasingly likely to need to tighten if elevated energy prices persist', e projectou inflacao a 3,7% no fim de 2026 e 4,2% no primeiro trimestre de 2027; o mercado tem 86% de subida precada para 5 Nov, com a ressalva de que a fonte e fraca. Narrativa da cotada: 0,00% reconfirmado, previsao da SNB abaixo de 1% ate 2028, franco em funcao de moeda de financiamento por admissao do proprio presidente do banco. Catalisador semanal: pelo lado britanico nao ha nenhum — nao ha dado nem reuniao do BOE no periodo, o proximo T1 e a 20 Out e a reuniao a 5 Nov; pelo lado suico, o CPI de Setembro na quinta 1 Out. E o unico dos cinco pares cujo catalisador vem inteiramente da perna cotada, e isso e uma caracteristica do par nesta semana, nao um defeito da analise. Key risk: a libra nao reagir a hawkishness, que e o padrao observado — a FXStreet nota a 21 Set que a libra 'got little help' do MPC hawkish, por buy the rumour sell the fact e porque os outros G10 tambem subiram expectativas. Um diferencial que alarga sem o par se mover e um risco de tempo, nao de tese.",
      base_ccy: "GBP",
      quote_ccy: "CHF"
    },
    {
      pair: "AUD/CAD",
      direction: "LONG",
      conviction: "★★★★",
      score_diff: "7.9 pts",
      carry: "+210bp",
      thesis: "Diferencial 9.8 (AUD) - 1.9 (CAD) = 7.9 pontos, ALARGADO de 7.8 pela revisao do AUD — e o unico dos cinco pares cujo diferencial aumenta esta semana, porque e o unico em que a perna revista nao e compensada pela outra. Score Final sobe de 6.91 para 6.98. As 4 estrelas sao tecto de CARRY: 210bp permite 4, e o diferencial de 7.9 permitiria 5. Narrativa da base: RBA a 29 Set com cerca de 90% de subida precada e os quatro grandes bancos alinhados; emprego a bater o dobro do consenso. Narrativa da cotada: o BOC manteve a 2 Set e Macklem em Halifax a 21 Set nao sinalizou direccao, com precificacao de Outubro em cerca de 50% na leitura de 18 Set. Catalisador semanal: a decisao do RBA na terca 29 Set as 04:30 GMT e o CPI australiano na quarta 30 Set; do lado canadiano, o GDP mensal de Julho na terca 29 Set, que e Tier 2. Key risk: e o mais especifico dos cinco e inverteu de sinal face a semana passada. O Brent SUBIU 1,1% na semana, para 104,37, e Macklem disse no mesmo discurso que 'if oil prices stay near 100 dollars per barrel, we would expect inflation to edge up in the coming months'. O petroleo acima de 100 melhora os termos de troca canadianos E cumpre a condicao de inflacao que o proprio governador nomeou — ou seja sopra contra este par por dois canais ao mesmo tempo, e o framework nao pontua nenhum deles. Foi este o mecanismo que esteve a favor do par no W39, quando o petroleo caiu.",
      base_ccy: "AUD",
      quote_ccy: "CAD"
    },
    {
      pair: "USD/CAD",
      direction: "LONG",
      conviction: "★★★★",
      score_diff: "8.0 pts",
      carry: "+162bp",
      thesis: "Diferencial 9.9 (USD) - 1.9 (CAD) = 8.0 pontos, o maior do quadro a par com o #2, e inalterado porque nenhuma das duas pernas mexeu. Score Final 6.72, igual ao do W39. As 4 estrelas sao tecto de CARRY e vale recordar por que razao sao 4 e nao 3: o carry passou de 138bp para 162bp com a subida do Fed de 16 Set e cruzou o limiar de 150bp que o SOP exige, o que deixou de limitar o par as 3 estrelas que a propria checklist do SOP nomeava como o seu caso. Com 162bp a folga e de 12bp — um corte do Fed ou uma subida do BOC de 25pb devolve o par as 3 estrelas. Narrativa da base: Outubro a mais de 70% e yields longos em maximos de 19 anos, os mais altos desde 2007, sem comunicacao de politica na semana. Narrativa da cotada: BOC em espera, cerca de 50% para 28 Out, Retail Sales de Julho a menos 0,7% com avanco de mais 1,3% para Agosto. Catalisador semanal: PCE na quarta 30 Set as 12:30 GMT e NFP na sexta 2 Out a mesma hora, com o GDP mensal canadiano na terca 29 Set. Key risk: o mesmo do #4 pelo lado do petroleo, e um segundo, proprio deste par — o BOC e o unico banco central do quadro com uma subida a cerca de 50% para a reuniao seguinte cujo score esta na banda maximo expansionista. Se essa subida vier a 28 Out, o reajuste do score do CAD e de mais de 0.1 e este e o par que o sente por inteiro, no diferencial e no carry ao mesmo tempo.",
      base_ccy: "USD",
      quote_ccy: "CAD"
    }
  ],
  t1_events: [
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
    }
  ],
  t2_events: [
    {
      date: "2026-09-21",
      time: "15:05 GMT",
      release: "Macklem (BOC) — Halifax",
      ccy: "CAD",
      pairs: [
        "AUD/CAD",
        "USD/CAD"
      ]
    },
    {
      date: "2026-09-22",
      time: "03:21 GMT",
      release: "Bullock (RBA) — declaracoes",
      ccy: "AUD",
      pairs: [
        "AUD/CHF",
        "AUD/CAD"
      ]
    },
    {
      date: "2026-09-23",
      time: "08:00 GMT",
      release: "Flash PMI (Set) — HCOB Zona Euro",
      ccy: "EUR",
      pairs: []
    },
    {
      date: "2026-09-23",
      time: "—",
      release: "Flash PMI (Set) — S&P Global RU",
      ccy: "GBP",
      pairs: [
        "GBP/CHF"
      ]
    },
    {
      date: "2026-09-23",
      time: "—",
      release: "Flash PMI (Set) — S&P Global EUA",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-09-24",
      time: "—",
      release: "Ifo (Set) — Alemanha",
      ccy: "EUR",
      pairs: []
    },
    {
      date: "2026-09-24",
      time: "12:30 GMT",
      release: "Retail Sales (Jul) — StatCan",
      ccy: "CAD",
      pairs: [
        "AUD/CAD",
        "USD/CAD"
      ]
    },
    {
      date: "2026-09-24",
      time: "—",
      release: "Lombardelli (BOE) — 'The outlook for inflation'",
      ccy: "GBP",
      pairs: [
        "GBP/CHF"
      ]
    },
    {
      date: "2026-09-24",
      time: "—",
      release: "Katayama (MOF Japao) — jawboning",
      ccy: "JPY",
      pairs: []
    },
    {
      date: "2026-09-28",
      time: "—",
      release: "Lagarde no Parlamento Europeu (ECON)",
      ccy: "EUR",
      pairs: []
    },
    {
      date: "2026-09-29",
      time: "04:30 GMT",
      release: "RBA — DECISAO",
      ccy: "AUD",
      pairs: [
        "AUD/CHF",
        "AUD/CAD"
      ]
    },
    {
      date: "2026-09-29",
      time: "—",
      release: "GDP mensal (Jul) — StatCan, com avanco de Agosto",
      ccy: "CAD",
      pairs: [
        "AUD/CAD",
        "USD/CAD"
      ]
    },
    {
      date: "2026-09-29",
      time: "TBC",
      release: "CPI flash (Set) — Destatis",
      ccy: "EUR",
      pairs: []
    },
    {
      date: "2026-09-30",
      time: "01:30 GMT",
      release: "CPI mensal (Ago) — ABS",
      ccy: "AUD",
      pairs: [
        "AUD/CHF",
        "AUD/CAD"
      ]
    },
    {
      date: "2026-09-30",
      time: "12:30 GMT",
      release: "PCE / Personal Income and Outlays (Ago) — BEA",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-09-30",
      time: "12:30 GMT",
      release: "GDP Q2, TERCEIRA estimativa — BEA",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-09-30",
      time: "TBC",
      release: "Tankan do BOJ (inquerito de Setembro)",
      ccy: "JPY",
      pairs: []
    },
    {
      date: "2026-10-01",
      time: "08:50 JST",
      release: "BOJ — Summary of Opinions (reuniao 17-18 Set)",
      ccy: "JPY",
      pairs: []
    },
    {
      date: "2026-10-01",
      time: "—",
      release: "CPI (Set) — Suica, FSO",
      ccy: "CHF",
      pairs: [
        "AUD/CHF",
        "USD/CHF",
        "GBP/CHF"
      ]
    },
    {
      date: "2026-10-02",
      time: "08:30 JST",
      release: "CPI de Toquio (Set)",
      ccy: "JPY",
      pairs: []
    },
    {
      date: "2026-10-01",
      time: "14:00 GMT",
      release: "ISM Manufacturing (Set)",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-02",
      time: "12:30 GMT",
      release: "NFP / Employment Situation (Set) — BLS",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-02",
      time: "—",
      release: "HICP flash (Set) — Eurostat",
      ccy: "EUR",
      pairs: []
    },
    {
      date: "2026-10-09",
      time: "—",
      release: "Labour Force Survey (Set) — StatCan",
      ccy: "CAD",
      pairs: [
        "AUD/CAD",
        "USD/CAD"
      ]
    }
  ],
  holidays: [
    "1 Out — Dia Nacional na China, inicio da Golden Week (1-7 Out); mercados da China continental fechados nos dois ultimos dias do periodo"
  ]
};

const COMMODITY_CONFIG = {
  week: 35,
  assets: [
    {
      asset: "GOLD",
      score: 3,
      verdict_label: "BULLISH",
      icon: "🥇",
      color_class: "xau",
      pillars: [
        {
          name: "Excess Liquidity (M1/IP)",
          n: "193.960 (Ago)",
          n1: "192.988 (Jul)",
          score: 1
        },
        {
          name: "Real Int. Rate (TIPS)",
          n: "2.85% (24 Set)",
          n1: "2.61% (17 Set)",
          score: -1
        },
        {
          name: "ETF Flows (GLD)",
          n: "n/d 4.a sem.",
          n1: "1.044,0t (!) deriv.",
          score: 0
        },
        {
          name: "COT Gold (MM)",
          n: "127.389 (22 Set)",
          n1: "133.116 (15 Set)",
          score: 1
        },
        {
          name: "GDX Short Int.",
          n: "35,51M (15 Set)",
          n1: "37,19M (31 Ago)",
          score: 1
        },
        {
          name: "Sazonalidade",
          n: "Setembro",
          n1: "Setembro",
          score: 1
        }
      ],
      thesis: "Score total declarado +3 (BULLISH), de +1 no W34. Dois pilares mudaram de score, cada um vale um ponto, e os dois tem publicacao nova por tras. O Excess Liquidity passa de 0 para +1: o M1SL de Agosto saiu a 22 Set com 19.991,1 e o INDPRO de Agosto ja estava publicado desde 18 Set com 103,0682, pelo que o racio volta a cruzar dois valores do mesmo mes, 193,960 contra 192,988 em Julho. Nota de vintage que importa: o N-1 nao e os 193,083 gravados no estado, porque a edicao corrente reviu Julho, o M1 de 19.886,4 para 19.886,5 e o INDPRO de 102,9939 para 103,0454; quando uma publicacao revisita o passado, N e N-1 saem ambos da edicao mais recente, e a direccao e a mesma com qualquer dos dois vintages. O GDX passa de 0 para +1: o settlement de 15 Set foi publicado e da 35.514.478 accoes contra 37.194.640 a 31 Ago, menos 1,68M ou menos 4,5%, que e cobertura de shorts nas mineiras. Os outros quatro repetem: yields reais -1 pela quarta semana, ETF GLD 0 por n/d pela quarta semana, COT +1 pela terceira, Sazonalidade +1. Importa dizer com precisao o que NAO mudou, porque a leitura intuitiva erraria: os yields reais tiveram o maior movimento absoluto das quatro semanas, uma subida de 2,61% para 2,85% em cinco sessoes, e nao mudam o score em nada, porque ja estavam a -1 e continuam a -1. O COT confirma descompressao pela terceira semana seguida e com a maior magnitude das tres, uma reducao de 5.727 contratos nas posicoes de managed money de 22 Set, para 127.389, e a aritmetica fecha com o estado anterior. Um detalhe de leitura que os numeros suportam, e que importa enunciar sem lhe atribuir o delta: os shorts cobriram nas mineiras e o managed money reduziu longos no metal, numa semana em que o preco caiu 2,2% e os yields reais subiram 24 pontos base. E descompressao de posicionamento a acontecer contra o preco, dentro do proprio complexo. Mas dos dois pontos desta semana so UM e posicionamento, o do GDX; o outro e liquidez, e o COT nao contribui com nenhum, porque ja estava a +1 no W34 e continua a +1. O COT e contexto e nao delta — a distincao e a mesma que se acabou de fazer para os yields reais. O pilar cego continua a ser o ETF: a SSGA de 24 Set e internamente coerente, com 369,70M de accoes a 391,16 de NAV a dar 144.611,85M contra os 144.613,48M declarados, mas e fonte unica e o Manual 8.4a nao permite derivar tonelagem com menos de duas. Nao se inclina o intervalo de sensibilidade com base nela: as accoes mexeram 0,16% em sete dias, dentro do ruido, e falta o preco LBMA do dia para fechar a derivacao em tonelagem.",
      key_event: "PCE de Agosto a 30 Set, 12:30 GMT: a variavel que manda no DXY e nos yields reais, o pilar que esta a -1 pela quarta semana. E o ISM a 1 Out, 14:00 GMT.",
      data_gaps: [
        "ETF GLD n/d pela 4.a semana: so a SSGA e coerente (24 Set, AUM 144.613,48M, NAV 391,16, 369,70M accoes) e o Manual 8.4a exige 2+ fontes. Intervalo real do gold +2 a +4; a +2 o semaforo passa a MILD BULLISH. Nao se inclina o intervalo: as accoes mexeram 0,16% em sete dias e falta o preco LBMA do dia para fechar a derivacao"
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
          n: "54,6% s/ report",
          n1: "54,6% (Ago)",
          score: 0
        },
        {
          name: "EIA Stocks",
          n: "+3,0M bbl (18 Set)",
          n1: "-0,6M bbl (11 Set)",
          score: -1
        },
        {
          name: "US/SA Prod. (STEO)",
          n: "6,7M b/d s/ ed.",
          n1: "6,7M b/d (Ago)",
          score: 0
        },
        {
          name: "COT Crude (WTI+Brent)",
          n: "n/d 8.a sem.",
          n1: "266k (4 Ago)",
          score: 0
        },
        {
          name: "US Dollar (DXY)",
          n: "101,04 (25 Set)",
          n1: "100,22 (18 Set)",
          score: -1
        }
      ],
      thesis: "Score total declarado -2 (MILD BEARISH), de 0 no W34. E uma descida de 2 pontos e vem de um pilar so: o EIA, que inverte de +1 para -1. A semana terminada a 18 Set trouxe um build de 3,0 milhoes de barris, para 426,4M, contra um draw de 0,6M na semana anterior, e contra um consenso que esperava uma reducao de 641 mil. O valor esta confirmado no balanco oficial da EIA, Table 1 da semana terminada a 18 Set: Commercial excluding SPR 426,4 contra 423,4, diferenca 3,0, e a aritmetica fecha com o nivel do N-1. A regra do Manual 2 e o sinal absoluto: build e -1, qualquer que seja a magnitude. Os outros quatro nao mexem, e vale dizer por que razao cada um esta onde esta, porque tres deles estao a zero por motivos diferentes. O ISM esta a 0 pela terceira semana por N igual a N-1, com os dados de Agosto publicados a 1 Set e Setembro a sair a 1 Out; o flash PMI da S&P Global de 23 Set, que deu industria a 57,0, NAO entra aqui, porque e outra serie e o Manual nomeia o ISM. O STEO esta a 0 pela segunda semana por nao haver edicao nova, com a de Setembro ainda corrente e a de Outubro a 6 Out; a nota qualitativa que o pilar nao ve e que o oleoduto Este-Oeste saudita, fechado desde 10 Set, estava a reabrir com 4M b/d a 25 Set, informacao de oferta que so entra a 6 Out. O COT esta n/d pela oitava semana, e o boletim do Saxo de 21 Set, com a semana de 15 Set, volta a nao dar figura combinada, embora com uma leitura qualitativa mais fraca do que na semana passada, cautela dos fundos e alguma compra de Brent contra venda liquida em gasolina e destilados. E o DXY esta a -1, mas ja estava a -1 no W34, pelo que nao contribui com nenhum dos dois pontos desta semana: o dolar fechou a 101,04 contra 100,22, mais 0,8% e segunda semana consecutiva de ganho, em tres fontes concordantes.",
      key_event: "EIA semanal a 30 Set/1 Out e STEO de Outubro a 6 Out, a primeira edicao que pode reflectir a reabertura do oleoduto Este-Oeste saudita, que estava a voltar com 4M b/d a 25 Set.",
      data_gaps: [
        "COT Crude n/d pela 8.a semana: o Saxo de 21 Set volta a nao dar figura combinada WTI+Brent. Intervalo real do crude -3 a -1; a -3 o semaforo passa a BEARISH. A leitura qualitativa aponta ainda para o lado -1 mas com menos forca do que na semana passada",
        "ISM a 0 pela 3.a semana (N=N-1, Setembro sai a 1 Out) e STEO a 0 pela 2.a (sem edicao nova, Outubro a 6 Out). Nao sao n/d e nao entram no calculo de sensibilidade"
      ]
    }
  ]
};
