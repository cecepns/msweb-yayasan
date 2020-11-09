import '../styles/globals.css'
import '../styles/index.css'
import Navbar from '../components/navbar'
// import '../styles/Home.module.css'

function MyApp({Component, pageProps}) {
    return <> <Navbar/> < Component {
        ...pageProps
    } /> </>
}

export default MyApp
