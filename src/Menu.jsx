import React from 'react'
import data from "./FoodData"

const Menu = () => {
    console.log(data)
    return (
        <div className='food-recipes-container'>
            {data.map((item) => {
                return (
                    <div className='food-card'>
                        <h4>{item.food}</h4>
                        <p>{item.img}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Menu