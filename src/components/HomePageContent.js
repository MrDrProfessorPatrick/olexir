import Image from 'next/image'
import Link from 'next/link'
import { Montserrat } from 'next/font/google'
import { Lato } from 'next/font/google'

const montserrat = Montserrat({
    variable: '--font-montserrat',
    subsets: ['latin'],
    weight: ['100', '300', '400', '700', '900'],
})

const lato = Lato({
    variable: '--font-lato',
    subsets: ['latin'],
    weight: ['100', '300', '400', '700', '900'],
})

export default function HomePageContent() {
    return (
        <div className="w-full">
            <div className="relative w-full h-[296px] sm:h-[496px]">
                <Image
                    src="/HomeImageSmall.png"
                    alt="svitlana scientist"
                    fill
                    className="object-cover sm:hidden"
                    priority
                    sizes="(max-width: 200px)"
                />
                <Image
                    src="/HomeImage1.png"
                    alt="home image 1"
                    fill
                    className="object-cover hidden sm:block"
                    priority
                    sizes="(max-width: 200px)"
                />
            </div>
            {/* Додаємо flex-col для мобільних, flex-row для десктопа та адаптивний gap */}
            <div className="flex flex-col lg:flex-row px-6 lg:px-18 items-center justify-center gap-[137px]">
                <div className="flex-1 max-w-[800px]">
                    <div className="flex items-start pt-10 lg:pt-36 pb-10">
                        <span
                            className={`text-[98px] lg:text-[142px] leading-[0] font-semibold text-white ${montserrat.className}`}
                        >
                            “
                        </span>
                    </div>

                    <p
                        className={`text-[18px] md:text-[24px] text-white ${montserrat.className}`}
                    >
                        Olexir emerged from{' '}
                        <Link
                            href="https://entrepreneurship.ethz.ch..."
                            target="_blank"
                            className="underline hover:opacity-80"
                        >
                            ETH
                        </Link>{' '}
                        Zurich with the support of the ETH Pioneer Fellowship.
                        We combine breakthroughs in food science, material
                        engineering and proteomics with a deep commitment to
                        sustainability. By using cutting-edge research we create
                        a new class of functional wellness materials and make
                        them available to the global market.
                    </p>

                    <p
                        className={`text-[18px] md:text-[24px] font-light text-white pt-10 ${lato.className}`}
                    >
                        — DR SVITLANA MYKOLENKO
                    </p>

                    {/* Права лапка */}
                    <div className="hidden lg:flex justify-end pt-14 pb-10">
                        <span
                            className={`text-[98px] lg:text-[142px] leading-[0] font-semibold text-white ${montserrat.className}`}
                        >
                            ”
                        </span>
                    </div>
                </div>

                {/* Контейнер для фото (flex-shrink-0 запобігає стисканню картинки) */}
                <div className="relative shrink-0 w-[222px] h-[254px] lg:w-[342px] lg:h-[374px] mt-10 lg:mt-26">
                    <Image
                        src="/svitlanaHomePage.png"
                        alt="svitlana scientist"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}
