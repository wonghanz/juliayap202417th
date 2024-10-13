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

// YouTube video player (iframe)
const youtubePlayer = document.getElementById('yt-iframe');

// Function to play the selected YouTube song
function playYouTube(videoId) {
    // Update the iframe with the correct video URL and autoplay
    youtubePlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}`;
    
    // Make sure the iframe is visible (in case it's hidden)
    document.getElementById('youtube-player').style.display = 'block';
}

// Poem lines
const poemLines = [
    "你是人间的四月天，",
    "在那多彩之海处闪耀。",
    "短发利落，独具魅力。",
    "夜之黑暗中，你是唯一光亮。",
    "那一日，命运悄然指引，",
    "我们在时光的转角相遇。",
    "目光交汇，似有星辰闪烁，",
    "从此，我的世界多了一抹绚丽。",
    "你是人间的四月天，",
    "似仗剑海泽之短发君。",
    "阳光之下，熠熠生辉；",
    "月光之中，柔情满溢。",
    "你是人间的四月天，",
    "恰似四月之天，",
    "既有热烈之晓，亦有温柔之雨。",
    "每一瞬间，皆满生命活力。",
    "每一微笑，皆令世界焕发生机。",
    "每一眼神，皆灵动如诗。",
    "你是人间的四月天，",
    "如同司马懿为夺江山，",
    "舍弃以成大业，",
    "但我却绝不如此。",
    "因你乃我生命之全部。",
    "你是我心中之诗，我之歌。",
    "你是我最美星辰，我心永恒之源。",
    "你是我人间四月天，永恒诗篇。",
    "我想悄悄告诉你，",
    "生活纵有波澜，",
    "也要快乐活着呀。",
    "无论遇到什么问题，",
    "都要冷静面对，",
    "莫让愁绪萦绕心间，",
    "更不要陷入抑郁的泥沼。",
    "你是我人间的四月天，",
    "于你的世界，我见生命之灵动。",
    "看到你的坚强，你的勇气。",
    "看到你的过去、现在与未来。",
    "你是我人间的四月天，",
    "愿陪你走过孤独岁月。",
    "愿等待，等待那四月天。",
    "因你不只是人间四月天，",
    "更是我生命之所有。"
];

let currentLine = 0;
const poemElement = document.getElementById('poem');

// Function to display the poem lines one by one
function displayPoem() {
    if (currentLine < poemLines.length) {
        poemElement.innerText = poemLines[currentLine];  // Show the current line
        currentLine++;

        // Display next line after 8 seconds (5 seconds visible, 3 seconds delay)
        setTimeout(displayPoem, 4000);
    } else {
        // Loop back to the first line when the poem is complete
        currentLine = 0;
        setTimeout(displayPoem, 2000);
    }
}

// Start displaying the poem after a short initial delay
setTimeout(displayPoem, 2000);
// Function to create and animate balloons
function createBalloons(count) {
    const balloonContainer = document.getElementById('balloon-container'); // Make sure this matches your HTML

    for (let i = 0; i < count; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';

        // Set a random horizontal position
        balloon.style.left = Math.random() * window.innerWidth + 'px';

        // Append the balloon to the container
        balloonContainer.appendChild(balloon);

        // Animate the balloon
        setTimeout(() => {
            balloon.style.transition = 'transform 4s ease-out'; // Transition duration
            balloon.style.transform = 'translateY(-150vh)'; // Move upwards

            // Remove the balloon from DOM after it reaches the top
            setTimeout(() => {
                balloonContainer.removeChild(balloon);
            }, 4000); // Match this time with the animation duration
        }, Math.random() * 2000); // Random delay for each balloon to start
    }
}

// Call the function to create balloons when the page loads
window.onload = () => {
    createBalloons(520); // Change this number for more or fewer balloons
};


// Trigger falling petals every second
setInterval(createPetal, 2000);
// Array of Christian quotes
// JavaScript for the Quote of the Day functionality
const quotes = [
    "“The future belongs to those who believe in the beauty of their dreams.” – Eleanor Roosevelt",
    "“For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.” – Jeremiah 29:11",
    "“Every day may not be good, but there is something good in every day.” – Alice Morse Earle",
    "“This is the day that the Lord has made; let us rejoice and be glad in it.” – Psalm 118:24",
    "“Joy is the simplest form of gratitude.” – Karl Barth",
    "“With God, all things are possible.” – Matthew 19:26",
    "“Your present circumstances don't determine where you can go; they merely determine where you start.” – Nido Qubein"
];

// Function to set a random quote
function setQuote() {
    const quoteElement = document.getElementById('daily-quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.innerText = quotes[randomIndex];
}

// Call the function to set the quote when the page loads
window.onload = setQuote;

let slideIndex = 0; // Initialize the slide index
showSlides(); // Show the initial slide

// Function to show slides
function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    
    slideIndex++; // Increment the slide index
    if (slideIndex > slides.length) { slideIndex = 1 } // Reset to first slide if past last

    slides[slideIndex - 1].style.display = "block"; // Show current slide
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// Function to control the slide
function plusSlides(n) {
    slideIndex += n; // Increment or decrement slide index
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }
    
    showSlidesManually();
}

// Function to manually show slides
function showSlidesManually() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }

    slides[slideIndex - 1].style.display = "block"; // Show current slide
}


