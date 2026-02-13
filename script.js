// script.js

// Function for the three-question flow
function questionFlow() {
    const questions = [
        "What do you like most about your partner?",
        "What is your favorite memory together?",
        "What is your dream destination as a couple?"
    ];
    let answers = [];
    
    for (let i = 0; i < questions.length; i++) {
        let answer = prompt(questions[i]);
        answers.push(answer);
    }

    displayLoveMeter(answers.length);
}

// Function to display love meter
function displayLoveMeter(lovePoints) {
    const loveMeter = document.getElementById("loveMeter");
    loveMeter.value = lovePoints * 33; // Assuming love meter is out of 100
}

// Function for celebration effects
function celebrate() {
    // Add emoji explosions
    for (let i = 0; i < 10; i++) {
        const emoji = document.createElement("span");
        emoji.textContent = "💖"; // Example emoji
        emoji.style.position = "absolute";
        emoji.style.left = Math.random() * window.innerWidth + "px";
        emoji.style.top = Math.random() * window.innerHeight + "px";
        document.body.appendChild(emoji);

        // Floating effect
        emoji.animate([
            { transform: 'translateY(0)' },
            { transform: 'translateY(-100px)' }
        ], {
            duration: 2000,
            easing: 'ease-in-out',
            fill: 'forwards'
        });

        setTimeout(() => {
            document.body.removeChild(emoji);
        }, 2000);
    }
}

// Function to control music player
function controlMusic() {
    const musicPlayer = document.getElementById("musicPlayer");
    const playButton = document.getElementById("playButton");
    
    playButton.addEventListener("click", () => {
        if (musicPlayer.paused) {
            musicPlayer.play();
            playButton.textContent = "Pause";
        } else {
            musicPlayer.pause();
            playButton.textContent = "Play";
        }
    });
}

// Initialize all functions
function init() {
    questionFlow();
    controlMusic();
    celebrate();
}

init();