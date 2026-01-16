import Image from 'next/image'
import Script from 'next/script'

import { Lato } from 'next/font/google'
import Link from 'next/link'

const lato = Lato({
    variable: '--font-lato',
    subsets: ['latin'],
    weight: ['100', '300', '400', '700', '900'],
})

export default function AboutUs() {
    return (
        <>
            <section className="relative w-full h-[1200px] lg:h-[496px] lg:h-[696px] 2xl:h-[803px]">
                <Script
                    id="about-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@graph': [
                                {
                                    '@type': 'AboutPage',
                                    '@id': 'https://olexir.ch/about',
                                    name: 'About Olexir',
                                    url: 'https://olexir.ch/about',
                                    description:
                                        'Learn about Olexir, a Switzerland-born deep-tech startup developing protein-structured oleogels for food, cosmetics, and health applications.',
                                    isPartOf: {
                                        '@type': 'WebSite',
                                        name: 'Olexir',
                                        url: 'https://olexir.ch',
                                    },
                                    about: {
                                        '@type': 'Organization',
                                        name: 'Olexir',
                                    },
                                },
                                {
                                    '@type': 'Organization',
                                    '@id': 'https://olexir.ch/#organization',
                                    name: 'Olexir',
                                    foundingLocation: {
                                        '@type': 'Place',
                                        name: 'Zurich, Switzerland',
                                    },
                                    foundingDate: '2025',
                                    knowsAbout: [
                                        'Oleogels',
                                        'Protein Encapsulation',
                                        'Plant-Based Oils',
                                        'Sustainable Fat Alternatives',
                                        'Food & Cosmetic Innovation',
                                    ],
                                    mission:
                                        'Transform fluid lipids into high-performance, sustainable solid materials for beauty and food manufacturers.',
                                    vision: 'To lead the global shift from fossil and animal fats to high-performance plant oils.',
                                    member: [
                                        {
                                            '@type': 'Person',
                                            name: 'Dr. Svitlana Mykolenko',
                                            jobTitle: 'Founder & CEO',
                                            sameAs: 'https://www.linkedin.com/in/svitlana-mykolenko-6b705196/',
                                        },
                                        {
                                            '@type': 'Person',
                                            name: 'Dr. Laura Baraldi',
                                            jobTitle: 'Lipid Formulation Lead',
                                            sameAs: 'https://www.linkedin.com/in/laura-baraldi-06a082171/',
                                        },
                                        {
                                            '@type': 'Person',
                                            name: 'Patrick Ziemer',
                                            jobTitle: 'Marketing Assistant',
                                            sameAs: 'https://www.linkedin.com/in/patrick-ziemer-540381268/',
                                        },
                                        {
                                            '@type': 'Person',
                                            name: 'Prof. Raffaele Mezzenga',
                                            jobTitle: 'Scientific Adviser',
                                            sameAs: 'https://www.linkedin.com/in/raffaele-mezzenga-8bb5a82b4/',
                                        },
                                    ],
                                },
                            ],
                        }),
                    }}
                />

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
            <div id="container" className="">
                <p
                    className={`text-[18px] lg:text-[32px] font-light text-white fong-light text-center leading-8 ${lato.className} pt-13 pb-10 lg:pb-25 px-4 lg:px-14`}
                >
                    Olexir was born in Switzerland,{' '}
                    <Link
                        href="https://entrepreneurship.ethz.ch/startups-spinoffs/find-offers-programs-space-grants-for-entrepreneurs/pioneer-fellowship/current-fellows/20241/olexir.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:opacity-80"
                    >
                        ETH
                    </Link>{' '}
                    Zurich, 2025, at the intersection of food science,
                    proteomics, material engineering and sustainability. We use
                    patented protein-based encapsulation to structure liquid
                    oils into oleogels — solid-like materials, which unlock new
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
                                            Excellence & <br /> Innovation
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
                                            Sustainability & <br />{' '}
                                            Responsibility
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
                                            Impact & <br /> Scalability
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
                    <>
                        <h2
                            className={`${lato.className} text-[24px] lg:text-[48px] text-center text-[#D8AE02]`}
                        >
                            B2B BUSINESS MODEL
                        </h2>
                        {/* mobile */}
                        <div className="flex flex-col gap-4 justify-center items-center mt-12 tabular-nums lg:hidden">
                            <div
                                id="planProtein"
                                className={`w-full flex flex-col items-center justify-center border-1 border-solid border-white rounded-4xl text-[14px] text-white px-1 lg:px-6 xl:px-8 2xl:px-1 py-4 ${lato.className}`}
                            >
                                <h3
                                    className={`text-[14px] text-[22px] text-white px-1 lg:px-6 xl:px-8 2xl:px-1 py-4 ${lato.className}`}
                                >
                                    Co-paid formulation
                                </h3>
                                <span>Paid co-development</span>
                                <span>of partner-specific</span>
                                <span>formulations, license +</span>
                                <span>supply</span>
                            </div>

                            <div
                                id="secondPlanProtein"
                                className={`w-full flex flex-col items-center text-center justify-center border-1 border-solid border-white rounded-4xl text-[14px] text-white px-1 lg:px-6 xl:px-8 2xl:px-12 py-4 ${lato.className}`}
                            >
                                <h3
                                    className={`text-[14px] text-[22px] text-white px-1 lg:px-6 xl:px-8 2xl:px-1 py-4 ${lato.className}`}
                                >
                                    Licensing
                                </h3>
                                <span>License Olexir oleogel</span>
                                <span>IP to manufacturers</span>
                                <span>(upfront fee + royalty)</span>
                            </div>

                            <div
                                id="thirdPlanProtein"
                                className={`w-full flex flex-col text-center items-center border-1 border-solid border-white rounded-4xl text-[14px] text-white px-1 lg:px-6 xl:px-8 2xl:px-12 py-4 ${lato.className}`}
                            >
                                <h3
                                    className={`text-[14px] text-[22px] text-white px-1 lg:px-6 xl:px-8 2xl:px-1 py-4 ${lato.className}`}
                                >
                                    Oleogel sales (CMO)
                                </h3>
                                <span> Sell oleogel batch </span>
                                <span>produced by contract</span>
                                <span>
                                    manufacturer (per-kg <br /> margin)
                                </span>
                            </div>
                        </div>
                        {/* tablet and desktop */}
                        <div className="flex-row gap-8 lg:justify-around mt-12 hidden lg:flex tabular-nums">
                            <div
                                id="planProtein"
                                className={`w-full flex flex-col items-center border-1 border-solid border-white rounded-full md:rounded-4xl text-[14px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] text-white px-1 lg:px-6 xl:px-4 2xl:px-12 py-4 ${lato.className}`}
                            >
                                <h3
                                    className={`text-[24px] xl:text-[28px] text-white px-1 lg:px-1 xl:px-8 2xl:px-1 py-4 ${lato.className}`}
                                >
                                    Co-paid formulation
                                </h3>
                                <span>Paid co-development</span>
                                <span>of partner-specific</span>
                                <span>formulations, license +</span>
                                <span>supply</span>
                            </div>

                            <div
                                id="secondPlanProtein"
                                className={`w-full flex flex-col items-center border-1 border-solid border-white rounded-full md:rounded-4xl text-[14px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] text-white px-1 lg:px-6 xl:px-4 2xl:px-12 py-4 ${lato.className}`}
                            >
                                <h3
                                    className={`text-[24px] xl:text-[28px] text-white px-1 lg:px-1 xl:px-8 2xl:px-1 py-4 ${lato.className}`}
                                >
                                    Licensing
                                </h3>
                                <span>License Olexir oleogel</span>
                                <span>IP to manufacturers</span>
                                <span>(upfront fee + royalty)</span>
                            </div>

                            <div
                                id="thirdPlanProtein"
                                className={`w-full flex flex-col items-center border-1 border-solid border-white rounded-full md:rounded-4xl text-[14px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] text-white px-1 lg:px-6 xl:px-4 2xl:px-12 py-4 ${lato.className}`}
                            >
                                <h3
                                    className={`text-[24px] xl:text-[28px] text-white px-1 lg:px-1 xl:px-8 2xl:px-1 py-4 ${lato.className}`}
                                >
                                    Oleogel sales (CMO)
                                </h3>
                                <span>
                                    Sell oleogel batch
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                <span>produced by contract</span>
                                <span>
                                    manufacturer (per-kg <br /> margin)
                                </span>
                            </div>
                        </div>
                    </>
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
                                    img: '/Laura2.webp',
                                    name: 'Dr. Laura Baraldi',
                                    position: 'Lipid Formulation Lead',
                                    linkedin:
                                        'https://www.linkedin.com/in/laura-baraldi-06a082171/',
                                },
                                {
                                    img: '/Patrick2.webp',
                                    name: 'Patrick Ziemer',
                                    position: 'Marketing Assistant',
                                    linkedin:
                                        'https://www.linkedin.com/in/patrick-ziemer-540381268/',
                                },
                                {
                                    img: '/Rafaelle2.webp',
                                    name: 'Prof. Raffaele Mezzenga',
                                    position: 'Scientific Adviser',
                                    linkedin:
                                        'https://www.linkedin.com/in/raffaele-mezzenga-8bb5a82b4/',
                                },
                            ].map(({ img, name, position, linkedin }) => (
                                <div
                                    key={img}
                                    className="relative aspect-[0.703] justify-center items-center 
                                     bg-white/18 backdrop-blur-[50px] rounded-lg
                                     "
                                >
                                    <Image
                                        src={img}
                                        alt={name}
                                        width={317}
                                        height={449}
                                    />
                                    <div
                                        className="absolute bottom-0 left-0 w-full h-[100px] md:h-[60px] xl:h-[100px]  
                                        bg-gradient-to-b from-transparent via-gray-800/80 to-gray-900/95
                                        backdrop-blur-[10px] rounded-lg"
                                    >
                                        <div className="px-2 lg:px-4 pt-8 md:pt-2 xl:pt-8">
                                            <a
                                                href={linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <div className="flex flex-row justify-between">
                                                    <span
                                                        className={`font-bold text-[14px] md:text-[12px] lg:text-[14px] text-white ${lato.className}`}
                                                    >
                                                        {name}
                                                    </span>
                                                    <Image
                                                        src={
                                                            '/linkedinIcon.png'
                                                        }
                                                        width={20}
                                                        height={1}
                                                        alt={'linkeding'}
                                                    />
                                                </div>
                                            </a>
                                            <div>
                                                <span
                                                    className={`font-medium text-[14px] md:text-[12px] lg:text-[14px] text-[#D8AE02] ${lato.className}`}
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
