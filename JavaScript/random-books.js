var names = [
    "Robinson Crusoe",
    "Frankenstein",
    "Dreamcatcher",
    "The Adventures of Huckleberry Finn",
    "The Picture of Dorian Gray",
    "Dracula",
    "The Call of the Wild",
    "The Great Gatsby",
    "The Maltese Falcon",
    "To Kill a Mockingbird",
    "The Lord of the Rings",
    "The Stand",
    "Carrie",
    "The Hunger Games",
    "Pet Sematary",
    "A Thousand Splendid Suns",
    "The Da Vinci Code",
    "The Shining",
    "Misery",
    "Gone with the Wind",
    "Paper Towns",
    "The Godfather"
];
let underScores = [];
let answer;
let wrongLetters = [];
let correctLetters = [];
let mistakes = 0;
let correct = 0;
let space = 0;

//Print Wrong Letters on screen
document.querySelector('.js-missed').textContent = wrongLetters;

//Pick Random Name
answer = names[Math.floor(Math.random() * names.length)].toUpperCase();
// answer = answer.replace(/ /g, " ");
//Print Underscores on screen
for(var i = 0; i < answer.length; i++){
    if(answer[i] === ' '){
        underScores.push(' ');
        space ++;
    } else {
        underScores.push('_');
    }
    document.querySelector('.js-word').innerHTML = underScores.join('');
}