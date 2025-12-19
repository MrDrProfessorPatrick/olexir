'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Montserrat } from 'next/font/google'
import { usePopup } from './PopUpProvider'

const montserrat = Montserrat({
    variable: '--font-montserrat',
    subsets: ['latin'],
    weight: ['100', '300', '400', '700', '900'],
})

export default function Bottom() {
    const { openPopup } = usePopup()
    return (
        <div
            className={`grid md:grid-rows-none md:grid-cols-[1fr_1.5fr_1fr] 
              md:justify-center bg-[#D8AE02] w-full h-[550px] md:h-[268px] 
               ${montserrat.variable}`}
        >
            <div className="flex items-center justify-center md:justify-start md:ml-16 ">
                <div className="flex flex-col justify-center items-center h-full md:pt-10">
                    <div className="relative w-[220px] h-[70px] ">
                        <Image
                            src="/OlexirLogoBlackDiomondUnderI2.png"
                            alt="logo"
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 200px)"
                        />
                    </div>
                    <div className="flex flex-2 items-end hidden md:flex justify-center text-[12px] lg:text-[14px] pb-4">
                        <div
                            className={`flex flex-row gap-4 ${montserrat.variable}`}
                        >
                            <Link href="/termsandconditions">
                                Terms & Conditions
                            </Link>
                            <Link href="/privacypolicy">Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center md:pl-8">
                <div className="flex flex-col justify-center items-center ">
                    <div
                        className={`flex flex-start justify-center text-[16px] lg:text-[22px] font-semibold ${montserrat.variable}`}
                    >
                        <span>Reach out to collaborate or learn more.</span>
                    </div>
                    <div
                        className={`flex justify-center md:justify-start w-full text-[24px] font-semibold pt-2 ${montserrat.variable}`}
                    >
                        <span>info@olexir.ch</span>
                    </div>
                    <div className="flex flex-col items-center md:items-start w-full pt-2">
                        <button
                            onClick={openPopup}
                            className="max-w-[200px] text-[16px] text-white px-3 py-1 font-semibold bg-black rounded-md"
                        >
                            Let’s Connect 📩
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-4 flex-col justify-around md:justify-center w-full">
                <div
                    className={`flex md:hidden flex-col items-center justify-center ${montserrat.variable}`}
                >
                    <div className="flex flex-3 items-center justify-center block md:hidden pt-5 pb-5">
                        <Image
                            src="/ethZurih.png"
                            alt="ETH Zurih logo"
                            width={200}
                            height={200}
                            className="relative"
                            priority
                            sizes="(max-width: 200px)"
                        />
                    </div>
                    <div className="flex items-center justify-between gap-4 pb-2">
                        <Link href="/termsandconditions">
                            Terms & Conditions
                        </Link>
                    </div>
                    <div>
                        <Link href="/privacypolicy">Privacy Policy</Link>
                    </div>
                </div>
                <div
                    className={`flex flex-col h-full justify-between md:items-end text-[16px] pr-8 md:pb-5 pl-6 ${montserrat.variable}`}
                >
                    <div className="flex flex-3 items-center justify-center md:pt-16 hidden md:block">
                        <Image
                            src="/ethZurih.png"
                            alt="ETH Zurih logo"
                            width={200}
                            height={200}
                            className="relative"
                            priority
                            sizes="(max-width: 200px)"
                        />
                    </div>
                    <div className="flex flex-1 items-end">
                        <span>© 2025 by Olexir</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
