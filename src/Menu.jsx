import React from 'react'
import data from "./FoodData"

const Menu = () => {
    console.log(data)
    return (
        <div className='food-recipes-container' id='menu'>
            {data.map((item) => {
                return (
                    <div className='food-card'>
                       <a href="#jollof"> <img src={item.img} alt='food-recipes' /></a>
                        <h4 className='food-name'>{item.food}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default Menu