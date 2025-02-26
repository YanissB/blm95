"use client";

import React, { useState } from "react";
import Image from "next/image";
import { formData } from "./Form-helper";

const Form = ({ page }: { page: string }) => {
  const pageData = formData.find((item) => item.page === `/${page}`);
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="relative min-h-screen h-full w-full p-12">
      <div>
        <Image
          src="/assets/contact/contact-1.png"
          alt="Background contact"
          fill
          className="object-cover"
          quality={100}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-8 p-6 max-w-6xl mx-auto relative z-10 h-full items-center">
        <div className="flex flex-col bg-[#D9D9D980]/50 w-[667px] h-[676px] p-8 rounded-lg gap-6 shadow-md">
          <h2
            className={`text-white ${
              page === "recrutement" ? "text-xl" : "text-5xl"
            } font-bold mb-4`}
          >
            {pageData?.title}
          </h2>
          {pageData?.texts.map((text) => (
            <p
              key={text.id}
              className={`text-white font-bold mb-4 ${
                page === "recrutement" ? "text-xl" : ""
              }`}
            >
              {text.text}
            </p>
          ))}
          {page === "contact" && pageData?.icons && (
            <div className="mt-4 space-y-6">
              {pageData.icons.map((icon) => (
                <div key={icon.id} className="flex items-center gap-2">
                  <div className="relative w-8 h-8">
                    <Image
                      src={icon.icon}
                      alt={`Icône ${icon.text}`}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-white font-bold">{icon.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col bg-[#D9D9D980]/60 w-[667px] h-[676px] p-6 rounded-lg shadow-md">
          <form className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nom"
                className="mt-1 text-black block w-full rounded-lg border border-gray-300 px-4 py-5 bg-white/80 placeholder-gray-700"
              />
              <input
                type="text"
                placeholder="Prénom"
                className="mt-1 text-black block w-full rounded-lg border border-gray-300 px-4 py-5 bg-white/80 placeholder-gray-700"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Adresse email"
                className="mt-1 text-black block w-full rounded-lg border border-gray-300 px-4 py-5 bg-white/80 placeholder-gray-700"
              />
              <input
                type="tel"
                placeholder="Téléphone"
                className="mt-1 text-black block w-full rounded-lg border border-gray-300 px-4 py-5 bg-white/80 placeholder-gray-700"
              />
            </div>

            {page === "recrutement" ? (
              <div className="relative">
                <input
                  type="file"
                  accept="application/pdf"
                  className="mt-1 absolute opacity-0 w-full h-full cursor-pointer"
                  id="cv-upload"
                  onChange={(e) => setFile(e.target.files && e.target.files[0])}
                />
                <label
                  htmlFor="cv-upload"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-5 bg-white/80 text-gray-700 underline cursor-pointer hover:text-[#FF6633] transition-colors relative"
                >
                  {file ? (
                    <div className="flex justify-between items-center">
                      <span>{file.name}</span>
                      <button
                        type="button"
                        className="text-gray-500 hover:text-red-600 absolute right-4 top-1/2 -translate-y-1/2"
                        onClick={(e) => {
                          e.stopPropagation();
                          setFile(null);
                        }}
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    "Joindre un CV"
                  )}
                </label>
              </div>
            ) : (
              <input
                type="text"
                placeholder="Objet"
                className="mt-1 text-black block w-full rounded-lg border border-gray-300 px-4 py-5 bg-white/80 placeholder-gray-700"
              />
            )}

            {page === "recrutement" ? (
              <textarea
                rows={8}
                placeholder="Message"
                className="mt-1 text-black block w-full rounded-lg border border-gray-300 px-4 py-5 bg-white/80 placeholder-gray-700"
              ></textarea>
            ) : (
              <textarea
                rows={8}
                placeholder="Message"
                className="mt-1 text-black block w-full rounded-lg border border-gray-300 px-4 py-5 bg-white/80 placeholder-gray-700"
              ></textarea>
            )}

            <button
              type="submit"
              className="w-full font-bold text-xl bg-[#FF6633] text-white py-2 px-4 rounded-md hover:bg-[#FFFFFF] hover:text-[#FF6633] hover:border hover:border-[#FF6633] transition-colors"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
