let moving = null;
let winAudio = document.getElementById('win')
let loseAudio = document.getElementById('lose')
let mainContainer = document.querySelector("#main-game-continer")

function drop(event) {
    if (moving) {

        /* for mouse pointer */
        let target = null;

        if (event.clientX) {
            target = document.elementFromPoint(event.clientX, event.clientY);

            if (target.childNodes.length <= 0 && target.id === "drop-zone") {
                target.appendChild(moving)
                if (target.childNodes[0].alt !== "tallest") {
                    target.style.border = "3px solid red"
                    replayAudio("lose")
                } else {
                    replayAudio("win")
                    document.querySelector("#win-window").style.display = "flex"
                    document.querySelector(".img_bg_container").style.display = "none"
                    document.querySelector("#main-game-continer").style.display = "none"
                }
            } else {
                document.getElementById("drag-zone").appendChild(moving)
            }

        } else {
            target = document.elementFromPoint(event.changedTouches[0].clientX, event.changedTouches[0].clientY);

            if (target.childNodes.length <= 0 && target.id === "drop-zone") {
                target.appendChild(moving)
                if (target.childNodes[0].alt !== "tallest") {
                    target.style.border = "3px solid red"
                    replayAudio("lose")
                } else {
                    replayAudio("win")
                    document.querySelector("#win-window").style.display = "flex"
                    document.querySelector(".img_bg_container").style.display = "none"
                    document.querySelector("#main-game-continer").style.display = "none"
                }
            } else {
                document.getElementById("drag-zone").appendChild(moving)
            }

        }

        moving.style.position = 'static';
        moving.style.zIndex = '';
        moving.style.transform = ''
        moving = null;
    }
}



function pickup() {
    moving = event.target;
    moving.style.position = 'fixed';
    moving.style.zIndex = '8';
}


function move(event) {
    if (moving) {
        if (event.clientX) {
            //Get the current mouse position.
            var mouseX = event.clientX;
            var mouseY = event.clientY;

            // Calculate the new translation value.
            var translationX = mouseX - moving.offsetLeft;
            var translationY = mouseY - moving.offsetTop;

            // Set the new translation value.
            moving.style.transform = "translate(" + translationX + "px, " + translationY + "px)";
        } else {

            //Get the current touch position.
            var touchX = event.changedTouches[0].clientX;
            var touchY = event.changedTouches[0].clientY;

            // Calculate the new translation value.
            var translationX = touchX - moving.offsetLeft;
            var translationY = touchY - moving.offsetTop;

            // Set the new translation value.
            moving.style.transform = "translate(" + translationX + "px, " + translationY + "px)";
        }
    }
}

function startGame() {
    document.querySelector(".img_bg_container").style.display = "none"
    document.querySelector("#main-game-continer").style.display = "flex"
}

function Continue() {
    document.querySelector(".img_bg_container").style.display = "flex"
    document.querySelector("#main-game-continer").style.display = "none"
    document.querySelector(".win-animation-section").style.display = "none"
}

function Restart() {
    document.querySelector(".img_bg_container").style.display = "none"
    document.querySelector("#main-game-continer").style.display = "flex"
    document.querySelector(".win-animation-section").style.display = "none"
    document.querySelector("#lose-window").style.display = "none"
}