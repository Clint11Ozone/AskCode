import React from 'react'
import Link from "next/link";

const ProgressBar = ({currentSlide = 8 ,  slides = ["a","b",3,4,5,6,7,"saikat","Banerjee"]}) => {

  const activeClass = 'w-[70px] h-[6px] bg-[#5253f1]';
  return (
    <div className='py-2 w-full flex gap-1 justify-center'>
        {
            slides.map((item, index)=>(
                <div key={index} className={` rounded-full transition-all duration-300 h-[9px] ${currentSlide==index ? activeClass : 'w-[30px] bg-[#e6e6e6] cursor-pointer'}`}></div>
            ))
        }
    </div>
  )
}

export default ProgressBar;