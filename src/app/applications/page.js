import Image from "next/image";

import BgVideo from "@/components/BgVideo";
import PageInDevelopmentPlaceholder from "@/components/PageInDevelopmentPlaceholder";
import { Lato } from "next/font/google";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function Applications() {
  return (
    <div className="bg-[url('/ApplicationBg.png')] bg-repeat-y bg-center bg-[length:100%_auto]">
      <section className="relative w-full h-[397px] md:h-[496px] lg:h-[696px]">
        <Image
          src="/Application_1_gelAndFlower.png"
          alt="Image showing gel and flower"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 200px)"
        />
      </section>
      <section>
        <div className="flex center justify-center pl-8 pr-8 lg:pl-35 lg:pr-35 pt-15 pb-15">
          <p
            className={`text-white text-[22px] lg:text-[32px] text-center ${lato.variable}`}
          >
            By structuring natural oils into solid, functional and stable forms,
            we provide solutions that are healthier, more sustainable and
            scientifically advanced
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-5 justify-between pt-17 pb-20 pl-5 pr-5 lg:pl-16 lg:pr-16">
          <div>
            <h1
              className={`text-white text-[26px] lg:text-[48px] font-medium ${lato.variable}`}
            >
              COSMETICS
            </h1>
          </div>
          <div>
            <p
              className={`max-w-[650px] text-white ${lato.variable} text-[16px] lg:text-[24px] text-justify`}
            >
              At Olexir, we transform plant oils into new solid textures using
              the natural structuring power of proteins. Our oleogels create
              translucent, silky and stable formulations that redefine how oils
              perform in beauty care.
            </p>
          </div>
        </div>
      </section>
      <BgVideo link="/ApplicationFirstVideo.mp4" height="534px" />
    </div>
  );
}
