import React, { use } from 'react';
import Card from './Card';

const CardsContainer = ({dataPromise}) => {
    const tools = use(dataPromise)
    console.log(tools);
    return (
        <div className='w-[80%] mx-auto grid gap-7 md:grid-cols-2 lg:grid-cols-3 mb-60'>
            {tools.map(tool => <Card tool = {tool}/>)}
            
        </div>
    );
};

export default CardsContainer;