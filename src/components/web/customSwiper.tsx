"use client";
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";


import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay  } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import CustomIcons from "./icons";

type Props = {
  slide: React.ReactNode[];
  perViewMobile?: number;
  perViewTablet?: number;
  perViewDesktop?: number;
  navigationEnabled?: boolean;
  spaceBetween?:number
};

const CustomSwiper = ({
  slide,
  perViewMobile,
  perViewTablet,
  perViewDesktop,
  navigationEnabled,
}: Props) => {
  const swiperRef = useRef<SwiperClass | null>(null);
 
   const handlePrev = () => {
    swiperRef?.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef?.current?.slideNext();
  };
  return (
    <Swiper
      className=""
      modules={[Navigation,Autoplay ]}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      
      breakpoints={{
        320: {
          slidesPerView: perViewMobile || 1,
        },
        768: {
          slidesPerView: perViewTablet || 2,
        },
        1200: {
          slidesPerView: perViewDesktop || 1,
        },
      }}
    >
      {slide.map((item, index) => (
        <SwiperSlide key={index}>{item}</SwiperSlide>
      ))}

      <div className={ `${navigationEnabled ? 'visible' : 'invisible'}  w-full     flex justify-center gap-5 text-2xl`}>
        <span className="z-20 cursor-pointer active:scale-95 transition-all duration-100" onClick={handlePrev}>
          <CustomIcons IconName={HiArrowLongLeft} />
        </span>
        <h3 className="z-20 cursor-pointer active:scale-95 transition-all duration-100" onClick={handleNext}>
          <CustomIcons IconName={HiArrowLongRight} />
        </h3>
      </div>
    </Swiper>
  );
};

export default CustomSwiper;
