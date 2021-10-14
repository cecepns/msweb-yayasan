import Ekstrakurikuler from '../components/ekstrakurikuler'
import Head from 'next/head'

function Eskul() {
    return (
        <div className="bg-gray-200 lg:px-12 pt-20 pb-5 w-full h-full">
             <Head>
                <title>Ekstrakurikuler - Ma'rifatussalaam</title>
                <link rel="icon" href="/logo_sekolah.png"/>
                <meta name="description" content="Ekstrakurikuler - Ma'rifatussalaam"></meta>

                <meta property="og:title" content="Ekstrakurikuler - Ma'rifatussalaam"/>
            </Head>
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:text-center">
                <h3
                    className="mt-5 text-3xl tracking-wide leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                    Ekstrakurikuler
                </h3>
                <p
                    className="my-4 max-w-2xl font-light text-lg leading-7 text-black-500 opacity-75 lg:mx-auto">
                    Lebih dari 10 Ekstrakurikuler yang akan melatih Softskill mu di Ma'rifatussalaam Qur'anic Boarding School 
                </p>
            </div>

            <Ekstrakurikuler/>

        </div>
    )
}

export default Eskul