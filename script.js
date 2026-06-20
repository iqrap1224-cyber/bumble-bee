// Global System Transition Manager
function nextChapter(chapterNumber) {
    // Hide every single available chapter completely
    document.querySelectorAll('.chapter').forEach(chapter => {
        chapter.classList.remove('active');
    });

    // Make the newly requested chapter visible
    const targetChapter = document.getElementById(`chapter-${chapterNumber}`);
    if (targetChapter) {
        targetChapter.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// Chapter 2: Envelope Interaction Rules
function openEnvelope() {
    const envelope = document.querySelector('.envelope-wrapper');
    envelope.classList.toggle('open');
    
    // Smoothly display Chapter 3 activation triggers once the envelope unrolls
    if (envelope.classList.contains('open')) {
        setTimeout(() => {
            document.getElementById('btn-to-ch3').classList.remove('hidden');
        }, 600);
    }
}
let escapeCount = 0;
const maxEscapes = 5; 

function flyAway() {
    const heart = document.getElementById('heart-target');
    const hint = document.getElementById('game-hint');
    
    if (escapeCount < maxEscapes) {
        const maxX = 75; 
        const maxY = 65;
        
        const randomX = Math.floor(Math.random() * maxX) + 15;
        const randomY = Math.floor(Math.random() * maxY) + 15;
        
        // Keep the rotate(-45deg) intact so the heart shape doesn't break when moving!
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
    
    // Pulse animation when caught
    heart.style.transform = "translate(-50%, -50%) rotate(-45deg) scale(1.4)";
    hint.innerHTML = "<strong>You caught it!</strong> <em>'My heart belongs to you anyway.'</em> 💖";
    hint.style.color = "#d45d79";
    
    nextBtn.classList.remove('hidden');
}
// Chapter 3: Catch The Bee Logic Engine

