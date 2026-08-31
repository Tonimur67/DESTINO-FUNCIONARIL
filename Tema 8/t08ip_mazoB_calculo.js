// MAZO B — Base Reguladora, cuantía y compatibilidades (Tema 08, Parte 2)
// A196 (prestaciones económicas), cálculo de BR por contingencia (EC/ANL/AT-EP),
// porcentajes por grado, TA sustitutivo, IPT cualificada, complemento GI,
// A198 (compatibilidades), Anexo III. 27 tarjetas.

const cardsCalculoIP = [
  // --- Prestaciones económicas por grado (A196) ---
  { id: 1, front: "¿En qué consiste la prestación de IPP (A196.1)?", back: "En una cantidad a tanto alzado (TA) de 24 mensualidades de la BR que sirvió de base a la prestación de IT de la que deriva la IP." },
  { id: 2, front: "¿En qué consisten las prestaciones de IPT, IPA y GI?", back: "Todas son pensión vitalicia (la IPT, excepcionalmente, puede sustituirse por una indemnización a tanto alzado si el beneficiario es menor de 60 años)." },
  { id: 3, front: "¿Cómo se compone el complemento de la Gran Incapacidad (A196.4)?", back: "45% de la base mínima de cotización vigente en el hecho causante + 30% de la última base de cotización del trabajador correspondiente a la contingencia de la que deriva la IP." },
  { id: 4, front: "Mnemotecnia del complemento de GI: ¿a qué hito va ligado el 45% y a qué hito el 30%?", back: "45% (dos palabras) → Hecho Causante (dos palabras). 30% (una palabra) → Trabajador (una palabra)." },
  { id: 5, front: "¿Puede el complemento de GI tener un importe inferior al 45% de la pensión percibida sin el complemento?", back: "No, en ningún caso." },

  // --- Cálculo de BR: Enfermedad Común ---
  { id: 6, front: "¿Cómo se calcula la BR en EC cuando se exigen 8 años o más de PMC (trabajador de 52 años o más)?", back: "BR = suma de BC de los 96 meses anteriores al mes previo (2 meses atrás) al HC, dividido entre 112." },
  { id: 7, front: "¿Por qué se divide entre 112 en el cálculo de BR de EC con 8+ años de PMC?", back: "96 meses = 8 años de cotización implícitos = 16 pagas extraordinarias. 96 + 16 = 112." },
  { id: 8, front: "En la integración de lagunas de cotización, ¿con qué base se integran las primeras 48 mensualidades sin cotizar?", back: "Con la base mínima de cotización." },
  { id: 9, front: "En la integración de lagunas, ¿con qué base se integra el resto de mensualidades más allá de las primeras 48?", back: "Con el 50% de la base mínima de cotización." },
  { id: 10, front: "¿Cómo se calcula la BR en EC cuando se exige menos de 8 años de PMC (trabajador menor de 52 años)?", back: "BR = suma de BC de X meses (los del PMC exigido) dividido entre (X × 1,166)." },
  { id: 11, front: "¿De dónde sale el coeficiente 1,166 usado en el caso de menos de 8 años de PMC?", back: "De dividir 112 entre 96 (el mismo razonamiento del caso anterior, aplicado como coeficiente para cualquier número de meses)." },
  { id: 12, front: "¿A partir de qué edad se exigen 8 años o más de PMC en enfermedad común?", back: "52 años (viene de la fórmula de carencia genérica para mayores de 31: (52−20)/4 = 8)." },
  { id: 13, front: "Al resultado de la BR de EC, ¿qué se le aplica después según el A210.1 (igual que en Jubilación)?", back: "El porcentaje según los años de cotización: 50% por los primeros 15 años, y un incremento progresivo por cada mes adicional hasta el 100%." },
  { id: 14, front: "Si un trabajador de EC no alcanza los 15 años de cotización, ¿qué porcentaje se le aplica a la BR según A210.1?", back: "El 50%." },

  // --- Cálculo de BR: ANL y AT/EP ---
  { id: 15, front: "¿Cómo se calcula la BR en Accidente No Laboral (ANL), desde alta?", back: "BR = suma de BC de 24 meses ininterrumpidos, dividido entre 28. El período de 24 meses se elige por el interesado dentro de los 7 años inmediatamente anteriores al HC." },
  { id: 16, front: "En la BR de ANL, ¿se aplica integración de lagunas o actualización al IPC?", back: "No, ninguna de las dos (al ser solo 24 meses, no hay margen para eso)." },
  { id: 17, front: "¿Cómo se calcula la BR en ANL desde no alta?", back: "Igual que en EC: suma de BC de los 96 meses anteriores al mes previo (2 meses atrás) al HC, dividido entre 112." },
  { id: 18, front: "¿Sobre qué se calcula la BR en AT/EP: sobre cotizaciones pasadas promediadas, o sobre salarios reales del momento del accidente?", back: "Sobre salarios reales vigentes al sobrevenir la incapacidad, topados entre el máximo y mínimo de cotización." },
  { id: 19, front: "¿Cuál es la fórmula de la BR en AT/EP?", back: "BR = (A + B + C) / 12, donde A = sueldo y antigüedad diarios × 365, B = pagas extra/beneficios del año anterior, C = pluses/horas extra del año anterior por día trabajado × 273." },
  { id: 20, front: "¿Por qué se divide entre 12 en la BR de AT/EP y no entre un número mayor como en EC?", back: "Porque las contingencias profesionales se perciben en 12 pagas, no en 14." },

  // --- Porcentajes, TA sustitutivo, IPT cualificada ---
  { id: 21, front: "¿Qué porcentaje de la BR corresponde a IPT, IPA y GI respectivamente (sin cualificar)?", back: "IPT: 55%. IPA: 100%. GI: pensión de IPT o IPA + complemento." },
  { id: 22, front: "¿Qué requisitos exige la indemnización a TA sustitutiva de la pensión de IPT?", back: "Ser menor de 60 años, lesiones no susceptibles de modificación, trabajar (o invertir en autónomo), y solicitud dentro de los 3 años siguientes a la resolución/sentencia firme." },
  { id: 23, front: "¿Cuántas mensualidades corresponden a la indemnización a TA de IPT para un trabajador de 59 años, y para uno menor de 54?", back: "59 años: 12 mensualidades. Menor de 54: 84 mensualidades (el máximo, fijo desde ahí hacia abajo)." },
  { id: 24, front: "¿A qué porcentaje sube la IPT cuando se cualifica con el incremento del 20%, y qué edad mínima se exige?", back: "Del 55% al 75% de la BR, exigiendo 55 años o más y presunción de dificultad de inserción laboral." },
  { id: 25, front: "¿Son compatibles entre sí la sustitución por TA y la IPT cualificada del 20%?", back: "No, son incompatibles entre sí (opciones excluyentes)." },
  { id: 26, front: "¿Qué ocurre con el incremento del 20% de la IPT cualificada si el beneficiario empieza a trabajar?", back: "Se suspende el incremento (se sigue cobrando el 55% base, que sí es compatible con el trabajo si las funciones no coinciden)." },

  // --- Compatibilidades (A198) ---
  { id: 27, front: "¿Qué ocurre con la pensión de IPA/GI si el pensionista se da de alta en un régimen de la SS por trabajar?", back: "Se suspende el pago de la pensión (no se extingue); se reanuda al cesar el trabajo. El complemento de GI no se suspende." },
];

window.ankiDecks = window.ankiDecks || [];
window.ankiDecks.push({ name: "B · Base Reguladora, cuantía y compatibilidades", cards: cardsCalculoIP });
