// Define key types
type Key = 'low-c#' | 'low-c' | 'low-d#' | 'low-d' | 'low-e' | 'low-f#' | 'low-f' | 'low-g#' | 'low-g' | 'low-a#' | 'low-a' | 'low-b' |
          'high-c#' | 'high-c' | 'high-d#' | 'high-d' | 'high-e' | 'high-f#' | 'high-f' | 'high-g#' | 'high-g' | 'high-a#' | 'high-a' | 'high-b';

// Define mappings
const whiteKeys: Key[] = ['low-c', 'low-d', 'low-e', 'low-f', 'low-g', 'low-a', 'low-b', 'high-c', 'high-d', 'high-e', 'high-f', 'high-g', 'high-a', 'high-b'];
const blackKeys: Key[] = ['low-c#', 'low-d#', 'low-f#', 'low-g#', 'low-a#', 'high-c#', 'high-d#', 'high-f#', 'high-g#', 'high-a#'];

// Create audio elements and key elements maps
const audioElements: Record<Key, HTMLAudioElement> = {} as Record<Key, HTMLAudioElement>;
const keyElements: Record<Key, HTMLDivElement> = {} as Record<Key, HTMLDivElement>;

whiteKeys.forEach((key, index) => {
    audioElements[key] = document.getElementById(key) as HTMLAudioElement;
    keyElements[key] = document.getElementsByClassName('white')[index] as HTMLDivElement;
});

blackKeys.forEach((key, index) => {
    audioElements[key] = document.getElementById(key) as HTMLAudioElement;
    keyElements[key] = document.getElementsByClassName('black')[index] as HTMLDivElement;
});

// General play function
function playKey(key: Key): void {
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
function stopKey(key: Key): void {
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
document.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.repeat) return;

    const keyMapping: Record<string, Key> = {
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
document.addEventListener('keyup', (event: KeyboardEvent) => {
    const keyMapping: Record<string, Key> = {
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
const textBoxElements = Array.from({ length: 8 }, (_, i) => document.getElementById(`text-${i + 1}`) as HTMLDivElement);
const guitarElements = Array.from({ length: 8 }, (_, i) => document.getElementById(`guitar-${i + 1}`) as HTMLDivElement);

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
// function playTransitionAudio(): void {
//     const transitionAudio = document.getElementById("transition-audio") as HTMLAudioElement;
//     const playButton = document.getElementById("main-button") as HTMLButtonElement;

//     playButton.addEventListener('click', () => {
//         transitionAudio.play();
//     });
// }

// playTransitionAudio();

// document.addEventListener('DOMContentLoaded', () => {
//     const rotateScreen = () => {
//       const body = document.body;
//       if (window.innerWidth < 500) { // Rotate if the width is less than 480px
//         body.classList.add('rotate');
//       } else {
//         body.classList.remove('rotate');
//       }
//     };
  
//     window.addEventListener('resize', rotateScreen);
//     rotateScreen(); // Initial check
//   });
  
