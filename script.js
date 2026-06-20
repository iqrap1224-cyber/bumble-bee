// Universal Architecture Chapter Changer
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

// Chapter 2: Envelope Open Actions
function openEnvelope() {
    const envelope = document.querySelector('.envelope-wrapper');
    envelope.classList.add('open');
    
    setTimeout(() => {
        document.getElementById('btn-to-ch3').classList.remove('hidden');
    }, 600);
}

// Chapter 3: Catch My Heart Game Rules
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

// Chapter 4: Love Jar Mechanics
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
}s
