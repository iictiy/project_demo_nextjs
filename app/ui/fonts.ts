import { Inter } from "next/font/google"


export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
    fallback: ['Helvetica', 'sans-serif'],
    //  weight: ['400', '700'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    // preload: true,
    // adjustFontFallback: true,
})