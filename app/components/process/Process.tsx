import Image from "next/image";
import { processData } from "./Process-helper";

const Process = () => {
  return (
    <div className="text-center text-black p-10 md:p-20 space-y-16 md:space-y-32">
      <h2 className="text-2xl md:text-3xl text-left font-bold">
        Un process d&apos;entretien{" "}
        <span className="text-[#FF6633]"> simple et rapide</span>
      </h2>
      <div className="flex flex-col md:flex-row w-full px-6 md:px-12 justify-between">
        {processData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col w-full md:w-[153px] items-center gap-4 md:gap-8"
          >
            <Image src={item.image} alt={item.stage} width={90} height={90} />
            <h3 className="text-lg md:text-xl font-bold">{item.stage}</h3>
            <p className="text-sm md:text-base">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
