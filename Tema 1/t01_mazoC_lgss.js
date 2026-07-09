// MAZO C — La LGSS: estructura y prestaciones familiares (Tema 1)
// RD Legislativo 8/2015, títulos, SEA vs SETA, prestaciones familiares
// contributivas vs no contributivas. 22 tarjetas.

const cardsLGSS = [
  // --- Bloque 3: Texto refundido de la LGSS ---
  { id: 1, front: "¿Qué tipo de norma es la LGSS actual?", back: "Un Real Decreto Legislativo (RD Legislativo 8/2015)." },
  { id: 2, front: "¿Cuándo se aprobó el RD Legislativo 8/2015?", back: "El 30 de octubre de 2015." },
  { id: 3, front: "¿A qué norma sustituyó el RD Legislativo 8/2015?", back: "Al RD Legislativo 1/1994." },
  { id: 4, front: "¿Cuántos títulos tiene la LGSS?", back: "6." },
  { id: 5, front: "¿Cuántos artículos tiene la LGSS?", back: "373." },
  { id: 6, front: "Mnemotecnia 'Renault 8, 45 y 61': ¿a qué corresponden esos números?", back: "8 disposiciones finales, 45 transitorias, 61 adicionales." },
  { id: 7, front: "¿Qué regula el Título II de la LGSS?", back: "El Régimen General (prestaciones contributivas)." },
  { id: 8, front: "¿Qué regula el Título III de la LGSS?", back: "La protección por desempleo." },
  { id: 9, front: "¿Qué regula el Título IV de la LGSS?", back: "El RETA (incluye el Sistema Especial SETA)." },
  { id: 10, front: "¿Qué regula el Título V de la LGSS?", back: "La protección por cese de actividad." },
  { id: 11, front: "¿Qué regula el Título VI de la LGSS?", back: "Las prestaciones no contributivas." },
  { id: 12, front: "TRAMPA: ¿están el desempleo y el cese de actividad dentro del Título II?", back: "No, tienen títulos propios (III y V respectivamente)." },
  { id: 13, front: "¿Qué capítulo del Título II regula los Sistemas Especiales de Hogar y Agrarios?", back: "El capítulo XVIII." },
  { id: 14, front: "Diferencia SEA vs SETA: ¿cuál es por cuenta ajena?", back: "El SEA (Sistema Especial Agrario, dentro del Régimen General)." },
  { id: 15, front: "Diferencia SEA vs SETA: ¿cuál es por cuenta propia?", back: "El SETA (dentro del RETA)." },

  // --- Bloque 4: Prestaciones familiares ---
  { id: 16, front: "¿Dónde se regulan las prestaciones familiares contributivas?", back: "En el Título II (A235-A237 LGSS)." },
  { id: 17, front: "¿Dónde se regulan las prestaciones familiares no contributivas?", back: "En el Título VI (A352-A372 LGSS)." },
  { id: 18, front: "TRAMPA: ¿es 'contributiva' sinónimo de ayuda económica en prestaciones familiares?", back: "No, contributiva = NO económica (cotización/jornada); no contributiva = SÍ económica." },
  { id: 19, front: "¿Qué regula el A237 LGSS sobre excedencia por cuidado?", back: "Hasta 3 años cotizados al 100%, por nacimiento o cuidado de familiar hasta 2º grado." },
  { id: 20, front: "¿Qué regula el A352-A356 LGSS?", back: "La asignación económica por hijo o menor acogido a cargo." },
  { id: 21, front: "¿Qué regula el A363-A368 LGSS?", back: "La incapacidad no contributiva (pensión N/C)." },
  { id: 22, front: "¿Qué regula el A369-A372 LGSS?", back: "La jubilación no contributiva (pensión N/C)." }
];

// Registro en el motor genérico (anki_engine.js) — no tocar el contenido de arriba
window.ankiDecks = window.ankiDecks || [];
window.ankiDecks.push({ name: "C · Estructura de la LGSS y prestaciones familiares", cards: cardsLGSS });
