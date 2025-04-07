"use client";

import React, { useState, useEffect } from "react";
import { partnersCarouselAssets } from "./PartnersCarousel-helper";
import Image from "next/image";

const PartnersCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        if (carouselRef.current) {
          const scrollAmount =
            carouselRef.current.clientWidth > 768 ? 1200 : 300;
          carouselRef.current.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
          if (
            carouselRef.current.scrollLeft + carouselRef.current.clientWidth >=
            carouselRef.current.scrollWidth
          ) {
            carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
          }
        }
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const handlePause = () => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 6000);
  };

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
    handlePause();
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
    handlePause();
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#F1F1F1] py-10 md:py-20 px-4 md:px-8">
      <h2 className="text-3xl md:text-5xl text-black text-center md:text-left font-bold mb-8 md:mb-12">
        Ils nous font <span className="text-[#FF6633]">confiance</span>
      </h2>
      <div className="relative flex items-center justify-center w-full max-w-screen-2xl mx-auto">
        <div
          ref={carouselRef}
          className="flex overflow-x-auto space-x-4 md:space-x-8 scrollbar-hide w-full"
        >
          {partnersCarouselAssets.map((partner, index) => (
            <div
              key={partner.id}
              className={`flex-shrink-0 ${index === 0 ? "pl-8 md:pl-20" : ""} ${
                index === partnersCarouselAssets.length - 1
                  ? "pr-8 md:pr-20"
                  : ""
              }`}
            >
              <Image
                src={partner.image}
                alt="Partner Logo"
                width={288.72}
                height={156.91}
                className="w-[200px] md:w-[288.72px] h-auto"
              />
            </div>
          ))}
        </div>
        <button
          onClick={handlePrevClick}
          className="absolute left-0 md:left-1 top-1/2 transform -translate-y-1/2 z-10"
        >
          <Image
            src="/assets/home/before-after-carousel/left-arrow.png"
            alt="Précédent"
            width={58}
            height={58}
            className="w-8 h-8 md:w-14 md:h-14"
          />
        </button>
        <button
          onClick={handleNextClick}
          className="absolute right-0 md:right-1 top-1/2 transform -translate-y-1/2 z-10"
        >
          <Image
            src="/assets/home/before-after-carousel/right-arrow.png"
            alt="Suivant"
            width={58}
            height={58}
            className="w-8 h-8 md:w-14 md:h-14"
          />
        </button>
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </div>
  );
};

export default PartnersCarousel;
