import '@/styles/globals.scss';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '@/components/Layout';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Augustin .M&lsquo;s Website</title>
                <meta
                    name="description"
                    content="Augustin .M&lsquo;s Website"
                />
                <link rel="icon" href="/static/iconography/favicon.svg" />
                <link
                    rel="apple-touch-icon"
                    href="/static/iconography/favicon.svg"
                />
                <meta
                    property="og:image"
                    content="/static/iconography/card.png"
                />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta
                    property="og:title"
                    content="Augustin .M&lsquo;s Website"
                />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
