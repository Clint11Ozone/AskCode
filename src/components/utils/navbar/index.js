import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import NameInputComponent from "@/components/input/NameSurname";
import Mail from "@/components/input/email";
import Phone from "@/components/input/form";
import Idkyet from "../../display/encrypt/encrypt"
import { Link } from "react-router-dom";



const Navbar = ({ handlePrev, selectedOption, handleNext, slideIndex = 0, slides }) => {
  // State to manage input values
  const [inputValues, setInputValues] = useState({
    name: "c",
    email: "c",
    number: "c",
  });

  const isButtonDisabled =
    slideIndex === slides?.length - 1 &&
    (!inputValues.name || !inputValues.email || !inputValues.number);

    const navigateToAnotherPage = () => {
      // Use window.location to change the URL
      if(slideIndex !== slides?.length - 1 ){
        handleNext();
      }else{
        window.location.href = "seeDeals";
      }
      
    };
  

  return (
    <footer className=" mb-1  w-full p-10 md:p-9 justify-center">
      <div className="flex justify-center space-x-4 pt-[-40px] max-w-[40rem] mx-auto">
        <button
          className={`bg-[#5253F1] fixed bottom-3 text-white py-[1rem] lg:py-[1.5rem] px-4 rounded-full h-[60px] w-[340px] flex items-center justify-center ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={navigateToAnotherPage}
          disabled={isButtonDisabled}
          style={{ opacity: isButtonDisabled ? 0.7 : 1 }}
        >
          <span className="mr-1">
            {slideIndex !== slides?.length - 1 ? "Continue" : "Submit"}
          </span>{" "}
          <FaArrowRight size={15} />
        </button>
      </div>
    </footer>
  );
};

export default Navbar;
