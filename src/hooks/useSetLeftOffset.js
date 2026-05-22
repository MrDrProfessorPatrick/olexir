import { useState, useEffect } from 'react'

export function useSetLeftOffset(containerRef) {
    const [leftOffset, setLeftOffset] = useState(0)

    useEffect(() => {
        function updateOffset() {
            if (containerRef.current) {
                setLeftOffset(containerRef.current.getBoundingClientRect().left)
            }
        }
        updateOffset()
        window.addEventListener('resize', updateOffset)
        return () => {
            window.removeEventListener('resize', updateOffset)
        }
    }, [])

    return leftOffset
}
