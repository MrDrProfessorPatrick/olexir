"use client";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuButtons from "./MenuButtons";

export default function NavBar() {
  return (
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

      {/* Mobile (<640px) */}
      <div className="absolute block sm:hidden z-999 right-10 top-5">
        <GiHamburgerMenu size="4em" />
      </div>

      {/* Desktop (≥640px) */}
      <div className="hidden sm:block">
        <MenuButtons buttons={["Solution", "Team", "About"]} />
      </div>
    </div>
  );
}
