import Image from "next/image";
import MenuButtons from "./MenuButtons";
import { Lato } from "next/font/google";
import { Montserrat } from "next/font/google";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function HeroPage() {
  return (
    <section className="relative w-full h-[1216px] lg:h-[916px]">
      <div className="w-full h-[100px]">
        <div className="absolute inset-0 flex items-center justify-center z-10 w-[220px] h-[70px] ml-[5%] mt-[2%]">
          <Image
            src="/OlexirLogoBlackDiomondUnderI2.png"
            alt="logo"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 200px)"
          />
        </div>
        <MenuButtons buttons={["Solution", "Team", "About"]} />
      </div>

      <Image
        src="/OlexirPresentation.png"
        alt="Background"
        fill
        className="object-cover animate-image-slideRight "
        priority
        sizes="(max-width: 200px)"
      />

      <div className="absolute inset-0 mt-[201px]">
        <div className={`relative animate-slideLeft max-w-[1200px] pl-[5%]`}>
          <span
            className={`2xl:text-[87px] xl:text-[87px] lg:text-[67px] md:text-[57px] sm:text-[47px] text-[32px] font-extrabold text-black text-left ${lato.className}  h-[212px]`}
          >
            Versatile platform for lipid engineering
          </span>
          <div className="relative mt-4">
            <button
              className={`px-6 py-2 rounded-xl relative cursor-pointer bg-black z-1000 text-white text-[18px] mr-[10px] ${montserrat.className}`}
            >
              Discover More
            </button>
            <button
              className={`px-6 py-2 rounded-xl relative cursor-pointer bg-[#D8AE02] z-1000 text-black text-[18px] ml-[10px] ${montserrat.className}`}
            >
              Partner With Us
            </button>
          </div>
        </div>
        <div
          className={`flex flex-col items-center lg:flex-row lg:justify-center mt-18 gap-14 mx-auto px-18  ${lato.className}`}
        >
          <div className="flex-1 h-[232px] w-[90%] lg:max-w-[420px] backdrop-blur-md bg-transparent z-10 rounded-2xl">
            <div className="pt-6 lg:pl-8">
              <h3 className="text-[40px] text-center lg:text-left">Beauty</h3>
              <ul className="text-[24px]">
                <li className="text-center lg:text-left">Silky.</li>
                <li className="text-center lg:text-left">Vegan.</li>
                <li className="text-center lg:text-left">Smart.</li>
              </ul>
            </div>
          </div>
          <div className="flex-1 h-[232px] w-[90%] lg:max-w-[420px] backdrop-blur-md bg-transparent z-10 rounded-2xl">
            <div className="pt-6 pl-8">
              <h3 className="text-[40px] text-center lg:text-left">Beauty</h3>
              <ul className="text-[24px]">
                <li className="text-center lg:text-left">Silky.</li>
                <li className="text-center lg:text-left">Vegan.</li>
                <li className="text-center lg:text-left">Smart.</li>
              </ul>
            </div>
          </div>
          <div className="flex-1 h-[232px] w-[90%] lg:max-w-[420px] backdrop-blur-md bg-transparent z-10 rounded-2xl">
            <div className="pt-6 pl-8">
              <h3 className="text-[40px] text-center lg:text-left">Beauty</h3>
              <ul className="text-[24px]">
                <li className="text-center lg:text-left">Silky.</li>
                <li className="text-center lg:text-left">Vegan.</li>
                <li className="text-center lg:text-left">Smart.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
