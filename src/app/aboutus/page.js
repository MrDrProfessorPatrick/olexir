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
                    alt="Svitlana main scientist of the team"
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
                <div className="px-15">
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
                        className="flex flex-col md:flex-row w-full mt-20 rounded-md
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
                                        Excellence & Innovation{' '}
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
                                        Sustainability & Responsibility{' '}
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
                                        Impact & Scalability{' '}
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
                                className="flex flex-[1_1_0] flex-col justify-center items-center py-15
                                 
                                     bg-white/10 backdrop-blur-[2px] 
                                     before:content-[''] before:absolute before:inset-0 
                                     before:rounded-md before:border before:border-white/20 
                                    "
                            >
                                <div
                                    className={`text-[100px] font-light text-white ${lato.className}`}
                                >
                                    <Image
                                        src={img}
                                        width={50}
                                        height={50}
                                        alt="icon"
                                    />
                                </div>
                                <div
                                    className={`px-10 mt-4 w-full text-[22px] sm:text-[22px] md:text-[18px] lg:text-[20px] 
                                        text-center font-light text-white ${lato.className}`}
                                >
                                    <p>{text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
