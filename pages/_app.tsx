import Header from '../components/header'
import Footer from '../components/footer'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
    return <>
    <Header />
    <Component {...pageProps} />
    <Footer />
    </>
}
