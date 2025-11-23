import Image from 'next/image'

import DashedLine from '@/components/DashedLine'
import BgVideo from '@/components/BgVideo'
import RoundTabs from '@/components/RoundTabs'
import Carusel from '@/components/Carusel'
import { Lato } from 'next/font/google'

const lato = Lato({
    variable: '--font-lato',
    subsets: ['latin'],
    weight: ['100', '300', '400', '700', '900'],
    style: ['normal', 'italic'],
})

export default function Applications() {
    const cosmeticCarusel = [
        {
            src: '/ApplicationCarusel1_1.webp',
            index: 0,
            text: '',
        },
        {
            src: '/ApplicationCarusel1_2.webp',
            index: 1,
            text: '',
        },
        {
            src: '/ApplicationCarusel1_3.webp',
            index: 2,
            text: '',
        },
    ]

    const foodCarusel = [
        {
            src: '/foodCarusel1.webp',
            index: 0,
            text: '',
        },
        {
            src: '/foodCarusel2.webp',
            index: 1,
            text: '',
        },
        {
            src: '/foodCarusel3.webp',
            index: 2,
            text: '',
        },
    ]

    let firstTabText = [
        { text: 'skincare creams & gels', id: 'firstTab' },
        { text: 'Serums & masks', id: 'secondTab' },
        { text: 'Sunscreens & after-sun care', id: 'thirdTab' },
        { text: 'Scalp & hair treatments', id: 'fourthTab' },
    ]

    let secondTabText = [
        { text: 'plant-based food alternatives', id: 'firstTab2' },
        { text: 'nutraceutical & functional foods', id: 'secondTab2' },
        { text: 'shelf-stable omega-3 fortified foods', id: 'thirdTab2' },
    ]

    let wellnessTabText = [
        { text: 'nutritional supplements', id: 'firstTab3' },
        { text: 'functional wellness products', id: 'secondTab3' },
        { text: 'transdermal/patch reservoirs', id: 'thirdTab3' },
    ]

    return (
        <div id="container">
            <section className="relative w-full h-[397px] md:h-[496px] lg:h-[696px] 2xl:h-[803px]">
                <Image
                    src="/Application_1_gelAndFlower.png"
                    alt="Image showing gel and flower"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 200px)"
                />
            </section>
            <div>
                <section className="bg-[url('/ApplicationCosmeticsBG.png')] bg-repeat-y bg-center bg-[length:100%_auto]">
                    <div className="flex center justify-center pl-4 lg:pl-8 pr-4 lg:pr-8 lg:pl-35 lg:pr-35 pt-15 pb-7 lg:pb-15">
                        <p
                            className={`text-white text-[22px] lg:text-[32px] text-center ${lato.className}`}
                        >
                            By structuring natural oils into solid, functional
                            and stable forms, we provide solutions that are
                            healthier, more sustainable and scientifically
                            advanced
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5 justify-between pt-1 lg:pt-17 pb-5 lg:pb-15 pl-5 pr-5 lg:pl-16 lg:pr-16">
                        <div>
                            <h1
                                className={`text-white text-[26px] lg:text-[48px] font-medium ${lato.className}`}
                            >
                                COSMETICS
                            </h1>
                        </div>
                        <div>
                            <p
                                className={`max-w-[730px] text-white ${lato.className} text-[16px] lg:text-[24px] text-justify`}
                            >
                                At Olexir, we transform plant oils into new
                                solid textures using the natural structuring
                                power of proteins. Our oleogels create
                                translucent, silky and stable formulations that
                                redefine how oils perform in beauty care.
                            </p>
                        </div>
                    </div>
                    <BgVideo
                        link="/ApplicationFirstVideo.mp4"
                        poster={'/applicationPoster1.webp'}
                        height="600px"
                    />

                    <div
                        className={`text-white pt-8 lg:pt-17 pb-6 lg:pb-16 pl-10 pr-5 lg:pl-16 lg:pr-16 ${lato.className}`}
                    >
                        <h2
                            className={`${lato.className} text-[32px] font-light`}
                        >
                            Why it matters
                        </h2>
                        <ul
                            className={`${lato.className} list-disc marker:text-[#AB808D] text-[16px] md:text-[24px]`}
                        >
                            <li>
                                <span className="text-[#AB808D]">
                                    Luxurious feel
                                </span>{' '}
                                – Non-greasy, fast-absorbing and silky smooth on
                                skin.
                            </li>
                            <li>
                                <span className="text-[#AB808D]">
                                    Vegan & cruelty-free
                                </span>{' '}
                                – 100% plant-based, no silicones, no mineral
                                oils.
                            </li>
                            <li>
                                <span className="text-[#AB808D]">
                                    Moisturising & protective
                                </span>{' '}
                                – Locks in hydration and enhances the
                                performance of active ingredients.
                            </li>
                            <li>
                                <span className="text-[#AB808D]">
                                    Clean label stability
                                </span>{' '}
                                – Stabilises sensitive plant oils (rich in
                                PUFAs, antioxidants) against oxidation,
                                prolonging shelf life naturally.
                            </li>
                            <li>
                                <span className="text-[#AB808D]">
                                    Future-ready platform
                                </span>{' '}
                                – Carrier for a wide range of natural actives
                                (e.g. vitamins, polyphenols), enabling
                                next-generation cosmeceuticals.
                            </li>
                        </ul>
                        <div className="mt-5 lg:mt-15">
                            <RoundTabs
                                tabText={firstTabText}
                                lineColor="#AB808D"
                            />
                        </div>
                    </div>
                    <BgVideo
                        link="/ApplicationVideo2.mp4"
                        poster={'/applicationPoster2.webp'}
                        height="534px"
                    />
                    <Carusel images={cosmeticCarusel} isBigCarousel={false} />
                    <div id="cosmeticLineContainer">
                        <DashedLine
                            fromId="cosmeticLineContainer"
                            toId="cosmeticLineContainer"
                            startFn="getLefttMiddleEdge"
                            endFn="getRightMiddleEdge"
                            curveDistX1={2}
                            curveDistY1={2}
                            curveDistX2={2}
                            curveDistY2={2}
                            color="#AB808D"
                        />
                    </div>
                </section>
                <section className="bg-[url('/ApplicationFoodBG.png')] bg-repeat-y bg-center bg-[length:100%_auto]">
                    <div className="flex flex-col md:flex-row gap-5 justify-between pt-17 pb-20 pl-5 pr-5 lg:pl-16 lg:pr-16">
                        <div>
                            <h1
                                className={`text-white text-[26px] lg:text-[48px] font-medium ${lato.className}`}
                            >
                                FOOD
                            </h1>
                        </div>
                        <div>
                            <p
                                className={`max-w-[730px] text-white ${lato.className} text-[16px] lg:text-[24px] text-justify`}
                            >
                                Olexir’s oleogelation platform structures
                                polyunsaturated-rich oils into solid-like
                                matrices using plant proteins. This enables
                                healthier fat systems and mimic the
                                functionality of saturated and hydrogenated fats
                                — without compromising texture, stability or
                                performance.
                            </p>
                        </div>
                    </div>
                    <section className="relative w-full h-[397px] md:h-[496px] lg:h-[503px]">
                        <Image
                            src="/applicationFood1.webp"
                            alt="scientists making food"
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 200px)"
                        />
                    </section>

                    <div
                        className={`text-white pt-8 lg:pt-17 pb-8 lg:pb-20 pl-10 pr-5 lg:pl-16 lg:pr-16 ${lato.className}`}
                    >
                        <h2
                            className={`${lato.className} text-[32px] font-light`}
                        >
                            Why it matters
                        </h2>
                        <ul
                            className={`${lato.className} list-disc marker:text-[#D8AE02] text-[16px] md:text-[24px]`}
                        >
                            <li>
                                <span className="text-[#D8AE02]">
                                    Nutritional upgrade
                                </span>{' '}
                                – Replaces saturated and trans fats with
                                PUFA-rich oils.
                            </li>
                            <li>
                                <span className="text-[#D8AE02]">
                                    Oxidative stability
                                </span>{' '}
                                – Helps improve stability of omega-rich oils,
                                extending shelf life.
                            </li>
                            <li>
                                <span className="text-[#D8AE02]">
                                    Textural control
                                </span>{' '}
                                – Tunable firmness, spreadability and melting
                                points for precise product design.
                            </li>
                            <li>
                                <span className="text-[#D8AE02]">
                                    Process compatibility
                                </span>{' '}
                                – Adaptable to standard food manufacturing
                                equipment.
                            </li>
                            <li>
                                <span className="text-[#D8AE02]">
                                    Clean-label & sustainable
                                </span>{' '}
                                – 100% plant-derived proteins and oils; aligns
                                with global health & sustainability goals.
                            </li>
                        </ul>
                    </div>

                    <section className="relative w-full h-[397px] md:h-[496px] lg:h-[503px]">
                        <Image
                            src="/ApplicationFood2.webp"
                            alt="hand holding oleogel"
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 200px)"
                        />
                    </section>
                    <div className="mt-8 lg:mt-20 mb-5">
                        <RoundTabs
                            tabText={secondTabText}
                            lineColor="#D8AE02"
                        />
                    </div>
                    <Carusel images={foodCarusel} isBigCarousel={false} />
                    <p
                        className={`text-white ${lato.className} text-[16px] lg:text-[24px] text-center pb-10 px-2 xs:px-4`}
                    >
                        To solve the problem for lactose-intolerant, health- and
                        eco-conscious people, we offer O-mega cheese. This is
                        the first tasty and healthy vegan cheese, rich in
                        omega-3 fats. We use plant proteins to gently
                        encapsulate flaxseed oil into the oleogel. It’s
                        eco-friendly and packed with healthy fats and essential
                        amino acids.
                    </p>
                    <div id="foodLineContainer">
                        <DashedLine
                            fromId="foodLineContainer"
                            toId="foodLineContainer"
                            startFn="getLefttMiddleEdge"
                            endFn="getRightMiddleEdge"
                            curveDistX1={2}
                            curveDistY1={2}
                            curveDistX2={2}
                            curveDistY2={2}
                            color="#D8AE02"
                        />
                    </div>
                </section>
                <section className="bg-[url('/ApplicationHealthBG.png')] bg-repeat-y bg-center bg-[length:100%_auto]">
                    <div className="flex flex-col md:flex-row gap-5 justify-between pt-8 lg:pt-30 pb-8 lg:pb-15 pl-5 pr-5 lg:pl-16 lg:pr-16">
                        <div>
                            <h1
                                className={`text-white font-light text-[22px] lg:text-[30px] xl:text-[48px] font-medium ${lato.className}`}
                            >
                                Future Applications – <br />{' '}
                                <span className="text-[#679BE8]">
                                    Wellness & Health*
                                </span>
                            </h1>
                        </div>
                        <div>
                            <p
                                className={`md:max-w-[500px] lg:max-w-[590px] text-white ${lato.className} text-[16px] lg:text-[24px] text-justify`}
                            >
                                At Olexir, we see oleogels not only transforming
                                beauty and food, but also opening opportunities
                                in wellness and nutraceuticals. By structuring
                                natural oils into stable, solid carriers, we can
                                protect and deliver sensitive bioactive
                                compounds.
                            </p>
                        </div>
                    </div>
                    <div className="mb-5 mb-8 lg:mb-15">
                        <RoundTabs
                            tabText={wellnessTabText}
                            lineColor="#679BE8"
                        />
                    </div>
                    <section className="relative w-full h-[397px] md:h-[496px] lg:h-[503px]">
                        <Image
                            src="/ApplicationHealthImage.webp"
                            alt="oleoglel health"
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 200px)"
                        />
                    </section>
                    <div
                        className={`text-white pt-8 lg:pt-17 pb-8 lg:pb-20 pl-10 pr-5 lg:pl-16 lg:pr-16 ${lato.className}`}
                    >
                        <h2
                            className={`${lato.className} text-[32px] font-light`}
                        >
                            Why it matters
                        </h2>
                        <ul
                            className={`${lato.className} list-disc marker:text-[#679BE8] text-[16px] md:text-[24px]`}
                        >
                            <li>
                                <span className="text-[#679BE8]">
                                    Natural carriers
                                </span>{' '}
                                – 100% plant-based and clean-label.
                            </li>
                            <li>
                                <span className="text-[#679BE8]">
                                    Stability
                                </span>{' '}
                                – Helps preserve sensitive oils and bioactives.
                            </li>
                            <li>
                                <span className="text-[#679BE8]">
                                    Wellness potential
                                </span>{' '}
                                – Designed to support the delivery of natural
                                actives.
                            </li>
                        </ul>
                    </div>
                    <p
                        className={`text-white italic  ${lato.className} text-[16px] lg:text-[24px] pb-12 pl-5 lg:pb-25 lg:pl-10 pr-5`}
                    >
                        *These applications are part of ongoing research and
                        collaborations, with results to be shared as they
                        mature.
                    </p>
                </section>
            </div>
        </div>
    )
}
