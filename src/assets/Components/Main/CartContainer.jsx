import React from "react";
import { toast } from "react-toastify";

const CartContainer = ({ carts, setCarts }) => {
 
 const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)

 const handlePayment = () => {
    setCarts([])
 }

 const handleRemove = (cart) => {
    const filteredArray = carts.filter(c => c.id !== cart.id)
    setCarts(filteredArray)
    toast (`${cart.name} is removed from the cart`)
 }
 
    return (
    <div className="mb-20 w-[80%] mx-auto border-2 p-10 border-[#F2F2F2] rounded-2xl">
        <div className="">
            
            <h2 className="text-[#101727] text-2xl font-bold pb-6">Your Cart ({carts.length})</h2>

            {
                carts.length === 0 ? <div className="flex justify-center items-center"><p className="text-5xl font-extrabold">Cart is empty</p></div>  : 
                <>
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
                        <button onClick={() => handleRemove(cart)} className="btn">Remove</button>
                    </div>
                </div>
                )
            }
                </>
            }


            

            <div className="flex justify-between items-center mb-6">
                <h6 className="text-[#627382]">Total</h6>
                <h3 className="text-[#101727] text-2xl font-bold">{totalPrice}</h3>
            </div>
            
            <button onClick={handlePayment} className="btn primary w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl text-white py-4 font-bold">Proceed To Checkout</button>
            
        </div>
    </div>
  );
};

export default CartContainer;
