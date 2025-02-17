"use client";

import React, { useState } from "react";
import { beforeAfterCarouselAssets } from "./BeforeAfterCarousel-helper";
import Image from "next/image";

const BeforeAfterCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? beforeAfterCarouselAssets.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === beforeAfterCarouselAssets.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex bg-[#F1F1F1] justify-evenly items-center py-12">
      <div className=" w-[640px] px-10  py-12 items-center text-black bg-white rounded-2xl shadow-2xl">
        <h2 className="text-5xl text-left font-bold mb-8">
          Pourquoi <span className="text-[#FF6633]">BLM ?</span>
        </h2>
        <ul className="text-[#1BAC7D] text-xl list-disc pl-5 space-y-4">
          <li>
            <strong>Du personnel qualifié :</strong>{" "}
            <span className="text-black">
              Des techniciens/ramoneurs qualifiés et formés aux nouvelles
              générations de chaudières
            </span>
          </li>
          <li>
            <strong>Remise d&apos;un certificat de ramonage :</strong>{" "}
            <span className="text-black">
              ce document électronique peut être inclus avec des photos Avant /
              Après pour une solution zéro papier
            </span>
          </li>
          <li>
            <strong>Relation de confiance :</strong>{" "}
            <span className="text-black">
              un travail en toute confiance et en parfaite transparence pour une
              relation optimale
            </span>
          </li>
        </ul>
      </div>
      <div className="flex relative">
        <button
          onClick={handlePrevClick}
          className="carousel-button absolute -left-7 top-1/2 -translate-y-1/2 z-10"
        >
          <Image
            src="/assets/home/before-after-carousel/left-arrow.png"
            alt="Précédent"
            width={58}
            height={58}
          />
        </button>
        <div className="w-[664px] h-[468px] relative overflow-hidden ">
          <div className="relative">
            {beforeAfterCarouselAssets.map((asset, index) => (
              <div
                key={asset.id}
                className={`absolute top-0 left-0 w-full transition-opacity duration-300 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={asset.image}
                  alt={`Avant-Après ${asset.id}`}
                  width={664}
                  height={468}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handleNextClick}
          className="carousel-button absolute -right-7 top-1/2 -translate-y-1/2 z-10"
        >
          <Image
            src="/assets/home/before-after-carousel/right-arrow.png"
            alt="Suivant"
            width={58}
            height={58}
          />
        </button>
      </div>
    </div>
  );
};

export default BeforeAfterCarousel;
