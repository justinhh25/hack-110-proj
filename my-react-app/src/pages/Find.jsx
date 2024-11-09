import './Find.css'
import temp from './images/A_black_image.jpg'
import jade from './images/jade-palace-viewed-from.jpg'
import neal from './images/neals.jpg'
import oak from './images/oakleaf.jpg'
import dog from './images/spotted-dog.jpg'
import akai from './images/akaihana.jpg'
import amantepizza from './images/amante.jpg'
import dillo from './images/aramdillo.jpg'
import burgershack from './images/burgershack.jpg'
import hibachi from './images/hibachi&co.jpg'
import tandoor from './images/tandoor.jpg'
import nypizza from './images/heartpizzany.jpg'
import tatullas from './images/tatullas.jpg'
import cantina from './images/cosmiccantina.jpg'
import bangkok from './images/bangkok54.jpg'
import brenz from './images/brenzpizza.jpg'
import maggianos from './images/magginos.jpg'
import falafel54 from './images/falafel54.jpg'
import azteca from './images/azteca.jpg'
import chickenhut from './images/chickenhut.jpg'

export default function Find() {
    return (
        <>
            <div className="gallery">
                <a href="https://www.myjadepalace.com/">
                    <img src={jade} className="image"></img>
                </a>
                <div>
                    <p className="desc">Jade Palace Seafood</p>
                    <p className="food-desc">Type of food: Chinese</p>
                    <p className="food-desc">Address: 103 E Main St, Carrboro, NC 27510</p>
                    <p className="food-desc">This Restaurant is rated 4.1/5 stars.</p>
                </div>
            </div>

            <div className="gallery">
                <a href="https://nealsdeli.com/">
                    <img src={neal} className="image"></img>
                </a>
                <div>
                    <p className="desc">Neal's Deli</p>
                    <p className="food-desc">Type of food: American</p>
                    <p className="food-desc">Address: 100 E Main St C, Carrboro, NC 27510</p>
                    <p className="food-desc">This Restaurant is rated 4.7/5 stars.</p>
                </div>
            </div>

            <div className="gallery">
                <a href="https://oakleafnc.com/">
                    <img src={oak} className="image"></img>
                </a>
                <div>
                    <p className="desc">Oakleaf</p>
                    <p className="food-desc">Type of food: American</p>
                    <p className="food-desc">Address: 310 E Main St, Carrboro, NC 27510 </p>
                    <p className="food-desc">This Restaurant is rated 4.7/5 stars.</p>
                </div>
            </div>

            <div className="gallery">
                <a href="https://thespotteddogrestaurant.com/">
                    <img src={dog} className="image"></img>
                </a>
                <div>
                    <p className="desc">Spotted Dog</p>
                    <p className="food-desc">Type of food: American, Vegan, Vegetarian</p>
                    <p className="food-desc">Address: 111 E Main St, Carrboro, NC 27510</p>
                    <p className="food-desc">This Restaurant is rated 4.4/5 stars.</p>
                </div>
            </div>


            <div className="gallery">
                <a href="https://www.akaihana.com/">
                    <img src={akai} className="image"></img>
                </a>
                <div>
                    <p className="desc">Akai Hana</p>
                    <p className="food-desc">Type of food: Japanese</p>
                    <p className="food-desc">Address: 206 W Main St, Carrboro, NC 27510</p>
                    <p className="food-desc">This Restaurant is rated 4.6/5 stars</p>
                </div>
            </div>

            <div className="gallery">
                <a href="https://amantepizza.com/">
                    <img src={amantepizza} className="image"></img>
                </a>
                <div>
                    <p className="desc">Amante Gourmet Pizza</p>
                    <p className="food-desc">Type of food: Italian</p>
                    <p className="food-desc">Address: 300 E Main St, Carrboro, NC 27510</p>
                    <p className="food-desc">This Restaurant is rated 4.0/5 stars</p>
                </div>
            </div>

            <div className="gallery">
                <a href="https://armadillogrill.com/">
                    <img src={dillo} className="image"></img>
                </a>
                <div>
                    <p className="desc">Armadillo Grill</p>
                    <p className="food-desc">Type of food: Tex-Mex</p>
                    <p className="food-desc">Address: 120 E Main St, Carrboro, NC 27510</p>
                    <p className="food-desc">This Restaurant is rated 4.0/5 stars</p>
                </div>
            </div>

            <div className="gallery">
                <a href="https://alsburgershack.com/">
                    <img src={burgershack} className="image"></img>
                </a>
                <div>
                    <p className="desc">Al's Burger Shack</p>
                    <p className="food-desc">Type of food: American</p>
                    <p className="food-desc">Address: 516 W Franklin St, Chapel Hill, NC 27516</p>
                    <p className="food-desc">This Restaurant is rated 4.6/5 stars</p>
                </div>
            </div>

            <div className="gallery">
                <a href="https://chapelhill.hibachicompany.com/">
                    <img src={hibachi} className="image"></img>
                </a>
                <div>
                    <p className="desc">Hibachi & Company</p>
                    <p className="food-desc">Type of food: Japanese</p>
                    <p className="food-desc">Address: 153 E Franklin St, Chapel Hill, NC 27514</p>
                    <p className="food-desc">This Restaurant is rated 4.3/5 stars</p>
                </div>
            </div>

            <div className="gallery">
                <a href="http://www.tandoorindian.com/">
                    <img src={tandoor} className="image"></img>
                </a>
                <div>
                    <p className="desc">Tandoor</p>
                    <p className="food-desc">Type of food: Indian</p>
                    <p className="food-desc">Address: 1301 E Franklin St #100, Chapel Hill, NC 27514</p>
                    <p className="food-desc">This Restaurant is rated 4.3/5 stars</p>
                </div>
            </div>

            <div className="gallery">
                <a href="https://ilovenypizzanc.com/">
                    <img src={nypizza} className="image"></img>
                </a>
                <div>
                    <p className="desc">I Love NY Pizza</p>
                    <p className="food-desc">Type of food: Italian</p>
                    <p className="food-desc">Address: 106 W Franklin St #2516, Chapel Hill, NC 27516</p>
                    <p className="food-desc">This Restaurant is rated 3.3/5 stars</p>
                </div>
            </div>

            <div className="gallery">
                <a href="http://talullas.com/">
                    <img src={tatullas} className="image"></img>
                </a>
                <div>
                    <p className="desc">Talullas</p>
                    <p className="food-desc">Type of food: Turkish</p>
                    <p className="food-desc">Address: 456 W Franklin St, Chapel Hill, NC 27516</p>
                    <p className="food-desc">This Restaurant is rated 4.5/5 stars</p>
                </div>
            </div>

            <div className="gallery">
                <a href="https://www.cosmiccantina.com/Chapel_Hill/index.php">
                    <img src={cantina} className="image"></img>
                </a>
                <div>
                    <p className="desc">Cosmic Cantina</p>
                    <p className="food-desc">Type of food: Mexican</p>
                    <p className="food-desc">Address: 118 E Franklin St, Chapel Hill, NC 27514</p>
                    <p className="food-desc">This Restaurant is rated 4.4/5 stars</p>
                </div>
            </div>

            <div className="gallery">
                <a href="https://thaibk54nc.com/">
                    <img src={bangkok} className="image"></img>
                </a>
                <div>
                    <p className="desc">Bangkok 54</p>
                    <p className="food-desc">Type of food: Thai</p>
                    <p className="food-desc">Address: 6209 Falconbridge Rd, Chapel Hill, NC 27517</p>
                    <p className="food-desc">This Restaurant is rated /5 stars</p>
                </div>
            </div>

            <div className="gallery">
                <a href="https://www.brenz.com/locations/chapel-hill">
                    <img src={brenz} className="image"></img>
                </a>
                <div>
                    <p className="desc">Brenz Pizza </p>
                    <p className="food-desc">Type of food: Italian</p>
                    <p className="food-desc">Address: 3120 Environ Way, Chapel Hill, NC 27517</p>
                    <p className="food-desc">This Restaurant is rated 4.4/5 stars</p>
                </div>
            </div>

            <div className="gallery">
                <a href="https://www.maggianos.com/north-carolina/durham/8030-renaissance-pkwy./main-menu/?utm_source=google&utm_medium=organic&utm_campaign=Maggianos">
                    <img src={maggianos} className="image"></img>
                </a>
                <div>
                    <p className="desc">Maggiano's Little Italy</p>
                    <p className="food-desc">Type of food: Italian</p>
                    <p className="food-desc">Address: 8030 Renaissance Pkwy #890, Durham, NC 27713</p>
                    <p className="food-desc">This Restaurant is rated 4.3/5 stars</p>
                </div>
            </div>

            <div className="gallery">
                <a href="http://www.falafel54.com/">
                    <img src={falafel54} className="image"></img>
                </a>
                <div>
                    <p className="desc">Falafel 54</p>
                    <p className="food-desc">Type of food: Mediterranean</p>
                    <p className="food-desc">Address: 2105 NC-54 AA, Durham, NC 27713</p>
                    <p className="food-desc">This Restaurant is rated 4.4/5 stars</p>
                </div>
            </div>

            <div className="gallery">
                <a href="https://order.spoton.com/so-azteca-grill-17016/durham-nc/6581c44403afe95fe495e2f4">
                    <img src={azteca} className="image"></img>
                </a>
                <div>
                    <p className="desc">Azteca Grill</p>
                    <p className="food-desc">Type of food: Mexican</p>
                    <p className="food-desc">Address: 1929 Chapel Hill Rd, Durham, NC 27707 </p>
                    <p className="food-desc">This Restaurant is rated 4.4/5 stars</p>
                </div>
            </div>

            <div className="gallery">
                <a href="https://chickenhutnc.weebly.com/menu.html">
                    <img src={chickenhut} className="image"></img>
                </a>
                <div>
                    <p className="desc">Chicken Hut</p>
                    <p className="food-desc">Type of food: American</p>
                    <p className="food-desc">Address: 3019 Fayetteville St, Durham, NC 27707</p>
                    <p className="food-desc">This Restaurant is rated 4.6/5 stars</p>
                </div>
            </div>
        </>
    );
}