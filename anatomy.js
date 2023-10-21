//have user click thorugh instructions vvv

// let info = document.getElementsByClassName('text-box');

// for(i=0; i<info.length; i++){
//     info[i].onclick = function(){

//     }
// }





///trying to connect pseudo class to JS



function keyDown(noteName){
    
    if(!document.getElementsById(noteName).contains('dim')){
        document.getElementsById(noteName).add('dim')
    }

}

//playing the keys,

    document.addEventListener('keydown', (playNote) =>{
        if(playNote.repeat) return;

        if(playNote.key == 'c'){
            document.getElementById('low-c').play();
            
            keyDown('low-c'); 
        }
        //NEED HELP WITH OPERATORS FOR SHIFT/SPACE BAR vvvv
        if(playNote.key == 'C'){
            document.getElementById('low-c#').play();
            
            keyDown('low-c#'); 
        }
        if(playNote.key == 'd'){
            document.getElementById('low-d').play();
        }

        if(playNote.key == 'd'){
            document.getElementById('low-d#').play();
        }

        if(playNote.key == 'e'){
            document.getElementById('low-e').play();
        }

        if(playNote.key == 'f'){
            document.getElementById('low-f').play();
        }

        if(playNote.key == 'f'){
            document.getElementById('low-f#').play();
        }

        if(playNote.key == 'g'){
            document.getElementById('low-g').play();
        }

        if(playNote.key == 'g'){
            document.getElementById('low-g#').play();
        }

        if(playNote.key == 'a'){
            document.getElementById('low-a').play();
        }

        if(playNote.key == 'a'){
            document.getElementById('low-a#').play();
        }

        if(playNote.key == 'b'){
            document.getElementById('low-b').play();
        }

        if(playNote.key == 'c'){
            document.getElementById('high-c').play();
        }

        if(playNote.key == 'c#'){
            document.getElementById('high-c#').play();
        }

        if(playNote.key == 'd'){
            document.getElementById('high-d').play();
        }

        if(playNote.key == 'd'){
            document.getElementById('high-d#').play();
        }

        if(playNote.key == 'e'){
            document.getElementById('high-e').play();
        }

        if(playNote.key == 'f'){
            document.getElementById('high-f').play();
        }

        if(playNote.key == 'f'){
            document.getElementById('high-f#').play();
        }

        if(playNote.key == 'g'){
            document.getElementById('high-g').play();
        }

        if(playNote.key == 'g'){
            document.getElementById('high-g#').play();
        }

        if(playNote.key == 'a'){
            document.getElementById('high-a').play();
        }

        if(playNote.key == 'a'){
            document.getElementById('high-a#').play();
        }

        if(playNote.key == 'b'){
            document.getElementById('high-b').play();
        }
    })
        
