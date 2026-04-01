import React, { useState } from "react";


const Card = ({ tool, carts, setCarts }) => {

const [isBuyNow, setIsBuyNow] = useState(false);

const handleBuyNowBtn = () => {
    setIsBuyNow(true)
    setCarts( [...carts, tool])
}


  return (
    <div className="border-2 border-[#F2F2F2]  rounded-2xl p-6">
      

        <div className="flex justify-between">
          <span>{tool.icon}</span>
          <span
            className={`flex justify-center  w-[40%] px-3 py-1 rounded-full text-sm font-medium ${
              tool.tag === "New"
                ? "bg-green-200 text-green-600"
                : tool.tag === "Best seller"
                  ? "bg-yellow-100 text-yellow-600"
                  : tool.tag === "Popular"
                    ? "bg-purple-100 text-purple-600"
                    : "bg-red-100 text-red-600"
            }`}
          >
            {tool.tag}
          </span>
        </div>

        <h2 className="text-2xl font-bold text-[#101727] my-4">{tool.name}</h2>
        <p className="text-[#627382] mb-4">{tool.description}</p>
        <h4 className="text-[#101727] font-bold text-2xl mb-4">${tool.price}<span className="text-[#627382]">/Mo</span></h4>
        <div className="mb-4">
            {
                tool.features.map(feature => <h3> <span className="text-green-500"><i class="fa-solid fa-check"></i></span> {feature}</h3>)
            }

        </div>

        <button onClick={handleBuyNowBtn} className="btn w-full px-6 py-2 rounded-full text-white font-medium bg-linear-to-r from-[#4F39F6] to-[#9514FA]">{isBuyNow ? "Added to Cart" : "Buy Now"}</button>


    </div>
  );
};

export default Card;
