'use client';

import Slider from 'react-slick';

const slides = [
  {
    title: "Magical Moments Awaits You at Every Corner",
    description:
      "We Turn Ordinary Days Into Magical Adventures with Our Exciting Collection of Toys and Stylish Kidswear",
    label: "Exclusive Discounts",
    button: "Shop Now",
    backgroundImage: '/images/BackgroundHeroSection-1.png',
  },
  {
    title: "Unwrap the Joy with Every Toy",
    description:
      "Our curated collection ensures smiles for every age. Let the fun begin!",
    label: "New Arrivals",
    button: "Explore More",
    backgroundImage: '/images/BackgroundHeroSection-2.png',
  },
  {
    title: "Trendy Kidswear Just for Your Little Stars",
    description:
      "Style meets comfort in our latest kidswear range. Dress them to impress!",
    label: "Hot Deals",
    button: "Check Now",
    backgroundImage: '/images/BackgroundHeroSection-3.png',
  },
];

const HeroImageSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

  };

  return (
    <div className="col-span-4 lg:col-span-3">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="h-[450px] relative">
            <div
              className={`w-full h-full grid grid-cols-2 px-8  items-center justify-center `}
              style={{ backgroundImage: `url(${slide.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="lg:col-span-1 col-span-2 py-12">
                <p className="text-xs my-4">{slide.label}</p>
                <h1 className="text-5xl text-[#3B4B33] font-lighter my-4 font-fredoke">
                  {slide.title}
                </h1>
                <p className="my-6 text-xs">{slide.description}</p>
                <button className=" my-2 bg-red-500 hover:bg-red-400 text-white text-xs font-bold py-2 px-4 rounded-3xl">
                  {slide.button}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroImageSection;
