import style from './news.module.scss'
import {useRouter} from 'next/router'
// import Link from 'next/link'

function News({news}) {

    const router = useRouter();

    console.log(news)

    return (
        <div className="bg-gray-200 lg:px-12 py-5">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:text-center">
  
                <h3
                    className="mt-2 text-3xl tracking-wide leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                    Berita Terbaru
                </h3>
                <p
                    className="my-4 max-w-2xl font-light text-lg leading-7 text-black-500 opacity-75 lg:mx-auto">
                    Simak berita yang menarik, bermanfaat dan seputar kegiatan santri.
                </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-between">
                {news
                // .sort((a, b) => {
                //     return new Date(b.tanggal_berita) - new Date(a.tanggal_berita);
                // })
                //     .slice(0, 6)
                    .map(item => {

                        let isi = item.content.rendered;
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

                        let ValueTgl = day + '/' + newMonth + '/' + year;
                        

                        return <div key={item.id} className={style.wrapper}>
                            <div className={style.imgWrap}>
                                 <img
                                    src={`${item.featured_image.size_full}`}
                                    alt="afwan tidak ada thumbnail :)"></img>
                                <p className={style.date}>
                                    {ValueTgl}
                                </p>
                            </div>
                            <div className={style.body}>

                            <p className="text-md mb-1 leading-6 text-indigo-600 font-semibold tracking-wide uppercase"> {item.category.map(name => {
                                return  name.name
                            }).join("/")} </p>

                                <p className={style.title}>
                                    {item.title.rendered}
                                </p>


                                <div
                                    dangerouslySetInnerHTML={{
                                    __html: isi
                                }}
                                    className={style.desc}/>

                               
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