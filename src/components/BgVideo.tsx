'use client'

interface BgVideoProps {
    link: string
    height?: string
    poster?: string
}

export default function BgVideo({ link, height, poster }: BgVideoProps) {
    return (
        <div className="relative">
            <div
                className="relative z-10 flex w-full"
                style={{ height: height || '696px' }}
            >
                <video
                    src={link}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    poster={poster}
                    className="absolute w-full h-full object-cover"
                />
            </div>
        </div>
    )
}
