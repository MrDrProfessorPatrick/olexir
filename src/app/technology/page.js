"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedNumber from "@/components/AnimatedNumber";
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

  function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const checkSize = () => setIsMobile(window.innerWidth < 768); // md breakpoint
      checkSize();
      window.addEventListener("resize", checkSize);
      return () => window.removeEventListener("resize", checkSize);
    }, []);

    return isMobile;
  }

  function useIsTablet() {
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
      const checkSize = () => setIsTablet(window.innerWidth < 1024); // lg breakpoint
      checkSize();
      window.addEventListener("resize", checkSize);
      return () => window.removeEventListener("resize", checkSize);
    }, []);

    return isTablet;
  }

  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  console.log("isMobile", isMobile);

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
    <div className="bg-[url('/caruselBg.png')] bg-repeat-y bg-center bg-[length:100%_auto]">
      <BgVideo link={"/solutionVideo.mp4"} />
      <div className="absolute top-116 z-20 w-full flex justify-center">
        <h1
          className={`text-[24px] px-4 md:text-[32px] lg:text-[44px] xl:text-[56px] font-bold text-white text-center ${lato.className}`}
        >
          World needs efficient, healthy and sustainable fats
        </h1>
      </div>
      <div id="container">
        <div className="relative w-full px-4 md:px-10">
          <div className="pt-23 pb-15 w-[160px] ">
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
            className="flex w-[100%] rounded-md bg-white/10 backdrop-blur-[2px] before:content-[''] before:absolute before:inset-0 before:rounded-md before:border before:border-white/20"
          >
            <div className="flex flex-1 flex-col justify-center items-center py-8 lg:py-20 px-2 lg:px-5">
              <div
                className={`flex-0 text-[32px] md:text-[100px] font-light h-full text-white ${lato.className}`}
              >
                #1
              </div>
              <div
                className={`flex-1 px-0 lg:px-10 text-[12px] md:text-[20px] h-full `}
              >
                <p
                  className={`text-center font-light text-white ${lato.className}`}
                >
                  Heart attack and stroke, triggered by saturated fats, are the
                  #1 killer in the world
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col  justify-center items-center py-8 lg:py-20 px-2 lg:px-5">
              <div
                className={`flex-0 text-[32px] md:text-[100px] font-light h-full text-white ${lato.className}`}
              >
                <AnimatedNumber value="60" />
              </div>
              <div
                className={`flex-1 px-0 lg:px-10 text-[12px] md:text-[20px] h-full text-center font-light text-white ${lato.className}`}
              >
                <div>
                  Weight is a global burden:{" "}
                  <AnimatedNumber value="43" className="inline" /> overweight +{" "}
                  <AnimatedNumber value="16" className="inline" /> obesity in
                  2022
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-center items-center py-8 lg:py-20 px-2 lg:px-5">
              <div
                className={`flex-0  text-[32px] md:text-[100px] font-light h-full text-white ${lato.className}`}
              >
                <span>&lt;</span>{" "}
                <AnimatedNumber value="5" className="inline" />
              </div>
              <div
                className={`flex-1 px-0 lg:px-10 text-[12px] md:text-[20px] h-full text-center font-light text-white ${lato.className}`}
              >
                <p>
                  adsorption of lipophilic bioactives, e.g. curcumin and CBD, by
                  the human body
                </p>
              </div>
            </div>
          </div>
          {isMobile && (
            <DashedLine
              fromId="problemsTable"
              toId="fluidity"
              startFn="getLefttBottomCorner"
              endFn="getUpperCenter"
              curveDistX1={6}
              curveDistY1={1.8}
              curveDistX2={2.1}
              curveDistY2={2.4}
            />
          )}
          {!isMobile && (
            <DashedLine
              fromId="problemsTable"
              toId="fluidity"
              startFn="getLefttBottomCorner"
              endFn="getLeftUpperCorner"
              curveDistX1={10}
              curveDistY1={2}
              curveDistX2={10}
              curveDistY2={2}
              edgeShiftYEnd={50}
            />
          )}
          <div className="flex flex-col items-center md:flex-row pt-20">
            <div id="fluidity" className="relative flex-1">
              <Image
                src="/Leaking.png"
                width={600}
                height={600}
                alt="leaking"
              />
            </div>
            <div className="flex flex-2 flex-col pt-15 md:pt-0 pl-0 md:pl-8 lg:pl-25">
              <div className="flex justify-between w-[100%] md:max-w-[600px]">
                <span
                  className={`border-1 border-solid border-white rounded-full text-[10px] xs:text-[14px] md:text-[20px] lg:text-[24px] text-white px-4 py-2 ${inter.className}`}
                >
                  Fluidity
                </span>
                <span
                  className={`border-1 border-solid border-white rounded-full text-[10px] xs:text-[14px] md:text-[20px] lg:text-[24px] text-white px-4 py-2 ${inter.className}`}
                >
                  Instability
                </span>
                <span
                  className={`border-1 border-solid border-white rounded-full text-[10px] xs:text-[14px] md:text-[20px] lg:text-[24px] text-white px-4 py-2 ${inter.className}`}
                >
                  Non-absorbability
                </span>
              </div>
              <div>
                <p className="pb-10 pt-10 text-[18px] md:text-[20px] lg:text-[24px] font-semibold text-white text-justify">
                  Majority of cosmetics rely on fossil-derived or animal fats,
                  while edible fats are packed with trans and saturated lipids.
                </p>
                <p
                  id="plantOils"
                  className="text-[18px] md:text-[20px] lg:text-[24px] font-normal text-white text-justify"
                >
                  Plant oils, rich in healthy mono- and polyunsaturated fats,
                  offer a sustainable, bioactive alternative; however, their
                  fluidity and instability drastically limit their applications
                  in food, cosmetics, and pharmaceuticals.
                </p>
              </div>
            </div>
          </div>
          {/* Solution */}
          {!isMobile && (
            <div className="">
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
              <div
                id="solutionCurve"
                className="mt-5 md:mt-35 ml-15 w-1 h-1"
              ></div>
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

              <div className="pt-5 md:pt-30 pb-15 w-[160px]">
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
              <div className="flex justify-center md:justify-around">
                <div className="flex flex-col w-[65%] md:w-full md:flex-row items-center gap-10 md:gap-0 justify-around">
                  <span
                    id="solutionResult"
                    className={`hidden md:block w-full md:w-auto border-1 border-solid border-white rounded-full text-[18px] md:text-[14px] lg:text-[20px] text-white md:px-3 lg:px-10 py-4 text-center ${lato.className}`}
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
                    className={`hidden md:block w-full md:w-auto border-1 border-solid border-white rounded-full text-[18px] md:text-[14px] lg:text-[20px] text-white md:px-3 lg:px-10 py-4 text-center ${lato.className}`}
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
                    className={`hidden md:block w-full md:w-auto border-1 border-solid border-white rounded-full text-[18px] md:text-[14px] lg:text-[20px] text-white md:px-3 lg:px-10 py-4 text-center ${lato.className}`}
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
                    className={`hidden md:block w-full md:w-auto rounded-full text-[18px] md:text-[20px] lg:text-[20px] bg-[#D8AE02] px-10 py-4 text-center ${lato.className}`}
                  >
                    To solidity plant oils
                  </span>
                </div>
                <DashedLine
                  fromId="solidityPlant"
                  toId="solutionTable"
                  startFn="getRightMiddleEdge"
                  endFn="getRightMiddleEdge"
                  curveDistX1={1.9}
                  curveDistY1={2.101}
                  curveDistX2={1.9}
                  edgeShiftYEnd={-130}
                />
              </div>
            </div>
          )}
          {isMobile && (
            <div className="">
              <DashedLine
                fromId="plantOils"
                toId="solution"
                startFn="getBottomRightEdge"
                endFn="getRightMiddleEdge"
                curveDistX1={2}
                curveDistY1={1.9}
              />

              <div className="pt-5 md:pt-30 pb-15 w-[160px]">
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
                startFn="getLeftBottomCorner"
                endFn="getLefttMiddleEdge"
                curveDistX1={20}
                curveDistY1={2}
                curveDistX2={20}
                curveDistY2={1.99}
                edgeShiftXStart={2}
                edgeShiftYStart={-10}
              />

              <div className="flex justify-center md:justify-around">
                <div className="flex flex-col w-[65%] md:w-full md:flex-row items-center gap-10 md:gap-0 justify-around">
                  <span
                    id="solutionResult"
                    className={`w-full md:w-auto border-1 border-solid border-white rounded-full text-[18px] md:text-[14px] lg:text-[20px] text-white md:px-3 lg:px-10 py-4 text-center ${lato.className}`}
                  >
                    No toxic solvents
                  </span>
                  <DashedLine
                    fromId="solutionResult"
                    toId="noOilHeating"
                    startFn="getMiddleBottomEdge"
                    endFn="getUpperCenter"
                    curveIndex={2}
                    curveDist={2}
                  />
                  <span
                    id="noOilHeating"
                    className={`w-full md:w-auto border-1 border-solid border-white rounded-full text-[18px] md:text-[14px] lg:text-[20px] text-white md:px-3 lg:px-10 py-4 text-center ${lato.className}`}
                  >
                    No oil heating
                  </span>
                  <DashedLine
                    fromId="noOilHeating"
                    toId="proteinPower"
                    startFn="getMiddleBottomEdge"
                    endFn="getUpperCenter"
                    curveIndex={2}
                    curveDist={2}
                  />
                  <span
                    id="proteinPower"
                    className={`w-full md:w-auto border-1 border-solid border-white rounded-full text-[18px] md:text-[14px] lg:text-[20px] text-white md:px-3 lg:px-10 py-4 text-center ${lato.className}`}
                  >
                    Just protein power
                  </span>
                  <DashedLine
                    fromId="proteinPower"
                    toId="solidityPlant"
                    startFn="getMiddleBottomEdge"
                    endFn="getUpperCenter"
                    curveIndex={2}
                    curveDist={2}
                  />
                  <span
                    id="solidityPlant"
                    className={`w-full min-w-[300px] md:w-auto rounded-full text-[18px] md:text-[20px] lg:text-[20px] bg-[#D8AE02] px-10 py-4 text-center ${lato.className}`}
                  >
                    To solidity plant oils
                  </span>
                </div>

                <DashedLine
                  fromId="solidityPlant"
                  toId="solutionTable"
                  startFn="getRightMiddleEdge"
                  endFn="getUpperCenter"
                  curveDistX1={1.3}
                  curveDistY1={1.89999}
                  curveDistX2={2.8}
                  curveDistY2={2.06}
                />
              </div>
            </div>
          )}

          <div
            id="solutionTable"
            className="flex flex-col md:flex-row w-[100%] mt-20 py-10 rounded-md bg-white/10 backdrop-blur-[2px] before:content-[''] before:absolute before:inset-0 before:rounded-md before:border before:border-white/20"
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
                className={`px-10 mt-4 w-full text-[16px] sm:text-[22px] md:text-[18px] lg:text-[20px] text-center font-light text-white ${lato.className}`}
              >
                <p>
                  Exclusively based <br className="hidden md:inline" /> on
                  essential plant proteins
                </p>
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
                className={`px-10 mt-4 w-full text-[16px] sm:text-[22px] md:text-[18px] lg:text-[20px] text-center font-light text-white ${lato.className}`}
              >
                <p>
                  Naturally saved <br className="hidden md:inline" /> plant oil
                  riсhness
                </p>
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
                className={`px-10 mt-4 w-full text-[16px] sm:text-[22px] md:text-[18px] lg:text-[20px] text-center font-light text-white ${lato.className}`}
              >
                <p>
                  Tuneable consistency <br className="hidden md:inline" />{" "}
                  serving your needs
                </p>
              </div>
            </div>
          </div>

          <div className="flex mt-14 gap-5 lg:gap-22">
            <div className="flex flex-3 flex-col items-center">
              <div className="relative flex justify-start items-start">
                <Image
                  src="/Leacking2.png"
                  width={483}
                  height={505}
                  alt="Leacking2"
                />
              </div>

              <div
                id="leaking2Text"
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
                <Image
                  src="/blueMicroscope.png"
                  width={751}
                  height={505}
                  alt="blueMicroscope"
                />
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

          {!isMobile && (
            <>
              <DashedLine
                fromId="blueMicroscope"
                toId="sustainabilityCurve1"
                startFn="getBottomRightEdge"
                endFn="getCenter"
                curveDistX1={1.8}
                curveDistY1={1.9}
                curveDistX2={2}
                curveDistY2={1.9}
              />

              <div
                id="sustainabilityCurve1"
                className="absolute w-0 h-0 md:mt-[174px] lg:mt-[10%] xl:mt-[21vh] 2xl:mt-[18vh] right-[18vw]"
              ></div>

              <DashedLine
                fromId="sustainabilityCurve1"
                toId="sustainabilityCurve2"
                startFn="getLefttMiddleEdge"
                endFn="getCenter"
                curveDistX1={2}
                curveDistY1={2}
                curveDistX2={20}
                curveDistY2={2.0001}
              />

              <div
                id="sustainabilityCurve2"
                className="absolute w-0 h-0 mt-5 md:mt-[41vh] left-[22vw]"
              ></div>

              <DashedLine
                fromId="sustainabilityCurve2"
                toId="sustainability"
                startFn="getCenter"
                endFn="getLefttMiddleEdge"
                curveDistX1={2.2}
                curveDistY1={2}
                curveDistX2={2}
                curveDistY2={2}
              />

              <div
                className={`flex h-[20vh] md:h-[50vh] text-[40px] text-[#D8AE02] font-semibold ${lato.className}`}
              >
                <div className="flex-[1_16_auto]"></div>
                <div className="flex self-end flex-[1_0_auto]">
                  <h3 id="sustainability">Sustainability</h3>
                </div>
              </div>
              <div
                className={`mt-6 md:mt-16 text-[18px] md:text-[20px] lg:text-[24px] w-full font-light text-white ${lato.className}`}
              >
                Every Olexir oleogel is plant-protein based. To amplify
                sustainability, we also offer an upcycled feedstock route that
                recovers proteins from industrial side streams.
              </div>

              {!isTablet && (
                <div className="flex flex-col gap-18 md:gap-14 lg:flex-row justify-around mt-12">
                  <div
                    id="planProtein"
                    className={`flex flex-col items-center border-1 border-solid border-white rounded-full md:rounded-4xl text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] text-white px-1 lg:px-6 xl:px-8 2xl:px-12 py-4 ${inter.className}`}
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
                    className={`flex flex-col items-center border-1 border-solid border-white rounded-full md:rounded-4xl text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] text-white px-1 lg:px-6 xl:px-8 2xl:px-12 py-4 ${inter.className}`}
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
                    className={`flex flex-col items-center border-1 border-solid border-white rounded-full md:rounded-4xl text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] text-white px-1 lg:px-6 xl:px-8 2xl:px-12 py-4 ${inter.className}`}
                  >
                    <span>30–50% protein remains</span>
                    <span>underutilized in oilseed cakes </span>
                    <span>~30% lost in tofu production</span>
                  </div>
                </div>
              )}

              {isTablet && (
                <div className="flex flex-col gap-18 md:gap-14 lg:flex-row justify-around mt-12">
                  <div
                    id="planProtein"
                    className={`flex flex-col items-center border-1 border-solid border-white rounded-full md:rounded-4xl text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] text-white px-1 lg:px-6 xl:px-8 2xl:px-12 py-4 ${inter.className}`}
                  >
                    <span>Plant protein</span>
                    <span>generate ~90× lower</span>
                    <span>CO₂eq vs beef per 100 g protein</span>
                  </div>
                  <DashedLine
                    fromId="planProtein"
                    toId="secondPlanProtein"
                    startFn="getMiddleBottomEdge"
                    endFn="getUpperCenter"
                    curveDistX1={2}
                    curveDistY1={2}
                    curveDistX2={2}
                    curveDistY2={2}
                  />
                  <div
                    id="secondPlanProtein"
                    className={`flex flex-col items-center border-1 border-solid border-white rounded-full md:rounded-4xl text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] text-white px-1 lg:px-6 xl:px-8 2xl:px-12 py-4 ${inter.className}`}
                  >
                    <span>~10% of global CO₂</span>
                    <span>comes from</span>
                    <span>food loss & waste</span>
                  </div>
                  <DashedLine
                    fromId="secondPlanProtein"
                    toId="thirdPlanProtein"
                    startFn="getMiddleBottomEdge"
                    endFn="getUpperCenter"
                    curveDistX1={2}
                    curveDistY1={2}
                    curveDistX2={2}
                    curveDistY2={2}
                  />
                  <div
                    id="thirdPlanProtein"
                    className={`flex flex-col items-center border-1 border-solid border-white rounded-full md:rounded-4xl text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] text-white px-1 lg:px-6 xl:px-8 2xl:px-12 py-4 ${inter.className}`}
                  >
                    <span>30–50% protein remains</span>
                    <span>underutilized in oilseed cakes </span>
                    <span>~30% lost in tofu production</span>
                  </div>
                </div>
              )}
            </>
          )}

          {isMobile && (
            <>
              <DashedLine
                fromId="leaking2Text"
                toId="sustainability"
                startFn="getRightMiddleEdge"
                endFn="getRightMiddleEdge"
                curveDistX1={1.6}
                curveDistY1={2}
                curveDistX2={1.1}
                curveDistY2={2}
                edgeShiftYStart={60}
              />

              <div
                className={`flex h-[20vh] md:h-[50vh] text-[40px] text-[#D8AE02] font-semibold ${lato.className}`}
              >
                <div className="flex-[1_16_auto]"></div>
                <div className="flex self-end flex-[1_0_auto]">
                  <h3 id="sustainability">Sustainability</h3>
                </div>
              </div>
              <div
                className={`mt-6 md:mt-16 text-[18px] md:text-[20px] lg:text-[24px] w-full font-light text-white ${lato.className}`}
              >
                Every Olexir oleogel is plant-protein based. To amplify
                sustainability, we also offer an upcycled feedstock route that
                recovers proteins from industrial side streams.
              </div>

              <div className="flex flex-col gap-18 md:gap-14 lg:flex-row justify-around mt-12">
                <div
                  id="planProtein"
                  className={`flex flex-col items-center border-1 border-solid border-white rounded-full md:rounded-4xl text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] text-white px-1 lg:px-6 xl:px-8 2xl:px-12 py-4 ${inter.className}`}
                >
                  <span>Plant protein</span>
                  <span>generate ~90× lower</span>
                  <span>CO₂eq vs beef per 100 g protein</span>
                </div>
                <DashedLine
                  fromId="planProtein"
                  toId="secondPlanProtein"
                  startFn="getMiddleBottomEdge"
                  endFn="getUpperCenter"
                  curveDistX1={2}
                  curveDistY1={2}
                  curveDistX2={2}
                  curveDistY2={2}
                />
                <div
                  id="secondPlanProtein"
                  className={`flex flex-col items-center border-1 border-solid border-white rounded-full md:rounded-4xl text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] text-white px-1 lg:px-6 xl:px-8 2xl:px-12 py-4 ${inter.className}`}
                >
                  <span>~10% of global CO₂</span>
                  <span>comes from</span>
                  <span>food loss & waste</span>
                </div>
                <DashedLine
                  fromId="secondPlanProtein"
                  toId="thirdPlanProtein"
                  startFn="getMiddleBottomEdge"
                  endFn="getUpperCenter"
                  curveDistX1={2}
                  curveDistY1={2}
                  curveDistX2={2}
                  curveDistY2={2}
                />
                <div
                  id="thirdPlanProtein"
                  className={`flex flex-col items-center border-1 border-solid border-white rounded-full md:rounded-4xl text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] text-white px-1 lg:px-6 xl:px-8 2xl:px-12 py-4 ${inter.className}`}
                >
                  <span>30–50% protein remains</span>
                  <span>underutilized in oilseed cakes </span>
                  <span>~30% lost in tofu production</span>
                </div>
              </div>
            </>
          )}

          <div className="flex flex-col md:flex-row mt-20 gap-10 justify-between">
            <div className="flex flex-[1_1_0] flex-col items-center">
              <div className="flex relative">
                <Image
                  src="/sustainability1.png"
                  width={400}
                  height={400}
                  alt="sustainability"
                />
              </div>
              <div className="max-w-[400px] pt-4 md:pt-8">
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
            <div className="flex flex-[1_1_0] flex-col items-center">
              <div className="flex relative">
                <Image
                  src="/sustainability2.png"
                  width={400}
                  height={400}
                  alt="sustainability"
                />
              </div>
              <div className="max-w-[400px] pt-4 md:pt-8">
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
            <div className="flex flex-[1_1_0] flex-col items-center">
              <div className="flex relative">
                <Image
                  src="/sustainability3.png"
                  width={400}
                  height={400}
                  alt="sustainability3"
                />
              </div>
              <div className="max-w-[400px] pt-4 md:pt-8">
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

          <div className="flex relative flex-col justify-center mt-30">
            <div className="flex justify-center pb-10">
              <h2
                className={`text-[40px] text-white font-semibold ${lato.className}`}
              >
                FAQ
              </h2>
            </div>

            <div className="pb-20 min-h-[600px]">
              {FAQList.map((faqObj, i) => {
                const isExpanded = faqShownArr.includes(i);
                const isLast = i === FAQList.length - 1;

                return (
                  <motion.div
                    className={`flex flex-col px-7 py-7 rounded-md ${
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
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`relative overflow-hidden pt-5 text-[20px] text-white font-light ${lato.className}`}
                      >
                        {faqObj.a}
                      </motion.div>
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
