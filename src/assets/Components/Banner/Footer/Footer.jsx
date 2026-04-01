import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#101727] text-white'>
            <div className='grid grid-cols-5 gap-12 w-[80%] mx-auto py-30'>
                <div>
                    <h2 className='text-5xl mb-4'>DigiTools</h2>
                    <p>Premium digital tools for creators, <br /> professionals, and businesses. Work smarter  with our suite of powerful tools.</p>
                </div>


                <div>
                    <h4 className='text-[20px] font-semibold mb-4'>Product</h4>
                    <ul>
                        <li className='text-[16px]'>Features</li>
                        <li>Pricing</li>
                        <li>Templates</li>
                        <li>Integretions</li>
                    </ul>
                </div>


                <div >
                    <h4 className='text-[20px] font-semibold mb-4'>Company</h4>
                    <ul>
                        <li className='text-[16px]'>About</li>
                        <li>Blogs</li>
                        <li>Careers</li>
                        <li>Press</li>
                    </ul>
                </div>

                
                <div>
                    <h4 className='text-[20px] font-semibold mb-4'>Resources</h4>
                    <ul>
                        <li className='text-[16px]'>About</li>
                        <li>Blogs</li>
                        <li>Careers</li>
                        <li>Press</li>
                    </ul>                    
                </div>


                <div>
                    <h4 className='text-2xl mb-4'>Social Links</h4>
                    <div className="flex gap-3">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                            <i className="text-black fa-brands fa-instagram"></i>
                        </div>
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                            <i className="text-black fa-brands fa-facebook"></i>
                        </div>
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                            <i className="text-black fa-brands fa-twitter"></i>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;