// MAZO B — Plazos, Base Reguladora y porcentajes (Tema 08)
// A173 (nacimiento), A174 (extinción), fórmulas de BR y % del A13
// Decreto 1646/1972, y los plazos de control del RD 625/2014. 26 tarjetas.

const cardsPlazosT08 = [
  // --- Nacimiento del derecho (A173) ---
  { id: 1, front: "¿Qué día nace el subsidio de IT por contingencia común (CC)?", back: "El 4º día de la baja." },
  { id: 2, front: "En CC, ¿quién paga del día 4 al 15, ambos inclusive?", back: "El empresario (aunque no es propiamente pago delegado, sino que está regulado directamente así)." },
  { id: 3, front: "¿Qué día nace el subsidio de IT por contingencia profesional (CP)?", back: "El día siguiente a la baja (día 2) — el día 1 lo paga el empresario como salario íntegro." },
  { id: 4, front: "¿Qué día nace el subsidio en las situaciones especiales de MIS y DOT?", back: "El mismo día de la baja (día 1)." },
  { id: 5, front: "¿Qué día nace el subsidio en IE y en la gestación desde S39.1?", back: "El día siguiente a la baja (día 2), igual que en CP." },
  { id: 6, front: "¿Hasta cuándo se abona el subsidio en la gestación desde S39.1?", back: "Hasta la fecha del parto, salvo que la trabajadora hubiera iniciado antes una situación de riesgo durante el embarazo (entonces sigue con esa prestación)." },
  { id: 7, front: "Según el A173.3, ¿tiene derecho a IT el trabajador durante una huelga o cierre patronal?", back: "No tendrá derecho a la prestación económica por IT durante esas situaciones." },

  // --- Base Reguladora (A13 Decreto 1646/1972) ---
  { id: 8, front: "¿Cómo se calcula la BR de contingencias comunes (CC)?", back: "BC del mes anterior al inicio de la IT (excluidas horas extra) dividida entre el número de días a que corresponda esa cotización." },
  { id: 9, front: "Con salario mensual, ¿entre qué número se divide la BC para calcular la BR de CC?", back: "Entre 30, siempre — aunque el mes tenga 28, 30 o 31 días." },
  { id: 10, front: "¿Cómo se calcula la BR de contingencias profesionales (CP)?", back: "BC del mes anterior (sin horas extra) entre nº de días, más la cotización por horas extraordinarias del año natural anterior entre 365." },
  { id: 11, front: "¿Cómo se calcula la BR en contratos a tiempo parcial o fijos-discontinuos?", back: "Suma de BC de los 3 meses inmediatamente anteriores al mes previo al hecho causante, entre los días naturales del período." },

  // --- Porcentajes ---
  { id: 12, front: "¿Qué porcentaje corresponde en CC durante los días 1º al 3º?", back: "0% — no genera subsidio en absoluto." },
  { id: 13, front: "¿Qué porcentaje corresponde en CC del día 4º al 20º, y desde el 21º?", back: "60% del día 4 al 20, ambos inclusive; 75% desde el día 21 en adelante." },
  { id: 14, front: "¿Qué porcentaje corresponde en CP desde el día siguiente al hecho causante?", back: "75%." },
  { id: 15, front: "¿Qué porcentaje corresponde en la donación de órganos y tejidos (DOT)?", back: "100% de la BR desde el primer día." },

  // --- Extinción (A174) y plazos asociados ---
  { id: 16, front: "¿Cuál es el plazo máximo de duración del subsidio de IT (A174.1)?", back: "545 días naturales desde la baja médica." },
  { id: 17, front: "Extinguido el derecho por los 545 días, ¿en qué plazo se examina necesariamente el grado de IP (A174.2)?", back: "En el plazo máximo de 90 días naturales." },
  { id: 18, front: "¿Cuál es el tope máximo absoluto sumando IT + prolongación de efectos (A174.2)?", back: "730 días naturales." },
  { id: 19, front: "Si se deniega la IP antes de agotar los 545 días, ¿en qué plazo puede el INSS emitir una nueva baja por la misma patología?", back: "Dentro de los 180 días naturales posteriores a la resolución denegatoria (A174.1)." },
  { id: 20, front: "Extinguido el derecho tras 545 días, ¿cuándo puede generarse un nuevo derecho por la misma patología (A174.3)?", back: "Si media un período superior a 180 días naturales desde la resolución de la IP." },
  { id: 21, front: "¿Cuánto tiempo dispone la empresa para realizar ajustes razonables tras la resolución de IP (A48.2 ET, reforma Ley 2/2025)?", back: "3 meses desde la notificación de la resolución." },
  { id: 22, front: "¿Cuánto tiempo tiene el trabajador para manifestar su voluntad de mantener la relación laboral tras la IP?", back: "10 días naturales desde la notificación de la resolución." },

  // --- Control (RD 625/2014) ---
  { id: 23, front: "En un proceso de duración estimada muy corta (XS, <5 días), ¿cuándo se emite el parte de alta?", back: "En el mismo acto médico que el parte de baja." },
  { id: 24, front: "En un proceso de duración larga (L, ≥61 días), ¿en qué plazo máximo debe fijarse la primera revisión?", back: "No debe exceder los 14 días naturales desde la baja inicial; los sucesivos partes, máximo 35 días entre sí." },
  { id: 25, front: "¿Con qué antelación mínima debe citarse al trabajador a un reconocimiento médico de control (A9 RD 625/2014)?", back: "4 días hábiles." },
  { id: 26, front: "Si el trabajador no comparece al reconocimiento, ¿cuántos días hábiles tiene para justificar la ausencia?", back: "10 días hábiles, coincidiendo con el plazo de suspensión cautelar (A175.3 LGSS)." }
];

// Registro en el motor genérico (anki_engine.js) — no tocar el contenido de arriba
window.ankiDecks = window.ankiDecks || [];
window.ankiDecks.push({ name: "B · Plazos, Base Reguladora y porcentajes", cards: cardsPlazosT08 });
