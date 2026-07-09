// Motor de flashcards con volteo 3D, selector de mazo y repaso hasta agotar
// el mazo. Las tarjetas "No lo sé" vuelven a la cola; "Lo sé" salen de ella.

const mazos = {
    fundamentos: { data: cardsFundamentos, label: "Mazo A · Fundamentos y encuadramiento (41)" },
    casos:       { data: cardsCasos,       label: "Mazo B · Casos prácticos y trampas (22)" },
    reta:        { data: cardsReta,        label: "Mazo C · RETA y Sistemas Especiales (30)" }
};

function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

let cards = mazos.fundamentos.data;
let queue = shuffle(cards.map((_, i) => i));
let total = cards.length;
let currentIndex = null;
let showingBack = false;

const frontEl = document.getElementById("front");
const backEl = document.getElementById("back");
const cardBox = document.getElementById("card");
const doneEl = document.getElementById("done");
const progressEl = document.getElementById("progress");
const flipBtn = document.getElementById("flip");
const knowBtn = document.getElementById("know");
const dontKnowBtn = document.getElementById("dontknow");
const deckSelect = document.getElementById("deckSelect");

// Rellenar el desplegable dinámicamente
for (const key in mazos) {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = mazos[key].label;
    deckSelect.appendChild(opt);
}
deckSelect.value = "fundamentos";

function loadDeck(key) {
    cards = mazos[key].data;
    total = cards.length;
    queue = shuffle(cards.map((_, i) => i));
    loadCard();
}

function updateProgress() {
    if (!progressEl) return;
    const pendientes = new Set(queue).size;
    progressEl.textContent = `Quedan ${pendientes} de ${total} tarjetas`;
}

function showFinished() {
    cardBox.style.display = "none";
    flipBtn.style.display = "none";
    knowBtn.style.display = "none";
    dontKnowBtn.style.display = "none";
    doneEl.style.display = "block";
    updateProgress();
}

function loadCard() {
    if (queue.length === 0) {
        showFinished();
        return;
    }
    currentIndex = queue[0];
    const card = cards[currentIndex];

    frontEl.textContent = card.front;
    backEl.textContent = card.back;

    cardBox.classList.remove("flipped");
    showingBack = false;

    cardBox.style.display = "block";
    doneEl.style.display = "none";
    flipBtn.style.display = "inline-block";
    knowBtn.style.display = "none";
    dontKnowBtn.style.display = "none";

    updateProgress();
}

function flipCard() {
    cardBox.classList.toggle("flipped");
    showingBack = !showingBack;

    if (showingBack) {
        flipBtn.style.display = "none";
        knowBtn.style.display = "inline-block";
        dontKnowBtn.style.display = "inline-block";
    }
}

function gradeCard(knewIt) {
    queue.shift();
    if (!knewIt) {
        const insertPos = Math.min(queue.length, 3);
        queue.splice(insertPos, 0, currentIndex);
    }
    loadCard();
}

flipBtn.addEventListener("click", flipCard);
cardBox.addEventListener("click", flipCard);
knowBtn.addEventListener("click", (e) => { e.stopPropagation(); gradeCard(true); });
dontKnowBtn.addEventListener("click", (e) => { e.stopPropagation(); gradeCard(false); });
deckSelect.addEventListener("change", (e) => loadDeck(e.target.value));

loadCard();
