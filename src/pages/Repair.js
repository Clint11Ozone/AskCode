import Image from 'next/image'
import { useRouter } from 'next/router'
import template from "#/template/Repair"

import Slide from '@/components/slide'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Keyboard, Mousewheel, Navigation, A11y, Pagination, Scrollbar, Parallax, FreeMode, Grid, Manipulation, Zoom, Controller, History, HashNavigation, Autoplay, EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCards, EffectCreative, Thumbs } from 'swiper/modules';
import { useState, useRef, useCallback } from 'react'


export default function form() {
    const router = useRouter()

    // console.log(template);
    // console.log("router.query: ", router.query.form);

    const slides = template?.form?.slide;


    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    const [activeSlide, setActiveSlide] = useState(0)


    return (
        <div>

            <Swiper
                ref={sliderRef}
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectCube]}
                spaceBetween={50}
                // slidesPerView={1}
                allowTouchMove={false}
                effect={'fade'}
                // navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={(e) => setActiveSlide(e.activeIndex)}
            >
                {slides.map((item, index) => {
                    return <SwiperSlide key={index}><Slide template={item} handlePrev={handlePrev} handleNext={handleNext} slideIndex={activeSlide} slides={slides} slide={slides[activeSlide]} /></SwiperSlide>
                })}
            </Swiper>
        </div>
    )
}
