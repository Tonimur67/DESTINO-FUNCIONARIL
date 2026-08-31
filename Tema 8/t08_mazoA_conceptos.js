// MAZO A — Conceptos básicos, causas y beneficiarios de la IT (Tema 08)
// A169 (concepto y situaciones especiales), A172 (beneficiarios y PMC),
// A165 (condiciones generales). 24 tarjetas.

const cardsConceptosT08 = [
  // --- Concepto de IT y causas ---
  { id: 1, front: "Según el A169.1.a) LGSS, ¿cuál es la duración máxima de la IT por causa ordinaria (EC/AT/EP/ANL) y su posible prórroga?", back: "365 días, prorrogables por otros 180 días cuando se presuma que el trabajador puede ser dado de alta por curación." },
  { id: 2, front: "¿Cuál es la duración máxima de los períodos de observación por enfermedad profesional (A169.1.b)?", back: "180 días, prorrogables por otros 180 días cuando se estime necesario para el estudio y diagnóstico." },
  { id: 3, front: "¿Cuáles son las 4 situaciones especiales de IT por contingencias comunes?", back: "MIS (menstruación incapacitante secundaria), IE (interrupción del embarazo), Gestación desde S39.1, y DOT (donación de órganos o tejidos)." },
  { id: 4, front: "¿Desde cuándo está en vigor la situación especial de IT por donación de órganos o tejidos (DOT)?", back: "Desde el 3 de marzo de 2025 (Ley 6/2024)." },
  { id: 5, front: "Si la interrupción del embarazo (IE) se debe a un AT/EP, ¿qué situación especial se aplica?", back: "Ninguna especial — se convierte en contingencia profesional pura, que prevalece por tener mejores condiciones." },
  { id: 6, front: "¿Desde cuándo cuenta el plazo de recaída (180 días) según el A169.2?", back: "Desde la fecha de efectos de la alta médica anterior, no desde el hecho causante original." },
  { id: 7, front: "¿Qué situación especial NUNCA se considera recaída, sino siempre proceso nuevo?", back: "La menstruación incapacitante secundaria (MIS)." },
  { id: 8, front: "¿Qué determina el A169.3 sobre la incomparecencia a convocatorias médicas del INSS o las mutuas?", back: "Producirá la suspensión cautelar del derecho, para comprobar si la incomparecencia fue o no justificada." },

  // --- Beneficiarios y PMC (A172) ---
  { id: 9, front: "Según el A172, ¿cuál es el PMC exigido para IT por enfermedad común?", back: "180 días dentro de los 5 años inmediatamente anteriores al hecho causante." },
  { id: 10, front: "¿Se exige PMC para IT derivada de accidente (sea o no de trabajo) o enfermedad profesional?", back: "No, no se exige ningún período mínimo de cotización." },
  { id: 11, front: "¿Se exige PMC para las situaciones especiales de MIS, IE y DOT?", back: "No se exige — solo la gestación desde S39.1 exige PMC (el de NYCM, vía A178.1)." },
  { id: 12, front: "¿Qué PMC se exige para la situación especial de gestación desde S39.1?", back: "El mismo que se exige para la prestación de Nacimiento y Cuidado del Menor (A178.1), según la edad de la interesada." },

  // --- A165: condiciones generales ---
  { id: 13, front: "Según el A165.1, ¿cuál es el requisito general (además de los particulares) para causar derecho a las prestaciones del RG?", back: "Estar afiliado y en alta en dicho Régimen, o en situación asimilada a la de alta, al sobrevenir la contingencia." },
  { id: 14, front: "Según el A165.4, ¿se exigen períodos previos de cotización para prestaciones derivadas de accidente o enfermedad profesional?", back: "No se exigirán, salvo disposición legal expresa en contrario." },

  // --- Contratos especiales (A247, A249bis) ---
  { id: 15, front: "Desde la reforma de abril 2025 (RD-ley 11/2024), ¿qué se tiene en cuenta para los trabajadores a tiempo parcial según el A247.1?", back: "Los distintos períodos en alta con contrato a tiempo parcial, cualquiera que sea la duración de la jornada realizada." },
  { id: 16, front: "¿Qué coeficiente se aplica a los trabajadores fijos-discontinuos según el A247.2, y con qué límite?", back: "Coeficiente de 1,5, sin que el total de días computables como cotizados anualmente pueda superar los días naturales del año." },
  { id: 17, front: "Según el A249bis, ¿cómo se computa cada día de trabajo en contratos de duración igual o inferior a 5 días?", back: "Como 1,4 días de cotización, sin que en ningún caso pueda computarse mensualmente más días que los del mes." },
  { id: 18, front: "¿A qué contratos NO se aplica el coeficiente 1,4 del A249bis?", back: "A los contratos a tiempo parcial, de relevo a tiempo parcial y fijo-discontinuo." },

  // --- Situaciones asimiladas ---
  { id: 19, front: "Menciona 3 situaciones asimiladas a la de alta a efectos de IT.", back: "Percepción de desempleo contributivo, vacaciones anuales retribuidas no disfrutadas, y traslado por la empresa fuera del territorio nacional (entre otras)." },
  { id: 20, front: "¿Aplica la situación asimilada de \"víctima de violencia de género\" a las trabajadoras por cuenta ajena?", back: "No aplica a la suspensión del contrato de una trabajadora por cuenta ajena — solo a la trabajadora por cuenta propia." },

  // --- Ejemplo práctico ---
  { id: 21, front: "Marta estuvo en IT 45 días (1/abr-15/may) y vuelve a IT por la misma patología el 30/jun. ¿Es recaída o nuevo proceso?", back: "Recaída — está dentro de los 180 días desde el alta del 15/mayo, así que se suma al proceso anterior (no se pone a cero)." },
  { id: 22, front: "Si Marta accediese a IT por la misma patología 180 días después del 15/mayo, ¿qué ocurriría?", back: "Se iniciaría una nueva IT (proceso nuevo, no recaída)." },
  { id: 23, front: "¿Qué grupos de agentes fija el Anexo I del RD 1299/2006 para las enfermedades profesionales?", back: "6 grupos: químicos, físicos, biológicos, inhalación, piel y carcinogénicos (dato transversal del tema de acción protectora)." },
  { id: 24, front: "¿Qué régimen de responsabilidad tiene el reintegro de prestaciones indebidas del IMV frente al régimen general?", back: "Solidaria en el IMV (Ley 19/2021), frente a subsidiaria en el régimen general (A55) — dato de conexión con otros temas." }
];

// Registro en el motor genérico (anki_engine.js) — no tocar el contenido de arriba
window.ankiDecks = window.ankiDecks || [];
window.ankiDecks.push({ name: "A · Conceptos, causas y beneficiarios", cards: cardsConceptosT08 });
