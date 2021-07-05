import News from '../components/news'
import Excellence from '../components/excellence'
import Banner from '../components/banner'
import AboutUs from '../components/aboutUs'
import VideoProfile from '../components/videoProfile'
import Testimoni from '../components/testimoni'
// import Search from '../components/searchList'

function Home({posts}) {

    return (
        <div>
           
            <Banner/>
    
            <AboutUs/>

            <News news={posts}/>

            <Excellence/>

            <Testimoni/>

            {/* <Search/> */}

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
        revalidate:10,
    }
}

export default Home