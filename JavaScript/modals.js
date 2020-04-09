//WIN OR LOSE ALERT
function WinLose(){
    if(correct + space === answer.length){
        document.querySelector('.js-modal-text').innerHTML = "CONGRATULATIONS! YOU WON!&#128512;";
        document.querySelector('.js-modal').style.display = "block";
    } else if(mistakes === 6){
        document.querySelector('.js-modal').style.display = "block";
    };
};
//INFO BOX
function infoBox(){
    document.querySelector ('.info').style.display = "block";
    setTimeout (function(){
        $('.info').fadeOut('slow');
    }, 3000);
};
//PLAY AGAIN -- RESTART GAME
document.querySelector('.js-modal-button').addEventListener("click", function(){
    window.location.reload();
});