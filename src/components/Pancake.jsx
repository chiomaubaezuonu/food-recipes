import { faClock } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"

const Pancake = () => {
    return (
        <div className='pancake-page'>
            <div className="pancake-hero-section">
                <img className="pancake-img" src='./images/recipe-4.jpeg' alt='pancake' />
                <div className="pancake-writeup">
                    <h2>Banana Pancakes</h2>
                    <p>Shabby chic humblebrag banh mi bushwick, banjo kale chips meggings. Cred selfies sartorial, cloud bread disrupt blue bottle seitan. Dreamcatcher tousled bitters, health goth vegan venmo whatever street art lyft shabby chic pitchfork beard. Drinking vinegar poke tbh, iPhone coloring book polaroid truffaut tousled ramps pug trust fund letterpress. Portland four loko austin chicharrones bitters single-origin coffee. Leggings letterpress occupy pour-over.</p>
                    <div className="prep-time-div">
                        <div>
                            <FontAwesomeIcon icon={faClock} />
                            <p>Prep Time</p>
                            <p>30 min.</p>
                        </div>
                        <div>
                        <FontAwesomeIcon icon={faClock} />
                            <p>Prep Time</p>
                            <p>15 min.</p>
                        </div>
                        <div>
                        <FontAwesomeIcon icon={faClock} />
                            <p>Serving</p>
                            <p>6 Servings.</p>
                        </div>
                    </div>
                    <div className="recipe-tags">
                        <p>Tags:</p>
                        <button><NavLink to="/">Beef</NavLink></button>
                        <button><NavLink to="/">Breakfast</NavLink></button>
                        <NavLink to="/"><button>Pancakes</button></NavLink>
                        <NavLink to="/"><button>Food</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pancake