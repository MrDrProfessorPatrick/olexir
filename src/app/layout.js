import { Geist } from 'next/font/google'
import NavBar from '../components/NavBar'
import Bottom from '@/components/Bottom'
import './globals.css'
import { Lato } from 'next/font/google'
import PopupProvider from '@/components/PopUpProvider'
import ContactModal from '@/components/ContactModal'

const lato = Lato({
    variable: '--font-lato',
    subsets: ['latin'],
    weight: ['100', '300', '400', '700', '900'],
})

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

export const metadata = {
    title: 'Olexir',
    description: 'Olexir protein-empowered fat alternatives',

    openGraph: {
        title: 'Olexir',
        description: 'Olexir protein-empowered fat alternatives',
        url: 'https://olexir.ch',
        type: 'website',
        images: [
            {
                url: 'https://olexir.ch/GraphPreview.jpg',
                width: 1200,
                height: 630,
                alt: 'Olexir preview',
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Olexir',
        description: 'Olexir protein-empowered fat alternatives',
        images: ['https://olexir.ch/GraphPreview.jpg'],
    },

    icons: {
        icon: '/favicon.ico',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${lato.variable} antialiased`}
            >
                <PopupProvider>
                    <NavBar />
                    {children}
                    <Bottom />
                    <ContactModal />
                </PopupProvider>
            </body>
        </html>
    )
}
