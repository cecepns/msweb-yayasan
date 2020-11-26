import '../styles/index.css'
import '../styles/globals.css'
import Navbar from '../components/navbar'
// import '../styles/Home.module.css'
import NextNprogress from 'nextjs-progressbar';
import Footer from '../components/footer'
import Head from 'next/head'


function MyApp({Component, pageProps}) {
    return <> 
     <Head>
                <title>SMP AL-QUR'AN MA'RIFATUSSALAAM (QURANIC BOARDING SCHOOL)
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
                <meta
                    property="og:site_name"
                    content="SMP AL-QUR'AN MA'RIFATUSSALAAM BOARDING SCHOOL SUBANG"/>
            </Head>

    <NextNprogress color="#e91e63" startPosition={0.3} stopDelayMs={200} height="3"/> 
    < Navbar /> 
    < Component {...pageProps } /> 
    <Footer/> 
    </>
}

export default MyApp
