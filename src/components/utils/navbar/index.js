import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Navbar = ({ handlePrev, handleNext, slideIndex = 0, slides }) => {
  return (
    <footer className="sticky top-[100%] w-full bg-gray-50 p-10 justify-center ">
      <div className="flex justify-center space-x-4 max-w-[40rem] mx-auto">
        {/* {slideIndex != 0 && (
          <button className="bg-gray-300 text-black py-[1rem] lg:py-[1.5rem] px-[1rem] lg:px-[2rem] rounded flex items-center" onClick={handlePrev}>
            <FaArrowLeft className="mr-1" /> Back
          </button>
        )} */}

        {
          <button className="bg-blue-600 text-white py-[1rem] lg:py-[1.5rem] px-4 rounded-[2rem] w-[100%] flex items-center justify-center" onClick={handleNext}>
            <span className="mr-1" >{slideIndex !== slides?.length - 1 ? "Continue" : "Submit"}</span> <FaArrowRight />
          </button>
        }
      </div>
    </footer>
  );
};

export default Navbar;
