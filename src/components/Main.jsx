import React from 'react'

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
                                <li>Beef (1)</li>
                                <li>Breakfast (2)</li>
                                <li>Carrots (3)</li>
                                <li>Food (4)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card-container">
                        {
                            recipeCards.map((card) => (
                                <div className='card'>
                                    <img src={card.img} alt='food' />
                                    <h4>{card.name}</h4>
                                    <p>{card.prep}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main