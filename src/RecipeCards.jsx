import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';

const RecipeCards = ({handleWntcook}) => {
    const[recipy,setRecipy]=useState([])
    useEffect(()=>{
        fetch('recipy.json')
        .then(res=>res.json())
        .then(data=>setRecipy(data))
    },[])
    return (
        <div className='grid grid-cols-2'>
            {
                recipy.map((data)=><RecipeCard handleWntcook={handleWntcook} data={data} key={data.recipe_id}/>)
            }
        </div>
    );
};

export default RecipeCards;