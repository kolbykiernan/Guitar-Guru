"use strict";
// Define mappings
const whiteKeys = ['low-c', 'low-d', 'low-e', 'low-f', 'low-g', 'low-a', 'low-b', 'high-c', 'high-d', 'high-e', 'high-f', 'high-g', 'high-a', 'high-b'];
const blackKeys = ['low-c#', 'low-d#', 'low-f#', 'low-g#', 'low-a#', 'high-c#', 'high-d#', 'high-f#', 'high-g#', 'high-a#'];
// Create audio elements and key elements maps
const audioElements = {};
const keyElements = {};
whiteKeys.forEach((key, index) => {
    audioElements[key] = document.getElementById(key);
    keyElements[key] = document.getElementsByClassName('white')[index];
});
blackKeys.forEach((key, index) => {
    audioElements[key] = document.getElementById(key);
    keyElements[key] = document.getElementsByClassName('black')[index];
});
// General play function
function playKey(key) {
    const audio = audioElements[key];
    const element = keyElements[key];
    audio.pause();
    audio.currentTime = 0;
    audio.play();
    const className = whiteKeys.includes(key) ? 'white-pushed' : 'black-pushed';
    if (!element.classList.contains(className)) {
        element.classList.add(className);
    }
}
// General stop function
function stopKey(key) {
    const audio = audioElements[key];
    const element = keyElements[key];
    setTimeout(() => {
        audio.pause();
        const className = whiteKeys.includes(key) ? 'white-pushed' : 'black-pushed';
        if (element.classList.contains(className)) {
            element.classList.remove(className);
        }
    }, 500); // Delay of 0.5 seconds
}
// Keydown event listener
document.addEventListener('keydown', (event) => {
    if (event.repeat)
        return;
    const keyMapping = {
        'c': event.ctrlKey ? 'low-c#' : 'low-c',
        'd': event.ctrlKey ? 'low-d#' : 'low-d',
        'e': 'low-e',
        'f': event.ctrlKey ? 'low-f#' : 'low-f',
        'g': event.ctrlKey ? 'low-g#' : 'low-g',
        'a': event.ctrlKey ? 'low-a#' : 'low-a',
        'b': 'low-b',
        'C': event.ctrlKey ? 'high-c#' : 'high-c',
        'D': event.ctrlKey ? 'high-d#' : 'high-d',
        'E': 'high-e',
        'F': event.ctrlKey ? 'high-f#' : 'high-f',
        'G': event.ctrlKey ? 'high-g#' : 'high-g',
        'A': event.ctrlKey ? 'high-a#' : 'high-a',
        'B': 'high-b'
    };
    const key = keyMapping[event.key];
    if (key) {
        playKey(key);
    }
});
// Keyup event listener
document.addEventListener('keyup', (event) => {
    const keyMapping = {
        'c': event.ctrlKey ? 'low-c#' : 'low-c',
        'd': event.ctrlKey ? 'low-d#' : 'low-d',
        'e': 'low-e',
        'f': event.ctrlKey ? 'low-f#' : 'low-f',
        'g': event.ctrlKey ? 'low-g#' : 'low-g',
        'a': event.ctrlKey ? 'low-a#' : 'low-a',
        'b': 'low-b',
        'C': event.ctrlKey ? 'high-c#' : 'high-c',
        'D': event.ctrlKey ? 'high-d#' : 'high-d',
        'E': 'high-e',
        'F': event.ctrlKey ? 'high-f#' : 'high-f',
        'G': event.ctrlKey ? 'high-g#' : 'high-g',
        'A': event.ctrlKey ? 'high-a#' : 'high-a',
        'B': 'high-b'
    };
    const key = keyMapping[event.key];
    if (key) {
        stopKey(key);
    }
});
// Reveal instructions
const textBoxElements = Array.from({ length: 8 }, (_, i) => document.getElementById(`text-${i + 1}`));
const guitarElements = Array.from({ length: 8 }, (_, i) => document.getElementById(`guitar-${i + 1}`));
guitarElements.forEach((guitar, index) => {
    guitar.addEventListener('click', () => {
        const textBox = textBoxElements[index];
        const nextGuitar = guitarElements[index + 1];
        textBox.style.display = textBox.style.display === 'none' ? 'block' : 'none';
        if (nextGuitar) {
            nextGuitar.style.display = nextGuitar.style.display === 'none' ? 'block' : 'none';
            guitar.style.display = 'none';
        }
    });
});
// Play transition audio
// function playTransitionAudio() {
//     const transitionAudio = document.getElementById("transition-audio");
//     const playButton = document.getElementById("main-button");
//     playButton.addEventListener('click', () => {
//         transitionAudio.play();
//     });
// }
// playTransitionAudio();

document.addEventListener('DOMContentLoaded', () => {
    const rotateScreen = () => {
        const body = document.body;
        if (window.innerHeight > 1.25 * window.innerWidth) {
            body.classList.add('rotate');
        }
        else {
            body.classList.remove('rotate');
        }
    };
    window.addEventListener('resize', rotateScreen);
    rotateScreen(); // Initial check
});
