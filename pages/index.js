import Head from 'next/head'
import News from '../components/news'
import Excellence from '../components/excellence'
import Footer from '../components/footer'
import Banner from '../components/banner'

function Home({data}) {
    return (
        <div>
            <Head>
                <title>Ms News - Create Using Next JS </title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Banner/>
            <div className="flex bg-gray-200 lg:px-12 py-5">
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