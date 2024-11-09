import './Home.css'
import img1 from './images/well.jpg'
function Home() {
    return (
        <>
            <div>
                <p className="headers">Welcome to Heel Eats!</p>
                <p className="paragraphs">Your home for finding restaurants at Chapel Hill</p>
                <img src={img1} className="images" alt="Old Well at UNC"></img>
            </div>
        </>
    );
}

export default Home