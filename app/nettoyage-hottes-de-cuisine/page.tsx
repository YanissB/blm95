import TitleBanner from "../components/titleBanner/TitleBanner";
import Offer from "../components/offer/Offer";
import Process from "../components/process/Process";
import Advantages from "../components/advantages/Advantages";
import Accordion from "../components/accordion/Accordion";
import TrustUs from "../components/trustUs/trustUs";
import OtherNeeds from "../components/otherNeeds/OtherNeeds";

export default function NettoyageHottesDeCuisine() {
  return (
    <div>
      <TitleBanner page="nettoyage-hottes-de-cuisine" />
      <div className="-mt-8 relative">
        <Offer page="nettoyage-hottes-de-cuisine" />
      </div>
      <Process />
      <Advantages page="nettoyage-hottes-de-cuisine" />
      <Accordion page="nettoyage-hottes-de-cuisine" />
      <TrustUs />
      <OtherNeeds exclude="nettoyage-hottes-de-cuisine" />
    </div>
  );
}
