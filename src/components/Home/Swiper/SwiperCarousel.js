// SwiperCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// 导入 Swiper 样式
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import classes from './SwiperCarousel.module.css'

// 导入 Swiper 模块（按需引入功能模块）
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function SwiperCarousel() {
  return (
    <div 
      className={classes.SwiperContainer}
      >

      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // 启用导航、分页、自动播放模块
        spaceBetween={30}
        slidesPerView={1} // 默认显示1个，可在响应式中调整
        navigation // 显示前进/后退按钮
        pagination={{ clickable: true }} // 显示分页圆点，且可点击
        autoplay={{
          delay: 3000, // 每3秒切换一次
          disableOnInteraction: false, // 用户操作后仍继续自动播放
        }}
        loop={true} // 循环播放
        breakpoints={{
          // 响应式断点：不同屏幕宽度下显示不同数量的slides
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
            <img
              src="/imgs/1.jpg"
              alt="Slide 1"

              className={classes.Img}
            />
        </SwiperSlide>
        <SwiperSlide>
              <img
              src="/imgs/2.jpg"
              alt="Slide 2"

              className={classes.Img}
            />
        </SwiperSlide>


      </Swiper>
    </div>
  );
}