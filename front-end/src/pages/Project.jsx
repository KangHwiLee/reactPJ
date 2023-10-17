//useState() : react hooks

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css'
const State= () =>{

    return (
        <div className="project">
        <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src="/img/pft/air1.png" style={{width:"400px"}}/><p>test</p></SwiperSlide>
      <SwiperSlide><img src="/img/pft/air1.png" style={{width:"400px"}}/><p>test</p></SwiperSlide>
      <SwiperSlide><img src="/img/pft/air1.png" style={{width:"400px"}}/><p>test</p></SwiperSlide>
      <SwiperSlide><img src="/img/pft/air1.png" style={{width:"400px"}}/><p>test</p></SwiperSlide>
      <br></br>
      ...
    </Swiper>
    </div>
    );
}


export default State;