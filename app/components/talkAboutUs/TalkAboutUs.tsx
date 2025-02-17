import Image from "next/image";
import Link from "next/link";
import { talkAboutUsAssets } from "./TalkAboutUs-helper";

const TalkAboutUs = () => {
  return (
    <div className="flex flex-col items-center p-12 space-y-12">
      <h2 className="text-black text-center text-5xl font-bold">
        <span className="text-[#FF6633]">Ils parlent</span> de nous
      </h2>
      <div className="flex justify-evenly flex-col md:flex-row">
        {talkAboutUsAssets.map((asset) => (
          <div key={asset.id} className="flex flex-col mx-12 gap-6 w-[668px]">
            <Image
              src={asset.image}
              alt={`Article ${asset.id}`}
              width={668}
              height={364}
            />
            <div className="flex flex-col flex-1 gap-6">
              <h4 className="text-black text-xl font-bold max-w-[668px]">
                {asset.text}
              </h4>
              <Link className="flex justify-start mt-auto" href="#">
                <p className="text-white font-bold  bg-[#1BAC7D] px-12 py-3 rounded-xl border border-[#1BAC7D] hover:bg-transparent hover:text-[#1BAC7D] transition-colors shadow-2xl">
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
