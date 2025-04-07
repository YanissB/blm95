import Image from "next/image";
import { advantagesAssets } from "./Advantages-helper";

export default function Advantages({ page }: { page: string }) {
  const advantage = advantagesAssets.find((item) => item.page === page);

  if (!advantage) return null;

  return (
    <div className="flex flex-col md:flex-row bg-[#F1F1F1] p-6 md:p-12 justify-center gap-6 md:gap-12">
      <div className="flex flex-col w-full md:w-[648px] text-black bg-white p-6 md:p-8 gap-6 md:gap-8 rounded-3xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
        <h2 className="text-2xl md:text-3xl font-bold">
          Les avantages <span className="text-[#FF6633]">BLM</span>
        </h2>
        <h3 className="text-xl md:text-2xl font-bold">
          Expert depuis presque 40 ans, BLM vous permet de mener vos entretiens
          et nettoyages de vos équipements en toute sérénité
        </h3>
        <ul className="list-disc pl-6 md:pl-8 text-base md:text-lg font-bold">
          <li>
            <h4>Intervention possible dans toute l&apos;Île-de-France</h4>
          </li>
          <li>
            Une prise en charge rapide et adaptée à vos besoins et votre
            structure
          </li>
          <li>
            Un travail réalisé par des professionnels qualifiés et certifiés
          </li>
          <li>
            La remise d&apos;un certificat électronique de conformité avec
            possibilité d&apos;y inclure des photos Avant / Après pour une
            solution zéro papier
          </li>
        </ul>
      </div>

      <Image
        src={advantage.image}
        alt="avantages"
        className="w-full md:w-auto"
        width={648}
        height={445}
      />
    </div>
  );
}
