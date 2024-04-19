import Image from "next/image";
import { useRouter } from "next/router";
import template from "#/template/Repair";
import { useEffect } from "react";
import Slide from "@/components/slide";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Virtual,
  Keyboard,
  Mousewheel,
  Navigation,
  A11y,
  Pagination,
  Scrollbar,
  Parallax,
  FreeMode,
  Grid,
  Manipulation,
  Zoom,
  Controller,
  History,
  HashNavigation,
  Autoplay,
  EffectFade,
  EffectCube,
  EffectFlip,
  EffectCoverflow,
  EffectCards,
  EffectCreative,
  Thumbs,
} from "swiper/modules";
import { useState, useRef, useCallback } from "react";
import axios from "axios";

export default function form() {
    
  const myBrand = "apple-phones-48";
  const deviceSpec = "apple_iphone_13_pro_max-11089"
  const [device, setDevice] = useState(null)
  const [spec, setSpec] = useState(null)

  async function getDevice(brand) {
    try {
      const response = await axios.get(`http://127.0.0.1:4000/brand/${brand}`);
      const itemsArray = response.data.data;
      console.log(itemsArray)
  
      // Store each item in localStorage with a unique key
      // itemsArray.forEach((item) => {
      //   const key = `device_${item.url}`;
      //   localStorage.setItem(key, JSON.stringify(item));
      //   console.log(item.name);
      // });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  async function getSpec(brand) {
    try {
      // Replace 'http://127.0.0.1:4000/brand/apple-phones-48' with your actual API endpoint
      const response = await axios.get(
        "http://127.0.0.1:4000/brand/apple-phones-48"
      );
      // Assuming 'response.data.data' is the array you want to iterate over
      const itemsArray = response.data.data; // This line stores the array

      // Now you can iterate over 'itemsArray' using forEach
      itemsArray.forEach((item) => {
        console.log(item);
        const key = `${item.name}`;
        localStorage.setItem(key, JSON.stringify(item));
        console.log(item);
      });
    } catch (error) {
      // Handling errors
      console.error("Error fetching data:", error);
    }
  };

  getDevice(myBrand);

  const router = useRouter();

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

  const goToSlide = useCallback((index) => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideTo(index);
  }, []);

  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div>
      <Swiper
        ref={sliderRef}
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectFade,
          EffectCube,
        ]}
        spaceBetween={50}
        // slidesPerView={1}
        allowTouchMove={false}
        effect={"fade"}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
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
                goToSlide={goToSlide}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
