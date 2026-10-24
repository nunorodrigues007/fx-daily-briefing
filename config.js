// ═══════════════════════════════════════════════════════════════════════════
// FX DAILY BRIEFING — CONFIG SEMANAL
// Este é o ÚNICO ficheiro a actualizar no update semanal.
// NUNCA editar index.html no processo semanal — só este ficheiro.
// Gerado automaticamente por _scripts/build_config.py
// ═══════════════════════════════════════════════════════════════════════════

const WEEK_CONFIG = {
  week: 44,
  period: "26 – 30 Out 2026",
  pairs: [
    {
      pair: "AUD/CHF",
      direction: "LONG",
      conviction: "★★★★★",
      score_diff: "7.5 pts",
      carry: "+460bp",
      thesis: "Diferencial 9.4 (AUD) - 1.9 (CHF) = 7.5 pontos, igual ao da semana passada, porque nenhuma das duas pernas mexeu. Carry +460bp, o maximo do G8, que fixa o Carry Rank no tecto de 10.0; Score Final 8.25 e primeiro lugar com 0,12 de folga sobre o #2. Moeda base: o RBA tem a taxa mais alta do G8 em 4,60% e nao a mexeu, mas a precificacao de subida a 3 Nov passou de 17,1% para 53,6% na mesma fonte, corroborada por outras duas, depois de o vice-governador ter dito publicamente que uma parte crescente das empresas ja trata 3% a 3,5% como o novo normal. Moeda cotada: o SNB esta em 0,00% e, no sumario de discussao de 22 Out, escreve que o franco depreciou cerca de 3% em termos ponderados pelo comercio desde Junho, movimento alinhado com o alargamento dos diferenciais, que lhe aumentou a atractividade como moeda de financiamento em carry trades, e com pouca procura de refugio. Catalisador: CPI australiano de Setembro, quarta 28 Out as 00:30 GMT / 11:30 AEDT, seis dias antes da reuniao de 3 Nov. Key risk: um CPI australiano fraco leva o AUD a 8.9, poe este par em 7.90 de Score Final, abaixo do USD/CHF, e o primeiro lugar muda de maos; do lado cotado, um CPI suico acima a 3 Nov leva o CHF a 2.4 e encolhe o diferencial para 7.0, o limiar exacto das cinco estrelas.",
      base_ccy: "AUD",
      quote_ccy: "CHF"
    },
    {
      pair: "USD/CHF",
      direction: "LONG",
      conviction: "★★★★★",
      score_diff: "8.0 pts",
      carry: "+388bp",
      thesis: "Diferencial 9.9 (USD) - 1.9 (CHF) = 8.0 pontos, o mais largo do quadro a par do #5, igual ao da semana passada. Carry +388bp, Score Final 8.13, a 0,12 do primeiro lugar. Moeda base: o Fed esta em 3,875% e em periodo de silencio desde 17 Out, e o indice de discursos do proprio banco nao tem entrada entre 19 e 23 Out. O que se moveu foi o preco da trajectoria, e para baixo nos dois horizontes: a subida de 28 Out cedeu de 16,1% para 10,0% e a de Dezembro de 88,1% para 75,3% cumulativo. Moeda cotada: a mesma do #1 e pela mesma razao - taxa em 0,00%, franco a servir de moeda de financiamento por palavras do proprio SNB, e um banco que considera as condicoes monetarias actuais apropriadas e que ja nao ve necessidade de disponibilidade acrescida para intervir. Catalisador: reuniao do FOMC, quarta 28 Out, decisao as 18:00 GMT / 14:00 ET. Key risk: o tecto da escala. Com o USD em 9.9 e o maximo em 10.0, uma subida entregue a 28 Out nao cabe no score e este par NAO acompanha para cima uma entrega hawkish; para baixo cabe tudo, porque um comunicado a suavizar leva o USD a 8.9 e o par a 7.43, abaixo do GBP/CHF.",
      base_ccy: "USD",
      quote_ccy: "CHF"
    },
    {
      pair: "GBP/CHF",
      direction: "LONG",
      conviction: "★★★★★",
      score_diff: "7.3 pts",
      carry: "+375bp",
      thesis: "Diferencial 9.2 (GBP) - 1.9 (CHF) = 7.3 pontos, de 6.8 na semana passada, porque o GBP subiu meio ponto. Carry +375bp, Score Final 7.56 de 7.21, e E O UNICO PAR DO QUADRO QUE MUDOU DE ESTRELAS: o diferencial cruzou o limiar de 7.0 e o par ganha a QUINTA estrela. Moeda base: e a unica moeda do quadro que subiu por dados. Os dois T1 do periodo bateram - desemprego em 4,7% contra 4,9% esperado, e CPI em 3,5% anual, 2,8% de nucleo e +0,4% em cadeia contra 3,4%, 2,7% e +0,3% - e a subida de 5 Nov esta precada a 95,3% numa fonte e 94,4% noutra. Moeda cotada: a mesma dos dois primeiros, e com os tres pares de CHF cotado agora em cinco estrelas a concentracao e maxima. Catalisador: nao ha nenhum na perna base dentro do periodo, e isso E o argumento - o BOE so decide a 5 Nov e o Reino Unido nao tem T1 entre 26 e 30 Out, pelo que este e o unico dos cinco pares cuja perna base atravessa o periodo sem evento que lhe mexa o score. Key risk: a ausencia de catalisador corta nos dois sentidos, porque o par tambem nao tem como subir por dados esta semana; e um CPI suico acima a 3 Nov leva o CHF a 2.4, o diferencial volta a 6.8 e a quinta estrela perde-se tao depressa como foi ganha.",
      base_ccy: "GBP",
      quote_ccy: "CHF"
    },
    {
      pair: "AUD/CAD",
      direction: "LONG",
      conviction: "★★★★",
      score_diff: "7.5 pts",
      carry: "+235bp",
      thesis: "Diferencial 9.4 (AUD) - 1.9 (CAD) = 7.5 pontos, de 8.0 na semana passada, porque o CAD subiu meio ponto. Carry +235bp, Score Final 6.78 de 7.13. Quatro estrelas e nao cinco porque o carry fica abaixo dos 300bp que a linha das cinco exige - o diferencial ja la esta, o carry nao. Moeda base: taxa mais alta do G8 parada em 4,60%, com a expectativa de subida a 3 Nov a passar de 17,1% para 53,6%. Moeda cotada: e aqui que o par ficou mais fragil. O CPI canadiano acelerou para 3,1%, acima do intervalo de controlo de 1-3% do proprio banco, e a probabilidade de uma subida a 28 Out passou de 40,8% para 80,4% na mesma fonte, com os economistas a mudarem de lado na mesma semana. Catalisador: DOIS no mesmo dia, quarta 28 Out, e em sentidos opostos - o CPI australiano as 00:30 GMT na perna base e a reuniao do Banco do Canada com Monetary Policy Report as 13:45 GMT na perna cotada, com treze horas de intervalo. Key risk: e o par com o maior risco de compressao do quadro. Uma subida do Banco do Canada leva o CAD a 2.9 ou 3.9 pela banda de reuniao, o diferencial cai para 6.5 ou 5.5 e, abaixo de 5.5, o par desce para tres estrelas.",
      base_ccy: "AUD",
      quote_ccy: "CAD"
    },
    {
      pair: "USD/CAD",
      direction: "LONG",
      conviction: "★★★★",
      score_diff: "8.0 pts",
      carry: "+162bp",
      thesis: "Diferencial 9.9 (USD) - 1.9 (CAD) = 8.0 pontos, o mais largo do quadro a par do #2, de 8.5 na semana passada. Carry +162bp, Score Final 6.66 de 7.01. Quatro estrelas: o carry cumpre o minimo de 150bp da linha das quatro e fica longe dos 300bp das cinco. Moeda base: Fed em 3,875% e em silencio, com a precificacao a ceder nos dois horizontes. Moeda cotada: o CAD subiu meio ponto e e a moeda com a reuniao mais provavel de surpreender do periodo, com 80% de subida precada. Catalisador: DUAS reunioes de banco central no MESMO DIA e nas duas pernas, quarta 28 Out - o Banco do Canada as 13:45 GMT e o FOMC as 18:00 GMT, com quatro horas e quinze minutos de intervalo. De W38 a W43 nenhum par do Top 5 teve as duas pernas a decidir no mesmo dia. Key risk: a assimetria e contra o par. Do lado base o tecto de 10.0 impede o USD de subir mais do que 0.1 se o Fed entregar; do lado cotado o CAD tem 1 a 2 pontos inteiros de banda se o Banco do Canada entregar. No cenario central do mercado, em que os dois sobem, este par PERDE diferencial; e se o Banco do Canada subir e o Fed suavizar, cai de 8.0 para 5.0 a 6.0 e sai do Top 5.",
      base_ccy: "USD",
      quote_ccy: "CAD"
    }
  ],
  t1_events: [
    {
      date: "2026-10-19",
      time: "12:30 GMT / 08:30 ET",
      release: "CPI de Setembro - StatCan",
      ccy: "CAD",
      pairs: [
        "AUD/CAD",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-20",
      time: "06:00 GMT / 07:00 BST",
      release: "Labour market overview - ONS",
      ccy: "GBP",
      pairs: [
        "GBP/CHF"
      ]
    },
    {
      date: "2026-10-21",
      time: "06:00 GMT / 07:00 BST",
      release: "CPI de Setembro - ONS",
      ccy: "GBP",
      pairs: [
        "GBP/CHF"
      ]
    },
    {
      date: "2026-10-21",
      time: "21:45 GMT / 22 Out 10:45 NZDT",
      release: "CPI do 3T - Stats NZ",
      ccy: "NZD",
      pairs: []
    },
    {
      date: "2026-10-22",
      time: "23:30 GMT / 23 Out 08:30 JST",
      release: "CPI nacional de Setembro - Statistics Bureau",
      ccy: "JPY",
      pairs: []
    }
  ],
  t2_events: [
    {
      date: "2026-10-26",
      time: "-",
      release: "Labour Day - Nova Zelandia, mercados locais fechados",
      ccy: "NZD",
      pairs: []
    },
    {
      date: "2026-10-26",
      time: "~",
      release: "Boletim COT do Saxo com a semana de 20 Out",
      ccy: "-",
      pairs: []
    },
    {
      date: "2026-10-27",
      time: "12:30 GMT / 08:30 ET",
      release: "Advance Durable Goods de Setembro - Census",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-27",
      time: "14:00 GMT / 10:00 ET",
      release: "New Residential Sales de Setembro - Census",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-27",
      time: "-",
      release: "FRED M1SL de Setembro",
      ccy: "-",
      pairs: []
    },
    {
      date: "2026-10-28",
      time: "00:30 GMT / 11:30 AEDT",
      release: "CPI de Setembro - ABS",
      ccy: "AUD",
      pairs: [
        "AUD/CHF",
        "AUD/CAD"
      ]
    },
    {
      date: "2026-10-28",
      time: "01:00 GMT / 14:00 NZDT",
      release: "Monetary Policy Review e OCR - RBNZ",
      ccy: "NZD",
      pairs: []
    },
    {
      date: "2026-10-28",
      time: "12:30 GMT / 08:30 ET",
      release: "Advance Economic Indicators de Setembro - Census",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-28",
      time: "13:45 GMT / 09:45 ET",
      release: "Decisao de taxa e Monetary Policy Report - Banco do Canada",
      ccy: "CAD",
      pairs: [
        "AUD/CAD",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-28",
      time: "18:00 GMT / 14:00 ET",
      release: "Decisao do FOMC",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-29",
      time: "12:30 GMT / 08:30 ET",
      release: "GDP do 3T, estimativa avancada - BEA",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-29",
      time: "12:30 GMT / 08:30 ET",
      release: "Personal Income and Outlays de Setembro, com PCE - BEA",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-29",
      time: "-",
      release: "John Kuszczak Memorial Lecture - conferencia economica anual do Banco do Canada, Otava",
      ccy: "CAD",
      pairs: [
        "AUD/CAD",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-29",
      time: "13:15 GMT / 14:15 CET",
      release: "Decisao do BCE; conferencia as 13:45 GMT",
      ccy: "EUR",
      pairs: []
    },
    {
      date: "2026-10-29",
      time: "-",
      release: "Reuniao de politica monetaria do BOJ, com Outlook Report a 30 Out",
      ccy: "JPY",
      pairs: []
    },
    {
      date: "2026-10-29",
      time: "23:30 GMT / 30 Out 08:30 JST",
      release: "Labour Force Survey de Setembro - Statistics Bureau",
      ccy: "JPY",
      pairs: []
    },
    {
      date: "2026-10-29",
      time: "23:30 GMT / 30 Out 08:30 JST",
      release: "CPI de Toquio de Outubro - Statistics Bureau",
      ccy: "JPY",
      pairs: []
    },
    {
      date: "2026-10-30",
      time: "12:30 GMT / 08:30 ET",
      release: "Employment Cost Index do 3T - BLS",
      ccy: "USD",
      pairs: [
        "USD/CHF",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-30",
      time: "-",
      release: "GDP flash preliminar do 3T da zona euro - Eurostat",
      ccy: "EUR",
      pairs: []
    },
    {
      date: "2026-10-30",
      time: "-",
      release: "Alteracoes tarifarias dos EUA sobre o Canada entram em vigor",
      ccy: "CAD",
      pairs: [
        "AUD/CAD",
        "USD/CAD"
      ]
    },
    {
      date: "2026-10-30",
      time: "16:10 GMT / 17:10 CET",
      release: "Discurso de Philip Lane em San Francisco",
      ccy: "EUR",
      pairs: []
    },
    {
      date: "2026-10-30",
      time: "-",
      release: "Financial Aggregates - RBA",
      ccy: "AUD",
      pairs: [
        "AUD/CHF",
        "AUD/CAD"
      ]
    },
    {
      date: "2026-11-03",
      time: "-",
      release: "Reuniao do RBA; CPI suico de Outubro as 07:30 GMT; Culture Day no Japao",
      ccy: "AUD/CHF/JPY",
      pairs: []
    },
    {
      date: "2026-11-05",
      time: "-",
      release: "Reuniao do BOE com Monetary Policy Report",
      ccy: "GBP",
      pairs: [
        "GBP/CHF"
      ]
    },
    {
      date: "2026-11-10",
      time: "-",
      release: "Proxima edicao do STEO - EIA",
      ccy: "-",
      pairs: []
    }
  ],
  holidays: [
    "NOTA DE FERIADOS E DE FUSO HORARIO - conferida nos calendarios das bolsas e dos bancos centrais, uma a uma, e nao por ausencia de memoria. HA DOIS FECHOS DE MERCADO NO PERIODO E OS DOIS CAEM NO MESMO DIA, o primeiro: SEGUNDA 26 OUT e LABOUR DAY NA NOVA ZELANDIA e NATIONALFEIERTAG NA AUSTRIA. O calendario oficial do governo neozelandes da 'Labour Day - 4th Monday in October - Monday 26 October'. O NZD nao esta no Top 5, mas o RBNZ decide dois dias depois e a semana neozelandesa comeca com os mercados locais fechados. E HA UM SEGUNDO FECHO NO MESMO DIA, numa praca da zona euro: 26 Out e o Nationalfeiertag austriaco, e o calendario de feriados da propria Wiener Boerse da 'Mo, 26 October - National Holiday' na coluna de feriados de bolsa, pelo que Viena esta fechada. As pracas principais da zona euro - Frankfurt, Paris e Amesterdao - e o TARGET2 funcionam, e nenhum par do Top 5 tem EUR, pelo que nao ha efeito em score, data ou hora de evento nenhum. OS OUTROS SEIS MERCADOS ESTAO ABERTOS, e isso foi verificado e nao assumido. Japao: o calendario de feriados de mercado da propria JPX nao tem nada entre o Sports Day de 12 Out e o Culture Day de 3 Nov. Canada: a pagina de eventos do proprio Banco do Canada so tem o Remembrance Day de 11 Nov. Estados Unidos: o calendario do BLS para Outubro marca apenas o Columbus Day de 12 Out. Reino Unido, Suica e Australia: sem feriado nacional na semana - o Dia de Todos os Santos, 1 Nov, cai a um domingo, e a Melbourne Cup, 3 Nov, e feriado so no estado de Victoria e esta fora do periodo. MUDANCA DE HORA, e esta semana morde. Os relogios europeus recuam no DOMINGO 25 OUT, vespera do periodo: todo o periodo rotulado esta em CET e em GMT, e nao em CEST nem em BST. Os Estados Unidos e o Canada so mudam a 1 Nov, pelo que 26 a 30 Out esta em EDT, quatro horas atras de Greenwich. A Australia esta em AEDT desde 4 Out e a Nova Zelandia em NZDT. Consequencia pratica, e e por isso que se escreve: na MESMA semana, 14:15 CET sao 13:15 GMT, 09:45 ET sao 13:45 GMT, 11:30 AEDT sao 00:30 GMT e 14:00 NZDT sao 01:00 GMT. E o Labour Force Survey japones de 30 Out as 08:30 JST e 29 Out as 23:30 GMT - dia de calendario diferente, e por isso escrevem-se os dois."
  ]
};

const COMMODITY_CONFIG = {
  week: 39,
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
          n1: "193,588 (Ago)",
          score: 0
        },
        {
          name: "Real Int. Rate (TIPS)",
          n: "2,64% (22 Out)",
          n1: "2,78% (15 Out)",
          score: 1
        },
        {
          name: "ETF Flows (GLD)",
          n: "1.045,64t (22 Out)",
          n1: "1.053,91t (15 Out)",
          score: -1
        },
        {
          name: "COT Gold (MM)",
          n: "104.206 (20 Out)",
          n1: "107.089 (13 Out)",
          score: 1
        },
        {
          name: "GDX Short Int.",
          n: "36,57M (30 Set)",
          n1: "36,57M (30 Set)",
          score: 0
        },
        {
          name: "Sazonalidade",
          n: "Outubro",
          n1: "Outubro",
          score: 1
        }
      ],
      thesis: "Score total +2 (MILD BULLISH), igual ao da semana passada, e com os SEIS pilares no mesmo score que tinham: tres dos seis pilares estao a +1 — o yield real, o COT e a sazonalidade de Outubro —, um esta a -1, a tonelagem do GLD, e dois estao a 0 por nao haver publicacao nova. Tres pilares receberam dado novo e nenhum virou de sinal, e e por isso que o delta e zero. O metal caiu 4,14% na semana contra um framework parado, quinta semana consecutiva de divergencia, e o canal que normalmente a explicaria — o yield real — moveu-se A FAVOR do ouro.",
      key_event: "27 Out — FRED M1SL de Setembro, a metade que falta ao pilar Excess Liquidity (o INDPRO de Setembro ja esta publicado em 103,9506); e o settlement do GDX de 15 Out, que ainda nao existe na tabela da fonte e devolve informacao ao pilar que esta a 0. A 7 Nov a sazonalidade INVERTE de sinal: Novembro e -1.",
      data_gaps: [
        "DIVERGENCIA PRECO/FRAMEWORK NO GOLD, quinta semana: framework +2 parado contra -4,14% de preco. O driver que falta e desmontagem tecnica de posicoes apinhadas, e o canal que explicaria uma subida — o yield real — moveu-se a favor do ouro e nao contra.",
        "DIVERGENCIA PRECO/FRAMEWORK NO CRUDE, reaberta e com sinal invertido face ao W38: framework de +3 para +1 contra +6,58% de preco. O driver que falta e premio de risco geopolitico, e o unico pilar que mudou de score mede o oposto do que o preco faz.",
        "Dois pilares a 0 por AUSENCIA DE PUBLICACAO verificada na fonte e nao por n/d: Excess Liquidity (o M1SL de Setembro so sai a 27 Out) e GDX Short Interest (a tabela da MarketBeat continua no settlement de 30 Set e a linha de 15 Out nao existe).",
        "Zero pilares n/d, terceira semana consecutiva. O intervalo de sensibilidade do gold e +2 sem alternativa: nao ha pilar em falta nem conflito normativo a morde-lo.",
        "Ressalva de homogeneidade que se mantem no pilar ETF GLD: o nivel nao e comparavel com os valores DERIVADOS de W31-W32 nem com a serie MacroMicro. N e N-1 sao quintas-feiras homologas, 22 e 15 Out."
      ]
    },
    {
      asset: "CRUDE OIL",
      score: 1,
      verdict_label: "MILD BULLISH",
      icon: "🛢",
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
          n: "-3,1M bbl (16 Out)",
          n1: "-8,6M bbl (9 Out)",
          score: 1
        },
        {
          name: "US/SA Prod. (STEO)",
          n: "4,8M b/d (ed. Out)",
          n1: "4,8M b/d (ed. Out)",
          score: 0
        },
        {
          name: "COT Crude (WTI+Brent)",
          n: "344k (13 Out)",
          n1: "313k (6 Out)",
          score: -1
        },
        {
          name: "US Dollar (DXY)",
          n: "101,81 (23 Out)",
          n1: "101,84 (16 Out)",
          score: 1
        }
      ],
      thesis: "Score total +1 (MILD BULLISH), de +3: dois dos cinco pilares estao a +1 — o draw de 3,1M bbl do EIA e o dolar —, um esta a -1, o COT, e dois estao a 0 por nao haver publicacao nova. A descida de dois pontos vem de UM pilar so: o COT combinado subiu de 313k para 344k contratos, e subir e crowding, que vale -1. O intervalo real e -1 a +1 e o semaforo inverte para amarelo com qualquer das duas ressalvas — o conflito normativo do STEO, que pela leitura do SOP daria -1, e o ponto do DXY, que assenta numa descida de 0,03 pontos de indice.",
      key_event: "28 Out 14:30 GMT — EIA WPSR com a semana de 23 Out, depois de dois draws consecutivos. E 10 Nov a proxima edicao do STEO, confirmada na propria pagina da EIA, que e o unico evento de calendario capaz de, por si so, fechar o conflito normativo do pilar.",
      data_gaps: [
        "CONFLITO NORMATIVO NO PILAR DO STEO, e esta semana separa VERDE de AMARELO e nao duas leituras do mesmo verde: o Manual §1 e o §4 dao 0 entre edicoes (aplicado, crude +1 MILD BULLISH); o SOP §10 manda manter o score da ultima edicao, que daria -1 e um crude de 0 NEUTRAL; e o Manual §4, bloco ENTRE STEOS, chama-lhe protocolo n/d. Sem decisao e sem defesa em codigo.",
        "O PONTO DO DXY ASSENTA NUMA DESCIDA MENOR DO QUE A DISPERSAO MEDIDA: 101,84 para 101,81 sao 0,03 pontos, e a dispersao entre duas representacoes do mesmo fecho e de 0,058. O SINAL e o mesmo em todas as leituras; a magnitude nao sobrevive. Sem este ponto o crude seria 0 NEUTRAL.",
        "INTERVALO REAL DO CRUDE: -1 a +1. O semaforo inverte de verde para amarelo com qualquer das duas ressalvas isoladamente, e vai a MILD BEARISH com as duas.",
        "Dois pilares a 0 por AUSENCIA DE PUBLICACAO verificada na fonte e nao por n/d: ISM (o dado de Outubro sai a 2 Nov, por 1 Nov ser domingo) e STEO (a EIA da 'Next Release Date: November 10, 2026').",
        "O COT combinado WTI+Brent foi lido na TABELA da fonte e nao numa frase de resumo, porque o boletim desta semana nao publica o combinado em texto: WTI (CME) 102.765, WTI (ICE) 7.854 e Brent (ICE) 233.029 somam 343.648, e 343.648 menos a variacao de +30.961 devolve os 313k publicados como N-1.",
        "Ressalva de vintage entre os dois COT: o do gold e de 20 Out e o do crude de 13 Out, uma publicacao atras, porque sao fontes com lags diferentes e nenhuma norma do projecto fixa regra de recencia."
      ]
    }
  ]
};
