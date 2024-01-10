
"use client"
import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const slides = [
  { url: 'https://template.hasthemes.com/hiraola/hiraola/assets/images/slider/6.jpg' },
  { url: 'https://template.hasthemes.com/hiraola/hiraola/assets/images/slider/7.jpg' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    // Auto-slide every 3 seconds (adjust the interval as needed)
    const autoSlideInterval = setInterval(() => {
      nextSlide();
    }, 3000);

    // Clear the interval when the component is unmounted
    return () => {
      clearInterval(autoSlideInterval);
    };
  }, [currentIndex]); // Only re-run the effect if currentIndex changes

  return (
    <div className="w-full h-screen relative group m-auto">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover"
      ></div>

      {/* Left Arrow */}
      <div
        className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={prevSlide}
      >
        <BsChevronCompactLeft size={30} />
      </div>
      {/* Right Arrow */}
      <div
        className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={nextSlide}
      >
        <BsChevronCompactRight size={30} />
      </div>
      {/* Navigation Dots */}
      <div className="flex top-4 justify-center py-2">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer relative ${
              currentIndex === slideIndex ? 'text-rose-900' : 'text-gray-500'
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
