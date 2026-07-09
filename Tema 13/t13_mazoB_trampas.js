// MAZO B — Trampas de examen y Torres de control (Tema 13)
// Distractores típicos señalados por el profesor + las 3 preguntas reales
// de "Torre de control" del PDF. 14 tarjetas.

const cardsTrampas = [
  // --- Trampas de examen recogidas a lo largo del tema ---
  { id: 1, front: "TRAMPA: ¿es correcto decir que el sistema financiero de la SS es de capitalización?", back: "No. Es un sistema de reparto para todos los regímenes." },
  { id: 2, front: "TRAMPA: ¿pueden las mutuas ganar dinero con la gestión de las contingencias?", back: "No, las mutuas no tienen ánimo de lucro." },
  { id: 3, front: "TRAMPA: si el trabajador no estaba de alta y sufre AT/EP, ¿quién constituye el capital coste?", back: "El empresario, no la mutua." },
  { id: 4, front: "TRAMPA: ¿gestiona la Intervención General de la SS los recursos financieros?", back: "No, solo fiscaliza. La gestión corresponde siempre a la TGSS." },
  { id: 5, front: "TRAMPA: ¿tiene el INSS competencias de gestión financiera?", back: "No, el INSS gestiona prestaciones; la TGSS gestiona los recursos financieros." },
  { id: 6, front: "TRAMPA: ¿tienen las 3 cuotas de recaudación conjunta (desempleo, FOGASA, FP) aportación de trabajador y empresario?", back: "No, el FOGASA es exclusivamente a cargo del empresario." },
  { id: 7, front: "TRAMPA: ¿puede el DG de la TGSS delegar su condición de Tesorero General?", back: "No, solo puede habilitar a otros para ordenar pagos, nunca delega el título de Tesorero General." },
  { id: 8, front: "TRAMPA: ¿tiene el fondo de maniobra un límite fijo del 3% siempre?", back: "No, puede ampliarse hasta el 7% por razones fundadas." },
  { id: 9, front: "TRAMPA: ¿se pueden hacer pagos de cualquier importe con el fondo de maniobra?", back: "No, el límite general es 12.020,24€ (salvo excepciones como teléfono o luz)." },
  { id: 10, front: "TRAMPA: las pensiones de contingencias comunes, ¿cuántas pagas cobran?", back: "14 pagas (las de contingencia profesional cobran 12)." },
  { id: 11, front: "TRAMPA: ¿puede el banco cobrar comisión al pensionista por el pago de su prestación?", back: "No, el pago no puede generar gasto alguno para el beneficiario." },

  // --- Torres de control reales del profesor ---
  { id: 12, front: "Torre de control: ¿qué NO es recurso para financiar prestaciones contributivas (A109)?", back: "Las aportaciones progresivas del Estado (letra a)." },
  { id: 13, front: "Torre de control: ¿en qué contingencia se aplica el MEI en todos los regímenes?", back: "En la jubilación contributiva." },
  { id: 14, front: "Torre de control: ¿cuál de estos NO es un tipo de pago del RD 696/2018?", back: "Los pagos con cargo al fondo de reserva (ese fondo se regula en la LGSS, no en el RD 696/2018)." }
];

// Registro en el motor genérico (anki_engine.js) — no tocar el contenido de arriba
window.ankiDecks = window.ankiDecks || [];
window.ankiDecks.push({ name: "B · Trampas de examen y Torres de control", cards: cardsTrampas });
