var names = [
    // "Robinson Crusoe",
    // "Frankenstein",
    // "Dreamcatcher",
    // "The Adventures of Huckleberry Finn",
    // "The Picture of Dorian Gray",
    // "Dracula",
    // "The Call of the Wild",
    // "The Great Gatsby",
    // "The Maltese Falcon",
    // "To Kill a Mockingbird",
    // "The Lord of the Rings",
    // "The Stand",
    // "Carrie",
    // "Pet Sematary",
    "The Godfather"
]
let underScores = [];
let answer;
let wrongLetters = [];
let correctLetters = [];
let mistakes = 0;
let correct = 0;

//WIN OR LOSE ALERT
function WinLose(){
    if(correct === answer.length){
        document.querySelector('.js-modal-text').innerHTML = "CONGRATULATIONS! YOU WON!&#128512;";
        document.querySelector('.js-modal').style.display = "block";
    } else if(mistakes === 6){
        document.querySelector('.js-modal').style.display = "block"
    }
};
//INFO BOX
function infoBox(){
    document.querySelector ('.info').style.display = "block";
    setTimeout (function(){
        $('.info').fadeOut('slow');
    }, 3000);
}
//CHECK IF INPUT IS LETTER
function letter(keyCode) {
    return keyCode >= 65 && keyCode <= 90 || keyCode >= 97 && keyCode <= 122 ;
}
//Print Wrong Letters on screen
document.querySelector('.js-missed').textContent = wrongLetters;
//Pick Random Name
answer = names[Math.floor(Math.random() * names.length)].toUpperCase();

function startGame(){
    //Print Underscores on screen
    for(var i = 0; i < answer.length; i++){
        underScores.push('_');
        document.querySelector('.js-word').textContent = underScores.join(" ");
        
    }
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
                        document.querySelector('.js-word').textContent = underScores.join(" ");
                        WinLose()
                    };
                };
                //MISSED LETTERS, PRINT
                var j = (answer.indexOf(y))
                if(j < 0 && wrongLetters.indexOf(y) < 0){
                    wrongLetters.push(y);
                    mistakes++;
                    document.querySelector('.js-missed').textContent = wrongLetters;
                    drawHangman()
                    WinLose();
                };
            } else{ //IF INPUT IS NOT LETTER
                document.querySelector ('.info').innerHTML = "Please enter only letters";
                infoBox();
            };
        } else{ //IF LETTER ALREADY ENTERED
            document.querySelector ('.info').innerHTML = "Letter already entered";
            infoBox()
        };
    });
};




startGame();