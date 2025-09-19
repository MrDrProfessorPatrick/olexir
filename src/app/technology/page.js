import BgVideo from "@/components/BgVideo";
import DashedLine from "@/components/DashedLine";
import { Lato } from "next/font/google";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function Solution() {
  return (
    <div className="h-[1920px] bg-zinc-900">
      <BgVideo link={"/solutionVideo.mp4"} />
      <div className="absolute top-116  z-20 w-full flex justify-center">
        <h1 className={`text-[56px] font-bold text-white ${lato.className}`}>
          World needs efficient, healthy and sustainable fats
        </h1>
      </div>
      <div id="container">
        <div className="relative w-full px-10">
          <div className="pt-23 pb-15 w-[160px]">
            <h3
              id="problem"
              className={`text-[40px] text-[#D8AE02] font-semibold ${lato.className}`}
            >
              Problem
            </h3>
          </div>
          <DashedLine fromId="problem" toId="problemsTable" />

          <div
            id="problemsTable"
            className="flex w-[100%] bg-zinc-700 rounded-md"
          >
            <div className="flex flex-1 flex-col justify-center items-center py-20 px-10">
              <div
                className={`text-[100px] font-light text-white ${lato.className}`}
              >
                #1
              </div>
              <div
                className={`px-10 text-[20px] text-center font-light text-white ${lato.className}`}
              >
                <p>
                  Heart attack and stroke, triggered by saturated fats, are the
                  #1 killer in the world
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-center items-center py-20 px-10">
              <div
                className={`text-[100px] font-light text-white ${lato.className}`}
              >
                60%
              </div>
              <div
                className={`px-10 text-[20px] text-center font-light text-white ${lato.className}`}
              >
                <p>
                  Weight is a global burden: 43% overweight + 16% obesity in
                  2022
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-center items-center py-20 px-10">
              <div
                className={`text-[100px] font-light text-white ${lato.className}`}
              >
                5%
              </div>
              <div
                className={`px-10 text-[20px] text-center font-light text-white ${lato.className}`}
              >
                <p>
                  adsorption of lipophilic bioactives, e.g. curcumin and CBD, by
                  the human body
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
