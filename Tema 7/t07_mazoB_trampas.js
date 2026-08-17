// MAZO B — Trampas de examen y Torres de control (Tema 07)
// Distractores señalados por el profesor + las 13 preguntas de "Torre de
// control" / mini-test que aparecen en el propio tema. 24 tarjetas.

const cardsTrampasT07 = [
  // --- Trampas de examen recogidas a lo largo del tema ---
  { id: 1, front: "TRAMPA: ¿son las prestaciones familiares contributivas económicas (dan dinero)?", back: "No. Las contributivas dan cotización (A235-237); las no contributivas sí son económicas (IMV)." },
  { id: 2, front: "TRAMPA: ¿por qué el A47 (estar al corriente) aplica al RETA y no al RG?", back: "Porque en el RG el responsable de cotizar es el empresario, no el trabajador; en el RETA sí." },
  { id: 3, front: "TRAMPA: ¿son AT los actos de salvamento realizados fuera del ámbito laboral?", back: "No, solo si tienen conexión con el trabajo que se estaba desempeñando." },
  { id: 4, front: "TRAMPA: ¿confunde el examen el mes de referencia de la revalorización del A58.2?", back: "Sí, el mes de cierre correcto es noviembre (12 meses previos a diciembre), no enero." },
  { id: 5, front: "TRAMPA: ¿desde cuándo se cuenta la retroactividad máxima de 3 meses del A53?", back: "Desde la fecha de la SOLICITUD, no desde el hecho causante." },
  { id: 6, front: "TRAMPA: ¿cuál es el plazo de prescripción del reintegro de prestaciones indebidas (A55)?", back: "4 años (distinto de los 5 años de prescripción del reconocimiento, A53)." },
  { id: 7, front: "TRAMPA: ¿participa la TGSS en el procedimiento especial de reintegro (Caso I, RD 148/1996)?", back: "No, solo interviene la entidad gestora. La TGSS solo entra en el Caso II." },
  { id: 8, front: "TRAMPA: ¿es solidaria o subsidiaria la responsabilidad del reintegro de indebidas en el IMV?", back: "Solidaria (Ley 19/2021), a diferencia del régimen general (A55) que es subsidiaria." },
  { id: 9, front: "TRAMPA: ¿qué contingencias NO exigen PMC?", back: "AT + EP + ANL (no solo AT/EP — el accidente no laboral también está exento)." },
  { id: 10, front: "TRAMPA: ¿cubre el alta de pleno derecho la prestación de NYCM?", back: "No directamente. Cubre AT/EP + Asistencia Sanitaria (EC/ANL/maternidad) + Desempleo." },
  { id: 11, front: "TRAMPA: si incumples un aplazamiento de cuotas (A47), ¿se aplica el procedimiento especial de descuento?", back: "No, se suspende directamente la prestación y se rehabilita al saldar toda la deuda." },
  { id: 12, front: "TRAMPA: ¿está el ISM (Instituto Social de la Marina) regulado en el A66 LGSS como entidad gestora?", back: "No, el ISM es entidad gestora pero está regulado en el RD 504/2011, fuera del A66." },
  { id: 13, front: "TRAMPA: ¿qué plazo de responsabilidad solidaria aplica la empresa principal por obligaciones salariales de la contrata?", back: "1 año (distinto de los 3 años para obligaciones de Seguridad Social)." },
  { id: 14, front: "TRAMPA: ¿excluye el A168 LGSS (subsidiaria) la construcción de vivienda particular igual que el A42 ET (solidaria)?", back: "No, el A168 solo excluye la reparación; no menciona expresamente la construcción." },
  { id: 15, front: "TRAMPA: ¿participan los empresarios colaboradores en el mecanismo de automaticidad y anticipo (Cap. 7)?", back: "No, a diferencia del A167 (Cap. 6) — pueden ser precisamente los infractores." },
  { id: 16, front: "TRAMPA: ¿incluye el cálculo del anticipo el recargo del A164 por falta de medidas de seguridad?", back: "No. Incluye interés de capitalización y recargo por falta de aseguramiento, pero no el A164." },
  { id: 17, front: "TRAMPA: la renta cierta temporal de 25 años y 30% del salario, ¿aplica también a EP?", back: "No, solo a AT (muerte mediata o inmediata), sin familiares con derecho a pensión." },

  // --- Torres de control del tema ---
  { id: 18, front: "Torre de control: de acuerdo al A42, la acción protectora limita el ámbito de extensión de...", back: "Régimen General, Regímenes Especiales y las prestaciones no contributivas." },
  { id: 19, front: "Torre de control: las mejoras voluntarias del A43, ¿en qué caso son voluntarias?", back: "Siempre — y solo caben para prestaciones contributivas." },
  { id: 20, front: "Torre de control: ¿es AT lo debido a fuerza mayor extraña al trabajo (A156)?", back: "No, es uno de los supuestos expresamente excluidos." },
  { id: 21, front: "Torre de control: recolector de uvas con insolación por jornadas al aire libre, ¿qué carácter adquiere?", back: "Será considerado accidente de trabajo (la insolación nunca es fuerza mayor extraña)." },
  { id: 22, front: "Torre de control: ¿cuál es el plazo de prescripción del reconocimiento de prestaciones?", back: "5 años." },
  { id: 23, front: "Torre de control: ¿quién asume el coste de la IT cuando el trabajador no estaba de alta por incumplimiento empresarial?", back: "El empresario (aunque haya automaticidad de las prestaciones frente al trabajador)." },
  { id: 24, front: "Torre de control: si el mismo accidente ocurre en casa (contingencia común) sin estar de alta, ¿corresponde el anticipo?", back: "No corresponde reconocimiento ni anticipo; no procede declaración de responsabilidad empresarial." }
];

// Registro en el motor genérico (anki_engine.js) — no tocar el contenido de arriba
window.ankiDecks = window.ankiDecks || [];
window.ankiDecks.push({ name: "B · Trampas de examen y Torres de control", cards: cardsTrampasT07 });
