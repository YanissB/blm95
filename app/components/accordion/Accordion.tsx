"use client";

import Image from "next/image";
import { accordionData } from "./Accordion-helper";
import { useState } from "react";

export default function Accordion({ page }: { page: string }) {
  const accordion = accordionData.find((item) => item.page === page);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!accordion) return null;

  return (
    <div className="flex flex-col text-black p-6 md:p-12 gap-6 md:gap-12">
      <h2 className="text-2xl md:text-3xl font-bold">
        En savoir <span className="text-[#FF6633]">plus</span>
      </h2>
      <div className="w-full md:w-1/2 h-[2px] bg-black " />
      {accordion.accordion.map((item) => (
        <div key={item.id} className="w-full flex-col items-center space-y-4">
          <div
            className={`transition-all duration-300 ease-in-out flex items-center justify-between cursor-pointer`}
            onClick={() => toggleAccordion(item.id)}
          >
            <p className="w-full md:w-1/2 text-lg md:text-xl mb-4 md:mb-8 font-bold cursor-pointer">
              {item.question}
            </p>
            <Image
              src="/assets/pagesPrestations/accordion/accordion-arrow.png"
              alt="Accordion Arrow"
              width={20}
              height={10}
              className={`mr-2 transform transition-transform duration-300 ${
                openIndex === item.id ? "rotate-180" : ""
              }`}
            />
          </div>
          {openIndex === item.id && (
            <div className="text-lg md:text-xl whitespace-pre-line">
              {item.answer
                .split("**")
                .map((part, index) =>
                  index % 2 === 0 ? part : <strong key={index}>{part}</strong>
                )}
            </div>
          )}

          <div className="w-full h-px bg-black" />
        </div>
      ))}
    </div>
  );
}
