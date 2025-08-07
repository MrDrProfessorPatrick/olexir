import Image from "next/image";
import MenuButtons from "./MenuButtons";

export default function HeroPage() {
  return (
    <section className="relative w-full h-[80vh]">
      <Image
        src="/OlexirPresentation.png"
        alt="Background"
        fill
        className="object-cover animate-image-slideRight "
        priority
        sizes="(max-width: 200px)"
      />
      <div className="absolute right-15 mt-6 pb-4 pt-4 flex flex-row items-center z-1000">
        <MenuButtons buttons={["Home", "Technology", "Team", "About"]} />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="md:text-[37px] text-[17px] text-white text-center bg-black w-full animate-slideLeft">
          Versatile Platform for Lipid Engineering
        </div>
      </div>
    </section>
  );
}
