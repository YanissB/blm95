import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#152E68] text-white p-6 space-y-12">
      <div className="mt-6 flex flex-col md:flex-row justify-around items-start gap-8 md:gap-0">
        <div className="w-full md:w-auto text-left px-4">
          <div className="space-y-4">
            <h3 className="text-2xl pb-4 font-bold">Détails du contact</h3>
            <div className="flex items-center space-x-4">
              <Image
                src="/assets/icons/Phone.png"
                alt="Phone"
                width={24}
                height={24}
              />
              <p className="font-bold">01 34 02 09 30</p>
            </div>
            <div className="flex items-center pl-1 space-x-4">
              <Image
                src="/assets/icons/Pin.png"
                alt="Address"
                width={16.8}
                height={24}
              />
              <p className="font-bold">
                35-37 avenue du gros chêne, Herblay, France
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Image
                src="/assets/icons/Mail.png"
                alt="Email"
                width={24}
                height={19.2}
              />
              <p className="font-bold">contact@blm95.fr</p>
            </div>
            <div className="flex items-center space-x-4">
              <Image
                src="/assets/icons/Fax.png"
                alt="Fax"
                width={24}
                height={21.6}
              />
              <p className="font-bold">Fax 01 30 39 93 59</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-auto flex justify-start md:justify-center">
          <Image
            src="/assets/footer/LOGO-QUALIBAT.png"
            alt="Qualibat Logo"
            width={191}
            height={200}
          />
        </div>
        <div className="w-full md:w-auto text-left px-4">
          <h3 className="text-2xl pb-6 md:pb-10 font-bold">Suivez nous</h3>
          <div className="flex flex-col items-start space-y-6">
            <Link
              href="https://www.facebook.com/souade.belarbia.blm/?locale=fr_FR"
              className="flex items-center space-x-6"
            >
              <Image
                src="/assets/icons/Facebook.png"
                alt="Facebook"
                width={24}
                height={24}
              />
              <p className="font-bold">Facebook</p>
            </Link>
            <Link
              href="https://www.linkedin.com/company/blm-ramonage-et-vmc/?originalSubdomain=fr"
              className="flex items-center space-x-6"
            >
              <Image
                src="/assets/icons/Linkedin.png"
                alt="LinkedIn"
                width={24}
                height={24}
              />
              <p className="font-bold">LinkedIn</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-left mt-4 md:mt-12 px-4">
        <p className="flex flex-wrap justify-start gap-2">
          Copyright 2025 ©{" "}
          <Link href="/" className="hover:underline text-blue-600">
            BLM ramonage et VMC
          </Link>
          . All Rights Reserved | Developed By Yaniss Besson EI |{" "}
          <Link
            href="/mentions-legales"
            className="hover:underline text-blue-600"
          >
            Mentions Légales
          </Link>{" "}
          |{" "}
          <Link
            href="/politique-de-confidentialité"
            className="hover:underline text-blue-600"
          >
            Politique de confidentialité
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
