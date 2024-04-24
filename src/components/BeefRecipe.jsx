
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

const BeefRecipe = () => {
    return (
        <div className='recipes-page'>
            <div className="recipes-section">
                <h3 style={{
                    fontSize: '1.563rem', marginBottom: '1.38rem', fontFamily: 'var(--headingFont)',
                    fontWeight: '400',
                    lineHeight: '1.3'
                }}>Beef</h3>
                <div className="img-text-wrapper">
                    <div style={{width: '90vw' }} className="card-container">
                        {
                            recipeCards.map((card) => (
                                <div style={{ width: '23rem' }} className='card'>
                                    <img className='card-img' src={card.img} alt='food' />
                                    <h4 className='card-name'>{card.name}</h4>
                                    <p className='card-text'>{card.prep}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeefRecipe;