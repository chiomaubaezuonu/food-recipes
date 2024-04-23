import React from 'react'
import { NavLink } from 'react-router-dom'

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

const Main = () => {
    return (
        <div className='main'>
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero">
                    <div className="hero-text">
                        <h1>Simply Recipes</h1>
                        <h4>No Fluff, Just Recipes</h4>
                    </div>
                </div>
            </div>
            {/* Recipes Section */}
            <div className="recipes-section">
                <div className="img-text-wrapper">
                    <div className="recipes-list-container">
                        <h4> Recipes</h4>
                        <div className='recipes-list'>
                            <ul>
                                <NavLink to="/beefRecipe"><li>Beef (1)</li></NavLink>
                                <NavLink to="/beefRecipe"><li>Breakfast (2)</li></NavLink>
                                <NavLink to="/beefRecipe"><li>Carrots (3)</li></NavLink>
                                <NavLink to="/beefRecipe"><li>Food (4)</li></NavLink>
                            </ul>
                        </div>
                    </div>
                    {/* <NavLink to="/pancake"> */}
                    <div className="card-container">
                        {
                            recipeCards.map((card) => (
                                <div className='card'>
                                    <NavLink to="/pancake"> <img className='card-img' src={card.img} alt='food' /></NavLink>
                                    <NavLink to="/pancake"> <h4 className='card-name'>{card.name}</h4></NavLink>
                                    <NavLink to="/pancake"><p className='card-text'>{card.prep}</p></NavLink>
                                </div>
                            ))
                        }
                    </div>
                    {/* </NavLink> */}
                </div>
            </div>
        </div>
    )
}

export default Main