// MAZO C — Nacimiento del derecho, LPNI, calificación, revisión y trampas de examen (Tema 08, Parte 2)
// Cap4 (nacimiento/extinción), Cap5 (LPNI), Cap6 (EVI, competencias INSS, revisión A40),
// más trampas destacadas en audio y casos prácticos. 25 tarjetas.

const cardsProcedimientoIP = [
  // --- Nacimiento y extinción del derecho ---
  { id: 1, front: "Cuando la IP surge tras la extinción de una IT (Caso I), ¿coinciden el hecho causante y el efecto económico?", back: "No: el HC es la fecha de extinción de la IT, pero el efecto económico es la fecha de la resolución del Director Provincial del INSS." },
  { id: 2, front: "En el Caso I (IP tras extinción de IT), ¿en qué situación queda el trabajador entre la extinción de la IT y la resolución de la IP?", back: "En situación de prolongación de efectos económicos de la IT." },
  { id: 3, front: "Si la IP finalmente reconocida tiene una cuantía mayor que la que se venía percibiendo en prolongación, ¿desde cuándo se retrotraen los efectos económicos?", back: "Desde el día siguiente a la extinción de la IT." },
  { id: 4, front: "En el Caso II (no hay IT previa, o la hay pero no se ha extinguido), ¿cuál es el hecho causante y el efecto económico de la IP?", back: "Ambos coinciden: la fecha del dictamen-propuesta del EVI." },
  { id: 5, front: "En el Caso III (IP desde no alta), ¿cuál es el hecho causante y el efecto económico?", back: "Ambos coinciden: la fecha de la solicitud (solo aplica a IPA/GI derivado de CC)." },
  { id: 6, front: "Según el A174.5 (conexión con IT), si NO hay extinción laboral porque se adapta el puesto, ¿hay derecho a IP mientras se sigue trabajando?", back: "No hay derecho a IP (se suspende mientras se presten servicios)." },
  { id: 7, front: "Según el A174.5, si SÍ hay extinción laboral, ¿hay derecho a IP?", back: "Sí, hay derecho a IP." },
  { id: 8, front: "¿Por qué causas se extingue la IP?", back: "Por revisión de la IP, por fallecimiento, y por causar derecho a pensión de jubilación." },
  { id: 9, front: "¿Por qué motivos puede ser denegada, anulada o suspendida la IP?", back: "Actuación fraudulenta, imprudencia temeraria del beneficiario, rechazo o abandono del tratamiento sanitario durante la IT, o rechazo/abandono de tratamientos de readaptación y rehabilitación." },

  // --- LPNI ---
  { id: 10, front: "¿Cuál es la causa exclusiva que puede originar una LPNI?", back: "AT/EP — nunca contingencia común." },
  { id: 11, front: "¿En qué se indemniza una LPNI: pensión vitalicia o tanto alzado?", back: "En un tanto alzado, por una sola vez, según el baremo correspondiente." },
  { id: 12, front: "¿Cuántos epígrafes tiene el baremo de LPNI y en qué orden van?", back: "6 epígrafes: 1) Cabeza y cara, 2) Aparato genital, 3) Glándulas y vísceras, 4) Miembros superiores, 5) Miembros inferiores, 6) Cicatrices no incluidas en epígrafes previos." },
  { id: 13, front: "¿Qué requisito exige el A202 para ser beneficiario de LPNI que NO se exige en la IP normal?", back: "Haber sido dado de alta médica." },
  { id: 14, front: "¿Es compatible una LPNI con una IP? ¿En qué caso sí?", back: "En general son incompatibles (A203), salvo que las lesiones sean totalmente independientes de las tomadas en cuenta para declarar la IP." },
  { id: 15, front: "¿Por qué motivo son revisables las LPNI: solo por agravación, o también por mejoría?", back: "Solo por agravación (al ser un tanto alzado ya pagado de una sola vez, no tiene sentido la revisión por mejoría)." },

  // --- EVI y competencias ---
  { id: 16, front: "¿Cuántos vocales (más el presidente) componen un EVI, y qué regla mnemotécnica ayuda a recordarlo?", back: "4 vocales + 1 presidente = 5, como las '5 vocales' (a-e-i-o-u)." },
  { id: 17, front: "¿Quién designa al presidente del EVI y a los 4 vocales principales?", back: "El Director General (DG) del INSS." },
  { id: 18, front: "¿Quién designa a los vocales expertos (recuperación/rehabilitación y seguridad e higiene) que participan en determinados casos?", back: "El Director Provincial (DP) del INSS." },
  { id: 19, front: "¿Qué carácter tienen los dictámenes-propuesta del EVI: vinculantes o preceptivos y no vinculantes?", back: "Preceptivos (obligatorios) pero NO vinculantes." },
  { id: 20, front: "Regla general para distinguir competencias EVI vs INSS: ¿quién 'reconoce el derecho' a las prestaciones?", back: "El INSS. El EVI examina, determina, anula o disminuye capacidades, pero no reconoce derechos." },
  { id: 21, front: "¿Cuál es el plazo máximo para resolver un procedimiento de IP, y qué efecto tiene el silencio administrativo?", back: "135 días. Si no se resuelve en plazo, se entiende desestimada (silencio administrativo negativo)." },

  // --- Consecuencias de la revisión (A40) ---
  { id: 22, front: "Si tras una revisión se pasa de pensión a 'no aplica IP', ¿desde cuándo se deja de percibir y hay que devolver algo?", back: "Se deja de percibir desde el día siguiente a la resolución definitiva. No se devuelve nada." },
  { id: 23, front: "Si tras una revisión se pasa de tanto alzado (TA) a pensión, ¿desde cuándo se devenga la pensión y cuándo se empieza a percibir?", back: "Se devenga desde el día siguiente a la resolución, pero no se empieza a percibir hasta deducir las mensualidades del TA ya cobradas que excedan de las transcurridas desde su reconocimiento." },

  // --- Trampas destacadas (audio + casos prácticos) ---
  { id: 24, front: "TRAMPA: si la IP deriva de AT/EP, ¿hay que aplicar el porcentaje según años cotizados (A210.1) a la BR?", back: "No — ese porcentaje solo aplica en enfermedad común. En AT/EP se aplica directamente el 100% de la BR calculada." },
  { id: 25, front: "TRAMPA: un trabajador no dado de alta sufre un AT. ¿Tiene derecho a IP por estar en 'no alta'?", back: "Sí tiene derecho: los AT/EP siempre están amparados por la situación de alta de pleno derecho, con independencia de que el empresario no le hubiera dado de alta." },
];

window.ankiDecks = window.ankiDecks || [];
window.ankiDecks.push({ name: "C · Nacimiento, LPNI, calificación y trampas", cards: cardsProcedimientoIP });
