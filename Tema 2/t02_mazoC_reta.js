// MAZO C — RETA y Sistemas Especiales (Tema 2, parte 2)
// Afiliación/altas/bajas, cotización, acción protectora del RETA,
// SETA, SE Hogar, SEA, REMAR, Minería del Carbón. 34 tarjetas.

const cardsReta = [
    // --- Bloque 8: RETA y Sistemas Especiales (Clase 03-04, T02 parte 2) ---
    { id: 64, front: "RETA: ¿cuántas altas anuales tienen efecto el MISMO DÍA de requisitos?", back: "Hasta 3 altas/año (si se piden en plazo). De la 4ª en adelante: efecto día 1 del mes natural." },
    { id: 65, front: "¿Efectos de una alta en el RETA solicitada FUERA de plazo?", back: "Efecto día 1 del mes natural de requisitos. Conlleva sanciones y cuotas previas con recargo e intereses (prescripción: 4 años)." },
    { id: 66, front: "RETA: ¿cuántas bajas anuales tienen efecto el MISMO DÍA del cese?", back: "Hasta 3 bajas/año (solicitadas en 3 días). Resto: efecto último día del mes natural del cese." },
    { id: 67, front: "Si un autónomo ejerce simultáneamente ≥2 actividades de RETA, ¿altas?", back: "Una única alta en el RETA indicando todas las actividades. Cambios vía variación de datos." },
    { id: 68, front: "¿De qué responde SUBSIDIARIAMENTE el titular de un negocio según art. 40 RD 84/1996?", back: "Obligaciones AABV de familiares en RETA. Aplica igual a sociedades colectivas/comanditarias (socios) y cooperativas (socios en RETA)." },
    { id: 69, front: "Cotización RETA: ¿qué determina el 'tramo 1' de la tabla GENERAL?", back: "Límite inferior = base mínima del RG. Si rendimientos previstos son menores, se cotiza por tabla REDUCIDA." },
    { id: 70, front: "¿Deducción por gastos genéricos en RETA y cuál es la EXCEPCIÓN?", back: "General: 7%. Excepción: autónomos societarios (art. 305.2.b y e) es 3% (basta 90 días de alta en el período)." },
    { id: 71, front: "Autónomos colaboradores y societarios, ¿pueden elegir cualquier BC?", back: "NO. Mínimo obligatorio = base mínima de contingencias comunes del grupo 7 del RG (fijada por PGE)." },
    { id: 72, front: "Regularización RETA Caso I: provisional INFERIOR a la real, ¿efectos?", back: "Ingreso de la diferencia sin recargos ni intereses hasta el último día del mes siguiente a la notificación." },
    { id: 73, front: "Regularización RETA Caso II: provisional SUPERIOR a la real, ¿efectos?", back: "TGSS devuelve de oficio sin intereses antes del 30 de abril del año posterior a la comunicación de Hacienda. Deudas previas no se devuelven." },
    { id: 74, front: "¿Cuántas veces al año se puede cambiar la BC en RETA y efectos?", back: "Hasta 6 veces/año (bimestral): Ene-Feb -> 1/Mar; Mar-Abr -> 1/May; May-Jun -> 1/Jul; Jul-Ago -> 1/Sep; Sep-Oct -> 1/Nov; Nov-Dic -> 1/Ene." },
    { id: 75, front: "RETA: ¿qué 3 contingencias tienen carácter OBLIGATORIO?", back: "Incapacidad Temporal (IT), Contingencias Profesionales (CP) y Cese de Actividad. El desempleo puro es exclusivo del RG." },
    { id: 76, front: "¿Requisito de cotización para prestaciones RETA y qué es la invitación al pago?", back: "Estar al corriente. Si debe, 'invitación al pago': plazo improrrogable de 30 días naturales. Si paga, se reconoce sin penalizar." },
    { id: 77, front: "RETA: ¿penalización si se paga la deuda FUERA de los 30 días de invitación?", back: "Pago único y subsidios temporales: rebaja del 20%. Pensiones: efectos desde día 1 del mes siguiente al pago (pierde retroactividad)." },
    { id: 78, front: "Al causar baja en RETA, ¿cuánto dura la situación asimilada al alta para pensiones?", back: "90 días naturales desde el último día del mes de la baja (o desde efectos de baja si no coincide con fin de mes)." },
    { id: 79, front: "¿Cómo se calcula la Base Reguladora de NYCM en el RETA?", back: "Suma de BC de los 6 meses inmediatamente anteriores al mes previo al hecho causante, dividido entre 180 (regla de los '2 meses atrás')." },
    { id: 80, front: "IPT en RETA: ¿Tanto Alzado (TA) y diferencia con RG a los 60 años?", back: "TA = 40 mensualidades de la BR (da igual la edad). Al cumplir 60 años, el autónomo NO puede optar a pensión de IP (en RG SÍ)." },
    { id: 81, front: "En el cálculo de pensión del RETA, ¿hay integración de lagunas?", back: "No general. Excepción (art. 322 v. 2026): máximo 6 lagunas si agotan cese de actividad y siguen desempleados." },
    { id: 8201, front: "SETA (art. 324): ¿porcentajes mínimos de renta y dedicación agraria?", back: "≥50% de renta total de actividad agraria/complementaria, ≥25% directa de su explotación y >50% de su tiempo de trabajo." },
    { id: 8202, front: "SETA (art. 324): ¿cuál es el límite de rendimientos anuales netos?", back: "75% de la base de cotización máxima del Régimen General." },
    { id: 8203, front: "SETA (art. 324): ¿límite máximo de trabajadores por cuenta ajena?", back: "Máximo 2 fijos (o 546 jornadas reales/año si son eventuales). Labores personales y directas del titular." },
    { id: 83, front: "¿Quiénes quedan EXCLUIDOS del SE Empleados de Hogar (SEH)?", back: "Servicios domésticos contratados vía EMPRESA (DA 17ª Ley 27/2011). Van al Régimen General ordinario." },
    { id: 84, front: "SEH: ¿quién paga la IT del día 4 al 8 y quién desde el día 9?", back: "Días 4 al 8: empleador. Día 9 en adelante: Entidad Gestora/Mutua. Pago directo siempre, nunca pago delegado." },
    { id: 85, front: "SEA (Cuenta Ajena): ¿cuándo se considera un mes con 'período de inactividad'?", back: "Jornadas Reales (JR) < 76,67% de días naturales del mes. Excepción: si hace ≥5 JR/semana para mismo empresario, nunca hay inactividad." },
    { id: 86, front: "SEA: ¿requisitos para mantener inclusión DURANTE la inactividad?", back: "Haber realizado ≥30 JR en un año (365 días) y solicitarlo en los 3 meses naturales siguientes a la última jornada." },
    { id: 87, front: "REMAR: ¿coeficientes correctores de bases en Grupos II y III?", back: "IIA: 2/3 (0,66). IIB: 1/2 (0,50). III: 1/3 (0,33). Aplican solo a cotización (CC, Desempleo, Cese), NO para calcular BR de prestaciones." },
    { id: 88, front: "REMAR: ¿BR de NYCM para autónomos de Grupos II o III?", back: "BC del mes anterior al hecho causante (1 mes atrás, regla de IT). Grupo I sigue la regla general de RETA (6 meses)." },
    { id: 89, front: "¿Por qué la Minería del Carbón es un régimen especial atípico en la LGSS?", back: "Único no citado expresamente (art. 10.2.e, cláusula abierta). Cargos directivos incluidos; meros consejeros excluidos." },
    { id: 90, front: "Minería del Carbón: ¿edad mínima absoluta con coeficientes reductores?", back: "Nunca por debajo de los 52 años (coeficientes de riesgo van de 0,05 a 0,50 según categoría)." },
    { id: 91, front: "CASO: Manolo debe cuotas y pide NYCM el 12-Dic. Plazo de 30 días naturales.", back: "Hasta el 11 de Enero (Diciembre tiene 31 días). Si paga en plazo, cobra sin penalización." },
    { id: 92, front: "CASO: Verónica se jubila y arrastra deudas de cuotas de hace >4 años.", back: "No debe pagarlas para jubilarse; la deuda ha PRESCRITO (plazo máximo de prescripción de cuotas = 4 años)." },
    { id: 93, front: "CASO: Joaquín solicita cambiar su BC el 1 de Junio (3ª vez en el año). ¿Efectos?", back: "1 de Julio. Solicitudes entre 1-May y 30-Jun entran en vigor el 1-Jul (máximo 6 cambios/año)." },

    // --- Bloque 9: encuadramientos especiales adicionales ---
    { id: 109, front: "Diferencia: pluriempleo vs. pluriactividad.", back: "Pluriempleo: ≥2 empresas por cuenta ajena en el MISMO régimen (RG). Pluriactividad: actividades en ≥2 REGÍMENES distintos (RG y RETA)." },
    { id: 110, front: "¿Régimen de la SS para deportistas profesionales (RD 1006/1985)?", back: "Régimen General (cuenta ajena). La relación laboral especial no altera el encuadramiento." },
    { id: 111, front: "¿En qué régimen entran los ministros de culto religioso con acuerdo?", back: "Régimen General, asimilados a trabajadores por cuenta ajena (vía desarrollo normativo específico)." },
    { id: 112, front: "Artista por cuenta ajena (actuación puntual): ¿régimen y cotización?", back: "Régimen General (cuenta ajena). Cotización especial por actuación/jornada real debido a la discontinuidad." }
];