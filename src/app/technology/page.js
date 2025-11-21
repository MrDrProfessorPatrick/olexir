'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedNumber from '@/components/AnimatedNumber'
import Image from 'next/image'
import BgVideo from '@/components/BgVideo'
import DashedLine from '@/components/DashedLine'
import LineCircleLeft from '@/components/LineCircleLeft'
import LineCircleRight from '@/components/LineCircleRight'
import { useIsMobile, useIsTablet } from '@/hooks/useIsMobile'
import { Lato } from 'next/font/google'
import { Inter } from 'next/font/google'
import { FaPlus } from 'react-icons/fa6'
import { FaMinus } from 'react-icons/fa6'

const lato = Lato({
    variable: '--font-lato',
    subsets: ['latin'],
    weight: ['100', '300', '400', '700', '900'],
})

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
    weight: ['100', '300', '400', '700', '900'],
})

export default function Solution() {
    const [faqShownArr, setFaqInfo] = useState([])

    const isMobile = useIsMobile()
    const isTablet = useIsTablet()

    const FAQList = [
        {
            q: '1) What is saturated fat?',
            a: 'Saturated fats are fatty acids with no double bonds (fully “saturated” with hydrogen). They’re typically solid at room temperature (e.g., butter, tallow; coconut/palm; margarine). Their intake triggers elevated LDL and cardiovascular diseases.',
        },
        {
            q: '2) Why do we need polyunsaturated fats (PUFAs) in food-grade materials?',
            a: '(PUFAs) in food-grade materials? PUFAs have multiple double bonds and include essential fatty acids (LA, ALA) that the human body cannot produce and must obtain from the diet.',
        },
        {
            q: '3) What are protein hydrolysates?',
            a: 'Protein hydrolysates are proteins partially broken into peptides and amino acids. Their solubility and interfacial activity make them effective plant-derived building blocks for our protein-structured oleogels.',
        },
        {
            q: '4) What is an oleogel?',
            a: 'An oleogel is a material where liquid oil is immobilized inside a microscopic 3D network, so it behaves like a solid-like material. In our case, the network is built from plant proteins — delivering silky feel, tunable firmness, high oil loading, and protection of sensitive oils— without solvents or oil heating.',
        },
        {
            q: '5) What’s the advantage versus conventional structuring (waxes, hydrogenation, silicones/mineral oils)?',
            a: 'No hydrogenation or trans fats, no waxy/silicone feel, no mineral oils, cross-linkers, or heat/solvent steps. You get a high oil loading, predictable firmness, and gentle, scalable processing on standard equipment—a modern, plant-first way to achieve performance.',
        },
    ]

    return (
        <div className="bg-[url('/caruselBg.png')] bg-repeat-y bg-center bg-[length:100%_auto]">
            <BgVideo link={'/solutionVideo.mp4'} />
            <div className="absolute top-116 z-20 w-full flex justify-center">
                <h1
                    className={`text-[24px] px-4 md:text-[32px] lg:text-[44px] xl:text-[56px] font-bold text-white text-center ${lato.className}`}
                >
                    The world needs healthy, efficient and sustainable fats
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
                        className="flex w-[100%] max-h-[337px] rounded-md bg-white/10 backdrop-blur-[2px] before:content-[''] before:absolute before:inset-0 before:rounded-md before:border before:border-white/20"
                    >
                        <div className="flex flex-[1_1_0] flex-col justify-center items-center py-8 lg:py-20 px-2 lg:px-5 h-full">
                            <div
                                className={`text-[22px] md:text-[100px] font-light text-white leading-none ${lato.className}`}
                            >
                                #1
                            </div>
                            <div
                                className={`px-0 lg:px-10 text-[12px] sm:text-[16px] md:text-[20px] min-h-[60px] md:min-h-[80px] flex items-start`}
                            >
                                <p
                                    className={`text-center font-light text-white ${lato.className}`}
                                >
                                    cause of death is heart attack and stroke,
                                    triggered by trans/saturated fats
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-[1_1_0] flex-col justify-center items-center py-8 lg:py-20 px-2 lg:px-5 h-full">
                            <div
                                className={`text-[22px] md:text-[100px] font-light text-white leading-none ${lato.className}`}
                            >
                                <AnimatedNumber value="60" className="inline" />
                                %
                            </div>
                            <div
                                className={`px-0 lg:px-10 text-[12px] sm:text-[16px] md:text-[20px] min-h-[60px] md:min-h-[80px] flex items-start`}
                            >
                                <p
                                    className={`text-center font-light text-white ${lato.className}`}
                                >
                                    population suffering from overweight incl.
                                    <AnimatedNumber
                                        value="16"
                                        className="inline"
                                    />
                                    % living with obesity{' '}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-[1_1_0] flex-col justify-center items-center py-8 lg:py-20 px-2 lg:px-5 h-full">
                            <div
                                className={`text-[22px] md:text-[100px] font-light text-white leading-none ${lato.className}`}
                            >
                                <span>&lt;</span>{' '}
                                <AnimatedNumber value="5" className="inline" />%
                            </div>
                            <div
                                className={`px-0 lg:px-10 text-[12px] sm:text-[16px] md:text-[20px] min-h-[60px] md:min-h-[80px] flex items-start`}
                            >
                                <p
                                    className={`text-center font-light text-white ${lato.className}`}
                                >
                                    absorption of lipophilic bioactives by human
                                    body, e.g. curcumin, CBD
                                </p>
                            </div>
                        </div>
                    </div>

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
                            <div className="flex justify-between w-[100%] md:max-w-[600px] h-10">
                                <span
                                    className={`border-1 border-solid border-white/60 rounded-full text-[10px] xs:text-[14px] md:text-[20px] lg:text-[24px] text-white px-3 md:pt-1 pt-2 lg:pt-0 ${inter.className}`}
                                >
                                    Fluidity
                                </span>
                                <span
                                    className={`border-1 border-solid border-white/60 rounded-full text-[10px] xs:text-[14px] md:text-[20px] lg:text-[24px] text-white px-3 md:pt-1 pt-2 lg:pt-0 ${inter.className}`}
                                >
                                    Instability
                                </span>
                                <span
                                    className={`border-1 border-solid border-white/60 rounded-full text-[10px] xs:text-[14px] md:text-[20px] lg:text-[24px] text-white px-3 md:pt-1 pt-2 lg:pt-0 ${inter.className}`}
                                >
                                    Non-absorbability
                                </span>
                            </div>
                            <div>
                                <p className="pb-10 pt-10 text-[18px] md:text-[20px] lg:text-[24px] font-semibold text-white/63 text-justify">
                                    Majority of cosmetics rely on fossil-derived
                                    or animal fats, while edible fats are packed
                                    with trans and saturated lipids.
                                </p>
                                <p
                                    id="plantOils"
                                    className="text-[18px] md:text-[20px] lg:text-[24px] font-normal text-white/63 text-justify"
                                >
                                    Plant oils, rich in healthy mono- and
                                    polyunsaturated fats, offer a sustainable
                                    bioactive alternative. However, fluidity and
                                    instability of oils drastically limit their
                                    applications in food, cosmetics and
                                    pharmaceuticals.
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
                                className="mt-15 md:mt-35 ml-15 w-1 h-1"
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
                                <div className="flex flex-col w-[65%] md:w-full md:flex-row items-center gap-10 md:gap-0 justify-around h-10">
                                    <span
                                        id="solutionResult"
                                        className={`hidden md:block w-full md:w-auto border-1 border-solid border-white/60 rounded-full text-[18px] md:text-[14px] lg:text-[20px] text-white md:px-3 lg:px-8 py-3 text-center ${lato.className}`}
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
                                        className={`hidden md:block w-full md:w-auto border-1 border-solid border-white/60 rounded-full text-[18px] md:text-[14px] lg:text-[20px] text-white md:px-3 lg:px-8 py-3 text-center ${lato.className}`}
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
                                        className={`hidden md:block w-full md:w-auto border-1 border-solid border-white/60 rounded-full text-[18px] md:text-[14px] lg:text-[20px] text-white md:px-3 lg:px-8 py-3 text-center ${lato.className}`}
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
                                        className={`hidden md:block w-full md:w-auto rounded-full text-[18px] md:text-[20px] lg:text-[20px] bg-[#D8AE02] px-14 py-3 text-center ${lato.className}`}
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
                        className="flex flex-col md:flex-row w-full mt-20 rounded-md
               min-h-[337px]
             lg:py-6
             gap-[20px] md:gap-0
             md:bg-white/10 md:backdrop-blur-[2px] 
             md:before:content-[''] md:before:absolute md:before:inset-0 
             md:before:rounded-md md:before:border md:before:border-white/20"
                    >
                        {[
                            {
                                img: '/VectorLeave.png',
                                text: (
                                    <>
                                        Exclusively based{' '}
                                        <br className="hidden md:inline" /> on
                                        plant proteins
                                    </>
                                ),
                            },
                            {
                                img: '/VectorDiamond.png',
                                text: (
                                    <>
                                        Naturally preserved{' '}
                                        <br className="hidden md:inline" />{' '}
                                        plant oil richness
                                    </>
                                ),
                            },
                            {
                                img: '/VectorSwitchers.png',
                                text: (
                                    <>
                                        Tuneable consistency{' '}
                                        <br className="hidden md:inline" />{' '}
                                        serving your needs
                                    </>
                                ),
                            },
                        ].map(({ img, text }, i) => (
                            <div
                                key={i}
                                className="flex flex-[1_1_0] flex-col justify-center items-center py-15
             
                 bg-white/10 backdrop-blur-[2px] 
                 before:content-[''] before:absolute before:inset-0 
                 before:rounded-md before:border before:border-white/20 
                 md:bg-transparent md:backdrop-blur-none md:before:content-none"
                            >
                                <div
                                    className={`text-[100px] font-light text-white ${lato.className}`}
                                >
                                    <Image
                                        src={img}
                                        width={50}
                                        height={50}
                                        alt="icon"
                                    />
                                </div>
                                <div
                                    className={`px-10 mt-4 w-full text-[22px] sm:text-[22px] md:text-[18px] lg:text-[20px] 
                    text-center font-light text-white ${lato.className}`}
                                >
                                    <p>{text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row mt-14 gap-5 lg:gap-22">
                        {/* LEFT BLOCK */}
                        <div className="flex flex-2 flex-col items-center w-full md:w-auto">
                            <div className="relative flex justify-start items-start w-full md:w-auto">
                                <Image
                                    src="/Leacking2.png"
                                    width={483}
                                    height={505}
                                    alt="Leacking2"
                                    className="w-full h-auto md:w-[483px]"
                                />
                            </div>

                            <div
                                id="leaking2Text"
                                className={`mt-3 text-[16px] lg:text-[24px] w-full md:max-w-[483px] font-light text-white ${lato.className}`}
                            >
                                We know how to employ hydrolysed plant proteins
                                and turn liquid oils into stable oleogels –
                                without the need for heating, toxic solvents,
                                nickel or expensive cross-linkers and with as
                                high as minimum{' '}
                                <AnimatedNumber value="96" className="inline" />
                                % oil loading capacity.
                            </div>
                        </div>

                        {/* RIGHT BLOCK */}
                        <div className="flex flex-3 flex-col items-center w-full md:w-auto">
                            <div
                                id="blueMicroscope"
                                className="relative flex justify-start items-start w-full md:w-auto"
                            >
                                <Image
                                    src="/blueMicroscope.png"
                                    width={751}
                                    height={505}
                                    alt="blueMicroscope"
                                    className="w-full h-auto md:w-[751px]"
                                />
                            </div>

                            <div
                                className={`flex mt-3 text-[16px] lg:text-[24px] justify-start w-full max-w-[751px] font-light text-white ${lato.className}`}
                            >
                                <div
                                    id="blueMicroscopeText"
                                    className="w-full md:w-[88%]"
                                >
                                    We have unlocked the oleogelating capacity
                                    of proteins and introduced stability,
                                    firmness and a solid structure to liquid
                                    oils by protecting every tiny oil droplet
                                    from oxidation and UV.
                                </div>
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
                                curveDistX2={1.8}
                                curveDistY2={1.9}
                            />

                            <div
                                id="sustainabilityCurve1"
                                className="absolute w-0 h-0 md:mt-[110px] lg:mt-[5%] xl:mt-[16vh] 2xl:mt-[22vh] right-[25vw]"
                            ></div>

                            <DashedLine
                                fromId="sustainabilityCurve1"
                                toId="sustainabilityCurve2"
                                startFn="getLefttMiddleEdge"
                                endFn="getRightMiddleEdge"
                                curveDistX1={2}
                                curveDistY1={2}
                                curveDistX2={4}
                                curveDistY2={2.11}
                            />

                            <div
                                id="sustainabilityCurve2"
                                className="absolute w-2 h-2 mt-8 md:mt-[20vh] left-[17vw]"
                            ></div>

                            <DashedLine
                                fromId="sustainabilityCurve2"
                                toId="sustainability"
                                startFn="getRightMiddleEdge"
                                endFn="getLefttMiddleEdge"
                                curveDistX1={6}
                                curveDistY1={1.9}
                                curveDistX2={2}
                                curveDistY2={2}
                            />

                            <div
                                className={`flex h-[20vh] md:h-[35vh] text-[40px] text-[#D8AE02] font-semibold ${lato.className}`}
                            >
                                <div className="flex-[1_16_auto]"></div>
                                <div className="flex self-end flex-[1_0_auto]">
                                    <h3 id="sustainability">Sustainability</h3>
                                </div>
                            </div>
                            <div
                                className={`mt-6 md:mt-16 text-[18px] md:text-[20px] lg:text-[24px] w-full font-light text-white ${lato.className}`}
                            >
                                Every Olexir oleogel is plant protein based. To
                                amplify sustainability, we also offer an
                                upcycled feedstock route that recovers proteins
                                from industrial side streams.
                            </div>

                            {!isTablet && (
                                <div className="flex flex-col gap-18 md:gap-14 lg:flex-row justify-around mt-12">
                                    <div
                                        id="planProtein"
                                        className={`flex flex-col items-center justify-center border-1 border-solid border-white rounded-full md:rounded-4xl text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] text-white px-1 lg:px-6 xl:px-8 2xl:px-12 py-4 ${inter.className}`}
                                    >
                                        <span>Plant protein</span>
                                        <span>
                                            generate ~
                                            <AnimatedNumber
                                                value="90"
                                                className="inline"
                                            />
                                            times less
                                        </span>
                                        <span>CO₂eq than beef</span>
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
                                        className={`flex flex-col items-center text-center justify-center border-1 border-solid border-white rounded-full md:rounded-4xl text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] text-white px-1 lg:px-6 xl:px-8 2xl:px-12 py-4 ${inter.className}`}
                                    >
                                        <span>
                                            ~
                                            <AnimatedNumber
                                                value="10"
                                                className="inline"
                                            />
                                            % of global CO₂
                                        </span>
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
                                        className={`flex flex-col text-center items-center border-1 border-solid border-white rounded-full md:rounded-4xl text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] text-white px-1 lg:px-6 xl:px-8 2xl:px-12 py-4 ${inter.className}`}
                                    >
                                        <span>
                                            <AnimatedNumber
                                                value="30"
                                                className="inline"
                                            />
                                            –
                                            <AnimatedNumber
                                                value="50"
                                                className="inline"
                                            />
                                            % of protein remains
                                        </span>
                                        <span>
                                            underutilized in oilseed cakes;{' '}
                                        </span>
                                        <span>
                                            ~
                                            <AnimatedNumber
                                                value="30"
                                                className="inline"
                                            />
                                            % of soy protein are lost in <br />{' '}
                                            tofu production
                                        </span>
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
                                        <span>
                                            generate ~
                                            <AnimatedNumber
                                                value="90"
                                                className="inline"
                                            />
                                            × lower
                                        </span>
                                        <span>
                                            CO₂eq vs beef per 100 g protein
                                        </span>
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
                                        <span>
                                            ~
                                            <AnimatedNumber
                                                value="10"
                                                className="inline"
                                            />
                                            % of global CO₂
                                        </span>
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
                                        <span>
                                            <AnimatedNumber
                                                value="30"
                                                className="inline"
                                            />
                                            –
                                            <AnimatedNumber
                                                value="50"
                                                className="inline"
                                            />
                                            % protein remains
                                        </span>
                                        <span>
                                            underutilized in oilseed cakes{' '}
                                        </span>
                                        <span>
                                            ~
                                            <AnimatedNumber
                                                value="30"
                                                className="inline"
                                            />
                                            % lost in tofu production
                                        </span>
                                    </div>
                                </div>
                            )}
                        </>
                    )}

                    {isMobile && (
                        <>
                            <DashedLine
                                fromId="blueMicroscopeText"
                                toId="sustainability"
                                startFn="getRightMiddleEdge"
                                endFn="getUpperCenter"
                                curveDistX1={1.4}
                                curveDistY1={2}
                                curveDistX2={3}
                                curveDistY2={2}
                                edgeShiftXStart={-20}
                                edgeShiftYStart={40}
                            />

                            <div
                                className={`flex h-[15vh] md:h-[50vh] text-[32px] text-[#D8AE02] font-semibold ${lato.className}`}
                            >
                                <div className="flex-[1_16_auto]"></div>
                                <div className="flex self-end flex-[1_0_auto]">
                                    <h3 id="sustainability">Sustainability</h3>
                                </div>
                            </div>
                            <div
                                className={`mt-6 md:mt-16 text-[18px] md:text-[20px] lg:text-[24px] w-full font-light text-white ${lato.className}`}
                            >
                                Every Olexir oleogel is plant-protein based. To
                                amplify sustainability, we also offer an
                                upcycled feedstock route that recovers proteins
                                from industrial side streams.
                            </div>

                            <div className="flex flex-col gap-18 md:gap-14 lg:flex-row justify-around mt-12">
                                <div
                                    id="planProtein"
                                    className={`flex flex-col items-center border-1 border-solid border-white rounded-full md:rounded-4xl text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] text-white px-1 lg:px-6 xl:px-8 2xl:px-12 py-4 ${inter.className}`}
                                >
                                    <span>Plant protein</span>
                                    <span>
                                        generate ~
                                        <AnimatedNumber
                                            value="90"
                                            className="inline"
                                        />
                                        × lower
                                    </span>
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
                                    <span>
                                        ~
                                        <AnimatedNumber
                                            value="10"
                                            className="inline"
                                        />
                                        % of global CO₂
                                    </span>
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
                                    <span>
                                        <AnimatedNumber
                                            value="30"
                                            className="inline"
                                        />
                                        –
                                        <AnimatedNumber
                                            value="50"
                                            className="inline"
                                        />
                                        % protein remains
                                    </span>
                                    <span>underutilized in oilseed cakes </span>
                                    <span>
                                        ~
                                        <AnimatedNumber
                                            value="30"
                                            className="inline"
                                        />
                                        % lost in tofu production
                                    </span>
                                </div>
                            </div>
                        </>
                    )}
                    {/* <LineCircleLeft top={310} /> */}

                    <div className="flex relative flex-col md:flex-row mt-20 gap-10 justify-between">
                        {!isTablet && (
                            <LineCircleRight
                                top={30}
                                width={30}
                                leftEdge={-40}
                            />
                        )}
                        {!isTablet && (
                            <LineCircleLeft
                                top={30}
                                width={30}
                                rightEdge={-40}
                            />
                        )}
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
                                    Field-grown protein sources are used for our
                                    fully plant-based oleogels.
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
                                    Oilseed cakes and protein-rich by-products
                                    can be used by our technology.
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
                                    Upcycled food/cosmetic grade protein
                                    concentrates are available for oleogelation.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex relative flex-col justify-center mt-20">
                        <div className="flex justify-center pb-10">
                            <h2
                                className={`text-[40px] text-white font-semibold ${lato.className}`}
                            >
                                FAQ
                            </h2>
                        </div>

                        <div className="pb-20 min-h-[600px]">
                            {FAQList.map((faqObj, i) => {
                                const isExpanded = faqShownArr.includes(i)
                                const isLast = i === FAQList.length - 1

                                return (
                                    <motion.div
                                        className={`flex flex-col px-7 py-7 rounded-md ${
                                            isExpanded
                                                ? 'bg-[#4f430f]'
                                                : !isLast
                                                ? 'border-b border-white pb-5 rounded-none'
                                                : ''
                                        }`}
                                        key={faqObj.q}
                                        layout
                                        transition={{
                                            duration: 0.2,
                                            ease: 'easeInOut',
                                        }}
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
                                                        let filtered =
                                                            faqShownArr.filter(
                                                                (n) => n !== i
                                                            )
                                                        setFaqInfo(filtered)
                                                        return
                                                    }
                                                    setFaqInfo((prev) => [
                                                        ...prev,
                                                        i,
                                                    ])
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
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
