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

// Create an AudioContext
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let isAudioPlaying = false; // Track if audio is playing

// Function to play the selected song
function playSong(songUrl) {
    // Resume the audio context when the user clicks the button
    if (!isAudioPlaying) {
        audioContext.resume().then(() => {
            console.log('Playback resumed successfully');
            isAudioPlaying = true; // Set to true to indicate audio is playing
        }).catch(error => {
            console.error('Error resuming audio context:', error);
        });
    }

    // Stop any currently playing audio
    if (!audioPlayer.paused) {
        audioPlayer.pause();
    }

    // Update the audio player source to the selected song from Google Drive
    audioPlayer.src = songUrl;

    // Unhide the player and play the song
    audioPlayer.hidden = false;
    audioPlayer.load();  // Load the new audio file

    // Start playing the new song
    audioPlayer.play().catch(error => {
        console.error('Error trying to play the audio:', error);
    });
}
