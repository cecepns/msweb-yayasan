import style from './news.module.scss'
import {useRouter} from 'next/router'
// import Link from 'next/link'

function News({news}) {

    const router = useRouter();

    return (
        <div className="bg-gray-200 lg:px-12 py-5">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:text-center">
                {/* <p
                    className="text-md leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Terdepan menjadi generasi berkarakter Qurani</p> */}
                <h3
                    className="mt-2 text-3xl tracking-wide leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                    Berita Terbaru
                </h3>
                <p
                    className="my-4 max-w-2xl font-light text-lg leading-7 text-black-500 opacity-75 lg:mx-auto">
                    Simak terus kegiatan santri SMP AL-Qur'an Ma'rifatussalaam Quranic Boarding
                    School yang seru, inovatif dan menyenangkan.
                </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-between">
                {news
                // .sort((a, b) => {
                //     return new Date(b.tanggal_berita) - new Date(a.tanggal_berita);
                // })
                //     .slice(0, 6)
                    .map(item => {

                        let isi = item.content;
                        if (isi.length > 100) {
                            isi = isi.substr(0, 100) + '[...]'
                        }
                        let datePart = item
                                .date
                                .match(/\d+/g),
                            monthInd = [
                                "",
                                "Januari",
                                "Februari",
                                "Maret",
                                "April",
                                "Mei",
                                "Juni",
                                "Juli",
                                "Agustus",
                                "September",
                                "Oktober",
                                "November",
                                "Desember"
                            ],
                            year = datePart[0],
                            month = parseInt(datePart[1]),
                            newMonth = monthInd[month],
                            day = datePart[2];

                        let ValueTgl = day + '/' + newMonth + '/' + year

                        return <div key={item.ID} className={style.wrapper}>
                            <div className={style.imgWrap}>
                                 <img
                                    src={`${item.post_thumbnail.URL}`}
                                    alt="afwan tidak ada thumbnail :)"></img>
                                <p className={style.date}>
                                    {ValueTgl}
                                </p>
                            </div>
                            <div className={style.body}>
                                <p className={style.title}>
                                    {item.title}
                                </p>

                                <div
                                    dangerouslySetInnerHTML={{
                                    __html: isi
                                }}
                                    className={style.desc}/>

                                {/* <Detail id={item.id} title={item.judul_berita.split(" ").join("-")}></Detail> */}

                                {/* <Link href="post/[id]" */}
                                <button
                                    className={style.btnDetails}
                                    onClick={() => router.push({
                                    asPath: 'post/id',
                                    pathname: `post/${item.slug}`,
                                })}>
                                    Lihat selengkapnya

                                </button>
                            </div>
                        </div>

                    })
}
            </div>
        </div>
    )
}


// function Detail(props) {
//     return (
        
//         <div>
//             <Link as={`/detail/${props.title}`} href={`post/detail?id=${props.id}`}>  
//             <a> Lihat selengkapnya </a>
//             </Link>
//         </div>
//     )
// }


export default News