// MAZO A — Fundamentos, patrimonio y negocios jurídicos (Tema 13)
// Recursos generales (A109), sistema financiero (A110-A111), patrimonio único
// (A103, A104, A108) y negocios jurídicos patrimoniales (A105-A107). 24 tarjetas.

const cardsFundamentos = [
  // --- Bloque 1: Recursos generales del sistema (A109) ---
  { id: 1, front: "¿Qué artículo de la LGSS regula los recursos generales del sistema?", back: "El artículo 109." },
  { id: 2, front: "Según el A109, ¿qué recursos financian las prestaciones contributivas?", back: "Los de las letras b), c), d) y e): cuotas, recargos/sanciones, frutos/rentas y otros ingresos." },
  { id: 3, front: "¿Cómo se financia la modalidad no contributiva y universal?", back: "Con aportaciones progresivas del Estado (salvo lo transferido a las CCAA)." },
  { id: 4, front: "¿Es correcto decir 'invalidez' en las pensiones no contributivas?", back: "No, el término correcto es 'incapacidad', aunque la ley siga diciendo invalidez." },
  { id: 5, front: "¿Es el IMV una pensión no contributiva?", back: "No. Hay dos pensiones no contributivas (incapacidad y jubilación) y, aparte, el IMV." },

  // --- Bloque 1: Sistema financiero e inversiones (A110-A111) ---
  { id: 6, front: "¿Qué fondo se constituye en la TGSS para desviaciones entre ingresos y gastos?", back: "El Fondo de Estabilización (A110)." },
  { id: 7, front: "¿Qué sistema financiero tienen todos los regímenes de la SS?", back: "El sistema de reparto." },
  { id: 8, front: "En pensiones por AT/EP con responsabilidad de una mutua, ¿qué debe constituir la mutua?", back: "El capital coste en la TGSS." },
  { id: 9, front: "¿Qué tipo de reaseguro puede exigir el Ministerio a las mutuas?", back: "Proporcional obligatorio o no proporcional facultativo." },
  { id: 10, front: "Según el A111, ¿con qué tres criterios se invierten las reservas de estabilización?", back: "Liquidez, rentabilidad y seguridad." },

  // --- Bloque 2: El patrimonio único de la SS (A103, A104, A108) ---
  { id: 11, front: "¿Qué 5 elementos forman el patrimonio único de la SS (mnemotecnia ABCDR)?", back: "Acciones, Bienes, Cuotas, Derechos y Recursos." },
  { id: 12, front: "¿Qué elementos del patrimonio son inembargables según el A108?", back: "Los Bienes y los Derechos." },
  { id: 13, front: "¿Puede embargarse una prestación de la SS a un deudor?", back: "Sí, las prestaciones sí son embargables (no son bienes/derechos del patrimonio)." },
  { id: 14, front: "¿A quién corresponde la titularidad del patrimonio único de la SS?", back: "A la TGSS." },
  { id: 15, front: "¿Altera la adscripción de un inmueble su titularidad?", back: "No, la titularidad sigue siendo de la TGSS." },
  { id: 16, front: "¿Cuándo NO procede la reversión de un bien adscrito por cambio de uso?", back: "Cuando el titular del Ministerio autorice ese cambio de uso." },
  { id: 17, front: "¿En qué ley se basa el patrimonio de la SS en lo no previsto por la LGSS?", back: "En la Ley 33/2003, del Patrimonio de las AAPP." },

  // --- Bloque 3: Los negocios jurídicos patrimoniales (A105-A107) ---
  { id: 18, front: "¿Cómo se adquiere un inmueble de la SS con carácter general?", back: "Mediante concurso público." },
  { id: 19, front: "Cita un caso de adquisición directa de inmuebles.", back: "Urgencia (también: concurso desierto, entidad sin ánimo de lucro, o más aconsejable para el interés público)." },
  { id: 20, front: "¿Cómo se enajena (vende) un inmueble de la SS?", back: "Mediante subasta pública, salvo enajenación directa." },
  { id: 21, front: "¿Quién autoriza la venta de un inmueble si el importe es inferior a 20 millones €?", back: "El Ministerio en materia de SS." },
  { id: 22, front: "Mnemotecnia: ¿con qué procedimiento se asocian compra y alquiler?", back: "Concurso (ambas empiezan por C; la venta va con Subasta)." },
  { id: 23, front: "¿Requiere informe de la TGSS el arrendamiento de un inmueble del INGESA?", back: "No, a diferencia de la adquisición, que sí lo requiere." },
  { id: 24, front: "¿Puede cederse gratuitamente un inmueble no necesario de la SS?", back: "Sí, por el titular del Ministerio, a propuesta de la TGSS." }
];

// Registro en el motor genérico (anki_engine.js) — no tocar el contenido de arriba
window.ankiDecks = window.ankiDecks || [];
window.ankiDecks.push({ name: "A · Fundamentos, patrimonio y negocios jurídicos", cards: cardsFundamentos });
