import React from 'react';

const Crntcook = ({crntCook}) => {
    return (
        <div className='bg-slate-300 m-5'>
            <h1>currently cooking</h1>
            {
                crntCook.map((data,i)=><h1 key={i}>{data.recipe_name}</h1>)
            }
        </div>
    );
};

export default Crntcook;