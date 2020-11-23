import '../styles/index.css'
import '../styles/globals.css'
import Navbar from '../components/navbar'
// import '../styles/Home.module.css'
import NextNprogress from 'nextjs-progressbar';
import Footer from '../components/footer'

function MyApp({Component, pageProps}) {
    return <> 
    <NextNprogress color="#e91e63" startPosition={0.3} stopDelayMs={200} height="3"/> 
    < Navbar /> 
    < Component {...pageProps } /> 
    <Footer/> 
    </>
}

export default MyApp
