import Image from "next/image";

export default function TrustUs() {
  return (
    <div className="flex flex-col justify-center p-12 bg-[#F1F1F1] gap-12">
      <h2 className="text-3xl text-black font-bold">
        Ils nous font <span className="text-[#FF6633]">confiance</span>
      </h2>
      <div className="flex justify-between mb-8">
        <Image
          src="/assets/pagesPrestations/trustUs/trust-us-1.png"
          alt="Trust Us"
          width={416.98}
          height={154}
        />
        <Image
          src="/assets/pagesPrestations/trustUs/trust-us-2.png"
          alt="Trust Us"
          width={416.98}
          height={154}
        />
        <Image
          src="/assets/pagesPrestations/trustUs/trust-us-3.png"
          alt="Trust Us"
          width={416.98}
          height={154}
        />
      </div>
    </div>
  );
}
