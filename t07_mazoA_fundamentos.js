// MAZO A — Conceptos básicos, riesgo protegido y prestaciones (Tema 07)
// A42-A43, A155, A238, A314 (conceptos) + A156-A160 (contingencias)
// + A44, A53-A64, A161-A164 (prestaciones). 26 tarjetas.

const cardsFundamentosT07 = [
  // --- Bloque 1: Conceptos básicos de la acción protectora ---
  { id: 1, front: "Según el A42 LGSS, ¿qué 3 grandes bloques comprende la acción protectora del sistema?", back: "Asistencia sanitaria, recuperación profesional y las prestaciones (económicas, familiares y de servicios sociales)." },
  { id: 2, front: "¿Qué naturaleza tiene siempre la totalidad de las prestaciones derivadas de AT/EP (A109)?", back: "Contributiva, sin excepción." },
  { id: 3, front: "¿Qué excluye el A155 (Régimen General) de la acción protectora general del A42?", back: "El cese de actividad (exclusivo del RETA) y las prestaciones no contributivas." },
  { id: 4, front: "¿Qué excluye el A314 (RETA) de la acción protectora general del A42?", back: "El desempleo (exclusivo del RG) y las prestaciones no contributivas." },
  { id: 5, front: "¿Puede la SS ser objeto de contratación colectiva (A43)?", back: "No, salvo la excepción de las mejoras voluntarias." },
  { id: 6, front: "¿Qué modalidad de prestaciones admite mejora voluntaria?", back: "Solo la modalidad contributiva." },
  { id: 7, front: "¿Cuáles son las dos vías de mejora voluntaria en el RG (A238)?", back: "Mejora directa de prestaciones y tipos de cotización adicionales." },

  // --- Bloque 2: Riesgo protegido ---
  { id: 8, front: "¿Qué prestaciones aplican tanto por contingencia común como profesional?", back: "IT, IP y MYS (muerte y supervivencia)." },
  { id: 9, front: "¿Qué prestaciones solo aplican por contingencia común?", back: "NYCM, desempleo, jubilación y prestaciones familiares." },
  { id: 10, front: "¿Son el riesgo durante el embarazo y la lactancia natural contingencias comunes?", back: "No, son riesgos profesionales dentro de las Contingencias Profesionales." },
  { id: 11, front: "Según el A156.3, ¿qué se presume salvo prueba en contrario?", back: "Que son AT las lesiones sufridas durante el tiempo y lugar del trabajo." },
  { id: 12, front: "¿Tienen la insolación y el rayo la consideración de fuerza mayor extraña al trabajo (A156.4)?", back: "No, en ningún caso — por tanto SÍ son AT." },
  { id: 13, front: "¿Qué NO tiene la consideración de AT según el A156.4?", back: "Los debidos a fuerza mayor extraña al trabajo, y los debidos a dolo o imprudencia temeraria del trabajador." },
  { id: 14, front: "¿La imprudencia profesional impide la calificación de AT (A156.5)?", back: "No, SÍ es AT si deriva de la confianza del ejercicio habitual del trabajo." },
  { id: 15, front: "¿Cuántos grupos de agentes fija el Anexo I del RD 1299/2006 para las EP?", back: "6 grupos: químicos, físicos, biológicos, inhalación, piel y carcinogénicos." },
  { id: 16, front: "¿Qué diferencia hay entre el Anexo I y el Anexo II del RD 1299/2006?", back: "Anexo I: EP ya reconocidas. Anexo II: EP sospechadas, pendientes de reconocimiento." },

  // --- Bloque 3: Prestaciones ---
  { id: 17, front: "¿Cuál es la diferencia entre subsidio y pensión?", back: "El subsidio es periódico y temporal; la pensión es periódica y vitalicia (revisable)." },
  { id: 18, front: "¿Qué prestaciones están exentas de tributación en IRPF según el A44.2?", back: "Entre otras: IP Absoluta/Gran Invalidez, NYCM, pensiones de orfandad, auxilio por defunción, IMV ≤1,5x IPREM." },
  { id: 19, front: "¿Entre qué porcentajes oscila el recargo del A164 por falta de medidas de seguridad?", back: "Entre el 30% y el 50%, según la gravedad." },
  { id: 20, front: "¿Es asegurable el recargo del A164?", back: "No, es responsabilidad directa del empresario y no puede asegurarse." },
  { id: 21, front: "¿Sobre qué periodo del IPC se calcula la revalorización anual de pensiones (A58.2)?", back: "Los 12 meses previos a diciembre del año anterior." },
  { id: 22, front: "¿Qué ocurre con la revalorización si el IPC de referencia es negativo (A58.3)?", back: "El importe no varía (no baja)." },
  { id: 23, front: "¿Cuál es el plazo de prescripción del derecho al reconocimiento de las prestaciones (A53)?", back: "5 años, desde el hecho causante." },
  { id: 24, front: "¿Cuál es el plazo de caducidad del derecho al percibo de una prestación (A54)?", back: "1 año, desde la notificación o el vencimiento de cada mensualidad." },
  { id: 25, front: "¿Cuál es la retroactividad máxima de los efectos económicos de una revisión de prestación (A53)?", back: "3 meses desde la fecha de la solicitud." },
  { id: 26, front: "¿Qué pensiones son imprescriptibles?", back: "La Jubilación (A212) y las de Muerte y Supervivencia (A230), salvo el Auxilio por defunción." }
];

// Registro en el motor genérico (anki_engine.js) — no tocar el contenido de arriba
window.ankiDecks = window.ankiDecks || [];
window.ankiDecks.push({ name: "A · Conceptos, riesgo protegido y prestaciones", cards: cardsFundamentosT07 });
