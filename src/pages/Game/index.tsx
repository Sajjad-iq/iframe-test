import { useRef, useState } from 'react';
import './game.css'
import move from '../../helpers/Move';
import DragZone from './components/DragZone';
import DropZone from './components/DropZone';
import drop from '../../helpers/Drop';

const Game = () => {

    const [moving, setMoving] = useState<any>()
    const DragZoneRef = useRef<any>()


    return (
        <section id="main-game-continer" onMouseMove={() => move(event, moving)} onTouchMove={() => move(event, moving)} onTouchEnd={() => drop(event, moving, setMoving, DragZoneRef)} onMouseUp={() => drop(event, moving, setMoving, DragZoneRef)}>
            <h3 id="tarining-header">ضع النبات الأطول في الدائرة</h3>

            <DragZone Ref={DragZoneRef} setMoving={setMoving} moving={moving} />
            <DropZone />
        </section>
    )
}

export default Game