// script.js

// Love Meter Functionality
const loveMeter = document.getElementById('loveMeter');

function calculateLove() {
    const userAnswers = getUserAnswers();
    const loveScore = userAnswers.reduce((acc, curr) => acc + curr, 0) / userAnswers.length;
    loveMeter.style.width = loveScore + '%';
    loveMeter.innerHTML = `Love Meter: ${loveScore.toFixed(2)}%`;
}

// Interactive Questions
function getUserAnswers() {
    // This function will collect answers from interactive questions
    return [Math.random() * 100, Math.random() * 100, Math.random() * 100]; // Dummy random values for now
}

// Animation Functions
function startAnimation() {
    const heart = document.getElementById('heart');
    heart.classList.add('animated'); // Applies CSS animation class
}

// Music Controls
const music = new Audio('love-song.mp3');

function playMusic() {
    music.play();
}

function pauseMusic() {
    music.pause();
}

// Event Listeners
document.getElementById('calculateLoveBtn').addEventListener('click', calculateLove);
document.getElementById('playMusicBtn').addEventListener('click', playMusic);
document.getElementById('pauseMusicBtn').addEventListener('click', pauseMusic);

// Call startAnimation on page load
window.onload = startAnimation;