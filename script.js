// Hardware Accelerated State Control Engine
function nextChapter(chapterNumber) {
    const currentActive = document.querySelector('.chapter.active');
    if (currentActive) {
        currentActive.style.opacity = "0";
    }

    setTimeout(() => {
        document.querySelectorAll('.chapter').forEach(chapter => {
            chapter.classList.remove('active');
        });

        const targetChapter = document.getElementById(`chapter-${chapterNumber}`);
        if (targetChapter) {
            targetChapter.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, 120);
}

// Low-Weight Ambient Particle Engine
function createAmbientHearts() {
    const symbols = ["✨", "⚜️", "🌹", "👑", "🕊️"];
    setInterval(() => {
        if (document.hidden) return;
        const p = document.createElement("div");
        p.classList.add("floating-particle");
        p.innerText = symbols[Math.floor(Math.random() * symbols.length)];
        p.style.left = Math.random() * 90 + "vw";
        p.style.fontSize = (Math.random() * 0.4 + 1) + "rem";
        p.style.animationDuration = (Math.random() * 2 + 6) + "s";
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 6500);
    }, 2500);
}
createAmbientHearts();

// High Performance Fragment Burst Array
function burstConfetti(x, y) {
    const shapes = ["✨", "⚜️", "🌹", "💎"];
    const container = document.createDocumentFragment();
    for (let i = 0; i < 15; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.innerText = shapes[Math.floor(Math.random() * shapes.length)];
        confetti.style.left = x + "px";
        confetti.style.top = y + "px";
        
        const destinationX = (Math.random() - 0.5) * 220;
        const destinationY = (Math.random() - 0.6) * 220;
        confetti.style.setProperty('--x', `${destinationX}px`);
        confetti.style.setProperty('--y', `${destinationY}px`);
        confetti.style.setProperty('--r', `${Math.random() * 360}deg`);
        
        container.appendChild(confetti);
        setTimeout(() => confetti.remove(), 600);
    }
    document.body.appendChild(container);
}

// Ch 1 Click Interaction
document.querySelectorAll('.promise-item').forEach(item => {
    item.addEventListener('click', (e) => burstConfetti(e.clientX, e.clientY));
});

// Ch 2 Open Document Envelope
function openEnvelope() {
    const env = document.querySelector('.envelope-wrapper');
    if (!env.classList.contains('open')) {
        env.classList.add('open');
        const r = env.getBoundingClientRect();
        burstConfetti(r.left + r.width / 2, r.top + r.height / 3);
        setTimeout(() => document.getElementById('btn-to-ch3').classList.remove('hidden'), 350);
    }
}

// Ch 3 Physics Target Path Chase
let escapeCount = 0; const maxEscapes = 3;
function flyAway() {
    const heart = document.getElementById('heart-target');
    if (escapeCount < maxEscapes) {
        heart.style.left = `${Math.floor(Math.random() * 50) + 25}%`;
        heart.style.top = `${Math.floor(Math.random() * 40) + 30}%`;
        escapeCount++;
    }
}
function catchHeart(e) {
    if(e) burstConfetti(e.clientX, e.clientY);
    escapeCount = maxEscapes;
    document.getElementById('heart-target').style.transform = "translate3d(-50%, -50%, 0) rotate(-45deg) scale(1.25)";
    document.getElementById('game-hint').innerHTML = "Held securely close within my soul.";
    document.getElementById('btn-to-ch4').classList.remove('hidden');
}

// Ch 4 Box Core Logic
const jarMessages = [
    "You possess an incredible soul, and I am endlessly proud to walk beside you. ⚜️",
    "My universe is entirely brighter, safer, and infinitely more beautiful because you exist. ✨",
    "No matter what challenges the world brings, my heart remains steady and fixed on you. 🌹",
    "Your presence is my absolute sanctuary. Take a gentle breath; we have each other. 🕊️"
];
let shakeCount = 0;
function shakeJar() {
    const jar = document.getElementById('love-jar');
    const note = document.getElementById('jar-note');
    jar.classList.add('shake-animation');
    note.classList.remove('pop-up');
    
    setTimeout(() => {
        note.innerHTML = jarMessages[Math.floor(Math.random() * jarMessages.length)];
        note.classList.add('pop-up'); jar.classList.remove('shake-animation');
        shakeCount++;
        if (shakeCount >= 2) document.getElementById('btn-to-ch5').classList.remove('hidden');
    }, 250);
}

// Ch 5 Weather Mitigation Mod
function dismissCloud(e) {
    if(e) burstConfetti(e.clientX, e.clientY);
    document.getElementById('dark-cloud').classList.add('cloud-fly-out');
    setTimeout(() => {
        document.querySelector('.bright-sun').classList.add('reveal');
        document.getElementById('btn-to-ch6').classList.remove('hidden');
    }, 250);
}

// Ch 6 Memory Lane Multi-string Array
const relationshipMemories = [
    "✨ Part I: The unforgettable moment our paths crossed, turning a regular day into history.",
    "👑 Part II: The steady comfort of our midnight exchanges where our masks came down completely.",
    "🌹 Part III: Every shared quiet moment, inside look, and unspoken promise built between us.",
    "⚜️ Part IV: My heart is bound to yours permanently, choosing you without hesitation every single day."
];
let currentPage = 0;
function turnPage() {
    const el = document.getElementById('memory-text');
    el.classList.add('page-flip-fade');
    setTimeout(() => {
        currentPage++;
        if (currentPage < relationshipMemories.length) { el.innerText = relationshipMemories[currentPage]; el.classList.remove('page-flip-fade'); }
        if (currentPage === relationshipMemories.length - 1) { document.getElementById('btn-next-page').classList.add('hidden'); document.getElementById('btn-to-ch7').classList.remove('hidden'); }
    }, 150);
}

// NEW! Ch 7 Premium Sanctuary Lock Engine
let keyEscapes = 0; const maxKeyEscapes = 3;
function floatKey() {
    const key = document.getElementById('skeleton-key');
    if (keyEscapes < maxKeyEscapes) {
        key.style.left = `${Math.floor(Math.random() * 55) + 20}%`;
        key.style.top = `${Math.floor(Math.random() * 50) + 20}%`;
        keyEscapes++;
    }
}
function insertKey(e) {
    if(e) burstConfetti(e.clientX, e.clientY);
    keyEscapes = maxKeyEscapes;
    const key = document.getElementById('skeleton-key');
    key.style.left = "50%"; key.style.top = "50%";
    key.style.transform = "translate3d(-50%, -50%, 0) scale(1.2)";
    document.querySelector('.lock-keyhole-target').innerText = "🔓";
    document.getElementById('lock-hint').innerHTML = "<strong>Unlocked!</strong> My inner world is completely yours to hold. ⚜️";
    document.getElementById('btn-to-ch8').classList.remove('hidden');
}

// NEW! Ch 8 Premium Record Stylus Engine
let needleEscapes = 0; const maxNeedleEscapes = 3;
function floatNeedle() {
    const needle = document.getElementById('record-needle');
    if (needleEscapes < maxNeedleEscapes) {
        needle.style.left = `${Math.floor(Math.random() * 55) + 20}%`;
        needle.style.top = `${Math.floor(Math.random() * 50) + 15}%`;
        needleEscapes++;
    }
}
function dropNeedle(e) {
    if(e) burstConfetti(e.clientX, e.clientY);
    needleEscapes = maxNeedleEscapes;
    const needle = document.getElementById('record-needle');
    needle.style.left = "50%"; needle.style.top = "40%";
    needle.style.transform = "translate3d(-50%, -50%, 0) scale(1.15) rotate(15deg)";
    document.getElementById('record-hint').innerHTML = "<strong>Playing:</strong> Our thoughts are aligned in a beautiful midnight symphony. 🎵";
    document.getElementById('btn-to-ch9').classList.remove('hidden');
}

// Ch 9 Verification Card Flipping Monitor
function checkAllFlips() {
    const flippedCount = document.querySelectorAll('.flip-card.flipped').length;
    if(flippedCount >= 2) document.getElementById('btn-to-ch10').classList.remove('hidden');
}

// Ch 10 Ticket Engine Activation
function claimCoupon(event) {
    burstConfetti(event.clientX, event.clientY);
    document.getElementById('coupon-card').style.transform = "scale3d(0.98, 0.98, 1)";
    setTimeout(() => document.getElementById('coupon-card').style.transform = "none", 120);
}
