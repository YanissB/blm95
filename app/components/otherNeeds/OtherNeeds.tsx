import Image from "next/image";
import Link from "next/link";
import { otherNeedsData } from "./OtherNeeds-helper";

export default function OtherNeeds({ exclude }: { exclude: string }) {
  return (
    <div className="bg-white text-black items-center justify-center flex flex-col p-6 md:p-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8">
        Un autre <span className="text-[#FF6633]">besoin</span> en tête
      </h2>
      <p className="font-bold mb-8 md:mb-16 text-center md:text-left">
        BLM propose une multitude d’offres vous permettant de répondre à tous
        vos besoins d’entretien et nettoyage d’équipements
      </p>
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        {otherNeedsData
          .filter((item) => item.page !== exclude)
          .map((item) => (
            <div
              key={item.id}
              className="flex flex-col w-full md:w-[406px] justify-between"
            >
              <div className="text-black space-y-4 md:space-y-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="prestation-image"
                  width={406}
                  height={406}
                />
                <h3 className="font-bold text-2xl md:text-3xl">{item.title}</h3>
                <p className="text-base md:text-lg pb-12 md:pb-24">
                  {item.text}
                </p>
              </div>
              <div className="shadow-2xl">
                <Link
                  href={item.href}
                  className="bg-[#1BAC7D] w-full md:w-[216px] text-white font-bold text-lg md:text-xl px-8 md:px-12 py-2 md:py-3 rounded-xl border border-[#1BAC7D] hover:bg-transparent hover:text-[#1BAC7D] transition-colors"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
