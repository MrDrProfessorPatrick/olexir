import BgVideo from "@/components/BgVideo";
import { Lato } from "next/font/google";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function Solution() {
  return (
    <>
      <div className="h-[620px] bg-grey">
        <BgVideo link={"/solutionVideo.mp4"} />
        <div className="absolute top-116  z-20 w-full flex justify-center">
          <h1 className={`text-[56px] font-bold text-white ${lato.className}`}>
            World needs efficient, healthy and sustainable fats
          </h1>
        </div>
        <div>
          <div className="relative w-full px-10">
            <div className="pt-20 pb-12 h-[115px]">
              <h3 className="">Problem</h3>
            </div>
            <div className="flex">
              <div>
                <div>#1</div>
                <div>
                  <p>
                    Heart attack and stroke, triggered by saturated fats, are
                    the #1 killer in the world
                  </p>
                </div>
              </div>
              <div>
                <div>60%</div>
                <div>
                  <span>
                    Weight is a global burden: 43% overweight + 16% obesity in
                    2022
                  </span>
                </div>
              </div>
              <div>
                <div>5%</div>
                <div>
                  <span>
                    adsorption of lipophilic bioactives, e.g. curcumin and CBD,
                    by the human body
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
