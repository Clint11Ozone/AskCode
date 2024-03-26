import Image from 'next/image'
import { useRouter } from 'next/router'
import template from "#/template/getStarted2"

import Slide from '@/components/slide'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Keyboard, Mousewheel, Navigation, A11y, Pagination, Scrollbar, Parallax, FreeMode, Grid, Manipulation, Zoom, Controller, History, HashNavigation, Autoplay, EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCards, EffectCreative, Thumbs } from 'swiper/modules';
import { useState, useRef, useCallback } from 'react'


export default function form() {
  const router = useRouter();
  const slides = template?.form?.Slide;
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

  // Get the value from localStorage (if available)
  const localStorageValue = typeof window !== 'undefined' ? window.localStorage.getItem("undefined") : null;

  // Determine the start and end indices for the slides to render
  let startIndex, endIndex;
  if (localStorageValue === "1") {
    startIndex = 0;
    endIndex = 3;
  } else if (localStorageValue === "2") {
    startIndex = 4;
    endIndex = 8;
  } else if (localStorageValue === "3") {
    startIndex = 9;
    endIndex = 13;
  } else {
    // Default to rendering all slides
    startIndex = 0;
    endIndex = slides.length - 1;
  }

  return (
    <div>
      <Swiper
        ref={sliderRef}
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectCube]}
        spaceBetween={50}
        allowTouchMove={false}
        effect={'fade'}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(e) => setActiveSlide(e.activeIndex)}
      >
        {slides.slice(startIndex, endIndex + 1).map((item, index) => {
          return (
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
          );
        })}
      </Swiper>
    </div>
  );
}
