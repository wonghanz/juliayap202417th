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



//This code is found here: http://thecodeplayer.com/walkthrough/canvas-fireworks-tutorial

// when animating on canvas, it is best to use requestAnimationFrame instead of setTimeout or setInterval
// not supported in all browsers though and sometimes needs a prefix, so we need a shim
window.requestAnimFrame = ( function() {
	return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				function( callback ) {
					window.setTimeout( callback, 1000 / 60 );
				};
})();

// now we will setup our basic variables for the demo
var canvas = document.getElementById( 'canvas' ),
		ctx = canvas.getContext( '2d' ),
		// full screen dimensions
		cw = window.innerWidth,
		ch = window.innerHeight,
		// firework collection
		fireworks = [],
		// particle collection
		particles = [],
		// starting hue
		hue = 120,
		// when launching fireworks with a click, too many get launched at once without a limiter, one launch per 5 loop ticks
		limiterTotal = 5,
		limiterTick = 0,
		// this will time the auto launches of fireworks, one launch per 80 loop ticks
		timerTotal = 80,
		timerTick = 0,
		mousedown = false,
		// mouse x coordinate,
		mx,
		// mouse y coordinate
		my;
		
// set canvas dimensions
canvas.width = cw;
canvas.height = ch;

// now we are going to setup our function placeholders for the entire demo

// get a random number within a range
function random( min, max ) {
	return Math.random() * ( max - min ) + min;
}

// calculate the distance between two points
function calculateDistance( p1x, p1y, p2x, p2y ) {
	var xDistance = p1x - p2x,
			yDistance = p1y - p2y;
	return Math.sqrt( Math.pow( xDistance, 2 ) + Math.pow( yDistance, 2 ) );
}

// define firework constructor
function Firework( sx, sy, tx, ty ) {
	// actual coordinates
	this.x = sx;
	this.y = sy;
	// starting coordinates
	this.sx = sx;
	this.sy = sy;
	// target coordinates
	this.tx = tx;
	this.ty = ty;
	// distance from starting point to target
	this.distanceToTarget = calculateDistance( sx, sy, tx, ty );
	this.distanceTraveled = 0;
	// track the past coordinates of each firework to create a trail effect, increase the coordinate count to create more prominent trails
	this.coordinates = [];
	this.coordinateCount = 3;
	// populate initial coordinate collection with the current coordinates
	while( this.coordinateCount-- ) {
		this.coordinates.push( [ this.x, this.y ] );
	}
	this.angle = Math.atan2( ty - sy, tx - sx );
	this.speed = 2;
	this.acceleration = 1.05;
	this.brightness = random( 50, 70 );
	// circle target indicator radius
	this.targetRadius = 1;
}

// update firework
Firework.prototype.update = function( index ) {
	// remove last item in coordinates array
	this.coordinates.pop();
	// add current coordinates to the start of the array
	this.coordinates.unshift( [ this.x, this.y ] );
	
	// cycle the circle target indicator radius
	if( this.targetRadius < 8 ) {
		this.targetRadius += 0.3;
	} else {
		this.targetRadius = 1;
	}
	
	// speed up the firework
	this.speed *= this.acceleration;
	
	// get the current velocities based on angle and speed
	var vx = Math.cos( this.angle ) * this.speed,
			vy = Math.sin( this.angle ) * this.speed;
	// how far will the firework have traveled with velocities applied?
	this.distanceTraveled = calculateDistance( this.sx, this.sy, this.x + vx, this.y + vy );
	
	// if the distance traveled, including velocities, is greater than the initial distance to the target, then the target has been reached
	if( this.distanceTraveled >= this.distanceToTarget ) {
		createParticles( this.tx, this.ty );
		// remove the firework, use the index passed into the update function to determine which to remove
		fireworks.splice( index, 1 );
	} else {
		// target not reached, keep traveling
		this.x += vx;
		this.y += vy;
	}
}

// draw firework
Firework.prototype.draw = function() {
	ctx.beginPath();
	// move to the last tracked coordinate in the set, then draw a line to the current x and y
	ctx.moveTo( this.coordinates[ this.coordinates.length - 1][ 0 ], this.coordinates[ this.coordinates.length - 1][ 1 ] );
	ctx.lineTo( this.x, this.y );
	ctx.strokeStyle = 'hsl(' + hue + ', 100%, ' + this.brightness + '%)';
	ctx.stroke();
	
	ctx.beginPath();
	// draw the target for this firework with a pulsing circle
	ctx.arc( this.tx, this.ty, this.targetRadius, 0, Math.PI * 2 );
	ctx.stroke();
}

// create particle
function Particle( x, y ) {
	this.x = x;
	this.y = y;
	// track the past coordinates of each particle to create a trail effect, increase the coordinate count to create more prominent trails
	this.coordinates = [];
	this.coordinateCount = 5;
	while( this.coordinateCount-- ) {
		this.coordinates.push( [ this.x, this.y ] );
	}
	// set a random angle in all possible directions, in radians
	this.angle = random( 0, Math.PI * 2 );
	this.speed = random( 1, 10 );
	// friction will slow the particle down
	this.friction = 0.95;
	// gravity will be applied and pull the particle down
	this.gravity = 1;
	// set the hue to a random number +-20 of the overall hue variable
	this.hue = random( hue - 20, hue + 20 );
	this.brightness = random( 50, 80 );
	this.alpha = 1;
	// set how fast the particle fades out
	this.decay = random( 0.015, 0.03 );
}

// update particle
Particle.prototype.update = function( index ) {
	// remove last item in coordinates array
	this.coordinates.pop();
	// add current coordinates to the start of the array
	this.coordinates.unshift( [ this.x, this.y ] );
	// slow down the particle
	this.speed *= this.friction;
	// apply velocity
	this.x += Math.cos( this.angle ) * this.speed;
	this.y += Math.sin( this.angle ) * this.speed + this.gravity;
	// fade out the particle
	this.alpha -= this.decay;
	
	// remove the particle once the alpha is low enough, based on the passed in index
	if( this.alpha <= this.decay ) {
		particles.splice( index, 1 );
	}
}

// draw particle
Particle.prototype.draw = function() {
	ctx. beginPath();
	// move to the last tracked coordinates in the set, then draw a line to the current x and y
	ctx.moveTo( this.coordinates[ this.coordinates.length - 1 ][ 0 ], this.coordinates[ this.coordinates.length - 1 ][ 1 ] );
	ctx.lineTo( this.x, this.y );
	ctx.strokeStyle = 'hsla(' + this.hue + ', 100%, ' + this.brightness + '%, ' + this.alpha + ')';
	ctx.stroke();
}

// create particle group/explosion
function createParticles( x, y ) {
	// increase the particle count for a bigger explosion, beware of the canvas performance hit with the increased particles though
	var particleCount = 30;
	while( particleCount-- ) {
		particles.push( new Particle( x, y ) );
	}
}

// main demo loop
function loop() {
	// this function will run endlessly with requestAnimationFrame
	requestAnimFrame( loop );
	
	// increase the hue to get different colored fireworks over time
	hue += 0.5;
	
	// normally, clearRect() would be used to clear the canvas
	// we want to create a trailing effect though
	// setting the composite operation to destination-out will allow us to clear the canvas at a specific opacity, rather than wiping it entirely
	ctx.globalCompositeOperation = 'destination-out';
	// decrease the alpha property to create more prominent trails
	ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
	ctx.fillRect( 0, 0, cw, ch );
	// change the composite operation back to our main mode
	// lighter creates bright highlight points as the fireworks and particles overlap each other
	ctx.globalCompositeOperation = 'lighter';
	
	// loop over each firework, draw it, update it
	var i = fireworks.length;
	while( i-- ) {
		fireworks[ i ].draw();
		fireworks[ i ].update( i );
	}
	
	// loop over each particle, draw it, update it
	var i = particles.length;
	while( i-- ) {
		particles[ i ].draw();
		particles[ i ].update( i );
	}
	
	// launch fireworks automatically to random coordinates, when the mouse isn't down
	if( timerTick >= timerTotal ) {
		if( !mousedown ) {
			// start the firework at the bottom middle of the screen, then set the random target coordinates, the random y coordinates will be set within the range of the top half of the screen
			fireworks.push( new Firework( cw / 2, ch, random( 0, cw ), random( 0, ch / 2 ) ) );
			timerTick = 0;
		}
	} else {
		timerTick++;
	}
	
	// limit the rate at which fireworks get launched when mouse is down
	if( limiterTick >= limiterTotal ) {
		if( mousedown ) {
			// start the firework at the bottom middle of the screen, then set the current mouse coordinates as the target
			fireworks.push( new Firework( cw / 2, ch, mx, my ) );
			limiterTick = 0;
		}
	} else {
		limiterTick++;
	}
}

// mouse event bindings
// update the mouse coordinates on mousemove
canvas.addEventListener( 'mousemove', function( e ) {
	mx = e.pageX - canvas.offsetLeft;
	my = e.pageY - canvas.offsetTop;
});

// toggle mousedown state and prevent canvas from being selected
canvas.addEventListener( 'mousedown', function( e ) {
	e.preventDefault();
	mousedown = true;
});

canvas.addEventListener( 'mouseup', function( e ) {
	e.preventDefault();
	mousedown = false;
});

// once the window loads, we are ready for some fireworks!
window.onload = loop;
//get the value of the name passed in the URL: http://myurl.com/page.html?name=Trish


//this code comes from: http://papermashup.com/read-url-get-variables-withjavascript/ (no longer valid url)
//who got it from here: https://snipplr.com/view/19838/get-url-parameters
function getUrlVars() {
var vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
console.log(m);
vars[key] = value;
  
});
  console.log(vars);
return vars;
}

var theName = getUrlVars()["name"];

var myElement = document.querySelector('#message');



//ch = canvas height
eh=myElement.clientHeight;
//console.log(eh);

myElement.style.top =((ch/2)-(eh/2))+'px'; 


//fade in/fade out code from here: http://codereview.stackexchange.com/questions/7315/fade-in-and-fade-out-in-pure-javascript
//modified by trish ladd
setTimeout(fade_out_button, 7000);

var done = true;

function fade_out_button(){
    if (done && myElement.style.opacity !== '0') {
        done = false;
        for (var i = 1; i <= 100; i++) {
            setTimeout((function (x) {
                return function () {
                    function_fade_out(x)
                };
            })(100 - i), i * 10);
        }
    }
};

function function_fade_out(opacity_value) {
    function_opacity(opacity_value);
    if (opacity_value == 1) {
        message.style.display = 'none';
        done = true;
        //insert the new message in the invisible div
        newMessage();
    }
}

function function_opacity(opacity_value) {
    myElement.style.opacity = opacity_value / 100;
    myElement.style.filter = 'alpha(opacity=' + opacity_value + ')';
}

function fade_in_button() {
    if (done && myElement.style.opacity !== '1') {
        done = false;
        for (var i = 1; i <= 100; i++) {
            setTimeout((function (x) {
                return function () {
                    function_fade_in(x)
                };
            })(i), i * 10);
        }
    }
};

function function_fade_in(opacity_value) {
    function_opacity(opacity_value);
    if (opacity_value == 1) {
        myElement.style.display = 'block';
    }
    if (opacity_value == 100) {
        done = true;
    }
}

    var simulatedEvent = document.createEvent("MouseEvent");
    simulatedEvent.initMouseEvent(type, true, true, window, 1, 
    first.screenX, first.screenY, 
    first.clientX, first.clientY, false, 
    false, false, false, 0/*left*/, null);
    first.target.dispatchEvent(simulatedEvent);
    event.preventDefault();
}

// Call the function when the page loads or at the desired moment

