import React from "react";
import { prestationsHelperData } from "./Prestations-helper";
import Image from "next/image";
import Link from "next/link";

const Prestations = () => {
  return (
    <div className="p-12 space-y-12 ">
      <h2 className="text-black text-center text-5xl font-bold ">
        Nos <span className="text-[#FF6633]">prestations</span>
      </h2>
      <div className="flex justify-center gap-14">
        {prestationsHelperData.map((prestation) => (
          <div
            key={prestation.id}
            className="flex flex-col w-[323px] justify-between"
          >
            <div className="text-black  space-y-6">
              <Image
                src={prestation.image}
                alt={prestation.title}
                className="prestation-image"
                width={323}
                height={323}
              />
              <h3 className="font-bold text-2xl">{prestation.title}</h3>
              <p className="pb-8">{prestation.text}</p>
            </div>
            <div className="shadow-2xl">
              <Link
                href={prestation.href}
                className="bg-[#1BAC7D] w-[216px] text-white font-bold text-xl px-12 py-3 rounded-xl border border-[#1BAC7D] hover:bg-transparent hover:text-[#1BAC7D] transition-colors"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prestations;
