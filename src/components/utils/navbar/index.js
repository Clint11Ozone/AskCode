import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Navbar = ({ handlePrev, handleNext, slideIndex = 0, slides }) => {
  return (
    <footer className="absolute bottom-0 w-full bg-gray-50 p-10 justify-center ">
      <div className="flex justify-center space-x-4 max-w-[40rem] mx-auto">
      

        {
          <button className="bg-[#5253F1] text-white py-[1rem] lg:py-[1.5rem] px-4 rounded-full h-[60px] w-[340px] flex items-center justify-center" onClick={handleNext}>
            <span className="mr-1 " >{slideIndex !== slides?.length - 1 ? "Continue" : "Submit"}</span> <FaArrowRight size={15} />
          </button>
        }
      </div>
    </footer>
  );
};

export default Navbar;
