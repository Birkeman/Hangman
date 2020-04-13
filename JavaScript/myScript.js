//CHECK IF INPUT IS LETTER
function letter(keyCode) {
    return keyCode >= 65 && keyCode <= 90 || keyCode >= 97 && keyCode <= 122 ;
}
function startGame(){
    //User Guesses
    document.addEventListener("keypress", function(event) {
        guesses = event.keyCode;
        y = String.fromCharCode(guesses).toUpperCase();
        //IF INPUT LETTER IS NOT INSIDE MISSED OR CORRECT 
        if(!wrongLetters.includes(y) && !underScores.includes(y)){
            if(letter(guesses)){
                for(var i = 0; i < answer.length; i++) {
                    if(answer[i] === y) {
                        correct++;
                        underScores[i] = y;
                        //SOLVE HTML PRINT
                        document.querySelector('.js-word').innerHTML = underScores.join('');
                        WinLose();
                    };
                };
                //MISSED LETTERS, PRINT
                var j = (answer.indexOf(y))
                if(j < 0 && wrongLetters.indexOf(y) < 0){
                    wrongLetters.push(y);
                    mistakes++;
                    document.querySelector('.js-missed').textContent = wrongLetters;
                    drawHangman();
                    WinLose();
                };
            } else{ //IF INPUT IS NOT LETTER
                document.querySelector ('.info').innerHTML = "Please enter only letters";
                infoBox();
            };
        } else { //IF LETTER ALREADY ENTERED
            document.querySelector ('.info').innerHTML = "Letter already entered";
            infoBox();
        };
    });
};

startGame();