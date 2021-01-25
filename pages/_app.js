import '../styles/index.css'
import '../styles/globals.css'
import Navbar from '../components/navbar'
import NextNprogress from 'nextjs-progressbar';
import Footer from '../components/footer'
import Head from 'next/head'


function MyApp({Component, pageProps}) {
    return <> 
     <Head>
                <title>YAYASAN MA'RIFATUSSALAAM (QURANIC BOARDING SCHOOL)
                </title>
                <link rel="icon" href="/logo_sekolah.png"/>
                <meta
                    name="description"
                    content="Ma'rifatussalaam Qur'anic Boarding School adalah sekolang Boarding School terbaik di subang"></meta>

                <meta property="og:locale" content="en_US"/>
                <meta property="og:type" content="website"/>
                <meta
                    property="og:title"
                    content="SMP AL-QUR'AN MA'RIFATUSSALAAM - TERDEPAN MENJADI SEKOLAH GENERASI BERKARAKTER QURANI"/>
                <meta
                    property="og:description"
                    content="SMP AL-Qur'an Ma'rifatussalaam adalah sekolah boarding terbaik di subang"/>
                <meta property="og:url" content="https://marifatussalaam.org/"/>
                <meta name="google-site-verification" content="yvqhaODts2WU2swOmyIziLY-q7A_6PI05PJjSOhIku0"/>
                <meta
                    property="og:site_name"
                    content="SMP AL-QUR'AN MA'RIFATUSSALAAM BOARDING SCHOOL SUBANG"/>
                    <meta name="google-site-verification" content="sxH3_hMu1xl9cWYaoq72sO2Uk23gLUB3gl4lo7Xw8mU" />
            </Head>

    <NextNprogress color="#e91e63" startPosition={0.3} stopDelayMs={200} height="3"/> 
    < Navbar /> 
    < Component {...pageProps } /> 
    <Footer/> 
    </>
}

export default MyApp
