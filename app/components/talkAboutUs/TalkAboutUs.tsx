import Image from "next/image";
import Link from "next/link";
import { talkAboutUsAssets } from "./TalkAboutUs-helper";

const TalkAboutUs = () => {
  return (
    <div className="flex flex-col items-center p-6 md:p-12 space-y-8 md:space-y-12">
      <h2 className="text-black text-center text-3xl md:text-5xl font-bold">
        <span className="text-[#FF6633]">Ils parlent</span> de nous
      </h2>
      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 w-full overflow-x-auto px-4 md:px-12">
        {talkAboutUsAssets.map((asset) => (
          <div
            key={asset.id}
            className="flex flex-col gap-4 md:gap-6 w-full min-w-[300px] md:w-[668px]"
          >
            <div className="relative w-full h-48 md:h-64 lg:h-80">
              <Image
                src={asset.image}
                alt={`Article ${asset.id}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col flex-1 gap-4 md:gap-6">
              <h4 className="text-black text-base md:text-xl font-bold max-w-full md:max-w-[668px]">
                {asset.text}
              </h4>
              <Link className="flex justify-start mt-auto" href="#">
                <p className="text-white font-bold bg-[#1BAC7D] px-6 md:px-12 py-2 md:py-3 rounded-xl border border-[#1BAC7D] hover:bg-transparent hover:text-[#1BAC7D] transition-colors shadow-md md:shadow-2xl">
                  Lire la suite
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TalkAboutUs;
