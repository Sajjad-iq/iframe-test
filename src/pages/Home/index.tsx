import { Link } from "react-router-dom"
import win from '../../assets/win sound.wav'
const Home = () => {
    return (
        <section className="img_bg_container">

            <img className="img"
                src="https://learner.ta3leem.iq/asset-v1:Ta3leem+1+2022_2023+type@asset+block@كتاب_العلوم_الاول_الابتدائي__1_-13.png" />

            <Link to={'/game'} onClick={() => new Audio(win).play()}>
                <div className="voice_box drag_resize" id="moving"
                    style={{ height: " 3.31988%", left: "16.5135%", top: "91.6427%", width: "74.5858%", }}></div>
            </Link>

        </section>)
}

export default Home