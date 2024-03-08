import React, { useState, useRef, useCallback, useEffect } from "react";
import Slide from "@/components/slide";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  EffectCube,
} from "swiper/modules";
import Image from "next/image";
import tp from "@/../../template/getStarted";
import template from "#/template/getStarted";
import Checkbox from "/public/assets/icons/drm2-checkbox.svg";
import sim from "#/public/assets/icons/Sim.svg";
import phone from "#/public/assets/icons/Phone.svg"
import internet from "#/public/assets/icons/Internet.svg"

export default function Form() {
  const [selectedOption, setSelectedOption] = useState(
    template.form.initialSlide
  );
  const [activeSlide, setActiveSlide] = useState(0);
  const [slides, setSlides] = useState(template.form.initialSlide);
  const [isContinueClicked, setIsContinueClicked] = useState(false);
  const [userSelections, setUserSelections] = useState({});

  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      // sliderRef.current.swiper.slideTo(0, 0);
    }
    setActiveSlide(0);
  }, [slides]);

  const handleRadioChange = useCallback((event) => {
    // Save selections
    setUserSelections((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));

    // Existing state update
    setSelectedOption(event.target.value);
    localStorage.setItem("userSelection", event.target.value);
  }, []);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;

    if (sliderRef.current.swiper.activeIndex === 0) {
      if (slides === template.form.initialSlide) {
        // window.location.reload();
      } else {
        setSlides(template.form.initialSlide);
        setIsContinueClicked(false);
      }
    } else {
      sliderRef.current.swiper.slidePrev();
    }
  }, [slides]);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;

    // Ensure that a valid option is selected before proceeding
    if (!selectedOption || !["1", "2", "3"].includes(selectedOption)) {
      console.log("Please select a valid option to continue.");
      return;
    }

    let newSlides;
    switch (selectedOption) {
      case "1":
        newSlides = template.form.simSlides;
        break;
      case "2":
        newSlides = template.form.phoneSlides;
        break;
      case "3":
        newSlides = template.form.internetSlides;
        break;
      default:
        // This default case should ideally never be reached due to the validation above
        console.error("Invalid selection");
        return;
    }

    setSlides(newSlides);
    setIsContinueClicked(true);
    sliderRef.current.swiper.slideNext();
  }, [selectedOption]);

  const selectedClass = selectedOption
    ? "border-[#5253f1] border-[1px]"
    : "border-[#b8b8b8] border-[1px]";
  return (
    <div className="relative flex justify-center items-center md:h-screen h-fillAvailable">
      {!isContinueClicked && (
        <div className="absolute top-1/2 left-1/2 transform md:pb-[100px] -translate-x-1/2 -translate-y-1/2 text-center z-10">
          {/* Label for "Sim" */}
          <label
            className={` flex rounded-xl w-[340px] h-[70px] mb-2 p-1 ${
              selectedOption === "1" ? "border-[#5253f1]" : "border-[#b8b8b8]"
            } border-2 hover:border-[#5253f1]`}
          >
            <div className="relative h-[2rem] w-[2rem] ml-[15px] my-3 ">
              {sim && (
                <Image
                  src={sim}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              )}
            </div>
            <input
              type="radio"
              value="1"
              className="absolute opacity-0 w-0 h-0"
              checked={selectedOption === "1"}
              onChange={handleRadioChange}
            />
            <div className="flex items-center justify-between">
              <div className="text-[1rem] font-bold  ml-[15px]">Sim</div>
            </div>
            {selectedOption === "1" && (
              <div className="w-5 h-5 ml-auto">
                <Image src={Checkbox} alt="Selected checkbox for Sim" />
              </div>
            )}
          </label>

          {/* Label for "Phone" */}
          <label
            className={` flex rounded-xl w-[340px] h-[70px] mb-2 p-1 ${
              selectedOption === "2" ? "border-[#5253f1]" : "border-[#b8b8b8]"
            } border-2 hover:border-[#5253f1]`}
          >
            <div className="relative h-[2rem] w-[2rem] ml-[15px] my-3 ">
              {phone && (
                <Image
                  src={phone}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              )}
            </div>
            <input
              type="radio"
              value="2"
              className="absolute opacity-0 w-0 h-0"
              checked={selectedOption === "2"}
              onChange={handleRadioChange}
            />
            <div className="flex items-center justify-between">
              <div className="text-[1rem] font-bold  ml-[20px]">Phone</div>
            </div>
            {selectedOption === "2" && (
              <div className="w-5 h-5 ml-auto">
                <Image src={Checkbox} alt="Selected checkbox for Sim" />
              </div>
            )}
          </label>

          {/* Label for "Internet" */}
          <label
            className={` flex rounded-xl w-[340px] h-[70px] mb-2 p-1 ${
              selectedOption === "3" ? "border-[#5253f1]" : "border-[#b8b8b8]"
            } border-2 hover:border-[#5253f1]`}
          >
            <div className="relative h-[2rem] w-[2rem] ml-[15px] my-3 ">
              {internet && (
                <Image
                  src={internet}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              )}
            </div>
            <input
              type="radio"
              value="3"
              className="absolute opacity-0 w-0 h-0"
              checked={selectedOption === "3"}
              onChange={handleRadioChange}
            />
            <div className="flex items-center justify-between">
              <div className="text-[1rem] font-bold  ml-[20px]">Internet</div>
            </div>
            {selectedOption === "3" && (
              <div className="w-5 h-5 ml-auto">
                <Image src={Checkbox} alt="Selected checkbox for Sim" />
              </div>
            )}
          </label>
        </div>
      )}

      <Swiper
        key={slides.length}
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
        allowTouchMove={false}
        effect={"fade"}
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
