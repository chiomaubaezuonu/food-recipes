import { NavLink } from "react-router-dom"

const recipeCards = [
    {
        img: "images/recipe-1.jpeg",
        name: "Carne Asada",
        prep: "15min | Cook : 5min"
    },
    {
        img: "images/recipe-2.jpeg",
        name: "Greek Ribs",
        prep: "15min | Cook : 5min"
    },
    {
        img: "images/recipe-3.jpeg",
        name: "Vegetable Soup",
        prep: "15min | Cook : 5min"
    },
    {
        img: "images/recipe-4.jpeg",
        name: "Banana Pancakes",
        prep: "15min | Cook : 5min"
    }
]

const Recipes = () => {
    return (
        <div className='recipes-page'>
            <div className="recipes-section">
                <div className="img-text-wrapper">
                    <div className="recipes-list-container">
                        <h4> Recipes</h4>
                        <div className='recipes-list'>
                            <ul>
                                <NavLink to="/beefRecipe"><li>Beef (1)</li></NavLink>
                                <NavLink to="/beefRecipe"> <li>Breakfast (2)</li></NavLink>
                                <NavLink to="/beefRecipe"><li>Carrots (3)</li></NavLink>
                                <NavLink to="/beefRecipes"><li>Food (4)</li></NavLink>
                            </ul>
                        </div>
                    </div>
                    <div className="card-container">
                        {
                            recipeCards.map((card) => (
                                <NavLink to="/pancake"><div className='card'>
                                    <img className='card-img' src={card.img} alt='food' />
                                    <h4 className='card-name'>{card.name}</h4>
                                    <p className='card-text'>{card.prep}</p>
                                </div></NavLink>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipes