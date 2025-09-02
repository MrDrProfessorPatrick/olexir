// HomeImage1
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function HomePageContent() {
  return (
    <div className="w-full">
      <div className="relative w-full h-[496px]">
        <Image
          src="/HomeImage1.png"
          alt="home image 1"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 200px)"
        />
      </div>
      <div className="bg-[url('/caruselBg.png')]">
        <div className="flex items-start pl-20 pt-50 pb-10">
          <span
            className={`text-[142px] leading-[0] font-semibold text-white ${montserrat.className}`}
          >
            “
          </span>
        </div>

        <p
          className={`text-[24px] text-white ${montserrat.className} px-4 md:px-20`}
        >
          Olexir emerged from ETH Zurich with the support of the ETH Pioneer
          Fellowship. We combine breakthroughs in food science, material
          engineering, and proteomics with a deep commitment to sustainability —
          building a new class of functional wellness materials that bridge
          cutting-edge research with global market potential
        </p>
        <p className={`text-xl text-white px-20 pt-10 ${montserrat.className}`}>
          — Dr Svitlana Mykolenko
        </p>
        <div className="flex justify-end pr-0 pt-14 md:pr-30 pb-10">
          <div className="hidden md:block pr-5 pb-20 pt-50">
            <span
              className={`text-[142px] leading-[0] font-semibold text-white ${montserrat.className}`}
            >
              ”
            </span>
          </div>
          <div className="relative w-[342px] h-[374px]">
            <Image
              src="/svitlanaHomePage.png"
              alt="svitlana scientist"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 200px)"
            />
          </div>
          <div className="block md:hidden pr-0 md:pr-5 pb-20 pt-15">
            <span
              className={`text-[142px] leading-[0] font-semibold text-white ${montserrat.className}`}
            >
              ”
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
