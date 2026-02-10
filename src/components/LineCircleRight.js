export default function LineCircleRight({ top, width, leftEdge }) {
    const topValue = typeof top === 'object' ? top : { base: top }
    return (
        <div
            style={{
                '--top-base': `${topValue.base}%`,
                '--top-xs': `${topValue.xs || topValue.base}%`,
                '--top-md': `${topValue.md || topValue.base}%`,
                '--top-lg': `${topValue.lg || topValue.md || topValue.base}%`,
                left: leftEdge || '0',
            }}
            className="hidden md:flex items-center absolute z-1000 
                 top-[var(--top-base)]
                 xs:top-[var(--top-xs)] 
                 md:top-[var(--top-md)] 
                 lg:top-[var(--top-lg)]"
        >
            <div
                className={`h-[1px] bg-white/65`}
                style={{ width: `${width}px` }}
            ></div>
            <div className="w-1 h-1 border-2 border-white bg-white rounded-full flex items-center justify-center"></div>
        </div>
    )
}
