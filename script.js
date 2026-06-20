// Master Controller Transitions Engine
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
        const maxX = 70; 
        const maxY = 60;
        
        const randomX = Math.floor(Math.random() * maxX) + 15;
        const randomY = Math.floor(Math.random() * maxY) + 15;
        
        heart.style.left = `${randomX}%`;
        heart.style.top = `${randomY}%`;
        
        escapeCount++;
        if (escapeCount === 2) hint.innerText = "It's running wild! Try again! 😂";
        if (escapeCount === 4) hint.innerText = "Just a little closer... ❤️";
    }
}

function catchHeart() {
    const heart = document.getElementById('heart-target');
    const hint = document.getElementById('game-hint');
    const nextBtn = document.getElementById('btn-to-ch4');
    
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
        const randomMessage = jarMessages[Math.floor(Math.random() * jarMessages.length)];
        note.innerHTML = randomMessage;
        note.classList.add('pop-up');
        jar.classList.remove('shake-animation');
        
        shakeCount++;
        if (shakeCount >= 3) {
            nextBtn.classList.remove('hidden');
        }
    }, 400);
}

// Chapter 5 Mechanics
function dismissCloud() {
    const cloud = document.getElementById('dark-cloud');
    const sun = document.querySelector('.bright-sun');
    const hint = document.getElementById('worry-hint');
    const nextBtn = document.getElementById('btn-to-ch6');
    
    cloud.classList.add('cloud-fly-out');
    
    setTimeout(() => {
        sun.classList.add('reveal');
        hint.innerHTML = "<strong>See?</strong> I will always be here to chase away your darkest days. ☀️";
        hint.style.color = "#ffb300";
        nextBtn.classList.remove('hidden');
    }, 400);
}

// Chapter 6: Scrapbook Memory Deck
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
    const finishBtn = document.getElementById('btn-finish');
    
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
