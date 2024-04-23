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
           <div className="tags-container">
           {
                tags.map((tag) => (
                    <div className='tags-card'>
                        <h5 className='tagName'>{tag.tagName}</h5>
                        <p className='recipe-count'>{tag.recipeCount}</p>
                    </div>

                ))
            }
           </div>
        </div>
    )
}

export default Tags