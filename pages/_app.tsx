import Header from '../components/header'
import Footer from '../components/footer'
import type { AppProps } from 'next/app'
import mainStyle from '../styles/layout.module.css';
import Head from 'next/head'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (<>
        <Head>
            <title>Augustin's Portfolio</title>
            <link rel="icon" type="image/x-icon" href="logo.ico" />
            <link rel="icon" type="image/xml-svg" href="logo.svg" />
            <meta name="description" content="Augustin's Portfolio" />
            <meta name="og:title" content="Augustin's Portfolio" />
        </Head>
        <div className={mainStyle.body}>
        <Header />
        <main className={mainStyle.main}>
            <Component {...pageProps} />
        </main>
        <Footer />
        </div>
    </>
    )
}
