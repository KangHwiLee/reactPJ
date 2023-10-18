//useState() : react hooks

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Snowmelt from '../project/Snowmelt';
import Cctv from '../project/Cctv';
import Air from '../project/Air';
import Calendar from '../project/Calendar';
import Report from '../project/Report';
import 'swiper/css'

const State= () =>{

  const test4 = ["Snowmelt, Snowmelt"];

  const [message, setMessage] = useState("")
   useEffect(() => {
    
   })
  
const test = (n) => {
  console.log(n);
  setMessage(test2(n))
}

const test2 = (n) => {
  if(n == 1)
  return(<Snowmelt/>);
  if(n == 2)
  return(<Cctv/>);
  if(n == 3)
  return(<Air/>);
  if(n == 4)
  return(<Calendar/>);
  if(n == 5)
  return(<Report/>);
}
    return (
        <div className="project">
          <div className="project-header text-left">
            <h1>Projects</h1>
            <hr/>
                <br/>
          </div>
          <div className="project-container text-left">
            <p>직장에 다니며 해온 프로젝트입니다.</p>
            <p>개발환경은 Spring legacy project, jdk1.8, mysql, jsp, linux입니다.</p>
            <h3></h3>
            <h3></h3>
          </div>
          <div className="swiper-area">
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              >
              <SwiperSlide><img src="/img/pft/air1.png" style={{width:"400px"}} onClick={() => test(1)}/><p>스노우멜트 모니터링</p></SwiperSlide>
              <SwiperSlide><img src="/img/pft/air1.png" style={{width:"400px"}} onClick={() => test(2)}/><p>CCTV 웹 스트리밍</p></SwiperSlide>
              <SwiperSlide><img src="/img/pft/air1.png" style={{width:"400px"}} onClick={() => test(3)}/><p>미세먼지 모니터링</p></SwiperSlide>
              <SwiperSlide><img src="/img/pft/air1.png" style={{width:"400px"}} onClick={() => test(4)}/><p>캘린더</p></SwiperSlide>
              <SwiperSlide><img src="/img/pft/air1.png" style={{width:"400px"}} onClick={() => test(5)}/><p>안전점검일지</p></SwiperSlide>
              <br></br>
            </Swiper>
          </div>
          {message}
        </div>
    );

}


export default State;
