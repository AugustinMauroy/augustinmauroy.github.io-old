import Header from '../components/header'
import Footer from '../components/footer'
import type { AppProps } from 'next/app'
import mainStyle from '../styles/layout.module.css';
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (<>
        <head>
            <title>Augustin's Portfolio</title>
        </head>
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
