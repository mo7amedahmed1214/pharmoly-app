'use client';
import React from "react";
import Slider from "react-slick";

function NavSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <div className={`bg-inherit w-2/3 md:w-1/2 lg:w-1/3 h-full flex items-center justify-center bg-blue-400`}>
            <Slider {...settings} className="w-full text-center">
                <div>
                    <h3 className="text-white text-sm">Free shipping all orders on over $60.</h3>
                </div>
                <div>
                    <h3 className="text-white text-sm">  shipping all orders on over $20.</h3>
                </div>
            </Slider>
        </div>
    );
}

export default NavSlider;
