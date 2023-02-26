import { Open_Sans } from '@next/font/google';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Footer from '../components/footer';
import Header from '../components/header';
import '../styles/globals.scss';
import mainStyle from '../styles/layout.module.scss';

const font = Open_Sans({
    subsets: ['latin']
});

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
    <div className={font.className}>
        <Head>
            <title>Augustin&apos;s Portfolio</title>
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
    </div>
    );
};
