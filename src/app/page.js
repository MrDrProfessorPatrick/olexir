import HeroPage from '@/components/HeroPage'
import HomePageContent from '@/components/HomePageContent'
import CaruselHome from '@/components/CaruselHome'
import { Inter } from 'next/font/google'
import { Lato } from 'next/font/google'
import LineCircleRight from '../components/LineCircleRight'
import LineCircleLeft from '../components/LineCircleLeft'

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
    weight: ['100', '300', '400', '700', '900'],
})

const lato = Lato({
    variable: '--font-lato',
    subsets: ['latin'],
    weight: ['100', '300', '400', '700', '900'],
})

export default function Home() {
    const images = [
        {
            src: '/ProteinNanofibrils.webp',
            index: 0,
            text: 'Functionalised plant protein nanofibrils',
        },
        {
            src: '/CaruselHome1.webp',
            index: 1,
            text: 'Tea tree oleogel structured by potato proteins for cosmetic applications',
        },
        {
            src: '/CaruselHome2.webp',
            index: 2,
            text: 'Rapeseed oleogel structured by soy proteins for food applications',
        },
        {
            src: '/CaruselHome3.webp',
            index: 3,
            text: 'Rapeseed oleogel structured by pea proteins for food applications',
        },
        {
            src: '/CaruselHome5.webp',
            index: 4,
            text: 'MCT oleogel structured by amaranth proteins with colourant for cosmetic applications',
        },
        {
            src: '/CaruselHome4.jpg',
            index: 5,
            text: 'Flaxseed oleogel structured by flaxseed proteins for food applications',
        },
    ]

    return (
        <div className="">
            <main className="w-full h-full">
                <HeroPage />
                <div className="">
                    <div className="flex flex-col relative lg:flex-row w-full pb-25 pt-30 px-4 lg:px-10">
                        <div className="flex-4">
                            <h2 className="text-[40px] lg:text-[60px] font-medium text-white">
                                Amplify Oleosensation:
                            </h2>
                            <p className="text-[40px] font-medium text-white">
                                [Feel. Taste. Heal]
                            </p>
                        </div>
                        <div className="flex-3">
                            <p
                                className={`text-[18px] lg:text-[24px] font-normal text-white mt-10 lg:mt-0 ${inter.className}`}
                            >
                                At <span className="font-bold">Olexir</span> we
                                harness the power of plant proteins to
                                microencapsulate natural oils into next‑gen
                                functional oleogels.
                            </p>
                            <br />
                            <p
                                className={`text-[18px] lg:text-[24px] font-normal text-white mt-10 lg:mt-0 ${inter.className}`}
                            >
                                We boost bioavailability and stability of oils
                                for beauty, food and health – by employing
                                structured plant protein hydrolysates.
                            </p>
                        </div>
                        <LineCircleLeft top={100} width={70} />
                        <LineCircleRight top={100} width={70} />
                    </div>
                    <div className="flex justify-center pb-8 lg:pb-0">
                        <h2
                            className={`text-[18px] sm:text-[28px] lg:text-[32px] xl:text-[40px] px-4 text-center font-medium text-white ${lato.className}`}
                        >
                            Plant proteins turn liquid oils into solid oleogels
                        </h2>
                    </div>
                    <CaruselHome images={images} isBigCarousel={true} />
                    <HomePageContent />
                </div>
            </main>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
        </div>
    )
}
