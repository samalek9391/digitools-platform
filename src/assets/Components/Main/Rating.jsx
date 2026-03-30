import React from 'react';

const Rating = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] mb-30'>
            <div className='grid grid-cols-3 w-[80%] mx-auto'>
                
                <div className='py-15'>
                    <div className='border-r-2 border-white'>
                        <h2 className='text-white text-6xl text-center font-extrabold mb-3'>50k+</h2>
                        <p className='text-white text-center'>Active Users</p>
                    </div>
                </div>

                <div className='py-15'>
                    <div className='border-r-2 border-white'>
                        <h2 className='text-white text-6xl text-center font-extrabold mb-3'>200k+</h2>
                        <p className='text-white text-center'>Premium Tools</p>
                    </div>
                </div>

                <div className='py-15'>
                    <div >
                        <h2 className='text-white text-6xl text-center font-extrabold mb-3'>4.9</h2>
                        <p className='text-white text-center'>Rating</p>
                    </div>
                </div>
               

            </div>
 
        </div>
    );
};

export default Rating;