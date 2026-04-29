import '../styles/globals.css';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SITE_URL = 'https://mcs-uitzendbureau.nl';
const SITE_NAME = 'MCS Uitzendbureau';
const DEFAULT_DESCRIPTION =
  'MCS Uitzendbureau: uw partner voor uitzenden, detachering en werving & selectie. Persoonlijk, betrouwbaar en altijd bereikbaar.';
const OG_IMAGE = `${SITE_URL}/images/hero-medium.jpg`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="description" content={DEFAULT_DESCRIPTION} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={SITE_NAME} />
        <meta property="og:description" content={DEFAULT_DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={OG_IMAGE} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE_NAME} />
        <meta name="twitter:description" content={DEFAULT_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
