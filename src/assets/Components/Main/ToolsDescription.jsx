import React from "react";

const ToolsDescription = () => {
  return (
    <div className="w-[80%] mx-auto mb-10">
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box items-center justify-center gap-4">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-4 py-2 rounded-full"
          aria-label="Products"
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-4 py-2 rounded-full"
          aria-label="Cart"
          
        />

      </div>
    </div>
  );
};

export default ToolsDescription;
