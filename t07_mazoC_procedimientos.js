// MAZO C — Reintegro de indebidas, requisitos generales, responsabilidades
// y automaticidad/anticipo (Tema 07). A55, A165-166, A9.2, A47, A247-249bis,
// A102, A167-168, A242-244, capital coste (RD 1415/2004). 30 tarjetas.

const cardsProcedimientosT07 = [
  // --- Bloque 4: Reintegro de prestaciones indebidas ---
  { id: 1, front: "¿Quién responde subsidiariamente del reintegro de una prestación indebida (A55)?", back: "Quien por acción u omisión haya contribuido a la percepción indebida, salvo buena fe probada." },
  { id: 2, front: "¿Cuáles son los tres procedimientos de devolución de prestaciones indebidas?", back: "Caso I Especial (RD 148/1996), Caso II General (TGSS, RD 1415/2004) y Caso III Judicial." },
  { id: 3, front: "¿Qué requisito debe cumplir el deudor para aplicar el procedimiento especial (Caso I)?", back: "Ser simultáneamente acreedor de alguna prestación gestionada por la entidad gestora." },
  { id: 4, front: "¿A partir de qué importe no se inicia el procedimiento especial de reintegro?", back: "Por debajo del 3% del IPREM mensual (20% en supuestos de mortis causa)." },
  { id: 5, front: "¿Cuál es el plazo máximo de resolución del procedimiento especial de reintegro?", back: "3 meses desde el acuerdo de inicio." },
  { id: 6, front: "¿Cuánto tiempo tiene el interesado para manifestar conformidad tras la propuesta de reintegro?", back: "15 días." },
  { id: 7, front: "¿En cuánto tiempo puede abonar voluntariamente la deuda el interesado tras la resolución?", back: "30 días, en un solo plazo." },
  { id: 8, front: "¿Cuál es el importe mínimo y el plazo máximo del fraccionamiento en el procedimiento general (Caso II)?", back: "100€ mensuales; máximo 5 años." },
  { id: 9, front: "¿Qué ocurre si se dejan de ingresar 3 plazos del fraccionamiento?", back: "Se inicia automáticamente la vía ejecutiva por la totalidad del importe pendiente." },

  // --- Bloque 5: Requisitos generales del derecho a las prestaciones ---
  { id: 10, front: "¿Cuál es la fórmula general del derecho a las prestaciones (A165)?", back: "Requisitos particulares + Afiliado + (Alta o situación asimilada a la de alta)." },
  { id: 11, front: "¿Qué situaciones son computables a efectos de PMC pese a no exigir cese de actividad (A165.3)?", back: "IT, NYCM, riesgo durante el embarazo y riesgo durante la lactancia natural." },
  { id: 12, front: "¿Qué cubre el alta de pleno derecho (mnemotecnia A-D)?", back: "AT/EP — Asistencia Sanitaria (EC/ANL/Maternidad) — Desempleo." },
  { id: 13, front: "¿Qué es el alta especial y quiénes están en ella?", back: "Los trabajadores en huelga o cierre patronal; se suspende la obligación de cotizar." },
  { id: 14, front: "¿Qué diferencia hay entre carencia general y carencia específica?", back: "General: cotización a lo largo de toda la vida laboral. Específica: cotización dentro de un periodo determinado." },
  { id: 15, front: "¿Qué coeficiente mejora el PMC de los trabajadores fijos-discontinuos y para qué prestaciones (A247.2)?", back: "Coeficiente 1,5, solo para Jubilación, IP y MYS (no IT/NYCM)." },
  { id: 16, front: "¿Qué coeficiente aplica a los contratos temporales ≤5 días (A249bis) y para qué prestaciones?", back: "1,4 días de cotización por día trabajado, para Jub/IP/MYS/IT/NYCM/Cáncer." },
  { id: 17, front: "¿Cuál es la diferencia entre el A9.2 (totalizar) y el A49 (acumular bases)?", back: "A9.2: cotizaciones no superpuestas se suman para alcanzar el PMC. A49: cotizaciones superpuestas (pluriactividad) se acumulan solo para mejorar la BR." },
  { id: 18, front: "¿Cuál es el plazo del mecanismo de invitación al pago del A47?", back: "30 días naturales improrrogables." },
  { id: 19, front: "¿Cuántas pagas tienen las pensiones contributivas de CC y las no contributivas de incapacidad/jubilación?", back: "14 pagas (12 + extraordinarias en junio y noviembre)." },
  { id: 20, front: "¿Cuántas pagas tienen las pensiones contributivas derivadas de contingencia profesional?", back: "12 pagas (salvo revalorizaciones y complementos por mínimos, que se abonan en 14)." },

  // --- Bloque 6: Responsabilidades por incumplimientos ---
  { id: 21, front: "¿Qué diferencia hay entre colaboración voluntaria y obligatoria de empresas (A102.1)?", back: "Voluntaria (a): IT por AT/EP + asist. sanitaria, a cargo de la empresa. Obligatoria (b): IT en general, pago delegado." },
  { id: 22, front: "¿A qué se vincula el incumplimiento empresarial en materia de AT frente al de EP?", back: "AT: incumplimiento de órdenes de la ITSS. EP: falta de reconocimientos médicos obligatorios." },
  { id: 23, front: "¿Qué tres sanciones puede sufrir una mutua por incumplir los reconocimientos médicos (A244)?", back: "Ingreso al Fondo de Contingencias Profesionales (hasta 100% recargo), cubrir las responsabilidades del empresario, y anulación de la autorización en caso de reincidencia." },
  { id: 24, front: "¿Qué incluye la responsabilidad solidaria frente a la subsidiaria?", back: "Solidaria: Principal + Recargos + Intereses + Costas. Subsidiaria: solo el Principal." },
  { id: 25, front: "¿Cuánto tiempo responde solidariamente la empresa principal por obligaciones de SS en la contrata/subcontrata de la propia actividad?", back: "3 años siguientes a la terminación del encargo." },
  { id: 26, front: "¿Cómo responden los sucesores mortis causa de un deudor de la SS?", back: "Con la herencia y su propio patrimonio, salvo que acepten a beneficio de inventario." },

  // --- Bloque 7: Automaticidad y anticipo de prestaciones ---
  { id: 27, front: "¿Cuál es la cuantía máxima del anticipo de prestaciones?", back: "2,5 veces el IPREM, o el importe del capital coste necesario." },
  { id: 28, front: "¿Qué diferencia hay entre automaticidad absoluta y relativa?", back: "Absoluta: no exige alta (casos de alta de pleno derecho). Relativa: condiciona el alta — NYCM, IT por CC y Jubilación." },
  { id: 29, front: "¿Qué recauda la TGSS de los responsables para constituir el capital coste de una pensión?", back: "El valor actual del capital coste + intereses de capitalización + recargo del 5% por falta de aseguramiento." },
  { id: 30, front: "¿Quién devuelve una prestación cobrada de más al beneficiario cuando se anula la responsabilidad de la mutua por sentencia firme?", back: "Nadie — el beneficiario queda exento; la devolución corre solo entre TGSS y mutua/empresa." }
];

// Registro en el motor genérico (anki_engine.js) — no tocar el contenido de arriba
window.ankiDecks = window.ankiDecks || [];
window.ankiDecks.push({ name: "C · Reintegro, requisitos, responsabilidades y anticipo", cards: cardsProcedimientosT07 });
