import News from '../components/news'
import Excellence from '../components/excellence'
import Banner from '../components/banner'
import AboutUs from '../components/aboutUs'

function Home({posts}) {

    return (
        <div>
           
            <Banner/>
            <AboutUs/>

            <News news={posts}/>

            <Excellence/>

        </div>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`https://adminwp.marifatussalaam.org/wp-json/wp/v2/posts?per_page=6`)
    const data = await res.json()
    const posts = data
    return {
        props: {
            posts
        }, // will be passed to the page component as props
    }
}

export default Home