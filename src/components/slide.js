import React from 'react'
import Navbar from '@/components/utils/navbar'
import Header from '@/components/utils/header'
import SubHeader from '@/components/utils/subtitle'
import ProgressBar from '@/components/utils/progress-bar'
import Navigation from '@/components/utils/upperNavbar'
import Input from "@/components/input/index"
import Display from "@/components/display/index"

<<<<<<< HEAD
const slide = ({ template, handlePrev, handleNext, slideIndex, slides, slide, slide2, slide3 }) => {
=======
const slide = ({ template, handlePrev, handleNext, slideIndex, slides, slide,  }) => {
>>>>>>> f24c10a8d23b976b75d6a90af05f1db397cbab0f
    // console.log(slideIndex);
    return (
        <div className='flex  flex-col h-fillAvailable md:h-screen  items-center  bg-white '>
            {/* <ProgressBar currentSlide={slideIndex} slides={slides} /> */}
            <Navigation handlePrev={handlePrev} handleNext={handleNext} slideIndex={slideIndex} slides={slides} />
            <Header heading={template?.heading} />
            <SubHeader subtitle={template?.subtitle} subtitle2={template.subtitle2} />
            {/* <SubHeader subtitle2={template?.subtitle2} /> */}
            {
                slide?.content?.map(element => {
                    if (element?.category === "display") {
                       return <Display element={element} />
                    } else if (element?.category === "input") {
                       return <Input element={element} />
                    } else {
                        console.log("not found");
                    }
                })
            }
            {
                slide2?.content?.map(element => {
                    if (element?.category === "display") {
                       return <Display element={element} />
                    } else if (element?.category === "input") {
                       return <Input element={element} />
                    } else {
                        console.log("not found");
                    }
                })
            }
            {
                slide3?.content?.map(element => {
                    if (element?.category === "display") {
                       return <Display element={element} />
                    } else if (element?.category === "input") {
                       return <Input element={element} />
                    } else {
                        console.log("not found");
                    }
                })
            }


            <Navbar handlePrev={handlePrev} handleNext={handleNext} slideIndex={slideIndex} slides={slides} />
        </div>
    )
}

export default slide