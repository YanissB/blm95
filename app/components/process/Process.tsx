import Image from "next/image";
import { processData } from "./Process-helper";

const Process = () => {
  return (
    <div className="text-center text-black p-20 space-y-32">
      <h2 className="text-3xl text-left font-bold ">
        Un process d&apos;entretien{" "}
        <span className="text-[#FF6633]"> simple et rapide</span>
      </h2>
      <div className="flex flex-row w-full px-12 justify-between">
        {processData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col w-[153px] items-center gap-8"
          >
            <Image src={item.image} alt={item.stage} width={90} height={90} />
            <h3 className="text-xl font-bold">{item.stage}</h3>
            <p className="">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
