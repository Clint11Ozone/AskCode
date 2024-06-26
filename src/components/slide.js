import React from "react";
import Navbar from "@/components/utils/navbar";
import Header from "@/components/utils/header";
import SubHeader from "@/components/utils/subtitle";
import ProgressBar from "@/components/utils/progress-bar";
import Navigation from "@/components/utils/upperNavbar";
import Input from "@/components/input/index";
import Display from "@/components/display/index";

const slide = ({
  template,
  handlePrev,
  handleNext,
  selectedOption,
  slideIndex,
  slides,
  slide,
  goToSlide
}) => {
  // console.log(slideIndex);
  return (
    <div className="flex  flex-col relative h-fillAvailable   items-center  bg-white ">
      {/* <ProgressBar currentSlide={slideIndex} slides={slides} /> */}
      <Navigation
        handlePrev={handlePrev}
        handleNext={handleNext}
        slideIndex={slideIndex}
        slides={slides}
      />
      <Header heading={template?.heading} />
      <SubHeader subtitle={template?.subtitle} subtitle2={template.subtitle2} />
      {/* <SubHeader subtitle2={template?.subtitle2} /> */}
      {slide?.content?.map((element) => {
        if (element?.category === "display") {
          return <Display element={element} />;
        } else if (element?.category === "input") {
          return <Input element={element} goToSlide={goToSlide} />;
        } else {
          console.log("not found");
        }
      })}


      <Navbar
        handlePrev={handlePrev}
        handleNext={handleNext}
        slideIndex={slideIndex}
        slides={slides}
        selectedOption={selectedOption} // Pass the selectedOption value as a prop
        navigateToAnotherPage={() => navigateToAnotherPage(selectedOption)} // Pass the selectedOption as a parameter
      />
    </div>
  );
};

export default slide;
