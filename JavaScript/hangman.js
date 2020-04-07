function drawHangman(){
    $(".js-hangman-parts").attr("src", "/Images/" + mistakes + ".png")
};

//PLAY AGAIN -- RESTART GAME
document.querySelector('.js-modal-button').addEventListener("click", function(){
        window.location.reload();
})