import Image from "next/image";
import BgVideo from "@/components/BgVideo";
import DashedLine from "@/components/DashedLine";
import { Lato } from "next/font/google";
import { Inter } from "next/font/google";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function Solution() {
  return (
    <div className="h-[4920px] bg-zinc-900">
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
          <DashedLine
            fromId="problem"
            toId="problemsTable"
            startFn="getRightMiddleEdge"
            endFn="getEndUpperRightEdge"
            curveIndex={-155}
            curveDist={1.111}
          />
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
          <div className="flex pt-20">
            <div id="fluidity" className="min-w-[400px]">
              <Image
                src="/Leaking.png"
                width={600}
                height={600}
                alt="leaking"
              />
            </div>
            <div className="flex flex-col pl-25">
              <div className="flex justify-between max-w-[600px]">
                <span
                  className={`border-1 border-solid border-white rounded-full text-[24px] text-white px-4 py-2 ${inter.className}`}
                >
                  Fluidity
                </span>
                <span
                  className={`border-1 border-solid border-white rounded-full text-[24px] text-white px-4 py-2 ${inter.className}`}
                >
                  Instability
                </span>
                <span
                  className={`border-1 border-solid border-white rounded-full text-[24px] text-white px-4 py-2 ${inter.className}`}
                >
                  Non-absorbability
                </span>
              </div>
              <div>
                <p className="pb-10 pt-10 text-[24px] text-white">
                  Majority of cosmetics rely on fossil-derived or animal fats,
                  while edible fats are packed with trans and saturated lipids.
                </p>
                <p className="text-[24px] text-white">
                  Plant oils, rich in healthy mono- and polyunsaturated fats,
                  offer a sustainable, bioactive alternative; however, their
                  fluidity and instability drastically limit their applications
                  in food, cosmetics, and pharmaceuticals.
                </p>
              </div>
            </div>
          </div>
          {/* Solution */}
          <div>
            <DashedLine
              fromId="fluidity"
              toId="solutionCurve"
              startFn="getMiddleBottomEdge"
              endFn="getRightMiddleEdge"
              curveIndex={15}
              curveDist={2}
            />
            <div id="solutionCurve" className="mt-10 ml-15 w-3 h-3"></div>
            <DashedLine
              fromId="solutionCurve"
              toId="solution"
              startFn="getMiddleBottomEdge"
              endFn="getUpperCenter"
              curveIndex={-40}
              curveDist={2}
            />

            <div className="pt-25 pb-15 w-[160px]">
              <h3
                id="solution"
                className={`text-[40px] text-[#D8AE02] font-semibold ${lato.className}`}
              >
                Solution
              </h3>
            </div>

            <DashedLine
              fromId="solution"
              toId="solutionResult"
              startFn="getMiddleBottomEdge"
              endFn="getLefttMiddleEdge"
              curveIndex={-40}
              curveDist={1.888}
            />

            <div className="flex justify-around">
              <span
                id="solutionResult"
                className={`border-1 border-solid border-white rounded-full text-[24px] text-white px-10 py-4 ${inter.className}`}
              >
                No toxic solvents
              </span>
              <DashedLine
                fromId="solutionResult"
                toId="noOilHeating"
                startFn="getRightMiddleEdge"
                endFn="getLefttMiddleEdge"
                curveIndex={2}
                curveDist={2}
              />
              <span
                id="noOilHeating"
                className={`border-1 border-solid border-white rounded-full text-[24px] text-white px-10 py-4 ${inter.className}`}
              >
                No oil heating
              </span>
              <DashedLine
                fromId="noOilHeating"
                toId="proteinPower"
                startFn="getRightMiddleEdge"
                endFn="getLefttMiddleEdge"
                curveIndex={2}
                curveDist={2}
              />
              <span
                id="proteinPower"
                className={`border-1 border-solid border-white rounded-full text-[24px] text-white px-10 py-4 ${inter.className}`}
              >
                Just protein power
              </span>
              <DashedLine
                fromId="proteinPower"
                toId="solidityPlant"
                startFn="getRightMiddleEdge"
                endFn="getLefttMiddleEdge"
                curveIndex={2}
                curveDist={2}
              />
              <span
                id="solidityPlant"
                className={`rounded-full text-[24px] bg-[#D8AE02] px-10 py-4 ${inter.className}`}
              >
                To solidity plant oils
              </span>
            </div>
          </div>
          <div
            id="solutionTable"
            className="flex w-[100%] bg-zinc-700 rounded-md mt-20"
          >
            <div className="flex flex-1 flex-col justify-center items-center py-20 px-10">
              <div
                className={`text-[100px] font-light text-white ${lato.className}`}
              >
                <Image
                  src="/VectorLeave.png"
                  width={50}
                  height={50}
                  alt="vectorLeave"
                />
              </div>
              <div
                className={`px-10 mt-4 w-80 text-[20px] text-center font-light text-white ${lato.className}`}
              >
                <p>Exclusively based on essential plant proteins</p>
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-center items-center py-20 px-10">
              <div
                className={`text-[100px] font-light text-white ${lato.className}`}
              >
                <Image
                  src="/VectorDiamond.png"
                  width={50}
                  height={50}
                  alt="vectorDiamond"
                />
              </div>
              <div
                className={`px-10 mt-4 w-80 text-[20px] text-center font-light text-white ${lato.className}`}
              >
                <p>Naturally saved plant oil riсhness</p>
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-center items-center py-20 px-10">
              <div
                className={`text-[100px] font-light text-white ${lato.className}`}
              >
                <Image
                  src="/VectorSwitchers.png"
                  width={50}
                  height={50}
                  alt="vectorDiamond"
                />
              </div>
              <div
                className={`px-10 mt-4 w-80 text-[20px] text-center font-light text-white ${lato.className}`}
              >
                <p>Tuneable consistency serving your needs</p>
              </div>
            </div>
          </div>

          <div className="flex mt-14 justify-around">
            <div className="flex flex-col">
              <Image
                src="/Leacking2.png"
                width={490}
                height={505}
                alt="Leacking2"
              />
              <div
                className={`mt-3 text-[24px] w-[490px] text-center font-light text-white ${lato.className}`}
              >
                We know how to employ hydrolysed plant proteins and turn liquid
                oils into stable oleogels at high oil concentrations without the
                need for heating, toxic solvents, nickel or expensive
                cross-linkers.
              </div>
            </div>
            <div className="flex flex-col justify-start items-start">
              <div className="flex justify-start items-start">
                <Image
                  src="/blueMicroscope.png"
                  width={751}
                  height={505}
                  alt="blueMicroscope"
                />
              </div>
              <div
                className={`mt-3 text-[24px] w-[751px] text-center font-light text-white ${lato.className}`}
              >
                By unlocking the protein oleogelating capacity, we intoduce
                stability, firmness, and a solid structure to liquid oils,
                protecting every tiny oily droplet from oxidation and UV to
                serve the diverse needs of industries that touch every aspect of
                life.
              </div>
            </div>
          </div>
          <div
            id="sustainability"
            className={`pt-70 pl-160 text-[40px] text-[#D8AE02] font-semibold ${lato.className}`}
          >
            Sustainability
          </div>
          <div
            className={`mt-8 text-[24px] w-full font-light text-white ${lato.className}`}
          >
            Every Olexir oleogel is plant-protein based. To amplify
            sustainability, we also offer an upcycled feedstock route that
            recovers proteins from industrial side streams.
          </div>
        </div>
      </div>
    </div>
  );
}
