// Dynamic Flow Router Engine
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
            executeChapterLoadActions(chapterNumber);
        }
    }, 150);
}

// Router Trigger Hooks
function executeChapterLoadActions(num) {
    if(num === 8) buildBubbleWrapField();
}

// Ambient Gentle Backing Loop
function createAmbientHearts() {
    const symbols = ["❤️", "💖", "✨", "🐝", "🌸"];
    setInterval(() => {
        if (document.hidden) return; // Save memory when tab is closed
        const p = document.createElement("div");
        p.classList.add("floating-particle");
        p.innerText = symbols[Math.floor(Math.random() * symbols.length)];
        p.style.left = Math.random() * 90 + "vw";
        p.style.fontSize = (Math.random() * 0.5 + 1.1) + "rem";
        p.style.animationDuration = (Math.random() * 2 + 5) + "s";
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 6000);
    }, 2000);
}
createAmbientHearts();

// High-Efficiency Single Event Burst
function burstConfetti(x, y) {
    const shapes = ["🌸", "❤️", "✨", "💝"];
    const container = document.createDocumentFragment();
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.innerText = shapes[Math.floor(Math.random() * shapes.length)];
        confetti.style.left = x + "px";
        confetti.style.top = y + "px";
        
        const destinationX = (Math.random() - 0.5) * 250;
        const destinationY = (Math.random() - 0.7) * 250;
        confetti.style.setProperty('--x', `${destinationX}px`);
        confetti.style.setProperty('--y', `${destinationY}px`);
        confetti.style.setProperty('--r', `${Math.random() * 360}deg`);
        
        container.appendChild(confetti);
        setTimeout(() => confetti.remove(), 800);
    }
    document.body.appendChild(container);
}

// Ch 1 Confetti Click
document.querySelectorAll('.promise-item').forEach(item => {
    item.addEventListener('click', (e) => burstConfetti(e.clientX, e.clientY));
});

// Ch 2 Open Document
function openEnvelope() {
    const env = document.querySelector('.envelope-wrapper');
    if (!env.classList.contains('open')) {
        env.classList.add('open');
        const r = env.getBoundingClientRect();
        burstConfetti(r.left + r.width / 2, r.top + r.height / 3);
        setTimeout(() => document.getElementById('btn-to-ch3').classList.remove('hidden'), 400);
    }
}

// Ch 3 Physics Target Chase
let escapeCount = 0; const maxEscapes = 4;
function flyAway() {
    const heart = document.getElementById('heart-target');
    if (escapeCount < maxEscapes) {
        heart.style.left = `${Math.floor(Math.random() * 60) + 20}%`;
        heart.style.top = `${Math.floor(Math.random() * 50) + 25}%`;
        escapeCount++;
    }
}
function catchHeart(e) {
    if(e) burstConfetti(e.clientX, e.clientY);
    escapeCount = maxEscapes;
    document.getElementById('heart-target').style.transform = "translate(-50%, -50%) rotate(-45deg) scale(1.3)";
    document.getElementById('game-hint').innerHTML = "<strong>Caught!</strong> Held safely close... 💖";
    document.getElementById('btn-to-ch4').classList.remove('hidden');
}

// Ch 4 Jar Drop Engine
const jarMessages = ["Proud of you cutie! 🤍", "You're my ultimate favorite! 🍯", "Clear blue skies ahead! ☁️", "You make my world sparkle! ✨"];
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
    }, 300);
}

// Ch 5 Dismiss Storm
function dismissCloud(e) {
    if(e) burstConfetti(e.clientX, e.clientY);
    document.getElementById('dark-cloud').classList.add('cloud-fly-out');
    setTimeout(() => {
        document.querySelector('.bright-sun').classList.add('reveal');
        document.getElementById('btn-to-ch6').classList.remove('hidden');
    }, 300);
}

// Ch 6 Memory Lane Pages
const relationshipMemories = ["✨ Page 1: The magical day you wandered into my life and made everything sweeter.", "❤️ Page 2: My whole heart is permanently yours forever and ever."];
let currentPage = 0;
function turnPage() {
    const el = document.getElementById('memory-text');
    el.classList.add('page-flip-fade');
    setTimeout(() => {
        currentPage++;
        if (currentPage < relationshipMemories.length) { el.innerText = relationshipMemories[currentPage]; el.classList.remove('page-flip-fade'); }
        if (currentPage === relationshipMemories.length - 1) { document.getElementById('btn-next-page').classList.add('hidden'); document.getElementById('btn-to-ch7').classList.remove('hidden'); }
    }, 200);
}

// NEW! Ch 7 Loading Embraces
let petCount = 0;
function petAnimal() {
    const pet = document.getElementById('virtual-pet'); pet.classList.add('purr');
    petCount += 25; if(petCount > 100) petCount = 100;
    document.getElementById('pet-progress').style.width = petCount + "%";
    if(petCount >= 100) {
        pet.innerText = "🥰"; document.getElementById('pet-hint').innerText = "Warm Hug Completely Sent!";
        document.getElementById('btn-to-ch8').classList.remove('hidden');
    }
    setTimeout(() => pet.classList.remove('purr'), 150);
}

// NEW! Ch 8 Bubble Wrap Field Setup
let bubblesPopped = 0;
function buildBubbleWrapField() {
    const grid = document.getElementById('bubble-wrap-grid');
    if(grid.children.length > 0) return;
    const fragment = document.createDocumentFragment();
    for(let i=0; i<8; i++){
        const b = document.createElement('div'); b.classList.add('bubble-item'); b.innerText = "💖";
        b.onclick = (e) => {
            b.classList.add('popped'); b.innerText = "💥"; bubblesPopped++;
            burstConfetti(e.clientX, e.clientY);
            if(bubblesPopped >= 8) document.getElementById('btn-to-ch9').classList.remove('hidden');
        };
        fragment.appendChild(b);
    }
    grid.appendChild(fragment);
}

// NEW! Ch 9 Card Flip Monitor
function checkAllFlips() {
    const flippedCount = document.querySelectorAll('.flip-card.flipped').length;
    if(flippedCount >= 2) document.getElementById('btn-to-ch10').classList.remove('hidden');
}

// NEW! Ch 10 Ticket Activation Burst
function claimCoupon(event) {
    burstConfetti(event.clientX, event.clientY);
    document.getElementById('coupon-card').style.transform = "scale(0.98)";
    setTimeout(() => document.getElementById('coupon-card').style.transform = "none", 150);
}
