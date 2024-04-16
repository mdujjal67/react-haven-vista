// import React, { useRef, useState } from 'react';
// import {Swiper} from React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/bundle'
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const SwipperSlider = () => {
    return (
        <div className='container mx-auto'>
            <Swiper spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper">
                <SwiperSlide className=''>
                    <div>
                        <img className='h-[600px] rounded-2xl w-full' src="/src/assets/banner-1.jpg" alt="" />
                        <div>
                            
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='h-[600px] rounded-2xl w-full' src="/src/assets/banner-2.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='h-[600px] rounded-2xl w-full' src="/src/assets/banner-3.jpg" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwipperSlider;