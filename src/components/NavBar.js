'use client'
import Image from 'next/image'
import Link from 'next/link'
import MenuButtons from './MenuButtons'

export default function NavBar() {
    const buttons = ['Technology', 'Applications', 'About Us']

    return (
        <div className="absolute w-full h-[100px] bg-white/20 z-50 ">
            <div className="absolute inset-0 flex items-center justify-center z-10 w-[180px] h-[60px] xs:w-[180px] xs:h-[60px] lg:w-[220px] lg:h-[70px] ml-[5%] mt-4 z-1000">
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

            {/* Mobile (<640px) */}
            <div className="absolute block md:hidden z-999 right-10 top-5">
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
                    <div className="w-full h-full pt-60 backdrop-blur-md bg-black/30">
                        {buttons.map((button) => {
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
                                    className="block p-4 text-white text-4xl font-semibold hover:bg-gray-700 text-center"
                                >
                                    <span className="text-2xl">{button}</span>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Desktop (≥640px) */}
            <div className="hidden md:block">
                <MenuButtons
                    buttons={['Technology', 'Applications', 'About Us']}
                />
            </div>
        </div>
    )
}
