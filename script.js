// Application Master Sequence Transition Manager
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

// Chapter 2: Envelope Open Handlers
function openEnvelope() {
    const envelope = document.querySelector('.envelope-wrapper');
    envelope.classList.toggle('open');
    
    if (envelope.classList.contains('open')) {
        setTimeout(() => {
            document.getElementById('btn-to-ch3').classList.remove('hidden');
        }, 600);
    }
}

// Chapter 3: Catch My Heart Logic Mechanics
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
        
        // Maintain rotate(-45deg) scaling transforms safely
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
