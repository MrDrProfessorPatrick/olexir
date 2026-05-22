'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface DashedLineProps {
    fromId: string
    toId: string
    startFn:
        | 'getCenter'
        | 'getUpperCenter'
        | 'getLefttMiddleEdge'
        | 'getRightMiddleEdge'
        | 'getEndUpperRightEdge'
        | 'getMiddleBottomEdge'
        | 'getBottomRightEdge'
        | 'getLeftBottomCorner'
        | 'getLefttBottomCorner'
        | 'getLeftUpperCorner'
    endFn:
        | 'getCenter'
        | 'getUpperCenter'
        | 'getLefttMiddleEdge'
        | 'getRightMiddleEdge'
        | 'getEndUpperRightEdge'
        | 'getMiddleBottomEdge'
        | 'getBottomRightEdge'
        | 'getLeftBottomCorner'
        | 'getLefttBottomCorner'
        | 'getLeftUpperCorner'
    curveDistX1?: number
    curveDistY1?: number
    curveDistX2?: number
    curveDistY2?: number
    edgeShiftXStart?: number
    edgeShiftYStart?: number
    edgeShiftXEnd?: number
    edgeShiftYEnd?: number
    color?: string
}

function getCenter(
    el: HTMLElement,
    edgeShiftX: number,
    edgeShiftY: number,
    containerRect: DOMRect
) {
    const r = el.getBoundingClientRect()
    return {
        x: r.left + r.width / 2 - containerRect.left + edgeShiftX,
        y: r.top + r.height / 2 - containerRect.top + edgeShiftY,
    }
}

function getUpperCenter(
    el: HTMLElement,
    edgeShiftX: number,
    edgeShiftY: number,
    containerRect: DOMRect
) {
    const r = el.getBoundingClientRect()
    return {
        x: r.left + r.width / 2 - containerRect.left + edgeShiftX,
        y: r.top - containerRect.top + edgeShiftY,
    }
}

function getLefttMiddleEdge(
    el: HTMLElement,
    edgeShiftX: number,
    edgeShiftY: number,
    containerRect: DOMRect
) {
    const elementCords = el.getBoundingClientRect()
    return {
        x: elementCords.left - containerRect.left + edgeShiftX,
        y:
            elementCords.top +
            elementCords.height / 2 -
            containerRect.top +
            edgeShiftY,
    }
}

function getLefttBottomCorner(
    el: HTMLElement,
    edgeShiftX: number,
    edgeShiftY: number,
    containerRect: DOMRect
) {
    const elementCords = el.getBoundingClientRect()
    return {
        x: elementCords.left - containerRect.left + edgeShiftX,
        y:
            elementCords.top +
            elementCords.height -
            containerRect.top +
            edgeShiftY,
    }
}

function getRightMiddleEdge(
    el: HTMLElement,
    edgeShiftX: number,
    edgeShiftY: number,
    containerRect: DOMRect
) {
    const elementCords = el.getBoundingClientRect()
    return {
        x:
            elementCords.left +
            elementCords.width -
            containerRect.left +
            edgeShiftX,
        y:
            elementCords.top +
            elementCords.height / 2 -
            containerRect.top +
            edgeShiftY,
    }
}

function getEndUpperRightEdge(
    el: HTMLElement,
    edgeShiftX: number,
    edgeShiftY: number,
    containerRect: DOMRect
) {
    const elementCords = el.getBoundingClientRect()
    return {
        x:
            elementCords.right -
            elementCords.right * 0.1 -
            containerRect.left +
            edgeShiftX,
        y: elementCords.top - containerRect.top + edgeShiftY,
    }
}

function getMiddleBottomEdge(
    el: HTMLElement,
    edgeShiftX: number,
    edgeShiftY: number,
    containerRect: DOMRect
) {
    const elementCords = el.getBoundingClientRect()
    return {
        x:
            elementCords.right -
            elementCords.width / 2 -
            containerRect.left +
            edgeShiftX,
        y: elementCords.bottom - containerRect.top + edgeShiftY,
    }
}

function getBottomRightEdge(
    el: HTMLElement,
    edgeShiftX: number,
    edgeShiftY: number,
    containerRect: DOMRect
) {
    const elementCords = el.getBoundingClientRect()
    return {
        x: elementCords.right - 40 - containerRect.left + edgeShiftX,
        y: elementCords.bottom - containerRect.top + edgeShiftY,
    }
}

function getLeftBottomCorner(
    el: HTMLElement,
    edgeShiftX: number,
    edgeShiftY: number,
    containerRect: DOMRect
) {
    const elementCords = el.getBoundingClientRect()
    return {
        x: elementCords.left - containerRect.left + edgeShiftX + edgeShiftX,
        y:
            elementCords.top +
            elementCords.height -
            containerRect.top +
            edgeShiftY,
    }
}

function getLeftUpperCorner(
    el: HTMLElement,
    edgeShiftX: number,
    edgeShiftY: number,
    containerRect: DOMRect
) {
    const elementCords = el.getBoundingClientRect()
    return {
        x: elementCords.left - containerRect.left + edgeShiftX + edgeShiftX,
        y: elementCords.top - containerRect.top + edgeShiftY,
    }
}

const positionFunctions = {
    getCenter,
    getUpperCenter,
    getLefttMiddleEdge,
    getRightMiddleEdge,
    getEndUpperRightEdge,
    getMiddleBottomEdge,
    getBottomRightEdge,
    getLeftBottomCorner,
    getLefttBottomCorner,
    getLeftUpperCorner,
}

export default function DashedLine({
    fromId,
    toId,
    startFn,
    endFn,
    curveDistX1 = 2,
    curveDistY1 = 2,
    curveDistX2 = 2,
    curveDistY2 = 2,
    edgeShiftXStart = 0,
    edgeShiftYStart = 0,
    edgeShiftXEnd = 0,
    edgeShiftYEnd = 0,
    color = '#ffd600',
}: DashedLineProps) {
    const pathRef = useRef(null)
    const svgRef = useRef(null)
    const [d, setD] = useState('')

    useEffect(() => {
        function update() {
            const fromEl = document.getElementById(fromId)
            const toEl = document.getElementById(toId)
            const svgEl = svgRef.current
            if (!fromEl || !toEl || !svgEl) return

            const svgRect = svgEl.getBoundingClientRect()
            const containerRect = { left: svgRect.left, top: svgRect.top }

            const a = positionFunctions[startFn](
                fromEl,
                edgeShiftXStart,
                edgeShiftYStart,
                containerRect
            )
            const b = positionFunctions[endFn](
                toEl,
                edgeShiftXEnd,
                edgeShiftYEnd,
                containerRect
            )

            const cx1 = (a.x + b.x) / curveDistX1
            const cy1 = (a.y + b.y) / curveDistY1

            const cx2 = (a.x + b.x) / curveDistX2
            const cy2 = (a.y + b.y) / curveDistY2

            setD(`M ${a.x} ${a.y} C ${cx1} ${cy1} ${cx2} ${cy2} ${b.x} ${b.y}`)
        }
        update()
        window.addEventListener('resize', update)
        window.addEventListener('scroll', update)
        return () => {
            window.removeEventListener('resize', update)
            window.removeEventListener('scroll', update)
        }
    }, [
        fromId,
        toId,
        startFn,
        endFn,
        curveDistX1,
        curveDistY1,
        curveDistX2,
        curveDistY2,
        edgeShiftXStart,
        edgeShiftYStart,
        edgeShiftXEnd,
        edgeShiftYEnd,
    ])

    return (
        <svg
            ref={svgRef}
            className="absolute inset-0 pointer-events-none overflow-visible"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <filter
                    id="wobble"
                    x="-40%"
                    y="-40%"
                    width="180%"
                    height="180%"
                >
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.8"
                        numOctaves="2"
                        stitchTiles="stitch"
                        result="turb"
                    />
                    <feDisplacementMap
                        in="SourceGraphic"
                        in2="turb"
                        scale="2"
                        xChannelSelector="R"
                        yChannelSelector="G"
                    />
                </filter>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="6" result="b" />
                    <feMerge>
                        <feMergeNode in="b" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            <motion.path
                ref={pathRef}
                d={d}
                fill="none"
                stroke={color}
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="12 8"
                animate={{ strokeDashoffset: [0, -20] }}
                transition={{
                    duration: 0,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />
        </svg>
    )
}
