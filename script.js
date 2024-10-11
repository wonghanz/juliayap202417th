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

// Get the audio player element
const audioPlayer = document.getElementById('audio-player');

// Function to play the selected song
function playSong(songUrl) {
    // Stop any currently playing audio
    if (!audioPlayer.paused) {
        audioPlayer.pause();
    }

    // Update the audio player source to the selected song from Google Drive
    audioPlayer.src = songUrl;
    
    // Unhide the player and play the song
    audioPlayer.hidden = false;
    audioPlayer.load();  // Load the new audio file
    audioPlayer.play();  // Start playing the new song
}
