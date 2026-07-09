// MAZO A — Fundamentos y encuadramiento general (Tema 2)
// Principios generales, campo de aplicación, art. 12, regla del semáforo,
// encuadramientos específicos. 58 tarjetas.

// MAZO A — Fundamentos y encuadramiento general (Tema 2)
// Principios generales, campo de aplicación, art. 12, regla del semáforo,
// encuadramientos específicos. 58 tarjetas.

const cardsFundamentos = [
  // --- Bloque 1: Principios generales (A1-A9) ---
  { "id": 6, "front": "¿Qué derecho reconoce el art. 1 del TRLGSS?", "back": "Derecho de los españoles a la Seguridad Social." },
  { "id": 7, "front": "¿Qué principio (art. 2) garantiza el acceso con requisitos?", "back": "Igualdad." },
  { "id": 8, "front": "¿Qué principio (art. 2) implica que el sistema es único?", "back": "Unidad." },
  { "id": 9, "front": "¿Qué principio (art. 2) basa la aportación en la capacidad?", "back": "Solidaridad." },
  { "id": 10, "front": "¿Qué principio (art. 2) busca cubrir a toda la población?", "back": "Universalidad." },

  { "id": 11, "front": "¿Qué pactos declara nulos el artículo 3?", "back": "Los de renuncia a derechos de Seguridad Social." },
  { "id": 12, "front": "¿Diferencia entre renuncia y no solicitud?", "back": "Renuncia: nula. No solicitud: pospone efectos." },
  { "id": 13, "front": "¿Quién ostenta la ordenación del sistema?", "back": "El Estado." },
  { "id": 14, "front": "¿Quién ostenta la jurisdicción en la materia?", "back": "El Estado." },
  { "id": 15, "front": "¿Quién ostenta la inspección del sistema?", "back": "El Estado." },

  { "id": 16, "front": "¿Qué exige la modalidad contributiva (art. 7)?", "back": "Residir y trabajar en España." },
  { "id": 17, "front": "¿Qué exige la modalidad no contributiva (art. 7)?", "back": "Residir legalmente en España." },
  { "id": 18, "front": "¿Qué colectivo incluye el art. 7 por cuenta ajena?", "back": "Trabajadores por cuenta ajena." },
  { "id": 19, "front": "¿Qué colectivo incluye el art. 7 por cuenta propia?", "back": "Autónomos mayores de 18 años." },
  { "id": 20, "front": "¿Qué estudiantes entran en el campo de aplicación?", "back": "Los protegidos por el Seguro Escolar." },
  { "id": 21, "front": "¿Qué funcionarios entran en el campo de aplicación?", "back": "Civiles y militares." },
  { "id": 22, "front": "¿Diferencia entre pluriempleo y pluriactividad?", "back": "Pluriempleo: mismo régimen. Pluriactividad: regímenes distintos." },
  { "id": 23, "front": "¿Quién puede excluir actividades marginales?", "back": "Gobierno (a propuesta de Ministerio y oídos sindicatos)." },

  { "id": 24, "front": "¿Qué prohíbe el artículo 8 del TRLGSS?", "back": "Excluir a personas que cumplan requisitos." },
  { "id": 25, "front": "¿Qué establece el artículo 9 sobre la estructura?", "back": "El sistema se compone de diversos regímenes." },
  { "id": 26, "front": "¿Cómo divide los regímenes el artículo 10?", "back": "Generales y especiales." },
  { "id": 27, "front": "¿Qué estructura interna prevé el artículo 11?", "back": "Sistemas especiales dentro de los regímenes." },
  { "id": 28, "front": "¿Finalidad de los sistemas especiales (art. 11)?", "back": "Adaptar protección a colectivos específicos." },
  { "id": 29, "front": "¿Qué rango normativo crea un sistema especial?", "back": "Rango de ley." },
  { "id": 30, "front": "¿Qué rango normativo modifica un sistema especial?", "back": "Rango de ley." },

  { "id": 31, "front": "¿Qué familiares se incluyen según el art. 12?", "back": "Cónyuge, descendientes, ascendientes y convivientes dependientes." },
  { "id": 32, "front": "¿Requisito (art. 12) para familiares >30 años?", "back": "Discapacidad y dependencia económica." },
  { "id": 33, "front": "¿Requisito (art. 12) para familiares <30 años?", "back": "Convivencia y dependencia económica." },
  { "id": 34, "front": "¿Cómo se prueba la convivencia (art. 12)?", "back": "Residencia en el mismo domicilio." },
  { "id": 35, "front": "¿Cómo se prueba la dependencia económica?", "back": "Falta de ingresos suficientes del familiar." },
  { "id": 36, "front": "¿Qué familiar puede incluirse sin convivencia?", "back": "Ascendientes dependientes económicamente." },
  { "id": 37, "front": "¿Qué familiar se incluye con ingresos si es <30?", "back": "Descendientes si mantienen dependencia." },
  { "id": 38, "front": "¿Qué familiar se incluye si tiene discapacidad?", "back": "Cualquier familiar dependiente, tenga la edad que tenga." },
  { "id": 39, "front": "¿Qué documento acredita la convivencia?", "back": "Certificado de empadronamiento." },
  { "id": 40, "front": "¿Qué documento acredita la dependencia económica?", "back": "Declaración de ingresos o IRPF." },

  { "id": 41, "front": "¿Qué regula el artículo 13 del TRLGSS?", "back": "Inclusión de personas con discapacidad." },
  { "id": 42, "front": "¿Qué regula el artículo 14 del TRLGSS?", "back": "Inclusión de socios trabajadores de cooperativas." },
  { "id": 43, "front": "¿Régimen por defecto en socios de cooperativas?", "back": "Régimen General (salvo opción por RETA)." },
  { "id": 44, "front": "¿Requisito para la opción de régimen en cooperativa?", "back": "Ejercicio de opción colectivo por la cooperativa." },
  { "id": 45, "front": "¿Qué socios de cooperativas van obligados a RETA?", "back": "Los que posean control efectivo." },

  { "id": 46, "front": "¿Qué regula el artículo 136 del TRLGSS?", "back": "El Régimen General (RG)." },
  { "id": 47, "front": "¿Qué trabajadores incluye el Régimen General?", "back": "Trabajadores por cuenta ajena." },
  { "id": 48, "front": "¿Qué exclusiones del RG recoge el art. 137?", "back": "Actividades marginales y trabajos familiares no retribuidos." },
  { "id": 49, "front": "¿Qué requisitos definen la relación laboral en el RG?", "back": "Ajenidad y dependencia." },
  { "id": 50, "front": "¿Qué empleados de hogar se integran en el RG?", "back": "Empleados de hogar remunerados." },

  { "id": 51, "front": "¿Qué regula el artículo 305 del TRLGSS?", "back": "El Régimen Especial de Trabajadores Autónomos (RETA)." },
  { "id": 52, "front": "¿Qué requisitos definen la actividad autónoma?", "back": "Habitual, personal y directa." },
  { "id": 53, "front": "¿Qué edad mínima exige el RETA?", "back": "18 años." },
  { "id": 54, "front": "¿Quiénes se incluyen obligatoriamente en RETA?", "back": "Trabajadores habituales por cuenta propia." },
  { "id": 55, "front": "¿Qué socios de mercantiles van a RETA?", "back": "Los que ejerzan el control efectivo." },
  { "id": 56, "front": "¿Qué porcentaje define el control efectivo?", "back": "Más del 50% del capital social." },
  { "id": 57, "front": "¿Qué socios de sociedades laborales van a RETA?", "back": "Socios con >50% del capital que trabajen en ella." },

  { "id": 58, "front": "¿Qué exclusiones de RETA recoge el art. 306?", "back": "Actividades marginales y trabajos familiares no retribuidos." },
  { "id": 59, "front": "¿Qué trabajadores excluye el RETA por temporalidad?", "back": "Los que realizan actividades ocasionales." },
  { "id": 60, "front": "¿Qué familiares del autónomo quedan excluidos sin salario?", "back": "Cónyuge y familiares hasta 2.º grado convivientes." }
];
