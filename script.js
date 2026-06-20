// Universal Flow Router Engine
function nextChapter(chapterNumber) {
    document.querySelectorAll('.chapter').forEach(chapter => {
        chapter.classList.remove('active');
    });

    const targetChapter = document.getElementById(`chapter-${chapterNumber}`);
    if (targetChapter) {
        targetChapter.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// Ambient Floating Particles Loop
function createAmbientHearts() {
    const symbols = ["❤️", "💖", "✨", "🐝", "🌸"];
    setInterval(() => {
        const particle = document.createElement("div");
        particle.classList.add("floating-particle");
        particle.innerText = symbols[Math.floor(Math.random() * symbols.length)];
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.fontSize = (Math.random() * 1 + 1) + "rem";
        particle.style.animationDuration = (Math.random() * 3 + 4) + "s";
        
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 7000);
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

// Chapter 2 Interaction
function openEnvelope() {
    const envelope = document.querySelector('.envelope-wrapper');
    envelope.classList.add('open');
    setTimeout(() => {
        document.getElementById('btn-to-ch3').classList.remove('hidden');
    }, 600);
}

// Chapter 3 Mechanics
let escapeCount = 0;
const maxEscapes = 5; 

function flyAway() {
    const heart = document.getElementById('heart-target');
    const hint = document.getElementById('game-hint');
    
    if (escapeCount < maxEscapes) {
        const randomX = Math.floor(Math.random() * 70) + 15;
        const randomY = Math.floor(Math.random() * 60) + 15;
        
        heart.style.left = `${randomX}%`;
        heart.style.top = `${randomY}%`;
        
        escapeCount++;
        if (escapeCount === 2) hint.innerText = "It's running wild! Try again! 😂";
        if (escapeCount === 4) hint.innerText = "Just a little closer... ❤️";
    }
}

function catchHeart(event) {
    const heart = document.getElementById('heart-target');
    const hint = document.getElementById('game-hint');
    const nextBtn = document.getElementById('btn-to-ch4');
    
    if(event) burstConfetti(event.clientX, event.clientY);
    
    escapeCount = maxEscapes; 
    heart.style.transform = "translate(-50%, -50%) rotate(-45deg) scale(1.4)";
    hint.innerHTML = "<strong>You caught it!</strong> <em>'My heart belongs to you anyway.'</em> 💖";
    hint.style.color = "#d45d79";
    nextBtn.classList.remove('hidden');
}

// Chapter 4 Mechanics
const jarMessages = [
    "I'm so incredibly proud of how hard you fight every single day. 🤍",
    "A quick reminder: You are my absolute favorite human. 🍯",
    "No matter how dark the clouds get, we'll clear them together. ☁️",
    "You make my world so much brighter just by being in it. ✨",
    "Take a deep breath. You are doing perfectly fine, my love. 🌊"
];
let shakeCount = 0;

function shakeJar() {
    const jar = document.getElementById('love-jar');
    const note = document.getElementById('jar-note');
    const nextBtn = document.getElementById('btn-to-ch5');
    
    jar.classList.add('shake-animation');
    note.classList.remove('pop-up');
    
    setTimeout(() => {
        note.innerHTML = jarMessages[Math.floor(Math.random() * jarMessages.length)];
        note.classList.add('pop-up');
        jar.classList.remove('shake-animation');
        
        shakeCount++;
        if (shakeCount >= 3) nextBtn.classList.remove('hidden');
    }, 400);
}

// Chapter 5 Mechanics
function dismissCloud(event) {
    const cloud = document.getElementById('dark-cloud');
    const sun = document.querySelector('.bright-sun');
    const hint = document.getElementById('worry-hint');
    const nextBtn = document.getElementById('btn-to-ch6');
    
    if(event) burstConfetti(event.clientX, event.clientY);
    cloud.classList.add('cloud-fly-out');
    
    setTimeout(() => {
        sun.classList.add('reveal');
        hint.innerHTML = "<strong>See?</strong> I will always be here to chase away your darkest days. ☀️";
        hint.style.color = "#ffb300";
        nextBtn.classList.remove('hidden');
    }, 400);
}

// Chapter 6 Mechanics
const relationshipMemories = [
    "✨ Page 1: The day you walked into my life and changed everything completely.",
    "🧸 Page 2: All of those late-night talks where I realized you were my safe place.",
    "🍕 Page 3: Every little laugh, inside joke, and silly argument we share.",
    "❤️ Page 4: No matter the distance or how hard it gets, my heart stays right here with you."
];
let currentPage = 0;

function turnPage() {
    const textElement = document.getElementById('memory-text');
    const nextPageBtn = document.getElementById('btn-next-page');
    const finishBtn = document.getElementById('btn-to-ch7');
    
    textElement.classList.add('page-flip-fade');
    
    setTimeout(() => {
        currentPage++;
        if (currentPage < relationshipMemories.length) {
            textElement.innerText = relationshipMemories[currentPage];
            textElement.classList.remove('page-flip-fade');
        }
        if (currentPage === relationshipMemories.length - 1) {
            nextPageBtn.classList.add('hidden');
            finishBtn.classList.remove('hidden');
        }
    }, 300);
}

// Chapter 7: Pizza Topping Machine (NEW!)
let toppingCounter = 0;
function addIngredient(emoji) {
    const zone = document.getElementById('pizza-toppings-zone');
    const nextBtn = document.getElementById('btn-to-ch8');
    
    const topping = document.createElement('div');
    topping.classList.add('placed-topping');
    topping.innerText = emoji;
    
    // Spread toppings around pizza base surface area coordinates smoothly
    topping.style.left = Math.floor(Math.random() * 70) + 15 + '%';
    topping.style.top = Math.floor(Math.random() * 70) + 15 + '%';
    
    zone.appendChild(topping);
    toppingCounter++;
    
    if (toppingCounter >= 4) {
        nextBtn.classList.remove('hidden');
    }
}

// Chapter 8: Playful Quiz Logic (NEW!)
function checkQuizAnswer(isCorrect, element) {
    const feedback = document.getElementById('quiz-feedback');
    const nextBtn = document.getElementById('btn-to-ch9');
    
    // Reset styling for options
    document.querySelectorAll('.quiz-opt-btn').forEach(btn => {
        btn.style.borderColor = "#eee";
        btn.style.background = "#fff";
    });

    if (isCorrect) {
        element.style.borderColor = "#2b8a3e";
        element.style.background = "#ebfbee";
        feedback.innerText = "Correct! Spot on! 🥰 Safe and sound right next to you.";
        feedback.style.color = "#2b8a3e";
        nextBtn.classList.remove('hidden');
    } else {
        element.style.borderColor = "#c92a2a";
        element.style.background = "#fff5f5";
        feedback.innerText = "Wrong option! Try again, I know you know this! 😂😜";
        feedback.style.color = "#c92a2a";
    }
}

// Chapter 9: Final Coupon Activation (NEW!)
function claimCoupon(event) {
    burstConfetti(event.clientX, event.clientY);
    document.getElementById('coupon-card').style.background = "linear-gradient(135deg, #ffdeeb 0%, #fcc419 100%)";
}
