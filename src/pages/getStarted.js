import Image from 'next/image';
import { useState, useRef, useCallback } from 'react';
import Slide from '@/components/slide';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectCube } from 'swiper/modules';
import template from '@/../../template/getStarted';

export default function Form() {
    // Removed the individual slide constants as they are no longer directly used
    const [selectedOption, setSelectedOption] = useState(template.form.initialSlide); // Initially empty or a default value

    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };

    // Determine the correct set of slides based on the selected option
    let slides;
    switch (selectedOption) {
        case '1':
            slides = template.form.simSlides;
            break;
        case '2':
            slides = template.form.phoneSlides;
            break;
        case '3':
            slides = template.form.internetSlides;
            break;
        default:
            slides = template.form.initialSlide; // Default case
    }

    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <div> 
            <Swiper
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
                            onSelect={handleRadioChange}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
