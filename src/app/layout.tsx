import Script from 'next/script'

import { ClerkProvider } from '@clerk/nextjs'

import { Geist } from 'next/font/google'
import { Lato } from 'next/font/google'

const lato = Lato({
    variable: '--font-lato',
    subsets: ['latin'],
    weight: ['100', '300', '400', '700', '900'],
})

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body
                    className={`${geistSans.variable} ${lato.variable} antialiased`}
                >
                    <Script
                        id="organization-schema"
                        type="application/ld+json"
                        strategy="beforeInteractive"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                '@context': 'https://schema.org',
                                '@type': 'Organization',
                                name: 'Olexir',
                                url: 'https://olexir.ch',
                                description:
                                    'Olexir develops protein-empowered fat alternatives and structured oleogels for food, cosmetic, and health applications.',
                                logo: 'https://olexir.ch/OlexirLogoBlackDiomondUnderI2.png',
                            }),
                        }}
                    />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}
