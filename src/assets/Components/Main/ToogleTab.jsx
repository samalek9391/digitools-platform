import React from "react";

const ToogleTab = ({activeTab, setActiveTab}) => {
  return (
    <div className="w-[80%] mx-auto mb-10">
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box items-center justify-center gap-4 bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab px-4 py-2 w-40 rounded-full"
          aria-label="Products"
          onClick={() => setActiveTab("Product")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab px-4 py-2 w-40 rounded-full"
          aria-label="Cart"
          onClick={()=> setActiveTab("Cart")}
          
        />

      </div>
    </div>
  );
};

export default ToogleTab;
