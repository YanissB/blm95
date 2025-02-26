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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!isClient) return null;

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-[#F1F1F1] relative z-50">
      <div className="flex items-center">
        <Image src={LogoBLM} alt="Logo BLM" width={132} height={47} />
      </div>
      <nav className="flex space-x-12">
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
              href="/hottes-cuisine"
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
        className="bg-[#FF6633] text-white font-bold px-8 py-2 rounded-lg hover:bg-transparent hover:text-[#FF6633] border border-[#FF6633]"
      >
        Contactez-nous
      </Link>
    </header>
  );
};

export default Header;
