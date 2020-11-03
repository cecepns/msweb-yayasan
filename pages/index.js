import Head from 'next/head'
// import HomePage from './component/home/home'
import style from './news.module.scss'

function Home({data}) {
    // console.log(data)
    return (
        <div>
            <Head>
                <title>CepyKun - Website created using Next Js</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className="flex bg-gray-200 px-12">
                <div className="flex flex-wrap justify-center lg:justify-between">
                    {data.map(item => {

                        let isi = item.isi_berita;
                        if (isi.length > 100) {
                            isi = isi.substr(0, 100) + '[...]'
                        }

                        return <div key={item.id} className={style.wrapper}>
                            <div className={style.imgWrap}>
                                <img
                                    src={`https://marifatussalaam.org/assets/berita/${item.image}`}
                                    alt="tidak di temukan"></img>
                            </div>
                            <div className={style.body}>
                                <p className={style.title}>
                                    {item.judul_berita}
                                </p>

                                <div
                                    dangerouslySetInnerHTML={{
                                    __html: isi
                                }}
                                    className={style.desc}/>
                            </div>
                        </div>

                    })
}
                </div>
            </div>

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