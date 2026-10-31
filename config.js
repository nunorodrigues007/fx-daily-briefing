// ═══════════════════════════════════════════════════════════════════════════
// FX DAILY BRIEFING — CONFIG SEMANAL
// Este é o ÚNICO ficheiro a actualizar no update semanal.
// NUNCA editar index.html no processo semanal — só este ficheiro.
// Gerado automaticamente por _scripts/build_config.py
// ═══════════════════════════════════════════════════════════════════════════

const WEEK_CONFIG = {
  week: 45,
  period: "2 – 6 Nov 2026",
  pairs: [
    {
      pair: "AUD/CHF",
      direction: "LONG",
      conviction: "★★★★★",
      score_diff: "8.0 pts",
      carry: "+460bp",
      thesis: "Diferencial 9.9 (AUD) - 1.9 (CHF) = 8.0 pontos, com carry de +460bp, que e o maximo do G8 e fixa o Carry Rank no tecto de 10.0; Score Final 8.60 e primeiro lugar com 1,04 de folga sobre o #2. Moeda base: o RBA tem a taxa mais alta do G8 em 4,60% e o CPI de Setembro bateu, com 4,3% anual contra 4,2% esperado, o que levou a precificacao da subida de 3 Nov de 53,6% para 70,0% a 75,0% na mesma pagina. Moeda cotada: o SNB esta em 0,00%, nao reune ate 10 Dez e viu a precificacao de subida ceder de 12,3% para 6,2%. Catalisador: reuniao do RBA com Statement on Monetary Policy, terca 3 Nov as 03:30 GMT / 14:30 AEDT. Key risk: se o RBA nao entregar, o AUD cai para 8.9 e o par para 7.90, que ainda mantem o #1 com 0,34 de folga; se o RBA subir, o carry maximo passa a 485bp e re-normaliza para baixo os tres pares sem AUD na base.",
      base_ccy: "AUD",
      quote_ccy: "CHF"
    },
    {
      pair: "GBP/CHF",
      direction: "LONG",
      conviction: "★★★★★",
      score_diff: "7.3 pts",
      carry: "+375bp",
      thesis: "Diferencial 9.2 (GBP) - 1.9 (CHF) = 7.3 pontos, com carry de +375bp e Score Final 7.56, exactamente o mesmo da semana passada; sobe de #3 para #2 sem que nenhuma das pernas tenha mexido, porque foi o USD que desceu. Moeda base: o BOE esta em 3,75% e tem reuniao com Monetary Policy Report dentro do periodo rotulado, com a subida precada a 94,9%; nao houve T1 nem discurso na semana, com o indice do proprio banco parado a 23 Out. Moeda cotada: o SNB em 0,00%, sem reuniao ate 10 Dez e com a precificacao de subida a cair para 6,2%. Catalisador: reuniao do BOE com Monetary Policy Report, quinta 5 Nov as 12:00 GMT. Key risk: e o par com o risco de evento mais concentrado do quadro - se o BOE mantiver contra 95% de precificacao, o GBP cai para 8.2, o par para 6.86 e perde a quinta estrela; um CPI suico acima a 3 Nov leva-o a 7.21, com o mesmo efeito por outra via.",
      base_ccy: "GBP",
      quote_ccy: "CHF"
    },
    {
      pair: "USD/CHF",
      direction: "LONG",
      conviction: "★★★★★",
      score_diff: "7.0 pts",
      carry: "+388bp",
      thesis: "Diferencial 8.9 (USD) - 1.9 (CHF) = 7.0 pontos, com carry de +388bp e Score Final 7.43, contra 8.13 na semana passada; desce de #2 para #3 e a descida e inteiramente da perna base. Moeda base: o Fed manteve a 28 Out em 3,75-4,00% por 10-2, com Cook e Hammack a dissentirem a favor de subir, e a precificacao de Dezembro cedeu de 75,3% para 68,7%, segunda semana a ceder; os dados do dia 29 puxam ao contrario, com o GDP do 3T a 3,4% contra 3,2% esperado. Moeda cotada: o SNB em 0,00%, sem reuniao ate 10 Dez. Catalisador: Employment Situation de Outubro, sexta 6 Nov as 13:30 GMT / 08:30 EST, ja em horario de inverno. Key risk: um emprego fraco leva o USD a 8.4 e o par a 7.08, com perda da quinta estrela; um CPI suico acima a 3 Nov da o mesmo 7.08 pelo lado cotado.",
      base_ccy: "USD",
      quote_ccy: "CHF"
    },
    {
      pair: "EUR/CHF",
      direction: "LONG",
      conviction: "★★★★",
      score_diff: "6.1 pts",
      carry: "+250bp",
      thesis: "Diferencial 8.0 (EUR) - 1.9 (CHF) = 6.1 pontos, com carry de +250bp e Score Final 5.90, contra 5.55 na semana passada; ENTRA no Top 5, e e a primeira vez na janela de W25 a W44, vinte relatorios arquivados. Moeda base: o BCE manteve os tres juros a 29 Out e nao se compromete com uma trajectoria, mas acrescenta risco de inflacao pela energia, o GDP flash do 3T bateu com +0,4% contra +0,2% esperado, e a precificacao de Dezembro firmou de 71,2% para 76,5%. Moeda cotada: o SNB em 0,00%, sem reuniao ate 10 Dez e sem sinal de orientacao na semana. Catalisador: estimativa rapida da inflacao da zona euro de Outubro, quarta 4 Nov; a hora nao consta do calendario do Eurostat e por isso nao se escreve. Key risk: a entrada e por 0,33 de folga sobre o #5 e perde-se por tres vias - inflacao abaixo do consenso, CPI suico acima, ou emprego canadiano fraco -, e nas tres o lugar decide-se na segunda casa decimal.",
      base_ccy: "EUR",
      quote_ccy: "CHF"
    },
    {
      pair: "AUD/CAD",
      direction: "LONG",
      conviction: "★★★★",
      score_diff: "6.0 pts",
      carry: "+210bp",
      thesis: "Diferencial 9.9 (AUD) - 3.9 (CAD) = 6.0 pontos, com carry de +210bp, contra 235bp na semana passada porque a taxa canadiana subiu, e Score Final 5.57 contra 6.78; mantem o #5 apesar de perder 1,21 pontos, porque o USD/CAD perdeu mais e saiu. Moeda base: o RBA em 4,60%, com o CPI de Setembro a bater e a subida de 3 Nov precada entre 70% e 85% consoante a fonte. Moeda cotada: o Banco do Canada subiu 25pb para 2,50% a 28 Out, a primeira subida desde Julho de 2023, e admite que pode ser preciso subir mais, com a projeccao de inflacao de 2027 revista em um ponto inteiro - e a perna cotada a subir de preco. Catalisador: as duas pernas decidem no periodo, a base na reuniao do RBA de 3 Nov as 03:30 GMT e a cotada no Labour Force Survey canadiano de 6 Nov as 13:30 GMT. Key risk: e o unico par do Top 5 com as duas pernas expostas no periodo; o intervalo vai de 4.87, se o RBA nao entregar e com perda de uma estrela, a 5.92 se o emprego canadiano sair fraco, e nesse extremo passa a #4.",
      base_ccy: "AUD",
      quote_ccy: "CAD"
    }
  ],
  t1_events: [
    {
      date: "2026-10-28",
      time: "00:30 GMT / 11:30 AEDT",
      release: "CPI de Setembro - ABS",
      ccy: "AUD",
      pairs: [
        "AUD/CAD",
        "AUD/CHF"
      ]
    },
    {
      date: "2026-10-28",
      time: "01:00 GMT / 14:00 NZDT",
      release: "Monetary Policy Review - RBNZ",
      ccy: "NZD",
      pairs: []
    },
    {
      date: "2026-10-28",
      time: "13:45 GMT / 09:45 ET",
      release: "Reuniao do Banco do Canada com Monetary Policy Report",
      ccy: "CAD",
      pairs: [
        "AUD/CAD"
      ]
    },
    {
      date: "2026-10-28",
      time: "18:00 GMT / 14:00 ET",
      release: "Reuniao do FOMC",
      ccy: "USD",
      pairs: [
        "USD/CHF"
      ]
    },
    {
      date: "2026-10-29",
      time: "13:15 GMT / 14:15 CET",
      release: "Reuniao do BCE",
      ccy: "EUR",
      pairs: [
        "EUR/CHF"
      ]
    },
    {
      date: "2026-10-29",
      time: "12:30 GMT / 08:30 EDT",
      release: "GDP do 3T, estimativa avancada, e PCE de Setembro - BEA",
      ccy: "USD",
      pairs: [
        "USD/CHF"
      ]
    },
    {
      date: "2026-10-30",
      time: "03:02 GMT / 12:02 JST",
      release: "Reuniao do BOJ, segundo dia, com Outlook Report",
      ccy: "JPY",
      pairs: []
    },
    {
      date: "2026-10-30",
      time: "-",
      release: "GDP flash preliminar do 3T da zona euro - Eurostat",
      ccy: "EUR",
      pairs: [
        "EUR/CHF"
      ]
    }
  ],
  t2_events: [
    {
      date: "2026-10-26",
      time: "-",
      release: "Boletim COT do Saxo com a semana a 20 Out",
      ccy: "-",
      pairs: []
    },
    {
      date: "2026-10-28",
      time: "-",
      release: "Advance Economic Indicators de Setembro - Census",
      ccy: "USD",
      pairs: [
        "USD/CHF"
      ]
    },
    {
      date: "2026-10-29",
      time: "-",
      release: "Discurso 'Liquidity against collateral: the SNB's approach'",
      ccy: "CHF",
      pairs: [
        "AUD/CHF",
        "EUR/CHF",
        "GBP/CHF",
        "USD/CHF"
      ]
    },
    {
      date: "2026-10-30",
      time: "-",
      release: "CPI da area de Toquio de Outubro - Statistics Bureau",
      ccy: "JPY",
      pairs: []
    },
    {
      date: "2026-10-30",
      time: "-",
      release: "Desemprego da zona euro de Setembro - Eurostat",
      ccy: "EUR",
      pairs: [
        "EUR/CHF"
      ]
    },
    {
      date: "2026-10-30",
      time: "-",
      release: "Labour Force Survey do Japao, Setembro e media de Jul-Set - Statistics Bureau",
      ccy: "JPY",
      pairs: []
    },
    {
      date: "2026-10-30",
      time: "-",
      release: "Resultados intercalares do SNB a 30 Set",
      ccy: "CHF",
      pairs: [
        "AUD/CHF",
        "EUR/CHF",
        "GBP/CHF",
        "USD/CHF"
      ]
    },
    {
      date: "2026-10-30",
      time: "9:30 GMT",
      release: "Blue Book, Pink Book e tabelas de supply and use - ONS",
      ccy: "GBP",
      pairs: [
        "GBP/CHF"
      ]
    },
    {
      date: "2026-11-02",
      time: "15:00 GMT / 10:00 EST",
      release: "ISM Manufacturing de Outubro",
      ccy: "USD",
      pairs: [
        "USD/CHF"
      ]
    },
    {
      date: "2026-11-03",
      time: "-",
      release: "Eleicoes intercalares nos EUA",
      ccy: "USD",
      pairs: [
        "USD/CHF"
      ]
    },
    {
      date: "2026-11-04",
      time: "13:30 GMT / 08:30 EST",
      release: "Balanca comercial de bens e servicos de Setembro - BEA",
      ccy: "USD",
      pairs: [
        "USD/CHF"
      ]
    },
    {
      date: "2026-11-05",
      time: "-",
      release: "Indices de precos industriais de Setembro na zona euro - Eurostat",
      ccy: "EUR",
      pairs: [
        "EUR/CHF"
      ]
    },
    {
      date: "2026-11-09",
      time: "-",
      release: "Boletim COT do Saxo com a semana a 27 Out",
      ccy: "-",
      pairs: []
    },
    {
      date: "2026-11-10",
      time: "-",
      release: "Summary of Opinions da reuniao do BOJ de 29-30 Out",
      ccy: "JPY",
      pairs: []
    },
    {
      date: "2026-11-16",
      time: "15 Nov 23:50 GMT / 16 Nov 08:50 JST",
      release: "GDP do 3T do Japao, primeira estimativa preliminar",
      ccy: "JPY",
      pairs: []
    },
    {
      date: "2026-11-17",
      time: "-",
      release: "Minutas da reuniao do RBA de 3 Nov",
      ccy: "AUD",
      pairs: [
        "AUD/CAD",
        "AUD/CHF"
      ]
    }
  ],
  holidays: [
    "FERIADOS E FECHOS DE PRACA NO PERIODO DE 2 A 6 NOV. HA UM fecho de praca no periodo, e e no Japao. TERCA 3 NOV - Culture Day: o calendario de feriados de mercado da propria JPX da 'Nov. 3 (Tue.) Culture Day' e os mercados da JPX estao fechados o dia inteiro. NA MESMA TERCA 3 NOV, e nao e fecho de praca: Melbourne Cup Day e feriado publico no estado de Victoria, mas a ASX negoceia sessao completa das 10:00 as 16:00 AEDT e os sistemas de pagamentos australianos RITS e BECS funcionam; o que fecha sao as agencias bancarias da area metropolitana de Melbourne. A reuniao do RBA e nesse dia. NA MESMA TERCA 3 NOV, nos EUA: e dia de eleicoes intercalares e os mercados americanos estao abertos. NOS OUTROS SEIS MERCADOS DO G8 - Estados Unidos, Reino Unido, zona euro, Canada, Nova Zelandia e Suica - nao ha feriado entre 2 e 6 Nov. O 1 de Novembro, Dia de Todos os Santos, cai a DOMINGO em 2026 e nao gera transferencia de feriado nas bolsas europeias. MUDANCA DE HORA, e importa para TRES eventos do calendario, em DUAS datas: os Estados Unidos e o Canada passam a horario de inverno no domingo 1 Nov, pelo que 08:30 ET passam a ser 13:30 GMT e nao 12:30 - e isso afecta o Employment Situation de 6 Nov, o Labour Force Survey canadiano de 6 Nov e a balanca comercial de 4 Nov. A Europa ja tinha recuado os relogios a 25 Out e esta em CET/GMT todo o periodo."
  ]
};

const COMMODITY_CONFIG = {
  week: 40,
  assets: [
    {
      asset: "GOLD",
      score: -2,
      verdict_label: "MILD BEARISH",
      icon: "🥇",
      color_class: "xau",
      pillars: [
        {
          name: "Excess Liquidity (M1/IP)",
          n: "192,988 (Set)",
          n1: "193,357 (Ago rev)",
          score: -1
        },
        {
          name: "Real Int. Rate (TIPS)",
          n: "2,63% (29 Out)",
          n1: "2,64% (22 Out)",
          score: 1
        },
        {
          name: "ETF Flows (GLD)",
          n: "1.041,08t (29 Out)",
          n1: "1.045,64t (22 Out)",
          score: -1
        },
        {
          name: "COT Gold (MM)",
          n: "105.562 (27 Out)",
          n1: "104.206 (20 Out)",
          score: -1
        },
        {
          name: "GDX Short Int.",
          n: "40,22M (15 Out)",
          n1: "36,57M (30 Set)",
          score: -1
        },
        {
          name: "Sazonalidade",
          n: "Outubro",
          n1: "Outubro",
          score: 1
        }
      ],
      thesis: "Score total -2 (MILD BEARISH), contra +2 na semana passada, e o semaforo passa de verde a amarelo. TRES dos seis pilares mudaram de score: o Excess Liquidity de 0 para -1 com o M1SL de Setembro finalmente publicado, o COT de +1 para -1 com a Managed Money a acrescentar longos, e o GDX de 0 para -1 com o settlement de 15 Out a saltar de 36,57M para 40,22M accoes. O yield real, a tonelagem do GLD e a sazonalidade ficam onde estavam.",
      key_event: "7 Nov - a sazonalidade INVERTE de sinal: Novembro e -1 na tabela do Manual, contra os +1 de Outubro, pelo que o gold perde dois pontos por mecanica de calendario antes de qualquer dado novo.",
      data_gaps: [
        "Excess Liquidity: o N-1 foi RECALCULADO por revisao de vintage - o M1SL de Agosto passou de 19.991,1 para 19.967,3 na edicao corrente do FRED, pelo que o N-1 e 193,357 e nao os 193,588 gravados. O sinal e o mesmo nas duas leituras.",
        "Real Int. Rate: o pilar vale +1 por UM ponto base, de 2,64% para 2,63%, que e a resolucao com que o FRED publica a serie. Se valesse 0, o total seria -3 e o semaforo passaria a VERMELHO.",
        "ETF Flows: a linha de 23 Out passou a existir no arquivo do emitente e da 1.041,65t; com esse par a descida seria de 0,57t em vez de 4,56t, e o sinal seria o mesmo. N e N-1 sao quintas homologas.",
        "Preco do gold: 3.875,84 USD/oz em texto datado de 30 Out da TradingEconomics; o futuro GC=F do mesmo fecho da 3.898,90, uma dispersao de 23,06 USD."
      ]
    },
    {
      asset: "CRUDE OIL",
      score: -1,
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
          n: "-1,9M bbl (23 Out)",
          n1: "-3,1M bbl (16 Out)",
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
          n: "353k (20 Out)",
          n1: "344k (13 Out)",
          score: -1
        },
        {
          name: "US Dollar (DXY)",
          n: "101,88 (30 Out)",
          n1: "101,81 (23 Out)",
          score: -1
        }
      ],
      thesis: "Score total -1 (MILD BEARISH), contra +1 na semana passada, e o semaforo passa de verde a amarelo. UM pilar mudou de score e vale o delta inteiro: o DXY, de +1 para -1, com o indice a passar de 101,81 para 101,88. O EIA continua a +1 com o quinto draw seguido, o COT a -1 com os fundos a acrescentar longos, e o ISM e o STEO a 0 por nao haver publicacao nova em nenhum dos dois.",
      key_event: "10 Nov - edicao de NOVEMBRO do STEO da EIA, data da propria pagina: o pilar US/SA Production volta a ter leitura nova depois de tres edicoes sem dado, e o conflito normativo deixa de morder nesse ciclo. E a 2 Nov sai o ISM de Outubro.",
      data_gaps: [
        "US/SA Production a 0: CONFLITO NORMATIVO em aberto. Pelo Manual, 'sem STEO novo' vale 0 e o crude da -1; pelo SOP valeria -1 e o crude daria -2. Esta semana as duas leituras caem DENTRO DA MESMA COR, ao contrario do ciclo passado.",
        "Business Confidence a 0 por ausencia de publicacao verificada na fonte: o ISM sai no primeiro dia util do mes e 1 Nov e domingo, pelo que o dado de Outubro so sai a 2 Nov.",
        "DXY: a magnitude do movimento, 0,07 pontos, e MENOR do que a dispersao medida entre duas leituras do mesmo fecho, 0,08. O sinal e o mesmo nas duas e por isso o pilar pontua; a magnitude nao sobrevive.",
        "Preco do Brent: o contrato de Dezembro expirou a 30 Out. Pela serie usada o Brent desceu 3,9%, para 112,33 USD/bbl; pela barra diaria do futuro subiu 0,8%. As duas leituras tem sinais opostos e a diferenca e o rolamento. Serie canonica por decidir."
      ]
    }
  ]
};
