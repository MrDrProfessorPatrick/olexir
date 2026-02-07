'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function MenuButtons({ buttons }) {
    const path = usePathname()

    const getActiveButton = () => {
        if (path === '/technology') return 'Technology'
        if (path === '/applications') return 'Applications'
        if (path === '/aboutus') return 'About Us'
        return ''
    }

    const activeButton = getActiveButton()

    return (
        <div className="absolute flex gap-10 right-1 2xl:right-10 xl:right-10 lg:right-10 md:right-10 sm:gap-2 sm:right-1 mt-6 pb-4 pt-4 flex flex-row items-center">
            {buttons.map((button) => {
                const isActive = activeButton === button
                const href = `/${button.replace(/\s+/g, '').toLowerCase()}`
                return (
                    <Link key={button} href={href} prefetch={true}>
                        <button
                            type="button"
                            key={button}
                            className={`px-2 lg:px-6 py-2 lg:py-4 rounded-xl relative cursor-pointer z-[1000] ${
                                isActive ? 'bg-[#D8AE02]' : 'bg-[#231428]'
                            }`}
                        >
                            <span
                                className={`tracking-wide px-4 block relative linear-mask lg:text-xl ${
                                    isActive
                                        ? 'text-black'
                                        : 'text-neutral-100 '
                                }`}
                            >
                                {button}
                            </span>

                            <span className="pointer-events-none block absolute inset-0 rounded-xl p-px linear-overlay" />
                        </button>
                    </Link>
                )
            })}
        </div>
    )
}
