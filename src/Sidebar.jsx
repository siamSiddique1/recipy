import React from 'react';
import Wntcook from './Wntcook';
import Crntcook from './Crntcook';

const Sidebar = ({wntCook,handleCrntCook,crntCook}) => {
    return (
        <div>
            <Wntcook handleCrntCook={handleCrntCook} wntCook={wntCook}/>
            <Crntcook crntCook={crntCook}/>
        </div>
    );
};

export default Sidebar;