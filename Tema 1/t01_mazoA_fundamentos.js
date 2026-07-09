// MAZO A — Fundamentos constitucionales: A41 CE y los tres niveles (Tema 1)
// Núcleo del A41, extensión/gestión/financiación de cada nivel, INSS/TGSS/mutuas,
// pensión vs prestación. 22 tarjetas.

const cardsFundamentos = [
  // --- Bloque 1.1: Artículo 41 CE ---
  { id: 1, front: "¿Quiénes mantendrán el régimen público de Seguridad Social según el A41 CE?", back: "Los poderes públicos." },
  { id: 2, front: "Según el A41 CE, ¿en qué situación hay especial protección?", back: "En caso de desempleo." },
  { id: 3, front: "Según el A41 CE, ¿cómo son las prestaciones complementarias?", back: "Libres." },
  { id: 4, front: "¿En qué capítulo de la CE está el A41 (Seguridad Social)?", back: "En 'Principios rectores de la política social y económica' (arts. 39-52), no en los derechos fundamentales." },
  { id: 5, front: "¿Por qué pudo aprobarse la LGSS como Real Decreto Legislativo?", back: "Porque el A41 no es un derecho fundamental; si lo fuera, exigiría Ley Orgánica." },

  // --- Bloque 1.2: Los tres niveles de protección ---
  { id: 6, front: "¿Cuál es la extensión del nivel básico?", back: "Todos los ciudadanos." },
  { id: 7, front: "¿Cómo se financia el nivel básico (regla general)?", back: "Con los Presupuestos Generales del Estado (PGE)." },
  { id: 8, front: "¿Qué excepción de financiación tiene el nivel básico?", back: "Asistencia sanitaria y servicios sociales transferidos a las CCAA." },
  { id: 9, front: "¿Quién gestiona el nivel básico?", back: "Exclusivamente la gestión pública." },
  { id: 10, front: "¿Cómo se financia el nivel profesional?", back: "Mediante cuotas de trabajadores y empleadores." },
  { id: 11, front: "¿Quién gestiona el nivel profesional, además del sector público?", back: "Las mutuas colaboradoras." },
  { id: 12, front: "¿Qué contingencias cubren principalmente las mutuas?", back: "Las contingencias profesionales (AT y EP)." },
  { id: 13, front: "¿Cómo se financia el nivel complementario?", back: "Con aportaciones de los partícipes." },
  { id: 14, front: "¿Es obligatorio o voluntario el nivel complementario?", back: "Voluntario." },

  // --- Bloque: quién gestiona y quién recauda ---
  { id: 15, front: "¿Qué entidad gestiona y paga las prestaciones (entidad gestora)?", back: "El INSS." },
  { id: 16, front: "¿Qué entidad recauda los recursos económicos del sistema?", back: "La TGSS." },
  { id: 17, front: "¿Qué diferencia una pensión de una prestación?", back: "La pensión es vitalicia; la prestación es temporal (pago único o periódico con fin)." },
  { id: 18, front: "¿Es correcto decir que 'no contributivo' es solo para quien no trabaja?", back: "No, un trabajador también puede acceder si no cumple los requisitos de la modalidad contributiva." },

  // --- Bloque: mejoras voluntarias (nivel complementario) ---
  { id: 19, front: "¿Puede un convenio colectivo regular la prestación estándar de jubilación?", back: "No, solo puede mejorarla voluntariamente; regularla es competencia exclusiva de la LGSS." },
  { id: 20, front: "¿Es el subsidio especial NYCM contributivo o no contributivo?", back: "Contributivo para alta/afiliación, pero no contributivo (N/C) a efectos de financiación." },
  { id: 21, front: "¿Qué mecanismo de mejora regula el A239 LGSS?", back: "La mejora directa de la prestación, a cargo exclusivo de la empresa." },
  { id: 22, front: "¿Qué mecanismo de mejora regula el A241 LGSS?", back: "Tipos de cotización adicionales aprobados por el Ministerio." }
];

// Registro en el motor genérico (anki_engine.js) — no tocar el contenido de arriba
window.ankiDecks = window.ankiDecks || [];
window.ankiDecks.push({ name: "A · Fundamentos constitucionales (A41 y los 3 niveles)", cards: cardsFundamentos });
