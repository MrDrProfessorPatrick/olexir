import Image from "next/image";

import DashedLine from "@/components/DashedLine";
import BgVideo from "@/components/BgVideo";
import RoundTabs from "@/components/RoundTabs";
import Carusel from "@/components/Carusel";
import { Lato } from "next/font/google";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function Applications() {
  const images = [
    {
      src: "/ApplicationCarusel1_1.webp",
      index: 0,
      text: "",
    },
    {
      src: "/ApplicationCarusel1_2.webp",
      index: 1,
      text: "",
    },
    {
      src: "/ApplicationCarusel1_3.webp",
      index: 2,
      text: "",
    },
  ];

  return (
    <div
      id="container"
      className="bg-[url('/ApplicationBg.png')] bg-repeat-y bg-center bg-[length:100%_auto]"
    >
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
            className={`text-white text-[22px] lg:text-[32px] text-center ${lato.className}`}
          >
            By structuring natural oils into solid, functional and stable forms,
            we provide solutions that are healthier, more sustainable and
            scientifically advanced
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-5 justify-between pt-17 pb-20 pl-5 pr-5 lg:pl-16 lg:pr-16">
          <div>
            <h1
              className={`text-white text-[26px] lg:text-[48px] font-medium ${lato.className}`}
            >
              COSMETICS
            </h1>
          </div>
          <div>
            <p
              className={`max-w-[650px] text-white ${lato.className} text-[16px] lg:text-[24px] text-justify`}
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

      <div
        className={`text-white pt-17 pb-20 pl-10 pr-5 lg:pl-16 lg:pr-16 ${lato.className}`}
      >
        <h2 className={`${lato.className} text-[32px] font-light`}>
          Why it matters
        </h2>
        <ul
          className={`${lato.className} list-disc marker:text-[#AB808D] text-[16px] md:text-[24px]`}
        >
          <li>
            <span className="text-[#AB808D]">Luxurious feel</span> – Non-greasy,
            fast-absorbing and silky smooth on skin.
          </li>
          <li>
            <span className="text-[#AB808D]">Vegan & cruelty-free</span> – 100%
            plant-based, no silicones, no mineral oils.
          </li>
          <li>
            <span className="text-[#AB808D]">Moisturising & protective</span> –
            Locks in hydration and enhances the performance of active
            ingredients.
          </li>
          <li>
            <span className="text-[#AB808D]">Clean label stability</span> –
            Stabilises sensitive plant oils (rich in PUFAs, antioxidants)
            against oxidation, prolonging shelf life naturally.
          </li>
          <li>
            <span className="text-[#AB808D]">Future-ready platform</span> –
            Carrier for a wide range of natural actives (e.g. vitamins,
            polyphenols), enabling next-generation cosmeceuticals.
          </li>
        </ul>
        <div className="mt-20 mb-16">
          <RoundTabs />
        </div>
      </div>
      <BgVideo link="/ApplicationVideo2.mp4" height="534px" />
      <Carusel images={images} isBigCarousel={false} />
      <div id="cosmeticLineContainer">
        <DashedLine
          fromId="cosmeticLineContainer"
          toId="cosmeticLineContainer"
          startFn="getLefttMiddleEdge"
          endFn="getRightMiddleEdge"
          curveDistX1={2}
          curveDistY1={2}
          curveDistX2={2}
          curveDistY2={2}
          color="#AB808D"
        />
      </div>
    </div>
  );
}
