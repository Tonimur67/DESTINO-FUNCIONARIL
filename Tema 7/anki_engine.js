// ============================================================
// ANKI ENGINE — motor genérico y reutilizable de flashcards
// No depende del tema ni del orden de carga de los scripts.
// Cada archivo de mazo simplemente hace:
//
//   window.ankiDecks = window.ankiDecks || [];
//   window.ankiDecks.push({ name: "A · Fundamentos", cards: miArrayDeCartas });
//
// Este motor solo se carga UNA VEZ por HTML, en cualquier orden
// respecto a los mazos (antes o después, da igual).
// ============================================================

window.ankiDecks = window.ankiDecks || [];

(function () {
  let queue = [];
  let current = null;
  let totalInDeck = 0;
  let knownCount = 0;
  let currentDeckIndex = 0;

  // --- Estadisticas de fallos por tarjeta (localStorage, por pagina) ---
  function statsKey() {
    return 'ankiStats::' + window.location.pathname;
  }

  function loadAllStats() {
    try {
      return JSON.parse(localStorage.getItem(statsKey())) || {};
    } catch (e) {
      return {};
    }
  }

  function saveAllStats(stats) {
    try {
      localStorage.setItem(statsKey(), JSON.stringify(stats));
    } catch (e) { /* localStorage no disponible, no pasa nada */ }
  }

  function registrarIntento(deckName, card, acertada) {
    const stats = loadAllStats();
    const key = deckName + '::' + card.id;
    if (!stats[key]) {
      stats[key] = { deck: deckName, id: card.id, front: card.front, fails: 0, seen: 0 };
    }
    stats[key].seen++;
    if (!acertada) stats[key].fails++;
    saveAllStats(stats);
  }

  function exportarFallos(topN) {
    const stats = loadAllStats();
    const lista = Object.values(stats)
      .filter(s => s.seen >= 2 && s.fails > 0)
      .map(s => ({ ...s, ratio: s.fails / s.seen }))
      .sort((a, b) => b.ratio - a.ratio || b.fails - a.fails)
      .slice(0, topN || 15);

    if (lista.length === 0) {
      return 'Todavía no hay suficiente repaso registrado para detectar tarjetas problemáticas (repasa alguna tarjeta al menos 2 veces primero).';
    }

    let texto = 'TARJETAS CON MÁS FALLOS — ' + document.title + '\n';
    texto += 'Pega este bloque junto con Prompt_Criba_Mazos_Anki.md para regenerar justo estas.\n\n';
    lista.forEach(s => {
      const pct = Math.round(s.ratio * 100);
      texto += '- [' + s.deck + ' · id ' + s.id + '] "' + s.front + '" — ' + s.fails + '/' + s.seen + ' fallos (' + pct + '%)\n';
    });
    return texto;
  }

  function mostrarExportacion() {
    const box = el('statsExport');
    const btn = el('exportStatsBtn');
    if (!box) return;
    const visible = box.style.display === 'block';
    if (visible) {
      box.style.display = 'none';
      if (btn) btn.textContent = '📊 Ver mis tarjetas con más fallos';
      return;
    }
    box.value = exportarFallos(15);
    box.style.display = 'block';
    box.select();
    if (btn) btn.textContent = '📊 Ocultar informe de fallos';
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function el(id) { return document.getElementById(id); }

  function populateSelect() {
    const select = el('deckSelect');
    if (!select) return;
    select.innerHTML = '';
    window.ankiDecks.forEach((deck, i) => {
      const opt = document.createElement('option');
      opt.value = i;
      opt.textContent = deck.name + ' (' + deck.cards.length + ')';
      select.appendChild(opt);
    });
  }

  function loadDeck(index) {
    const deck = window.ankiDecks[index];
    if (!deck) return;
    currentDeckIndex = index;
    queue = shuffle(deck.cards);
    totalInDeck = queue.length;
    knownCount = 0;
    el('done').style.display = 'none';
    el('card').style.display = '';
    el('flip').style.display = '';
    el('know').style.display = 'none';
    el('dontknow').style.display = 'none';
    nextCard();
  }

  function nextCard() {
    el('card').classList.remove('flipped');
    el('know').style.display = 'none';
    el('dontknow').style.display = 'none';
    el('flip').style.display = '';

    if (queue.length === 0) {
      el('card').style.display = 'none';
      el('flip').style.display = 'none';
      el('done').style.display = '';
      updateProgress();
      return;
    }
    current = queue[0];
    el('front').textContent = current.front;
    el('back').textContent = current.back;
    updateProgress();
  }

  function updateProgress() {
    const progress = el('progress');
    if (!progress) return;
    const restantes = queue.length;
    progress.textContent = 'Sabidas: ' + knownCount + ' / ' + totalInDeck + '  ·  Quedan ' + restantes + ' por repasar';
  }

  function flipCard() {
    if (!current) return;
    el('card').classList.toggle('flipped');
    const flipped = el('card').classList.contains('flipped');
    el('know').style.display = flipped ? '' : 'none';
    el('dontknow').style.display = flipped ? '' : 'none';
  }

  function markKnow() {
    if (!current) return;
    registrarIntento(window.ankiDecks[currentDeckIndex].name, current, true);
    queue.shift();
    knownCount++;
    nextCard();
  }

  function markDontKnow() {
    if (!current) return;
    registrarIntento(window.ankiDecks[currentDeckIndex].name, current, false);
    const card = queue.shift();
    queue.push(card); // vuelve al final de la cola para repasarla de nuevo
    nextCard();
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (!el('deckSelect')) return; // esta página no tiene bloque Anki
    populateSelect();
    el('deckSelect').addEventListener('change', (e) => loadDeck(parseInt(e.target.value, 10)));
    el('flip').addEventListener('click', flipCard);
    el('card').addEventListener('click', flipCard);
    el('know').addEventListener('click', function (e) { e.stopPropagation(); markKnow(); });
    el('dontknow').addEventListener('click', function (e) { e.stopPropagation(); markDontKnow(); });
    if (el('exportStatsBtn')) {
      el('exportStatsBtn').addEventListener('click', mostrarExportacion);
    }
    loadDeck(0);
  });
})();