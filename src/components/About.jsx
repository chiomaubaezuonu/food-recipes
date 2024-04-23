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
]
const About = () => {
    return (
        <div className='about-container'>
            <div className='about-content'>
                <div className="about-text-div">
                    <h1 className='about-title'>I'm baby coloring book poke taxidermy</h1>
                    <p className='about-text-one'>Taxidermy forage glossier letterpress heirloom before they sold out you probably haven't heard of them banh mi biodiesel chia.</p>

                    <p className='about-text-two'>Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia retro.</p>
                    <button className='nav-btn'>Contact</button>
                </div>
                <div className="about-img-div">
                    <img className='about-img' src='./images/about-img.jpeg' alt='food' />
                </div>
            </div>
            <div className='card-content-div'>
                <h4 className='about-subtitle'>Look At This Awesomesouce!</h4>
                <div className="card-container">
                    {
                        recipeCards.map((card) => (
                            <div className='card'>
                                <img className='card-img' src={card.img} alt='food' />
                                <h4 className='card-name'>{card.name}</h4>
                                <p className='card-text'>{card.prep}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default About