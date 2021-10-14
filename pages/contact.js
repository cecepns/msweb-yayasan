import ContactMs from '../components/contact'
import Socmed from '../components/socmed'
import Head from 'next/head'

function Contact() {
    return (
        <div className="bg-gray-200 lg:px-12 pt-20 pb-5 w-full h-full">
            <Head>
                <title>Kontak - Ma'rifatussalaam</title>
                <link rel="icon" href="/logo_sekolah.png"/>
                <meta name="description" content="Kontak - Ma'rifatussalaam"></meta>

                <meta property="og:title" content="Kontak - Ma'rifatussalaam"/>
            </Head>
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:text-center">
                <h3
                    className="mt-5 text-3xl tracking-wide leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                    Kontak
                </h3>
                <p
                    className="my-4 max-w-2xl font-light text-lg leading-7 text-black-500 opacity-75 lg:mx-auto">
                    Jam Layanan 08.00 - 16.000 WIB.
                </p>
            </div>

            <ContactMs/>
           
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:text-center">
                <h3
                    className="mt-8 text-3xl tracking-wide leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                    Social Media
                </h3>
                <p
                    className="my-4 max-w-2xl font-light text-lg leading-7 text-black-500 opacity-75 lg:mx-auto">
                    Berikut Social Media yang dimiliki Ma'rifatussalaam Qur'anic Boarding School.
                </p>
            </div>

            <Socmed/>

        </div>
    )
}

export default Contact