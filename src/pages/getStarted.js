import React, { useState, useRef, useCallback, useEffect } from 'react';
import Slide from '@/components/slide';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectCube } from 'swiper/modules';
import template from '@/../../template/getStarted';

export default function Form() {
    const [selectedOption, setSelectedOption] = useState(template.form.initialSlide); // Store the selected option
    const [activeSlide, setActiveSlide] = useState(0);
    const [slides, setSlides] = useState(template.form.initialSlide); // Initialize with default slides
    const [isContinueClicked, setIsContinueClicked] = useState(false); // New state to track if continue has been clicked

    const sliderRef = useRef(null);

    // Reset the swiper when slides change
    useEffect(() => {
        if (sliderRef.current) {
            // sliderRef.current.swiper.slideTo(0, 0);
        }
        setActiveSlide(0);
    }, [slides]);

    const handleRadioChange = useCallback((event) => {
        setSelectedOption(event.target.value);
    }, []);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        let newSlides;
        switch (selectedOption) {
            case '1':
                newSlides = template.form.simSlides;
                break;
            case '2':
                newSlides = template.form.phoneSlides;
                break;
            case '3':
                newSlides = template.form.internetSlides;
                break;
            default:
                newSlides = template.form.initialSlide; // Default case
        }
        
        setSlides(newSlides); // Update the slides state
        setIsContinueClicked(true); // Set isContinueClicked to true
        // Optionally, move to the next slide
        sliderRef.current.swiper.slideNext();

    }, [selectedOption]);

    return (
        <div className="relative flex justify-center items-center min-h-screen">
            {!isContinueClicked && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                    <label className="block mb-2">
                        <input
                            type="radio"
                            value="1"
                            checked={selectedOption === '1'}
                            onChange={handleRadioChange}
                        />
                        Option 1
                    </label>
                    <label className="block mb-2">
                        <input
                            type="radio"
                            value="2"
                            checked={selectedOption === '2'}
                            onChange={handleRadioChange}
                        />
                        Option 2
                    </label>
                    <label className="block mb-2">
                        <input
                            type="radio"
                            value="3"
                            checked={selectedOption === '3'}
                            onChange={handleRadioChange}
                        />
                        Option 3
                    </label>
                </div>
            )}

            <Swiper
                key={slides.length} // Remount Swiper when slides change
                ref={sliderRef}
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectCube]}
                spaceBetween={50}
                allowTouchMove={false}
                effect={'fade'}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
            >
                {slides.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Slide 
                            template={item} 
                            handlePrev={handlePrev} 
                            handleNext={handleNext} 
                            slideIndex={activeSlide} 
                            slides={slides} 
                            slide={slides[activeSlide]} 
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
