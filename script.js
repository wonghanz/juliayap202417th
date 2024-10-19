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
    const balloonContainer = document.getElementById('balloon-container'); // Make sure this ID exists in HTML

    for (let i = 0; i < count; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';

        // Randomize balloon position and size
        balloon.style.left = Math.random() * window.innerWidth + 'px';
        balloon.style.width = '30px';
        balloon.style.height = '40px';
        balloon.style.backgroundColor = 'rgba(255, 0, 0, 0.6)'; // Change this to adjust color

        // Append the balloon to the container
        balloonContainer.appendChild(balloon);

        // Animate the balloon upwards
        setTimeout(() => {
            balloon.style.transition = 'transform 5s ease-out, opacity 2s ease-out';
            balloon.style.transform = 'translateY(-200vh)';
            balloon.style.opacity = '0';

            // Remove the balloon after it disappears
            setTimeout(() => {
                balloonContainer.removeChild(balloon);
            }, 5000);
        }, Math.random() * 1000);
    }
}

// Call the function to create balloons on page load
window.onload = () => {
    setQuote();
    createFireworks();
    setInterval(() => createBalloons(10), 1000);
    setInterval(createPetal, 2000);
    displayPoem(); // Start displaying the poem
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
document.addEventListener("DOMContentLoaded", setQuote);


// Call the function to set the quote when the page loads


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to show slides
function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    
    slides[slideIndex - 1].style.display = "block"; // Show the current slide
}

// Automatic slideshow
let autoSlideIndex = 0;
autoSlides();

function autoSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    
    autoSlideIndex++;
    if (autoSlideIndex > slides.length) { autoSlideIndex = 1 }
    
    slides[autoSlideIndex - 1].style.display = "block";
    setTimeout(autoSlides, 5000); // Change slide every 5 seconds
}
document.addEventListener("DOMContentLoaded", function () {
    const hiddenNotes = document.querySelectorAll(".hidden-note");
    const finalSurprise = document.getElementById("final-surprise");
    const voiceMessage = document.getElementById("voice-message");

    hiddenNotes.forEach(note => {
        note.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        note.style.top = Math.random() * 100 + 'vh'; // Random vertical position

        note.addEventListener("click", function () {
            const message = this.getAttribute("data-message");
            alert(message); // Show the hidden message

            // Check if all notes have been clicked
            if (document.querySelectorAll(".hidden-note[style*='display: none']").length === hiddenNotes.length) {
                finalSurprise.style.display = "block"; // Show final surprise
            }

            this.style.display = "none"; // Hide the clicked note
        });
    });

    // Play the voice message when the button is clicked
    document.getElementById("play-message").addEventListener("click", function () {
        voiceMessage.play();
    });
});
// Messages for the fireworks
const messages = [
    "Julia Yap 生日快乐",
    "Julia Yap 17岁快乐",
    "Julia Yap 最漂亮"
];

function createFireworks() {
    const fireworksMessages = document.querySelectorAll('.fireworks');
    
    fireworksMessages.forEach((firework, index) => {
        setTimeout(() => {
            firework.style.opacity = 1; // Make the text visible
            firework.style.animation = `explode 1s forwards`; // Start animation
            
            // Remove the text after the animation
            setTimeout(() => {
                firework.style.opacity = 0; // Fade out
            }, 1000); // Match with animation duration
        }, index * 1000); // Stagger the appearance
    });
}
function init(){
    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    document.addEventListener("touchend", touchHandler, true);
    document.addEventListener("touchcancel", touchHandler, true);    
}


function isTouchSupported() {
    var msTouchEnabled = window.navigator.msMaxTouchPoints;
    var generalTouchEnabled = "ontouchstart" in document.createElement("div");
 
    if (msTouchEnabled || generalTouchEnabled) {
        return true;
    }
    return false;
}

if(isTouchSupported()){
	init();
}


class ButtonEffect {
  constructor(effect) {
    if (effect.config.random) {
      this.randomizeArray(effect.textNodes.chars);
      this.matchArraySort(effect.textNodes.chars, effect.activeTextNodes.chars);
    }

    effect.element.addEventListener("click", (e) => {
      let reverse = effect.element.classList.contains("active") ? true : false;
      effect.element.classList.toggle("active");
      effect.handler(
        effect.element,
        effect.textNodes,
        effect.activeTextNodes,
        effect.nodes,
        effect.config,
        reverse
      );
      e.preventDefault();
    });
  }

  randomizeArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  matchArraySort(referenceArr, arr) {
    const referenceMap = new Map(
      referenceArr.map((el, index) => [el.textContent, index])
    );
    arr.sort(
      (a, b) =>
        referenceMap.get(a.textContent) - referenceMap.get(b.textContent)
    );
  }
}

const svgBounceEffect = (
  element,
  textNodes,
  activeTextNodes,
  nodes,
  config,
  reverse
) => {
  const {
    duration,
    ease,
    y1,
    y2,
    scale1,
    scale2,
    elementDuration1,
    elementDuration2,
    textNodeDuration,
    textNodeY1,
    textNodeY2,
    stagger,
    confettiConfig,
    confettiActive
  } = config;
  const tl = gsap.timeline();

  if (confettiActive) {
    confetti(element.id, confettiConfig);
  }

  tl.add("start")
    .to(element, {
      scale: scale1,
      y: y1,
      duration: elementDuration1
    })
    .to(element, {
      scale: scale2,
      y: y2,
      duration: elementDuration2
    })
    .to(
      textNodes.chars,
      {
        duration: textNodeDuration,
        y: reverse ? textNodeY2 : textNodeY1,
        stagger: stagger,
        ease: ease
      },
      "start"
    )
    .to(
      activeTextNodes.chars,
      {
        duration: textNodeDuration,
        y: reverse ? textNodeY1 * -1 : textNodeY2,
        stagger: stagger,
        ease: ease
      },
      "start"
    );
};

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(SplitText);

  const config = {
    stagger: 0.05,
    duration: 1,
    random: true,
    ease: "elastic.out(0.8, 0.3)",
    y1: 12,
    y2: 0,
    scale1: 0.9,
    scale2: 1,
    elementDuration1: 0.1,
    elementDuration2: 0.2,
    textNodeDuration: 1,
    textNodeY1: 60,
    textNodeY2: 0,
    confettiActive: true,
    confettiConfig: {
      particleCount: 50,
      spread: 40,
      origin: { y: 0.5 },
      scalar: 1,
      zIndex: -1
    }
  };

  const button1 = document.getElementById("button1");
  const button1Config = {
    random: false
  };
  const button1Effect = {
    element: button1,
    handler: svgBounceEffect,
    textNodes: new SplitText([button1.querySelector(".inactive-text")], {
      type: "chars"
    }),
    activeTextNodes: new SplitText([button1.querySelector(".active-text")], {
      type: "chars"
    }),
    config: { ...config, ...button1Config }
  };

  const button2 = document.getElementById("button2");
  const button2Effect = {
    element: button2,
    handler: svgBounceEffect,
    textNodes: new SplitText([button2.querySelector(".inactive-text")], {
      type: "chars"
    }),
    activeTextNodes: new SplitText([button2.querySelector(".active-text")], {
      type: "chars"
    }),
    config: config
  };

  const button3 = document.getElementById("button3");
  const button3Config = {
    ease: "steps(4)",
    random: false,
    textNodeDuration: 0.3,
    confettiActive: true
  };

  const button3Effect = {
    element: button3,
    handler: svgBounceEffect,
    textNodes: new SplitText([button3.querySelector(".inactive-text")], {
      type: "chars"
    }),
    activeTextNodes: new SplitText([button3.querySelector(".active-text")], {
      type: "chars"
    }),
    config: { ...config, ...button3Config }
  };

  const button4 = document.getElementById("button4");
  const button4Config = {
    ease: "steps(4)",
    random: true,
    textNodeDuration: 0.3,
    confettiActive: true
  };

  const button4Effect = {
    element: button4,
    handler: svgBounceEffect,
    textNodes: new SplitText([button4.querySelector(".inactive-text")], {
      type: "chars"
    }),
    activeTextNodes: new SplitText([button4.querySelector(".active-text")], {
      type: "chars"
    }),
    config: { ...config, ...button4Config }
  };

  const button5 = document.getElementById("button5");
  const button5Config = {
    ease: "circ.out",
    random: false,
    textNodeDuration: 0.3,
    confettiActive: true
  };

  const button5Effect = {
    element: button5,
    handler: svgBounceEffect,
    textNodes: new SplitText([button5.querySelector(".inactive-text")], {
      type: "chars"
    }),
    activeTextNodes: new SplitText([button5.querySelector(".active-text")], {
      type: "chars"
    }),
    config: { ...config, ...button5Config }
  };

  const button6 = document.getElementById("button6");
  const button6Config = {
    ease: "circ.out",
    random: true,
    textNodeDuration: 0.3,
    confettiActive: true
  };

  const button6Effect = {
    element: button6,
    handler: svgBounceEffect,
    textNodes: new SplitText([button6.querySelector(".inactive-text")], {
      type: "chars"
    }),
    activeTextNodes: new SplitText([button6.querySelector(".active-text")], {
      type: "chars"
    }),
    config: { ...config, ...button6Config }
  };

  new ButtonEffect(button1Effect);
  new ButtonEffect(button2Effect);
  new ButtonEffect(button3Effect);
  new ButtonEffect(button4Effect);
  new ButtonEffect(button5Effect);
  new ButtonEffect(button6Effect);
});


document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("button1").addEventListener("click", function() {
    window.location.href = 'html2.html';
  });

  document.getElementById("button2").addEventListener("click", function() {
    window.location.href = '3.html';
  });
});

class ButtonEffect {
  constructor(effect) {
    if (effect.config.random) {
      this.randomizeArray(effect.textNodes.chars);
      this.matchArraySort(effect.textNodes.chars, effect.activeTextNodes.chars);
    }

    effect.element.addEventListener("click", (e) => {
      let reverse = effect.element.classList.contains("active") ? true : false;
      effect.element.classList.toggle("active");
      effect.handler(
        effect.element,
        effect.textNodes,
        effect.activeTextNodes,
        effect.nodes,
        effect.config,
        reverse
      );
      e.preventDefault();
    });
  }

  randomizeArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  matchArraySort(referenceArr, arr) {
    const referenceMap = new Map(
      referenceArr.map((el, index) => [el.textContent, index])
    );
    arr.sort(
      (a, b) =>
        referenceMap.get(a.textContent) - referenceMap.get(b.textContent)
    );
  }
}

const svgBounceEffect = (
  element,
  textNodes,
  activeTextNodes,
  nodes,
  config,
  reverse
) => {
  const {
    duration,
    ease,
    y1,
    y2,
    scale1,
    scale2,
    elementDuration1,
    elementDuration2,
    textNodeDuration,
    textNodeY1,
    textNodeY2,
    stagger,
    confettiConfig,
    confettiActive
  } = config;
  const tl = gsap.timeline();

  if (confettiActive) {
    confetti(element.id, confettiConfig);
  }

  tl.add("start")
    .to(element, {
      scale: scale1,
      y: y1,
      duration: elementDuration1
    })
    .to(element, {
      scale: scale2,
      y: y2,
      duration: elementDuration2
    })
    .to(
      textNodes.chars,
      {
        duration: textNodeDuration,
        y: reverse ? textNodeY2 : textNodeY1,
        stagger: stagger,
        ease: ease
      },
      "start"
    )
    .to(
      activeTextNodes.chars,
      {
        duration: textNodeDuration,
        y: reverse ? textNodeY1 * -1 : textNodeY2,
        stagger: stagger,
        ease: ease
      },
      "start"
    );
};

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(SplitText);

  const config = {
    stagger: 0.05,
    duration: 1,
    random: true,
    ease: "elastic.out(0.8, 0.3)",
    y1: 12,
    y2: 0,
    scale1: 0.9,
    scale2: 1,
    elementDuration1: 0.1,
    elementDuration2: 0.2,
    textNodeDuration: 1,
    textNodeY1: 60,
    textNodeY2: 0,
    confettiActive: true,
    confettiConfig: {
      particleCount: 50,
      spread: 40,
      origin: { y: 0.5 },
      scalar: 1,
      zIndex: -1
    }
  };

  const button1 = document.getElementById("button1");
  const button1Config = {
    random: false
  };
  const button1Effect = {
    element: button1,
    handler: svgBounceEffect,
    textNodes: new SplitText([button1.querySelector(".inactive-text")], {
      type: "chars"
    }),
    activeTextNodes: new SplitText([button1.querySelector(".active-text")], {
      type: "chars"
    }),
    config: { ...config, ...button1Config }
  };

  const button2 = document.getElementById("button2");
  const button2Effect = {
    element: button2,
    handler: svgBounceEffect,
    textNodes: new SplitText([button2.querySelector(".inactive-text")], {
      type: "chars"
    }),
    activeTextNodes: new SplitText([button2.querySelector(".active-text")], {
      type: "chars"
    }),
    config: config
  };

  const button3 = document.getElementById("button3");
  const button3Config = {
    ease: "steps(4)",
    random: false,
    textNodeDuration: 0.3,
    confettiActive: true
  };

  const button3Effect = {
    element: button3,
    handler: svgBounceEffect,
    textNodes: new SplitText([button3.querySelector(".inactive-text")], {
      type: "chars"
    }),
    activeTextNodes: new SplitText([button3.querySelector(".active-text")], {
      type: "chars"
    }),
    config: { ...config, ...button3Config }
  };

  const button4 = document.getElementById("button4");
  const button4Config = {
    ease: "steps(4)",
    random: true,
    textNodeDuration: 0.3,
    confettiActive: true
  };

  const button4Effect = {
    element: button4,
    handler: svgBounceEffect,
    textNodes: new SplitText([button4.querySelector(".inactive-text")], {
      type: "chars"
    }),
    activeTextNodes: new SplitText([button4.querySelector(".active-text")], {
      type: "chars"
    }),
    config: { ...config, ...button4Config }
  };

  const button5 = document.getElementById("button5");
  const button5Config = {
    ease: "circ.out",
    random: false,
    textNodeDuration: 0.3,
    confettiActive: true
  };

  const button5Effect = {
    element: button5,
    handler: svgBounceEffect,
    textNodes: new SplitText([button5.querySelector(".inactive-text")], {
      type: "chars"
    }),
    activeTextNodes: new SplitText([button5.querySelector(".active-text")], {
      type: "chars"
    }),
    config: { ...config, ...button5Config }
  };

  const button6 = document.getElementById("button6");
  const button6Config = {
    ease: "circ.out",
    random: true,
    textNodeDuration: 0.3,
    confettiActive: true
  };

  const button6Effect = {
    element: button6,
    handler: svgBounceEffect,
    textNodes: new SplitText([button6.querySelector(".inactive-text")], {
      type: "chars"
    }),
    activeTextNodes: new SplitText([button6.querySelector(".active-text")], {
      type: "chars"
    }),
    config: { ...config, ...button6Config }
  };

  new ButtonEffect(button1Effect);
  new ButtonEffect(button2Effect);
  new ButtonEffect(button3Effect);
  new ButtonEffect(button4Effect);
  new ButtonEffect(button5Effect);
  new ButtonEffect(button6Effect);
});

