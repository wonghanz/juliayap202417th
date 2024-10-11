// Function to create flower petals falling animation
function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = Math.random() * window.innerWidth + 'px';
    petal.style.animationDuration = Math.random() * 3 + 2 + 's';
    petal.style.opacity = Math.random();
    petal.style.fontSize = Math.random() * 10 + 10 + 'px';
    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 5000);
}

// Create petals every 500 milliseconds
setInterval(createPetal, 500);
// Get the audio player element
const audioPlayer = document.getElementById('audio-player');

// Function to play the selected song
function playSong(songFile) {
    // Update the audio player source to the selected song
    audioPlayer.src = `music/${songFile}`;
    
    // Unhide the player and play the song
    audioPlayer.hidden = false;
    audioPlayer.play();
}
