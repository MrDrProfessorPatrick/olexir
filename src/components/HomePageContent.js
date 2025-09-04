// HomeImage1
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Inter } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function HomePageContent() {
  return (
    <div className="w-full">
      <div className="relative w-full h-[296px] sm:h-[496px]">
        <Image
          src="/HomeImageSmall.png"
          alt="svitlana scientist"
          fill
          className="object-cover sm:hidden"
          priority
        />
        <Image
          src="/HomeImage1.png"
          alt="home image 1"
          fill
          className="object-cover hidden sm:block"
          priority
          sizes="(max-width: 200px)"
        />
      </div>
      <div className="bg-[url('/caruselBg.png')] bg-cover bg-center">
        <div className="flex items-start pl-5 md:pl-20 pt-50 pb-10">
          <span
            className={`text-[98px] lg:text-[142px] leading-[0] font-semibold text-white ${montserrat.className}`}
          >
            “
          </span>
        </div>

        <p
          className={`text-[18px] md:text-[24px] text-white ${montserrat.className} px-4 md:px-20`}
        >
          Olexir emerged from ETH Zurich with the support of the ETH Pioneer
          Fellowship. We combine breakthroughs in food science, material
          engineering and proteomics with a deep commitment to sustainability —
          building a new class of functional wellness materials that bridge
          cutting-edge research with global market potential
        </p>
        <p
          className={`text-[18px] md:text-[24px] text-white px-4 md:px-20 pt-10 ${inter.className}`}
        >
          — DR SVITLANA MYKOLENKO
        </p>
        <div className="flex justify-end pr-0 pt-14 md:pr-30 pb-10">
          <div className="hidden md:block pr-5 pb-20 pt-50">
            <span
              className={`text-[98px] lg:text-[142px] leading-[0] font-semibold text-white ${montserrat.className}`}
            >
              ”
            </span>
          </div>
          <div className="relative w-[222px] h-[254px] lg:w-[342px] lg:h-[374px]">
            <Image
              src="/svitlanaHomePage.png"
              alt="svitlana scientist"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="block md:hidden pr-2 md:pr-5 pb-20 pt-15">
            <span
              className={`text-[98px] lg:text-[142px] leading-[0] font-semibold text-white ${montserrat.className}`}
            >
              ”
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
