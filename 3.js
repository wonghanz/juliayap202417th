const spinButton = document.getElementById("spinButton");
const wheel = document.getElementById("wheel");
const overlay = document.getElementById("overlay");

spinButton.addEventListener("click", () => {
    // Generate a random degree between 1800 and 3600
    const randomDegree = Math.floor(Math.random() * 1800) + 1800; 
    wheel.style.transform = `rotate(${randomDegree}deg)`;

    // Show overlay after spin
    overlay.style.display = "block";
    
    // Set a timeout to hide the overlay
    setTimeout(() => {
        overlay.style.display = "none";
    }, 3000); // Adjust the time as needed
});
