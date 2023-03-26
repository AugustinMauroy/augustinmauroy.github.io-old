import { AppProps } from 'next/app';
import { Open_Sans } from 'next/font/google';
import Head from 'next/head';
import Layout from '@/components/Layout';
import '@/styles/globals.scss';

const font = Open_Sans({
    subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Augustin&apos;s Portfolio</title>
                <link rel="icon" type="image/x-icon" href="logo.ico" />
                <link rel="icon" type="image/xml-svg" href="logo.svg" />
                <meta name="description" content="Augustin's Portfolio" />
                <meta name="og:title" content="Augustin's Portfolio" />
            </Head>
            <div className={font.className}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </div>
        </>
    );
}
