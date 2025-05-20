import React from "react";
import Navbar from './navbar';

// Import Swiper styles
import { Swiper,SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';

import { Autoplay } from "swiper/modules";

const Home = () => {
    const swiperOptionOne ={
        breakpoints:{
            0:{
                slidesPerView:1,

            },
            1024:{
                slidesPerView:3,
            }
        },
        loop:true,
    };
    return (
        <div className="home-container">
           <Navbar />
           <section className="home" id="home">
            <div className="row">
                <div className="content">
                    <p> jkfajkjfkljaflkjakjfklajfklajfkjasfkljklsfjlksjflnsvlknsdljfndkljfnkldsnflndfklnfdlsnlfdn</p>
                    <a href="\#" className="btn">Shop Now</a>
                </div>
                <div className="swiper">
                     <Swiper
                        watchSlidesProgress={true}
                        slidesPerView={3}
                        autoplay={{
                            delay:9500,
                            disableOnInteraction:false,
                        }}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Autoplay]}
                        className="book-list"
                        { ...swiperOptionOne}
                    >
                        <a href="\#" className="swiper-slide">
                        <SwiperSlide><img src="image\book1.jpg" alt=""/></SwiperSlide> </a>
                        <a href="\#" className="swiper-slide">
                        <SwiperSlide><img src="image\book2.jpg" alt=""/></SwiperSlide> </a>
                        <a href="\#" className="swiper-slide">
                        <SwiperSlide><img src="image/book3.jpg" alt=""/></SwiperSlide> </a>
                        <a href="\#" className="swiper-slide">
                        <SwiperSlide><img src="image/book4.jpg" alt=""/></SwiperSlide> </a>
                        <a href="\#" className="swiper-slide">
                        <SwiperSlide><img src="image/book5.jpg" alt=""/></SwiperSlide> </a>
                        
                    </Swiper>
              </div>
            </div>
           </section>
         </div>
    )
}
export default Home;