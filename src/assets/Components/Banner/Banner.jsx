import React from "react";
import bannerImg from "../../../assets/banner.png"

const Banner = () => {
  return (
    <div className="flex justify-between items-center w-[80%] mx-auto space-x-4">
      {/* Content */}
      <div className="my-auto">
        {/* Sub Heading Above */}
        <div className="flex gap-1 items-center bg-[#E1E7FF] px-4 py-2 rounded-3xl mb-4">
          <span className="inline-block w-2 h-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full"></span>
          <h3 className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            New: AI-Powered Tools Available
          </h3>
        </div>

        {/* Heading */}
        <h2 className="text-[#101727] text-7xl font-extrabold leading-tight mb-2">
          Supercharge Your <br />
          Digital Workflow
        </h2>

        {/* Paragraph */}
        <p className="text-[#627382] text-lg mb-8">
          Access premium AI tools, design assets, templates, and productivity{" "}
          <br />
          software—all in one place. Start creating faster today. <br /> Explore
          Products
        </p>

        {/* buttons */}
        <div className="flex gap-4">
          {/* Explore Products Button */}
          <button className="px-6 py-2 rounded-full text-white font-medium bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
            Explore Products
          </button>

          {/* Watch Demo Button */}
          <div className="p-[2px] rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
            <button className="px-6 py-2 rounded-full bg-white text-[#4F39F6] font-medium flex items-center gap-2">
              {/* Play Icon */}
              <span>▶</span>
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Image */}
      <div>
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
