// MAZO B — Otros artículos de la CE, competencias y trampas de examen (Tema 1)
// A25, A39, A40, A42, A43, A49, A50, A129, A148-A149 + distractores típicos. 21 tarjetas.

const cardsTrampas = [
  // --- Bloque 2: Otros artículos constitucionales ---
  { id: 1, front: "¿Qué colectivo menciona la CE específicamente con derecho a la SS, además del general?", back: "Los reclusos (A25)." },
  { id: 2, front: "Según el A25, ¿a qué tiene derecho el recluso en todo caso?", back: "A un trabajo remunerado y a los beneficios de la SS." },
  { id: 3, front: "¿Qué tres tipos de protección de la familia asegura el A39 CE (mnemotecnia SEJ)?", back: "Social, Económica y Jurídica." },
  { id: 4, front: "TRAMPA: ¿protege el A39 CE la familia de forma laboral, económica y jurídica?", back: "No, es social, económica y jurídica (SEJ), no laboral." },
  { id: 5, front: "¿Hacia qué política orienta especialmente el A40 CE a los poderes públicos?", back: "Hacia el pleno empleo." },
  { id: 6, front: "Según el A40.2 CE, ¿qué fomentarán los poderes públicos?", back: "La formación y readaptación profesionales." },
  { id: 7, front: "Según el A40.2 CE, ¿por qué velarán los poderes públicos?", back: "Por la seguridad e higiene en el trabajo." },
  { id: 8, front: "¿Quién vela por los derechos de los emigrantes españoles según el A42 CE?", back: "El Estado." },
  { id: 9, front: "¿Hacia qué orienta el Estado su política con los emigrantes (A42)?", back: "Hacia su retorno." },
  { id: 10, front: "TRAMPA: ¿protege el A43 CE la salud pública y privada?", back: "No, el texto dice solo 'salud pública'." },
  { id: 11, front: "¿Qué reforma reciente afecta al A49 CE (discapacidad)?", back: "La reforma del 14/feb/2024." },
  { id: 12, front: "Mnemotecnia: ¿qué significa PAPA en el A50 CE?", back: "Pensiones Adecuadas y Periódicamente Actualizadas." },
  { id: 13, front: "Mnemotecnia: ¿qué significa VOCS en el A50 CE?", back: "Vivienda, Ocio, Cultura, Salud (servicios sociales)." },
  { id: 14, front: "¿En qué título de la CE está el A129 (participación)?", back: "En el Título VII (Economía y Hacienda), no en el de derechos fundamentales." },
  { id: 15, front: "¿Qué fomenta el A129 CE además de la participación?", back: "Las sociedades cooperativas y el acceso a los medios de producción." },

  // --- Bloque: competencias Estado / CCAA ---
  { id: 16, front: "¿Qué competencia da el A148.20 CE a las CCAA?", back: "La asistencia social." },
  { id: 17, front: "¿Qué competencia da el A148.21 CE a las CCAA?", back: "Sanidad e higiene." },
  { id: 18, front: "¿Qué competencia da el A149.16 CE al Estado?", back: "Sanidad exterior y bases y coordinación general de la sanidad." },
  { id: 19, front: "¿Qué competencia da el A149.17 CE al Estado?", back: "La legislación básica y el régimen económico de la SS." },
  { id: 20, front: "TRAMPA: ¿es la asistencia social competencia del Estado o de las CCAA?", back: "De las CCAA (A148.20), no del Estado." },
  { id: 21, front: "Torre de control A40 CE: ¿qué realizarán los poderes públicos de manera especial?", back: "Una política orientada al pleno empleo." }
];

// Registro en el motor genérico (anki_engine.js) — no tocar el contenido de arriba
window.ankiDecks = window.ankiDecks || [];
window.ankiDecks.push({ name: "B · Otros artículos CE, competencias y trampas", cards: cardsTrampas });
