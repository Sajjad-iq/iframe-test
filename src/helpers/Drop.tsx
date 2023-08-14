import win from '../assets/win sound.wav'
import lose from '../assets/lose sound.mp3'

export default function drop(event: any, moving: any, setMoving: any, DragZoneRef: any) {

    event.preventDefault()
    let target = DragZoneRef

    if (moving) {
        if (event.clientX) {
            /* for mouse pointer */
            target = document.elementFromPoint(event.clientX, event.clientY)

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

        } else {

            target = document.elementFromPoint(event.changedTouches[0].clientX, event.changedTouches[0].clientY)

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

        }

        moving.style.position = 'static';
        moving.style.zIndex = '10';
        moving.style.transform = ''
        setMoving(null)
    }

}