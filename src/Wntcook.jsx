import React from 'react';

const Wntcook = ({wntCook,handleCrntCook}) => {
    return (
        <div className='bg-gray-200 m-5 '>
            <h1>want to cook section</h1>
            {
                wntCook.map((data,id)=>(
                    <div key={id} className='flex justify-between'>
                        <h1 >{data.recipe_name}</h1>
                        <button onClick={()=>handleCrntCook(data.recipe_id,data)} className='bg-green-500 rounded-2xl m-2'>prepare</button>
                    </div>
                ))
            }
        </div>
    );
};

export default Wntcook;