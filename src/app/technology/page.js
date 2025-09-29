"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import BgVideo from "@/components/BgVideo";
import DashedLine from "@/components/DashedLine";
import Bottom from "@/components/Bottom";
import { Lato } from "next/font/google";
import { Inter } from "next/font/google";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

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
  const [faqShownArr, setFaqInfo] = useState([]);

  const FAQList = [
    {
      q: "1) What is saturated fat?",
      a: "Saturated fats are fatty acids with no double bonds (fully “saturated” with hydrogen). They’re typically solid at room temperature (e.g., butter, tallow; coconut/palm; margarine). Their intake triggers elevated LDL and cardiovascular diseases.",
    },
    {
      q: "2) Why do we need polyunsaturated fats (PUFAs) in food-grade materials?",
      a: "(PUFAs) in food-grade materials? PUFAs have multiple double bonds and include essential fatty acids (LA, ALA) that the human body cannot produce and must obtain from the diet.",
    },
    {
      q: "3) What are protein hydrolysates?",
      a: "Protein hydrolysates are proteins partially broken into peptides and amino acids. Their solubility and interfacial activity make them effective plant-derived building blocks for our protein-structured oleogels.",
    },
    {
      q: "4) What is an oleogel?",
      a: "An oleogel is a material where liquid oil is immobilized inside a microscopic 3D network, so it behaves like a solid-like material. In our case, the network is built from plant proteins — delivering silky feel, tunable firmness, high oil loading, and protection of sensitive oils— without solvents or oil heating.",
    },
    {
      q: "5) What’s the advantage versus conventional structuring (waxes, hydrogenation, silicones/mineral oils)?",
      a: "No hydrogenation or trans fats, no waxy/silicone feel, no mineral oils, cross-linkers, or heat/solvent steps. You get a high oil loading, predictable firmness, and gentle, scalable processing on standard equipment—a modern, plant-first way to achieve performance.",
    },
  ];

  return (
    <div className="bg-zinc-900">
      <BgVideo link={"/solutionVideo.mp4"} />
      <div className="absolute top-116  z-20 w-full flex justify-center">
        <h1
          className={`text-[24px] md:text-[32px] lg:text-[44px] xl:text-[56px] font-bold text-white ${lato.className}`}
        >
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
            curveDistX1={2.1}
            curveDistY1={2.4}
            curveDistX2={1.2}
            curveDistY2={2}
          />
          <div
            id="problemsTable"
            className="flex w-[100%] bg-zinc-700 rounded-md"
          >
            <div className="flex flex-1 flex-col justify-center items-center py-8 lg:py-20 px-5 lg:px-10">
              <div
                className={`text-[100px] font-light h-full text-white ${lato.className}`}
              >
                #1
              </div>
              <div
                className={`px-0 lg:px-10 text-[20px] h-full text-center font-light text-white ${lato.className}`}
              >
                <p>
                  Heart attack and stroke, triggered by saturated fats, are the
                  #1 killer in the world
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col  justify-center items-center py-8 lg:py-20 px-5 lg:px-10">
              <div
                className={`text-[100px] font-light h-full text-white ${lato.className}`}
              >
                60%
              </div>
              <div
                className={`px-0 lg:px-10 text-[20px] h-full text-center font-light text-white ${lato.className}`}
              >
                <p>
                  Weight is a global burden: 43% overweight + 16% obesity in
                  2022
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-center items-center py-8 lg:py-20 px-5 lg:px-10">
              <div
                className={`text-[100px] font-light h-full text-white ${lato.className}`}
              >
                5%
              </div>
              <div
                className={`px-0 lg:px-10 text-[20px] h-full text-center font-light text-white ${lato.className}`}
              >
                <p>
                  adsorption of lipophilic bioactives, e.g. curcumin and CBD, by
                  the human body
                </p>
              </div>
            </div>
          </div>
          <div className="flex pt-20">
            <div id="fluidity" className="relative flex-1">
              <Image
                src="/Leaking.png"
                width={600}
                height={600}
                alt="leaking"
              />
            </div>
            <div className="flex flex-2 flex-col pl-8 lg:pl-25">
              <div className="flex justify-between max-w-[600px]">
                <span
                  className={`border-1 border-solid border-white rounded-full text-[18px] md:text-[20px] lg:text-[24px] text-white px-4 py-2 ${inter.className}`}
                >
                  Fluidity
                </span>
                <span
                  className={`border-1 border-solid border-white rounded-full text-[18px] md:text-[20px] lg:text-[24px] text-white px-4 py-2 ${inter.className}`}
                >
                  Instability
                </span>
                <span
                  className={`border-1 border-solid border-white rounded-full text-[18px] md:text-[20px] lg:text-[24px] text-white px-4 py-2 ${inter.className}`}
                >
                  Non-absorbability
                </span>
              </div>
              <div>
                <p className="pb-10 pt-10 text-[18px] md:text-[20px] lg:text-[24px] font-semibold text-white">
                  Majority of cosmetics rely on fossil-derived or animal fats,
                  while edible fats are packed with trans and saturated lipids.
                </p>
                <p className="text-[18px] md:text-[20px] lg:text-[24px] font-normal text-white">
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
              endFn="getUpperCenter"
              curveDistX1={2}
              curveDistY1={1.9}
              curveDistX2={3}
              curveDistY2={2}
            />
            <div id="solutionCurve" className="mt-35 ml-15 w-1 h-1"></div>
            <DashedLine
              fromId="solutionCurve"
              toId="solution"
              startFn="getMiddleBottomEdge"
              endFn="getUpperCenter"
              curveDistX1={2}
              curveDistY1={2}
              curveDistX2={2}
              curveDistY2={2}
            />

            <div className="pt-30 pb-15 w-[160px]">
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
              curveDistX1={2}
              curveDistY1={2}
              curveDistX2={6}
              curveDistY2={2}
            />

            <div className="flex justify-around">
              <span
                id="solutionResult"
                className={`border-1 border-solid border-white rounded-full text-[18px] md:text-[14px] lg:text-[20px] text-white md:px-3 lg:px-10 py-4 ${lato.className}`}
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
                className={`border-1 border-solid border-white rounded-full text-[18px] md:text-[14px] lg:text-[20px] text-white md:px-3 lg:px-10 py-4 ${lato.className}`}
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
                className={`border-1 border-solid border-white rounded-full text-[18px] md:text-[14px] lg:text-[20px] text-white md:px-3 lg:px-10 py-4 ${lato.className}`}
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
                className={`rounded-full text-[18px] md:text-[20px] lg:text-[24px] bg-[#D8AE02] px-10 py-4 ${lato.className}`}
              >
                To solidity plant oils
              </span>
            </div>
          </div>
          <div
            id="solutionTable"
            className="flex w-[100%] bg-zinc-700 rounded-md mt-20 py-10"
          >
            <div className="flex flex-[1_1_0] flex-col justify-center items-center py-20">
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
                className={`px-10 mt-4 w-full text-[16px] md:text-[18px] lg:text-[20px] text-center font-light text-white ${lato.className}`}
              >
                <p>Exclusively based</p>
                <p>on essential plant proteins</p>
                
              </div>
            </div>
            <div className="flex flex-[1_1_0] flex-col justify-center items-center py-20">
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
                className={`px-10 mt-4 w-full text-[16px] md:text-[18px] lg:text-[20px] text-center font-light text-white ${lato.className}`}
              >
                <p>Naturally saved</p>
                <p>plant oil riсhness</p>
              </div>
            </div>
            <div className="flex flex-[1_1_0] flex-col justify-center items-center py-20">
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
                className={`px-10 mt-4 w-full text-[16px] md:text-[18px] lg:text-[20px] text-center font-light text-white ${lato.className}`}
              >
                <p>Tuneable consistency</p>
                <p>serving your needs</p>
              </div>
            </div>
          </div>

          <div className="flex mt-14 gap-5 lg:gap-22">
            <div className="flex flex-3 flex-col items-center">
              <div className="relative flex justify-start items-start">
                <Image src="/Leacking2.png" width={483} height={505} alt="Leacking2" />
              </div>

              <div
                className={`mt-3 text-[16px] lg:text-[24px] max-w-[483px] font-light text-white ${lato.className}`}
              >
                We know how to employ hydrolysed plant proteins and turn liquid
                oils into stable oleogels at high oil concentrations without the
                need for heating, toxic solvents, nickel or expensive
                cross-linkers.
              </div>
            </div>

            <div className="flex flex-5 flex-col items-center">
              <div
                id="blueMicroscope"
                className="relative flex justify-start items-start"
              >
                <Image src="/blueMicroscope.png" width={751} height={505} alt="blueMicroscope" />
              </div>
              <div
                className={`mt-3 text-[16px] lg:text-[24px] max-w-[751px] font-light text-white ${lato.className}`}
              >
                By unlocking the protein oleogelating capacity, we intoduce
                stability, firmness, and a solid structure to liquid oils,
                protecting every tiny oily droplet from oxidation and UV to
                serve the diverse needs of industries that touch every aspect of
                life.
              </div>
            </div>
          </div>
          <DashedLine
            fromId="blueMicroscope"
            toId="sustainabilityCurve1"
            startFn="getBottomRightEdge"
            endFn="getLefttMiddleEdge"
            curveDistX1={1.8}
            curveDistY1={1.9}
            curveDistX2={1.999999}
            curveDistY2={1.9}
          />

          <div
            id="sustainabilityCurve1"
            className="absolute w-1 h-1 mt-40 right-50"
          ></div>

          <DashedLine
            fromId="sustainabilityCurve1"
            toId="sustainabilityCurve2"
            startFn="getLefttMiddleEdge"
            endFn="getCenter"
            curveDistX1={2}
            curveDistY1={2}
            curveDistX2={20}
            curveDistY2={2.011}
          />

          <div
            id="sustainabilityCurve2"
            className="absolute w-2 h-2 mt-60 left-50 "
          ></div>

          <DashedLine
            fromId="sustainabilityCurve2"
            toId="sustainability"
            startFn="getCenter"
            endFn="getLefttMiddleEdge"
            curveDistX1={2.8}
            curveDistY1={2}
            curveDistX2={2}
            curveDistY2={2}
          />

          <div
            className={`flex h-[50vh] text-[40px] text-[#D8AE02] font-semibold ${lato.className}`}
          >
            <div className="flex-[1_16_auto]"></div>
            <div className="flex self-end flex-[1_0_auto]">
              <h3 id="sustainability">Sustainability</h3>
            </div>
          </div>
          <div
            className={`mt-16 text-[18px] md:text-[20px] lg:text-[24px] w-full font-light text-white ${lato.className}`}
          >
            Every Olexir oleogel is plant-protein based. To amplify
            sustainability, we also offer an upcycled feedstock route that
            recovers proteins from industrial side streams.
          </div>

          <div className="flex flex-col gap-14 lg:flex-row justify-around mt-12">
            <div
              id="planProtein"
              className={`flex flex-col items-center border-1 border-solid border-white rounded-4xl text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] text-white px-1 lg:px-6 xl:px-8 2xl:px-12 py-4 ${inter.className}`}
            >
              <span>Plant protein</span>
              <span>generate ~90× lower</span>
              <span>CO₂eq vs beef per 100 g protein</span>
            </div>
            <DashedLine
              fromId="planProtein"
              toId="secondPlanProtein"
              startFn="getRightMiddleEdge"
              endFn="getLefttMiddleEdge"
              curveDistX1={2}
              curveDistY1={2}
              curveDistX2={2}
              curveDistY2={2}
            />
            <div
              id="secondPlanProtein"
              className={`flex flex-col items-center border-1 border-solid border-white rounded-4xl text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] text-white px-1 lg:px-6 xl:px-8 2xl:px-12 py-4 ${inter.className}`}
            >
              <span>~10% of global CO₂</span>
              <span>comes from</span>
              <span>food loss & waste</span>
            </div>
            <DashedLine
              fromId="secondPlanProtein"
              toId="thirdPlanProtein"
              startFn="getRightMiddleEdge"
              endFn="getLefttMiddleEdge"
              curveDistX1={2}
              curveDistY1={2}
              curveDistX2={2}
              curveDistY2={2}
            />
            <div
              id="thirdPlanProtein"
              className={`flex flex-col items-center border-1 border-solid border-white rounded-4xl text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] text-white px-1 lg:px-6 xl:px-8 2xl:px-12 py-4 ${inter.className}`}
            >
              <span>30–50% protein remains</span>
              <span>underutilized in oilseed cakes </span>
              <span>~30% lost in tofu production</span>
            </div>
          </div>
          <div className="flex mt-20 gap-10 justify-between">
            <div className="flex flex-[1_1_0] flex-col w-[407px]">
              <div className="flex relative">
                <Image src="/sustainability1.png" width={400} height={400} alt="sustainability" />
              </div>
              <div>
                <h3
                  className={`text-[18px] lg:text-[32px] text-white font-semibold ${lato.className}`}
                >
                  Plant sources
                </h3>
                <span
                  className={`text-[16px] lg:text-[24px] text-white font-light ${lato.className}`}
                >
                  Field-grown pulses & oilseeds used for our plant-protein
                  matrices.
                </span>
              </div>
            </div>
            <div className="flex flex-[1_1_0] flex-col ">
              <div className="flex relative">
                <Image src="/sustainability2.png" width={400} height={400} alt="sustainability" />
              </div>
              <div>
                <h3
                  className={`text-[18px] lg:text-[32px] text-white font-semibold ${lato.className}`}
                >
                  Side-streams to upcycle
                </h3>
                <span
                  className={`text-[16px] lg:text-[24px] text-white font-light ${lato.className}`}
                >
                  Oilseed cakes and other co-products rich in proteins that
                  often bypass human use.
                </span>
              </div>
            </div>
            <div className="flex flex-[1_1_0] flex-col">
              <div className="flex relative">
                <Image src="/sustainability3.png" width={400} height={400} alt="sustainability3" />
              </div>
              <div>
                <h3
                  className={`text-[18px] lg:text-[32px] text-white font-semibold ${lato.className}`}
                >
                  Recovered proteins
                </h3>
                <span
                  className={`text-[16px] lg:text-[24px] text-white font-light ${lato.className}`}
                >
                  Refined, food/cosmetic-grade inputs ready for the same
                  oleogelation route.
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center mt-30">
            <div className="flex justify-center pb-10">
              <h2
                className={`text-[40px] text-white font-semibold ${lato.className}`}
              >
                FAQ
              </h2>
            </div>

            <div className="pb-20">
              {FAQList.map((faqObj, i) => {
                const isExpanded = faqShownArr.includes(i);
                const isLast = i === FAQList.length - 1;

                return (
                  <motion.div
                    className={`flex flex-col px-7 py-7 rounded-md       ${
                      isExpanded
                        ? "bg-[#4f430f]"
                        : !isLast
                        ? "border-b border-white pb-5 rounded-none"
                        : ""
                    }`}
                    key={faqObj.q}
                    layout
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    <div className="flex justify-between">
                      <h3
                        className={`text-[22px] text-white font-bold  ${lato.className}`}
                      >
                        {faqObj.q}
                      </h3>

                      <button
                        onClick={(e) => {
                          if (isExpanded) {
                            let filtered = faqShownArr.filter((n) => n !== i);
                            setFaqInfo(filtered);
                            return;
                          }
                          setFaqInfo((prev) => [...prev, i]);
                        }}
                        className="cursor-pointer"
                      >
                        {isExpanded ? (
                          <FaMinus color="white" />
                        ) : (
                          <FaPlus color="white" />
                        )}
                      </button>
                    </div>
                    {isExpanded && (
                      <div
                        className={`overflow-hidden pt-5 text-[20px] text-white font-light ${lato.className}`}
                      >
                        {faqObj.a}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Bottom />
    </div>
  );
}
