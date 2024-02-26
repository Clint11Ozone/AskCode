import { useState, useCallback, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import template from '@/../../template/getStarted';

import Slide from '@/components/slide';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Keyboard, Mousewheel, Navigation, A11y, Pagination, Scrollbar, Parallax, FreeMode, Grid, Manipulation, Zoom, Controller, History, HashNavigation, Autoplay, EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCards, EffectCreative, Thumbs } from 'swiper/modules';

export default function Form() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const slides = selectedOption
    ? template.form[`${selectedOption.toLowerCase()}Slides`]
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
      {!selectedOption && (
        <Swiper
          ref={sliderRef}
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectCube]}
          spaceBetween={50}
          allowTouchMove={false}
          effect={'fade'}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={(e) => setActiveSlide(e.activeIndex)}
        >
          {template.form.initialSlide.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Slide
                  template={item}
                  handlePrev={handlePrev}
                  handleNext={handleNext}
                  slideIndex={activeSlide}
                  slides={template.form.initialSlide}
                  slide={template.form.initialSlide[activeSlide]}
                  handleOptionChange={handleOptionChange}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}

      {selectedOption && (
        <Swiper
          ref={sliderRef}
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectCube]}
          spaceBetween={50}
          allowTouchMove={false}
          effect={'fade'}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={(e) => setActiveSlide(e.activeIndex)}
        >
          {slides.map((item, index) => {
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
      )}
    </div>
  );
}