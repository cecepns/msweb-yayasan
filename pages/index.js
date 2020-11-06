import Head from 'next/head'
import News from '../components/news'
import Excellence from '../components/excellence'
import Footer from '../components/footer'
import Banner from '../components/banner'
import AboutUs from '../components/aboutUs'

function Home({data}) {
    return (
        <div>
            <Head>
                <title>Ms News - Create Using Next JS
                </title>
                <link rel="icon" href="/favicon.ico"/>

                {/* meta tag */}
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

            {/* Website */}
            <Banner/>
            <AboutUs/>

            <div className="bg-gray-200 lg:px-12 py-5">
                <News news={data}/>
            </div>

            <Excellence/>
            <Footer/>

        </div>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`https://marifatussalaam.org/Rest_api`)
    const data = await res.json()
    return {
        props: {
            data
        }, // will be passed to the page component as props
    }
}

export default Home