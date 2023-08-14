import win from '../assets/win sound.wav'
import lose from '../assets/lose sound.mp3'

export default function DropForTouch(event: any, moving: any, setMoving: any, DragZoneRef: any) {


    event.preventDefault()

    if (moving) {

        let target = DragZoneRef

        /* for mouse pointer */

        target = document.elementFromPoint(event.changedTouches[0].clientX, event.changedTouches[0].clientY)

        console.log(target)

        if (target) {
            if (target.id === "drop-zone") {
                target.appendChild(moving)
                if (moving.alt !== "tallest") {
                    new Audio(lose).play()
                } else {
                    new Audio(win).play()
                }
            } else {
                DragZoneRef.current!.appendChild(moving)
            }
        }

        moving.style.position = 'static';
        moving.style.zIndex = '10';
        moving.style.transform = ''
        setMoving(null)
    }

    console.log("drop worked")
}