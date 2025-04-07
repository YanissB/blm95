import Image from "next/image";
import Link from "next/link";
import { offerData } from "./Offer-helper";

export default function Offer({ page }: { page: string }) {
  const offer = offerData.find((item) => item.page === page);

  if (!offer) return null;

  return (
    <div className="flex flex-col md:flex-row bg-[#F1F1F1] justify-center rounded-3xl overflow-hidden py-12 px-4 md:px-8 space-y-8 md:space-y-0 md:space-x-12 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
      <Image
        className="w-full md:w-2/3 max-w-[844px]"
        src={offer.image}
        alt={offer.title1}
        width={844}
        height={531}
      />
      <div className="flex flex-col gap-8 md:gap-12 max-w-full md:max-w-[500px]">
        <h2
          className={`text-2xl md:text-3xl font-bold ${
            page === "ramonage" ? "text-[#FF6633]" : "text-black"
          }`}
        >
          {offer.title1}
          {offer.title2 && (
            <span className="text-[#FF6633]"> {offer.title2}</span>
          )}
        </h2>
        <div className="flex flex-col gap-4 md:gap-8 text-black">
          {offer.subTitle && (
            <p className="text-black font-bold">{offer.subTitle}</p>
          )}
          {offer.bulletPoints && (
            <ul className="list-disc pl-4 md:pl-8">
              {offer.bulletPoints.map((point) => (
                <li key={point.id}>{point.text}</li>
              ))}
            </ul>
          )}
          <p className="text-black">{offer.text1}</p>
          {offer.text2 && <p className="">{offer.text2}</p>}
        </div>
        <Link
          href="/contact"
          className="bg-[#FF6633] w-full md:w-[311px] text-center text-white text-xl md:text-2xl font-bold px-6 md:px-10 py-2 rounded-xl hover:bg-white hover:text-[#FF6633] border border-[#FF6633] mt-6 inline-block"
        >
          Demandez un devis
        </Link>
      </div>
    </div>
  );
}
