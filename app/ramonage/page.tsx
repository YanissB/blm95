import TitleBanner from "../components/titleBanner/TitleBanner";
import Offer from "../components/offer/Offer";
import Process from "../components/process/Process";
import Advantages from "../components/advantages/Advantages";
import Accordion from "../components/accordion/Accordion";
import TrustUs from "../components/trustUs/trustUs";
import OtherNeeds from "../components/otherNeeds/OtherNeeds";

export default function Ramonage() {
  return (
    <div>
      <TitleBanner page="ramonage" />
      <div className="-mt-8 relative">
        <Offer page="ramonage" />
      </div>
      <Process />
      <Advantages page="ramonage" />
      <Accordion page="ramonage" />
      <TrustUs />
      <OtherNeeds exclude="ramonage" />
    </div>
  );
}
