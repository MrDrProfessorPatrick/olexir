import Image from 'next/image'
import { Lato } from 'next/font/google'

const lato = Lato({
    variable: '--font-lato',
    subsets: ['latin'],
    weight: ['100', '300', '400', '700', '900'],
})

export default function AboutUs() {
    return (
        <>
            <section className="relative w-full h-[397px] md:h-[496px] lg:h-[696px] 2xl:h-[803px]">
                <Image
                    src="/TeamHeroImg.webp"
                    alt="Svitlana the main scientist of the team"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 200px)"
                />
            </section>
            <div className="bg-[url('/caruselBg.png')] bg-cover bg-center">
                <p
                    className={`text-[18px] lg:text-[32px] font-light text-white fong-light text-center leading-8 ${lato.className} pt-13 pb-25 px-14`}
                >
                    Olexir was born in Switzerland, ETH Zurich, 2025, at the
                    intersection of food science, proteomics, material
                    engineering and sustainability. We use patented
                    protein-based encapsulation to structure liquid oils into
                    oleogels — solid-like materials, which unlock new
                    applications in cosmetics, nutrition and health.
                </p>
                <div className="px-4 lg:px-15">
                    <h1
                        className={`${lato.className} text-[24px] lg:text-[48px] text-center text-[#D8AE02]`}
                    >
                        OUR MISSION
                    </h1>
                    <p
                        className={`text-white text-[16px] lg:text-[24px] text-center ${lato.className}`}
                    >
                        We transform fluid lipids into high-performance,
                        sustainable solid materials — improving bioactive
                        delivery, enhancing product stability and creating new
                        value for beauty and food manufacturers.
                    </p>
                    <div
                        className="flex flex-col lg:flex-row w-full mt-20 rounded-md
                                  min-h-[337px]
                                  lg:py-6
                                  gap-[20px]
                                "
                    >
                        {[
                            {
                                img: '/teamArrowUpIcon.png',
                                text: (
                                    <>
                                        <span className="font-bold text-[24px] lg:text-[28px]">
                                            Excellence & Innovation
                                        </span>{' '}
                                        <br className="inline" /> Our platform
                                        stabilizes PUFA-rich oils, protects
                                        sensitive bioactives and enhances
                                        bioavailability of hydrophobic
                                        bioactives
                                    </>
                                ),
                            },
                            {
                                img: '/teamHertIcon.png',
                                text: (
                                    <>
                                        <span className="font-bold text-[24px] lg:text-[28px]">
                                            Sustainability & Responsibility
                                        </span>{' '}
                                        <br className="inline" /> Plant-based,
                                        clean-label and affordable solutions
                                        that replace tropical, animal fats and
                                        synthetic stabilizers
                                    </>
                                ),
                            },
                            {
                                img: '/teamFlashIcon.png',
                                text: (
                                    <>
                                        <span className="font-bold text-[24px] lg:text-[28px]">
                                            Impact & Scalability
                                        </span>{' '}
                                        <br className="inline" /> Applicable
                                        across cosmetics, food and health with
                                        strong IP protection and industrial
                                        scalability
                                    </>
                                ),
                            },
                        ].map(({ img, text }, i) => (
                            <div
                                key={i}
                                className="flex flex-[1_1_0] flex-col justify-center items-center py-10
                                     bg-white/10 backdrop-blur-[2px] 
                                     before:content-[''] before:absolute before:inset-0 
                                     before:rounded-md before:border before:border-white/20 
                                    "
                            >
                                <div
                                    className={`text-[100px] h-[60px] font-light text-white ${lato.className}`}
                                >
                                    <Image
                                        src={img}
                                        width={50}
                                        height={50}
                                        alt="icon"
                                    />
                                </div>
                                <div
                                    className={`flex px-8 lg:px-5 w-full h-[160px] text-[16px] text-center justify-center font-light text-white ${lato.className}`}
                                >
                                    <p>{text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="py-5 lg:py-15">
                        <h2
                            className={`${lato.className} text-[24px] lg:text-[48px] text-center text-[#D8AE02]`}
                        >
                            OUR VISION
                        </h2>
                        <p
                            className={`text-white text-[16px] lg:text-[24px] text-center ${lato.className}`}
                        >
                            To lead the global shift from fossil and animal fats
                            to high-performance plant oils
                        </p>
                    </div>
                    <div className="py-5 lg:py-15">
                        <h2
                            className={`${lato.className} text-[24px] lg:text-[48px] text-center text-[#D8AE02]`}
                        >
                            TEAM
                        </h2>
                        <div className="flex flex-row justify-center gap-5">
                            {[
                                { img: '/Svitlana.webp' },
                                { img: '/Laura.webp' },
                                { img: '/Patrick.webp' },
                                { img: '/Rafaelle.webp' },
                            ].map(({ img }) => (
                                <div
                                    key={img}
                                    className="justify-center items-center py-10
                                     bg-white/18 backdrop-blur-[2px] 
                                     before:content-[''] before:absolute before:inset-0 
                                     before:rounded-lg before:border before:border-white/15"
                                >
                                    <Image
                                        src={img}
                                        width={317}
                                        height={50}
                                        alt={img}
                                    />
                                    <div
                                        className="absolute bottom-[0px] w-full h-[100px]
                                     bg-black/20 backdrop-blur-[50px] 
                                     before:content-[''] before:absolute before:inset-0 
                                     before:rounded-lg before:border before:border-white/20"
                                    ></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
