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
    <div className="relative h-[769px]">
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
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-[414px] bg-[#D9D9D9] bg-opacity-10 backdrop-blur-[10px] flex items-center justify-center">
        <div className="space-y-10 w-[863px]">
          <h1
            className={`text-white ${
              heroCarouselData[currentIndex].id === 1 ? "text-6xl" : "text-5xl"
            } font-bold`}
          >
            {heroCarouselData[currentIndex].title}
          </h1>
          {heroCarouselData[currentIndex].bulletPoints ? (
            <ul className="list-disc pl-8 ">
              {heroCarouselData[currentIndex].bulletPoints?.map((point, i) => (
                <li key={i} className="text-white text-2xl font-semibold">
                  {point}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-white text-3xl">
              {heroCarouselData[currentIndex].subtitle}
            </p>
          )}
          {heroCarouselData[currentIndex].id !== 1 && (
            <Link
              href={heroCarouselData[currentIndex].href || "/"}
              className="bg-[#007BB4] text-white text-2xl font-bold px-10 py-2 rounded-xl hover:bg-white hover:text-[#007BB4] border border-[#007BB4] mt-6 inline-block"
            >
              Contactez-nous
            </Link>
          )}
        </div>
      </div>
      <button
        onClick={goToPrevious}
        className="absolute left-10 top-1/2 transform -translate-y-1/2"
      >
        <Image
          src="/assets/global/arrow-carousel/arrow-carousel-left.png"
          alt="Previous"
          width={66}
          height={75}
        />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-10 top-1/2 transform -translate-y-1/2"
      >
        <Image
          src="/assets/global/arrow-carousel/arrow-carousel-right.png"
          alt="Next"
          width={66}
          height={75}
        />
      </button>
    </div>
  );
};

export default HeroCarousel;
