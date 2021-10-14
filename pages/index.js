import News from '../components/news'
import Excellence from '../components/excellence'
import Banner from '../components/banner'
import AboutUs from '../components/aboutUs'
import VideoProfile from '../components/videoProfile'
import Testimoni from '../components/testimoni'
import Head from 'next/head'
// import Search from '../components/searchList'

function Home({posts}) {

    return (
        <div>

            <Head>
                <title>Ma'rifatussalaam Qur'anic Boarding School</title>
                <link rel="icon" href="/logo_sekolah.png"/>
                <meta name="description" content="Ma'rifatussalaam"></meta>

                <meta property="og:title" content="Ma'rifatussalaam"/>
            </Head>

            <Banner/>

            <AboutUs/>

            <News news={posts}/>

            <Excellence/>

            <Testimoni/> {/* <Search/> */}

        </div>
    )
}

export async function getStaticProps(context) {
    const res = await fetch(`https://adminwp.marifatussalaam.org/wp-json/wp/v2/posts?per_page=3`)
    const data = await res.json()
    const posts = data
    return {
        props: {
            posts
        }, // will be passed to the page component as props
        revalidate: 10
    }
}

export default Home