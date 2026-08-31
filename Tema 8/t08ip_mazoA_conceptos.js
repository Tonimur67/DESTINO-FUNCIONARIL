// MAZO A — Concepto, grados y beneficiarios de la IP (Tema 08, Parte 2)
// A193 (concepto), A194/DT26 (grados), A195 (beneficiarios, PMC),
// Anexo I (situaciones asimiladas), Anexo II (alta/no alta). 26 tarjetas.

const cardsConceptosIP = [
  // --- Concepto (A193) ---
  { id: 1, front: "¿Qué tres atributos clave exige el A193 LGSS a las reducciones anatómicas o funcionales para que exista IP?", back: "Que sean graves, susceptibles de determinación objetiva y previsiblemente definitivas." },
  { id: 2, front: "¿Impide la posible recuperación de la capacidad laboral que se reconozca una IP?", back: "No obsta a la calificación, si dicha posibilidad se estima médicamente incierta o a largo plazo." },
  { id: 3, front: "¿En qué se diferencia 'incapacidad' de 'discapacidad' a efectos de IP?", back: "Incapacidad es un concepto laboral (merma de la capacidad de trabajo); discapacidad es un concepto de estructura física de la persona. Una persona discapacitada puede afiliarse y trabajar con normalidad." },
  { id: 4, front: "Si una persona con discapacidad se afilia y, tras ello, su discapacidad se agrava por sí misma o por nuevas lesiones, ¿le impide eso el reconocimiento de la IP?", back: "No, no le impedirá la calificación de la situación de IP." },
  { id: 5, front: "¿De qué prestación debe derivar, como regla general, la IP?", back: "De la IT, salvo situaciones asimiladas al alta que no comprendan IT, asimilación a cuenta ajena en igual circunstancia, o acceso desde no alta (A195.4, solo IPA/GI)." },
  { id: 6, front: "¿Qué mide realmente la incapacidad permanente: el hecho causante en sí, o la incidencia sobre la profesión del trabajador?", back: "La merma de la capacidad laboral respecto a la profesión concreta del trabajador — un mismo hecho causante puede dar lugar a distintos grados según la profesión de cada persona." },

  // --- Grados (A194 / DT26) ---
  { id: 7, front: "¿Qué diferencia hay entre el A194 y la DT26 de la LGSS en materia de grados de IP?", back: "El A194 es la nomenclatura que se quiere dejar como definitiva cuando haya desarrollo reglamentario; la DT26 es la que está realmente vigente hoy." },
  { id: 8, front: "Según la DT26, ¿cómo se llaman actualmente los 4 grados de IP?", back: "IP Parcial para la profesión habitual, IP Total para la profesión habitual, IP Absoluta para todo trabajo, y Gran Incapacidad." },
  { id: 9, front: "¿Qué grado de IP no tiene equiparación distinta entre A194 y DT26?", back: "La Gran Incapacidad (GI) — es el único que ya se llama igual en ambas normas." },
  { id: 10, front: "¿Qué órgano y con qué informe previo debe desarrollar reglamentariamente la lista de enfermedades y grados de IP (A194.3)?", back: "El Gobierno, previo informe del Consejo General del INSS." },
  { id: 11, front: "Según la DT26, ¿qué disminución mínima de rendimiento exige la IPP para la profesión habitual?", back: "No inferior al 33%, sin impedir la realización de las tareas fundamentales de la profesión." },
  { id: 12, front: "¿Qué diferencia hay entre IPT e IPA en cuanto a poder dedicarse a otra profesión?", back: "La IPT inhabilita para todas o las fundamentales tareas de la profesión, pero permite dedicarse a otra distinta. La IPA inhabilita por completo para toda profesión u oficio." },
  { id: 13, front: "¿Qué añade la Gran Incapacidad (GI) respecto a la IPA?", back: "La necesidad de asistencia de otra persona para los actos más esenciales de la vida (vestirse, desplazarse, comer o análogos)." },
  { id: 14, front: "¿Antes cómo se llamaba la Gran Incapacidad, y qué ley cambió su nombre?", back: "Se llamaba 'Gran Invalidez'; el nombre se modificó por la Ley 2/2025, de 29 de abril." },

  // --- Beneficiarios y PMC (A195) ---
  { id: 15, front: "¿Se exige PMC para acceder a IP derivada de AT/EP o ANL?", back: "No, no se exige ningún período previo de cotización para estas contingencias." },
  { id: 16, front: "¿Cuántos días de PMC se exigen para IPP (mayores de 21 años) y en qué período?", back: "1.800 días, en los 10 años inmediatamente anteriores a la extinción de la IT." },
  { id: 17, front: "Para IPT/IPA/GI derivadas de EC, ¿cuál es la carencia genérica de un trabajador menor de 31 años?", back: "1/3 del tiempo transcurrido desde los 16 años al hecho causante (sin carencia específica)." },
  { id: 18, front: "Para IPT/IPA/GI derivadas de EC, ¿cuál es la carencia genérica de un trabajador de 31 años o más?", back: "1/4 del tiempo desde los 20 años al hecho causante, con un mínimo de 5 años." },
  { id: 19, front: "¿Sobre qué cifra se calcula la carencia específica (1/5) de un trabajador mayor de 31 años: sobre los años desde los 20, o sobre el PMC ya calculado?", back: "Sobre el PMC exigido (resultado de la carencia genérica), no sobre el total de años desde los 20 al HC." },
  { id: 20, front: "¿Es necesario cumplir tanto la carencia genérica como la específica, o basta con una de las dos?", back: "Se tienen que cumplir ambas a la vez." },
  { id: 21, front: "¿Qué grados de IP se pueden reconocer desde una situación de no alta, y para qué contingencia?", back: "Solo IPA y GI, y solo derivadas de contingencia común (EC/ANL)." },
  { id: 22, front: "¿Cuáles son la carencia genérica y específica exigidas desde no alta?", back: "Carencia genérica: 15 años fijos. Carencia específica: 1/5 de 15 = 3 años, en los últimos 10 años." },
  { id: 23, front: "Desde no alta, para acceder a dos pensiones de regímenes distintos, ¿qué requisito de superposición se exige (igual que en Jubilación A205 y Viudedad A223)?", back: "Que las cotizaciones acreditadas en cada régimen se superpongan al menos 15 años." },
  { id: 24, front: "¿A qué prestaciones NO se aplican los 'días-cuota' (regla mnemotécnica del DJ)?", back: "A Desempleo y Jubilación." },
  { id: 25, front: "¿Qué coeficiente multiplica el tiempo cotizado en contratos fijos-discontinuos a efectos de PMC de pensiones (Jubilación, IP, MYS), y a qué prestaciones NO se aplica?", back: "Coeficiente 1,5. No se aplica a IT ni a NYCM." },
  { id: 26, front: "¿Cuántos días de cotización se computan a la trabajadora por cada parto de un solo hijo, a efectos de PMC de Jubilación e IP (A235)?", back: "112 días completos (16 semanas), más 14 días por cada hijo adicional si el parto es múltiple." },
];

window.ankiDecks = window.ankiDecks || [];
window.ankiDecks.push({ name: "A · Concepto, grados y beneficiarios", cards: cardsConceptosIP });
