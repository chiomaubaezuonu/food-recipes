import React from 'react'

const tags = [
    {
        tagName: "Beef",
        recipeCount: "1 recipe"
    },
    {
        tagName: "Breakfast",
        recipeCount: "2 recipes"
    },
    {
        tagName: "Dinner",
        recipeCount: "4 recipes"
    },
    {
        tagName: "Food",
        recipeCount: "1 recipe"
    }
]
const Tags = () => {
    return (
        <div className='tags-page'>
            {
                tags.map((tag) => (
                    <div>
                        <h2>{tag.tagName}</h2>
                        <p>{tag.recipeCount}</p>
                    </div>

                ))
            }
        </div>
    )
}

export default Tags