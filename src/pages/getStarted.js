import Image from 'next/image';
import { useState, useRef, useCallback } from 'react';
import Slide from '@/components/slide';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectCube } from 'swiper/modules';
import template from '@/../../template/getStarted';

export default function Form() {
    const initialSlide = template.form.initialSlide;
    const simSlides = template.form.simSlides;
    const phoneSlides = template.form.phoneSlides;
    const internetSlides = template.form.internetSlides;

    const [selectedOption, setSelectedOption] = useState(initialSlide);

    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };

    // Determine the correct set of slides based on the selected option
    const slides = selectedOption && template.form[selectedOption]
        ? template.form[selectedOption]
        : template.form.initialSlide;

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
