'use client'
import { useEffect, useState } from 'react'
import { Lato } from 'next/font/google'
import { useIsMobile, useIsTablet } from '@/hooks/useIsMobile'
import DashedLine from './DashedLine'

const lato = Lato({
    variable: '--font-lato',
    subsets: ['latin'],
    weight: ['100', '300', '400', '700', '900'],
})

export default function RoundTabs({ tabText, lineColor }) {
    const isMobile = useIsMobile()

    const [hydrated, setHydrated] = useState(false)
    useEffect(() => setHydrated(true), [])

    return (
        <div className="flex justify-center md:justify-around">
            <div className="flex flex-col w-full sm:w-[65%] md:w-full md:flex-row items-center gap-10 md:gap-0 justify-around">
                {tabText &&
                    tabText.map((textObj, i) => (
                        <>
                            <span
                                id={textObj.id}
                                className={`wrap-break-word pl-4 pr-4 sm:w-full sm:pl-0 sm:pr-0 md:w-auto border-1 border-solid border-white rounded-full text-[18px] md:text-[14px] lg:text-[20px] text-white md:px-3  py-4 text-center ${lato.className}`}
                            >
                                {textObj.text}
                            </span>
                            {hydrated && i !== tabText.length - 1 && (
                                <DashedLine
                                    fromId={textObj.id}
                                    toId={tabText[i + 1].id}
                                    startFn={
                                        isMobile
                                            ? 'getMiddleBottomEdge'
                                            : 'getRightMiddleEdge'
                                    }
                                    endFn={
                                        isMobile
                                            ? 'getUpperCenter'
                                            : 'getLefttMiddleEdge'
                                    }
                                    curveIndex={2}
                                    curveDist={2}
                                    color={lineColor}
                                />
                            )}
                        </>
                    ))}
            </div>
        </div>
    )
}
