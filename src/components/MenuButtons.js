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
        <div className="glass absolute flex gap-10 right-1 2xl:right-10 xl:right-10 lg:right-10 md:right-10 sm:gap-2 sm:right-1 mt-5 lg:mr-12 pb-3 pt-3 items-center shadow-xl/30">
            {buttons.map((button) => {
                const isActive = activeButton === button
                const href = `/${button.replace(/\s+/g, '').toLowerCase()}`
                return (
                    <Link key={button} href={href} prefetch={true}>
                        <button
                            type="button"
                            key={button}
                            className={`relative cursor-pointer z-[1000]`}
                        >
                            <span
                                className={`tracking-wide px-4 block relative linear-mask lg:text-xl font-bold ${
                                    isActive
                                        ? 'text-white [text-shadow:_0_6px_10px_rgba(255,220,0,1)]'
                                        : 'text-white'
                                }`}
                            >
                                {button}
                            </span>

                            <span className="pointer-events-none block absolute inset-0 p-px linear-overlay" />
                        </button>
                    </Link>
                )
            })}
        </div>
    )
}
