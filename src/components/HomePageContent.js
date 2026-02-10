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
            <div className="flex flex-col md:flex-row px-12 lg:px-18 items-left justify-center gap-[0px] md:gap-[60px] lg:gap-[137px]">
                <div className="flex-1 max-w-[800px]">
                    <div className="flex items-start pt-20 lg:pt-36 pb-10 absolute left-[2%] md:relative md:left-0 2xl:absolute  2xl:left-[6%] 2xl:pt-28">
                        <span
                            className={`text-[98px] lg:text-[142px] leading-[0] font-semibold text-white opacity-50 ${montserrat.className}`}
                        >
                            “
                        </span>
                    </div>

                    <p
                        className={`text-[18px] lg:text-[24px] text-white ${montserrat.className} pt-30 md:pt-0 2xl:pt-40`}
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

                    <div className="absolute right-[10px] mt-[80px] md:mt-0 md:relative md:flex md:justify-end md:pt-14 md:pb-10">
                        <span
                            className={`text-[98px] lg:text-[142px] leading-[0] font-semibold text-white opacity-50 ${montserrat.className}`}
                        >
                            ”
                        </span>
                    </div>
                </div>

                <div className="relative justify-left shrink-0 w-[235px] h-[257px] lg:w-[357px] lg:h-[394px] xl:w-[404px] xl:h-[442px] mt-10 md:mt-26 lg:mt-16">
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
