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
      <div className="absolute block md:hidden z-999 right-10 top-5">
        <GiHamburgerMenu size="3em" />
      </div>

      {/* Desktop (≥640px) */}
      <div className="hidden md:block">
        <MenuButtons buttons={["Technology", "Applications", "About Us"]} />
      </div>
    </div>
  );
}
