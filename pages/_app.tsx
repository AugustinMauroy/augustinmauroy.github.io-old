import Header from '../components/header'
import Footer from '../components/footer'
import type { AppProps } from 'next/app'
import mainStyle from '../styles/layout.module.css';
import Head from 'next/head'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (<>
        <Head>
            <link rel="icon" href="/logo.ico" sizes="any" />
            <title>Augustin's Portfolio</title>
            <link rel="icon" href="/logo.svg" type="image/svg+xml" />
            <link rel="apple-touch-icon" href="/logo.svg" />
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
