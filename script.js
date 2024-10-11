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
    "布城一遇，", 
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
        setTimeout(displayPoem, 8000);
    } else {
        // Loop back to the first line when the poem is complete
        currentLine = 0;
        setTimeout(displayPoem, 8000);
    }
}

// Start displaying the poem after a short initial delay
setTimeout(displayPoem, 2000);

// Trigger falling petals every second
setInterval(createPetal, 1000);
