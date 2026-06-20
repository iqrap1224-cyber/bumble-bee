// Function to switch between chapters smoothly
function nextChapter(chapterNumber) {
    // Hide all chapters
    document.querySelectorAll('.chapter').forEach(chapter => {
        chapter.classList.remove('active');
    });

    // Show the targeted chapter
    const targetChapter = document.getElementById(`chapter-${chapterNumber}`);
    if (targetChapter) {
        targetChapter.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// Chapter 2 Interaction: Open Envelope
function openEnvelope() {
    const envelope = document.querySelector('.envelope-wrapper');
    envelope.classList.toggle('open');
    
    // Reveal the next button after he opens the letter
    if(envelope.classList.contains('open')) {
        setTimeout(() => {
            document.getElementById('btn-to-ch3').classList.remove('hidden');
        }, 600); // Small delay for visual effect
    }
}
let escapeCount = 0;
const maxEscapes = 5; // The bee will let itself be caught on the 6th try

function flyAway() {
    const bee = document.getElementById('bee');
    const hint = document.getElementById('game-hint');
    
    if (escapeCount < maxEscapes) {
        // Calculate a random position inside the game area box
        const maxX = 80; // percentage limits to stay inside the box safely
        const maxY = 70;
        
        const randomX = Math.floor(Math.random() * maxX) + 10;
        const randomY = Math.floor(Math.random() * maxY) + 10;
        
        bee.style.left = `${randomX}%`;
        bee.style.top = `${randomY}%`;
        
        escapeCount++;
        
        // Change text hints based on attempts to make it funny
        if (escapeCount === 2) hint.innerText = "Wow, he's fast! Try again! 😂";
        if (escapeCount === 4) hint.innerText = "Okay, he's just teasing you now... 🍯";
    }
}

function catchBee() {
    const bee = document.getElementById('bee');
    const hint = document.getElementById('game-hint');
    const nextBtn = document.getElementById('btn-to-ch4');
    
    // Stop the bee from flying away anymore
    escapeCount = maxEscapes; 
    
    // Visual celebration
    bee.style.transform = "translate(-50%, -50%) scale(1.5)";
    hint.innerHTML = "<strong>You caught him!</strong> He brought a message: <em>'I will always fly back to you.'</em> 💛";
    hint.style.color = "#d45d79";
    
    // Reveal the next chapter button
    nextBtn.classList.remove('hidden');
}
