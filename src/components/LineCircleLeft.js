export default function LineCircleLeft({ top, width, rightEdge }) {
    const topValue = typeof top === 'object' ? top : { base: top }
    console.log('topValue:', topValue)
    return (
        <div
            style={{
                '--top-base': `${topValue.base}%`,
                '--top-xs': `${topValue.xs || topValue.base}%`,
                '--top-md': `${topValue.md || topValue.base}%`,
                '--top-lg': `${topValue.lg || topValue.md || topValue.base}%`,
                right: rightEdge || '0',
            }}
            className="hidden md:flex items-center absolute z-1000 
                 top-[var(--top-base)]
                 xs:top-[var(--top-xs)]
                 md:top-[var(--top-md)] 
                 lg:top-[var(--top-lg)]"
        >
            <div className="w-1 h-1 border-2 border-white bg-white rounded-full flex items-center justify-center"></div>
            <div
                style={{ width: `${width}px` }}
                className="h-[1px] bg-white"
            ></div>
        </div>
    )
}
