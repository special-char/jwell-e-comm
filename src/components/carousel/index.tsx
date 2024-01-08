"use client"
import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RiRadioButtonFill } from 'react-icons/ri';

const slides = [
  { url: "https://template.hasthemes.com/hiraola/hiraola/assets/images/slider/6.jpg" },
  { url: "https://template.hasthemes.com/hiraola/hiraola/assets/images/slider/7.jpg" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); // Change the interval time (in milliseconds) here for autoplay

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className='w-full h-screen py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-100'
      ></div>

      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] transform -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] transform -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      {/* Slide Dots */}
      <div className='flex top-4 justify-center py-2'>
        {slides.map((_slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              slideIndex === currentIndex ? 'text-blue-500' : 'text-gray-500'
            }`}
          >
            <RiRadioButtonFill />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
