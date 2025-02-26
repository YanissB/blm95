"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [isClient, setIsClient] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const consent = localStorage.getItem("cookieConsent");
    setShowBanner(consent === null);
  }, []);

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem("cookieConsent", accepted ? "accepted" : "rejected");
    setShowBanner(false);

    if (accepted) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  };

  if (!isClient || !showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#152E68] text-white p-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
      <div className="text-center md:text-left">
        <p>
          Nous utilisons des cookies pour analyser le trafic. Consultez notre{" "}
          <Link
            href="/politique-de-confidentialité"
            className="text-[#FF6633] underline"
          >
            politique de confidentialité
          </Link>
          .
        </p>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={() => handleConsent(true)}
          className="bg-[#FF6633] px-6 py-2 rounded hover:bg-[#e55b2b] transition-colors"
        >
          Accepter
        </button>
        <button
          onClick={() => handleConsent(false)}
          className="bg-gray-500 px-6 py-2 rounded hover:bg-gray-600 transition-colors"
        >
          Refuser
        </button>
      </div>
    </div>
  );
}
