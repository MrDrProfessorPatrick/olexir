import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function Bottom() {
  return (
    <div
      className={`grid grid-rows-3 md:grid-rows-none md:grid-cols-[1fr_1.5fr_1fr] 
              md:justify-center bg-[#D8AE02] w-full h-[418px] md:h-[268px] 
               ${montserrat.variable}`}
    >
      <div className="flex items-center justify-center md:pl-5 lg:pl-10 mt-0 md:mt-15">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="relative w-[220px] h-[70px]">
            <Image
              src="/OlexirLogoBlackDiomondUnderI2.png"
              alt="logo"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 200px)"
            />
          </div>
          <div className="flex items-center hidden md:flex justify-center text-[12px] lg:text-[16px] flex-2">
            <div className={`flex flex-row gap-4 ${montserrat.variable}`}>
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center md:pl-8">
        <div className="flex flex-col justify-center items-center md:pt-5 md:pt-0">
          <div
            className={`flex flex-start justify-center text-[16px] lg:text-[24px] font-semibold ${montserrat.variable}`}
          >
            <span>Reach out to collaborate or learn more.</span>
          </div>
          <div
            className={`flex justify-center md:justify-start w-full text-[24px] font-semibold pt-2 ${montserrat.variable}`}
          >
            <span>olexir@olexir.ch</span>
          </div>
          <div className="flex flex-col md:justify-start w-full pt-2">
            <button className="text-[16px] text-white px-3 py-1 font-semibold bg-black rounded-md">
              Let’s Connect 📩
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-around w-full">
        <div
          className={`flex md:hidden flex-col items-center justify-center ${montserrat.variable}`}
        >
          <div className="flex items-center justify-between gap-4 pb-2">
            <span>Terms & Conditions</span>
          </div>
          <div>
            <span>Privacy Policy</span>
          </div>
        </div>
        <div
          className={`text-[16px] pr-8 md:pb-5 flex flex-col pl-6 ${montserrat.variable}`}
        >
          <span>© 2025 by Olexir</span>
        </div>
      </div>
    </div>
  );
}
