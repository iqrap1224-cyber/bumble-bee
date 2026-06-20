// Universal Flow Router Engine
function nextChapter(chapterNumber) {
    document.querySelectorAll('.chapter').forEach(chapter => {
        chapter.classList.remove('active');
    });
    const targetChapter = document.getElementById(`chapter-${chapterNumber}`);
    if (targetChapter) {
        targetChapter.classList.add('active');
        window.scrollTo(0, 0);
        executeChapterLoadActions(chapterNumber);
    }
}

// Chapter Architecture Specific Activations
function executeChapterLoadActions(num) {
    if(num === 9) buildBubbleWrapField();
}

// Ambient Floating Particles Loop
function createAmbientHearts() {
    const symbols = ["❤️", "💖", "✨", "🐝", "🌸"];
    setInterval(() => {
        const p = document.createElement("div");
        p.classList.add("floating-particle");
        p.innerText = symbols[Math.floor(Math.random() * symbols.length)];
        p.style.left = Math.random() * 100 + "vw";
        p.style.fontSize = (Math.random() * 1 + 1) + "rem";
        p.style.animationDuration = (Math.random() * 3 + 4) + "s";
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 7000);
    }, 1200);
}
createAmbientHearts();

// Confetti Particle Explosion
function burstConfetti(x, y) {
    const shapes = ["🌸", "❤️", "✨", "🎉", "🍬"];
    for (let i = 0; i < 35; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.innerText = shapes[Math.floor(Math.random() * shapes.length)];
        confetti.style.left = x + "px";
        confetti.style.top = y + "px";
        confetti.style.fontSize = Math.random() * 1.5 + 0.8 + "rem";
        
        const destinationX = (Math.random() - 0.5) * 400;
        const destinationY = (Math.random() - 0.7) * 400;
        const rotation = Math.random() * 360;
        
        confetti.style.setProperty('--x', `${destinationX}px`);
        confetti.style.setProperty('--y', `${destinationY}px`);
        confetti.style.setProperty('--r', `${rotation}deg`);
        
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 1200);
    }
}

// Ch 1 Interaction
document.querySelectorAll('.promise-item').forEach(item => {
    item.addEventListener('click', (e) => burstConfetti(e.clientX, e.clientY));
});

// Ch 2 Letters
function openEnvelope() {
    const env = document.querySelector('.envelope-wrapper');
    if (!env.classList.contains('open')) {
        env.classList.add('open');
        const r = env.getBoundingClientRect();
        burstConfetti(r.left + r.width / 2, r.top + r.height / 3);
        setTimeout(() => document.getElementById('btn-to-ch3').classList.remove('hidden'), 600);
    }
}

// Ch 3 Catching Logic
let escapeCount = 0; const maxEscapes = 5;
function flyAway() {
    const heart = document.getElementById('heart-target');
    const hint = document.getElementById('game-hint');
    if (escapeCount < maxEscapes) {
        heart.style.left = `${Math.floor(Math.random() * 70) + 15}%`;
        heart.style.top = `${Math.floor(Math.random() * 60) + 15}%`;
        escapeCount++;
        if (escapeCount === 2) hint.innerText = "It's running wild! Try again! 😂";
        if (escapeCount === 4) hint.innerText = "Just a little closer... ❤️";
    }
}
function catchHeart(e) {
    if(e) burstConfetti(e.clientX, e.clientY);
    escapeCount = maxEscapes;
    document.getElementById('heart-target').style.transform = "translate(-50%, -50%) rotate(-45deg) scale(1.4)";
    document.getElementById('game-hint').innerHTML = "<strong>You caught it!</strong> My heart is yours! 💖";
    document.getElementById('btn-to-ch4').classList.remove('hidden');
}

// Ch 4 Jar Elements
const jarMessages = ["Proud of you! 🤍", "Favorite human! 🍯", "Clear sky crew! ☁️", "Brighter days! ✨", "Deep breath! 🌊"];
let shakeCount = 0;
function shakeJar() {
    const jar = document.getElementById('love-jar');
    const note = document.getElementById('jar-note');
    jar.classList.add('shake-animation');
    note.classList.remove('pop-up');
    
    const h = document.createElement('div'); h.classList.add('jar-heart'); h.innerText = "💗";
    h.style.left = Math.floor(Math.random() * 40) + 30 + "%";
    document.querySelector('.jar-wrapper').appendChild(h);
    setTimeout(() => h.remove(), 2000);
    
    setTimeout(() => {
        note.innerHTML = jarMessages[Math.floor(Math.random() * jarMessages.length)];
        note.classList.add('pop-up'); jar.classList.remove('shake-animation');
        shakeCount++;
        if (shakeCount >= 3) document.getElementById('btn-to-ch5').classList.remove('hidden');
    }, 400);
}

// Ch 5 Cloud System
function dismissCloud(e) {
    if(e) burstConfetti(e.clientX, e.clientY);
    document.getElementById('dark-cloud').classList.add('cloud-fly-out');
    setTimeout(() => {
        document.querySelector('.bright-sun').classList.add('reveal');
        document.getElementById('worry-hint').innerHTML = "Sun's out completely! ☀️";
        document.getElementById('btn-to-ch6').classList.remove('hidden');
    }, 400);
}

// Ch 6 Memory Book
const relationshipMemories = ["✨ Page 1: Walked right into my life change.", "🧸 Page 2: Safe place late talks.", "🍕 Page 3: Inside joke laughs.", "❤️ Page 4: My heart stays right here."];
let currentPage = 0;
function turnPage() {
    const el = document.getElementById('memory-text');
    el.classList.add('page-flip-fade');
    setTimeout(() => {
        currentPage++;
        if (currentPage < relationshipMemories.length) { el.innerText = relationshipMemories[currentPage]; el.classList.remove('page-flip-fade'); }
        if (currentPage === relationshipMemories.length - 1) { document.getElementById('btn-next-page').classList.add('hidden'); document.getElementById('btn-to-ch7').classList.remove('hidden'); }
    }, 300);
}

// Ch 7 Pizza
let toppingCounter = 0;
function addIngredient(emoji) {
    const zone = document.getElementById('pizza-toppings-zone');
    const topping = document.createElement('div');
    topping.classList.add('placed-topping'); topping.innerText = emoji;
    topping.style.left = Math.floor(Math.random() * 60) + 20 + '%';
    topping.style.top = Math.floor(Math.random() * 60) + 20 + '%';
    zone.appendChild(topping); toppingCounter++;
    if (toppingCounter === 4) {
        document.querySelector('.pizza-base').classList.add('bake-spin');
        setTimeout(() => document.getElementById('btn-to-ch8').classList.remove('hidden'), 800);
    }
}

// Ch 8 Trivia Quiz
function checkQuizAnswer(isCorrect, element) {
    const f = document.getElementById('quiz-feedback');
    if (isCorrect) {
        element.style.borderColor = "#2b8a3e"; element.style.background = "#ebfbee";
        f.innerText = "Correct! 🥰 wrapped safely inside your arms."; f.style.color = "#2b8a3e";
        document.getElementById('btn-to-ch9').classList.remove('hidden');
    } else {
        element.style.borderColor = "#c92a2a"; element.style.background = "#fff5f5";
        f.innerText = "Wrong option! Try again! 😂😜"; f.style.color = "#c92a2a";
    }
}

// Ch 9: Bubble Wrap Game
let bubblesPopped = 0;
function buildBubbleWrapField() {
    const grid = document.getElementById('bubble-wrap-grid');
    if(grid.children.length > 0) return;
    for(let i=0; i<8; i++){
        const b = document.createElement('div'); b.classList.add('bubble-item'); b.innerText = "🫧";
        b.onclick = (e) => {
            b.classList.add('popped'); b.innerText = "💥"; bubblesPopped++;
            burstConfetti(e.clientX, e.clientY);
            if(bubblesPopped >= 8) document.getElementById('btn-to-ch10').classList.remove('hidden');
        };
        grid.appendChild(b);
    }
}

// Ch 10: Slots
function spinSlots() {
    const r1 = document.getElementById('reel1'); const r2 = document.getElementById('reel2'); const r3 = document.getElementById('reel3');
    r1.classList.add('reel-spinning'); r2.classList.add('reel-spinning'); r3.classList.add('reel-spinning');
    setTimeout(() => {
        r1.classList.remove('reel-spinning'); r1.innerText = "❤️";
        r2.classList.remove('reel-spinning'); r2.innerText = "❤️";
        r3.classList.remove('reel-spinning'); r3.innerText = "❤️";
        const machine = document.querySelector('.slot-machine'); const rect = machine.getBoundingClientRect();
        burstConfetti(rect.left + rect.width/2, rect.top + rect.height/2);
        document.getElementById('btn-to-ch11').classList.remove('hidden');
    }, 1000);
}

// Ch 11: Virtual Pet Patting
let petCount = 0;
function petAnimal() {
    const pet = document.getElementById('virtual-pet'); pet.classList.add('purr');
    petCount += 20; if(petCount > 100) petCount = 100;
    document.getElementById('pet-progress').style.width = petCount + "%";
    if(petCount >= 100) {
        pet.innerText = "😻"; document.getElementById('pet-hint').innerText = "Happy Purring Activated!";
        document.getElementById('btn-to-ch12').classList.remove('hidden');
    }
    setTimeout(() => pet.classList.remove('purr'), 200);
}

// Ch 12: Cosmic Star Linker
let starsLit = 0;
function lightStar(el) {
    if(!el.classList.contains('lit')){
        el.classList.add('lit'); starsLit++;
        if(starsLit >= 5) document.getElementById('btn-to-ch13').classList.remove('hidden');
    }
}

// Ch 13: Password Input Decoder
function checkSecretCode() {
    const input = document.getElementById('decrypt-input').value.toUpperCase();
    const msg = document.getElementById('decrypt-message');
    if (input === "ILOVEYOU") {
        msg.innerText = "🔓 Decrypted: My love for you grows exponentially every single day!"; msg.style.color = "#2b8a3e";
        document.getElementById('btn-to-ch14').classList.remove('hidden');
    } else { msg.innerText = ""; }
}

// Ch 14: Bouquet Designer Engine
let bouquetSize = 0;
function addFlower(emoji) {
    if(bouquetSize >= 4) return;
    const vase = document.getElementById('vase-display');
    const f = document.createElement('div'); f.classList.add('bundled-flower'); f.innerText = emoji;
    f.style.left = (25 + (bouquetSize * 15)) + "px"; f.style.transform = `rotate(${(bouquetSize * 12) - 18}deg)`;
    vase.appendChild(f); bouquetSize++;
    if(bouquetSize === 4) document.getElementById('btn-to-ch15').classList.remove('hidden');
}

// Ch 15: Heavy Brick Smasher Matrix
let smashedBricks = 0;
function breakBrick(el) {
    if(!el.classList.contains('destroyed')) {
        el.classList.add('destroyed'); smashedBricks++;
        if(smashedBricks >= 4) document.getElementById('btn-to-ch16').classList.remove('hidden');
    }
}

// Ch 16: Magic Tea Formulation
let itemsAdded = 0;
function addTeaElement(flavorName) {
    itemsAdded++;
    if(itemsAdded >= 3) {
        document.getElementById('steam-effect').style.opacity = "1";
        document.getElementById('btn-to-ch17').classList.remove('hidden');
    }
}

// Ch 17: Sand Digger Chest Reveal
function digSand(el, isPrize) {
    if(el.classList.contains('dug')) return;
    el.classList.add('dug');
    if (isPrize) {
        el.innerText = "👑"; burstConfetti(window.innerWidth/2, window.innerHeight/2);
        document.getElementById('dig-hint').innerHTML = "<strong>You uncovered the core treasure chest!</strong>";
        document.getElementById('btn-to-ch18').classList.remove('hidden');
    } else { el.innerText = "🕳️"; }
}

// Ch 18: Fireworks Engine Launch
let skyRockets = 0;
function launchRocket(el, effectSymbol) {
    if(el.classList.contains('launched')) return;
    el.classList.add('launched'); skyRockets++;
    const rect = el.getBoundingClientRect();
    setTimeout(() => {
        burstConfetti(rect.left, rect.top - 120);
        if(skyRockets >= 3) document.getElementById('btn-to-ch19').classList.remove('hidden');
    }, 500);
}

// Ch 19: All Promise Flips Validator
function checkAllFlips() {
    const flippedCount = document.querySelectorAll('.flip-card.flipped').length;
    if(flippedCount >= 2) document.getElementById('btn-to-ch20').classList.remove('hidden');
}

// Ch 20: Final Ticket Activation Burst
function claimCoupon(event) {
    burstConfetti(event.clientX, event.clientY);
    document.getElementById('coupon-card').style.background = "linear-gradient(135deg, #ffdeeb 0%, #fcc419 100%)";
}
