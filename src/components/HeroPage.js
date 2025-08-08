import Image from "next/image";
import MenuButtons from "./MenuButtons";

export default function HeroPage() {
  return (
    <section className="relative w-full h-[80vh]">
      <div className="absolute inset-0 flex items-center justify-center z-10 w-[500px] h-[150px] 2xl:w-[500px] 2xl:h-[150px] xl:w-[450px] xl:h-[130px] lg:w-[400px] lg:h-[120px] md:w-[350px] md:h-[110px] sm:w-[300px] sm:h-[100px]">
        <Image
          src="/OlexirLogoBlackDiomondUnderI2.png"
          alt="logo"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 200px)"
        />
      </div>

      <Image
        src="/OlexirPresentation.png"
        alt="Background"
        fill
        className="object-cover animate-image-slideRight "
        priority
        sizes="(max-width: 200px)"
      />
      <div className="z-1000">
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
