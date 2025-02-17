import React from "react";
import Image from "next/image";
import homeImage from "../../../public/assets/home/home-1.png";

const About = () => {
  return (
    <section className="flex flex-col space-y-10 md:space-y-0 md:flex-row items-start p-12 justify-around bg-white rounded-t-3xl">
      <div className=" justify-items-center ">
        <Image src={homeImage} alt="Home Image" className="rounded-2xl" />
      </div>
      <div className="md:w-1/2 md:pl-8 space-y-4">
        <h2 className="text-5xl font-bold text-black mb-4">
          Qui sommes <span className="text-[#FF6633]">nous ?</span>
        </h2>
        <p className="text-xl font-bold text-[#1BAC7D] mb-4">
          BLM est une société familiale à taille humaine fondée au début des
          années 2000 par madame Souade Belarbia.
        </p>
        <p className=" text-black mb-4">
          Forte de nombreuses années d&apos;expérience, BLM s&apos;est
          spécialisée dans le ramonage de chaudières, tous combustibles, toutes
          puissances, ainsi que dans l&apos;entretien des réseaux VMC. (
          nettoyage des caissons d’extraction, des trainasses et colonnes, des
          bouches d’extraction…)
        </p>
        <p className=" text-black mb-4">
          Après chaque intervention, un certificat électronique vous est envoyé
          par mail. Avec cette solution zéro papier, plus aucune perte et vous y
          gagnez aussi en lisibilité. C&apos;est simple, rapide, efficace et
          dans l&apos;ère du temps.
        </p>
        <p className=" text-black font-bold mb-4">
          BLM est certifiée QUALIBAT pour la VMC depuis 2018.
        </p>
        <p className="    text-black mb-4">
          Nous réalisons aussi les prestations suivantes: Contrôle des
          déconnecteurs, Passage caméra, Peinture de chaufferie, Dégraissage des
          hottes de cuisine.
        </p>
        <p className=" text-black mb-4">
          BLM intervient pour toutes vos prestations sur l&apos;ensemble de
          l&apos;Ile de France ainsi que ses départements limitrophes.
        </p>
        <p className=" text-black">
          N&apos;hésitez pas à nous consulter pour toutes demandes. Nous nous
          ferons un plaisir de vous répondre.
        </p>
      </div>
    </section>
  );
};

export default About;
