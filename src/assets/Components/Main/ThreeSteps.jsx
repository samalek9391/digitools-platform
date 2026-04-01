import React from 'react';

const ThreeSteps = () => {
    return (
        <div className='w-[80%] mx-auto mb-10'>
            <h2 className='text-[#101727] text-5xl font-extrabold text-center mb-4'>Get Started in 3 Steps</h2>
            <p className='text-[#627382] text-center mb-10'>Start using premium digital tools in minutes, not hours.</p>


            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='bg-[#F9FAFC] border-[#F2F2F2] shadow p-6 rounded-2xl'>
                    <h4 className='mb-2 text-[#101727] font-bold text-2xl'>Starter</h4>
                    <p className='text-[#627382] mb-6'>Perfect for getting started</p>
                    <h3 className='text-[#101727] text-[40px] font-bold' mb-6>$0 <span className='text-[#627382] text-[20px]'>/month</span> </h3>
                    <ul className='mb-6'>
                        <li> <span className='text-green-500'><i class="fa-solid fa-check"></i></span> Access to 10 free tools</li>
                        <li> <span className='text-green-500'><i class="fa-solid fa-check"></i></span> Access to 10 free tools</li>
                        <li> <span className='text-green-500'><i class="fa-solid fa-check"></i></span> Access to 10 free tools</li>
                        <li> <span className='text-green-500'><i class="fa-solid fa-check"></i></span> Access to 10 free tools</li>
                        <br />
                        <br />
                        
                    </ul>
                    <button className='btn rounded-2xl w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>Get Started Free</button>
                </div>


                <div className='bg-[#F9FAFC] border-[#F2F2F2] shadow p-6 rounded-2xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>
                    <h4 className='mb-2 text-white font-bold text-2xl'>Pro</h4>
                    <p className='text-white mb-6'>Best for professionals</p>
                    <h3 className='text-white text-[40px] font-bold' mb-6>$29 <span className='text-white text-[20px]'>/month</span> </h3>
                    <ul className='mb-6'>
                        <li> <span className='text-green-500'><i class="fa-solid fa-check"></i></span> Access to all premium tools</li>
                        <li> <span className='text-green-500'><i class="fa-solid fa-check"></i></span> Unlimited templates</li>
                        <li> <span className='text-green-500'><i class="fa-solid fa-check"></i></span> Priority support</li>
                        <li> <span className='text-green-500'><i class="fa-solid fa-check"></i></span> Unlimited projects</li>
                        <li> <span className='text-green-500'><i class="fa-solid fa-check"></i></span> Cloud sync</li>
                        <li> <span className='text-green-500'><i class="fa-solid fa-check"></i></span> Advanced analytics</li>
                        
                        
                    </ul>
                    <button className='btn rounded-2xl w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>Start Pro Trial</button>
                </div>



                <div className='bg-[#F9FAFC] border-[#F2F2F2] shadow p-6 rounded-2xl'>
                    <h4 className='mb-2 text-[#101727] font-bold text-2xl'>Enterprise</h4>
                    <p className='text-[#627382] mb-6'>For teams and businesses</p>
                    <h3 className='text-[#101727] text-[40px] font-bold' mb-6>$99 <span className='text-[#627382] text-[20px]'>/month</span> </h3>
                    <ul className='mb-6'>
                        <li> <span className='text-green-500'><i class="fa-solid fa-check"></i></span> Everything in Pro</li>
                        <li> <span className='text-green-500'><i class="fa-solid fa-check"></i></span> Team collaboration</li>
                        <li> <span className='text-green-500'><i class="fa-solid fa-check"></i></span> Custom integrations</li>
                        <li> <span className='text-green-500'><i class="fa-solid fa-check"></i></span> Dedicated support</li>
                        <li> <span className='text-green-500'><i class="fa-solid fa-check"></i></span> SLA guarantee</li>
                        <li> <span className='text-green-500'><i class="fa-solid fa-check"></i></span> Custom branding</li>
                        
                    </ul>
                    <button className='btn rounded-2xl w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>Contact Sales</button>
                </div>
            </div>


            

        </div>
    );
};

export default ThreeSteps;