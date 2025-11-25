'use client'
import Image from 'next/image'
import NavBar from './NavBar'
import { useRouter } from 'next/navigation'
import { Lato } from 'next/font/google'

import { Montserrat } from 'next/font/google'
import { usePopup } from './PopUpProvider'

const lato = Lato({
    variable: '--font-lato',
    subsets: ['latin'],
    weight: ['100', '300', '400', '700', '900'],
})

const montserrat = Montserrat({
    variable: '--font-montserrat',
    subsets: ['latin'],
    weight: ['100', '300', '400', '700', '900'],
})

export default function HeroPage() {
    const { openPopup } = usePopup()
    const router = useRouter()
    return (
        <section className="relative w-full h-[1180px] lg:h-[916px]">
            <Image
                src="/OlexirPresentation.png"
                alt="Background with yellow oleogel"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 200px)"
            />
            <div className="absolute inset-0 mt-[201px]">
                <div className={`relative max-w-[1200px] pl-[5%]`}>
                    <span
                        className={`2xl:text-[87px] xl:text-[87px] lg:text-[67px] md:text-[57px] sm:text-[47px] xs:text-[38px] text-[28px] font-extrabold text-black text-left ${lato.className}  h-[212px]`}
                    >
                        Protein-empowered fat alternatives
                    </span>
                    <div className="relative mt-4">
                        <button
                            onClick={() => router.push(`/applications`)}
                            className={`w-[100px] h-[40px] xs:w-[150px] xs:h-[49px] sm:w-[179px] sm:h-[59px] rounded-xl relative cursor-pointer bg-black z-100 text-white text-[11px] sm:text-[14px] md:text-[18px] ${montserrat.className}`}
                        >
                            Discover More
                        </button>
                        <button
                            onClick={openPopup}
                            className={`w-[100px] h-[40px] xs:w-[150px] xs:h-[49px] sm:w-[179px] sm:h-[59px] rounded-xl relative cursor-pointer bg-[#D8AE02] z-100 text-black text-[11px] sm:text-[14px] md:text-[18px] ml-[10px] ${montserrat.className}`}
                        >
                            Partner With Us
                        </button>
                    </div>
                </div>
                <div
                    className={`flex flex-col items-center lg:flex-row lg:justify-center mt-18 gap-4 lg:gap-14 mx-6 xs:md:mx-3  lg:mx-5  ${lato.className}`}
                >
                    <div className="h-[192px] lg:h-[232px] w-full xs:max-w-[343px] md:max-w-[420px] 2xl:max-w-[560px] backdrop-blur-md bg-transparent z-10 rounded-2xl">
                        <div className="flex flex-col gap-4 lg:gap-0 pt-6 lg:pl-8 h-inherit">
                            <h3 className="text-[24px] lg:text-[40px] text-center font-bold lg:text-left">
                                Cosmetic
                            </h3>
                            <ul className="flex flex-col gap-2 lg:gap-0 text-[16px] lg:text-[24px]">
                                <li className="text-center lg:text-left">
                                    Vegan.
                                </li>
                                <li className="text-center lg:text-left">
                                    Silky.
                                </li>
                                <li className="text-center lg:text-left">
                                    Translucent.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="h-[192px] lg:h-[232px] w-full xs:max-w-[343px] md:max-w-[420px] 2xl:max-w-[560px] backdrop-blur-md bg-transparent z-10 rounded-2xl">
                        <div className="flex flex-col gap-4 lg:gap-0 pt-6 lg:pl-8">
                            <h3 className="text-[24px] lg:text-[40px] text-center font-bold lg:text-left">
                                Food
                            </h3>
                            <ul className="flex flex-col gap-2 lg:gap-0 text-[16px] lg:text-[24px]">
                                <li className="text-center lg:text-left">
                                    Sustainable.
                                </li>
                                <li className="text-center lg:text-left">
                                    Nourishing.
                                </li>
                                <li className="text-center lg:text-left">
                                    Structured.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="h-[192px] lg:h-[232px] w-full xs:max-w-[343px] md:max-w-[420px] 2xl:max-w-[560px] backdrop-blur-md bg-transparent z-10 rounded-2xl">
                        <div className="flex flex-col gap-4 lg:gap-0 pt-6 lg:pl-8">
                            <h3 className="text-[24px] lg:text-[40px] text-center font-bold lg:text-left">
                                Health
                            </h3>
                            <ul className="flex flex-col gap-2 lg:gap-0 text-[16px] lg:text-[24px]">
                                <li className="text-center lg:text-left">
                                    100% Natural.
                                </li>
                                <li className="text-center lg:text-left">
                                    Therapeutic.
                                </li>
                                <li className="text-center lg:text-left">
                                    Effective.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
