
// For Button Press

var length = document.querySelectorAll(".drum").length;

for (var i = 0; i < length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var button = this.innerHTML;

        makeSound(button);

        createAnimation(button);
    })

}

// For Keyboard Press

document.addEventListener("keydown", function (e) {
    makeSound(e.key);
    createAnimation(e.key);
});

function makeSound(key) {
    switch (key) {

        case 'w':
            new Audio("sounds/crash.mp3").play();
            break;

        case 'a':
            new Audio("sounds/kick-bass.mp3").play();
            break;

        case 's':
            new Audio("sounds/snare.mp3").play();
            break;

        case 'd':
            new Audio("sounds/tom-1.mp3").play();
            break;

        case 'j':
            new Audio("sounds/tom-2.mp3").play();
            break;

        case 'k':
            new Audio("sounds/tom-3.mp3").play();
            break;

        case 'l':
            new Audio("sounds/tom-4.mp3").play();
            break;

    }
}

function createAnimation(key) {
    var buttonAnimation = document.querySelector("." + key);
    buttonAnimation.classList.add("pressed");
    setTimeout(function () {
        buttonAnimation.classList.remove("pressed");
    }, 100);
}
