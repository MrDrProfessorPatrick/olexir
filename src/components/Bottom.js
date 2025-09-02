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
      className={`grid grid-cols-[1fr_1.5fr_1fr] bg-[#D8AE02] w-full h-[248px] ${montserrat.variable}`}
    >
      <div className="flex items-center pl-[5%]">
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
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col justify-start items-center">
          <div
            className={`flex flex-start text-[16px] lg:text-[24px] font-semibold ${montserrat.variable}`}
          >
            <span>Reach out to collaborate or learn more.</span>
          </div>
          <div
            className={`flex justify-start w-full text-[24px] font-semibold pt-2 ${montserrat.variable}`}
          >
            <span>olexir@olexir.ch</span>
          </div>
          <div className="flex justify-start w-full pt-2">
            <button className="text-[16px] text-white px-3 py-1 font-semibold bg-black rounded-md">
              Let’s Connect 📩
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-end w-full">
        <div
          className={`text-[16px] pr-8 pb-5 flex flex-col items-end ${montserrat.variable}`}
        >
          <span>© 2025 by Olexir</span>
        </div>
      </div>
    </div>
  );
}
