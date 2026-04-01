import React, { use } from 'react';
import Card from './Card';

const ProductContainer = ({dataPromise, carts, setCarts}) => {
    const tools = use(dataPromise)

    return (
        <div className='w-[80%] mx-auto grid gap-7 md:grid-cols-2 lg:grid-cols-3 mb-60'>
            {tools.map(tool => <Card tool = {tool} carts = {carts} setCarts = {setCarts}/>)}
            
        </div>
    );
};

export default ProductContainer;