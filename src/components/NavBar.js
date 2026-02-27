'use client'
import Image from 'next/image'
import Link from 'next/link'
import MenuButtons from './MenuButtons'
import { Lato } from 'next/font/google'

const lato = Lato({
    variable: '--font-lato',
    subsets: ['latin'],
    weight: ['100', '300', '400', '700', '900'],
})

export default function NavBar() {
    const buttons = ['Technology', 'Applications', 'About Us']

    return (
        <>
            <div
                className={`absolute w-full h-[100px] backdrop-blur-xs  bg-black/20 z-50 ${lato.className}`}
            >
                <div className="absolute  inset-0 flex items-center justify-center z-10  w-[120px] h-[40px] xs:w-[120px] xs:h-[40px] md:w-[220px] md:h-[70px] ml-[5%] mt-6 md:mt-4 z-1000">
                    <Link
                        href="/"
                        className="absolute inset-0 z-20"
                        aria-label="Home"
                    >
                        <Image
                            src="/OlexirLogoBlackDiomondUnderI2.png"
                            alt="logo"
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 200px)"
                        />
                    </Link>
                </div>

                {/* Desktop (≥640px) */}
                <div className="hidden md:block">
                    <MenuButtons
                        buttons={['Technology', 'Applications', 'About Us']}
                    />
                </div>
            </div>

            {/* Mobile (<640px) */}
            <div className="absolute block md:hidden z-999 right-3 top-7">
                <label className="hamburger-menu">
                    <input
                        id="menu-toggle"
                        type="checkbox"
                        onChange={(e) => {
                            if (e.target.checked) {
                                document.body.classList.add('overflow-hidden')
                            } else {
                                document.body.classList.remove(
                                    'overflow-hidden'
                                )
                            }
                        }}
                    />
                </label>

                <div className="sidebar">
                    <div className="absolute inset-0 flex items-center justify-center z-10 w-[120px] h-[40px] xs:w-[120px] xs:h-[40px] lg:w-[220px] lg:h-[70px] ml-[5%] mt-6 z-1000">
                        <Link
                            href="/"
                            className="absolute inset-0 z-20"
                            aria-label="Home"
                        >
                            <Image
                                src="/OlexirLogoBlackDiomondUnderI2.png"
                                alt="logo"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 200px)"
                            />
                        </Link>
                    </div>
                    <div className="w-full h-full pt-60 backdrop-blur-md bg-black/30  ">
                        {buttons.map((button, index) => {
                            let href = `/${button
                                .replace(/\s+/g, '')
                                .toLowerCase()}`
                            return (
                                <Link
                                    key={button}
                                    href={href}
                                    onClick={() => {
                                        document.getElementById(
                                            'menu-toggle'
                                        ).checked = false
                                        document.body.classList.remove(
                                            'overflow-hidden'
                                        )
                                    }}
                                    className={`block w-[200px] mx-auto text-white mt-5 pb-6 font-extrabold text-center  ${
                                        index === buttons.length - 1
                                            ? ''
                                            : 'border-b-[1px] border-white'
                                    }`}
                                >
                                    <span className="text-[20px]">
                                        {button}
                                    </span>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
