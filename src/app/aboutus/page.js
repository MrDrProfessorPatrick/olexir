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
            <section className="relative w-full h-[1200px] lg:h-[496px] lg:h-[696px] 2xl:h-[803px]">
                {/* Mobile/Tablet Image (hidden on lg and up) */}
                <Image
                    src="/TeamHeroSmall.webp"
                    alt="Svitlana the main scientist of the team"
                    fill
                    className="object-cover lg:hidden"
                    priority
                    sizes="(max-width: 1023px) 100vw, 0px"
                />

                {/* Desktop Image (hidden below lg) */}
                <Image
                    src="/TeamHeroImg.webp"
                    alt="Svitlana the main scientist of the team"
                    fill
                    className="object-cover hidden lg:block"
                    priority
                    sizes="(min-width: 1024px) 100vw, 0px"
                />
            </section>
            <div className="bg-[url('/caruselBg.png')] bg-cover bg-center">
                <p
                    className={`text-[18px] lg:text-[32px] font-light text-white fong-light text-center leading-8 ${lato.className} pt-13 pb-10 lg:pb-25 px-4 lg:px-14`}
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
                        className="relative flex flex-col lg:flex-row w-full mt-8 lg:mt-20 rounded-md
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
                                    className={`relative text-[100px] h-[60px] font-light text-white ${lato.className}`}
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
                    <div className="py-5 lg:py-15 pb:10 lg:pb-30">
                        <h2
                            className={`${lato.className} text-[24px] lg:text-[48px] text-center text-[#D8AE02]`}
                        >
                            TEAM
                        </h2>
                        <div className="flex flex-col items-center md:flex-row md:justify-center gap-5 pt-5 pb-15">
                            {[
                                {
                                    img: '/Svitlana.webp',
                                    name: 'Dr. Svitlana Mykolenko',
                                    position: 'Founder, CEO',
                                    linkedin:
                                        'https://www.linkedin.com/in/svitlana-mykolenko-6b705196/',
                                },
                                {
                                    img: '/Laura.webp',
                                    name: 'Dr. Laura Baraldi',
                                    position: 'Lipid Formulation Lead',
                                    linkedin:
                                        'https://www.linkedin.com/in/laura-baraldi-06a082171/',
                                },
                                {
                                    img: '/Patrick.webp',
                                    name: 'Patrick Ziemer',
                                    position: 'Marketing Assistant',
                                    linkedin:
                                        'https://www.linkedin.com/in/patrick-ziemer-540381268/',
                                },
                                {
                                    img: '/Rafaelle.webp',
                                    name: 'Prof. Raffaele Mezzenga',
                                    position: 'Scientific Adviser',
                                    linkedin:
                                        'https://www.linkedin.com/in/raffaele-mezzenga-8bb5a82b4/',
                                },
                            ].map(({ img, name, position, linkedin }) => (
                                <div
                                    key={img}
                                    className="relative w-[310px] h-[450px] md:w-[210px] md:h-[280px] xl:w-[310px] xl:h-[450px] justify-center items-center 
                                     bg-white/18 backdrop-blur-[50px] rounded-lg
                                     "
                                >
                                    <Image src={img} alt={img} fill={true} />
                                    <div
                                        className="absolute bottom-0 left-0 w-full h-[100px] 
                                        bg-gradient-to-b from-transparent via-gray-800/80 to-gray-900/95
                                        backdrop-blur-[10px] rounded-lg"
                                    >
                                        <div className="px-2 lg:px-4 pt-8">
                                            <a
                                                href={linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <div className="flex flex-row justify-between">
                                                    <span
                                                        className={`font-bold text-[14px] text-white ${lato.className}`}
                                                    >
                                                        {name}
                                                    </span>
                                                    <Image
                                                        src={
                                                            '/linkedinIcon.png'
                                                        }
                                                        width={16}
                                                        height={10}
                                                        alt={'linkeding'}
                                                    />
                                                </div>
                                            </a>
                                            <div>
                                                <span
                                                    className={`font-medium text-[14px] lg:text-[18px] text-[#D8AE02] ${lato.className}`}
                                                >
                                                    {position}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
