import React from "react";

const CartContainer = ({ carts }) => {
  return (
    <div className="mb-20 w-[80%] mx-auto border-2 p-10">
        <div className="">
            
            <h2 className="text-[#101727] text-2xl font-bold pb-6">Your Cart</h2>


            {
                carts.map(cart => 
                <div className="flex justify-between items-center mb-4 bg-[#F9FAFC] rounded-2xl">
                    <div className="flex gap-4">
                        <div>{cart.icon}</div>
                        <div>
                            <h2 className="text-[#101727] text-xl font-semibold">
                            {cart.name}
                            </h2>
                            <p className="text-[#627382] ">${cart.price}</p>
                        </div>
                    </div>

                    <div>
                        <button className="btn">Remove</button>
                    </div>
                </div>
                )
            }

            

            
        </div>
    </div>
  );
};

export default CartContainer;
