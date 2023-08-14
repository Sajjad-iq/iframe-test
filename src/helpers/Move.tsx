export default function move(event: any, moving: any) {
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

