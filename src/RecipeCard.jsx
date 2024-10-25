import React from 'react';

const RecipeCard = ({data,handleWntcook}) => {
    const{recipe_image,recipe_name,short_description,ingredients,preparing_time,calories}=data

    return (
        <div className='bg-green-300 rounded-2xl m-2'>
            <img src={recipe_image} alt={recipe_name} />
            <h3>{recipe_name}</h3>
            <p>{short_description}</p>
            <ol>
                {
                    ingredients.map((data,idx)=><li key={idx}>{data}</li>)
                }
            </ol>
            <p>{preparing_time}</p>
            <p>{calories}</p>
            <button className='bg-green-500 rounded-full' onClick={()=>handleWntcook(data)}>want to cooking</button>
        </div>
    );
};

export default RecipeCard;