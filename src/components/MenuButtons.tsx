'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface MenuButtonsProps {
    buttons: string[]
}

export default function MenuButtons({ buttons } : MenuButtonsProps ) {
    const path = usePathname()

    // Better way to determine active button
    const getActiveButton = () => {
        if (path === '/technology') return 'Technology'
        if (path === '/applications') return 'Applications'
        if (path === '/aboutus') return 'About Us'
        return ''
    }

    const activeButton = getActiveButton()

    return (
        <div className="absolute flex gap-10 right-1 2xl:right-10 xl:right-10 lg:right-10 md:right-10 sm:gap-2 sm:right-1 mt-6 pb-4 pt-4 flex flex-row items-center">
            {buttons.map((button : string) => {
                const isActive = activeButton === button
                const href = `/${button.replace(/\s+/g, '').toLowerCase()}`
                return (
                    <Link key={button} href={href} prefetch={true}>
                        <motion.button
                            type="button"
                            key={button}
                            className={`px-2 lg:px-6 py-2 rounded-xl relative cursor-pointer z-[1000] ${
                                isActive ? 'bg-[#D8AE02]' : 'bg-[#231428]'
                            }`}
                        >
                            <motion.span
                                initial={{ '--x': '100%', scale: 1 }}
                                animate={{ '--x': '-100%' }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: 'loop',
                                    repeatDelay: 1,
                                    type: 'spring',
                                    stiffness: 20,
                                    damping: 15,
                                    mass: 2,
                                    scale: {
                                        type: 'spring',
                                        stiffness: 10,
                                        damping: 5,
                                        mass: 0.1,
                                    },
                                }}
                                className={`tracking-wide px-4 block relative linear-mask ${
                                    isActive
                                        ? 'text-black'
                                        : 'text-neutral-100 '
                                }`}
                            >
                                {button}
                            </motion.span>

                            <span className="pointer-events-none block absolute inset-0 rounded-xl p-px linear-overlay" />
                        </motion.button>
                    </Link>
                )
            })}
        </div>
    )
}
