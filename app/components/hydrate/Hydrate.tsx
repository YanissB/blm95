import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Hydrate = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Hydrate;
