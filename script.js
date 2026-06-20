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
