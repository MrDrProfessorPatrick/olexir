"use client";
import Image from "next/image";
import Link from "next/link";
import MenuButtons from "./MenuButtons";

export default function NavBar() {
  const buttons = ["Technology", "Applications", "About Us"];
  return (
    <div className="absolute w-full h-[100px]">
      <div className="absolute inset-0 flex items-center justify-center z-10 w-[180px] h-[60px] xs:w-[220px] xs:h-[70px] ml-[5%] mt-[2%]">
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
        <label className="hamburger-menu">
          <input
            type="checkbox"
            onChange={(e) => {
              if (e.target.checked) {
                document.body.classList.add("overflow-hidden");
              } else {
                document.body.classList.remove("overflow-hidden");
              }
            }}
          />
        </label>
        <div className="sidebar">
          <div className="">
            {buttons.map((button) => (
              <Link
                key={button}
                href={`/${button.toLowerCase()}`}
                className="block p-4 text-white text-4xl font-semibold border-b border-gray-700 hover:bg-gray-700 text-center"
              >
                {button}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop (≥640px) */}
      <div className="hidden md:block">
        <MenuButtons buttons={["Technology", "Applications", "About Us"]} />
      </div>
    </div>
  );
}
