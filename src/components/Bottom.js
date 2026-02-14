'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Lato } from 'next/font/google'
import { usePopup } from './PopUpProvider'

const lato = Lato({
    variable: '--font-lato',
    subsets: ['latin'],
    weight: ['100', '300', '400', '700', '900'],
})

export default function Bottom() {
    const { openPopup } = usePopup()
    return (
        <div
            className={`grid md:grid-rows-none md:grid-cols-[1fr_1.5fr_1fr] 
              md:justify-center bg-[#D8AE02] w-full h-[550px] md:h-[268px] 
               ${lato.className}`}
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
                            className={`flex flex-row gap-4 ${lato.className}`}
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
                    <div className={`flex flex-start justify-center `}>
                        <span
                            className={`text-[16px] lg:text-[22px] font-semibold ${lato.className}`}
                        >
                            Reach out to collaborate or learn more.
                        </span>
                    </div>
                    <div
                        className={`flex justify-center md:justify-start w-full text-[24px] font-semibold pt-2 ${lato.className}`}
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
                    className={`flex md:hidden flex-col items-center justify-center ${lato.className}`}
                >
                    <div className="flex flex-3 items-center justify-center block md:hidden pt-5 pb-5">
                        <Link
                            href="https://entrepreneurship.ethz.ch/startups-spinoffs/find-offers-programs-space-grants-for-entrepreneurs/pioneer-fellowship/current-fellows/20241/olexir.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/ethZurih.png"
                                alt="ETH Zurich logo"
                                width={200}
                                height={200}
                                className="relative cursor-pointer"
                                priority
                                sizes="(max-width: 200px)"
                            />
                        </Link>
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
                    className={`flex flex-col h-full justify-between md:items-end text-[16px] pr-8 md:pb-5 pl-6 ${lato.className}`}
                >
                    <div className="flex flex-3 items-center justify-center md:pt-16 hidden md:block">
                        <Link
                            href="https://entrepreneurship.ethz.ch/startups-spinoffs/find-offers-programs-space-grants-for-entrepreneurs/pioneer-fellowship/current-fellows/20241/olexir.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/ethZurih.png"
                                alt="ETH Zurich logo"
                                width={200}
                                height={200}
                                className="relative cursor-pointer"
                                priority
                                sizes="(max-width: 200px)"
                            />
                        </Link>
                    </div>
                    <div className="flex flex-1 items-end">
                        <span>© 2025 by Olexir</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
