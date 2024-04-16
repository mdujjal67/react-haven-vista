// import React, { useRef, useState } from 'react';
// import {Swiper} from React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/bundle'
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import BannerContent from './BannerContent';

const SwipperSlider = () => {
    return (
        <div className='container mx-auto'>
            <Swiper spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper">
                <SwiperSlide className=''>
                    <div className=''>
                        <img className='h-[500px] relative rounded-2xl w-full' src="/src/assets/banner-1.jpg" alt="property-image" />
                        <div className='absolute top-[30%]'>
                            <BannerContent></BannerContent>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='h-[500px] rounded-2xl w-full' src="/src/assets/banner-2.1.jpg" alt="property-image" />
                        <div className='absolute top-[30%]'>
                            <BannerContent></BannerContent>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='h-[500px] rounded-2xl w-full' src="/src/assets/banner-3.jpg" alt="property-image" />
                        <div className='absolute top-[30%]'>
                            <BannerContent></BannerContent>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='h-[500px] bg-blend-overlay rounded-2xl w-full' src="/src/assets/banner-5.jpg" alt="property-image" />
                        <div className='absolute top-[30%]'>
                            <BannerContent></BannerContent>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwipperSlider;