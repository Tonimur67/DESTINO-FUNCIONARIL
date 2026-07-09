// MAZO C — Fondo de Reserva, MEI y Gestión financiera (Tema 13)
// A117-A127bis (Fondo de Reserva y MEI) + RD 696/2018 (gestión de recursos
// financieros, modalidades de pago, pago de prestaciones). 35 tarjetas.

const cardsGestionFinanciera = [
  // --- Bloque 4: El Fondo de Reserva de la SS (A117-A127bis) ---
  { id: 1, front: "¿Cuál es la finalidad del Fondo de Reserva de la SS?", back: "Atender las necesidades financieras en materia de prestaciones contributivas." },
  { id: 2, front: "¿Cuántas asignaciones dotan el Fondo de Reserva según el A118?", back: "4: excedentes de ingresos, excedente de CC de mutuas, % de excedente de CP de mutuas, y el MEI." },
  { id: 3, front: "¿Qué es el MEI?", back: "El Mecanismo de Equidad Intergeneracional: cotización finalista por jubilación que nutre el Fondo de Reserva." },
  { id: 4, front: "¿Es computable el MEI para calcular tu base reguladora?", back: "No, no es computable a efectos de prestaciones." },
  { id: 5, front: "¿Desde y hasta cuándo tiene efectos el MEI?", back: "Desde el 1/ene/2023 hasta el 31/dic/2050." },
  { id: 6, front: "¿Cuál es el valor final del MEI y cuándo se alcanza?", back: "1,20% (1% empresa + 0,20% trabajador), en 2029." },
  { id: 7, front: "¿A qué figura sustituye el MEI?", back: "Al factor de sostenibilidad (A211, derogado)." },
  { id: 8, front: "¿Quién acuerda las dotaciones del Fondo de Reserva y con qué periodicidad mínima?", back: "El Consejo de Ministros, al menos una vez por ejercicio económico." },
  { id: 9, front: "¿A propuesta de qué tres ministerios se dota el Fondo de Reserva?", back: "Seguridad Social, Economía y Hacienda." },
  { id: 10, front: "¿Desde cuándo desembolsa el Fondo de Reserva un % del PIB según el A121?", back: "Desde 2033." },
  { id: 11, front: "¿Cuántos órganos participan en la gestión del Fondo de Reserva y cómo se llaman?", back: "Tres: un Comité de Gestión y dos Comisiones (Asesora de Inversiones y de Seguimiento)." },
  { id: 12, front: "¿Quién preside el Comité de Gestión y la Comisión de Seguimiento del Fondo de Reserva?", back: "El Secretario de Estado de la Seguridad Social." },
  { id: 13, front: "¿Quién preside la Comisión Asesora de Inversiones del Fondo de Reserva?", back: "El Secretario de Estado de Economía." },
  { id: 14, front: "¿Quién remite a las Cortes Generales el informe anual del Fondo de Reserva?", back: "El Gobierno (aunque lo elabora el Comité de Gestión)." },

  // --- Bloque 5: Gestión de los recursos financieros (RD 696/2018) ---
  { id: 15, front: "¿Qué Real Decreto regula la gestión financiera de la SS?", back: "El RD 696/2018, de 29 de junio." },
  { id: 16, front: "¿A quién corresponde la gestión de todos los recursos financieros de la SS?", back: "A la TGSS, como caja única del sistema." },
  { id: 17, front: "¿Cuáles son los 3 conceptos de recaudación conjunta?", back: "Desempleo, FOGASA y Formación Profesional." },
  { id: 18, front: "¿Cuál de los 3 conceptos de recaudación conjunta es exclusivo del empresario?", back: "El FOGASA." },
  { id: 19, front: "¿Cuál es el plazo máximo para que un banco comunique a la TGSS lo recaudado?", back: "El 5º día natural del mes siguiente." },
  { id: 20, front: "¿Cuál es el plazo máximo para remitir la documentación recaudatoria?", back: "El 7º día natural del mes siguiente." },
  { id: 21, front: "¿Quién autoriza la apertura y cancelación de cuentas de la TGSS?", back: "El DG de la TGSS." },
  { id: 22, front: "¿En cuánto tiempo caduca la autorización de apertura de una cuenta si no se adjudica el contrato?", back: "En 6 meses." },
  { id: 23, front: "¿En qué meses cobran los pensionistas la paga extraordinaria?", back: "Junio y noviembre." },
  { id: 24, front: "¿Cuántos días hábiles de saldo medio mantiene la TGSS en las entidades colaboradoras?", back: "5 días hábiles por mes de colaboración." },
  { id: 25, front: "¿Qué doble función ejerce el DG de la TGSS?", back: "Tesorero General y Ordenador General de Pagos." },
  { id: 26, front: "¿Cuál es el medio de pago general de las obligaciones de la SS?", back: "La transferencia." },
  { id: 27, front: "Cita dos medios de pago excepcionales de la SS.", back: "Cheque nominativo y pago en metálico (también cargo en cuenta y giro postal)." },
  { id: 28, front: "¿Qué es un pago 'en formalización'?", back: "Aquel cuyo importe líquido resulta cero porque los descuentos igualan el importe íntegro." },
  { id: 29, front: "¿Cuál es el límite general de un anticipo de tesorería?", back: "El 1% del presupuesto de gastos de la entidad." },
  { id: 30, front: "¿Cuál es el límite del fondo de maniobra sobre el capítulo II, y su ampliación máxima?", back: "3%, ampliable hasta el 7%." },
  { id: 31, front: "¿Cuál es el importe máximo de un pago individualizado con cargo al fondo de maniobra?", back: "12.020,24€ (salvo excepciones como teléfono o luz)." },
  { id: 32, front: "¿Cuándo se usan los pagos a justificar?", back: "Cuando excepcionalmente no puede aportarse documentación, en el extranjero, o en localidad sin dependencia del organismo." },
  { id: 33, front: "¿En qué plazo debe rendirse cuenta de un pago a justificar (regla general)?", back: "En 3 meses (6 meses si es en el extranjero o expropiaciones)." },

  // --- Bloque 6: Pago de Prestaciones de la SS (A24) ---
  { id: 34, front: "Según el A24 del RD 696/2018, ¿cuál es el plazo máximo para pagar una pensión?", back: "El cuarto día natural del mes." },
  { id: 35, front: "¿Tienen los beneficiarios libre elección de entidad pagadora en territorio nacional?", back: "Sí, entre las entidades colaboradoras del Registro (A29)." }
];

// Registro en el motor genérico (anki_engine.js) — no tocar el contenido de arriba
window.ankiDecks = window.ankiDecks || [];
window.ankiDecks.push({ name: "C · Fondo de Reserva y Gestión financiera", cards: cardsGestionFinanciera });
