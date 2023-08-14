import { SetStateAction } from 'react'
import pickup from '../../../../helpers/PickUp'

interface Props {
    setMoving: SetStateAction<any>
    moving: any
    Ref: any
}

const DragZone = (props: Props) => {
    return (
        <section id="drag-zone" ref={props.Ref}>
            <img draggable="false" onMouseDown={() => pickup(event, props.setMoving, props.moving)} onTouchStart={() => pickup(event, props.setMoving, props.moving)} id="dragble-ele" alt="tallest"
                src="https://learner.ta3leem.iq/asset-v1:Ta3leem+1+2022_2023+type@asset+block@pngwing.com__11_.png" />

            <img draggable="false" onMouseDown={() => pickup(event, props.setMoving, props.moving)} onTouchStart={() => pickup(event, props.setMoving, props.moving)} id="dragble-ele" alt="small"
                src="https://learner.ta3leem.iq/asset-v1:Ta3leem+1+2022_2023+type@asset+block@pngwing.com__9_.png" />
        </section>)
}

export default DragZone