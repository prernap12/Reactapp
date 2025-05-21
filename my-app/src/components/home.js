import React from "react";
import Navbar from './navbar';
import { FaPlane, FaLock, FaSearch,FaHeart,FaEye} from "react-icons/fa";
import {FaHeadset} from "react-icons/fa";
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
            768:{
                slidesPerView:2.
            },
            1024:{
                slidesPerView:3,
            }
        },
        loop:true,
    };
    const swiperOptionTwo = {
          breakpoints:{
            0:{
                slidesPerView:1,
                spaceBetween:10,

            },
            450:{
            slidesPerView:2,
            spaceBetween:10,
            },
            768:{
                slidsPerView:3,
                spaceBetween:10,
            },
            1024:{
                slidesPerView:4,
            },
        },
        loop:true,
        centeredSlides:true,
        spaceBetween:10,
    }
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
                    <img className="stand" src="image/stand.jpg" alt=""/>
              </div>
            </div>
           </section>

         <section className="icons-container">
            <div className="icons">
                <i><FaPlane /></i>
                <div className="content">
                    <h3>over payment</h3>
                    <p>over payment Rs2000</p>
                </div>
            </div>
            
            <div className="icons">
                <i><FaLock/></i>
                <div className="content">
                    <h3>over payment</h3>
                    <p>over payment Rs2000</p>
                </div>
            </div>
            
            <div className="icons">
                <i><FaHeadset /></i>
                <div className="content">
                    <h3>over payment</h3>
                    <p>over payment Rs2000</p>
                </div>
            </div>
           </section> 

           <section className="featured" id="featured">
            <div className="heading"><span>featured books</span></div>
            <div className="swiper">
                        <Swiper
                        watchSlidesProgress={true}
                        autoplay={{
                            delay:3500,
                            disableOnInteraction:false
                        }}
                modules={[Autoplay]}
                className="featured-slider"
                {...swiperOptionTwo}
              >
                    <SwiperSlide>
                        <div className="box">
                            <div className="icons">
                                <a href="\#"><FaSearch/></a>
                                  <a href="\#"><FaHeart/></a>
                                    <a href="\#"><FaEye/></a>
                            </div>
                            <div className= "image">  <img src="image/book21.jpg" alt="" /></div>
                            <div className="content">
                                <h3>featured book</h3>
                                <div className="price">Rs.400 <span>Rs.350</span></div>
                                <a href="\#" className="btn">add to cart</a>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="box">
                            <div className="icons">
                                <a href="\#"><FaSearch/></a>
                                  <a href="\#"><FaHeart/></a>
                                    <a href="\#"><FaEye/></a>
                            </div>
                            <div className= "image">  <img src="image/book22.jpg" alt="" /></div>
                            <div className="content">
                                <h3>featured book</h3>
                                <div className="price">Rs.400 <span>Rs.350</span></div>
                                <a href="\#" className="btn">add to cart</a>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="box">
                            <div className="icons">
                                <a href="\#"><FaSearch/></a>
                                  <a href="\#"><FaHeart/></a>
                                    <a href="\#"><FaEye/></a>
                            </div>
                            <div className= "image">  <img src="image/book23.jpg" alt="" /></div>
                            <div className="content">
                                <h3>featured book</h3>
                                <div className="price">Rs.400 <span>Rs.350</span></div>
                                <a href="\#" className="btn">add to cart</a>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="box">
                            <div className="icons">
                                <a href="\#"><FaSearch/></a>
                                  <a href="\#"><FaHeart/></a>
                                    <a href="\#"><FaEye/></a>
                            </div>
                            <div className= "image">  <img src="image/book20.jpg" alt="" /></div>
                            <div className="content">
                                <h3>featured book</h3>
                                <div className="price">Rs.400 <span>Rs.350</span></div>
                                <a href="\#" className="btn">add to cart</a>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="box">
                            <div className="icons">
                                <a href="\#"><FaSearch/></a>
                                  <a href="\#"><FaHeart/></a>
                                    <a href="\#"><FaEye/></a>
                            </div>
                            <div className= "image">  <img src="image/book19.jpg" alt="" /></div>
                            <div className="content">
                                <h3>featured book</h3>
                                <div className="price">Rs.400 <span>Rs.350</span></div>
                                <a href="\#" className="btn">add to cart</a>
                            </div>
                        </div>
                    </SwiperSlide>
                 
                </Swiper>
            </div>
           </section>
         </div>
    )
}
export default Home