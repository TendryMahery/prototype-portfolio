import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slide = () => {
    return(
        <div>
            <div className="pt-20 px-40">
            <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src="../assets/sary/back5.jpg" alt=""/></SwiperSlide>
      <SwiperSlide><img src="../assets/sary/back4.jpg" alt=""/></SwiperSlide>
      <SwiperSlide><img src="../assets/sary/back9.jpg" alt=""/></SwiperSlide>
      <SwiperSlide><img src="../assets/sary/back11.jpg" alt=""/></SwiperSlide>
      ...
    </Swiper>
            </div>
        </div>
    )
}

export default Slide;