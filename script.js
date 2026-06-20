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

// Chapter 3: Catch The Bee Logic Engine
let escapeCount = 0;
const maxEscapes = 5; // The bee will give up and stand still on the 6th run

function flyAway() {
    const bee = document.getElementById('bee');
    const hint = document.getElementById('game-hint');
    
    if (escapeCount < maxEscapes) {
        // Keeps the safe coordinates bounded entirely inside the honey grid bounds
        const maxX = 80; 
        const maxY = 70;
        
        const randomX = Math.floor(Math.random() * maxX) + 10;
        const randomY = Math.floor(Math.random() * maxY) + 10;
        
        bee.style.left = `${randomX}%`;
        bee.style.top = `${randomY}%`;
        
        escapeCount++;
        
        // Dynamically alter contextual logs to make him smirk
        if (escapeCount === 2) hint.innerText = "Wow, he's fast! Try again! 😂";
        if (escapeCount === 4) hint.innerText = "Okay, he's just teasing you now... 🍯";
    }
}

function catchBee() {
    const bee = document.getElementById('bee');
    const hint = document.getElementById('game-hint');
    const nextBtn = document.getElementById('btn-to-ch4');
    
    // Lock the bee's flight engine down instantly
    escapeCount = maxEscapes; 
    
    // Scale and adjust content logs safely
    bee.style.transform = "translate(-50%, -50%) scale(1.4)";
    hint.innerHTML = "<strong>You caught him!</strong> He brought a message: <em>'I will always fly back to you.'</em> 💛";
    hint.style.color = "#d45d79";
    
    // Present progression options
    nextBtn.classList.remove('hidden');
}
