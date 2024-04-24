import { faClock, faClockFour } from "@fortawesome/free-regular-svg-icons"
import { faUserFriends } from "@fortawesome/free-solid-svg-icons"
import { faUsers } from "@fortawesome/free-solid-svg-icons/faUsers"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"

const Pancake = () => {
    return (
        <div className='pancake-page'>
            <div className="pancake-hero-section">
                <img className="pancake-img" src='./images/recipe-4.jpeg' alt='pancake' />
                <div className="pancake-writeup">
                    <h2 className="pancake-title">Banana Pancakes</h2>
                    <p className="recipe-info">Shabby chic humblebrag banh mi bushwick, banjo kale chips meggings. Cred selfies sartorial, cloud bread disrupt blue bottle seitan. Dreamcatcher tousled bitters, health goth vegan venmo whatever street art lyft shabby chic pitchfork beard. Drinking vinegar poke tbh, iPhone coloring book polaroid truffaut tousled ramps pug trust fund letterpress. Portland four loko austin chicharrones bitters single-origin coffee. Leggings letterpress occupy pour-over.</p>
                    <div className="prep-time-div">
                        <div>
                            <FontAwesomeIcon icon={faClock} />
                            <p className="prep-time">Prep Time</p>
                            <p>30 min.</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faClock} />
                            <p className="prep">Prep Time</p>
                            <p>15 min.</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faUserFriends} />
                            <p>Serving</p>
                            <p>6 Servings.</p>
                        </div>
                    </div>
                    <div className="recipe-tags">
                        <p>Tags:</p>
                        <NavLink to="/"><button>Beef</button></NavLink>
                        <NavLink to="/"><button>Breakfast</button></NavLink>
                        <NavLink to="/"><button>Pancakes</button></NavLink>
                        <NavLink to="/"><button>Food</button></NavLink>
                    </div>
                </div>
            </div>
            <div className="guideline-section">
                <div className="instructions-section">
                    <h4>Instructions</h4>
                    <div className="step-one">

                        <p className="step">Step 1</p>
                        <p>I'm baby mustache man braid fingerstache small batch venmo succulents shoreditch.</p>
                    </div>
                    <div className="step-two">

                        <p className="step">Step 2</p>
                        <div style={{height:"2px", color:"red", width:"30%"}}></div>
                        <p>
                            Pabst pitchfork you probably haven't heard of them, asymmetrical seitan tousled succulents wolf banh mi man bun bespoke selfies freegan ethical hexagon.

                        </p>
                    </div>
                    <div className="step-three">
                        <p className="step">Step 3</p>
                        <p>Polaroid iPhone bitters chambray. Cornhole swag kombucha live-edge.</p>
                    </div>
                </div>
                <div className="ingredients-section">
                    <h4>Ingredients</h4>
                    {/* <div className="ingredient-div"> */}
                        <p className="ingredient">1 1/2 cups dry pancake mix</p>
                        <p className="ingredient">1/2 cup flax seed meal</p>
                        <p className="ingredient"> 1 cup skim milk</p>
                    {/* </div> */}
                    <div className="tools-section">
                        <h4>Tools</h4>
                        <p className="tool">Hand Blender</p>
                        <p className="tool">Large Heavy Pot With Lid</p>
                        <p className="tool">Measuring Spoons</p>
                        <p className="tool">Measuring Cups</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pancake