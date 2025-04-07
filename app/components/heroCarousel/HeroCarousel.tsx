"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { heroCarouselData } from "./HeroCarousel-helper";

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = heroCarouselData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  return (
    <div className="relative h-[60vh] md:h-[800px]">
      {heroCarouselData.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={slide.backgroundImage} alt={slide.title} fill={true} />
        </div>
      ))}
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-[40vh] md:h-[450px] bg-[#D9D9D9] bg-opacity-10 backdrop-blur-[10px] flex items-center justify-center">
        <div className="space-y-4 md:space-y-10 w-[90%] md:w-[863px]">
          <h1
            className={`text-white ${
              heroCarouselData[currentIndex].id === 1
                ? "text-3xl md:text-5xl"
                : "text-2xl md:text-4xl"
            } font-bold`}
          >
            {heroCarouselData[currentIndex].title}
          </h1>
          {heroCarouselData[currentIndex].bulletPoints ? (
            <ul className="list-disc pl-4 md:pl-8">
              {heroCarouselData[currentIndex].bulletPoints?.map((point, i) => (
                <li
                  key={i}
                  className="text-white text-lg md:text-xl font-semibold"
                >
                  {point}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-white text-xl md:text-2xl">
              {heroCarouselData[currentIndex].subtitle}
            </p>
          )}
          {heroCarouselData[currentIndex].id !== 1 && (
            <Link
              href={heroCarouselData[currentIndex].href || "/"}
              className="bg-[#007BB4] text-white text-md md:text-xl font-bold px-6 md:px-10 py-2 rounded-xl hover:bg-white hover:text-[#007BB4] border border-[#007BB4] mt-4 md:mt-6 inline-block"
            >
              Contactez-nous
            </Link>
          )}
        </div>
      </div>
      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2"
      >
        <Image
          src="/assets/global/arrow-carousel/arrow-carousel-left.png"
          alt="Previous"
          width={50}
          height={60}
        />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2"
      >
        <Image
          src="/assets/global/arrow-carousel/arrow-carousel-right.png"
          alt="Next"
          width={50}
          height={60}
        />
      </button>
    </div>
  );
};

export default HeroCarousel;
