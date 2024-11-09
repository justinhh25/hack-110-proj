import Topbar from "../components/topbar"
import temp from './images/A_black_image.jpg'
export default function Find() {
    return (
        <>
            <div class="gallery">
                <a target="_blank" href="img_5terre.jpg">
                    <img src={temp} alt="Cinque Terre" width="600" height="400"></img>
                </a>
            <div class="desc">Add a description of the image here</div>
            </div>

            <div class="gallery">
                <a target="_blank" href="img_forest.jpg">
                    <img src={temp} alt="Forest" width="600" height="400"></img>
                </a>
            <div class="desc">Add a description of the image here</div>
            </div>

            <div class="gallery">
                <a target="_blank" href="img_lights.jpg">
                    <img src={temp} alt="Northern Lights" width="600" height="400"></img>
                </a>
            <div class="desc">Add a description of the image here</div>
            </div>

            <div class="gallery">
                <a target="_blank" href="img_mountains.jpg">
                    <img src={temp} alt="Mountains" width="600" height="400"></img>
                </a>
            <div class="desc">Add a description of the image here</div>
            </div>
        </>
    );
}