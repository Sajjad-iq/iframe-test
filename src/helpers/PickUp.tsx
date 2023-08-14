import { SetStateAction } from "react";

export default function pickup(event: any, setMoving: SetStateAction<any>, moving: any) {
    setMoving(event.target);
    if (moving) {
        moving.style.position = 'fixed';
        moving.style.zIndex = '5';
    }
}