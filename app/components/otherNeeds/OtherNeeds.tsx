import Image from "next/image";
import Link from "next/link";
import { otherNeedsData } from "./OtherNeeds-helper";

export default function OtherNeeds({ exclude }: { exclude: string }) {
  return (
    <div className="bg-white text-black items-center justify-center flex flex-col p-12">
      <h2 className="text-3xl font-bold mb-8">
        Un autre <span className="text-[#FF6633]">besoin</span> en tête
      </h2>
      <p className="font-bold mb-16">
        BLM propose une multitude d’offres vous permettant de répondre à tous
        vos besoins d’entretien et nettoyage d’équipements
      </p>
      <div className="flex gap-24 ">
        {otherNeedsData
          .filter((item) => item.page !== exclude)
          .map((item) => (
            <div
              key={item.id}
              className="flex flex-col w-[406px] justify-between"
            >
              <div className="text-black space-y-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="prestation-image"
                  width={406}
                  height={406}
                />
                <h3 className="font-bold text-3xl">{item.title}</h3>
                <p className="text-lg pb-24">{item.text}</p>
              </div>
              <div className="shadow-2xl">
                <Link
                  href={item.href}
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
}
