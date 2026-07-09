// MAZO B — Casos prácticos y trampas de examen (Tema 2)
// Casos resueltos en clase (Sara/Lucas, Daniela/Encarnación, Manuel/Rubén/José)
// + tarjetas recicladas de tests reales de Destino Funcionario. 26 tarjetas.

const cardsCasos = [
    // --- Bloque 6: Casos prácticos resueltos en clase ---
    { id: 42, front: "CASO: Sara contrata a su hijo Lucas (27 años, NO conviven). ¿Régimen y exclusión?", back: "RG (cuenta ajena) con inclusión plena (SÍ desempleo). Al faltar convivencia, no aplica art. 12; es contratación ordinaria." },
    { id: 43, front: "CASO: Daniela contrata a su hija Encarnación (42 años, discapacidad 65%, CONVIVE). ¿Régimen y exclusión?", back: "RG (cuenta ajena), EXCLUIDO desempleo. Al ser discapacidad ≥65% (tramo superior) no se exige primera alta. Edad irrelevante." },
    { id: 44, front: "CASO: Computadores SL (Manuel 33,33%, Rubén 33,33%, José 33,33%). Manuel y Rubén conviven y tienen DG. ¿Manuel?", back: "RETA (presunción): cumple doble vía: individual ≥1/3 (33,33%) y familiar ≥50% (33,33%+33,33% conviviente = 66,66%)." },
    { id: 45, front: "Mismo caso (33,33% c/u): ¿Encuadramiento de José (sin cargo ni DG)?", back: "RETA (presunción): le basta superar el umbral individual de ≥1/3 (33,33%) aunque no ejerza funciones de dirección." },
    { id: 46, front: "CASO: José (33,33% Computadores SL) deja de trabajar pero mantiene acciones. ¿Encuadramiento?", back: "EXCLUIDO del sistema (art. 306). Socio capitalista mero perceptor de dividendos; no requiere alta." },
    { id: 47, front: "CASO: Computadores SL (Manuel 40%, José 40%, Rubén 20%). Manuel y Rubén conviven y tienen DG. ¿Rubén?", back: "RETA (presunción): individual (20%) no basta, pero suma ≥50% con hermano conviviente (20%+40% = 60%)." },
    { id: 48, front: "CASO: Reparto anterior (40/40/20). Manuel y Rubén DEJAN de convivir. ¿Cambio en Rubén?", back: "Pasa a RG ASIMILADO (sin desempleo ni Fogasa). Pierde suma familiar y su 20% no da control, pero tiene DG y cargo (caso ámbar)." },
    { id: 49, front: "CASO: Computadores SL (Manuel 20%, Rubén 25%, José 55%). Manuel y Rubén conviven. ¿José?", back: "RETA con CONTROL EFECTIVO ABSOLUTO (Iuris et de iure). Su 55% individual supera por sí solo el umbral del >50%." },
    { id: 50, front: "Mismo caso (20/25/55): ¿Por qué Rubén va a RETA y Manuel a RG?", back: "Rubén (25% + DG) cumple el umbral de ≥1/4 + DG → RETA presunción. Manuel (20%) no llega a umbral individual ni familiar (20%+25%=45% < 50%) → RG asimilado." },

    // --- Bloque 7: Tarjetas recicladas de tests reales (Destino Funcionario) ---
    { id: 51, front: "Según art. 137, ¿qué 3 motivos excluyen un trabajo del RG?", back: "1) Servicios amistosos/benévolos/buena vecindad. 2) Inclusión en Régimen Especial. 3) Profesores/sanitarios eméritos. (Nota: si es retribuido, SÍ hay alta)." },
    { id: 52, front: "¿Régimen de Registradores de la Propiedad, de Bienes Muebles y Aspirantes?", back: "RETA (igual que Notarios). En cambio, el personal contratado a su servicio (empleados) va al Régimen General (RG)." },
    { id: 53, front: "Según art. 305, ¿3 requisitos EXACTOS (edad, ajenidad, actividad) para RETA?", back: "1) Persona física ≥18 años. 2) Actividad por cuenta propia (fuera del ámbito de dirección de otro). 3) Dé o no ocupación a trabajadores por cuenta ajena." },
    { id: 54, front: "CASO: Berta 25%, Bárbara 25% (conviven/administradora/DG), Brígida 30% (DG), Brenda 20%. ¿Bárbara?", back: "RETA (presunción). Cargo y DG son irrelevantes aquí porque ya ostenta el control por vía familiar (25%+25% con Berta = 50%)." },
    { id: 55, front: "Mismo caso: ¿Encuadramiento de Berta (25%, convive, sin cargo ni DG)?", back: "RETA (presunción). Alcanza el 50% por suma con hermana conviviente. No poseer DG o cargo es indiferente si hay control familiar." },
    { id: 56, front: "Mismo caso: Brígida (30%+DG, no convive) vende la mitad y se queda con 15%. ¿Encuadramiento?", back: "RG (cuenta ajena pura), SÍ desempleo. Con 15% no hay control y, aunque ejerce DG, al NO ser administradora falla el caso ámbar (rojo)." },
    { id: 57, front: "Mismo caso: Brenda (20%, no trabaja en la familiar, es asalariada en OTRA). ¿Situación?", back: "RG (cuenta ajena) por su trabajo en la otra empresa. Respecto a la empresa familiar, no genera alta al no realizar actividad." },
    { id: 58, front: "Mismo caso: Si Bárbara y Berta DEJAN de convivir (25% c/u). ¿Cambia su encuadramiento?", back: "Berta: pasa a RG puro (25% sin DG). Bárbara: MANTIENE RETA (presunción) porque ejerce DG y posee ≥1/4 (25%) del capital (art. 305)." },
    { id: 59, front: "CASO Zanahoria: Mónica (26 años), convive con padres autónomos y trabaja en frutería. ¿Encuadramiento?", back: "RG con exclusión de desempleo (art. 12.2, hijo <30 conviviente). Alternativa opcional: RETA (alta como autónomo colaborador)." },
    { id: 60, front: "CASO Zanahoria: Genaro (discapacidad 65%) contratado por un Centro Especial de Empleo (CEE). ¿Encuadramiento (art. 13)?", back: "Cuenta ajena, en el régimen de la Seguridad Social que corresponda según la actividad del CEE (no obligatoriamente RG)." },
    { id: 61, front: "CASO Zanahoria: David (hermano del dueño, vive con su esposa, NO convive con el dueño) trabaja en frutería. ¿Encuadramiento?", back: "RG (cuenta ajena pura) SÍ desempleo. Pese al parentesco (2.º grado), la falta de convivencia/cargo tumba la exclusión del art. 12.1." },
    { id: 62, front: "CASO Zanahoria: Fernando (32 años, hijo, discapacidad 45%, NO es primera alta, convive). ¿Encuadramiento?", back: "RETA (cuenta propia). El tramo 33-65% de discapacidad para ir a RG con exclusión exige primera alta. Al no cumplirlo, aplica art. 12 (RETA)." },
    { id: 63, front: "CASO Zanahoria: Antonio (discapacidad 33%) contratado por CEE. ¿Cumple art. 13?", back: "Sí. El CEE exige ≥70% de plantilla con discapacidad, pero el requisito individual mínimo para el trabajador es ≥33%, no 65%." },

    // --- Bloque 8: variantes de control efectivo sin parentesco ni convivencia ---
    { id: 102, front: "CASO: 3 socios sin parentesco (33,34% / 33,33% / 33,33%), ninguno con DG ni cargo. ¿Encuadramiento?", back: "Los tres en RETA (presunción). Cada uno supera individualmente el umbral de 1/3 (≥33,33%) del capital social." },
    { id: 103, front: "CASO: Reparto 20% / 40% / 40% sin parentesco, sin DG ni cargo. ¿Socio del 20%?", back: "RG (cuenta ajena pura). No alcanza el 1/3 individual, no suma por parentesco y no ejerce funciones de dirección." },
    { id: 104, front: "Mismo reparto (20/40/40), pero el del 20% SÍ tiene DG retribuida y es consejero. ¿Cambia?", back: "Sí: RG ASIMILADO (excluido desempleo/Fogasa). Su 20% no llega al 1/4 del RETA, pero al cumplir el trineo (sin control + DG + consejero) es caso ámbar." },

    // --- Bloque 9: pluriactividad, caso práctico ---
    { id: 117, front: "CASO: Socio en RETA por control efectivo trabaja además unas horas como asalariado en otra empresa. ¿Situación?", back: "Pluriactividad: alta y cotización simultánea en RETA y en RG, con derecho a reducciones/bonificaciones específicas de cuota." }
];