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
      <div className="relative w-[220px] h-[70px] ml-[5%] mt-25">
        <Image
          src="/OlexirLogoBlackDiomondUnderI2.png"
          alt="logo"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 200px)"
        />
      </div>
      <div className="mt-[5%] flex flex-col items-center justify-center">
        <div className="text-[24px] font-semibold">
          <span>Reach out to collaborate or learn more.</span>
        </div>
        <div className="text-[24px] font-semibold mt-2">
          <span>olexir@olexir.ch</span>
        </div>
        <div className="mt-2">
          <button className="text-[16px] text-white px-3 py-1 font-semibold bg-black rounded-md">
            Let’s Connect 📩
          </button>
        </div>
      </div>
      <div className="text-[16px] mr-[5%] flex flex-col items-end mt-50">
        <span>© 2025 by Olexir</span>
      </div>
    </div>
  );
}
