"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoBLM from "../../../public/assets/header/LogoBLM.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-[#F1F1F1] relative z-50">
      <div className="flex items-center">
        <Image src={LogoBLM} alt="Logo BLM" width={132} height={47} />
      </div>
      <nav className="hidden md:flex space-x-12">
        <Link href="/" className="text-[#1E1E1E] hover:text-[#FF6633]">
          Accueil
        </Link>
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#1E1E1E] hover:text-[#FF6633] focus:outline-none"
          >
            Nos prestations
          </button>
          <div
            className={`absolute px-4 ${
              menuOpen ? "block" : "hidden"
            } bg-[#F1F1F1] shadow-lg rounded-lg`}
          >
            <Link
              href="/ramonage"
              className="block px-4 py-2 text-[#1E1E1E] hover:text-[#FF6633]"
            >
              Ramonage
            </Link>
            <Link
              href="/vmc"
              className="block px-4 py-2 text-[#1E1E1E] hover:text-[#FF6633]"
            >
              VMC
            </Link>
            <Link
              href="/nettoyage-hottes-de-cuisine"
              className="block w-[245px] px-4 py-2 text-[#1E1E1E] hover:text-[#FF6633]"
            >
              Hottes de cuisine
            </Link>
          </div>
        </div>
        <Link
          href="/recrutement"
          className="text-[#1E1E1E] hover:text-[#FF6633]"
        >
          Recrutement
        </Link>
      </nav>
      <Link
        href="/contact"
        className="bg-[#FF6633] text-white font-bold px-8 py-2 rounded-lg hover:bg-transparent hover:text-[#FF6633] border border-[#FF6633] hidden md:block"
      >
        Contactez-nous
      </Link>
      <button
        className="md:hidden text-[#1E1E1E] hover:text-[#FF6633] focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      <div
        className={`fixed top-0 right-0 h-full bg-[#F1F1F1] shadow-lg transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
        style={{ width: "250px" }}
      >
        <button
          className="absolute top-4 right-4 text-[#1E1E1E] hover:text-[#FF6633] focus:outline-none"
          onClick={() => setMenuOpen(false)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <nav className="flex flex-col mt-16 space-y-4">
          <Link
            href="/"
            className="px-4 py-2 text-[#1E1E1E] hover:text-[#FF6633]"
            onClick={() => setMenuOpen(false)}
          >
            Accueil
          </Link>
          <Link
            href="/ramonage"
            className="px-4 py-2 text-[#1E1E1E] hover:text-[#FF6633]"
            onClick={() => setMenuOpen(false)}
          >
            Ramonage
          </Link>
          <Link
            href="/vmc"
            className="px-4 py-2 text-[#1E1E1E] hover:text-[#FF6633]"
            onClick={() => setMenuOpen(false)}
          >
            VMC
          </Link>
          <Link
            href="/nettoyage-hottes-de-cuisine"
            className="px-4 py-2 text-[#1E1E1E] hover:text-[#FF6633]"
            onClick={() => setMenuOpen(false)}
          >
            Hottes de cuisine
          </Link>
          <Link
            href="/recrutement"
            className="px-4 py-2 text-[#1E1E1E] hover:text-[#FF6633]"
            onClick={() => setMenuOpen(false)}
          >
            Recrutement
          </Link>
          <Link
            href="/contact"
            className="bg-[#FF6633] text-white font-bold mx-auto px-8 py-2 rounded-lg hover:bg-transparent hover:text-[#FF6633] border border-[#FF6633]"
            onClick={() => setMenuOpen(false)}
          >
            Contactez-nous
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
