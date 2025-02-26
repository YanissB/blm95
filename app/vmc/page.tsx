import TitleBanner from "../components/titleBanner/TitleBanner";
import Offer from "../components/offer/Offer";
import Process from "../components/process/Process";
import Advantages from "../components/advantages/Advantages";
import Accordion from "../components/accordion/Accordion";
import TrustUs from "../components/trustUs/trustUs";
import OtherNeeds from "../components/otherNeeds/OtherNeeds";
export default function VMC() {
  return (
    <div>
      <TitleBanner page="vmc" />
      <div className="-mt-8 relative">
        <Offer page="vmc" />
      </div>
      <Process />
      <Advantages page="vmc" />
      <Accordion page="vmc" />
      <TrustUs />
      <OtherNeeds exclude="vmc" />
    </div>
  );
}
