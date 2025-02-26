import HeroCarousel from "./components/heroCarousel/HeroCarousel";
import About from "./components/about/About";
import BeforeAfterCarousel from "./components/beforeAfterCarousel/BeforeAfterCarousel";
import Prestations from "./components/prestations/Prestations";
import PartnersCarousel from "./components/partnersCarousel/PartnersCarousel";
import TalkAboutUs from "./components/talkAboutUs/TalkAboutUs";

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <div className="-mt-4 relative">
        <About />
      </div>
      <BeforeAfterCarousel />
      <Prestations />
      <PartnersCarousel />
      <TalkAboutUs />
    </div>
  );
}
