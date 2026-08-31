// MAZO C — Trampas de examen, reconocimiento y pago (Tema 08)
// Distractores señalados por el profesor + A102, A167, A170, procedimiento
// de disconformidad, y colaboración de empresas. 24 tarjetas.

const cardsTrampasT08 = [
  // --- Trampas de examen ---
  { id: 1, front: "TRAMPA: en el Sistema Especial de Empleados de Hogar, ¿desde qué día se abona el subsidio de CC?", back: "Desde el 9º día (no el 4º) — aunque el nacimiento del derecho sigue siendo técnicamente el día 4; el empleador paga del 4 al 8." },
  { id: 2, front: "TRAMPA: ¿se aplica el pago delegado en los días 4-8 del SE de Empleados de Hogar?", back: "No, en ese SE no procede el pago delegado — paga directamente la unidad familiar empleadora." },
  { id: 3, front: "TRAMPA: ¿es lo mismo la reclamación previa (RP) que el procedimiento de disconformidad del A170?", back: "No — RP se usa hasta el día 365 (plazos especiales de IT: 11d/7d); el procedimiento de disconformidad se usa desde el día 366." },
  { id: 4, front: "TRAMPA: en el procedimiento de disconformidad, ¿a quién debe dirigirse primero el trabajador?", back: "A la inspección médica del SPS (no directamente al INSS), en el plazo máximo de 4 días naturales." },
  { id: 5, front: "TRAMPA: ¿el mes que se mira para calcular la BR es el mes del hecho causante o el anterior?", back: "El mes ANTERIOR a la fecha de inicio de la IT — no el mes en que se produce la baja." },
  { id: 6, front: "TRAMPA: en el cálculo de la BR a tiempo parcial, ¿desde qué mes se cuentan los 3 meses hacia atrás?", back: "Desde el mes PREVIO al mes del hecho causante (2 meses atrás + el mes previo), no desde el propio mes del HC." },
  { id: 7, front: "TRAMPA: contando días entre dos fechas para calcular tramos de % (ej. día 5 al día 19), ¿restas directamente las cifras?", back: "No — hay que contar todos los días, ambos inclusive. Restar directamente (19-5=14) da los \"huecos\" entre fechas, no los días naturales reales (que serían 15)." },
  { id: 8, front: "TRAMPA: cuando una IT se reanuda por recaída, ¿se reinicia la numeración de días desde 1?", back: "No, se retoma exactamente donde se quedó — el día 1 de la recaída es en realidad el día siguiente al último día del proceso original." },
  { id: 9, front: "TRAMPA: ¿corresponde el 25% de 30 años o el 30% de 25 años en la renta cierta temporal por AT sin familiares?", back: "30% del salario durante 25 años (25 años = 1/4 de siglo) — cuidado con invertir los números." },

  // --- Reconocimiento y pago ---
  { id: 10, front: "¿Quiénes reconocen el derecho a la IT?", back: "INSS + ISM (para trabajadores del REMAR) y las MUTUAS por CC y/o CP." },
  { id: 11, front: "¿Desde cuándo se inicia el pago delegado en CC?", back: "Desde el día 16 (los días 4 a 15 los paga la empresa, pero no por delegación)." },
  { id: 12, front: "¿Desde cuándo se inicia el pago delegado en CP?", back: "Desde el día 2 (el día 1 lo paga el empresario como salario íntegro)." },
  { id: 13, front: "Según el A102.1.a), ¿qué asume la empresa en la colaboración voluntaria?", back: "El pago directo de las prestaciones por IT derivada de AT/EP más asistencia sanitaria y recuperación profesional." },
  { id: 14, front: "Según el A102.1.b), ¿en qué consiste la colaboración obligatoria?", back: "Pago delegado de IT (CC y/o CP), compensándose el importe en la liquidación de las cotizaciones." },
  { id: 15, front: "Si el empresario no cumple sus obligaciones de cotización, ¿puede compensar el pago delegado?", back: "No podrá compensar; pero tampoco asume el coste de la IT que no le corresponde — debe solicitar la devolución al INSS/ISM/MUTUA." },
  { id: 16, front: "¿Quién puede establecer, suspender o dejar sin efecto la colaboración obligatoria?", back: "El Ministerio en materia de Seguridad Social." },

  // --- Responsabilidad (A167) ---
  { id: 17, front: "Según el A167.1, ¿a quién se imputa la responsabilidad cuando se ha causado derecho a una prestación?", back: "A las entidades gestoras, mutuas colaboradoras o empresarios que colaboren en la gestión, según sus respectivas competencias." },
  { id: 18, front: "¿Qué determina el incumplimiento de las obligaciones de afiliación, altas/bajas y cotización (A167.2)?", back: "La exigencia de responsabilidad en el pago de las prestaciones." },
  { id: 19, front: "¿Qué excluye el cálculo del capital coste que hacen las mutuas o empresas responsables?", back: "Excluye el recargo por falta de medidas de seguridad y salud (A164) — sí incluye el interés de capitalización y el recargo por falta de aseguramiento." },

  // --- Determinación de contingencia (RD 1430/2009) ---
  { id: 20, front: "TRAMPA: en el procedimiento del A6 RD 1430/2009, ¿cuántos días hábiles tiene el SPS/MUTUA/empresa colaboradora para indicar la contingencia?", back: "4 días hábiles, improrrogables." },
  { id: 21, front: "¿Cuántos días hábiles tiene el trabajador para aportar documentos y alegaciones en ese mismo procedimiento?", back: "10 días hábiles." },
  { id: 22, front: "¿En qué plazo máximo resuelve el Director Provincial sobre la contingencia (previo informe del EVI)?", back: "15 días hábiles." },

  // --- Estatuto de los Trabajadores (reforma 2025) ---
  { id: 23, front: "TRAMPA: desde la Ley 2/2025, ¿extingue automáticamente el contrato la declaración de IP total/absoluta/gran incapacidad?", back: "No — desapareció la extinción automática; ahora se exige valorar antes ajustes razonables o cambio de puesto (A49.1.n ET)." },
  { id: 24, front: "¿Cuándo NO se considera excesiva la carga de adaptar el puesto en empresas de menos de 25 trabajadores?", back: "Cuando pueda ser paliada mediante ayudas o subvenciones públicas." }
];

// Registro en el motor genérico (anki_engine.js) — no tocar el contenido de arriba
window.ankiDecks = window.ankiDecks || [];
window.ankiDecks.push({ name: "C · Trampas, reconocimiento y responsabilidades", cards: cardsTrampasT08 });
