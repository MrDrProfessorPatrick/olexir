import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface AnimatedNumberProps {
    value: number
    duration?: number
    className?: string
}

export default function AnimatedNumber({
    value,
    duration,
    className = '',
}: AnimatedNumberProps) {
    const { ref, inView } = useInView({ triggerOnce: false })
    const [finalValue] = useState(value)
    const count = useMotionValue(0)
    const rounded = useTransform(count, (latest) => Math.round(latest))
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        if (inView) {
            const controls = animate(count, finalValue, {
                duration: duration || 2,
                ease: 'easeOut',
            })
            return controls.stop
        }
    }, [inView, count, finalValue])

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <span className={className}>0</span>
    }

    return (
        <span ref={ref} className={className}>
            <motion.span>{rounded}</motion.span>
        </span>
    )
}
