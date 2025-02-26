import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import CookieBanner from "../CookieBanner";

const Hydrate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white">
      <Header />
      <CookieBanner />
      {children}
      <Footer />
    </div>
  );
};

export default Hydrate;
