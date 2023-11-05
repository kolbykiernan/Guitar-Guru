//<---------------USING DOM AND DEFINING VARIABLES--------------------------->//
const whiteKey = document.getElementsByClassName('white');
const blackKey = document.getElementsByClassName('black');


const audioLowCSharp = document.getElementById('low-c#')
const audioLowC = document.getElementById('low-c')
const audioLowDSharp = document.getElementById('low-d#')
const audioLowD = document.getElementById('low-d')
const audioLowE = document.getElementById('low-e')
const audioLowFSharp = document.getElementById('low-f#')
const audioLowF = document.getElementById('low-f')
const audioLowGSharp = document.getElementById('low-g#')
const audioLowG = document.getElementById('low-g')
const audioLowASharp = document.getElementById('low-a#')
const audioLowA= document.getElementById('low-a')
const audioLowB= document.getElementById('low-b')

const audioHighCSharp = document.getElementById('high-c#')
const audioHighC = document.getElementById('high-c')
const audioHighDSharp = document.getElementById('high-d#')
const audioHighD = document.getElementById('high-d')
const audioHighE = document.getElementById('high-e')
const audioHighFSharp = document.getElementById('high-f#')
const audioHighF = document.getElementById('high-f')
const audioHighGSharp = document.getElementById('high-g#')
const audioHighG = document.getElementById('high-g')
const audioHighASharp = document.getElementById('high-a#')
const audioHighA= document.getElementById('high-a')
const audioHighB= document.getElementById('high-b')

//<---------------FUNCTION PLAY LOW KEYS--------------------------->//

function playLowCSharp(){
    audioLowCSharp.pause();
    audioLowCSharp.currentTime = 0;
    audioLowCSharp.play(); 
                if (!blackKey[0].classList.contains('black-pushed')) {
                    blackKey[0].classList.add('black-pushed')    
                }   
}

function playLowC(){
    audioLowC.pause();
    audioLowC.currentTime = 0;
    audioLowC.play()
                if (!whiteKey[0].classList.contains('white-pushed')) {
                    whiteKey[0].classList.add('white-pushed')
                }   
}

function playLowDSharp(){
    audioLowDSharp.pause();
    audioLowDSharp.currentTime = 0;
    audioLowDSharp.play() 
                if (!blackKey[1].classList.contains('black-pushed')) {
                    blackKey[1].classList.add('black-pushed')    
                }
}

function playLowD(){
    audioLowD.pause();
    audioLowD.currentTime = 0;
    audioLowD.play()
                if (!whiteKey[1].classList.contains('white-pushed')) {
                    whiteKey[1].classList.add('white-pushed')
                }
}

function playLowE(){
    audioLowE.pause();
    audioLowE.currentTime = 0;
    audioLowE.play()
            if (!whiteKey[2].classList.contains('white-pushed')) {
                whiteKey[2].classList.add('white-pushed')
            }
}
function playLowFSharp(){
    audioLowFSharp.pause();
    audioLowFSharp.currentTime = 0;
    audioLowFSharp.play()
                if (!blackKey[2].classList.contains('black-pushed')) {
                    blackKey[2].classList.add('black-pushed')
                }
}
function playLowF(){
    audioLowF.pause();
    audioLowF.currentTime = 0;
    audioLowF.play()
                if (!whiteKey[3].classList.contains('white-pushed')) {
                    whiteKey[3].classList.add('white-pushed')
                }
}
function playLowGSharp(){
    audioLowGSharp.pause();
    audioLowGSharp.currentTime = 0;
    audioLowGSharp.play()
                if (!blackKey[3].classList.contains('black-pushed')) {
                    blackKey[3].classList.add('black-pushed')
                }
}
function playLowG(){
    audioLowG.pause();
    audioLowG.currentTime = 0;
    audioLowG.play()
                if (!whiteKey[4].classList.contains('white-pushed')) {
                    whiteKey[4].classList.add('white-pushed')
                }
}
function playLowASharp(){
    audioLowASharp.pause();
    audioLowASharp.currentTime = 0;
    audioLowASharp.play()
                if (!blackKey[4].classList.contains('black-pushed')) {
                    blackKey[4].classList.add('black-pushed')
                }
}
function playLowA(){
    audioLowA.pause();
    audioLowA.currentTime = 0;
    audioLowA.play()
                if (!whiteKey[5].classList.contains('white-pushed')) {
                    whiteKey[5].classList.add('white-pushed')
                }
}
function playLowB(){
    audioLowB.pause();
    audioLowB.currentTime = 0;
    audioLowB.play()
            if (!whiteKey[6].classList.contains('white-pushed')) {
                whiteKey[6].classList.add('white-pushed')
            }
}
// <------------------------FUNCTION PLAY HIGH KEYS------------------------------>//

function playHighCSharp(){
    audioHighCSharp.pause();
    audioHighCSharp.currentTime = 0;
    audioHighCSharp.play() 
                if (!blackKey[5].classList.contains('black-pushed')) {
                    blackKey[5].classList.add('black-pushed')    
                }
}

function playHighC(){
    audioHighC.pause();
    audioHighC.currentTime = 0;
    audioHighC.play()
                if (!whiteKey[7].classList.contains('white-pushed')) {
                    whiteKey[7].classList.add('white-pushed')
                } 
}

function playHighDSharp(){
    audioHighDSharp.pause();
    audioHighDSharp.currentTime = 0;
    audioHighDSharp.play() 
                if (!blackKey[6].classList.contains('black-pushed')) {
                    blackKey[6].classList.add('black-pushed')    
                }
}

function playHighD(){
    audioHighD.pause();
    audioHighD.currentTime = 0;
    audioHighD.play()
                if (!whiteKey[8].classList.contains('white-pushed')) {
                    whiteKey[8].classList.add('white-pushed')
                }
}

function playHighE(){
    audioHighE.pause();
    audioHighE.currentTime = 0;
    audioHighE.play()
            if (!whiteKey[9].classList.contains('white-pushed')) {
                whiteKey[9].classList.add('white-pushed')
            }
}
function playHighFSharp(){
    audioHighFSharp.pause();
    audioHighFSharp.currentTime = 0;
    audioHighFSharp.play()
                if (!blackKey[7].classList.contains('black-pushed')) {
                    blackKey[7].classList.add('black-pushed')
                }
}
function playHighF(){
    audioHighF.pause();
    audioHighF.currentTime = 0;
    audioHighF.play()
                if (!whiteKey[10].classList.contains('white-pushed')) {
                    whiteKey[10].classList.add('white-pushed')
                }
}
function playHighGSharp(){
    audioHighGSharp.pause();
    audioHighGSharp.currentTime = 0;
    audioHighGSharp.play()
                if (!blackKey[8].classList.contains('black-pushed')) {
                    blackKey[8].classList.add('black-pushed')
                }
}
function playHighG(){
    audioHighG.pause();
    audioHighG.currentTime = 0;
    audioHighG.play()
                if (!whiteKey[11].classList.contains('white-pushed')) {
                    whiteKey[11].classList.add('white-pushed')
                }
}
function playHighASharp(){
    audioHighASharp.pause();
    audioHighASharp.currentTime = 0;
    audioHighASharp.play()
                if (!blackKey[9].classList.contains('black-pushed')) {
                    blackKey[9].classList.add('black-pushed')
                }
}
function playHighA(){
    audioHighA.pause();
    audioHighA.currentTime = 0;
    audioHighA.play()
                if (!whiteKey[12].classList.contains('white-pushed')) {
                    whiteKey[12].classList.add('white-pushed')
                }
}
function playHighB(){
    audioHighB.pause();
    audioHighB.currentTime = 0;
    audioHighB.play()
            if (!whiteKey[13].classList.contains('white-pushed')) {
                whiteKey[13].classList.add('white-pushed')
            }
}

//<----------------------------KEYDOWN LOW KEYS--------------------------------->//

document.addEventListener('keydown', (playNote) => {
    if(playNote.repeat) return;

    if(playNote.key == 'c'){
        if (playNote.ctrlKey){
            playLowCSharp() 
    } else {
            playLowC() 
        }   
    }    
        
    if(playNote.key == 'd'){
        if (playNote.ctrlKey){
            playLowDSharp()
        } else {
            playLowD()
        }   
    }    

    if(playNote.key == 'e'){
        playLowE()
    }

    if(playNote.key == 'f'){
        if (playNote.ctrlKey) { 
            playLowFSharp()
        } else {
            playLowF()
        }    
    }

    if(playNote.key == 'g'){
        if (playNote.ctrlKey) {
            playLowGSharp() 
        } else {
            playLowG()
        }   
    }

    if(playNote.key == 'a'){
        if (playNote.ctrlKey) {
            playLowASharp()
        } else {
            playLowA() 
        }    
    }

    if(playNote.key == 'b'){
        playLowB()
    }

//<---------------------------KEYDOWN HIGH KEYS------------------------------>//

    if(playNote.key == 'C'){
        if (playNote.ctrlKey) {
            playHighCSharp()
        } else {
            playHighC()
        }
    }

    if(playNote.key == 'D'){
        if (playNote.ctrlKey) {
            playHighDSharp()
        } else {
            playHighD()
        }
    }

    if(playNote.key == 'E'){
        playHighE()
    }

    if(playNote.key == 'F'){
        if (playNote.ctrlKey) {
            playHighFSharp()
        } else {
            playHighF()
        }
    }

    if(playNote.key == 'G'){
        if (playNote.ctrlKey) {
            playHighGSharp()
        } else {
            playHighG()
        }
    }

    if(playNote.key == 'A'){
        if (playNote.ctrlKey) {
            playHighASharp()
        } else {
            playHighA()
        }
    }

    if(playNote.key == 'B'){
        playHighB()
    }
}
)        

//<--------------------------FUNCTION PAUSE LOW KEYS--------------------------->//

function stopLowCSharp(){
    audioLowCSharp.pause();
                if (blackKey[0].classList.contains('black-pushed')) {
                    blackKey[0].classList.remove('black-pushed')    
                }   
            }

function stopLowC(){
    audioLowC.pause();
                if (whiteKey[0].classList.contains('white-pushed')) {
                    whiteKey[0].classList.remove('white-pushed')
                }   
    
}

function stopLowDSharp(){
    audioLowDSharp.pause();
                if (blackKey[1].classList.contains('black-pushed')) {
                    blackKey[1].classList.remove('black-pushed')    
                }
}

function stopLowD(){
    audioLowD.pause()
                if (whiteKey[1].classList.contains('white-pushed')) {
                    whiteKey[1].classList.remove('white-pushed')
                }
}

function stopLowE(){
    audioLowE.pause()
            if (whiteKey[2].classList.contains('white-pushed')) {
                whiteKey[2].classList.remove('white-pushed')
            }
}
function stopLowFSharp(){
    audioLowFSharp.pause();
                if (blackKey[2].classList.contains('black-pushed')) {
                    blackKey[2].classList.remove('black-pushed')
                }
}
function stopLowF(){
    audioLowF.pause();
                if (whiteKey[3].classList.contains('white-pushed')) {
                    whiteKey[3].classList.remove('white-pushed')
                }
}
function stopLowGSharp(){
    audioLowGSharp.pause();
                if (blackKey[3].classList.contains('black-pushed')) {
                    blackKey[3].classList.remove('black-pushed')
                }
}
function stopLowG(){
    audioLowG.pause();
                if (whiteKey[4].classList.contains('white-pushed')) {
                    whiteKey[4].classList.remove('white-pushed')
                }
}
function stopLowASharp(){
    audioLowASharp.pause();
                if (blackKey[4].classList.contains('black-pushed')) {
                    blackKey[4].classList.remove('black-pushed')
                }
}
function stopLowA(){
    audioLowA.pause();
                if (whiteKey[5].classList.contains('white-pushed')) {
                    whiteKey[5].classList.remove('white-pushed')
                }
}
function stopLowB(){
    audioLowB.pause();
            if (whiteKey[6].classList.contains('white-pushed')) {
                whiteKey[6].classList.remove('white-pushed')
            }
}
// <------------------------FUNCTION PAUSE HIGH KEYS------------------------------>//

function stopHighCSharp(){
    audioHighCSharp.pause(); 
                if (blackKey[5].classList.contains('black-pushed')) {
                    blackKey[5].classList.remove('black-pushed')    
                }
}

function stopHighC(){
    audioHighC.pause();
                if (whiteKey[7].classList.contains('white-pushed')) {
                    whiteKey[7].classList.remove('white-pushed')
                } 
}

function stopHighDSharp(){
    audioHighDSharp.pause();
                if (blackKey[6].classList.contains('black-pushed')) {
                    blackKey[6].classList.remove('black-pushed')    
                }
}

function stopHighD(){
    audioHighD.pause();
                if (whiteKey[8].classList.contains('white-pushed')) {
                    whiteKey[8].classList.remove('white-pushed')
                }
}

function stopHighE(){
    audioHighE.pause();
            if (whiteKey[9].classList.contains('white-pushed')) {
                whiteKey[9].classList.remove('white-pushed')
            }
}
function stopHighFSharp(){
    audioHighFSharp.pause();
                if (blackKey[7].classList.contains('black-pushed')) {
                    blackKey[7].classList.remove('black-pushed')
                }
}
function stopHighF(){
    audioHighF.pause();
                if (whiteKey[10].classList.contains('white-pushed')) {
                    whiteKey[10].classList.remove('white-pushed')
                }
}
function stopHighGSharp(){
    audioHighGSharp.pause();
                if (blackKey[8].classList.contains('black-pushed')) {
                    blackKey[8].classList.remove('black-pushed')
                }
}
function stopHighG(){
    audioHighG.pause();
                if (whiteKey[11].classList.contains('white-pushed')) {
                    whiteKey[11].classList.remove('white-pushed')
                }
}
function stopHighASharp(){
    audioHighASharp.pause();
                if (blackKey[9].classList.contains('black-pushed')) {
                    blackKey[9].classList.remove('black-pushed')
                }
}
function stopHighA(){
    audioHighA.pause();
                if (whiteKey[12].classList.contains('white-pushed')) {
                    whiteKey[12].classList.remove('white-pushed')
                }
}
function stopHighB(){
    audioHighB.pause();
            if (whiteKey[13].classList.contains('white-pushed')) {
                whiteKey[13].classList.remove('white-pushed')
            }
}




//<----------------------------KEY UP LOW KEYS------------------------------------->//

document.addEventListener('keyup', (stopNote) => {
    
    if(stopNote.key == 'c'){
        if (stopNote.ctrlKey){
            stopLowCSharp()
    } else {
            stopLowC()
        }   
    } 

    if(stopNote.key == 'd'){
        if (stopNote.ctrlKey){
            stopLowDSharp()
        } else {
            stopLowD()
            }   
    }


    if(stopNote.key == 'e'){
        stopLowE()
    }

    if(stopNote.key == 'f'){
        if (stopNote.ctrlKey){
            stopLowFSharp()
    } else {
            stopLowF()
        }  
    }

    if(stopNote.key == 'g'){
        if (stopNote.ctrlKey){
            stopLowGSharp()
    } else {
            stopLowG()
        }   
    }

    if(stopNote.key == 'a'){
        if (stopNote.ctrlKey){
            stopLowASharp()
    } else {
            stopLowA()
        }       
    }

    if(stopNote.key == 'b'){
        stopLowB()
    }

    if(stopNote.key == 'C'){
        if (stopNote.ctrlKey){
            stopHighCSharp()
    } else {
            stopHighC()
        }  
    }

    if(stopNote.key == 'D'){
        if (stopNote.ctrlKey){
            stopHighDSharp()
    } else {
            stopHighD()
        }  
    }

    if(stopNote.key == 'E'){
        stopHighE()
    }

    if(stopNote.key == 'F'){
        if (stopNote.ctrlKey){
            stopHighFSharp()
    } else {
            stopHighF()
        } 
    }

    if(stopNote.key == 'G'){
        if (stopNote.ctrlKey){
            stopHighGSharp()
    } else {
            stopHighG()
        } 
    }

    if(stopNote.key == 'A'){
        if (stopNote.ctrlKey){
            stopHighASharp()
    } else {
            stopHighA()
        } 
    }

    if(stopNote.key == 'B'){
        audioHighB.pause()
        stopHighB()
    }
})

//<-----------------REVEALING INSTRUCTIONS BY CLICKING GUITARS------------------>//

const textBoxOne = document.getElementById("text-1");
const textBoxTwo = document.getElementById("text-2");
const textBoxThree = document.getElementById("text-3");
const textBoxFour = document.getElementById("text-4");
const textBoxFive = document.getElementById("text-5");
const textBoxSix = document.getElementById("text-6");
const textBoxSeven = document.getElementById("text-7");
const textBoxEight = document.getElementById("text-8");
const guitarOne = document.getElementById("guitar-1");
const guitarTwo = document.getElementById("guitar-2");
const guitarThree = document.getElementById("guitar-3");
const guitarFour = document.getElementById("guitar-4");
const guitarFive = document.getElementById("guitar-5");
const guitarSix = document.getElementById("guitar-6");
const guitarSeven = document.getElementById("guitar-7");
const guitarEight = document.getElementById("guitar-8");

function revealTextBoxOne(){

    if (textBoxOne.style.display === "none") {
        textBoxOne.style.display = "block";
    } else {
        textBoxOne.style.display = "none";
        }

    if (guitarTwo.style.display === "none") {
        guitarTwo.style.display = "block";
    } else {
        guitarTwo.style.display = "none";
        }
    
    if (guitarTwo.style.display === "block"){
        guitarOne.style.display = "none";
    }
}

function revealTextBoxTwo(){
    
    if (textBoxTwo.style.display === "none") {
        textBoxTwo.style.display = "block";
    } else {
        textBoxTwo.style.display = "none";
        }
    if (guitarThree.style.display === "none") {
        guitarThree.style.display = "block";
    } else {
        guitarThree.style.display = "none";
        }
    
    if (guitarThree.style.display === "block"){
        guitarTwo.style.display = "none";
    }
}

function revealTextBoxThree(){
    
    if (textBoxThree.style.display === "none") {
        textBoxThree.style.display = "block";
    } else {
        textBoxThree.style.display = "none";
        }
    if (guitarFour.style.display === "none") {
        guitarFour.style.display = "block";
    } else {
        guitarFour.style.display = "none";
        }
    
    if (guitarFour.style.display === "block"){
        guitarThree.style.display = "none";
    }
}

function revealTextBoxFour(){
    
    if (textBoxFour.style.display === "none") {
        textBoxFour.style.display = "block";
    } else {
        textBoxFour.style.display = "none";
        }
    if (guitarFive.style.display === "none") {
        guitarFive.style.display = "block";
    } else {
        guitarFive.style.display = "none";
        }
    
    if (guitarFive.style.display === "block"){
        guitarFour.style.display = "none";
    }
}

function revealTextBoxFive(){
    
    if (textBoxFive.style.display === "none") {
        textBoxFive.style.display = "block";
    } else {
        textBoxFive.style.display = "none";
        }
    if (guitarSix.style.display === "none") {
        guitarSix.style.display = "block";
    } else {
        guitarSix.style.display = "none";
        }
    
    if (guitarSix.style.display === "block"){
        guitarFive.style.display = "none";
    }
}

function revealTextBoxSix(){
    
    if (textBoxSix.style.display === "none") {
        textBoxSix.style.display = "block";
    } else {
        textBoxSix.style.display = "none";
        }
    if (guitarSeven.style.display === "none") {
        guitarSeven.style.display = "block";
    } else {
        guitarSeven.style.display = "none";
        }
    
    if (guitarSeven.style.display === "block"){
        guitarSix.style.display = "none";
    }
}

function revealTextBoxSeven(){
    
    if (textBoxSeven.style.display === "none") {
        textBoxSeven.style.display = "block";
    } else {
        textBoxSeven.style.display = "none";
        }
    if (guitarEight.style.display === "none") {
        guitarEight.style.display = "block";
    } else {
        guitarEight.style.display = "none";
        }
    
    if (guitarEight.style.display === "block"){
        guitarSeven.style.display = "none";
    }
}

function revealTextBoxEight(){
    
    if (textBoxEight.style.display === "none") {
        textBoxEight.style.display = "block";
    } else {
        textBoxEight.style.display = "none";
        }
    if (guitarEight.style.display === "none") {
        guitarEight.style.display = "block";
    } else {
        guitarEight.style.display = "none";
        }
    
    if (guitarEight.style.display === "block"){
        guitarEight.style.display = "none";
    }
}

//<--------------------AUDIO FUNCTIONS---------------------------->//

//<-------THIS ONE ISNT WORKING BUT DIDNT TRY TOO HARD TO DE-BUG---->
function playTransitionAudio(){
    const transitionAudio = document.getElementById("transition-audio")
    let playButton = document.getElementById("main-button")
    if (playButton.clicked == true){
        transitionAudio.play()
    }
}

