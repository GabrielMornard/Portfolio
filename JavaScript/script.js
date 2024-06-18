document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');
    const bubblesContainer = document.getElementById('bubbles');
    
    if (bubblesContainer) {
        console.log('Bubbles container found');
        const maxBubbles = 50;  // Set a maximum number of bubbles
        
        for (let i = 0; i < maxBubbles; i++) {
            const bubble = document.createElement('span');
            bubble.style.setProperty('--i', Math.floor(Math.random() * 25) + 10);
            bubble.style.left = `${Math.random() * 100}%`;  // Random horizontal position
            bubble.style.top = `${Math.random() * 100}%`;   // Random vertical position
            bubblesContainer.appendChild(bubble);
            console.log('Bubble added');
        }
    } else {
        console.error('Bubbles container not found');
    }
});
