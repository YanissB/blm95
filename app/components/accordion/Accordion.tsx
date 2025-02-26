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
    <div className="flex flex-col text-black p-12 gap-12">
      <h2 className="text-3xl font-bold">
        En savoir <span className="text-[#FF6633]">plus</span>
      </h2>
      <div className="w-1/2 h-[2px] bg-black " />
      {accordion.accordion.map((item) => (
        <div key={item.id} className="w-full flex-col items-center space-y-4">
          <div
            className={`transition-all duration-300 ease-in-out flex items-center justify-between cursor-pointer`}
            onClick={() => toggleAccordion(item.id)}
          >
            <p className="w-1/2 text-xl mb-8 font-bold cursor-pointer">
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
            <div>
              <p className="text-xl">{item.answer}</p>
            </div>
          )}

          <div className="w-full h-px bg-black" />
        </div>
      ))}
    </div>
  );
}
