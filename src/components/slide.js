import React from 'react';
import Navbar from '@/components/utils/navbar';
import Header from '@/components/utils/header';
import SubHeader from '@/components/utils/subtitle';
import ProgressBar from '@/components/utils/progress-bar';
import Navigation from '@/components/utils/upperNavbar';
import Input from '@/components/input/index';
import Display from '@/components/display/index';

const Slide = ({
  template,
  handlePrev,
  handleNext,
  slideIndex,
  slides,
  slide,
  slide2,
  slide3,
  handleOptionChange,
}) => {
  const handleOptionSelection = (option) => {
    handleOptionChange(option);
  };

  return (
    <div className="flex flex-col h-fillAvailable md:h-screen items-center bg-white">
      <Navigation handlePrev={handlePrev} handleNext={handleNext} slideIndex={slideIndex} slides={slides} />
      <Header heading={template?.heading} />
      <SubHeader subtitle={template?.subtitle} subtitle2={template.subtitle2} />
      {slide?.content?.map((element) => {
        if (element?.category === 'display') {
          return <Display element={element} />;
        } else if (element?.category === 'input') {
          return <Input element={element} handleOptionSelection={handleOptionSelection} />;
        } else {
          console.log('not found');
        }
      })}
      {slide2?.content?.map((element) => {
        if (element?.category === 'display') {
          return <Display element={element} />;
        } else if (element?.category === 'input') {
          return <Input element={element} />;
        } else {
          console.log('not found');
        }
      })}
      {slide3?.content?.map((element) => {
        if (element?.category === 'display') {
          return <Display element={element} />;
        } else if (element?.category === 'input') {
          return <Input element={element} />;
        } else {
          console.log('not found');
        }
      })}

      <Navbar handlePrev={handlePrev} handleNext={handleNext} slideIndex={slideIndex} slides={slides} />
    </div>
  );
};

export default Slide;